(function(){"use strict";var t={649:function(t,e,a){var s=a(6369),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[t._m(0),e("router-view")],1)},r=[function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"mainbar"}},[e("p",[t._v("1885 & Derivative Scouting User Interface")])])}],n=a(1001),i={},c=(0,n.Z)(i,o,r,!1,null,null,null),l=c.exports,p=a(2631),m=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"sidebar"}),e("div",{staticClass:"maincontainer"},t._l(t.teamstats,(function(a){return e("router-link",{key:a.teamnumber,staticClass:"datasect",attrs:{to:t.teamURL(a.teamnumber),tag:"div"}},[e("div",{staticClass:"onelookperf"},[t._v(" Excellent ")]),e("div",{staticClass:"datasectdata"},[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("Team "+t._s(a.teamnumber)+": "+t._s(a.teamname))]),e("table",{staticStyle:{"font-size":"10pt",color:"#6b6b6b"}},[e("tr",[e("td",[t._v("Avg Score: "+t._s(a.teamavgscore))]),e("td",[t._v("Reliability: "+t._s(a.reliability)+"%")]),e("td",[t._v("Most Reached Bar: "+t._s(a.bar))]),e("td",[t._v("Avg Climb Time: "+t._s(a.teamavgclimbtime)+" secs")])]),e("tr",[e("td",[t._v("Avg Cycle Time: "+t._s(a.teamavgcycle)+" secs")]),e("td",[t._v("Cooperation: "+t._s(a.cooperation))]),e("td",[t._v("Avg Penalties: "+t._s(a.penalties))]),e("td",[t._v("Match Strategy: "+t._s(a.strat))])])])])])})),1)])])},u=[],h=(a(7658),a(70)),g={name:"App",data(){return{csvData:[],correspondingTeamNames:[],teamstats:[]}},methods:{teamURL(t){var e="/about/"+t;return e},mostFrequent(t){return Object.entries(t.reduce(((t,e)=>(t[e]=t[e]?t[e]+1:1,t)),{})).reduce(((t,e)=>e[1]>=t[1]?e:t),[null,0])[0]},getteamdata(){var t=[];this.csvData.forEach((e=>{t.push(e.tnumber)})),t=[...new Set(t)];var e=[];t.forEach((t=>{var a=0,s=0,o=0,r=0,n=0,i=0,c=0,l=[],p=[];console.log(t),this.csvData.filter((e=>e.tnumber==t)).forEach((t=>{switch(i+=(parseInt(t.taxipts)||0)+(parseInt(t.lowget)||0)+2*(parseInt(t.highget)||0)+2*(parseInt(t.autoget)||0),t.climbget){case"Traversal Bar":i+=15;break;case"High Bar":i+=10;break;case"Mid Bar":i+=6;break;case"Low Bar":i+=4;break;default:i+=0}o+=parseInt(t.penaltycommit)||0,r+=parseInt(t.cyclesecs)||0,n+=parseInt(t.climbsecs)||0,s+=parseInt(t.cooprating)||0,t.broken.includes("No")&&(a+=1),l.push(t.climbget),p.push(t.matchstrat),c++})),h.ZP.get(`https://www.thebluealliance.com/api/v3/team/frc${t}/simple`).then((m=>{e.push({teamname:m.data.nickname,teamnumber:t,teamavgscore:Math.round(i/c),teamavgcycle:Math.round(r/c),reliability:Math.round(a/c*100),cooperation:Math.round(s/c),bar:"No Climb"!=this.mostFrequent(l)?this.mostFrequent(l).slice(0,-4):"No Climb",strat:this.mostFrequent(p),penalties:Math.round(o/c),teamavgclimbtime:Math.round(n/c)})}))})),e.forEach((t=>console.log(t))),this.teamstats=e}},computed:{},async mounted(){h.ZP.defaults.headers.common["X-TBA-Auth-Key"]="fbkgBWLltUBDHgZLy1P2OAnKWX4VfSHjEJDYNH9Jz9vXqpjxkUJpxXKJg4HYImIn",fetch("/scouting.tsv").then((t=>t.text())).then((t=>{var e=["date","name","tnumber","tmatch","dstation","autonposit","taxipts","autoshot","autoget","matchstrat","lowshot","lowget","highshot","highget","cyclesecs","shootpoint","offenserating","oppcargoshot","oppcargoget","defenserating","climbtried","climbget","climbsecs","broken","penaltycommit","penaltydrawn","allscore","problems","cooprating","notes","opponentscore","cargorp","climberrp"],a=t.slice(t.indexOf("\r\n")+1).split("\n");const s=a.map((function(t){const a=t.split("\t"),s=e.reduce((function(t,e,s){return t[e]=a[s],t}),{});return s}));this.csvData=s,this.csvData.shift(),this.getteamdata()}))}},v=g,d=(0,n.Z)(v,m,u,!1,null,"4ca11e03",null),b=d.exports,_=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"topbar"},[e("router-link",{staticClass:"return",attrs:{to:"/",tag:"button"}},[e("i",{staticClass:"far fa-chevron-left",staticStyle:{"font-size":"14pt","margin-right":"5px"}}),t._v("Team List ")]),e("span",[t._v("Information about Team "+t._s(t.$route.params.teamid))])],1),e("div",{staticClass:"content"},[e("div",{staticClass:"maincontainer"},[e("h1",[t._v("Team "+t._s(t.$route.params.teamid)+": "+t._s(this.teamstats.teamname))]),e("br"),e("br"),e("div",{staticClass:"maindatacont"},[e("div",{staticClass:"teamtable"},[e("span",{staticStyle:{"font-size":"20pt","font-weight":"bold"}},[t._v("Robot Stats")]),e("p",[t._v("Avg Score: "+t._s(t.teamstats.teamavgscore))]),e("p",[t._v("Reliability: "+t._s(t.teamstats.reliability)+"%")]),e("p",[t._v("Most Reached Bar: "+t._s(t.teamstats.bar))]),e("p",[t._v("Avg Climb Time: "+t._s(t.teamstats.teamavgclimbtime)+" secs")]),e("p",[t._v("Avg Cycle Time: "+t._s(t.teamstats.teamavgcycle)+" secs")]),e("p",[t._v("Cooperation: "+t._s(t.teamstats.cooperation)+"/10")]),e("p",[t._v("Avg Penalties: "+t._s(t.teamstats.penalties))]),e("p",[t._v("Match Strategy: "+t._s(t.teamstats.strat))]),e("p",[t._v("Auton Accuracy: "+t._s(t.teamstats.autonacc)+"%")]),e("p",[t._v("Low Goal Acc.: "+t._s(t.teamstats.lowacc)+"%")]),e("p",[t._v("High Goal Acc.: "+t._s(t.teamstats.highacc)+"%")]),e("p",[t._v("Gets Cargo RP: "+t._s(t.teamstats.cargorp))]),e("p",[t._v("Gets Climb RP: "+t._s(t.teamstats.climbrp))]),e("p",[t._v("Shoots From: "+t._s(t.teamstats.shootpt))])]),t._m(0)]),e("br"),e("hr"),e("br"),e("h1",[t._v("All Entries (for team)")]),t._m(1)])])])},f=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"graphcarousel"},[e("p",[t._v("dogs")]),e("p",[t._v("dogs")]),e("p",[t._v("dogs")]),e("p",[t._v("dogs")]),e("p",[t._v("dogs")]),e("p",[t._v("dogs")]),e("p",[t._v("dogs")]),e("p",[t._v("dogs")]),e("p",[t._v("dogs")]),e("p",[t._v("dogs")]),e("p",[t._v("dogs")]),e("p",[t._v("dogs")]),e("p",[t._v("dogs")]),e("p",[t._v("dogs")]),e("p",[t._v("dogs")]),e("p",[t._v("dogs")]),e("p",[t._v("dogs")]),e("p",[t._v("dogs")]),e("p",[t._v("dogs")]),e("p",[t._v("dogs")]),e("p",[t._v("dogs")]),e("p",[t._v("dogs")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"datasect"},[e("div",{staticClass:"datasectdata"},[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("egg")]),e("table",{staticStyle:{"font-size":"10pt",color:"#6b6b6b"}},[e("tr",[e("td",[t._v("Avg Score: egg")]),e("td",[t._v("Reliability: egg")]),e("td",[t._v("Most Reached Bar: egg")]),e("td",[t._v("Avg Climb Time: egg")])]),e("tr",[e("td",[t._v("Avg Cycle Time: egg")]),e("td",[t._v("Cooperation: egg")]),e("td",[t._v("Avg Penalties: egg")]),e("td",[t._v("Match Strategy: egg")])])])])])}],y={name:"App",data(){return{csvData:[],correspondingTeamNames:[],teamstats:{}}},methods:{mostFrequent(t){return Object.entries(t.reduce(((t,e)=>(t[e]=t[e]?t[e]+1:1,t)),{})).reduce(((t,e)=>e[1]>=t[1]?e:t),[null,0])[0]},getteamdata(){var t=[];this.csvData.forEach((e=>{t.push(e.tnumber)})),t=[...new Set(t)];var e=0,a=0,s=0,o=0,r=0,n=0,i=0,c=0,l=0,p=0,m=[],u=[],g=[],v=[],d=[];console.log(this.$route.params.teamid),this.csvData.filter((t=>t.tnumber==this.$route.params.teamid)).forEach((t=>{switch(n+=(parseInt(t.taxipts)||0)+(parseInt(t.lowget)||0)+2*(parseInt(t.highget)||0)+2*(parseInt(t.autoget)||0),t.climbget){case"Traversal Bar":n+=15;break;case"High Bar":n+=10;break;case"Mid Bar":n+=6;break;case"Low Bar":n+=4;break;default:n+=0}s+=parseInt(t.penaltycommit)||0,o+=parseInt(t.cyclesecs)||0,r+=parseInt(t.climbsecs)||0,a+=parseInt(t.cooprating)||0,t.broken.includes("No")&&(e+=1),c+=(parseInt(t.autoget)||0)/(parseInt(t.autoshot)||0)*100,l+=(parseInt(t.lowget)||0)/(parseInt(t.lowshot)||0)*100||0,p+=(parseInt(t.highget)||0)/(parseInt(t.highshot)||0)*100||0,console.log(`Low Get: ${parseInt(t.lowget)||0}`),console.log(`High Get: ${parseInt(t.highget)||0}`),console.log(`Low Shot: ${parseInt(t.lowshot)||0}`),console.log(`High Shot: ${parseInt(t.highshot)||0}`),console.log(`Low Accuracy: ${l}`),console.log(`High Accuracy: ${p}`),console.log(parseInt(t.lowget)||0),m.push(t.climbget),u.push(t.matchstrat),g.push(t.cargorp),v.push(t.climberrp),d.push(t.shootpoint),i++})),h.ZP.get(`https://www.thebluealliance.com/api/v3/team/frc${this.$route.params.teamid}/simple`).then((t=>{this.teamstats={teamname:t.data.nickname,teamnumber:this.$route.params.teamid,teamavgscore:Math.round(n/i),teamavgcycle:Math.round(o/i),reliability:Math.round(e/i*100),cooperation:Math.round(a/i),bar:"No Climb"!=this.mostFrequent(m)?this.mostFrequent(m).slice(0,-4):"No Climb",strat:this.mostFrequent(u),penalties:Math.round(s/i),teamavgclimbtime:Math.round(r/i),autonacc:Math.round(c/i),lowacc:Math.round(l/i),highacc:Math.round(p/i),cargorp:this.mostFrequent(g),climbrp:this.mostFrequent(v),shootpt:this.mostFrequent(d)}}))}},computed:{},async mounted(){h.ZP.defaults.headers.common["X-TBA-Auth-Key"]="fbkgBWLltUBDHgZLy1P2OAnKWX4VfSHjEJDYNH9Jz9vXqpjxkUJpxXKJg4HYImIn",fetch("/scouting.tsv").then((t=>t.text())).then((t=>{var e=["date","name","tnumber","tmatch","dstation","autonposit","taxipts","autoshot","autoget","matchstrat","lowshot","lowget","highshot","highget","cyclesecs","shootpoint","offenserating","oppcargoshot","oppcargoget","defenserating","climbtried","climbget","climbsecs","broken","penaltycommit","penaltydrawn","allscore","problems","cooprating","notes","opponentscore","cargorp","climberrp"],a=t.slice(t.indexOf("\r\n")+1).split("\n");const s=a.map((function(t){const a=t.split("\t"),s=e.reduce((function(t,e,s){return t[e]=a[s],t}),{});return s}));this.csvData=s,this.csvData.shift(),this.getteamdata()}))}},w=y,C=(0,n.Z)(w,_,f,!1,null,"1e933a4e",null),I=C.exports;s.ZP.use(p.ZP);const k=[{path:"/",name:"home",component:b},{path:"/about/:teamid",name:"about",component:I}],A=new p.ZP({routes:k});var M=A;s.ZP.config.productionTip=!1,new s.ZP({router:M,render:t=>t(l)}).$mount("#app")}},e={};function a(s){var o=e[s];if(void 0!==o)return o.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,s,o,r){if(!s){var n=1/0;for(p=0;p<t.length;p++){s=t[p][0],o=t[p][1],r=t[p][2];for(var i=!0,c=0;c<s.length;c++)(!1&r||n>=r)&&Object.keys(a.O).every((function(t){return a.O[t](s[c])}))?s.splice(c--,1):(i=!1,r<n&&(n=r));if(i){t.splice(p--,1);var l=o();void 0!==l&&(e=l)}}return e}r=r||0;for(var p=t.length;p>0&&t[p-1][2]>r;p--)t[p]=t[p-1];t[p]=[s,o,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var o,r,n=s[0],i=s[1],c=s[2],l=0;if(n.some((function(e){return 0!==t[e]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(c)var p=c(a)}for(e&&e(s);l<n.length;l++)r=n[l],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(p)},s=self["webpackChunkrbtx_ui"]=self["webpackChunkrbtx_ui"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(649)}));s=a.O(s)})();
//# sourceMappingURL=app.3dd5cb74.js.map