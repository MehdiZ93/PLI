let db = require('../db')

module.exports = {
	// return All messages
	list: function(req, res) {
		 db.query('SELECT * FROM message', (err, messages) => {
		 	if(err) return res.json(err);

		 	res.status(200).json(messages);
        });
	},
    // return all messages by ID
    listById: function(req, res) {
        db.quey('SELECT * FROM message WHERE id_user = ? AND id_dest = ?', [req.params.id_user, req.params.id_dest], (err, messages) => {
            if(err) return res.json(err);

            req.status(200).json(messages);
        });
    },
	//add message to message list
	create: function(req, res) {
       db.query('INSERT INTO message (id_user, id_dest, body) VALUES(?,?,?)', [req.body.id_user, req.body.id_dest, req.body.body], (err, result) => {
            if(err) return res.json(err);

            res.status(200).json({'id_user': req.body.id_user, 'id_dest': req.body.id_dest, 'body': req.body.body});
        });
    },
    //delete message of message list
    delete: function(req, res) {
    	db.query('DELETE from message WHERE id_user = ? AND id_dest = ?', [req.params.id_user, req.params.id_dest], (err) => {
			if(err) return res.json(err);

			res.status(200).json({'id_user': req.params.id_user, 'id_dest': req.params.id_dest});
        });
    },
};