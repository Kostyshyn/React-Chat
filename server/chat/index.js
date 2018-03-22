module.exports = function(io){

	var users = []; 

	io.on('connection', (client) => {
		console.log('connected');
		client.emit('user', users);
		client.on('user', (user) => {
			var newUser = {};
			newUser.name = user;
			newUser.id = client.id
			users.push(newUser);
			io.emit('user', users);
			console.log('new user:', newUser.name)
		});

		client.on('message', (message) => {
			io.emit('receive.message', message);
		});

		client.on('disconnect', () => {
			users = users.filter(user => user.id != client.id);
			client.broadcast.emit('user', users);
		    console.log('user disconnected')
		});
	});
};	