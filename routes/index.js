var express = require('express')
var router = express.Router()

module.exports = function (db) {
	/* GET home page. */
	router.get('/', function(req, res) {
		db.get('page-views', function(err, views) {
			var newViews = parseInt(views || 0) + 1
			db.set('page-views', newViews, function(err) {
				res.render('index', { title: 'Express', pageViews: (err?err:newViews) })
			})
		})
	})
	return router
}