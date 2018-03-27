var Message = require('../models/message.js');

module.exports = function(io){

	var users = []; 

	io.on('connection', (client) => {
		client.emit('user', users);
		client.on('user', (user) => {
			var newUser = {};
			newUser.name = user;
			newUser.id = client.id
			users.push(newUser);
			io.emit('user', users);
			console.log(`new user: ${ newUser.name }`)
		});

		client.on('message', (message) => {
			Message.create({
				user: message.user,
				message: message.message,
				date: message.date
			},function(err, message){
				if (err){
					throw err;
				} else {
					io.emit('receive.message', message);
				}
			});
		});

		client.on('disconnect', () => {
			users = users.filter(user => user.id != client.id);
			client.broadcast.emit('user', users);
		});
	});
};	