(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{36:function(e,c,t){},37:function(e,c,t){},48:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),i=t(18),n=t.n(i),r=(t(36),t.p,t(12)),d=t(4),o=(t(37),t(9)),l=t(19),j=t(2),u=function(){var e=Object(o.c)((function(e){return e.cartReducer})).totalQuantity;return Object(j.jsx)("div",{className:"navbar",children:Object(j.jsx)("div",{className:"containner",children:Object(j.jsxs)("div",{className:"navbarContainner",children:[Object(j.jsx)("div",{className:"navbarRight",children:Object(j.jsx)(r.b,{to:"/Header",children:Object(j.jsx)("img",{src:"/images/logo.jpg",alt:"logo"})})}),Object(j.jsx)("div",{className:"navbarLeft",children:Object(j.jsx)("div",{className:"carticon",children:Object(j.jsxs)(r.b,{to:"/Cart",children:[Object(j.jsx)(l.b,{className:"basket"}),Object(j.jsx)("span",{children:e})]})})})]})})})},b=function(){return Object(j.jsx)("div",{className:"header"})},p=t(3),m={products:[{id:1,name:"Men`s Tshirt",image:"tshirt.jpg",price:1100,discount:"60% off",discountprice:660,quantity:1,desc:" From GulAhmed Summers Collection"},{id:2,name:"Men`s 3ps",image:"pantcoat.jpg",price:2e3,discount:"50% off",discountprice:1e3,quantity:1,desc:"3piece Suit for Event Occassion  "},{id:3,name:"Men`s Watch",image:"watch.jpg",price:1500,discount:"65% off",discountprice:975,quantity:1,desc:"Rolex First Copy in reasonable price."},{id:4,name:"Men`s Shoe",image:"shoe.jpg",price:1250,discount:"50% off",discountprice:625,quantity:1,desc:"Armani Shoe"},{id:5,name:"Men`s Jogger",image:"jogers.jpg",price:1200,discount:"50% off",discountprice:600,quantity:1,desc:"Cat Jogger"},{id:6,name:"J. Kurta",image:"mshalwar.jpg",price:1200,discount:"50% off",discountprice:600,quantity:1,desc:"Kurta"},{id:7,name:"J. Fragnance",image:"jper.jpg",price:1500,discount:"50% off",discountprice:750,quantity:1,desc:"Fragnance"},{id:8,name:"PeshawariCha",image:"sandal.jpg",price:1400,discount:"50% off",discountprice:700,quantity:1,desc:"Peshawari Chappal"},{id:9,name:"Womens Dress",image:"wdress.jpg",price:1600,discount:"50% off",discountprice:880,quantity:1,desc:"Womens`s Dress"},{id:10,name:"Womens Frok",image:"wdress.jpg",price:1800,discount:"50% off",discountprice:900,quantity:1,desc:"Womens`s Frok"},{id:11,name:"Womens Heels",image:"wheel.jpg",price:1300,discount:"50% off",discountprice:650,quantity:1,desc:"Womens`s Heel"},{id:12,name:"Womens Watch",image:"wwatch.jpg",price:1e3,discount:"50% off",discountprice:500,quantity:1,desc:"Womens`s watch"}],Products:{}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,c=arguments.length>1?arguments[1]:void 0;return"Product"===c.type?Object(p.a)(Object(p.a)({},e),{},{Products:e.products.find((function(e){return e.id===parseInt(c.id)}))}):e},O=(t(27),t(5)),x=function(){var e=Object(o.c)((function(e){return e.Productreducers})).products;return Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{}),Object(j.jsxs)("div",{className:"firstCon",children:[Object(j.jsx)("div",{className:"category",children:Object(j.jsx)("marquee",{direction:"left",children:Object(j.jsx)("span",{className:"cate",children:"Make Your Choise Remarkable :) , HappyShopping!"})})}),Object(j.jsx)("div",{className:"Carddesign",children:e.map((function(e){return Object(j.jsx)("div",{className:"col-3",children:Object(j.jsx)(r.b,{to:"/Detail/".concat(e.id),className:"link",children:Object(j.jsxs)(O.a,{style:{width:"18rem",marginLeft:"5pc"},className:"cardAn",children:[Object(j.jsx)(O.a.Img,{variant:"top",src:"/images/".concat(e.image),style:{height:"150px",padding:"5px",borderRadius:"1.4pc"},alt:"image name"}),Object(j.jsxs)(O.a.Body,{children:[Object(j.jsx)(O.a.Title,{className:"cardTitle",children:e.name}),Object(j.jsx)(O.a.Text,{className:"cardText",children:e.desc}),Object(j.jsxs)("div",{className:"cardPrice",children:[Object(j.jsxs)(O.a.Text,{className:"cardprice",children:["Rs ",e.price]}),Object(j.jsxs)(O.a.Text,{className:"cardDprice",children:["Rs",e.discountprice]})]})]})]})})},e.id)}))})]})]})},f=t(15),g=function(){var e=Object(o.c)((function(e){return e.cartReducer})).products,c=Object(o.b)();return Object(j.jsx)("div",{className:"cart",children:Object(j.jsxs)("div",{className:"heading",children:[Object(j.jsx)("h",{children:"Your Cart!"}),0!==e.lenght||e.lenght>0?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"colc",children:Object(j.jsxs)("div",{className:"col9",children:[Object(j.jsx)("div",{className:"crow",children:Object(j.jsxs)("div",{className:"crow",children:[Object(j.jsx)("div",{className:"col2",children:"Product Id"}),Object(j.jsx)("div",{className:"col2",children:"Product"}),Object(j.jsx)("div",{className:"col2",children:"Name"}),Object(j.jsx)("div",{className:"col2",children:"Price"}),Object(j.jsx)("div",{className:"col2",children:"+/-"}),Object(j.jsx)("div",{className:"col2",children:"Total"}),Object(j.jsx)("div",{className:"col2",children:"Remove"})]})}),e.map((function(e){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"data",children:[Object(j.jsx)("div",{className:"idd",children:e.id}),Object(j.jsx)("div",{className:"imgd",children:Object(j.jsx)("img",{src:"/images/".concat(e.image),style:{height:"100px",marginLeft:" 0pc",borderRadius:"0.5pc",border:"1px green solid"}})}),Object(j.jsx)("div",{className:"nid",children:e.name}),Object(j.jsx)("div",{className:"pid",children:e.discountprice}),Object(j.jsxs)("div",{className:"idd",children:[Object(j.jsx)("span",{className:"dec1",children:Object(j.jsx)(f.a,{onClick:function(){return c({type:"dec",payload:e.id})}})}),Object(j.jsx)("span",{className:"count",children:e.quan}),Object(j.jsx)("span",{className:"inc1",children:Object(j.jsx)(f.b,{onClick:function(){return c({type:"inc",payload:e.id})}})})]}),Object(j.jsxs)("div",{className:"tid",children:[" ",e.discountprice*e.quan," "]}),Object(j.jsx)("div",{className:"rd",onClick:function(){return c({type:"remove",payload:e.id})},children:Object(j.jsx)(l.a,{})})]})},e.id)}))]})})}):" Empty Cart"]})})},v=t(14),N=t(49),y=function(){var e=Object(d.e)().id,c=Object(o.b)(),t=Object(o.c)((function(e){return e.Productreducers})).Products,a=Object(s.useState)(1),i=Object(v.a)(a,2),n=i[0],r=i[1];Object(s.useEffect)((function(){c({type:"Product",id:e})}),[e]);return console.log(t),Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"Dmd",children:Object(j.jsx)("div",{className:"Dfd",children:Object(j.jsxs)(O.a,{className:"dcard",children:[Object(j.jsxs)(O.a.Header,{style:{backgroundColor:"skyblue",fontFamily:"sans-serif",fontWeight:"bold"},children:["Product id : ",t.id," "]}),Object(j.jsxs)(O.a.Body,{children:[Object(j.jsx)("img",{src:"/images/".concat(t.image),style:{height:"200px",borderRadius:"0.5pc",border:"1px green solid"}}),Object(j.jsx)(O.a.Title,{className:"dsnd",children:Object(j.jsxs)("span",{className:"dsn",children:[" ",t.name," "]})}),Object(j.jsx)(O.a.Text,{children:Object(j.jsxs)("span",{className:"dsd",children:[" ",t.desc]})}),Object(j.jsxs)(O.a.Text,{className:"id1",children:[Object(j.jsx)("span",{className:"dec",children:Object(j.jsx)(f.a,{onClick:function(){n>1&&r(n-1)}})}),Object(j.jsx)("span",{className:"quantity",children:n}),Object(j.jsx)("span",{className:"inc",children:Object(j.jsx)(f.b,{onClick:function(){return r(n+1)}})})]}),Object(j.jsxs)(O.a.Text,{className:"dlc",children:[Object(j.jsxs)("span",{className:"ds1",children:["Rs ",t.price,"  "]})," ",Object(j.jsx)("span",{className:"ds2",children:t.discount}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{className:"ds3",children:["In Only : Rs ",t.discountprice*n]})]}),Object(j.jsx)(N.a,{variant:"primary",style:{backgroundColor:"green"},onClick:function(){return c({type:"addtocart",payload:{Products:t,quan:n}})},children:"Add to cart"})]})]})})})})},P=t(21),q=t(31),C={products:[],totalQuantity:0,totalPrice:0},k=function(){var e,c,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case"addtocart":var a=s.payload,i=a.Products,n=a.quan,r=t.products.find((function(e){return e.id===i.id}));if(r)return t;var d=t.totalPrice+i.discountprice*n,o=t.totalQuantity+n;return i.quan=n,Object(p.a)(Object(p.a)({},t),{},{products:[].concat(Object(q.a)(t.products),[i]),totalPrice:d,totalQuantity:o});case"inc":return e=t.products.find((function(e){return e.id===s.payload})),c=t.products.findIndex((function(e){return e.id===s.payload})),e.quan+=1,t.products[c]=e,Object(p.a)(Object(p.a)({},t),{},{totalPrice:t.totalPrice+e.discountprice,totalQuantity:t.totalQuantity+1});case"dec":return e=t.products.find((function(e){return e.id===s.payload})),c=t.products.findIndex((function(e){return e.id===s.payload})),e.quan>1?(e.quan-=1,t.products[c]=e,Object(p.a)(Object(p.a)({},t),{},{totalPrice:t.totalPrice-e.discountprice,totalQuantity:t.totalQuantity-1})):t;case"remove":e=t.products.find((function(e){return e.id===s.payload}));var l=t.products.filter((function(e){return e.id!==s.payload}));return Object(p.a)(Object(p.a)({},t),{},{products:l,totalPrice:t.totalPrice-e.discountprice*e.quan,totalQuantity:t.totalQuantity-e.quan});default:return t}},w=t(30),R=Object(P.combineReducers)({Productreducers:h,cartReducer:k}),T=Object(P.createStore)(R,Object(w.devToolsEnhancer)());var F=function(){return Object(j.jsx)(r.a,{children:Object(j.jsxs)(o.a,{store:T,children:[Object(j.jsx)(u,{}),Object(j.jsx)(d.a,{path:"/",exact:!0,component:x}),Object(j.jsx)(d.a,{path:"/Cart",exact:!0,component:g}),Object(j.jsx)(d.a,{path:"/Detail/:id",exact:!0,component:y})]})})},W=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,i=c.getLCP,n=c.getTTFB;t(e),s(e),a(e),i(e),n(e)}))};n.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root")),W()}},[[48,1,2]]]);
//# sourceMappingURL=main.fcaccfc8.chunk.js.map