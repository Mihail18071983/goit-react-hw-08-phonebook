"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[161],{7161:function(n,e,r){r.r(e),r.d(e,{default:function(){return U}});var a,t,i,o,u,l=r(9434),s=r(2791),d=r(3684),c=r(1413),m={name:"",number:""},f=r(5705),b=r(6727),x=r(4334),p=r(6747),h=r(8469),g=function(n){var e=n.contacts,r=n.filter;if(!r)return e.items;var a=r.toLowerCase();return e.items.filter((function(n){var e=n.name,r=n.number;return e.toLowerCase().includes(a)||r.includes(a)}))},v=function(n){return n.contacts.isLoading},j=function(n){return n.contacts.error},y=r(8402),Z=r(6151),C=r(184),w=b.Ry({name:b.Z_().min(6,"Name should be of minimum 6 characters length").required("nickname is required"),number:b.Z_().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid")}),k=function(n){var e=n.onSubmit,r=(0,f.TA)({initialValues:(0,c.Z)({},m),validationSchema:w,onSubmit:function(n,r){var a=r.resetForm;e(n)&&a()}}),a=(0,l.v9)(v);return(0,C.jsx)(p.Z,{marginBottom:"30px",marginLeft:"auto",marginRight:"auto",boxShadow:" rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",backgroundColor:"#ffff",borderRadius:"5px",children:(0,C.jsxs)(x.l0,{onSubmit:r.handleSubmit,children:[(0,C.jsx)(h.Z,{fullWidth:!0,id:"name",name:"name",label:"name",required:!0,value:r.values.name,onChange:r.handleChange,error:r.touched.name&&Boolean(r.errors.name),helperText:r.touched.name&&r.errors.name}),(0,C.jsx)(h.Z,{fullWidth:!0,id:"number",name:"number",label:"phone",required:!0,value:r.values.number,onChange:r.handleChange,error:r.touched.number&&Boolean(r.errors.number),helperText:r.touched.number&&r.errors.number}),(0,C.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",maxHeight:30,maxWidth:150,marginLeft:"auto",marginRight:"auto"},children:[!a&&(0,C.jsx)(Z.Z,{color:"primary",variant:"contained",fullWidth:!0,type:"submit",style:{display:"flex",borderRadius:10,marginLeft:"auto",marginRight:"auto"},children:"Add contact"}),a&&(0,C.jsx)(y.NB,{visible:!0,height:"40",width:"40",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})]})]})})},S=r(8029),P=r(4925),R=function(n){var e=n.value,r=n.onChange;return(0,C.jsx)(p.Z,{margin:1,marginLeft:"auto",marginRight:"auto",boxShadow:" rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",backgroundColor:"#ffff",borderRadius:"5px",children:(0,C.jsxs)(P.Z,{sx:{display:"flex",flexDirection:"column",gap:"10px",marginBottom:"30px",padding:"10px 16px"},children:["Find contacts by name",(0,C.jsx)(S.Z,{type:"text",value:e,onChange:r})]})})},L=r(9439),_=r(1232),B=r(168),T=r(7691),W=T.ZP.button(a||(a=(0,B.Z)(["\n  border: none;;\n  outline: none;\n  cursor: pointer;\n  background-color: ",";\n  border-radius: 5px;\n  padding: 5px 10px;\n  max-width: 100px;\n  transition: background-color 0.25s cubic-bezier(.05,.97,1,.08), color 0.25s cubic-bezier(.05,.97,1,.08);\n\n  &:hover {\n    background-color:",";\n    color:#ffffff;\n  }\n"])),(function(n){return"submit"===n.type?"#0000ff":"transparent"}),(function(n){return"submit"===n.type?"#ff0000":"#0000ff"})),q=T.ZP.li(t||(t=(0,B.Z)(["\n  margin: 0;\n  padding: 5px 10px;\n  border-radius: 5px;\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  align-items: center;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  background-color:#ffff;\n"]))),z=T.ZP.p(i||(i=(0,B.Z)(["\n  margin-left: 20px;\n  font-size: 18px;\n"]))),D=T.ZP.a(o||(o=(0,B.Z)(["\ncolor: #000;\n  margin-left: auto;\n  font-size: 18px;\n  text-decoration: none;\n  transition: all 250ms ease-in-out;\n\n  :hover,\n  :focus {\n    color: #39b0ff;\n  }\n"]))),F=r(9983),N=r(6355),A=r(7692),I=b.Ry({name:b.Z_().min(6,"Name should be of minimum 6 characters length").required("nickname is required"),number:b.Z_().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid")}),O=function(n){var e=n.id,r=n.initialValues,a=n.onSubmit,t=(0,l.I0)(),i=(0,f.TA)({initialValues:r,validationSchema:I,onSubmit:function(n,r){var i=r.resetForm;t((0,_.mP)((0,c.Z)({id:e},n))),i(),a()}}),o=(0,l.v9)(v);return(0,C.jsx)(p.Z,{margin:1,marginLeft:"auto",marginRight:"auto",boxShadow:" rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",backgroundColor:"#ffff",borderRadius:"5px",children:(0,C.jsxs)(x.l0,{onSubmit:i.handleSubmit,children:[(0,C.jsx)(h.Z,{fullWidth:!0,id:"name",name:"name",label:"name",required:!0,value:i.values.name,onChange:i.handleChange,error:i.touched.name&&Boolean(i.errors.name),helperText:i.touched.name&&i.errors.name}),(0,C.jsx)(h.Z,{fullWidth:!0,id:"number",name:"number",label:"phone",required:!0,value:i.values.number,onChange:i.handleChange,error:i.touched.number&&Boolean(i.errors.number),helperText:i.touched.number&&i.errors.number}),(0,C.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",maxHeight:30,maxWidth:150,marginLeft:"auto",marginRight:"auto"},children:[!o&&(0,C.jsx)(Z.Z,{color:"primary",variant:"contained",fullWidth:!0,type:"submit",style:{display:"flex",borderRadius:10,marginLeft:"auto",marginRight:"auto"},children:"Edit"}),o&&(0,C.jsx)(y.NB,{visible:!0,height:"40",width:"40",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})]})]})})},V=function(n){var e=n.name,r=n.number,a=n.id,t=(0,l.v9)(v),i=(0,l.I0)(),o=(0,s.useState)(!1),u=(0,L.Z)(o,2),c=u[0],m=u[1];return(0,C.jsxs)(q,{children:[c?(0,C.jsx)(O,{id:a,initialValues:{name:e,number:r},onSubmit:function(){return m(!1)}}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(z,{children:e}),(0,C.jsx)(D,{href:"tel:".concat(r),children:r}),(0,C.jsx)(W,{type:"button",onClick:function(){m(!0)},children:(0,C.jsx)(F.Pd.Provider,{value:{size:"2em"},children:t?(0,C.jsx)(N.fCD,{}):(0,C.jsx)(A.vpV,{})})})]}),!t&&(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(W,{type:"button",onClick:function(){i((0,_.GK)(a)),(0,d.rO)("".concat(e," has been successfully deleted from your phone book!"))},children:(0,C.jsx)(F.Pd.Provider,{value:{size:"2em"},children:t?(0,C.jsx)(N.fCD,{}):(0,C.jsx)(N.AMf,{})})})}),t&&(0,C.jsx)(y.NB,{visible:!0,height:"40",width:"40",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})]})},J=V;V.defaultProps={id:"01"};var E,H=T.ZP.ul(u||(u=(0,B.Z)(["\n  margin: 0;\n  padding: 10px 16px;\n  list-style: none;\n  border-radius: 5px;\n  background-color: #ffff;\n  box-shadow:rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n"]))),K=function(){var n=(0,l.v9)(g);return(0,C.jsx)(H,{children:n.map((function(n){var e=n.id,r=n.name,a=n.number;return(0,C.jsx)(J,{name:r,number:a,id:e},e)}))})},M=K;K.defaultProps={visibleContacts:[]};var $=T.ZP.div(E||(E=(0,B.Z)(["\n  margin-left: auto;\n  margin-right:auto;\n"]))),G=r(5653),Q=function(n){return n.filter};var U=function(){var n=(0,l.v9)(g),e=(0,l.v9)(Q),r=(0,l.I0)(),a=(0,l.v9)(j);(0,s.useEffect)((function(){r((0,_.yF)())}),[r]);var t=Boolean(n.length);return(0,C.jsxs)(x.D,{children:[(0,C.jsx)(x.RJ,{children:"ADDCONTACT FORM"}),(0,C.jsx)(k,{onSubmit:function(e){var a=e.name,t=e.number;if(function(e){var r=e.toLowerCase(),a=n.find((function(n){return n.name.toLowerCase()===r}));return Boolean(a)}(a))return(0,d.vl)("".concat(a," has already added in contacts")),!1;(0,d.rO)("\u0421ontact has been added successfully");var i=(0,_.uK)({name:a,number:t});return r(i),!0}}),!a&&(0,C.jsxs)($,{children:[(0,C.jsx)(x.RJ,{children:"Contacts"}),(0,C.jsx)(R,{value:e,onChange:function(n){r((0,G.T)(n.currentTarget.value))}}),t&&(0,C.jsx)(M,{}),!t&&(0,C.jsx)("p",{children:"No contact in phonebook"})]}),a&&(0,C.jsxs)("p",{style:{fontSize:24,fontWeight:800},children:["Ops, Something goes wrong"," "]})]})}},4334:function(n,e,r){r.d(e,{D:function(){return c},RJ:function(){return s},l0:function(){return d}});var a,t,i,o=r(168),u=r(7691),l=r(6747),s=u.ZP.h1(a||(a=(0,o.Z)(["\n  text-align: center;\n  color: #6495ed;\n"]))),d=u.ZP.form(t||(t=(0,o.Z)(["\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 10px 20px;\n  max-width: 400px;\n"]))),c=(0,u.ZP)(l.Z)(i||(i=(0,o.Z)(["\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  translate: -50%;\n  padding-bottom: 50px;\n"])))}}]);
//# sourceMappingURL=161.be4956cc.chunk.js.map