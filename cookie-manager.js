




/**
 *
 *
 * cookie-manager.js
 * simple, easy and lightweight cookie management library
 * {DATE} - version 1.0
 * {REPO URL}
 *
 * Copyright 2018 Alperen <alperen.talaslioglu@gmail.com>
 * Released under MIT License
 * {LICENSE URL}
 *
 *
 */


(function(window, document) {
  'use strict'
  var CookieManager = {
    /**
    * @param {String} name cookie name
    * @param {String} value cookie value
    * @param {Number} [expires] cookie expiration in days
    * @param {String} [domain] cookie domain
    * @param {String} [path] cookie path
    * @param {Boolean} [secure] cookie ssl flag
    *
    */
    set: function (name, value, expires, domain, path, secure) {

      let cookieStr = name + '=' + value;

      if (expires) {
        var now = new Date();
        now.setTime(now.getTime() + expires * 24 * 60 * 60 * 1000);
        cookieStr += ';' + 'expires=' + now.toUTCString();
        }

      if (domain) {
        cookieStr += ';' + 'domain' + domain;
      }
      if (path) {
        cookieStr += ';' + 'path' + path;
      }
      if (secure) {
        cookieStr += ';' + 'secure';
      }

      document.cookie = cookieStr;
    },
    get: function (name) {

      /**
      * Retrive the cookie value with given cookie name
      * @param {String} name cookie name
      **/
      var cookies = document.cookie.split(';').map(cookie => cookie.trim());
      for(var i = 0; i< cookies.length; i++) {
        var cookie = cookies[i].split('=');
        var key = cookie[0];
        var value = cookie[1];

        if (key === name) {
          return value
        }
      }

      return undefined
    },
    update: function (name, value, expires, domain, path, secure) {
      this.set(name, value, expires, domain, path, secure);
    },
    remove: function (name) {

      /**
      * remove the cookie value with given cookie name
      * @param {String} name cookie name
      **/
      this.set(name, '', -1)
    },
    getAll: function (name) {

      /**
      * Retrive all cookies
      * @param {String} name cookie name
      **/
      var cookies = document.cookie.split(';').map(cookie => cookie.trim());
      var cookiesList = [];

      for(var i = 0; i< cookies.length; i++) {
        var cookie = cookies[i].split('=');
        var key = cookie[0];
        var value = cookie[1];
        cookiesList.push({key: key, value: value})

        }
        return cookiesList;
      },
      clear: function () {
        var cookies = document.cookie.split(';').map(cookie => cookie.trim());
        var cookiesList = [];

        for(var i = 0; i< cookies.length; i++) {
          var cookie = cookies[i].split('=');
          var key = cookie[0];
          var value = cookie[1];
          this.remove(key);

          }
      }



  };

  // AMD support
     if (typeof define === 'function' && define.amd) {
         define(function () { 
           return CookieManager;
         });
     // CommonJS and Node.js module support.
     } else if (typeof exports !== 'undefined') {
         // Support Node.js specific `module.exports` (which can be a function)
         if (typeof module !== 'undefined' && module.exports) {
             exports = module.exports = CookieManager;
         }
         // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
         exports.CookieManager = CookieManager;
     } else {
         window.CookieManager = CookieManager;
     }


})(window, document)










/*

(function(window, document) {
  'use strict';

  var CookieManager = {
    alperen: 'talaslioglu'
  };


  window.CookieManager = CookieManager;

})(window, document);
*/
