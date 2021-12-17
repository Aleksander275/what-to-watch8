(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{71:function(e,t,a){"use strict";a.r(t),a.d(t,"store",(function(){return Oe}));var c,r,n=a(1),s=a.n(n),i=a(16),l=a.n(i),o=a(7),d=a(5);!function(e){e.Main="/",e.Movie="/movies/:id",e.MyList="/my-list",e.Player="/player/:id",e.SingIn="/sing-in",e.Review="/movies/:id/new-review",e.Error="/error"}(c||(c={})),function(e){e.Auth="AUTH",e.NoAuth="NO_AUTH",e.Unknown="UNKNOWN"}(r||(r={}));var j,u;!function(e){e.ChangeActiveGenre="films/changeActiveGenre",e.GetFilms="films/getFilms",e.IncreaseCountFilms="filmsList/IncreaseCountFilms",e.ResetCount="filmsList/ResetCount",e.ResetFilm="film/ResetFilm",e.LoadFilms="data/LoadFilms",e.LoadFilmsSimilar="data/LoadFilmsSimilar",e.LoadFilm="data/LoadFilm",e.LoadFilmPromo="film/LoadFilmPromo",e.LoadfilmsFavorite="data/LoadFilmsFavorite",e.LoadReviews="data/LoadReviews",e.LoadUser="data/LoadUser",e.RequireAuthorization="user/RequireAuthorization",e.RequireLogout="user/RequireLogout",e.RedirectToRoute="login/redirectToRoute"}(j||(j={})),function(e){e.Promo="/promo",e.Films="/films",e.Favorite="/favorite",e.Login="/login",e.Logout="/logout",e.Comments="/comments",e.Review="/comments/:film_id"}(u||(u={}));var m=a(2),b=a(6),h=a.n(b),f=a(14),O="what-to-watch",v=function(e){localStorage.setItem(O,e)},_=a(19),x=a.n(_),p=a(36),g=a.n(p),N=function(e){return Object.assign({},e,{posterImage:e.poster_image,previewImage:e.preview_image,backgroundImage:e.background_image,backgroundColor:e.background_color,videoLink:e.video_link,previewVideoLink:e.preview_video_link,scoresCount:e.scores_count,runTime:e.run_time,isFavorite:e.is_favorite})};x.a.extend(g.a);var w=function(e){switch(!0){case 0<=e&&e<3:return"Bad";case 3<=e&&e<5:return"Normal";case 5<=e&&e<8:return"Good";case 8<=e&&e<10:return"Very good";case 10<=e:return"Awesome";default:return""}},y=function(e){return{type:j.LoadUser,payload:{user:e}}},k=a(21),L=function(e){return function(){var t=Object(f.a)(h.a.mark((function t(a,c,r){var n,s,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.get("".concat(u.Films,"/").concat(e));case 2:n=t.sent,s=n.data,i=N(s),a((c=i,{type:j.LoadFilm,payload:{film:c}}));case 6:case"end":return t.stop()}var c}),t)})));return function(e,a,c){return t.apply(this,arguments)}}()},F=function(){return function(){var e=Object(f.a)(h.a.mark((function e(t,a,c){var r,n,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get(u.Promo);case 2:r=e.sent,n=r.data,s=N(n),t((a=s,{type:j.LoadFilmPromo,payload:{filmPromo:a}}));case 6:case"end":return e.stop()}var a}),e)})));return function(t,a,c){return e.apply(this,arguments)}}()},S=function(){return function(){var e=Object(f.a)(h.a.mark((function e(t,a,c){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get(u.Login).then((function(e){var a,c=(a=e.data,Object.assign({},a,{avatarUrl:a.avatar_url}));t(y(c))}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),k.b.info("\u041d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c\u0442\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,a,c){return e.apply(this,arguments)}}()},R=a(40),C=a(8),I=a(0);var T=function(e){var t=e.films,a=Object(m.c)((function(e){return e.genre})),c=Object(m.b)(),r=Object(n.useState)(a),s=Object(C.a)(r,2),i=s[0],l=s[1],o=["All genres"].concat(Object(R.a)(new Set(t.map((function(e){return e.genre}))))),d=function(e){c(function(e){return{type:j.ChangeActiveGenre,payload:e}}(e))},u=function(){c({type:j.ResetCount})},b=function(e){return i===e?"catalog__genres-item catalog__genres-item--active":"catalog__genres-item"};return Object(I.jsx)("ul",{className:"catalog__genres-list",children:o.map((function(e){return Object(I.jsx)("li",{className:b(e),children:Object(I.jsx)("a",{href:"/",className:"catalog__genres-link",onClick:function(t){t.preventDefault(),d(e),l(e),u()},children:e})},e)}))})};var A=function(){return Object(I.jsx)("p",{children:"Loading ..."})};var P=function(){return Object(I.jsxs)(o.b,{className:"logo__link",to:"/",children:[Object(I.jsx)("span",{className:"logo__letter logo__letter--1",children:"W"}),Object(I.jsx)("span",{className:"logo__letter logo__letter--2",children:"T"}),Object(I.jsx)("span",{className:"logo__letter logo__letter--3",children:"W"})]})},M={display:"flex",justifyContent:"center",alignItems:"center"};var W=function(e){var t=e.film,a=Object(n.useState)(!1),c=Object(C.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(!1),l=Object(C.a)(i,2),d=l[0],j=l[1];Object(n.useEffect)((function(){if(r){var e=setTimeout((function(){j(!0)}),1e3);return function(){return clearTimeout(e)}}}),[r]);var u=r&&d;return Object(I.jsxs)("article",{onMouseEnter:function(){return s(!0)},onMouseLeave:function(){s(!1),j(!1)},className:"small-film-card catalog__films-card",children:[u&&Object(I.jsx)("div",{style:M,children:Object(I.jsx)("video",{src:t.previewVideoLink,autoPlay:!0,muted:!0,poster:t.previewImage,width:"280",height:"175",style:{objectFit:"cover"}})}),!u&&Object(I.jsx)("div",{className:"small-film-card__image",children:Object(I.jsx)("img",{src:t.previewImage,alt:t.name,width:"280",height:"175"})}),Object(I.jsx)("h3",{className:"small-film-card__title",children:Object(I.jsx)(o.b,{className:"small-film-card__link",to:"/movies/".concat(t.id),children:t.name})})]})};var U=function(e){var t=e.films;return Object(I.jsx)("div",{className:"catalog__films-list",children:t.map((function(e){return Object(I.jsx)(W,{film:e},e.id)}))})};var z=function(){var e=Object(m.b)();return Object(I.jsx)("div",{className:"catalog__more",children:Object(I.jsx)("button",{onClick:function(){var t;e((t=8,{type:j.IncreaseCountFilms,payload:t}))},className:"catalog__button",type:"button",children:"Show more"})})};var D=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.user}));return Object(m.c)((function(e){return e.authorizationStatus}))!==r.Auth?Object(I.jsx)("div",{className:"user-block",children:Object(I.jsx)(o.b,{to:c.SingIn,className:"user-block__link",children:"Sign in"})}):Object(I.jsxs)("ul",{className:"user-block",children:[Object(I.jsx)("li",{className:"user-block__item",children:Object(I.jsx)("div",{className:"user-block__avatar",children:Object(I.jsx)("img",{src:t.avatarUrl,alt:"User avatar",width:"63",height:"63"})})}),Object(I.jsx)("li",{className:"user-block__item",onClick:function(){e(function(){var e=Object(f.a)(h.a.mark((function e(t,a,c){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.delete(u.Logout),localStorage.removeItem(O),t(y({id:0,email:"",name:"",avatarUrl:"",token:""})),t({type:j.RequireLogout});case 4:case"end":return e.stop()}}),e)})));return function(t,a,c){return e.apply(this,arguments)}}())},children:Object(I.jsx)("a",{href:"/",className:"user-block__link",children:"Sign out"})})]})};var q=function(){var e=Object(m.c)((function(e){return e.films})),t=Object(m.c)((function(e){return e.filmPromo})),a=Object(m.c)((function(e){return e.genre})),n=Object(m.c)((function(e){return e.count})),i=Object(m.c)((function(e){return e.authorizationStatus})),l=Object(d.g)(),o=Object(m.b)(),j=null===t||void 0===t?void 0:t.isFavorite,u=function(e,t){e&&o(function(e,t){return function(){var a=Object(f.a)(h.a.mark((function a(c,r,n){return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.post("/favorite/".concat(e,"/").concat(t));case 2:c(F());case 3:case"end":return a.stop()}}),a)})));return function(e,t,c){return a.apply(this,arguments)}}()}(e,t))},b=e.filter((function(e){return"All genres"===a?e:e.genre===a})),O=b.slice(0,n),v=e.length>n&&O.length<b.length;return null===t?Object(I.jsx)(A,{}):Object(I.jsxs)(s.a.Fragment,{children:[Object(I.jsxs)("section",{className:"film-card",children:[Object(I.jsx)("div",{className:"film-card__bg",children:Object(I.jsx)("img",{src:t.backgroundImage,alt:t.name})}),Object(I.jsx)("h1",{className:"visually-hidden",children:"WTW"}),Object(I.jsxs)("header",{className:"page-header film-card__head",children:[Object(I.jsx)("div",{className:"logo",children:Object(I.jsx)(P,{})}),Object(I.jsx)(D,{})]}),Object(I.jsx)("div",{className:"film-card__wrap",children:Object(I.jsxs)("div",{className:"film-card__info",children:[Object(I.jsx)("div",{className:"film-card__poster",children:Object(I.jsx)("img",{src:t.posterImage,alt:t.name,width:"218",height:"327"})}),Object(I.jsxs)("div",{className:"film-card__desc",children:[Object(I.jsx)("h2",{className:"film-card__title",children:t.name}),Object(I.jsxs)("p",{className:"film-card__meta",children:[Object(I.jsx)("span",{className:"film-card__genre",children:t.genre}),Object(I.jsx)("span",{className:"film-card__year",children:t.released})]}),Object(I.jsxs)("div",{className:"film-card__buttons",children:[Object(I.jsxs)("button",{className:"btn btn--play film-card__button",type:"button",onClick:function(){return l.push("/player/".concat(t.id))},children:[Object(I.jsx)("svg",{viewBox:"0 0 19 19",width:"19",height:"19",children:Object(I.jsx)("use",{xlinkHref:"#play-s"})}),Object(I.jsx)("span",{children:"Play"})]}),Object(I.jsx)("button",{className:"btn btn--list film-card__button",type:"button",style:{justifyContent:"center"},onClick:function(){return l.push(c.MyList)},children:Object(I.jsx)("span",{children:"My list"})}),i===r.Auth?Object(I.jsxs)("button",{className:"btn btn--list film-card__button",type:"button",onClick:function(){return u(t.id,Number(!j))},children:[j?"":Object(I.jsx)("svg",{viewBox:"0 0 19 20",width:"19",height:"20",children:Object(I.jsx)("use",{xlinkHref:"#add"})}),Object(I.jsx)("span",{children:j?"Remove from my List":"Add to my list"})]}):""]})]})]})})]}),Object(I.jsxs)("div",{className:"page-content",children:[Object(I.jsxs)("section",{className:"catalog",children:[Object(I.jsx)("h2",{className:"catalog__title visually-hidden",children:"Catalog"}),Object(I.jsx)(T,{films:e}),Object(I.jsx)(U,{films:O}),v&&Object(I.jsx)(z,{})]}),Object(I.jsxs)("footer",{className:"page-footer",children:[Object(I.jsx)("div",{className:"logo",children:Object(I.jsxs)("a",{href:"/",className:"logo__link logo__link--light",children:[Object(I.jsx)("span",{className:"logo__letter logo__letter--1",children:"W"}),Object(I.jsx)("span",{className:"logo__letter logo__letter--2",children:"T"}),Object(I.jsx)("span",{className:"logo__letter logo__letter--3",children:"W"})]})}),Object(I.jsx)("div",{className:"copyright",children:Object(I.jsx)("p",{children:"\xa9 2019 What to watch Ltd."})})]})]})]})};var E=function(e){var t=e.film,a=Math.floor(t.runTime/60),c=t.runTime%60;return Object(I.jsxs)("div",{className:"film-card__text film-card__row",children:[Object(I.jsxs)("div",{className:"film-card__text-col",children:[Object(I.jsxs)("p",{className:"film-card__details-item",children:[Object(I.jsx)("strong",{className:"film-card__details-name",children:"Director"}),Object(I.jsx)("span",{className:"film-card__details-value",children:t.director})]}),Object(I.jsxs)("div",{className:"film-card__details-item",children:[Object(I.jsx)("strong",{className:"film-card__details-name",children:"Starring"}),Object(I.jsx)("div",{className:"film-card__details-value",children:t.starring.map((function(e){return Object(I.jsxs)("div",{children:[e,","]},e)}))})]})]}),Object(I.jsxs)("div",{className:"film-card__text-col",children:[Object(I.jsxs)("p",{className:"film-card__details-item",children:[Object(I.jsx)("strong",{className:"film-card__details-name",children:"Run Time"}),Object(I.jsxs)("span",{className:"film-card__details-value",children:[a,"h ",c,"m"]})]}),Object(I.jsxs)("p",{className:"film-card__details-item",children:[Object(I.jsx)("strong",{className:"film-card__details-name",children:"Genre"}),Object(I.jsx)("span",{className:"film-card__details-value",children:t.genre})]}),Object(I.jsxs)("p",{className:"film-card__details-item",children:[Object(I.jsx)("strong",{className:"film-card__details-name",children:"Released"}),Object(I.jsx)("span",{className:"film-card__details-value",children:t.released})]})]})]})};var H=function(e){var t=e.film;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)("div",{className:"film-rating",children:[Object(I.jsx)("div",{className:"film-rating__score",children:t.rating}),Object(I.jsxs)("p",{className:"film-rating__meta",children:[Object(I.jsx)("span",{className:"film-rating__level",children:w(t.rating)}),Object(I.jsxs)("span",{className:"film-rating__count",children:[t.scoresCount," ratings"]})]})]}),Object(I.jsxs)("div",{className:"film-card__text",children:[Object(I.jsx)("p",{children:t.description}),Object(I.jsx)("p",{className:"film-card__director",children:Object(I.jsxs)("strong",{children:["Director: ",t.director]})}),Object(I.jsx)("p",{className:"film-card__starring",children:Object(I.jsxs)("strong",{children:["Starring: ",t.starring.join(", ")," and other"]})})]})]})};var G=function(e){var t=e.review,a=x()(t.date).format("MMMM DD, YYYY");return Object(I.jsxs)("div",{className:"review",children:[Object(I.jsxs)("blockquote",{className:"review__quote",children:[Object(I.jsx)("p",{className:"review__text",children:t.comment}),Object(I.jsxs)("footer",{className:"review__details",children:[Object(I.jsx)("cite",{className:"review__author",children:t.user.name}),Object(I.jsx)("time",{className:"review__date",dateTime:"2016-12-24",children:a})]})]}),Object(I.jsx)("div",{className:"review__rating",children:t.rating})]})};function B(e){var t=Math.ceil(e.length/2);return e.slice(0,t)}function V(e){return e.slice(B(e).length)}var Y=function(e){var t=e.id,a=Object(m.c)((function(e){return e.reviews}));return Object(n.useEffect)((function(){Oe.dispatch(function(e){return function(){var t=Object(f.a)(h.a.mark((function t(a,c,r){var n,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.get("".concat(u.Comments,"/").concat(e));case 2:n=t.sent,s=n.data,a((c=s,{type:j.LoadReviews,payload:{reviews:c}}));case 5:case"end":return t.stop()}var c}),t)})));return function(e,a,c){return t.apply(this,arguments)}}()}(t.toString()))}),[t]),Object(I.jsxs)("div",{className:"film-card__reviews film-card__row",children:[Object(I.jsx)("div",{className:"film-card__reviews-col",children:B(a).map((function(e,t){return Object(I.jsx)(G,{review:e},t)}))}),Object(I.jsx)("div",{className:"film-card__reviews-col",children:V(a).map((function(e,t){return Object(I.jsx)(G,{review:e},t)}))})]})};function J(e,t){switch(e){default:return Object(I.jsx)(H,{film:t});case"Details":return Object(I.jsx)(E,{film:t});case"Reviews":return Object(I.jsx)(Y,{id:t.id})}}var K=function(e){var t=e.film,a=Object(n.useState)("Overview"),c=Object(C.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(0),l=Object(C.a)(i,2),d=l[0],j=l[1];return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("nav",{className:"film-nav film-card__nav",children:Object(I.jsxs)("ul",{className:"film-nav__list",children:[Object(I.jsx)("li",{className:"film-nav__item ".concat(0===d?"film-nav__item--active":""),children:Object(I.jsx)(o.b,{to:"/movies/".concat(t.id),onClick:function(){s("Overview"),j(0)},className:"film-nav__link",children:"Overview"})}),Object(I.jsx)("li",{className:"film-nav__item ".concat(1===d?"film-nav__item--active":""),children:Object(I.jsx)(o.b,{to:"/movies/".concat(t.id),onClick:function(){s("Details"),j(1)},className:"film-nav__link",children:"Details"})}),Object(I.jsx)("li",{className:"film-nav__item ".concat(2===d?"film-nav__item--active":""),children:Object(I.jsx)(o.b,{to:"/movies/".concat(t.id),onClick:function(){s("Reviews"),j(2)},className:"film-nav__link",children:"Reviews"})})]})}),J(r,t)]})};var Q=function(){var e=Object(d.h)().id,t=Object(d.g)(),a=Object(m.b)();Object(n.useEffect)((function(){return Oe.dispatch(L(e)),Oe.dispatch(function(e){return function(){var t=Object(f.a)(h.a.mark((function t(a,c,r){var n,s,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.get("".concat(u.Films,"/").concat(e,"/similar"));case 2:n=t.sent,s=n.data,i=s.map((function(e){return N(e)})),a((c=i,{type:j.LoadFilmsSimilar,payload:{filmsSimilar:c}}));case 6:case"end":return t.stop()}var c}),t)})));return function(e,a,c){return t.apply(this,arguments)}}()}(e)),function(){a({type:j.ResetFilm})}}),[e,a]);var i=Object(m.c)((function(e){return e.film})),l=Object(m.c)((function(e){return e.isFilmLoaded})),b=Object(m.c)((function(e){return e.filmsSimilar})),O=Object(m.c)((function(e){return e.isFilmsSimilarLoaded})),v=Object(m.c)((function(e){return e.authorizationStatus})),_=null===i||void 0===i?void 0:i.isFavorite,x=function(e,t){e&&a(function(e,t){return function(){var a=Object(f.a)(h.a.mark((function a(c,r,n){return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.post("/favorite/".concat(e,"/").concat(t));case 2:c(L(e.toString()));case 3:case"end":return a.stop()}}),a)})));return function(e,t,c){return a.apply(this,arguments)}}()}(e,t))};return l||O?Object(I.jsxs)(s.a.Fragment,{children:[Object(I.jsxs)("section",{className:"film-card film-card--full",style:{background:null===i||void 0===i?void 0:i.backgroundColor},children:[Object(I.jsxs)("div",{className:"film-card__hero",children:[Object(I.jsx)("div",{className:"film-card__bg",children:Object(I.jsx)("img",{src:null===i||void 0===i?void 0:i.backgroundImage,alt:null===i||void 0===i?void 0:i.name})}),Object(I.jsx)("h1",{className:"visually-hidden",children:"WTW"}),Object(I.jsxs)("header",{className:"page-header film-card__head",children:[Object(I.jsx)("div",{className:"logo",children:Object(I.jsx)(P,{})}),Object(I.jsx)(D,{})]}),Object(I.jsx)("div",{className:"film-card__wrap",children:Object(I.jsxs)("div",{className:"film-card__desc",children:[Object(I.jsx)("h2",{className:"film-card__title",children:null===i||void 0===i?void 0:i.name}),Object(I.jsxs)("p",{className:"film-card__meta",children:[Object(I.jsx)("span",{className:"film-card__genre",children:null===i||void 0===i?void 0:i.genre}),Object(I.jsx)("span",{className:"film-card__year",children:null===i||void 0===i?void 0:i.released})]}),Object(I.jsxs)("div",{className:"film-card__buttons",children:[Object(I.jsxs)("button",{className:"btn btn--play film-card__button",type:"button",onClick:function(){return t.push("/player/".concat(null===i||void 0===i?void 0:i.id))},children:[Object(I.jsx)("svg",{viewBox:"0 0 19 19",width:"19",height:"19",children:Object(I.jsx)("use",{xlinkHref:"#play-s"})}),Object(I.jsx)("span",{children:"Play"})]}),Object(I.jsx)("button",{className:"btn btn--list film-card__button",type:"button",style:{justifyContent:"center"},onClick:function(){return t.push(c.MyList)},children:Object(I.jsx)("span",{children:"My list"})}),v===r.Auth?Object(I.jsxs)("button",{className:"btn btn--list film-card__button",type:"button",onClick:function(){return x(i.id,Number(!_))},children:[_?"":Object(I.jsx)("svg",{viewBox:"0 0 19 20",width:"19",height:"20",children:Object(I.jsx)("use",{xlinkHref:"#add"})}),Object(I.jsx)("span",{children:_?"Remove from my List":"Add to my list"})]}):"",Object(I.jsx)(o.b,{to:"/movies/".concat(null===i||void 0===i?void 0:i.id,"/new-review"),className:"btn film-card__button",children:"Add review"})]})]})})]}),Object(I.jsx)("div",{className:"film-card__wrap film-card__translate-top",children:Object(I.jsxs)("div",{className:"film-card__info",children:[Object(I.jsx)("div",{className:"film-card__poster film-card__poster--big",children:Object(I.jsx)("img",{src:null===i||void 0===i?void 0:i.posterImage,alt:null===i||void 0===i?void 0:i.name,width:"218",height:"327"})}),Object(I.jsx)("div",{className:"film-card__desc",children:Object(I.jsx)(K,{film:i})})]})})]}),Object(I.jsxs)("div",{className:"page-content",children:[Object(I.jsxs)("section",{className:"catalog catalog--like-this",children:[Object(I.jsx)("h2",{className:"catalog__title",children:"More like this"}),Object(I.jsx)("div",{className:"catalog__films-list",children:b.map((function(e){return Object(I.jsx)(W,{film:e},e.id)}))})]}),Object(I.jsxs)("footer",{className:"page-footer",children:[Object(I.jsx)("div",{className:"logo",children:Object(I.jsxs)("a",{href:"main.html",className:"logo__link logo__link--light",children:[Object(I.jsx)("span",{className:"logo__letter logo__letter--1",children:"W"}),Object(I.jsx)("span",{className:"logo__letter logo__letter--2",children:"T"}),Object(I.jsx)("span",{className:"logo__letter logo__letter--3",children:"W"})]})}),Object(I.jsx)("div",{className:"copyright",children:Object(I.jsx)("p",{children:"\xa9 2019 What to watch Ltd."})})]})]})]}):Object(I.jsx)(A,{})};var X=function(){return Object(I.jsxs)("div",{children:[Object(I.jsxs)("h1",{children:["404.",Object(I.jsx)("br",{}),Object(I.jsx)("small",{children:"Page not found"})]}),Object(I.jsx)("a",{href:"/",children:"Go to main page"})]})};var Z=function(){Object(n.useEffect)((function(){Oe.dispatch(function(){var e=Object(f.a)(h.a.mark((function e(t,a,c){var r,n,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get(u.Favorite);case 2:r=e.sent,n=r.data,s=n.map((function(e){return N(e)})),t((a=s,{type:j.LoadfilmsFavorite,payload:{filmsFavorite:a}}));case 6:case"end":return e.stop()}var a}),e)})));return function(t,a,c){return e.apply(this,arguments)}}())}),[]);var e=Object(m.c)((function(e){return e.filmsFavorite}));return Object(m.c)((function(e){return e.isFilmsFavoriteLoaded}))?Object(I.jsxs)("div",{className:"user-page",children:[Object(I.jsxs)("header",{className:"page-header user-page__head",children:[Object(I.jsx)("div",{className:"logo",children:Object(I.jsx)(P,{})}),Object(I.jsx)("h1",{className:"page-title user-page__title",children:"My list"}),Object(I.jsx)(D,{})]}),Object(I.jsxs)("section",{className:"catalog",children:[Object(I.jsx)("h2",{className:"catalog__title visually-hidden",children:"Catalog"}),0===e.length?Object(I.jsx)("p",{children:"There are no favorite movies now"}):Object(I.jsx)("div",{className:"catalog__films-list",children:e.map((function(e){return Object(I.jsx)(W,{film:e},e.id)}))})]}),Object(I.jsxs)("footer",{className:"page-footer",children:[Object(I.jsx)("div",{className:"logo",children:Object(I.jsxs)("a",{href:"/",className:"logo__link logo__link--light",children:[Object(I.jsx)("span",{className:"logo__letter logo__letter--1",children:"W"}),Object(I.jsx)("span",{className:"logo__letter logo__letter--2",children:"T"}),Object(I.jsx)("span",{className:"logo__letter logo__letter--3",children:"W"})]})}),Object(I.jsx)("div",{className:"copyright",children:Object(I.jsx)("p",{children:"\xa9 2019 What to watch Ltd."})})]})]}):Object(I.jsx)(A,{})};var $=function(e){var t=e.films,a=Object(d.h)().id,c=t.findIndex((function(e){return e.id.toString()===a})),r=t[c],s=Object(d.g)(),i=Object(n.useState)(!0),l=Object(C.a)(i,2),o=l[0],j=l[1],u=Object(n.useState)(!0),m=Object(C.a)(u,2),b=(m[0],m[1]),h=Object(n.useState)(0),f=Object(C.a)(h,2),O=f[0],v=f[1],_=Object(n.useState)("00:00"),p=Object(C.a)(_,2),g=p[0],N=p[1],w=Object(n.useRef)(null);return Object(I.jsxs)("div",{className:"player",children:[Object(I.jsx)("video",{src:r.videoLink,ref:w,className:"player__video",poster:r.backgroundImage,autoPlay:!0,onPlay:function(){j(!0)},onPause:function(){j(!1)},onTimeUpdate:function(e){var t,a=e.currentTarget,c=100*a.currentTime/a.duration,r=(t=a.duration-a.currentTime,x.a.duration(t,"seconds").format("-HH:mm:ss").replace("00:",""));N(r),v(c)},onWaiting:function(){b(!0)},onPlaying:function(){b(!1)},onLoadedData:function(){b(!1)}}),Object(I.jsx)("button",{type:"button",className:"player__exit",onClick:function(){s.push("/movies/".concat(r.id))},children:"Exit"}),Object(I.jsxs)("div",{className:"player__controls",children:[Object(I.jsxs)("div",{className:"player__controls-row",children:[Object(I.jsxs)("div",{className:"player__time",children:[Object(I.jsx)("progress",{className:"player__progress",value:O,max:"100"}),Object(I.jsx)("div",{className:"player__toggler",style:{left:"".concat(O,"%")},children:"Toggler"})]}),Object(I.jsx)("div",{className:"player__time-value",children:g})]}),Object(I.jsxs)("div",{className:"player__controls-row",children:[Object(I.jsxs)("button",{type:"button",className:"player__play",onClick:function(){null!==w.current&&(o?(w.current.pause(),j(!1)):(w.current.play(),j(!0)))},children:[Object(I.jsx)("svg",{viewBox:"0 0 19 19",width:"19",height:"19",children:o?Object(I.jsx)("use",{xlinkHref:"#pause"}):Object(I.jsx)("use",{xlinkHref:"#play-s"})}),Object(I.jsx)("span",{children:"Play"})]}),Object(I.jsx)("div",{className:"player__name",children:"Transpotting"}),Object(I.jsxs)("button",{type:"button",className:"player__full-screen",onClick:function(){null!==w.current&&w.current.requestFullscreen()},children:[Object(I.jsx)("svg",{viewBox:"0 0 27 27",width:"27",height:"27",children:Object(I.jsx)("use",{xlinkHref:"#full-screen"})}),Object(I.jsx)("span",{children:"Full screen"})]})]})]})]})};var ee=function(e){var t=e.index,a=e.setRating;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("input",{onChange:a,className:"rating__input",id:"star-".concat(t),type:"radio",name:"rating",value:10-t}),Object(I.jsxs)("label",{className:"rating__label",htmlFor:"star-".concat(t),children:["Rating ",t]})]})};var te=function(){var e=Object(d.h)().id,t=Object(m.c)((function(e){return e.films})),a=t.findIndex((function(t){return t.id.toString()===e})),c=t[a],r=Object(n.useRef)(null),s=Object(n.useState)(null),i=Object(C.a)(s,2),l=i[0],j=i[1],u=Object(m.b)(),b=Object(n.useCallback)((function(e){if(l){var t=parseInt(l.value,10);null!==r.current&&null!==t&&(u(function(e){var t=e.rating,a=e.comment,c=e.id;return function(){var e=Object(f.a)(h.a.mark((function e(r,n,s){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.post("/comments/".concat(c),{rating:t,comment:a});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),k.b.info("\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d \u0440\u0435\u0439\u0442\u0438\u043d\u0433 \u0438\u043b\u0438 \u0442\u0435\u043a\u0441\u0442 \u0440\u0435\u0432\u044c\u044e");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,a,c){return e.apply(this,arguments)}}()}({rating:t,comment:r.current.value,id:e})),r.current.value="",l.checked=!1,j(null))}}),[l,u]),O=Object(n.useCallback)((function(e){return j(e.target)}),[]);return Object(I.jsxs)("section",{className:"film-card film-card--full",style:{background:c.backgroundColor},children:[Object(I.jsxs)("div",{className:"film-card__header",children:[Object(I.jsx)("div",{className:"film-card__bg",children:Object(I.jsx)("img",{src:c.backgroundImage,alt:c.name})}),Object(I.jsx)("h1",{className:"visually-hidden",children:"WTW"}),Object(I.jsxs)("header",{className:"page-header",children:[Object(I.jsx)("div",{className:"logo",children:Object(I.jsx)(P,{})}),Object(I.jsx)("nav",{className:"breadcrumbs",children:Object(I.jsxs)("ul",{className:"breadcrumbs__list",children:[Object(I.jsx)("li",{className:"breadcrumbs__item",children:Object(I.jsx)(o.b,{to:"/movies/".concat(c.id),className:"breadcrumbs__link",children:c.name})}),Object(I.jsx)("li",{className:"breadcrumbs__item",children:Object(I.jsx)(o.b,{to:"/movies/".concat(c.id,"/new-review"),className:"breadcrumbs__link",children:"Add review"})})]})}),Object(I.jsx)(D,{})]}),Object(I.jsx)("div",{className:"film-card__poster film-card__poster--small",children:Object(I.jsx)("img",{src:c.posterImage,alt:c.name,width:"218",height:"327"})})]}),Object(I.jsx)("div",{className:"add-review",children:Object(I.jsxs)("form",{action:"#",className:"add-review__form",onSubmit:function(e){e.preventDefault(),b(c.id)},children:[Object(I.jsx)("div",{className:"rating",children:Object(I.jsx)("div",{className:"rating__stars",children:new Array(10).fill(null).map((function(e,t){return Object(I.jsx)(ee,{index:t,setRating:O},t)}))})}),Object(I.jsxs)("div",{className:"add-review__text",children:[Object(I.jsx)("textarea",{ref:r,className:"add-review__textarea",name:"review-text",id:"review-text",placeholder:"Review text"}),Object(I.jsx)("div",{className:"add-review__submit",children:Object(I.jsx)("button",{className:"add-review__btn",type:"submit",children:"Post"})})]})]})})]})};var ae=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=Object(m.b)();return Object(I.jsxs)("div",{className:"user-page",children:[Object(I.jsxs)("header",{className:"page-header user-page__head",children:[Object(I.jsx)("div",{className:"logo",children:Object(I.jsx)(P,{})}),Object(I.jsx)("h1",{className:"page-title user-page__title",children:"Sign in"})]}),Object(I.jsx)("div",{className:"sign-in user-page__content",children:Object(I.jsxs)("form",{action:"",className:"sign-in__form",onSubmit:function(r){r.preventDefault(),null!==e.current&&null!==t.current&&a(function(e){var t=e.email,a=e.password;return function(){var e=Object(f.a)(h.a.mark((function e(r,n,s){var i,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.post(u.Login,{email:t,password:a});case 2:i=e.sent,l=i.data.token,v(l),r(S()),r((n=c.Main,{type:j.RedirectToRoute,payload:n}));case 7:case"end":return e.stop()}var n}),e)})));return function(t,a,c){return e.apply(this,arguments)}}()}({email:e.current.value,password:t.current.value}))},children:[Object(I.jsxs)("div",{className:"sign-in__fields",children:[Object(I.jsxs)("div",{className:"sign-in__field",children:[Object(I.jsx)("input",{ref:e,className:"sign-in__input",type:"email",placeholder:"Email address",name:"user-email",id:"user-email"}),Object(I.jsx)("label",{className:"sign-in__label visually-hidden",htmlFor:"user-email",children:"Email address"})]}),Object(I.jsxs)("div",{className:"sign-in__field",children:[Object(I.jsx)("input",{ref:t,className:"sign-in__input",type:"password",placeholder:"Password",name:"user-password",id:"user-password"}),Object(I.jsx)("label",{className:"sign-in__label visually-hidden",htmlFor:"user-password",children:"Password"})]})]}),Object(I.jsx)("div",{className:"sign-in__submit",children:Object(I.jsx)("button",{className:"sign-in__btn",type:"submit",children:"Sign in"})})]})}),Object(I.jsxs)("footer",{className:"page-footer",children:[Object(I.jsx)("div",{className:"logo",children:Object(I.jsxs)("a",{href:"main.html",className:"logo__link logo__link--light",children:[Object(I.jsx)("span",{className:"logo__letter logo__letter--1",children:"W"}),Object(I.jsx)("span",{className:"logo__letter logo__letter--2",children:"T"}),Object(I.jsx)("span",{className:"logo__letter logo__letter--3",children:"W"})]})}),Object(I.jsx)("div",{className:"copyright",children:Object(I.jsx)("p",{children:"\xa9 2019 What to watch Ltd."})})]})]})};var ce=function(e){var t=e.exact,a=e.path,n=e.render,s=Object(m.c)((function(e){return e.authorizationStatus}));return Object(I.jsx)(d.b,{exact:t,path:a,render:function(){return s===r.Auth?n():Object(I.jsx)(d.a,{to:c.SingIn})}})};var re=function(){var e=Object(m.c)((function(e){return e.isDataLoaded})),t=Object(m.c)((function(e){return e.films}));return function(e){return e===r.Unknown}(Object(m.c)((function(e){return e.authorizationStatus})))||!e?Object(I.jsx)(A,{}):Object(I.jsx)(o.a,{basename:"/what-to-watch8",children:Object(I.jsxs)(d.d,{children:[Object(I.jsx)(d.b,{exact:!0,path:c.Main,children:Object(I.jsx)(q,{})}),Object(I.jsx)(d.b,{exact:!0,path:c.Movie,children:Object(I.jsx)(Q,{})}),Object(I.jsx)(d.b,{exact:!0,path:c.Error,children:Object(I.jsx)(X,{})}),Object(I.jsx)(ce,{exact:!0,path:c.MyList,render:function(){return Object(I.jsx)(Z,{})}}),Object(I.jsx)(d.b,{exact:!0,path:c.Player,children:Object(I.jsx)($,{films:t})}),Object(I.jsx)(ce,{exact:!0,path:c.Review,render:function(){return Object(I.jsx)(te,{})}}),Object(I.jsx)(d.b,{exact:!0,path:c.SingIn,children:Object(I.jsx)(ae,{})})]})})},ne=a(15),se=a(3),ie={genre:"All genres",films:[],filmsFavorite:[],filmsSimilar:[],filmPromo:null,count:8,reviews:[],authorizationStatus:r.Unknown,isDataLoaded:!1,isFilmsSimilarLoaded:!1,isFilmsFavoriteLoaded:!1,isFilmLoaded:!1,user:{id:0,email:"",name:"",avatarUrl:"",token:""},film:{id:0,name:"",posterImage:"",previewImage:"",backgroundImage:"",backgroundColor:"",videoLink:"",previewVideoLink:"",description:"",rating:0,scoresCount:0,director:"",starring:[],runTime:0,genre:"",released:0,isFavorite:!1}};var le,oe=a(37),de=a(38),je=a.n(de);!function(e){e[e.Unauthorized=401]="Unauthorized"}(le||(le={}));var ue=function(e){var t=je.a.create({baseURL:"https://8.react.pages.academy/wtw",timeout:5e3});return t.interceptors.response.use((function(e){return e}),(function(t){var a=t.response;return(null===a||void 0===a?void 0:a.status)===le.Unauthorized&&e(),Promise.reject(t)})),t.interceptors.request.use((function(e){var t=function(){var e=localStorage.getItem(O);return null!==e&&void 0!==e?e:""}();return t&&(e.headers["x-token"]=t),e})),t},me=a(39),be=a(10),he=Object(be.a)(),fe=(a(70),ue((function(){return Oe.dispatch((e=r.NoAuth,{type:j.RequireAuthorization,payload:e}));var e}))),Oe=Object(ne.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.ChangeActiveGenre:return Object(se.a)(Object(se.a)({},e),{},{genre:t.payload});case j.GetFilms:return Object(se.a)(Object(se.a)({},e),{},{films:t.payload});case j.IncreaseCountFilms:return Object(se.a)(Object(se.a)({},e),{},{count:e.count+t.payload});case j.ResetCount:return Object(se.a)(Object(se.a)({},e),{},{count:ie.count});case j.ResetFilm:return Object(se.a)(Object(se.a)({},e),{},{film:ie.film});case j.LoadFilms:var a=t.payload.films;return Object(se.a)(Object(se.a)({},e),{},{films:a,isDataLoaded:!0});case j.LoadFilmsSimilar:var c=t.payload.filmsSimilar;return Object(se.a)(Object(se.a)({},e),{},{filmsSimilar:c,isFilmsSimilarLoaded:!0});case j.LoadFilm:var n=t.payload.film;return Object(se.a)(Object(se.a)({},e),{},{film:n,isFilmLoaded:!0});case j.LoadFilmPromo:var s=t.payload.filmPromo;return Object(se.a)(Object(se.a)({},e),{},{filmPromo:s});case j.LoadfilmsFavorite:var i=t.payload.filmsFavorite;return Object(se.a)(Object(se.a)({},e),{},{filmsFavorite:i,isFilmsFavoriteLoaded:!0});case j.LoadReviews:var l=t.payload.reviews;return Object(se.a)(Object(se.a)({},e),{},{reviews:l});case j.RequireAuthorization:return Object(se.a)(Object(se.a)({},e),{},{authorizationStatus:t.payload});case j.RequireLogout:return Object(se.a)(Object(se.a)({},e),{},{authorizationStatus:r.NoAuth});case j.LoadUser:var o=t.payload.user;return Object(se.a)(Object(se.a)({},e),{},{user:o,authorizationStatus:r.Auth});default:return e}}),Object(oe.composeWithDevTools)(Object(ne.applyMiddleware)(me.a.withExtraArgument(fe)),Object(ne.applyMiddleware)((function(e){return function(e){return function(t){return t.type===j.RedirectToRoute&&he.push(t.payload),e(t)}}}))));Oe.dispatch(S()),Oe.dispatch(F()),Oe.dispatch(function(){var e=Object(f.a)(h.a.mark((function e(t,a,c){var r,n,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get(u.Films);case 2:r=e.sent,n=r.data,s=n.map((function(e){return N(e)})),t((a=s,{type:j.LoadFilms,payload:{films:a}}));case 6:case"end":return e.stop()}var a}),e)})));return function(t,a,c){return e.apply(this,arguments)}}()),l.a.render(Object(I.jsx)(m.a,{store:Oe,children:Object(I.jsxs)(s.a.StrictMode,{children:[Object(I.jsx)(k.a,{}),Object(I.jsx)(re,{})]})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.b9a439da.chunk.js.map