window.fbAsyncInit = function() {
  Parse.FacebookUtils.init({
    appId      : '400503560015485', // App ID
    channelUrl : '//coshx.github.com/fbfeed/channel.html', // Channel File
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
  });

  // Additional initialization code here
};

// Load the SDK Asynchronously
(function(d){
   var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement('script'); js.id = id; js.async = true;
   js.src = "//connect.facebook.net/en_US/all.js";
   ref.parentNode.insertBefore(js, ref);
 }(document));

var FbFeed = {};
FbFeed.login = function() {
  Parse.FacebookUtils.logIn(null, {
    success: function(user) {
      if (!user.existed()) {
        alert("User signed up and logged in through Facebook!");
      } else {
        alert("User logged in through Facebook!");
      }
      $("#fbfriends").show();
    },
    error: function(user, error) {
      alert("User cancelled the Facebook login or did not fully authorize.");
    }
  });
};
FbFeed.getFriends = function() {
  FB.api('/me/friends', function(response) {
    console.log(response);
  });
};

$(function() {
  Parse.initialize("yRiLmG1WkMXpjfkp1oAjltVzPCkST5Yiv0ErLlDI", "0vt3pMEefnXGAU5JYGGrwmB3mOXE7Y4TfuSFVA3s");

  $("#fblogin").on('click', FbFeed.login);
  $("#fbfriends").on('click', FbFeed.getFriends);
});
