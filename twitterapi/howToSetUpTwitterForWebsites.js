
//This script will inject widgets.js once, asynchronously into your page. This means the script won't block other scripts in your page, or make repeat HTTP requests //for the file
//Include the following script in your page template, ideally at the end, before the </body> tag. You do not need to include the script any other time in the page.

<script>window.twttr = (function (d, s, id) {
  var t, js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id; js.src= "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
  return window.twttr || (t = { _e: [], ready: function (f) { t._e.push(f) } });
}(document, "script", "twitter-wjs"));</script>


//##########BUTTON BUILDERS#################
//Now I am cretaing a Twitter Button using JavaScript and a Line of HTML to anchor to the webpage

<a href="https://twitter.com/share" class="twitter-share-button" data-lang="en">Tweet</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>



//This creates a tweet button that puts a hashtag inside the button with text.

<a href="https://twitter.com/intent/tweet?button_hashtag=TwitterStories&text=My%20story%20is%20about%20what's%20happening%20today" class="twitter-hashtag-button" data-lang="en" data-related="jasoncosta">Tweet #TwitterStories</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>



//This will create a Tweet button that will be geared to send a tweet to a user using the '@' symbol inside the button with some text

<a href="https://twitter.com/intent/tweet?screen_name=twitterapi" class="twitter-mention-button" data-lang="en">Tweet to @twitterapi</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>




//This will launch a prompt for a tweet in the form of a  WEB INTENT, which is one of three - Reply to a Tweet, Retweet a tweet or favourite a tweet  - A fourth is when a user can follow another user through their tweets
//Needs to be implemented just once

<script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>
<p><a href="https://twitter.com/intent/tweet?in_reply_to=53202045288714240">Reply</a></p>
<p><a href="https://twitter.com/intent/retweet?tweet_id=53202045288714240">Retweet</a></p>
<p><a href="https://twitter.com/intent/favorite?tweet_id=53202045288714240">Favorite</a></p>




