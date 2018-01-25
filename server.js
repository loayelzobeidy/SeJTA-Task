var app     = require('./app/app');
var db = require('./app/db');
db.connect(function(err){
if (err)
throw err;

    	app.listen('3000', function(){
           console.log('[OK] => HTTP Server listening on http://localhost:3000');
        });

});
