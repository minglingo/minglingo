(this.webpackJsonpqrbingo=this.webpackJsonpqrbingo||[]).push([[0],[,function(e){e.exports=JSON.parse('{"application":{"name":"qrbingo"},"bingo":{"sheet":{"width":4,"height":4},"slot":{"variations":[{"value":"istj","label":"IS\\nTJ","description":"The Inspector"},{"value":"infj","label":"IN\\nFJ","description":"The Counselor"},{"value":"intj","label":"IN\\nTJ","description":"The Mastermind"},{"value":"enfj","label":"EN\\nFJ","description":"The Giver"},{"value":"istp","label":"IS\\nTP","description":"The Craftsman"},{"value":"esfj","label":"ES\\nFJ","description":"The Provider"},{"value":"infp","label":"IN\\nFP","description":"The Idealist"},{"value":"esfp","label":"ES\\nFP","description":"The Performer"},{"value":"enfp","label":"EN\\nFP","description":"The Champion"},{"value":"estp","label":"ES\\nTP","description":"The Doer"},{"value":"estj","label":"ES\\nTJ","description":"The Supervisor"},{"value":"entj","label":"EN\\nTJ","description":"The Commander"},{"value":"intp","label":"IN\\nTP","description":"The Thinker"},{"value":"isfj","label":"IS\\nFJ","description":"The Nurturer"},{"value":"entp","label":"EN\\nTP","description":"The Visionary"},{"value":"isfp","label":"IS\\nFP","description":"The Composer"}]}}}')},,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/refresh.8be2e2b2.svg"},,function(e,t,n){e.exports=n.p+"static/media/camera.2723d63e.svg"},,function(e,t,n){e.exports=n(25)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(8),o=n.n(r),s=(n(19),n(6)),c=(n(20),n(3)),u=n.n(c),l=(n(21),function(e){var t=e.slot;return a.a.createElement("div",{className:u()("sheet-cell",{punched:t.punched,bingo:t.bingo})},t.label.split("\n").map((function(e,t){return a.a.createElement("div",{key:t},e)})))}),h=function(e){var t=e.row;return a.a.createElement("div",{className:"sheet-row"},t.map((function(e,t){return a.a.createElement(l,{key:t,slot:e})})))},v=function(e){var t=e.sheet;return a.a.createElement("div",{className:u()("sheet-wrapper",{bingo:t.isBingo()})},t.slots.map((function(e,t){return a.a.createElement(h,{key:t,row:e})})))},f=n(13),p=n(2),d=n(9),g=function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{x:0,y:0},o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],s=arguments.length>6&&void 0!==arguments[6]&&arguments[6];Object(p.a)(this,e),this.value=t,this.label=n,this.description=i,this.imageURL=a,this.position=r,this.punched=o,this.bingo=s},m=function(){function e(t,n,i){Object(p.a)(this,e),this.width=t,this.height=n,this.slots=i,this.length=void 0,this.initialized=void 0,this.length=t*n,this.initialized=new Date}return Object(d.a)(e,[{key:"hit",value:function(e){return this.slots.flat().find((function(t){return t.value===e.value}))}},{key:"punch",value:function(e){var t=this;return this.slots.flat().filter((function(t){return t.value===e.value})).map((function(e){var n=e.position,i=n.x,a=n.y;t.slots[a][i].punched=!0})),this}},{key:"isBingo",value:function(){return 0!==this.getBingo().length}},{key:"getBingo",value:function(){var e=[];return e=(e=(e=e.concat(this.getHorizontalBingo())).concat(this.getVerticalBingo())).concat(this.getDiagonalBingo()),this.markSlotsIfBingo(e),e}},{key:"markSlotsIfBingo",value:function(e){var t=this;e.map((function(e){return t.slots[e.position.y][e.position.x].bingo=!0}))}},{key:"getHorizontalBingo",value:function(){for(var e=0;e<this.height;e++)if(this.slots[e].every((function(e){return e.punched})))return this.slots[e];return[]}},{key:"getVerticalBingo",value:function(){for(var e=this,t=function(t){if(e.slots.every((function(e){return e[t].punched})))return{v:e.slots.map((function(e){return e[t]})).flat()}},n=0;n<this.width;n++){var i=t(n);if("object"===typeof i)return i.v}return[]}},{key:"getDiagonalBingo",value:function(){var e=[];if(this.width!==this.height)return[];var t=Math.min(this.width,this.height),n=this.slots.map((function(e,t){return e[t]}));n.every((function(e){return e.punched}))&&(e=e.concat(n));var i=this.slots.map((function(e,n){return e[t-n-1]}));return i.every((function(e){return e.punched}))&&(e=e.concat(i)),e}}],[{key:"arrayShuffle",value:function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),i=[e[n],e[t]];e[t]=i[0],e[n]=i[1]}return e}},{key:"getShuffledListWithLength",value:function(e,t){for(var n=[];n.length<t;)n.push.apply(n,Object(f.a)(this.arrayShuffle(e)));return n}},{key:"createSlot",value:function(e,t,n){var i=e.value,a=e.label,r=e.description,o=e.imageURL,s=[t%n,Math.floor(t/n)];return new g(i,a,r,o,{x:s[0],y:s[1]})}},{key:"create",value:function(t){var n=this,i=t.sheet,a=i.width,r=i.height,o=Array(r).fill(!0).map((function(){return[]})),s=a*r;return this.getShuffledListWithLength(t.slot.variations,s).map((function(e,t){var i=n.createSlot(e,t,a);return o[i.position.y].push(i)})),new e(t.sheet.width,t.sheet.height,o)}}]),e}(),b=n(1),y=Object(i.createContext)({bingo:{sheet:m.create(b.bingo)},punch:function(e){},scanning:!1,startScanning:function(){},stopScanning:function(){}}),w=n(10),E=n.n(w),S=(n(22),function(e){var t=e.app,n=e.sheet,i=e.reset;return a.a.createElement("div",{className:"game-menu"},a.a.createElement("h1",null,t.name),a.a.createElement("span",{className:"start-time"},n.initialized.toLocaleString()),a.a.createElement("img",{src:E.a,alt:"Restart Game",onClick:i}))}),k=n(4),T=n.n(k),j=n(11),I=(n(24),n(12)),N=n.n(I),O=n(5),P=n.n(O);var x={audio:!1,video:{width:80,height:80,facingMode:/(iPhone|iPad|iPod|Android)/i.test(navigator.userAgent)?{exact:"environment"}:"user"}},B=function(e){var t,n=e.punch,r=Object(i.createRef)(),o=document.createElement("canvas");o.width=80,o.height=80;var s=function(e){var i=function(e){var t=e.video,n=e.canvas;if(!n)return null;if(!t)return null;if(!t.srcObject)return null;var i=n.getContext("2d");if(!i)return null;i.drawImage(t,0,0,t.width,t.height);var a=i.getImageData(0,0,t.width,t.height);return P()(a.data,t.width,t.height)}({video:e,canvas:o});i&&(clearInterval(t),e.pause(),n(JSON.parse(i.data)))},c=function(){var e=Object(j.a)(T.a.mark((function e(){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.current){e.next=2;break}return e.abrupt("return");case 2:return r.current.play(),r.current.setAttribute("muted",""),e.next=6,navigator.mediaDevices.getUserMedia(x);case 6:n=e.sent,r.current.srcObject=n,t=setInterval((function(){return s(r.current)}),1e3);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("div",{className:"video-capture-container"},a.a.createElement("div",null,a.a.createElement("video",{ref:r,autoPlay:!0,playsInline:!0,width:80,height:80})),a.a.createElement("div",{onClick:c},a.a.createElement("img",{src:N.a,alt:"Star Scanning QR"})))},J=function(e){var t=e.reset;return a.a.createElement(y.Consumer,null,(function(e){var n=e.bingo,i=e.punch;return a.a.createElement("div",{className:"App"},a.a.createElement(S,{app:b.application,sheet:n.sheet,reset:t}),a.a.createElement(v,{sheet:n.sheet}),a.a.createElement(B,{punch:i}))}))},C=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(i.useState)({sheet:m.create(b.bingo)}),c=Object(s.a)(o,2),u=c[0],l=c[1],h={bingo:u,punch:function(e){var t=u.sheet.hit(e.payload);t&&l({sheet:u.sheet.punch(t)})},scanning:n,startScanning:function(){return r(!0)},stopScanning:function(){return r(!1)}};return a.a.createElement(y.Provider,{value:h},a.a.createElement(J,{reset:function(){window.confirm("Are you sure to delete current progress and start new game?")&&l({sheet:m.create(b.bingo)})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[14,1,2]]]);
//# sourceMappingURL=main.575cd710.chunk.js.map