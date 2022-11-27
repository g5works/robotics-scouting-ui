(function(){"use strict";var t={2997:function(t,a,e){var s=e(6369),r=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"app"}},[t._m(0),a("router-view")],1)},o=[function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"mainbar"}},[a("p",[t._v("1885 & Derivative Scouting User Interface")])])}],i=e(1001),n={},c=(0,i.Z)(n,r,o,!1,null,null,null),l=c.exports,m=e(2631),u=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"content"},[a("div",{staticClass:"sidebar"}),a("div",{staticClass:"maincontainer"},t._l(t.teamstats,(function(e){return a("router-link",{key:e.teamnumber,staticClass:"datasect",attrs:{to:t.teamURL(e.teamnumber),tag:"div"}},[a("div",{staticClass:"onelookperf"},[t._v(" Excellent ")]),a("div",{staticClass:"datasectdata"},[a("span",{staticStyle:{"font-weight":"bold"}},[t._v("Team "+t._s(e.teamnumber)+": "+t._s(e.teamname))]),a("table",{staticStyle:{"font-size":"10pt",color:"#6b6b6b"}},[a("tr",[a("td",[t._v("Avg Score: "+t._s(e.teamavgscore))]),a("td",[t._v("Reliability: "+t._s(e.reliability)+"%")]),a("td",[t._v("Most Reached Bar: "+t._s(e.bar))]),a("td",[t._v("Avg Climb Time: "+t._s(e.teamavgclimbtime)+" secs")])]),a("tr",[a("td",[t._v("Avg Cycle Time: "+t._s(e.teamavgcycle)+" secs")]),a("td",[t._v("Cooperation: "+t._s(e.cooperation)+"/10")]),a("td",[t._v("Avg Penalties: "+t._s(e.penalties))]),a("td",[t._v("Match Strategy: "+t._s(e.strat))])])])])])})),1)])])},p=[],v=(e(7658),e(70)),d=e(4275),h=e(1178),g={name:"App",data(){return{csvData:[],correspondingTeamNames:[],teamstats:[]}},methods:{teamURL(t){var a="/about/"+t;return a},mostFrequent(t){return Object.entries(t.reduce(((t,a)=>(t[a]=t[a]?t[a]+1:1,t)),{})).reduce(((t,a)=>a[1]>=t[1]?a:t),[null,0])[0]},getteamdata(){var t=[];this.csvData.forEach((a=>{t.push(a.team)})),t=[...new Set(t)];var a=[];t.forEach((t=>{var e=0,s=0,r=0,o=0,i=0,n=0,c=0,l=[],m=[];console.log(t),this.csvData.filter((a=>a.team==t)).forEach((t=>{switch(n+=(parseInt(t.taxipts)||0)+(parseInt(t.lowget)||0)+2*(parseInt(t.highget)||0)+2*(parseInt(t.autoget)||0),t.climbget){case"Traversal Bar":n+=15;break;case"High Bar":n+=10;break;case"Mid Bar":n+=6;break;case"Low Bar":n+=4;break;default:n+=0}r+=parseInt(t.commpenalties)||0,o+=parseInt(t.cycletime)||0,i+=parseInt(t.timetoclimb)||0,s+=parseInt(t.cooprating)||0,t.broken.includes("No")&&(e+=1),l.push(t.climbget),m.push(t.matchstrat),c++})),v.ZP.get(`https://www.thebluealliance.com/api/v3/team/frc${t}/simple`).then((u=>{a.push({teamname:u.data.nickname,teamnumber:t,teamavgscore:Math.round(n/c),teamavgcycle:Math.round(o/c),reliability:Math.round(e/c*100),cooperation:Math.round(s/c),bar:"No Climb"!=this.mostFrequent(l)?this.mostFrequent(l).slice(0,-4):"No Climb",strat:this.mostFrequent(m),penalties:Math.round(r/c),teamavgclimbtime:Math.round(i/c)})}))})),a.forEach((t=>console.log(t))),this.teamstats=a}},computed:{},async mounted(){v.ZP.defaults.headers.common["X-TBA-Auth-Key"]="fbkgBWLltUBDHgZLy1P2OAnKWX4VfSHjEJDYNH9Jz9vXqpjxkUJpxXKJg4HYImIn";const t={databaseURL:"https://frcscoutsheet-default-rtdb.firebaseio.com"},a=(0,d.ZF)(t),e=(0,h.N8)(a),s=(0,h.iH)(e);(0,h.jM)(s,(t=>{this.csvData=t.val(),console.log(this.csvData),this.getteamdata()}))}},_=g,b=(0,i.Z)(_,u,p,!1,null,"23e8d7ef",null),f=b.exports,y=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"topbar"},[a("router-link",{staticClass:"return",attrs:{to:"/",tag:"button"}},[a("i",{staticClass:"far fa-chevron-left",staticStyle:{"font-size":"14pt","margin-right":"5px"}}),t._v("Team List ")]),a("span",[t._v("Information about Team "+t._s(t.$route.params.teamid))])],1),a("div",{staticClass:"content"},[a("div",{staticClass:"maincontainer"},[a("h1",[t._v("Team "+t._s(t.$route.params.teamid)+": "+t._s(this.teamstats.teamname))]),a("br"),a("br"),a("div",{staticClass:"maindatacont"},[a("div",{staticClass:"teamtable"},[a("span",{staticStyle:{"font-size":"20pt","font-weight":"bold"}},[t._v("Robot Stats")]),a("p",[t._v("Avg Score: "+t._s(t.teamstats.teamavgscore))]),a("p",[t._v("Reliability: "+t._s(t.teamstats.reliability)+"%")]),a("p",[t._v("Most Reached Bar: "+t._s(t.teamstats.bar))]),a("p",[t._v("Avg Climb Time: "+t._s(t.teamstats.teamavgclimbtime)+" secs")]),a("p",[t._v("Avg Cycle Time: "+t._s(t.teamstats.teamavgcycle)+" secs")]),a("p",[t._v("Cooperation: "+t._s(t.teamstats.cooperation)+"/10")]),a("p",[t._v("Avg Penalties: "+t._s(t.teamstats.penalties))]),a("p",[t._v("Match Strategy: "+t._s(t.teamstats.strat))]),a("p",[t._v("Auton Accuracy: "+t._s(t.teamstats.autonacc)+"%")]),a("p",[t._v("Low Goal Acc.: "+t._s(t.teamstats.lowacc)+"%")]),a("p",[t._v("High Goal Acc.: "+t._s(t.teamstats.highacc)+"%")]),a("p",[t._v("Gets Cargo RP: "+t._s(t.teamstats.cargorp))]),a("p",[t._v("Gets Climb RP: "+t._s(t.teamstats.climbrp))]),a("p",[t._v("Shoots From: "+t._s(t.teamstats.shootpt))])]),t._m(0)]),a("br"),a("hr"),a("br"),a("h1",[t._v("All Entries (for team)")]),t._m(1)])])])},w=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"graphcarousel"},[a("p",[t._v("dogs")]),a("p",[t._v("dogs")]),a("p",[t._v("dogs")]),a("p",[t._v("dogs")]),a("p",[t._v("dogs")]),a("p",[t._v("dogs")]),a("p",[t._v("dogs")]),a("p",[t._v("dogs")]),a("p",[t._v("dogs")]),a("p",[t._v("dogs")]),a("p",[t._v("dogs")]),a("p",[t._v("dogs")]),a("p",[t._v("dogs")]),a("p",[t._v("dogs")]),a("p",[t._v("dogs")]),a("p",[t._v("dogs")]),a("p",[t._v("dogs")]),a("p",[t._v("dogs")]),a("p",[t._v("dogs")]),a("p",[t._v("dogs")]),a("p",[t._v("dogs")]),a("p",[t._v("dogs")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"datasect"},[a("div",{staticClass:"datasectdata"},[a("span",{staticStyle:{"font-weight":"bold"}},[t._v("egg")]),a("table",{staticStyle:{"font-size":"10pt",color:"#6b6b6b"}},[a("tr",[a("td",[t._v("Avg Score: egg")]),a("td",[t._v("Reliability: egg")]),a("td",[t._v("Most Reached Bar: egg")]),a("td",[t._v("Avg Climb Time: egg")])]),a("tr",[a("td",[t._v("Avg Cycle Time: egg")]),a("td",[t._v("Cooperation: egg")]),a("td",[t._v("Avg Penalties: egg")]),a("td",[t._v("Match Strategy: egg")])])])])])}],C={name:"App",data(){return{csvData:[],correspondingTeamNames:[],teamstats:{}}},methods:{mostFrequent(t){return Object.entries(t.reduce(((t,a)=>(t[a]=t[a]?t[a]+1:1,t)),{})).reduce(((t,a)=>a[1]>=t[1]?a:t),[null,0])[0]},getteamdata(){var t=[];this.csvData.forEach((a=>{t.push(a.team)})),t=[...new Set(t)];var a=0,e=0,s=0,r=0,o=0,i=0,n=0,c=0,l=0,m=0,u=[],p=[],d=[],h=[],g=[];console.log(this.$route.params.teamid),this.csvData.filter((t=>t.team==this.$route.params.teamid)).forEach((t=>{switch(i+=(parseInt(t.taxipts)||0)+(parseInt(t.lowget)||0)+2*(parseInt(t.highget)||0)+2*(parseInt(t.autoget)||0),t.climbget){case"Traversal Bar":i+=15;break;case"High Bar":i+=10;break;case"Mid Bar":i+=6;break;case"Low Bar":i+=4;break;default:i+=0}s+=parseInt(t.commpenalties)||0,r+=parseInt(t.cycletime)||0,o+=parseInt(t.timetoclimb)||0,e+=parseInt(t.cooprating)||0,t.broken.includes("No")&&(a+=1),c+=(parseInt(t.autonget)||0)/(parseInt(t.autonshot)||0)*100||0,l+=(parseInt(t.lowget)||0)/(parseInt(t.lowshot)||0)*100||0,m+=(parseInt(t.highget)||0)/(parseInt(t.highshot)||0)*100||0,u.push(t.climbget),p.push(t.matchstrat),d.push(t.cargorp),h.push(t.climbrp),g.push(t.shotlocation),n++})),v.ZP.get(`https://www.thebluealliance.com/api/v3/team/frc${this.$route.params.teamid}/simple`).then((t=>{this.teamstats={teamname:t.data.nickname,teamnumber:this.$route.params.teamid,teamavgscore:Math.round(i/n),teamavgcycle:Math.round(r/n),reliability:Math.round(a/n*100),cooperation:Math.round(e/n),bar:"No Climb"!=this.mostFrequent(u)?this.mostFrequent(u).slice(0,-4):"No Climb",strat:this.mostFrequent(p),penalties:Math.round(s/n),teamavgclimbtime:Math.round(o/n),autonacc:Math.round(c/n),lowacc:Math.round(l/n),highacc:Math.round(m/n),cargorp:this.mostFrequent(d),climbrp:this.mostFrequent(h),shootpt:this.mostFrequent(g)}}))}},computed:{},async mounted(){const t={databaseURL:"https://frcscoutsheet-default-rtdb.firebaseio.com"},a=(0,d.ZF)(t),e=(0,h.N8)(a),s=(0,h.iH)(e);(0,h.jM)(s,(t=>{this.csvData=t.val(),console.log(this.csvData),this.getteamdata()}))}},I=C,M=(0,i.Z)(I,y,w,!1,null,"6a1617ad",null),k=M.exports;s.ZP.use(m.ZP);const A=[{path:"/",name:"home",component:f},{path:"/about/:teamid",name:"about",component:k}],S=new m.ZP({routes:A});var T=S;s.ZP.config.productionTip=!1,new s.ZP({router:T,render:t=>t(l)}).$mount("#app")}},a={};function e(s){var r=a[s];if(void 0!==r)return r.exports;var o=a[s]={exports:{}};return t[s](o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(a,s,r,o){if(!s){var i=1/0;for(m=0;m<t.length;m++){s=t[m][0],r=t[m][1],o=t[m][2];for(var n=!0,c=0;c<s.length;c++)(!1&o||i>=o)&&Object.keys(e.O).every((function(t){return e.O[t](s[c])}))?s.splice(c--,1):(n=!1,o<i&&(i=o));if(n){t.splice(m--,1);var l=r();void 0!==l&&(a=l)}}return a}o=o||0;for(var m=t.length;m>0&&t[m-1][2]>o;m--)t[m]=t[m-1];t[m]=[s,r,o]}}(),function(){e.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(a,{a:a}),a}}(),function(){e.d=function(t,a){for(var s in a)e.o(a,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:a[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){var t={143:0};e.O.j=function(a){return 0===t[a]};var a=function(a,s){var r,o,i=s[0],n=s[1],c=s[2],l=0;if(i.some((function(a){return 0!==t[a]}))){for(r in n)e.o(n,r)&&(e.m[r]=n[r]);if(c)var m=c(e)}for(a&&a(s);l<i.length;l++)o=i[l],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(m)},s=self["webpackChunkrbtx_ui"]=self["webpackChunkrbtx_ui"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(2997)}));s=e.O(s)})();
//# sourceMappingURL=app.109ed81d.js.map