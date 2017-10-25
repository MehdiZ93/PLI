let db = require('../db')

module.exports = {
	// return All likes
	list: function(req, res) {
		 db.query('SELECT * FROM liker', (err, likes) => {
		 	if(err) return res.json(err);

		 	res.status(200).json(likes);
        });
	},
    // return all likes by ID
    listById: function(req, res) {
        db.query('SELECT * FROM liker WHERE id_dest = ?', [req.params.id_dest], (err, likes) => {
            if(err) return res.json(err);

            res.status(200).json(likes);
        });
    },
	//add like to like list
	create: function(req, res) {
       db.query('INSERT INTO liker (id_user, id_dest, mark) VALUES(?,?,?)', [req.body.id_user, req.body.id_dest, req.body.mark], (err, result) => {
            if(err) return res.json(err);

            res.status(200).json({'id_user': req.body.id_user, 'id_dest': req.body.id_dest, 'mark': req.body.mark});
        });
    },
    //delete like of like list
    delete: function(req, res) {
    	db.query('DELETE from liker WHERE id_user = ? AND id_dest = ?', [req.params.id_user, req.params.id_dest], (err) => {
			if(err) return res.json(err);

			res.status(200).json({'id_user': req.params.id_user, 'id_dest': req.params.id_dest});
        });
    },
};