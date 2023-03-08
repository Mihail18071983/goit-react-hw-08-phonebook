"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[881],{7881:function(n,e,t){t.r(e),t.d(e,{default:function(){return J}});var r,a,i,o,s,u,c=t(1686),l=t(9434),d=t(2791),p=t(4942),f=t(1413),b=t(9439),m={name:"",number:""},x=t(168),h=t(7691),g=h.ZP.button(r||(r=(0,x.Z)(["\n  border: ",";;\n  outline: none;\n  cursor: pointer;\n  background-color: ",";\n  border-radius: 5px;\n  padding: 5px 10px;\n  max-width: 100px;\n  transition: background-color 0.25s cubic-bezier(.05,.97,1,.08), color 0.25s cubic-bezier(.05,.97,1,.08);\n\n  &:hover {\n    background-color:",";\n    color:#ffffff;\n  }\n"])),(function(n){return"submit"===n.type?"none":"1px solid grey"}),(function(n){return"submit"===n.type?"#0000ff":"transparent"}),(function(n){return"submit"===n.type?"#ff0000":"#0000ff"})),v=h.ZP.form(a||(a=(0,x.Z)(["\n  display: flex;\n  flex-direction:column;\n  margin-left:10px;\n  margin-bottom: 30px;\n  margin-right: auto;\n  gap:10px;\n  padding-left:5px\n\n"]))),y=h.ZP.label(i||(i=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  max-width: 200px;\n"]))),j=function(n){var e=n.contacts,t=n.filter;if(!t)return e.items;var r=t.toLowerCase();return e.items.filter((function(n){var e=n.name,t=n.number;return e.toLowerCase().includes(r)||t.includes(r)}))},Z=function(n){return n.contacts.isLoading},w=function(n){return n.contacts.error},C=t(8402),k=t(184),P=function(n){var e=n.onSubmit,t=(0,d.useState)((0,f.Z)({},m)),r=(0,b.Z)(t,2),a=r[0],i=r[1],o=(0,l.v9)(Z),s=function(n){var e=n.currentTarget,t=e.name,r=e.value;i((function(n){return(0,f.Z)((0,f.Z)({},n),{},(0,p.Z)({},t,r))}))},u=a.name,c=a.number;return(0,k.jsxs)(v,{onSubmit:function(n){n.preventDefault(),e({name:u,number:c})&&i((0,f.Z)({},m))},children:[(0,k.jsxs)(y,{children:["Name",(0,k.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:u,onChange:s})]}),(0,k.jsxs)(y,{children:["Number",(0,k.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:c,onChange:s})]}),(0,k.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",maxHeight:30,maxWidth:100},children:[!o&&(0,k.jsx)(g,{type:"submit",children:"Add contact"}),o&&(0,k.jsx)(C.NB,{visible:!0,height:"40",width:"40",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})]})]})},z=(0,h.ZP)(y)(o||(o=(0,x.Z)(["\n  margin-bottom: 20px;\n"]))),N=function(n){var e=n.value,t=n.onChange;return(0,k.jsxs)(z,{children:["Find contacts by name",(0,k.jsx)("input",{type:"text",value:e,onChange:t})]})},S=t(3634),_=h.ZP.li(s||(s=(0,x.Z)(["\n  margin: 0;\n  padding: 5px 10px;\n  border-radius: 5px;\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  align-items: center;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n"]))),L=function(n){var e=n.name,t=n.number,r=n.id,a=(0,l.v9)(Z),i=(0,l.I0)();return(0,k.jsxs)(_,{children:[(0,k.jsxs)("span",{children:[e,": ",t]}),!a&&(0,k.jsx)(g,{type:"button",onClick:function(){i((0,S.GK)(r)),c.Notify.warning("".concat(e," has been successfully deleted from your phone book!"))},children:"Delete"}),a&&(0,k.jsx)(C.NB,{visible:!0,height:"40",width:"40",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})]})},A=L;L.defaultProps={id:"01"};var B,T=h.ZP.ul(u||(u=(0,x.Z)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  max-width:400px;\n"]))),F=function(){var n=(0,l.v9)(j);return(0,k.jsx)(T,{children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,k.jsx)(A,{name:t,number:r,id:e},e)}))})},I=F;F.defaultProps={visibleContacts:[]};var q,D,K=h.ZP.h1(B||(B=(0,x.Z)(["\n  margin-left: 15px;\n  font-size: 24px;\n  font-weight: 700;\n"]))),W=h.ZP.h2(q||(q=(0,x.Z)(["\n  font-size: 24px;\n  font-weight: 700;\n"]))),E=h.ZP.div(D||(D=(0,x.Z)(["\n  margin-left: 15px;\n"]))),G=t(5653),H=function(n){return n.filter};var J=function(){var n=(0,l.v9)(j),e=(0,l.v9)(H),t=(0,l.I0)(),r=(0,l.v9)(w);(0,d.useEffect)((function(){t((0,S.yF)())}),[t]);var a=Boolean(n.length);return(0,k.jsxs)("div",{style:{paddingTop:30,paddingBottom:30},children:[(0,k.jsx)(K,{children:"Phonebook"}),(0,k.jsx)(P,{onSubmit:function(e){var r=e.name,a=e.number;if(function(e){var t=e.toLowerCase(),r=n.find((function(n){return n.name.toLowerCase()===t}));return Boolean(r)}(r))return c.Notify.failure("".concat(r," has already added in contacts")),!1;c.Notify.success("\u0421ontact has been added successfully");var i=(0,S.uK)({name:r,number:a});return t(i),!0}}),!r&&(0,k.jsxs)(E,{children:[(0,k.jsx)(W,{children:"Contacts"}),(0,k.jsx)(N,{value:e,onChange:function(n){t((0,G.T)(n.currentTarget.value))}}),a&&(0,k.jsx)(I,{}),!a&&(0,k.jsx)("p",{children:"No contact in phonebook"})]}),r&&(0,k.jsxs)("p",{style:{fontSize:24,fontWeight:800},children:["Ops, Something goes wrong"," "]})]})}}}]);
//# sourceMappingURL=881.e4253e33.chunk.js.map