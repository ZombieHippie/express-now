var express = require('express')
var router = express.Router()

module.exports = function (db) {
	/* GET home page. */
	router.get('/', function(req, res) {
		db.get('projects', function(err, projects) {
			res.render('index', { title: 'Express', projects: (err?err:projects) })
		})
	})
	return router
}