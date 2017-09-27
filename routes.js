var users = require('./models/users.js');
var announces = require('./models/announces.js');
var friends = require('./models/friends.js');

module.exports = function(app) {
	app.route('/users')
		.get(users.list)
		.post(users.create);

	app.route('/users/:id')
		.get(users.findOne)
		.delete(users.delete)
		.put(users.update);

	app.route('/friends')
		.get(friends.list)
		.post(friends.create);

	app.route('/friends/:id_user/:id_friend')
		.delete(friends.delete);

	app.route('/login')
		.post(users.login);

	app.route('/announces')
		.get(announces.list)
		.post(announces.create);

	app.route('/announces/:id')
		.get(announces.findOne)
		.delete(announces.delete)
		.put(announces.update);
};
