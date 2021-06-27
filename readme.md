zap good
replace SERVER_IP with server ip and PORT with txadmin port
example: 

// ==UserScript==
// @name         Remove ZAP Hosting AD (TXADMIN)
// @namespace    http://192.168.1.8:40120/*
// @version      latest
// @description  Zap good!
// @author       Kewaii
// @match        http://192.168.1.8:40120/*
// @run-at        document-start
// ==/UserScript==

new MutationObserver(function(mutations) {
    // check at least two H1 exist using the extremely fast getElementsByTagName
    // which is faster than enumerating all the added nodes in mutations
    const zap = document.querySelector("html > body > div:nth-of-type(3) > header > a:nth-of-type(1)");
    zap.remove();
}).observe(document, {childList: true, subtree: true});

Please use ZAP. is good!
