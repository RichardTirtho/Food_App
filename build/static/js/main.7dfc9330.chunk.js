(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,function(e,t,n){e.exports={header:"Header_header__3KfI7",navbar:"Header_navbar__1ksBN",navlist:"Header_navlist__2vRxC",navlinks:"Header_navlinks__2vrR6","main-image":"Header_main-image__3tBpn"}},,,function(e,t,n){e.exports={cart:"Cart_cart__3rLHp",total:"Cart_total___LL7f",action:"Cart_action__3L_Dr",btnClose:"Cart_btnClose__1DMhy",order:"Cart_order__2YgEO"}},function(e,t,n){e.exports={"cart-item":"Cartitem_cart-item__2d_9c",summary:"Cartitem_summary__2WwXY",price:"Cartitem_price__1BZvs",amount:"Cartitem_amount__1etZl",actions:"Cartitem_actions__3X3XE"}},,,function(e,t,n){e.exports={button:"HeaderCart_button__3zfUq",icon:"HeaderCart_icon__3HldX",badge:"HeaderCart_badge__1mWX7",bump:"HeaderCart_bump__2JMCv"}},,function(e,t,n){e.exports={Mealitem:"Mealitem_Mealitem__CK7P9",description:"Mealitem_description__agQ-i",price:"Mealitem_price__1nPbw"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1GHkc",modal:"Modal_modal__2mDrr","slide-down":"Modal_slide-down__1ihf7"}},,,function(e,t,n){e.exports={summery:"MealsSummery_summery__1e2tc",afterLoading:"MealsSummery_afterLoading__2asQq"}},function(e,t,n){e.exports={meal:"AvailableMeals_meal__PqATc","meals-appear":"AvailableMeals_meals-appear__2r6Qe"}},function(e,t,n){e.exports={card:"Card_card__35kDH"}},function(e,t,n){e.exports={input:"Input_input__3zaG3"}},function(e,t,n){e.exports={form:"MealitemForm_form__2Gq0C"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),i=(n(24),n(4)),r=n(1),s=n.n(r),o=n(2),l=n.n(o),d=n.p+"static/media/foodie.d8410bd3.jpg",m=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),j=n(9),u=n.n(j),b=n(0),x=function(){return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(b.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},h=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(m),o=s.items.reduce((function(e,t){return e+t.amount}),0),l=s.items,d="".concat(u.a.button," ").concat(a?u.a.bump:"");return Object(r.useEffect)((function(){if(0!==l.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[l]),Object(b.jsxs)("button",{className:d,onClick:e.onClick,children:[Object(b.jsx)("span",{className:u.a.icon,children:Object(b.jsx)(x,{})}),Object(b.jsx)("span",{children:"Your Cart"}),Object(b.jsx)("span",{className:u.a.badge,children:o})]})},O=function(e){return Object(b.jsxs)(s.a.Fragment,{children:[Object(b.jsxs)("header",{className:l.a.header,children:[Object(b.jsx)("h1",{children:"FoodNest"}),Object(b.jsx)("nav",{className:l.a.navbar,children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{className:l.a.navlist,children:Object(b.jsx)("a",{href:"#",className:l.a.navlinks,children:"Home"})}),Object(b.jsx)("li",{className:l.a.navlist,children:Object(b.jsx)("a",{href:"#",className:l.a.navlinks,children:"About Us"})}),Object(b.jsx)("li",{className:l.a.navlist,children:Object(b.jsx)("a",{href:"#",className:l.a.navlinks,children:"Log In"})}),Object(b.jsx)("li",{className:l.a.navlist,children:Object(b.jsx)("a",{href:"#",className:l.a.navlinks,children:"Sign up"})})]})}),Object(b.jsx)(h,{onClick:e.onCart})]}),Object(b.jsx)("div",{className:l.a["main-image"],children:Object(b.jsx)("img",{src:d,alt:"Header-food"})})]})},_=n(15),p=n.n(_),f=function(){return Object(b.jsxs)("section",{className:p.a.summery,children:[Object(b.jsx)("h2",{children:"Delicious Food, delivered to you"}),Object(b.jsx)("p",{children:"Choose your favourite meal from our shop and enjoy delicious lunch or dinner at home"}),Object(b.jsxs)("p",{children:[" ","All our meals are cooked with high quality ingridients , just in time ofcourse by experienced chef."]})]})},v=n(16),C=n.n(v),N=n(17),g=n.n(N),A=function(e){return Object(b.jsx)("div",{className:g.a.card,children:e.children})},y=n(3),k=n(18),M=n.n(k),H=s.a.forwardRef((function(e,t){return Object(b.jsxs)("div",{className:M.a.input,children:[Object(b.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(b.jsx)("input",Object(y.a)({ref:t},e.input))]})})),w=n(19),I=n.n(w),F=function(e){var t=Object(r.useRef)(),n=Object(r.useState)(!0),a=Object(i.a)(n,2),c=a[0],s=a[1];return Object(b.jsxs)("form",{className:I.a.form,onSubmit:function(n){n.preventDefault();var a=t.current.value,c=+a;0===a.trim().length||c<0||c>5?s(!1):e.onAddCart(c)},children:[Object(b.jsx)(H,{ref:t,label:"Amount",input:{id:"amount",type:"number",min:1,max:5,step:1,defaultValue:1}}),Object(b.jsx)("button",{children:"+ Add"}),!c&&Object(b.jsx)("p",{children:"Please enter a valid amount (1-5). "})]})},R=n(11),L=n.n(R),P=function(e){var t="$".concat(e.price.toFixed(2)),n=Object(r.useContext)(m);return Object(b.jsxs)("li",{className:L.a.Mealitem,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)("div",{className:L.a.description,children:e.description}),Object(b.jsx)("div",{className:L.a.price,children:t})]}),Object(b.jsxs)("div",{children:[" ",Object(b.jsx)(F,{onAddCart:function(t){n.addItem({id:e.id,name:e.name,amount:t,price:e.price})}})]})]})},S=[{id:"m1",name:"Burger",description:"sausage delight",price:12.99},{id:"m2",name:"Pizza",description:"Meat theory",price:15.75},{id:"m3",name:"Sushi",description:"Finest fish & veges",price:13.32},{id:"m4",name:"Meat Loaf",description:"Chiken paste with garlic mayo",price:14.5}],z=function(){var e=S.map((function(e){return Object(b.jsx)(P,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(b.jsx)("section",{className:C.a.meal,children:Object(b.jsx)(A,{children:Object(b.jsxs)("ul",{children:[" ",e]})})})},B=function(){return Object(b.jsxs)(s.a.Fragment,{children:[Object(b.jsx)(f,{}),Object(b.jsx)(z,{})]})},D=n(5),q=n.n(D),E=n(12),X=n.n(E),T=function(e){return Object(b.jsx)("div",{className:X.a.backdrop,onClick:e.onClose})},G=function(e){return Object(b.jsx)("div",{className:X.a.modal,children:Object(b.jsx)("div",{className:X.a.content,children:e.children})})},J=document.getElementById("overlays"),Q=function(e){return Object(b.jsxs)(r.Fragment,{children:[c.a.createPortal(Object(b.jsx)(T,{onClose:e.onClose}),J),c.a.createPortal(Object(b.jsx)(G,{children:e.children}),J)]})},Y=n(6),$=n.n(Y),K=function(e){var t="$".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:$.a["cart-item"],children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:e.name}),Object(b.jsxs)("div",{className:$.a.summary,children:[Object(b.jsx)("span",{className:$.a.price,children:t}),Object(b.jsxs)("span",{className:$.a.amount,children:["x ",e.amount]})]})]}),Object(b.jsxs)("div",{className:$.a.actions,children:[Object(b.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(b.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},U=function(e){var t=Object(r.useContext)(m),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.addItem(Object(y.a)(Object(y.a)({},e),{},{amount:1}))},i=function(e){t.removeItem(e)},s=Object(b.jsx)("ul",{className:q.a.cart,children:t.items.map((function(e){return Object(b.jsx)(K,{name:e.name,price:e.price,amount:e.amount,onAdd:c.bind(null,e),onRemove:i.bind(null,e.id)},e.id)}))});return Object(b.jsxs)(Q,{onClose:e.onClose,children:[s,Object(b.jsxs)("div",{className:q.a.total,children:[Object(b.jsx)("span",{children:"Total Amount"}),Object(b.jsx)("span",{children:n})]}),Object(b.jsxs)("div",{className:q.a.action,children:[Object(b.jsx)("button",{className:q.a.btnClose,onClick:e.onClose,children:"close"}),a&&Object(b.jsx)("button",{className:q.a.order,children:"Order"})]})]})},W=n(14),Z={items:[],totalAmount:0},V=function(e,t){if("Add"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(y.a)(Object(y.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(W.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("Remove"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],d=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var m=Object(y.a)(Object(y.a)({},l),{},{amount:l.amount-1});(s=Object(W.a)(e.items))[o]=m}return{items:s,totalAmount:d}}return Z},ee=function(e){var t=Object(r.useReducer)(V,Z),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"Add",item:e})},removeItem:function(e){c({type:"Remove",id:e})}};return Object(b.jsx)(m.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)(ee,{children:[n&&Object(b.jsx)(U,{onClose:function(){a(!1)}}),Object(b.jsx)(O,{onCart:function(){a(!0)}}),Object(b.jsx)("main",{children:Object(b.jsx)(B,{})})]})};c.a.render(Object(b.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.7dfc9330.chunk.js.map