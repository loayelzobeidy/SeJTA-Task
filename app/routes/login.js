
module.exports = function(app,mongo) {
  var path    = require('path');
  var http = require('http');
  var db = require('../db');
  var passport  =  require('passport');
  var LocalStrategy    = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
  app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  next();
    });

    passport.serializeUser(function(user, done) {
      done(null, user);
    });
    passport.deserializeUser(function(obj, done) {
      done(null, obj);
    });
    passport.use(new FacebookStrategy({

            // pull in our app id and secret from our auth.js file
            clientID        : '178431689430908',
            clientSecret    : 'dcb8aa7b978875d4c3e2fc0e265c6397',
            callbackURL     : 'http://localhost:3000/auth/facebook/callback'

        },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
app.get('/auth/facebook',function(){
  passport.authenticate('facebook');
  console.log("hello Mr. Loay");

}

);

app.get('/auth/facebook/callback',
passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.send(true);
      console.log('done');


  });


app.get('/', function (req, res) {
      res.sendFile(__dirname + '/public/index.html');
    });
app.post('/login', function (req, res){
  var username   = req.body.username;
  var password   = req.body.password;

var datatoadd=  {
    username:username,
    password: password
  };
 found = false;
  console.log(username);
  console.log(password);
  db.user().once('value',function(snapshot){
    var count = 0 ;
  snapshot.forEach(function(childSnapshot) {
    if(count>0){
      console.log(childSnapshot.val().username,childSnapshot.val().password);
      if(childSnapshot.val().username.valueOf()==username.valueOf()&&childSnapshot.val().password.valueOf()==password.valueOf())
     {

      res.send({firstname:childSnapshot.val().firstname,logedin:true});
      return true;
      }


}
if(count>=snapshot.numChildren()-1){
res.send({firstname:"",logedin:false});
}
count++;
});

  });


        });
app.post('/signup', function (req, res) {
var messageref = db.user().push();
var username = req.body.username;
var password = req.body.password;
var firstname = req.body.firstname;
var lastname = req.body.lastname;
messageref.set({
  username:username,
  password:password,
  firstname:firstname,
  lastname:lastname
});

                });


};
