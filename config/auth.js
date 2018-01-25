module.exports = {

    'facebookAuth' : {
        'clientID'      : '178431689430908', // your App ID
        'clientSecret'  : 'dcb8aa7b978875d4c3e2fc0e265c6397', // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=loay,elzobaidy,loayelzobeidy@gmail.com',
        'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
    }
}
