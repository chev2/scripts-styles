// ==UserScript==
// @name         Redirect: New Reddit to Old Reddit
// @author       Chev <riskyrains@proton.me> (https://github.com/chev2)
// @version      1.0.0
// @description  Redirects from new Reddit to old Reddit.
// @namespace    github.com/chev2
// @license      Apache-2.0

// @homepageURL  https://github.com/chev2/scripts-styles
// @supportURL   https://github.com/chev2/scripts-styles/issues
// @updateURL    https://raw.githubusercontent.com/chev2/scripts-styles/main/scripts/redirect-reddit-new-to-old.js
// @downloadURL  https://raw.githubusercontent.com/chev2/scripts-styles/main/scripts/redirect-reddit-new-to-old.js

// @match        *://www.reddit.com/*
// @icon         https://icons.duckduckgo.com/ip3/reddit.com.ico

// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    location.replace(location.href.replace("www.reddit.com/", "old.reddit.com/"));
})();
