(this["webpackJsonpslide-puzzle"]=this["webpackJsonpslide-puzzle"]||[]).push([[0],{12:function(e,t,n){e.exports={slidePuzzle:"SlidePuzzle_slidePuzzle__29Azw"}},2:function(e,t,n){e.exports={numberSquare:"NumberSquare_numberSquare__2MGXT",empty:"NumberSquare_empty__1pEnc",inPlace:"NumberSquare_inPlace__2C206",sorted:"NumberSquare_sorted__utwwI","row-0":"NumberSquare_row-0__T_wQ3",slideLEFT:"NumberSquare_slideLEFT__1U-ve","slide-from-right":"NumberSquare_slide-from-right__238ry",slideDOWN:"NumberSquare_slideDOWN__cvY1S","slide-from-above":"NumberSquare_slide-from-above__5BSJb",slideRIGHT:"NumberSquare_slideRIGHT__2aIUw","slide-from-left":"NumberSquare_slide-from-left__2fNnZ",slideUP:"NumberSquare_slideUP__31rKi","slide-from-below":"NumberSquare_slide-from-below__1fpST"}},24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r,a=n(1),u=n.n(a),o=n(13),i=n.n(o),c=(n(24),n(25),n(10)),l=n(17),s=n(14),m=n(8),d=n(15),f=n(18),h=n(19),p=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(s.a)(this,n),r=t.call(this,e),Object.setPrototypeOf(Object(m.a)(r),n.prototype),r}return n}(Object(h.a)(Error)),_=function(){var e=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null];return e=j(e)},b=function(e,t){var n=e.indexOf(null);if(!N(n,t))return e;var r=Object(l.a)(e);return r[n]=e[t],r[t]=null,r},j=function(e){return b(e,S(v(e)))},v=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.indexOf(null),n=[],r=x(t),a=0;a<e.length;a++)y(x(a),r)&&n.push(a);return n},O=function(e){return Math.floor(e/4)},g=function(e){return e%4},x=function(e){return[g(e),O(e)]},y=function(e,t){return Math.abs(e[0]-t[0])+Math.abs(e[1]-t[1])===1},N=function(e,t){return y(x(e),x(t))},S=function(e){return e[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9;if(t<e)throw new p("Max cannot be less than min, you silly goose.");return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}(0,e.length-1)]};!function(e){e[e.UP=0]="UP",e[e.RIGHT=1]="RIGHT",e[e.DOWN=2]="DOWN",e[e.LEFT=3]="LEFT"}(r||(r={}));var T=function(e,t){switch(e-t){case 1:return r.LEFT;case-1:return r.RIGHT;case 4:return r.UP;case-4:default:return r.DOWN}},P=[{fileName:"intricate-explorer-nSk4ko0uUjA-unsplash.jpg",attribution:'Photo by <a href="https://unsplash.com/@intricateexplorer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Intricate Explorer</a> on <a href="/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},{fileName:"intricate-explorer-T5b_pS1z8l4-unsplash.jpg",attribution:'Photo by <a href="https://unsplash.com/@intricateexplorer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Intricate Explorer</a> on <a href="/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},{fileName:"neven-krcmarek-9dTg44Qhx1Q-unsplash.jpg",attribution:'Photo by <a href="https://unsplash.com/@nevenkrcmarek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Neven Krcmarek</a> on <a href="/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},{fileName:"michael-payne-2lQKpLMJpvw-unsplash.jpeg",attribution:'Photo by <a href="https://unsplash.com/@mpayne66?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael Payne</a> on <a href="/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},{fileName:"michael-payne-GaMjSsrVU0k-unsplash.jpg",attribution:'Photo by <a href="https://unsplash.com/@mpayne66?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael Payne</a> on <a href="/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'}],k=function(e){var t;do{t=S(P)}while(t.fileName===(null===e||void 0===e?void 0:e.fileName));return t},q=n(6),w=n(2),C=n.n(w),z=n(16),I=n.n(z),M=n(0),U=function(e){var t,n=e.children,a=e.handleClick,u=e.isInPlace,o=e.image,i=e.position,c=e.movedDirection,l=e.sorted,s=Math.floor((i-1)/4),m=(i-1)%4,d=null!==c?"slide".concat(r[c]):"",f=I()((t={clickable:!l&&Boolean(a)},Object(q.a)(t,C.a.empty,16===i),Object(q.a)(t,C.a.inPlace,u),Object(q.a)(t,C.a.slideFromBelow,15===i),Object(q.a)(t,C.a.sorted,l),t),C.a.numberSquare,C.a[d]),h=16===i?{}:{backgroundImage:'url("/images/'.concat(o.fileName,'")'),backgroundSize:"400% 400%",backgroundPosition:"".concat(33.33*m,"% ").concat(33.33*s,"%")};return Object(M.jsx)("div",{className:f,onClick:a,style:h,children:n})},E=n(12),F=n.n(E),L=function(){var e=Object(a.useState)((function(){return _()})),t=Object(c.a)(e,2),n=t[0],r=t[1],u=Object(a.useState)((function(){return k()})),o=Object(c.a)(u,2),i=o[0],l=o[1],s=Object(a.useState)((function(){return null})),m=Object(c.a)(s,2),d=m[0],f=m[1],h=function(e){for(var t=0;t<e.length-1;t++)if(e[t]!==t+1)return!1;return!0}(n),p=function(e){return function(e,t){var n=e.indexOf(null);return N(n,t)}(n,e)?function(){f(function(e,t){var n=e.indexOf(null);return N(n,t)?{position:e[t],direction:T(t,n)}:null}(n,e)),r(b(n,e))}:h?j:void 0},j=function(){console.log("reset!"),l(k(i)),f(null),r(_())},v=n.map((function(e,t){return Object(M.jsx)(U,{handleClick:p(t),isInPlace:t+1===e,image:i,position:null===e?16:e,movedDirection:e===(null===d||void 0===d?void 0:d.position)?d.direction:null,sorted:h,children:e||""},"numSquare-".concat(t,"-").concat(e))}));Object(a.useEffect)((function(){h&&console.log("sorted!")}),[n,h]);var O=h?{backgroundImage:'url("/images/'.concat(i.fileName,'")'),backgroundSize:"contain"}:{};return Object(M.jsxs)("div",{children:[Object(M.jsxs)("div",{className:F.a.slidePuzzle+" square",style:O,children:[h&&Object(M.jsx)("span",{children:"Play again?"}),Object(M.jsx)("div",{className:"content",children:v})]}),Object(M.jsx)("div",{className:F.a.attribution,dangerouslySetInnerHTML:{__html:i.attribution}})]})},D=function(){return Object(M.jsx)("div",{className:"App",children:Object(M.jsx)(L,{})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,u=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),u(e),o(e)}))};i.a.render(Object(M.jsx)(u.a.StrictMode,{children:Object(M.jsx)(D,{})}),document.getElementById("root")),G()}},[[27,1,2]]]);
//# sourceMappingURL=main.936527e8.chunk.js.map