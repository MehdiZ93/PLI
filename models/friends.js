let db = require('../db')

module.exports = {
	// return All friends
	list: function(req, res) {
		 db.query('SELECT * FROM friend', (err, friends) => {
		 	if(err) return res.json(err);

		 	res.status(200).json(friends);
        });
	},
	//add friend to friend list
	create: function(req, res) {
       db.query('INSERT INTO friend (id_user, id_friend) VALUES(?,?)', [req.body.id_user, req.body.id_friend], (err, result) => {
            if(err) return res.json(err);

            res.status(200).json({'id_user': req.body.id_user, 'id_friend': req.body.id_friend});
        });
    },
    //delete friend of friend list
    delete: function(req, res) {
    	db.query('DELETE from friend WHERE id_user = ? AND id_friend = ?', [req.params.id_user, req.params.id_friend], (err) => {
			if(err) return res.json(err);

			res.status(200).json({'id_user': req.params.id_user, 'id_friend': req.params.id_friend});
        });
    }
};