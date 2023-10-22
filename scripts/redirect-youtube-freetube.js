// ==UserScript==
// @name         Redirect: YouTube to FreeTube
// @author       Chev <riskyrains@proton.me> (https://github.com/chev2)
// @version      1.0.0
// @description  Redirects from YouTube to FreeTube when a YouTube video is navigated to.
// @namespace    github.com/chev2
// @license      Apache-2.0

// @homepageURL  https://github.com/chev2/scripts-styles
// @supportURL   https://github.com/chev2/scripts-styles/issues
// @updateURL    https://raw.githubusercontent.com/chev2/scripts-styles/main/scripts/redirect-youtube-freetube.js
// @downloadURL  https://raw.githubusercontent.com/chev2/scripts-styles/main/scripts/redirect-youtube-freetube.js

// @match        *://www.youtube.com/watch?v=*
// @icon         https://icons.duckduckgo.com/ip3/freetubeapp.io.ico

// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Redirect to Freetube app protocol
    location.href = "freetube://" + location.href;
})();
