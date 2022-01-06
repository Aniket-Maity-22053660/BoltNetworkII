# BoltNetworkII
Front End Developer, Angular Application displaying Tv. Shows. I open Application with Live Server on VSCODE Extension.Name: Live Server Id: ritwickdey.liveserver Description: Launch a development local Server with live reload feature for static &amp; dynamic pages Version: 5.6.1 Publisher: Ritwick Dey VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

BASIC NOTES INCLUDED.

angular App
Create a new module 
var app = angular.module("BoltNetworkApp", []);

attach app to body , ng-app="MoveLogApp"

steps to 2nd angular lesson
js/directives/appInfo.js type in =

app.directive('appInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/appInfo.html' 
  }; 
}); 

Include file in HTML script format line 48
<script src="js/directives/appInfo.js"></script>

include this in appinfo.html
<img class="icon" ng-src="{{ info.icon }}"> 
<h2 class="title">{{ info.title }}</h2> 
<p class="developer">{{ info.developer }}</p> 
<p class="price">{{ info.price | currency }}</p> 

Replace contents of 1st card with :
<div class="card"> 
  <app-info info="move"></app-info> 
</div> 

new lesson card
 <app-info info="shutterbugg"></app-info>

next part 
In the new file js/directives/installApp.js, create a new directive named installApp. Refer to the appInfo directive for an example:

use app.directive to create a new directive named installApp
use the restrict option to create a new Element
set the scope option to an empty object {}
use the templateUrl option to tell this directive to use the js/directives/installApp.html file

next 
app.directive('installApp', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'js/directives/installApp.html',
    
    link: function(scope, element, attrs) {
      scope.buttonText = "Install",
      scope.installed = false,

      scope.download = function() {
        element.toggleClass('btn-active')
        if(scope.installed) {
          scope.buttonText = "Install";
          scope.installed = false;
        } else {
          scope.buttonText = "Uninstall";
          scope.installed = true;
        }
      }
    }
  };
});
