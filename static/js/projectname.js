/*!
 *  Name of the project
 *  Projectname.js
 *  Copyright 2012 LBi Netherlands
 *
 *  Author      : LBi Netherlands - Mike Vierwind
 *  Version     : 1.0
 *
    | | |   (_)       | |
    | | |__  _   _ __ | |
    | | '_ \| | | '_ \| |
    | | |_) | |_| | | | |
    |_|_.__/|_(_)_| |_|_|
*/

window.lbi = new (function($) {
    var lbi = this;

    var LBI = lbi.LBI = function() {
        this.initCarousel();
        this.initVendors();
        this.initGoogleMaps();
        this.initNavigation();
    };

    LBI.prototype.initVendors = function() {

    }

    LBI.prototype.initGoogleMaps = function() {

        $(document).ready(function(){
          buildMap();
        });

        var sw = document.body.clientWidth,
          bp = 550,
          $map = $('.map');
        var static = "http://maps.google.com/maps/api/staticmap?center=40.440625,-79.995886&zoom=13&markers=40.440625,-79.995886&size=640x320&sensor=true";
        var embed = '<iframe width="980" height="650" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=pittsburgh,+pa&amp;aq=&amp;sll=38.003385,-79.420925&amp;sspn=5.54782,11.612549&amp;ie=UTF8&amp;hq=&amp;hnear=Pittsburgh,+Allegheny,+Pennsylvania&amp;t=m&amp;ll=40.440676,-79.995918&amp;spn=0.117583,0.336113&amp;z=12&amp;iwloc=A&amp;output=embed"></iframe>';

        function buildMap() {
        if(sw>bp) { //If Large Screen
            if($('.map-container').length < 1) { //If map doesn't already exist
              buildEmbed();
            }
        } else {
            if($('.static-img').length < 1) { //If static image doesn't exist
              buildStatic();
            }
        }
        };

        function buildEmbed() { //Build iframe view
          $('<div class="map-container"/>').html(embed).prependTo($map);
        };

        function buildStatic() { //Build static map
         var mapLink = $('.map-link').attr('href'),
             $img = $('<img class="static-img" />').attr('src',static);
         $('<a/>').attr('href',mapLink).html($img).prependTo($map);
        }

        $(window).resize(function() {
        sw = document.body.clientWidth;
        buildMap();
        google.maps.event.trigger(map, "resize");
        });
    }

    LBI.prototype.initNavigation = function() {
        var menu = $('#nav'),
            menulink = $('.nav-link');

        $(menulink).click(function() {
            menulink.toggleClass('active');
            menu.toggleClass('active');
            return false;
        });
    };

    LBI.prototype.initCarousel = function() {

    };

})(jQuery);

$(document).ready(function() {
    new lbi.LBI();
});