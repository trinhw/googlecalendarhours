(this["webpackJsonpgoogle-calendar-hours"]=this["webpackJsonpgoogle-calendar-hours"]||[]).push([[0],{11:function(e,t,a){e.exports={appWrapper:"App_appWrapper__fZT8M",app:"App_app__3bNHd",sticky:"App_sticky__1Zjsh",content:"App_content__2-w73",headline:"App_headline__3ig8U",footer:"App_footer__DyfGy"}},18:function(e,t,a){e.exports={component:"CustomRange_component__1_mjG",inputDate:"CustomRange_inputDate__3NRgL"}},24:function(e,t,a){e.exports=a.p+"static/media/google_auth.75a7cb04.png"},25:function(e,t,a){e.exports={hours:"Hours_hours__69kU7"}},26:function(e,t,a){e.exports={weekStartLabel:"WeekStart_weekStartLabel__jqhaf"}},27:function(e,t,a){e.exports={interface:"Interface_interface__3wWL2"}},30:function(e,t,a){e.exports=a(46)},41:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),o=a(2),s=(a(41),a(12)),u=a(9),i=Object(u.b)({name:"authentication",initialState:null,reducers:{}}),d=function(e){return e.authentication.accessToken},m=function(e){return!!d(e)},p=i.reducer,v=a(24),f=a.n(v),h=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("p",null,"This web app lets you see how many hours you spend on a Google Calendar. It uses the Google Calendar API to fetch your calendars and events, crunches the data and displays it nicely. You can filter by day, week, month, year, total or add a custom time range."),r.a.createElement("p",null,"You need to authorize the app with the following link:"),r.a.createElement("a",{href:function(){var e=Object(s.b)({client_id:"137650514428-7h8ju8o7mfel8a739nvr5ahciga2erev.apps.googleusercontent.com",redirect_uri:"https://trinhw.github.io/googlecalendarhours",scope:"https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events.readonly",response_type:"token"});return"https://accounts.google.com/o/oauth2/auth?".concat(e)}(),"data-testid":"AuthLink"},r.a.createElement("img",{src:f.a,alt:"Auth with Google",width:"191",height:"46"})),r.a.createElement("h3",null,"Privacy Policy"),r.a.createElement("p",null,"This app connects to the Google Calendar API to fetch your calendars and events, so that it can calculate the hours. This connection happens directly from your browser to the Google API. There are no server or services involved that might cache the data."),r.a.createElement("p",null,"None of the data fetched from the Google Calendar API is saved elsewhere but in your browser. After you close the browser window/tab all authentication data is delete (technical detail: sessionStorage is used). Thats why you need to reauthorize with Google the next time you visit the page."),r.a.createElement("p",null,"This app only has read-only access to your calendar data."))},b=a(14),y=a(4),E=a.n(y),g=a(1),w=a.n(g),k=a(8),O=a.n(k),S=a(10),_=a(15),N=a(7),j=a(3),T=a.n(j),D=function(){var e=Object(S.a)(O.a.mark((function e(t){var a,n,r,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.url,n=t.accessToken,r=t.params,e.next=3,fetch("".concat(a,"?").concat(Object(s.b)(Object(N.a)({access_token:n},r))));case 3:if(200===(c=e.sent).status){e.next=8;break}return sessionStorage.removeItem("accessToken"),window.location="/",e.abrupt("return",Promise.reject());case 8:return e.abrupt("return",c.json());case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(e){var t=e.accessToken;return D({url:"".concat("https://www.googleapis.com/calendar/v3/","users/me/calendarList"),accessToken:t})},C=function(){var e=Object(S.a)(O.a.mark((function e(t){var a,n,r,c,l,o,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.accessToken,n=t.calendarId,r=t.pageToken,c=t.acc,e.next=3,D({url:"".concat("https://www.googleapis.com/calendar/v3/","calendars/").concat(encodeURIComponent(n),"/events"),accessToken:a,params:{singleEvents:!0,maxResults:2500,pageToken:r,timeMax:T()().add(2,"year").toJSON()}});case 3:if(l=e.sent,o=l.items,s=l.nextPageToken){e.next=8;break}return e.abrupt("return",[].concat(Object(_.a)(c),Object(_.a)(o)));case 8:return e.abrupt("return",C({accessToken:a,calendarId:n,pageToken:s,acc:[].concat(Object(_.a)(c),Object(_.a)(o))}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){var t=e.accessToken,a=e.calendarId;return C({accessToken:t,calendarId:a,acc:[]})},R=a(29),Y=(a(43),Object(u.b)({name:"calendarEvents",initialState:{loading:!1,map:{}},reducers:{setCalendarEvents:function(e,t){var a=t.payload;e.map[a.calendarId]=a.events},setLoading:function(e,t){var a=t.payload;e.loading=a}}})),P=Y.actions,L=P.setCalendarEvents,J=P.setLoading,M=function(e){var t,a;return null!==(t=null===(a=e.calendarEvents)||void 0===a?void 0:a.loading)&&void 0!==t&&t},A=function(e,t){var a,n;return null!==(a=!M(e)&&(null===(n=e.calendarEvents)||void 0===n?void 0:n.map[t]))&&void 0!==a?a:null},H=Y.reducer,F=function(e){var t;try{t=JSON.parse(window.localStorage.getItem("config"))}catch(n){}var a=Object(N.a)(Object(N.a)({},t),e);window.localStorage.setItem("config",JSON.stringify(a))},G=function(){try{return JSON.parse(window.localStorage.getItem("config"))}catch(e){}return null},W="day",U="week",B="month",Z="year",q="total",z="custom",K="date",Q="amount",V="monday",X="sunday",$=function(e){return Math.round(100*e)/100},ee=Object(u.b)({name:"viewState",initialState:null,reducers:{setSelectedCalendarId:function(e,t){var a=t.payload;e.selectedCalendarId=a},setRangeType:function(e,t){var a=t.payload;e.selectedRangeType=a},changeRange:function(e,t){var a=t.payload;"prev"===a?e.currentDatePointerStart=T()(e.currentDatePointerStart).subtract(1,e.selectedRangeType).toJSON():"next"===a&&(e.currentDatePointerStart=T()(e.currentDatePointerStart).add(1,e.selectedRangeType).toJSON())},resetRange:function(e){e.currentDatePointerStart=T()().startOf("day").toJSON()},setWeekStart:function(e,t){var a=t.payload;e.weekStart=a},setStart:function(e,t){var a=t.payload;e.currentDatePointerStart=a},setEnd:function(e,t){var a=t.payload;e.currentDatePointerEnd=a}}}),te=ee.actions,ae=te.changeRange,ne=te.resetRange,re=ee.actions,ce=re.setSelectedCalendarId,le=re.setRangeType,oe=re.setWeekStart,se=re.setStart,ue=re.setEnd,ie=function(e){return e.viewState.selectedCalendarId},de=function(e){return e.viewState.currentDatePointerStart},me=function(e){return e.viewState.selectedRangeType},pe=function(e){return e.viewState.weekStart},ve=function(e){return e.viewState.weekStart===X?"en":"de"},fe=function(e){var t,a,n=e.viewState,r=n.selectedRangeType,c=n.currentDatePointerStart,l=n.currentDatePointerEnd,o=T()(c);return r===z?{start:T()(c),end:T()(l).add(1,"day")}:(r===W?a=(t=o.startOf("day")).add(1,"day"):r===U?a=(t=o.locale(ve(e)).startOf("day").weekday(0)).add(1,"week"):r===B?a=(t=o.startOf("month")).add(1,"month"):r===Z?a=(t=o.startOf("year")).add(1,"year"):r===q&&(t=T()("2000-01-01T10:00:00Z"),a=T()("2040-01-01T10:00:00Z")),{start:t,end:a})},he=function(e){var t=A(e,ie(e));if(!t)return null;var a=fe(e),n=a.start,r=a.end;return t.filter((function(e){var t=e.start,a=e.end;return!(new Date(a)<n||new Date(t)>r)})).map((function(e){var t=e.start,a=e.end,c=Object(R.a)(e,["start","end"]);return Object(N.a)(Object(N.a)({},c),{},{start:new Date(t)<n?n.toJSON():t,end:new Date(a)>r?r.toJSON():a})}))},be=function(e){var t=he(e);if(!t)return null;var a=0;return t.forEach((function(e){e.summary.includes("Triple")&&(a+=(new Date(e.end)-new Date(e.start))/1e3/60/60),e.summary.includes("Sandbagger")&&(a+=(new Date(e.end)-new Date(e.start))/1e3/60/60),e.summary.includes("Slicer")&&(a+=(new Date(e.end)-new Date(e.start))/1e3/60/60),e.summary.includes("Three")&&(a+=(new Date(e.end)-new Date(e.start))/1e3/60/60)})),$(a)},ye=function(e){var t=e.calendarId;return function(e,a){e(ce(t)),F({selectedCalendarId:t}),A(a(),t)||e(function(e){var t=e.calendarId;return function(){var e=Object(S.a)(O.a.mark((function e(a,n){var r,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=d(n()),e.prev=1,a(J(!0)),e.next=5,x({accessToken:r,calendarId:t});case 5:c=e.sent,a(L({calendarId:t,events:c.map((function(e){var t=e.id,a=e.summary,n=e.start,r=e.end;return n.dateTime?{id:t,summary:a,start:n.dateTime,end:r.dateTime}:null})).filter(Boolean)})),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:return e.prev=11,a(J(!1)),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,9,11,14]])})));return function(t,a){return e.apply(this,arguments)}}()}({calendarId:t}))}},Ee=function(e){return function(t){t(oe(e)),F({weekStart:e})}},ge=ee.reducer,we=Object(u.b)({name:"calendars",initialState:{list:null},reducers:{setCalendars:function(e,t){var a=t.payload;e.list=a}}}),ke=we.actions.setCalendars,Oe=function(e){return e.calendars.list},Se=we.reducer,_e=function(){var e=Object(o.b)(),t=Object(o.c)(Oe),a=Object(o.c)(ie);return r.a.createElement("select",{"data-testid":"CalendarsList",className:w.a["form-select"],onChange:function(t){e(ye({calendarId:t.target.value}))},value:null!==a&&void 0!==a?a:""},!a&&r.a.createElement("option",{key:"default"},"Please select calendar"),t.map((function(e){var t=e.id,a=e.label;return r.a.createElement("option",{value:t,key:t},a)})))},Ne=function(){var e=Object(o.b)(),t=Object(o.c)(me);return r.a.createElement("select",{"data-testid":"RangeSelectList",className:w.a["form-select"],onChange:function(t){return e(function(e){var t=e.range;return function(e,a){if(t===z){var n=fe(a()),r=n.start,c=n.end.subtract(1,"day");e(se(r.toJSON())),e(ue(c.toJSON())),F({start:r.toJSON(),end:c.toJSON()})}e(le(t)),F({selectedRangeType:t})}}({range:t.target.value}))},value:t},r.a.createElement("option",{value:"day"},"Day"),r.a.createElement("option",{value:"week"},"Week"),r.a.createElement("option",{value:"month"},"Month"),r.a.createElement("option",{value:"year"},"Year"),r.a.createElement("option",{value:"total"},"Total"),r.a.createElement("option",{value:"custom"},"Custom"))},je=function(){var e=Object(o.b)();return r.a.createElement("div",{"data-testid":"RangeChanger",className:w.a["btn-group"],role:"group"},r.a.createElement("button",{type:"button",className:E()(w.a.btn,w.a["btn-outline-secondary"]),onClick:function(){return e(ae("prev"))}},"Prev"),r.a.createElement("button",{type:"button",className:E()(w.a.btn,w.a["btn-outline-secondary"]),onClick:function(){return e(ne())}},"Reset"),r.a.createElement("button",{type:"button",className:E()(w.a.btn,w.a["btn-outline-secondary"]),onClick:function(){return e(ae("next"))}},"Next"))},Te=a(18),De=a.n(Te),Ie=function(){var e=Object(o.b)(),t=Object(o.c)(fe),a=t.start,n=t.end;return r.a.createElement("div",{className:E()(De.a.component,w.a["input-group"],w.a["input-group-sm"]),"data-testid":"CustomRange"},r.a.createElement("label",{htmlFor:"dateStart",className:w.a["input-group-text"]},"Start:"),r.a.createElement("input",{className:E()(w.a["form-control"],De.a.inputDate),type:"date",id:"dateStart",value:T()(a).format("YYYY-MM-DD"),onChange:function(t){var a=t.target;return e(function(e){return function(t){t(se(e)),F({start:e})}}(T()(a.value).toJSON()))}}),r.a.createElement("label",{htmlFor:"dateEnd",className:w.a["input-group-text"]},"End:"),r.a.createElement("input",{className:E()(w.a["form-control"],De.a.inputDate),type:"date",id:"dateEnd",value:T()(n).subtract(1,"day").format("YYYY-MM-DD"),onChange:function(t){var a=t.target;return e(function(e){return function(t){t(ue(e)),F({end:e})}}(T()(a.value).toJSON()))}}))},Ce=a(25),xe=a.n(Ce),Re=function(){return r.a.createElement("div",{className:xe.a.hours},"".concat(Object(o.c)(be),"h"))},Ye=function(e,t){return new Intl.DateTimeFormat([navigator.language,"en-US"],t).format(e)},Pe=function(){var e,t=Object(o.c)(de),a=Object(o.c)(me),n=Object(o.c)(ve),c=T()(t);if(a===W)e=Ye(T()(c),{weekday:"long",day:"numeric",month:"long",year:"numeric"});else if(a===U){var l=c.locale(n).weekday(0),s=Ye(l,{day:"numeric",month:"numeric",year:"numeric"}),u=Ye(l.add(1,"week").subtract(1,"day"),{day:"numeric",month:"numeric",year:"numeric"});e="".concat(s," - ").concat(u)}else a===B?e=Ye(c,{month:"long",year:"numeric"}):a===Z&&(e=Ye(c,{year:"numeric"}));return r.a.createElement("div",{"data-testid":"RangeDisplay"},e)},Le=function(e){var t=new Blob(["\ufeff"+e],{type:"text/csv;charset=UTF-8"});return window.URL.createObjectURL(t)},Je=a(5),Me=a.n(Je),Ae=a(44),He=a(45);T.a.extend(He),T.a.extend(Ae);var Fe=function(e,t){var a=e.hours,n=t.hours;return a>n?-1:a<n?1:0},Ge=function(e,t){var a=e.start,n=t.start;return a<n?-1:a>n?1:0},We=function(e){return T()(e).format("DD.MM.YYYY HH:mm")},Ue=function(){var e,t,a,c=Object(n.useState)(K),l=Object(b.a)(c,2),s=l[0],u=l[1],i=Object(o.c)(ie),d=Object(o.c)(he),m=Object(o.c)(Oe),p=Object(o.c)(de),v=null===(e=m.find((function(e){return e.id===i})))||void 0===e?void 0:e.label,f=d.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{hours:(new Date(e.end)-new Date(e.start))/1e3/60/60})}));if(s===Q){var h=f.reduce((function(e,t){var a=t.summary,n=t.hours;return e[a]=e[a]?e[a]+=n:n,e}),{});f=Object.entries(h).map((function(e){var t=Object(b.a)(e,2),a=t[0];return{summary:a,hours:t[1],id:a}})).sort(Fe)}else{var y=(f=f.sort(Ge)).map((function(e){var t=e.start,a=e.end,n=e.summary,r=e.hours;return"".concat(We(t),",").concat(We(a),',"').concat(n,'",').concat($(r))}));t=Le(["Start,End,Title,Hours"].concat(y).join("\n")),a="".concat(v,"_").concat(T()(p).locale("en").format("MMMM_YYYY"),"_(").concat(T()().format("YYYYMMDDHHmmss"),").csv")}var g=[],k="",O="",S="";return f.forEach((function(e){S=T()(e.start).week(),k=T()(e.start).format("D"),O=T()(e.start).day(),parseInt(k,10)>23&&1===S&&11===T()(e.start).month()&&(S+=52),g[S]||(g[S]=[]),g[S][O]||(g[S][O]={day:k,dayOfWeek:O,hours:0}),e.summary.includes("Triple")&&(g[S][O].hours+=$(e.hours)),e.summary.includes("Sandbagger")&&(g[S][O].hours+=$(e.hours)),e.summary.includes("Slicer")&&(g[S][O].hours+=$(e.hours)),e.summary.includes("Three")&&(g[S][O].hours+=$(e.hours)),"28"===k&&S.toString()})),r.a.createElement("div",null,r.a.createElement("table",{className:Me.a.rtable},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Sunday"),r.a.createElement("th",null,"Monday"),r.a.createElement("th",null,"Tuesday"),r.a.createElement("th",null,"Wednesday"),r.a.createElement("th",null,"Thursday"),r.a.createElement("th",null,"Friday"),r.a.createElement("th",null,"Saturday"))),r.a.createElement("tbody",null,g.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("span",{className:Me.a.smalldate},e[0]?e[0].day:""),r.a.createElement("br",null),e[0]?e[0].hours:""),r.a.createElement("td",null,r.a.createElement("span",{className:Me.a.smalldate},e[1]?e[1].day:""),r.a.createElement("br",null),e[1]?e[1].hours:""),r.a.createElement("td",null,r.a.createElement("span",{className:Me.a.smalldate},e[2]?e[2].day:""),r.a.createElement("br",null),e[2]?e[2].hours:""),r.a.createElement("td",null,r.a.createElement("span",{className:Me.a.smalldate},e[3]?e[3].day:""),r.a.createElement("br",null),e[3]?e[3].hours:""),r.a.createElement("td",null,r.a.createElement("span",{className:Me.a.smalldate},e[4]?e[4].day:""),r.a.createElement("br",null),e[4]?e[4].hours:""),r.a.createElement("td",null,r.a.createElement("span",{className:Me.a.smalldate},e[5]?e[5].day:""),r.a.createElement("br",null),e[5]?e[5].hours:""),r.a.createElement("td",null,r.a.createElement("span",{className:Me.a.smalldate},e[6]?e[6].day:""),r.a.createElement("br",null),e[6]?e[6].hours:""))})))),r.a.createElement("div",null,r.a.createElement("ul",{className:Me.a.list},f.map((function(e){var t=e.id,a=e.start,n=e.summary,c=e.hours;return r.a.createElement("li",{key:t,className:E()(w.a.row,Me.a.listItem)},s===K&&r.a.createElement("span",{className:E()(Me.a.eventDate,w.a["col-sm"]),title:Ye(T()(a),{day:"2-digit",month:"2-digit",year:"numeric"})},Ye(T()(a),{day:"2-digit",month:"2-digit"})),r.a.createElement("span",{className:E()(w.a["col-sm"],Me.a.eventName),title:n},n),r.a.createElement("span",{className:E()(w.a["col-sm"],Me.a.eventHours)},"".concat($(c),"h")))}))),r.a.createElement("div",null,r.a.createElement("span",{className:Me.a.sortByLabel},"Sort by:"),r.a.createElement("div",{className:E()(w.a["btn-group"],w.a["btn-group-sm"]),role:"group"},r.a.createElement("input",{className:w.a["btn-check"],type:"radio",value:"date",id:"date",checked:s===K,onChange:function(e){var t=e.target;return u(t.value)}}),r.a.createElement("label",{className:E()(w.a.btn,w.a["btn-outline-secondary"]),htmlFor:"date"},"Date"),r.a.createElement("input",{className:w.a["btn-check"],type:"radio",value:"amount",id:"amount",checked:s===Q,onChange:function(e){var t=e.target;return u(t.value)}}),r.a.createElement("label",{className:E()(w.a.btn,w.a["btn-outline-secondary"]),htmlFor:"amount"},"Amount")),t&&r.a.createElement("a",{href:t,download:a,className:E()(Me.a.downloadLink,w.a.btn,w.a["btn-outline-secondary"],w.a["btn-sm"])},"Export as CSV"))))},Be=a(26),Ze=a.n(Be),qe=function(){var e=Object(o.b)(),t=Object(o.c)(pe);return r.a.createElement("div",null,r.a.createElement("span",{className:Ze.a.weekStartLabel},"Week starts on:"),r.a.createElement("div",{className:E()(w.a["btn-group"],w.a["btn-group-sm"]),role:"group"},r.a.createElement("input",{className:w.a["btn-check"],type:"radio",value:"sunday",id:"sunday",checked:t===X,onChange:function(t){var a=t.target;return e(Ee(a.value))}}),r.a.createElement("label",{className:E()(w.a.btn,w.a["btn-outline-secondary"]),htmlFor:"sunday"},"Sunday"),r.a.createElement("input",{className:w.a["btn-check"],type:"radio",value:"monday",id:"monday",checked:t===V,onChange:function(t){var a=t.target;return e(Ee(a.value))}}),r.a.createElement("label",{className:E()(w.a.btn,w.a["btn-outline-secondary"]),htmlFor:"monday"},"Monday")))},ze=a(27),Ke=a.n(ze),Qe=function(){var e=Object(o.b)(),t=Object(n.useState)(!1),a=Object(b.a)(t,2),c=a[0],l=a[1],s=Object(o.c)(Oe);Object(n.useEffect)((function(){s||e(function(){var e=Object(S.a)(O.a.mark((function e(t,a){var n,r,c,l,o,s,u,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d(a()),e.prev=1,e.next=4,I({accessToken:n});case 4:c=e.sent,l=c.items,o=l.map((function(e){return{id:e.id,label:e.summary}})),t(ke(o)),s=null!==(r=G())&&void 0!==r?r:{},(u=s.selectedCalendarId)&&(i=null===o||void 0===o?void 0:o.find((function(e){return e.id===u})),t(ye(i?{calendarId:u}:{calendarId:null}))),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(1);case 14:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,a){return e.apply(this,arguments)}}())}));var u=Object(o.c)(ie),i=Object(o.c)((function(e){return A(e,u)})),m=Object(o.c)(M),p=Object(o.c)(me),v=Object(o.c)(be);return r.a.createElement("div",{className:Ke.a.interface},s?r.a.createElement(_e,null):r.a.createElement("div",null,"loading"),m&&"loading",i&&r.a.createElement(n.Fragment,null,r.a.createElement(Ne,null),p!==q&&p!==z&&r.a.createElement(je,null),p===z&&r.a.createElement(Ie,null),r.a.createElement(Re,null),p===U&&r.a.createElement(qe,null),p!==q&&r.a.createElement(Pe,null),!!v&&r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:E()(w.a.btn,w.a["btn-outline-secondary"],w.a["btn-sm"]),onClick:function(){return l(!c)}},c?"hide details":"show details")),!!v&&c&&r.a.createElement(Ue,null)))},Ve=a(11),Xe=a.n(Ve),$e=function(){var e=Object(o.c)(m);return Object(n.useEffect)((function(){var e,t,a,n=Object(s.a)(null!==(e=null===(t=window.location)||void 0===t||null===(a=t.hash)||void 0===a?void 0:a.slice(1))&&void 0!==e?e:"");n.access_token&&(sessionStorage.setItem("accessToken",n.access_token),window.location="/")}),[]),r.a.createElement("div",{className:Xe.a.appWrapper},r.a.createElement("div",{className:Xe.a.app},r.a.createElement("div",{className:Xe.a.sticky},r.a.createElement("div",{className:Xe.a.content},r.a.createElement("h1",{className:Xe.a.headline},"Google Calendar Hours Calculator"),!e&&r.a.createElement(h,null),e&&r.a.createElement(Qe,null)),r.a.createElement("footer",{className:Xe.a.footer},r.a.createElement("p",null,r.a.createElement("span",null,"\xa9 2011 - 2021. This app is open source. "),r.a.createElement("a",{href:"https://github.com/aronwoost/google-calendar-hours",target:"_blank",rel:"noreferrer"},"Check it on GitHub"),r.a.createElement("span",null,"."))))))},et=a(28),tt=a.n(et);T.a.extend(tt.a);var at=function(){try{return sessionStorage.getItem("accessToken")}catch(e){}return null},nt=function(){var e,t,a,n=null!==(e=G())&&void 0!==e?e:{};return{selectedRangeType:null!==(t=n.selectedRangeType)&&void 0!==t?t:B,currentDatePointerStart:n.selectedRangeType===z?n.start:T()().startOf("day").toJSON(),currentDatePointerEnd:n.end,weekStart:null!==(a=n.weekStart)&&void 0!==a?a:V}},rt=function(){return Object(u.a)({reducer:{authentication:p,calendars:Se,viewState:ge,calendarEvents:H},preloadedState:{authentication:{accessToken:at()},viewState:nt()}})};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:rt()},r.a.createElement($e,null))),document.getElementById("root"))},5:function(e,t,a){e.exports={list:"Events_list__2g1gF",listItem:"Events_listItem__2H72N",eventDate:"Events_eventDate__d6JNk",eventName:"Events_eventName__3Wmwm",eventHours:"Events_eventHours__KsPN8",sortByLabel:"Events_sortByLabel__1GjNb",downloadLink:"Events_downloadLink__13IYI",calendar:"Events_calendar__19qLX",rtable:"Events_rtable__2oQTx",smalldate:"Events_smalldate__3CujU"}}},[[30,1,2]]]);
//# sourceMappingURL=main.77cb2c67.chunk.js.map