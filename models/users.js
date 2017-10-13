let db = require('../db')
let sha1 = require('sha1')
let moment = require('moment');

module.exports = {
	// return All users
	list: function(req, res) {
		 db.query('SELECT * FROM user', (err, users) => {
		 	if(err) return res.json(err);

		 	res.status(200).json(users);
        });
	},
	// return one user specific
	findOne: function(req,  res) {
		 db.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err,user) => {
		 	if(err) return res.json(err);

		 	res.status(200).json(user);  
        });
	},
	// create user
	create: function(req, res) {
		db.query('INSERT INTO user (lastname, firstname, email, password, tel, country, picture, birthday, description, create_date, update_date, active, desactive_date) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)', [req.body.lastname, req.body.firstname, req.body.email, sha1(req.body.password), req.body.tel, req.body.country, req.body.picture, req.body.birthday, req.body.description, moment().format(), moment().format(), req.body.active, null], (err, user) => {
            if(err) return res.json(err);

            res.status(200).json(req.body);
        });
	},
	// update user
	update: function(req, res) {
		var request = "UPDATE user SET ";

        if(req.body.lastname != null) {
         	request += "lastname = '" + req.body.lastname + "', ";
        }
        if(req.body.firstname != null) {
            request += "firstname = '" + req.body.firstname + "', ";
        }
        if(req.body.email != null) {
            request += "email = '" + req.body.email + "', ";
        }
        if(req.body.password != null) {
            request += "password = '" + sha1(req.body.password) + "', ";
        }
        if(req.body.tel != null) {
            request += "tel = '" + req.body.tel + "', ";
        }
        if(req.body.country != null) {
        	request += "country = '" + req.body.country + "', ";
        }
        if(req.body.picture != null) {
        	request += "picture = '" + req.body.picture + "', ";
        }
        if(req.body.birthday != null) {
            request += "birthday = '" + req.body.birthday + "', ";
        }
        if(req.body.description != null) {
            request += "description = '" + req.body.description + "', ";
        }
        if(req.body.active != null) {
            request += "active = '" + req.body.active + "', ";
            if(req.body.active == 0) {
                request += "desactive_date = '" + moment().format() + "', ";
            }
        }
        request += "update_date = '" + moment().format() + "', ";

        request = request.substr(0,request.length - 2)
        request += " WHERE id = ?"

        db.query(request, [req.params.id], (err) =>{
           	if(err) return res.json(err);

           	res.status(200).json(req.body);
        });
	},
	// delete user
	delete: function(req, res) {
		db.query('DELETE from user WHERE id = ?', [req.params.id], (err) => {
			if(err) return res.json(err);

			res.status(200).json(req.params.id);
        });
	},
    // connection user 
    login: function(req, res) {
        db.query('SELECT * from user WHERE email = ? AND password = ?', [req.body.email, sha1(req.body.password)], (err, user) => {
            if(err) return res.json(err);

            res.status(200).json(user);
        });
    }
};