var express = require('express')
var router = express.Router()

module.exports = function (db) {
	/* GET home page. */
	router.get('/', function(req, res) {
		db.get('articles', function(err, articles){
			res.render('index', { title: 'Express', pageViews: req.siteViews, articles: articles })
		})
	})
	return router
}