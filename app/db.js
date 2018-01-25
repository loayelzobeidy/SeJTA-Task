var admin = require('firebase-admin');
var serviceAccount = require('/home/loay/Downloads/loginse-93ca4-firebase-adminsdk-yy9wo-d559a1955d.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://loginse-93ca4.firebaseio.com'
});
DB = null;
Ref = null;
User = null;
exports.connect = function(cb) {
  DB = admin.database();
  Ref = DB.ref("users");
  User = Ref.child('user');
  cb();
}

exports.db = function() {
    if (DB === null)
    	throw Error('DB Object has not yet been initialized');
    return DB;
}
exports.ref = function() {
    if (Ref === null)
    	throw Error('DB Object has not yet been initialized');
    return Ref;
}
exports.user = function() {
    if (User === null)
    	throw Error('DB Object has not yet been initialized');
    return User;
}
