var s, lc;
var group = getCroup();

window['__lc'] = {
    license: 1048020,
    group: group,
    visibility: 'hide',
};

lc = document.createElement('script');
lc.type = 'text/javascript';
lc.async = true;
lc.classList.add('live-chat-script');
lc.innerHTML = '(function (n, t, c) { function i(n) { return e._h ? e._h.apply(null, n) : e._q.push(n) } var e = { _q: [], _h: null, _v: "2.0", on: function () { i(["on", c.call(arguments)]) }, once: function () { i(["once", c.call(arguments)]) }, off: function () { i(["off", c.call(arguments)]) }, get: function () { if (!e._h) throw new Error("[LiveChatWidget] You can`t use getters before load."); return i(["get", c.call(arguments)]) }, call: function () { i(["call", c.call(arguments)]) }, init: function () { var n = t.createElement("script"); n.async = !0, n.type = "text/javascript", n.classList.add("live-chat-load-script"), n.src = "https://cdn.livechatinc.com/tracking.js", t.head.appendChild(n) } }; !n.__lc.asyncInit && e.init(), n.LiveChatWidget = n.LiveChatWidget || e }(window, document, [].slice))';
s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(lc, s);

function getCroup() {
    switch (localStorage.getItem('defaultLang') ? localStorage.getItem('defaultLang').toLowerCase() : 'en') {
        case 'ru':
            return 7;
        case 'id':
            return 8;
        case 'lo':
        case 'th':
            return 9;
        case 'es':
            return 25;
        case 'ms':
            return 1;
        default:
            return 1;
    }
}
