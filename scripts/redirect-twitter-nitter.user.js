// ==UserScript==
// @name         Twitter to Nitter Redirect
// @author       Chev
// @version      1.0.0
// @description  Redirects from Twitter to Nitter, a Twitter alternative front-end.
// @namespace    github.com/chev2
// @license      Apache-2.0

// @homepageURL    https://github.com/chev2/scripts-styles
// @supportURL     https://github.com/chev2/scripts-styles/issues
// @updateURL      https://raw.githubusercontent.com/chev2/scripts-styles/main/scripts/redirect-twitter-nitter.user.js
// @downloadURL    https://raw.githubusercontent.com/chev2/scripts-styles/main/scripts/redirect-twitter-nitter.user.js

// @match        *://twitter.com/*
// @icon         https://icons.duckduckgo.com/ip3/nitter.net.ico

// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Put your instance domain here
    const INSTANCE_DOMAIN = "nitter.nl"
    location.replace(location.href.replace("twitter.com/", `${INSTANCE_DOMAIN}/`));
})();
