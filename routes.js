var users = require('./models/users.js');
var ads = require('./models/ads.js');
var friends = require('./models/friends.js');
var messages = require('./models/messages.js');

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

	app.route('/ads')
		.get(ads.list)
		.post(ads.create);

	app.route('/ads/:id')
		.get(ads.findOne)
		.delete(ads.delete)
		.put(ads.update);

	app.route('/messages')
		.get(messages.list)
		.post(messages.create);

	app.route('/messages/:id_user/:id_dest')
		.get(messages.listById);
		.delete(messages.delete);

	app.route('/likes')
		.get(liker.list)
		.post(liker.create);

	app.route('/likes/:id_dest')
		.get(liker.listById);

	app.route('/likes/:id_user/:id_dest')
		.delete(liker.delete);
		
};
