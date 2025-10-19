// ==UserScript==
// @name         Links en pestaña nueva
// @namespace    http://tampermonkey.net/
// @version      2025-10-17
// @description  Si es un link que lleva a otra pagina, que la abra en una pestaña nueva en vez de en la que estas
// @author       daniel gomez obraztsov
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.href;
        if (!href) return;

        try {
            const currentHost = window.location.hostname;
            const linkHost = new URL(href).hostname;

            if (linkHost !== currentHost) {
                e.preventDefault();
                e.stopImmediatePropagation();
                window.open(href, '_blank', 'noopener,noreferrer');
            }
        } catch (err) {
        }
    }, true);
})();
