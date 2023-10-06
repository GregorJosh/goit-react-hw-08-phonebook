"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[257],{3535:function(n,e,r){r.d(e,{Z:function(){return l}});var o,t=r(168),a=r(5867).ZP.button(o||(o=(0,t.Z)(["\n  padding: 5px 20px;\n\n  cursor: pointer;\n  background-color: var(--color-blue);\n  color: white;\n  box-shadow: var(--def-box-shadow);\n  border-radius: 4px;\n  border: var(--def-border);\n  font-weight: 500;\n\n  &:hover {\n    background-color: var(--color-blue-light);\n  }\n"]))),i=r(3329),l=function(n){var e=n.children,r=n.type,o=n.value,t=n.className;return(0,i.jsx)(a,{className:t,type:r,onClick:function(e){n.onClick&&n.onClick(e.target.dataset.value)},"data-value":o,children:e})}},7996:function(n,e,r){r.d(e,{Z:function(){return c}});var o,t,a=r(168),i=r(5867),l=i.zo.div(o||(o=(0,a.Z)(["\n  width: 100%;\n\n  display: flex;\n  gap: 10px;\n\n  align-items: center;\n\n  ","\n"])),(function(n){return n.$vertical&&(0,i.iv)(t||(t=(0,a.Z)(["\n      flex-direction: column;\n      align-items: flex-start;\n    "])))})),d=r(3329),c=function(n){var e=n.label,r=n.vertical,o=void 0!==r&&r,t=n.children;return(0,d.jsxs)(l,{$vertical:o,children:[(0,d.jsx)("label",{htmlFor:t.props.name,children:e}),t]})}},9476:function(n,e,r){r.d(e,{Z:function(){return s}});var o,t,a=r(168),i=r(5867),l=i.ZP.div(o||(o=(0,a.Z)(["\n  display: none;\n\n  font-size: 0.8em;\n  background-color: rgba(255, 198, 198, 0.188);\n  color: red;\n  border-radius: 4px;\n"]))),d=i.ZP.input(t||(t=(0,a.Z)(["\n  width: 100%;\n  padding: 5px;\n\n  box-shadow: var(--def-box-shadow);\n  border-radius: 4px;\n  border: var(--def-border);\n\n  font-weight: 500;\n\n  &:active,\n  &:focus {\n    outline-style: ridge;\n    outline-color: rgba(0, 0, 128, 0.208);\n    outline-width: 2px;\n  }\n\n  &:valid {\n    border-color: green;\n    border-width: 2px;\n  }\n\n  &:invalid:focus {\n    border-color: red;\n    border-width: 3px;\n  }\n\n  &:invalid:focus + .error {\n    display: block;\n  }\n"]))),c=r(3329),s=function(n){var e=n.name,r=n.type,o=void 0===r?"text":r,t=n.pattern,a=void 0===t?"[0-9a-zA-Z\u0105\u0119\u0107\u015b\u0144\u0142\xf3\u017c\u017a\u0104\u0118\u0106\u015a\u0143\u0141\xd3\u017b\u0179 ]+":t,i=n.title,s=void 0===i?"Only letters, space and digits":i,u=n.placeholder,h=n.value;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d,{id:e,name:e,type:o,pattern:a,title:s,onChange:function(r){var o=r.target.value;n.onChange&&n.onChange({name:e,newValue:o})},placeholder:u||e,value:h,autoComplete:"on",required:!0}),(0,c.jsx)(l,{className:"error",children:s})]})}},2127:function(n,e,r){r.d(e,{G:function(){return a}});var o,t=r(168),a=r(5867).ZP.form(o||(o=(0,t.Z)(["\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 10px;\n\n  & > .button {\n    margin-top: 20px;\n  }\n"])))},6257:function(n,e,r){r.r(e),r.d(e,{default:function(){return b}});var o=r(1087),t=r(4270),a=r(1413),i=r(4942),l=r(9439),d=r(2791),c=r(9434),s=r(7996),u=r(9476),h=r(3535),p=r(9273),v=r(2127),f=r(3329),x=function(){var n=(0,c.I0)(),e=(0,d.useState)({email:"",password:""}),r=(0,l.Z)(e,2),o=r[0],t=r[1],x=o.email,g=o.password,b=function(n){var e=n.name,r=n.newValue,l=(0,i.Z)({},e,r);t((0,a.Z)((0,a.Z)({},o),l))};return(0,f.jsxs)(v.G,{onSubmit:function(e){e.preventDefault();var r=e.target;n((0,p.pH)(o)),r.reset()},children:[(0,f.jsx)(s.Z,{label:"Email",vertical:!0,children:(0,f.jsx)(u.Z,{name:"email",value:x,pattern:"^[\\w\\-\\.]+@([\\w\\-]+\\.)+[\\w\\-]{2,4}$",title:"Only valid email string",onChange:b})}),(0,f.jsx)(s.Z,{label:"Password",vertical:!0,children:(0,f.jsx)(u.Z,{name:"password",type:"password",value:g,pattern:"^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$",title:"Password must have at least one lowercase letter, one uppercase letter,  one digit and must be at least 8 characters long.",onChange:b})}),(0,f.jsx)(h.Z,{className:"button",children:"Log In"})]})},g=r(9441),b=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.q,{children:(0,f.jsx)("title",{children:"Phonebook - Login"})}),(0,f.jsxs)(g.l,{children:[(0,f.jsx)("h2",{className:"heading",children:"Login To Your Account"}),(0,f.jsx)(x,{}),(0,f.jsxs)("p",{children:["Don't have an account?"," ",(0,f.jsx)(o.rU,{className:"link",to:"register",children:"Sign In..."})]})]})]})}},9441:function(n,e,r){r.d(e,{l:function(){return a}});var o,t=r(168),a=r(5867).ZP.div(o||(o=(0,t.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n\n  & > .heading {\n    font-weight: 500;\n  }\n\n  & .link {\n    color: var(--color-blue);\n\n    &:hover {\n      color: blue;\n    }\n  }\n"])))}}]);
//# sourceMappingURL=257.f3bc6794.chunk.js.map