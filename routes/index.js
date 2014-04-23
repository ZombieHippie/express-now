var express = require('express')
var router = express.Router()

module.exports = function (db) {
	/* GET home page. */
	router.get('/', function(req, res) {
		res.render('index', { title: 'Express', pageViews: req.siteViews })
	})
	return router
}