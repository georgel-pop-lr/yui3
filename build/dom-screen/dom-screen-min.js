YUI.add("dom-screen",function(t,e){var g,a,d,u,l,s,h,n,p,r,c,f,m,S,w,v;d="documentElement",u="compatMode",l="position",s="BackCompat",h="getBoundingClientRect",n="getComputedStyle",p=(g=t).DOM,r=/^t(?:able|d|h)$/i,g.UA.ie&&(a="BackCompat"!==g.config.doc[u]?d:"body"),g.mix(p,{winHeight:function(t){return p._getWinSize(t).height},winWidth:function(t){return p._getWinSize(t).width},docHeight:function(t){var e=p._getDocSize(t).height;return Math.max(e,p._getWinSize(t).height)},docWidth:function(t){var e=p._getDocSize(t).width;return Math.max(e,p._getWinSize(t).width)},docScrollX:function(t,e){t=(e=e||t?p._getDoc(t):g.config.doc).defaultView,t=t?t.pageXOffset:0;return Math.max(e[d].scrollLeft,e.body.scrollLeft,t)},docScrollY:function(t,e){t=(e=e||t?p._getDoc(t):g.config.doc).defaultView,t=t?t.pageYOffset:0;return Math.max(e[d].scrollTop,e.body.scrollTop,t)},getXY:g.config.doc[d][h]?function(t){var e,o,i,n,r,c,f,l=null;return t&&t.tagName&&(((f=(o=(r=t.ownerDocument)[u])!==s?r[d]:r.body).contains?f.contains(t):g.DOM.contains(f,t))?(c=(c=r.defaultView)&&"pageXOffset"in c?(e=c.pageXOffset,c.pageYOffset):(e=a?r[a].scrollLeft:p.docScrollX(t,r),a?r[a].scrollTop:p.docScrollY(t,r)),g.UA.ie&&(!r.documentMode||r.documentMode<8||o===s)&&(i=f.clientLeft,n=f.clientTop),l=[(r=t[h]()).left,r.top],(i||n)&&(l[0]-=i,l[1]-=n),(c||e)&&(!g.UA.ios||4.2<=g.UA.ios)&&(l[0]+=e,l[1]+=c)):l=p._getOffset(t)),l}:function(t){var e,o,i,n,r,c=null;if(t)if(p.inDoc(t)){for(c=[t.offsetLeft,t.offsetTop],e=t.ownerDocument,o=t,i=!!(g.UA.gecko||519<g.UA.webkit);o=o.offsetParent;)c[0]+=o.offsetLeft,c[1]+=o.offsetTop,i&&(c=p._calcBorders(o,c));if("fixed"!=p.getStyle(t,l))for(o=t;o=o.parentNode;)n=o.scrollTop,r=o.scrollLeft,g.UA.gecko&&"visible"!==p.getStyle(o,"overflow")&&(c=p._calcBorders(o,c)),(n||r)&&(c[0]-=r,c[1]-=n);c[0]+=p.docScrollX(t,e),c[1]+=p.docScrollY(t,e)}else c=p._getOffset(t);return c},getScrollbarWidth:g.cached(function(){var t=g.config.doc,e=t.createElement("div"),o=t.getElementsByTagName("body")[0],i=.1;return o&&(e.style.cssText="position:absolute;visibility:hidden;overflow:scroll;width:20px;",e.appendChild(t.createElement("p")).style.height="1px",o.insertBefore(e,o.firstChild),i=e.offsetWidth-e.clientWidth,o.removeChild(e)),i},null,.1),getX:function(t){return p.getXY(t)[0]},getY:function(t){return p.getXY(t)[1]},setXY:function(t,e,o){var i,n,r,c,f=p.setStyle;t&&e&&(n=p.getStyle(t,l),r=(r=p.OFFSET_XY)||("rtl"===p.getComputedStyle(t,"direction")?"right":"left"),i=p._getOffset(t,r),"static"==n&&f(t,l,"relative"),n=p._getDirXY(t,r),c=e[0],"right"===r&&(c=p.winWidth()-(e[0]+parseInt(p.getComputedStyle(t,"width"),10)),i[0]||(o=o||!1)),null!==c&&f(t,r,c-n[0]+i[0]+"px"),null!==e[1]&&f(t,"top",e[1]-n[1]+i[1]+"px"),o||(r=p.getXY(t))[0]===e[0]&&r[1]===e[1]||p.setXY(t,e,!0))},setX:function(t,e){return p.setXY(t,[e,null])},setY:function(t,e){return p.setXY(t,[null,e])},swapXY:function(t,e){var o=p.getXY(t);p.setXY(t,p.getXY(e)),p.setXY(e,o)},_calcBorders:function(t,e){var o=parseInt(p[n](t,"borderTopWidth"),10)||0,i=parseInt(p[n](t,"borderLeftWidth"),10)||0;return g.UA.gecko&&r.test(t.tagName)&&(i=o=0),e[0]+=i,e[1]+=o,e},_getWinSize:function(t,e){var t=(e=e||t?p._getDoc(t):g.config.doc).defaultView||e.parentWindow,o=e[u],i=t.innerHeight,t=t.innerWidth,n=e[d];return o&&!g.UA.opera&&(i=(n="CSS1Compat"!=o?e.body:n).clientHeight,t=n.clientWidth),{height:i,width:t}},_getDocSize:function(t){var t=t?p._getDoc(t):g.config.doc,e=t[d];return{height:(e="CSS1Compat"!=t[u]?t.body:e).scrollHeight,width:e.scrollWidth}},_getDirXY:function(t,e){var o=p.getXY(t);return"right"===e&&(o[0]=p.winWidth()-(o[0]+parseInt(p.getComputedStyle(t,"width"),10))),o}}),f="right",m="bottom",S="left",w=function(t,e){var o=Math.max(t.top,e.top),i=Math.min(t[f],e[f]),n=Math.min(t[m],e[m]),t=Math.max(t[S],e[S]),e={};return e.top=o,e[f]=i,e[m]=n,e[S]=t,e},v=(c=t).DOM,c.mix(v,{region:function(t){var e=v.getXY(t),o=!1;return o=t&&e?v._getRegion(e[1],e[0]+t.offsetWidth,e[1]+t.offsetHeight,e[0]):o},intersect:function(t,e,o){var i=o||v.region(t),n={};if(e.tagName)n=v.region(e);else{if(!c.Lang.isObject(e))return!1;n=e}return{top:(n=w(n,i)).top,right:n[f],bottom:n[m],left:n[S],area:(n[m]-n.top)*(n[f]-n[S]),yoff:n[m]-n.top,xoff:n[f]-n[S],inRegion:v.inRegion(t,e,!1,o)}},inRegion:function(t,e,o,i){var n={},i=i||v.region(t);if(e.tagName)n=v.region(e);else{if(!c.Lang.isObject(e))return!1;n=e}return o?i[S]>=n[S]&&i[f]<=n[f]&&i.top>=n.top&&i[m]<=n[m]:(t=w(n,i))[m]>=t.top&&t[f]>=t[S]},inViewportRegion:function(t,e,o){return v.inRegion(t,v.viewportRegion(t),e,o)},_getRegion:function(t,e,o,i){var n={};return n.top=n[1]=t,n[S]=n[0]=i,n[m]=o,n[f]=e,n.width=n[f]-n[S],n.height=n[m]-n.top,n},viewportRegion:function(t){var e,o,i=!1;return(t=t||c.config.doc.documentElement)&&(e=v.docScrollX(t),o=v.docScrollY(t),i=v._getRegion(o,v.winWidth(t)+e,o+v.winHeight(t),e)),i}})},"@VERSION@",{requires:["dom-base","dom-style"]});