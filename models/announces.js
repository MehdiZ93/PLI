let db = require('../db')

module.exports = {
	// return All announces
	list: function(req, res) {
		 db.query('SELECT * FROM announce', (err, announces) => {
		 	if(err) return res.json(err);

		 	res.status(200).json(announces);
        });
	},
	// return one announce specific
	findOne: function(req,  res) {
		 db.query('SELECT * FROM announce WHERE id = ?', [req.params.id], (err,announce) => {
		 	if(err) return res.json(err);

		 	res.status(200).json(announce);  
        });
	},
	// create announce
	create: function(req, res) {
		db.query('INSERT INTO announce (author, title, description, date_start, date_end, country, places) VALUES(?,?,?,?,?,?,?)', [req.body.author, req.body.title, req.body.description, req.body.date_start, req.body.date_end, req.body.country, req.body.places], (err, announce, next) => {
            if(err) return res.json(err);

            res.status(200).json(req.body);
        });
	},
	// update announce
	update: function(req, res) {
		var request = "UPDATE announce SET ";

        if(req.body.author != null) {
         	request += "author = '" + req.body.author + "', ";
        }
        if(req.body.title != null) {
            request += "title = '" + req.body.title + "', ";
        }
        if(req.body.description != null) {
            request += "description = '" + req.body.description + "', ";
        }
        if(req.body.date_start != null) {
            request += "date_start = '" + date_start + "', ";
        }
        if(req.body.date_end != null) {
            request += "date_end = '" + date_end + "', ";
        }
        if(req.body.country != null) {
        	request += "country = '" + req.body.country + "', ";
        }
        if(req.body.places != null) {
        	request += "places = '" + req.body.places + "', ";
        }

        request = request.substr(0,request.length - 2)
        request += " WHERE id = ?"

        db.query(request, [req.params.id], (err) =>{
           	if(err) return res.json(err);

           	res.status(200).json(req.body);
        });
	},
	// delete announce
	delete: function(req, res) {
		db.query('DELETE from announce WHERE id = ?', [req.params.id], (err) => {
			if(err) return res.json(err);

			res.status(200).json(req.params.id);
        });
	},
};