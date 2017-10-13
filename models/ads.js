let db = require('../db')

module.exports = {
	// return All ads
	list: function(req, res) {
		 db.query('SELECT * FROM ad', (err, ads) => {
		 	if(err) return res.json(err);

		 	res.status(200).json(ads);
        });
	},
	// return one ad specific
	findOne: function(req,  res) {
		 db.query('SELECT * FROM ad WHERE id = ?', [req.params.id], (err,ad) => {
		 	if(err) return res.json(err);

		 	res.status(200).json(ad);  
        });
	},
	// create ad
	create: function(req, res) {
		db.query('INSERT INTO ad (author, title, description, date_start, date_end, country, nb_spot, create_date, update_date) VALUES(?,?,?,?,?,?,?,?,?)', [req.body.author, req.body.title, req.body.description, req.body.date_start, req.body.date_end, req.body.country, req.body.nb_spot, moment().format(), moment().format()], (err, ad, next) => {
            if(err) return res.json(err);

            res.status(200).json(req.body);
        });
	},
	// update ad
	update: function(req, res) {
		var request = "UPDATE ad SET ";

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
        if(req.body.nb_spot != null) {
        	request += "nb_spot = '" + req.body.nb_spot + "', ";
        }

        request += "update_date = '" + moment().format() + "', ";

        request = request.substr(0,request.length - 2)
        request += " WHERE id = ?"

        db.query(request, [req.params.id], (err) =>{
           	if(err) return res.json(err);

           	res.status(200).json(req.body);
        });
	},
	// delete ad
	delete: function(req, res) {
		db.query('DELETE from ad WHERE id = ?', [req.params.id], (err) => {
			if(err) return res.json(err);

			res.status(200).json(req.params.id);
        });
	},
};