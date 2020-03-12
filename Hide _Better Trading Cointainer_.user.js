// ==UserScript==
// @name         Hide "Better Trading Cointainer"
// @namespace    N/A
// @version      0.1
// @description  Just a hide button
// @author       Mist
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @match        https://www.pathofexile.com/trade/*
// @grant        none
// ==/UserScript==

var $ = window.jQuery;

function waitForElementToDisplay(selector, time) {
    if(document.querySelector(selector)!=null) {
        console.log("The element is displayed, you can put your code instead of this alert.")
        $(".menu-about").before('<li role="presentation" class="menu-about"><a href="#"><span onclick="hideaddon(); return false">Hide/Unhide</span></a></li>');
        $('#better-trading-container').attr('display','block');
        var scripts = document.createElement('script');
        scripts.innerHTML = `
function hideaddon(){
 if ($('#better-trading-container').is(":visible")){
  $('#better-trading-container').hide();
  $('#app').attr("id", "notapp");
 } else {
  $('#better-trading-container').show();
  $('#notapp').attr("id", "app");
 }
}
        `
        document.getElementsByTagName('head')[0].appendChild(scripts);
        return;
    }
    else {
        setTimeout(function() {
            waitForElementToDisplay(selector, time);
        }, time);
    }
}

(function() {
    'use strict';
    waitForElementToDisplay("#better-trading-container", 100)
})();

