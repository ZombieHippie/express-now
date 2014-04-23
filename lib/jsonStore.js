module.exports = createStore()

var fs = require("fs")

function createStore() {
    function JsonStore (options) {
        options = options || {}
        var filename = options.filename || "fileStore.json"
        var store = options.store
        if (store == null) {
            try {
                store = JSON.parse(fs.readSync(filename, "utf8"))
            } catch (e) {
                store = {}
            }
        }
        this._store = store
        this._filename = filename
    }
    JsonStore.prototype = {
        set: storeSet
        , get: storeGet
        , delete: storeDelete
        , save: storeSave
    }

    return JsonStore
}

function storeSave(cb) {
    console.log("saving")
    fs.writeFile(this._filename, JSON.stringify(this._store, 2, null), "utf8", cb)
}

function storeSet(key, value, cb) {
    this._store[key] = value
    this.save(cb)
}

function storeGet(key, cb) {
    if (key in this._store) {
        return cb(null, this._store[key])
    }
    cb(null, null)
}

function storeDelete(key, cb) {
    delete this._store[key]
    this.save(function (err) {
        if (err) cb(err)
        else cb(null, true)
    })
}