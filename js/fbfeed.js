var FbFeed = {};

FbFeed.init = function() {
  Parse.FacebookUtils.init({
    appId      : '400503560015485', // App ID
    channelUrl : '//coshx.github.com/fbfeed/channel.html', // Channel File
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
  });
}

FbFeed.login = function(e) {
  Parse.FacebookUtils.logIn(null, {
    success: function(user) {
      if (!user.existed()) {
        alert("User signed up and logged in through Facebook!");
      } else {
        alert("User logged in through Facebook!");
      }
      console.log(user);
      $("#fbfriends").show();
      FbFeed.getFriends();
    },
    error: function(user, error) {
      alert("User cancelled the Facebook login or did not fully authorize.");
    }
  });
  e.preventDefault();
};

FbFeed.getFriends = function(e) {
  FB.api('/me/friends', function(response) {
    console.log(response);
  });
  e.preventDefault();
};

$(function() {
  FbFeed.init();
  Parse.initialize("yRiLmG1WkMXpjfkp1oAjltVzPCkST5Yiv0ErLlDI", "0vt3pMEefnXGAU5JYGGrwmB3mOXE7Y4TfuSFVA3s");

  $("#fblogin").on('click', FbFeed.login);
  $("#fbfriends").on('click', FbFeed.getFriends);
});
