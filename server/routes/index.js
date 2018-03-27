var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Message = require('../models/message.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	Message.find(function(err, messages){
		if (err){
			throw err;
		} else {
			res.status(200).json({
				messages: messages,
				status: 200,
				success: true
			});
		}
	});
});

// router.post('/', function(req, res, next) {
// 	Message.create({
// 		user: req.body.user,
// 		message: req.body.message,
// 		date: req.body.date
// 	},function(err, message){
// 		if (err){
// 			throw err;
// 		} else {
// 			res.status(201).json({
// 				message: message,
// 				status: 201,
// 				success: true
// 			});
// 		}
// 	});
// });


module.exports = router;
