var FbFeed = {};

FbFeed.init = function() {

}

FbFeed.login = function() {
  Parse.FacebookUtils.logIn(null, {
    success: function(user) {
      if (!user.existed()) {
        alert("User signed up and logged in through Facebook!");
      } else {
        alert("User logged in through Facebook!");
      }
      console.log(user);
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
  FbFeed.init();
  Parse.initialize("yRiLmG1WkMXpjfkp1oAjltVzPCkST5Yiv0ErLlDI", "0vt3pMEefnXGAU5JYGGrwmB3mOXE7Y4TfuSFVA3s");

  $("#fblogin").on('click', FbFeed.login);
  $("#fbfriends").on('click', FbFeed.getFriends);
});
