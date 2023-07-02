(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{21105:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trends",function(){return t(74650)}])},74650:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return x}});var r=t(85893),l=t(9008),s=t.n(l),u=t(67294),o=t(45697),d=t.n(o);function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function n(e,a){if(null==e)return{};var t,r,l=function(e,a){if(null==e)return{};var t,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var v=(0,u.forwardRef)((function(e,a){var t=e.color,r=void 0===t?"currentColor":t,l=e.size,s=void 0===l?24:l,o=n(e,["color","size"]);return u.createElement("svg",i({ref:a,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),u.createElement("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),u.createElement("polyline",{points:"17 6 23 6 23 12"}))}));v.propTypes={color:d().string,size:d().oneOfType([d().string,d().number])},v.displayName="TrendingUp";var c=v;function h(){return h=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},h.apply(this,arguments)}function T(e,a){if(null==e)return{};var t,r,l=function(e,a){if(null==e)return{};var t,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var Z=(0,u.forwardRef)((function(e,a){var t=e.color,r=void 0===t?"currentColor":t,l=e.size,s=void 0===l?24:l,o=T(e,["color","size"]);return u.createElement("svg",h({ref:a,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),u.createElement("polyline",{points:"23 18 13.5 8.5 8.5 13.5 1 6"}),u.createElement("polyline",{points:"17 18 23 18 23 12"}))}));Z.propTypes={color:d().string,size:d().oneOfType([d().string,d().number])},Z.displayName="TrendingDown";var p=Z,g=t(74041),f=t(18121),_=t(49384),G={testsslGrade:{title:"SSL"},codescanGrade:{title:"Codescan grade"},dependabotGrade:{title:"Dependabot grade"},httpGrade:{title:"HTTP observatory"},lighthouse_performance:{treshold:.1,title:"Lighthouse Performance"},lighthouse_seo:{treshold:.1,title:"Lighthouse SEO"},lighthouse_pwa:{treshold:.1,title:"Lighthouse PWA"},lighthouse_accessibility:{title:"Lighthouse accessibility"},"lighthouse_best-practices":{treshold:.1,title:"Lighthouse best practices"},nmapGrade:{title:"NMAP grade"},nmapOpenPortsGrade:{title:"NMAP open ports grade"},trackersCount:{title:"Trackers count",reverse:!0},cookiesCount:{title:"Cookies count",reverse:!0},uptime:{treshold:1,title:"uptime"},apdex:{treshold:.05,title:"apDex"},"declaration-a11y":{title:"D\xe9claration a11y"},"declaration-rgpd":{title:"D\xe9claration RGPD"},trivyGrade:{title:"Trivy grade"}},m=[{name:"trend",label:"Trend",render:function(e){return function(e,a){var t=G[e],r=a[0],l=a[a.length-1];return e.match(/Grade$/)||"declaration-a11y"===e?(0,_.BE)(l)-(0,_.BE)(r):t.reverse?r-l:l-r}(e.key,e.values)>0?(0,r.jsx)(c,{size:40,style:{stroke:"var(--success)",marginRight:10}}):(0,r.jsx)(p,{size:40,style:{stroke:"var(--error)",marginRight:10}})}},{name:"outil",label:"Outil",render:function(e){return G[e.key].title}},{name:"evolution",label:"Evolution",render:function(e){return e.values.map((function(e){return isNaN(e)?e:Math.floor(1e4*e)/1e4})).filter((function(e,a,t){return 0===a||a===t.length-1})).join(" => ")}}],b=function(e){var a=e.trends,t=Object.keys(a);return t.sort(),(0,r.jsxs)("div",{children:[(0,r.jsx)("br",{}),(0,r.jsx)("h3",{children:"Evolutions sur les 30 derniers jours"}),(0,r.jsx)("br",{}),t.map((function(e){var t=function(e){var a={};return Object.keys(e).filter((function(e){return e in G})).forEach((function(t){var r=e[t].map((function(e){return e.date,e.value}));if(r.length>1){var l=r[0],s=r[r.length-1],u=G[t].treshold;(!u||Math.abs(l-s)>(u||0))&&l!==s&&(a[t]=[l,s])}})),a}(a[e]);return Object.keys(t).length?(0,r.jsx)(f.s,{title:(0,_.p5)(e),url:"/url/".concat(encodeURIComponent((0,_.N0)(e))),children:(0,r.jsx)(g.Table,{columns:m,data:Object.keys(t).map((function(e){return{key:e,values:t[e]}})),rowKey:"key"})},e):null}))]})},y=JSON.parse('{"https://www.fabrique.social.gouv.fr":{"404":[{"date":"2023-05-24T15:24:40.000Z","value":8}],"httpGrade":[{"date":"2023-05-24T15:24:40.000Z","value":"A+"}],"nmapGrade":[{"date":"2023-05-24T15:24:40.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2023-05-24T15:24:40.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2023-05-24T15:24:40.000Z","value":"A"}],"dependabotGrade":[{"date":"2023-05-24T15:24:40.000Z","value":"E"}],"dependabotCount":[{"date":"2023-05-24T15:24:40.000Z","value":26}],"testsslExpireSoon":[{"date":"2023-05-24T15:24:40.000Z","value":false}],"testsslExpireDate":[{"date":"2023-05-24T15:24:40.000Z","value":"2023-07-13T00:27:00.000Z"}],"testsslGrade":[{"date":"2023-05-24T15:24:40.000Z","value":"A+"}],"cookiesGrade":[{"date":"2023-05-24T15:24:40.000Z","value":"B"}],"cookiesCount":[{"date":"2023-05-24T15:24:40.000Z","value":2}],"trackersGrade":[{"date":"2023-05-24T15:24:40.000Z","value":"A"}],"trackersCount":[{"date":"2023-05-24T15:24:40.000Z","value":0}],"lighthouse_performance":[{"date":"2023-05-24T15:24:40.000Z","value":0.25}],"lighthouse_performanceGrade":[{"date":"2023-05-24T15:24:40.000Z","value":"E"}],"lighthouse_accessibility":[{"date":"2023-05-24T15:24:40.000Z","value":0.96}],"lighthouse_accessibilityGrade":[{"date":"2023-05-24T15:24:40.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2023-05-24T15:24:40.000Z","value":0.92}],"lighthouse_best-practicesGrade":[{"date":"2023-05-24T15:24:40.000Z","value":"A"}],"lighthouse_seo":[{"date":"2023-05-24T15:24:40.000Z","value":0.9}],"lighthouse_seoGrade":[{"date":"2023-05-24T15:24:40.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2023-05-24T15:24:40.000Z","value":0.3}],"lighthouse_pwaGrade":[{"date":"2023-05-24T15:24:40.000Z","value":"E"}],"declaration-a11y":[{"date":"2023-05-24T15:24:40.000Z","value":"C"}],"ecoindexGrade":[{"date":"2023-05-24T15:24:40.000Z","value":"E"}]},"https://beta.gouv.fr":{"404":[{"date":"2023-05-24T15:24:40.000Z","value":12}],"httpGrade":[{"date":"2023-05-24T15:24:40.000Z","value":"D+"}],"nmapGrade":[{"date":"2023-05-24T15:24:40.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2023-05-24T15:24:40.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2023-05-24T15:24:40.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2023-05-24T15:24:40.000Z","value":false}],"testsslExpireDate":[{"date":"2023-05-24T15:24:40.000Z","value":"2023-06-23T07:23:00.000Z"}],"testsslGrade":[{"date":"2023-05-24T15:24:40.000Z","value":"A+"}],"cookiesGrade":[{"date":"2023-05-24T15:24:40.000Z","value":"B"}],"cookiesCount":[{"date":"2023-05-24T15:24:40.000Z","value":2}],"trackersGrade":[{"date":"2023-05-24T15:24:40.000Z","value":"A"}],"trackersCount":[{"date":"2023-05-24T15:24:40.000Z","value":0}],"lighthouse_performance":[{"date":"2023-05-24T15:24:40.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2023-05-24T15:24:40.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2023-05-24T15:24:40.000Z","value":0.92}],"lighthouse_accessibilityGrade":[{"date":"2023-05-24T15:24:40.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2023-05-24T15:24:40.000Z","value":0.92}],"lighthouse_best-practicesGrade":[{"date":"2023-05-24T15:24:40.000Z","value":"A"}],"lighthouse_seo":[{"date":"2023-05-24T15:24:40.000Z","value":1}],"lighthouse_seoGrade":[{"date":"2023-05-24T15:24:40.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2023-05-24T15:24:40.000Z","value":0.6}],"lighthouse_pwaGrade":[{"date":"2023-05-24T15:24:40.000Z","value":"C"}],"declaration-a11y":[{"date":"2023-05-24T15:24:40.000Z","value":"C"}],"ecoindexGrade":[{"date":"2023-05-24T15:24:40.000Z","value":"B"}]},"https://mon-expert-en-gestion.fr":{"404":[{"date":"2023-05-24T16:22:04.000Z","value":"A+"}],"testsslExpireSoon":[{"date":"2023-05-24T16:22:04.000Z","value":false}],"testsslExpireDate":[{"date":"2023-05-24T16:22:04.000Z","value":"2023-10-09T23:59:00.000Z"}],"testsslGrade":[{"date":"2023-05-24T16:22:04.000Z","value":"B"}],"cookiesGrade":[{"date":"2023-05-24T16:22:04.000Z","value":"B"}],"cookiesCount":[{"date":"2023-05-24T16:22:04.000Z","value":1}],"trackersGrade":[{"date":"2023-05-24T16:22:04.000Z","value":"C"}],"trackersCount":[{"date":"2023-05-24T16:22:04.000Z","value":10}],"lighthouse_performance":[{"date":"2023-05-24T16:22:04.000Z","value":0.6803207397460938},{"date":"2023-05-25T07:42:16.000Z","value":0.6802186965942383},{"date":"2023-05-26T09:10:08.000Z","value":0.6799997329711914},{"date":"2023-05-28T01:36:46.000Z","value":0.6803834915161133},{"date":"2023-06-04T01:57:21.000Z","value":0.6788625717163086},{"date":"2023-06-07T15:00:06.000Z","value":0.6788431167602539},{"date":"2023-06-11T01:57:17.000Z","value":0.6788013458251954},{"date":"2023-06-18T01:53:07.000Z","value":0.6787382125854492},{"date":"2023-06-25T02:06:19.000Z","value":0.6787240982055665},{"date":"2023-07-02T01:57:21.415Z","value":0.6784280776977539}],"lighthouse_performanceGrade":[{"date":"2023-05-24T16:22:04.000Z","value":"B"}],"lighthouse_accessibility":[{"date":"2023-05-24T16:22:04.000Z","value":0.76}],"lighthouse_accessibilityGrade":[{"date":"2023-05-24T16:22:04.000Z","value":"B"}],"lighthouse_best-practices":[{"date":"2023-05-24T16:22:04.000Z","value":0.92}],"lighthouse_best-practicesGrade":[{"date":"2023-05-24T16:22:04.000Z","value":"A"}],"lighthouse_seo":[{"date":"2023-05-24T16:22:04.000Z","value":1}],"lighthouse_seoGrade":[{"date":"2023-05-24T16:22:04.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2023-05-24T16:22:04.000Z","value":0.8}],"lighthouse_pwaGrade":[{"date":"2023-05-24T16:22:04.000Z","value":"B"}],"declaration-a11y":[{"date":"2023-05-24T16:22:04.000Z","value":"F"}],"ecoindexGrade":[{"date":"2023-05-24T16:22:04.000Z","value":"B"}],"httpGrade":[{"date":"2023-05-25T07:42:16.000Z","value":"C"}],"nmapGrade":[{"date":"2023-05-26T09:10:08.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2023-05-26T09:10:08.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2023-05-26T09:10:08.000Z","value":"A"}],"declaration-rgpd":[]},"https://lacomptasimplifiee.fr":{"404":[{"date":"2023-05-25T06:30:06.000Z","value":"A+"}],"httpGrade":[{"date":"2023-05-25T06:30:06.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2023-05-25T06:30:06.000Z","value":false},{"date":"2023-05-28T01:36:46.000Z","value":true},{"date":"2023-06-18T01:53:07.000Z","value":false}],"testsslExpireDate":[{"date":"2023-05-25T06:30:06.000Z","value":"2023-06-25T12:03:00.000Z"},{"date":"2023-06-18T01:53:07.000Z","value":"2023-09-13T12:17:00.000Z"}],"testsslGrade":[{"date":"2023-05-25T06:30:06.000Z","value":"A"}],"cookiesGrade":[{"date":"2023-05-25T06:30:06.000Z","value":"B"}],"cookiesCount":[{"date":"2023-05-25T06:30:06.000Z","value":2}],"trackersGrade":[{"date":"2023-05-25T06:30:06.000Z","value":"F"}],"trackersCount":[{"date":"2023-05-25T06:30:06.000Z","value":37}],"lighthouse_performance":[{"date":"2023-05-25T06:30:06.000Z","value":0.11997909545898437},{"date":"2023-05-26T09:10:08.000Z","value":0.11973114013671875},{"date":"2023-05-28T01:36:46.000Z","value":0.11994304656982421},{"date":"2023-06-04T01:57:21.000Z","value":0.11971893310546874},{"date":"2023-06-07T15:00:06.000Z","value":0.13241653442382811},{"date":"2023-06-11T01:57:17.000Z","value":0.13244781494140626},{"date":"2023-06-18T01:53:07.000Z","value":0.13121719360351564},{"date":"2023-06-25T02:06:19.000Z","value":0.14896621704101562},{"date":"2023-07-02T01:57:21.415Z","value":0.14881954193115235}],"lighthouse_performanceGrade":[{"date":"2023-05-25T06:30:06.000Z","value":"F"}],"lighthouse_accessibility":[{"date":"2023-05-25T06:30:06.000Z","value":0.88}],"lighthouse_accessibilityGrade":[{"date":"2023-05-25T06:30:06.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2023-05-25T06:30:06.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2023-05-25T06:30:06.000Z","value":"A"}],"lighthouse_seo":[{"date":"2023-05-25T06:30:06.000Z","value":1}],"lighthouse_seoGrade":[{"date":"2023-05-25T06:30:06.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2023-05-25T06:30:06.000Z","value":0.4}],"lighthouse_pwaGrade":[{"date":"2023-05-25T06:30:06.000Z","value":"D"}],"declaration-a11y":[{"date":"2023-05-25T06:30:06.000Z","value":"F"}],"ecoindexGrade":[{"date":"2023-05-25T06:30:06.000Z","value":"F"}],"nmapGrade":[{"date":"2023-05-26T09:10:08.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2023-05-26T09:10:08.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2023-05-26T09:10:08.000Z","value":"A"}],"declaration-rgpd":[]},"https://rca.fr":{"404":[{"date":"2023-05-25T06:50:10.000Z","value":2},{"date":"2023-06-07T15:00:06.000Z","value":3},{"date":"2023-06-18T01:53:07.000Z","value":2}],"httpGrade":[{"date":"2023-05-25T06:50:10.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2023-05-25T06:50:10.000Z","value":false},{"date":"2023-06-04T01:57:21.000Z","value":true},{"date":"2023-06-25T02:06:19.000Z","value":false}],"testsslExpireDate":[{"date":"2023-05-25T06:50:10.000Z","value":"2023-06-29T11:02:00.000Z"},{"date":"2023-06-25T02:06:19.000Z","value":"2023-09-17T11:17:00.000Z"}],"testsslGrade":[{"date":"2023-05-25T06:50:10.000Z","value":"A"}],"cookiesGrade":[{"date":"2023-05-25T06:50:10.000Z","value":"A"}],"cookiesCount":[{"date":"2023-05-25T06:50:10.000Z","value":0}],"trackersGrade":[{"date":"2023-05-25T06:50:10.000Z","value":"F"}],"trackersCount":[{"date":"2023-05-25T06:50:10.000Z","value":16}],"lighthouse_performance":[{"date":"2023-05-25T06:50:10.000Z","value":0}],"lighthouse_performanceGrade":[{"date":"2023-05-25T06:50:10.000Z","value":"F"}],"lighthouse_accessibility":[{"date":"2023-05-25T06:50:10.000Z","value":0.79}],"lighthouse_accessibilityGrade":[{"date":"2023-05-25T06:50:10.000Z","value":"B"}],"lighthouse_best-practices":[{"date":"2023-05-25T06:50:10.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2023-05-25T06:50:10.000Z","value":"A"}],"lighthouse_seo":[{"date":"2023-05-25T06:50:10.000Z","value":0.77}],"lighthouse_seoGrade":[{"date":"2023-05-25T06:50:10.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2023-05-25T06:50:10.000Z","value":0.4}],"lighthouse_pwaGrade":[{"date":"2023-05-25T06:50:10.000Z","value":"D"}],"declaration-a11y":[{"date":"2023-05-25T06:50:10.000Z","value":"F"}],"ecoindexGrade":[{"date":"2023-05-25T06:50:10.000Z","value":"F"}],"nmapGrade":[{"date":"2023-05-26T09:10:08.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2023-05-26T09:10:08.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2023-05-26T09:10:08.000Z","value":"A"}],"declaration-rgpd":[]},"https://blog.rca.fr":{"404":[{"date":"2023-05-25T07:42:16.000Z","value":"A+"}],"httpGrade":[{"date":"2023-05-25T07:42:16.000Z","value":"D+"}],"testsslExpireSoon":[{"date":"2023-05-25T07:42:16.000Z","value":false}],"testsslExpireDate":[{"date":"2023-05-25T07:42:16.000Z","value":"2023-08-10T07:43:00.000Z"}],"testsslGrade":[{"date":"2023-05-25T07:42:16.000Z","value":"A"}],"cookiesGrade":[{"date":"2023-05-25T07:42:16.000Z","value":"B"}],"cookiesCount":[{"date":"2023-05-25T07:42:16.000Z","value":2}],"trackersGrade":[{"date":"2023-05-25T07:42:16.000Z","value":"C"}],"trackersCount":[{"date":"2023-05-25T07:42:16.000Z","value":8}],"lighthouse_performance":[{"date":"2023-05-25T07:42:16.000Z","value":0},{"date":"2023-07-02T01:57:21.415Z","value":0.02298431396484375}],"lighthouse_performanceGrade":[{"date":"2023-05-25T07:42:16.000Z","value":"F"}],"lighthouse_accessibility":[{"date":"2023-05-25T07:42:16.000Z","value":0.9}],"lighthouse_accessibilityGrade":[{"date":"2023-05-25T07:42:16.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2023-05-25T07:42:16.000Z","value":0.92}],"lighthouse_best-practicesGrade":[{"date":"2023-05-25T07:42:16.000Z","value":"A"}],"lighthouse_seo":[{"date":"2023-05-25T07:42:16.000Z","value":0.99}],"lighthouse_seoGrade":[{"date":"2023-05-25T07:42:16.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2023-05-25T07:42:16.000Z","value":0.4}],"lighthouse_pwaGrade":[{"date":"2023-05-25T07:42:16.000Z","value":"D"}],"declaration-a11y":[{"date":"2023-05-25T07:42:16.000Z","value":"F"}],"ecoindexGrade":[{"date":"2023-05-25T07:42:16.000Z","value":"D"}],"nmapGrade":[{"date":"2023-05-26T09:10:08.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2023-05-26T09:10:08.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2023-05-26T09:10:08.000Z","value":"A"}],"declaration-rgpd":[]},"https://www.experts-en-gestion.fr":{"404":[{"date":"2023-06-07T15:00:06.000Z","value":5}],"httpGrade":[{"date":"2023-06-07T15:00:06.000Z","value":"F"}],"nmapGrade":[{"date":"2023-06-07T15:00:06.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2023-06-07T15:00:06.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2023-06-07T15:00:06.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2023-06-07T15:00:06.000Z","value":false}],"testsslExpireDate":[{"date":"2023-06-07T15:00:06.000Z","value":"2023-08-12T09:58:00.000Z"}],"testsslGrade":[{"date":"2023-06-07T15:00:06.000Z","value":"A"}],"cookiesGrade":[{"date":"2023-06-07T15:00:06.000Z","value":"B"}],"cookiesCount":[{"date":"2023-06-07T15:00:06.000Z","value":1}],"trackersGrade":[{"date":"2023-06-07T15:00:06.000Z","value":"F"}],"trackersCount":[{"date":"2023-06-07T15:00:06.000Z","value":78},{"date":"2023-06-11T01:57:17.000Z","value":81},{"date":"2023-06-18T01:53:07.000Z","value":80}],"lighthouse_performance":[{"date":"2023-06-07T15:00:06.000Z","value":0}],"lighthouse_performanceGrade":[{"date":"2023-06-07T15:00:06.000Z","value":"F"}],"lighthouse_accessibility":[{"date":"2023-06-07T15:00:06.000Z","value":0.95}],"lighthouse_accessibilityGrade":[{"date":"2023-06-07T15:00:06.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2023-06-07T15:00:06.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2023-06-07T15:00:06.000Z","value":"A"}],"lighthouse_seo":[{"date":"2023-06-07T15:00:06.000Z","value":0.84}],"lighthouse_seoGrade":[{"date":"2023-06-07T15:00:06.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2023-06-07T15:00:06.000Z","value":0.3}],"lighthouse_pwaGrade":[{"date":"2023-06-07T15:00:06.000Z","value":"E"}],"declaration-a11y":[{"date":"2023-06-07T15:00:06.000Z","value":"F"}],"ecoindexGrade":[{"date":"2023-06-07T15:00:06.000Z","value":"F"}],"declaration-rgpd":[]}}'),x=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s(),{children:(0,r.jsx)("title",{children:"Evolutions - Dashlord"})}),(0,r.jsx)(b,{trends:y})]})}},18121:function(e,a,t){"use strict";t.d(a,{s:function(){return h}});var r=t(85893),l=(t(67294),t(94184)),s=t.n(l),u=t(659),o=t(73973),d=t(83206),i=t(41664),n=t.n(i),v=t(75670),c=t.n(v),h=function(e){var a=e.title,t=e.children,l=e.info,i=e.url,v=e.urlText,h=void 0===v?"":v,T=e.className,Z=e.isExternal,p=void 0!==Z&&Z;return(0,r.jsxs)("div",{className:s()(c().container,T),children:[(0,r.jsxs)("div",{className:c().banner,children:[(0,r.jsx)("h5",{className:c().mainTitle,children:a}),l&&(0,r.jsx)(u.Z,{overlay:l,children:(0,r.jsx)(o.Z,{size:20,style:{marginLeft:5,cursor:"pointer"}})}),i&&(p?(0,r.jsx)("a",{style:{float:"right"},href:i,target:"_blank",rel:"noreferrer noopener",children:h}):(0,r.jsx)(n(),{prefetch:!1,href:i,children:(0,r.jsxs)("a",{style:{float:"right"},children:[h,(0,r.jsx)(d.Z,{})]})}))]}),(0,r.jsx)("div",{className:c().body,children:t})]})}},75670:function(e){e.exports={container:"panel_container__s3lQL",banner:"panel_banner__IDWUZ",mainTitle:"panel_mainTitle__N5MWp",body:"panel_body___c3aS"}}},function(e){e.O(0,[717,774,888,179],(function(){return a=21105,e(e.s=a);var a}));var a=e.O();_N_E=a}]);