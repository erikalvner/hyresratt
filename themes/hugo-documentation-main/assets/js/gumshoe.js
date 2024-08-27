/*! gumshoejs v5.1.2 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/gumshoe */
Element.prototype.closest||(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest=function(t){var e=this;if(!document.documentElement.contains(this))return null;do{if(e.matches(t))return e;e=e.parentElement}while(null!==e);return null}),(function(){if("function"==typeof window.CustomEvent)return!1;function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}t.prototype=window.Event.prototype,window.CustomEvent=t})(),(function(t,e){"function"==typeof define&&define.amd?define([],(function(){return e(t)})):"object"==typeof exports?module.exports=e(t):t.Gumshoe=e(t)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(t){"use strict";var e={navClass:"active",contentClass:"active",nested:!1,nestedClass:"active",offset:0,reflow:!1,events:!0},n=function(t,e,n){if(n.settings.events){var o=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e.dispatchEvent(o)}},o=function(t){var e=0;if(t.offsetParent)for(;t;)e+=t.offsetTop,t=t.offsetParent;return e>=0?e:0},s=function(t){t&&t.sort((function(t,e){return o(t.content)<o(e.content)?-1:1}))},r=function(e,n,o){var s=e.getBoundingClientRect(),r=(function(t){return"function"==typeof t.offset?parseFloat(t.offset()):parseFloat(t.offset)})(n);return o?parseInt(s.bottom,10)<(t.innerHeight||document.documentElement.clientHeight):parseInt(s.top,10)<=r},c=function(){return t.innerHeight+t.pageYOffset>=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(t,e){var n=t[t.length-1];if(function(t,e){return!(!c()||!r(t.content,e,!0))}(n,e))return n;for(var o=t.length-1;o>=0;o--)if(r(t[o].content,e))return t[o]},l=function(t,e){if(e.nested&&t.parentNode){var n=t.parentNode.closest("li");n&&(n.classList.remove(e.nestedClass),l(n,e))}},a=function(t,e){if(t){var o=t.nav.closest("li");o&&(o.classList.remove(e.navClass),t.content.classList.remove(e.contentClass),l(o,e),n("gumshoeDeactivate",o,{link:t.nav,content:t.content,settings:e}))}},u=function(t,e){if(e.nested){var n=t.parentNode.closest("li");n&&(n.classList.add(e.nestedClass),u(n,e))}};return function(o,r){var c,l,f,d,m,v={};v.setup=function(){c=document.querySelectorAll(o),l=[],Array.prototype.forEach.call(c,(function(t){var e=document.getElementById(decodeURIComponent(t.hash.substr(1)));e&&l.push({nav:t,content:e})})),s(l)},v.detect=function(){var t=i(l,m);t?f&&t.content===f.content||(a(f,m),(function(t,e){if(t){var o=t.nav.closest("li");o&&(o.classList.add(e.navClass),t.content.classList.add(e.contentClass),u(o,e),n("gumshoeActivate",o,{link:t.nav,content:t.content,settings:e}))}})(t,m),f=t):f&&(a(f,m),f=null)};var p=function(e){d&&t.cancelAnimationFrame(d),d=t.requestAnimationFrame(v.detect)},h=function(e){d&&t.cancelAnimationFrame(d),d=t.requestAnimationFrame((function(){s(l),v.detect()}))};v.destroy=function(){f&&a(f,m),t.removeEventListener("scroll",p,!1),m.reflow&&t.removeEventListener("resize",h,!1),l=null,c=null,f=null,d=null,m=null};return m=(function(){var t={};return Array.prototype.forEach.call(arguments,(function(e){for(var n in e){if(!e.hasOwnProperty(n))return;t[n]=e[n]}})),t})(e,r||{}),v.setup(),v.detect(),t.addEventListener("scroll",p,!1),m.reflow&&t.addEventListener("resize",h,!1),v}}));
