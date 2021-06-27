// ==UserScript==
// @name         Remove ZAP Hosting AD (TXADMIN)
// @namespace    http://SERVER_IP:PORT/*
// @version      latest
// @description  Zap good!
// @author       Kewaii
// @match        http://SERVER_IP:PORT/*
// @run-at        document-start
// ==/UserScript==

new MutationObserver(function(mutations) {
    // check at least two H1 exist using the extremely fast getElementsByTagName
    // which is faster than enumerating all the added nodes in mutations
    const zap = document.querySelector("html > body > div:nth-of-type(3) > header > a:nth-of-type(1)");
    zap.remove();
}).observe(document, {childList: true, subtree: true});
