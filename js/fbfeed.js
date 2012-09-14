var FbFeed = {};

FbFeed.init = function() {
  Parse.initialize("yRiLmG1WkMXpjfkp1oAjltVzPCkST5Yiv0ErLlDI", "0vt3pMEefnXGAU5JYGGrwmB3mOXE7Y4TfuSFVA3s");
  Parse.FacebookUtils.init({
    appId      : '400503560015485', // App ID
    channelUrl : '//coshx.github.com/fbfeed/channel.html', // Channel File
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
  });
}

FbFeed.login = function() {
  Parse.FacebookUtils.logIn(null, {
    success: function(user) {
      FbFeed.init();
      FbFeed.getFriends();
    },
    error: function(user, error) {
      alert("User cancelled the Facebook login or did not fully authorize.");
    }
  });
};

FbFeed.getFriends = function() {
  FB.api('/me/friends', function(response) {
    $.each(response.data, function(index, friend) { FbFeed.addFriend(friend); });
  });
};

FbFeed.addFriend = function(friend) {
  var friendElement = $('<li data-fbid="' + friend.id + '">' + friend.name + "</li>");
  $("#friend-list").append(friendElement);

  FB.api('/' + friend.id + '/picture', function(response) {
    var img = $('<img>');
    img.attr('src', response.data.url);
    friendElement.prepend(img);
  });
};

$(function() {
  FbFeed.init();

  $("#fblogin").on('click', FbFeed.login);
});
