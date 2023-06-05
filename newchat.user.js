// ==UserScript==
// @name         new chat shortcut
// @namespace    http://www.linxiaozhong.club/
// @version      1.0
// @description  command+k to start a new chat
// @author       凡学子
// @match        https://chat.openai.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openai.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const html_collection = document.getElementsByClassName("flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-shrink-0 flex-grow");

    document.addEventListener('keydown', function(event) {
        // 检查是否按下了 Command + k 快捷键
        if (event.key === 'k' && event.metaKey) {
            event.preventDefault(); // 阻止默认行为
            //console.log(html_collection[0]);
            html_collection[0].click();

        }
    });
})();
