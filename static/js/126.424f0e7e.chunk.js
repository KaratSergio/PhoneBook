"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[126],{126:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var a=n(420),s=n(791),l=n(272),c=n(634),o=n(553);const r=e=>e.contacts.isLoading,i=e=>e.contacts.items,m=e=>e.contacts.error,_=e=>e.filters,u=(0,o.P1)([i,_],((e,t)=>e.filter((e=>{let{name:n}=e;return"string"===typeof n&&n.toLowerCase().includes(t.toLowerCase())}))));var d=n(808),p=n(806),x=n(632);const b="Filter_name-label__NcJK-",h="Filter_name-input__hnuXu",j="Filter_icon-label__WMIgU";var C=n(184);const N=()=>{const e=(0,a.I0)(),t=(0,a.v9)(_);return(0,C.jsxs)("label",{className:b,children:[(0,C.jsx)(p.G,{icon:x.G_j,className:j}),"Filter",(0,C.jsx)("input",{className:h,type:"text",name:"filter",value:t||"",onChange:t=>{e((0,d.T)(t.target.value))},placeholder:"Find contacts by name",required:!0})]})};var v=n(639);const f={list:"ContactList_list__csErn",item:"ContactList_item__EZYHO",contactInfo:"ContactList_contactInfo__Sgq6p",name:"ContactList_name__UCkFW",nameContainer:"ContactList_nameContainer__W2xJE",nameIcon:"ContactList_nameIcon__5BSnI",deleteButton:"ContactList_deleteButton__3hT3n"},F=e=>{let{name:t,number:n}=e;return(0,C.jsxs)("div",{className:f.contactInfo,children:[(0,C.jsxs)("div",{className:f.nameContainer,children:[(0,C.jsx)(p.G,{className:f.nameIcon,icon:x.ILF}),(0,C.jsxs)("span",{className:f.name,children:[t,":"]})]}),(0,C.jsx)("span",{children:n})]})},L=e=>{let{contact:t,onDelete:n}=e;return(0,C.jsxs)("li",{className:f.item,children:[(0,C.jsx)(F,{name:t.name,number:t.number}),(0,C.jsxs)("button",{className:f.deleteButton,onClick:()=>n(t),children:[(0,C.jsx)(p.G,{icon:x.$aW}),"Delete"]})]},t.id)},w=()=>{const e=(0,a.I0)(),t=(0,a.v9)(u),n=(0,a.v9)(r),s=(0,a.v9)(m),l=t=>e((0,c.GK)(t.id));return(0,C.jsxs)("div",{children:[n&&(0,C.jsx)(v.a,{}),s&&(0,C.jsx)("div",{className:f.error,children:s}),(0,C.jsx)("ul",{className:f.list,children:t.map((e=>(0,C.jsx)(L,{contact:e,onDelete:l},e.id)))})]})};var y=n(565),I=n(694),g=n.n(I);const k={"form-container":"ContactForm_form-container__upYT4",button:"ContactForm_button__K0dU1",iconBtn:"ContactForm_iconBtn__Au6rR","name-label":"ContactForm_name-label__akRbL","tel-label":"ContactForm_tel-label__PHM4O","name-input":"ContactForm_name-input__+CzPc","tel-input":"ContactForm_tel-input__BCKkd","label-box":"ContactForm_label-box__5wUXz","icon-input":"ContactForm_icon-input__TLv06"},B=()=>{const e=(0,a.I0)(),t=(0,a.v9)(i),n=(0,a.v9)(r),s=(0,a.v9)(m);return(0,C.jsxs)("form",{className:k["form-container"],onSubmit:n=>{n.preventDefault();const{name:a,number:s}=n.target.elements,l=a.value,o=t.some((e=>{let{name:t}=e;return t.toLowerCase()===l.toLowerCase()}));if(o)g().Notify.warning("Contact with this name already exists",{position:"left-top"});else{const t={id:(0,y.x0)(),name:l,number:s.value};e((0,c.uK)(t)),g().Notify.success("Contact added successfully",{position:"left-top"})}n.target.reset()},children:[n&&(0,C.jsx)(v.a,{}),s&&(0,C.jsx)("div",{className:k.error,children:s}),(0,C.jsxs)("label",{className:k["name-label"],children:[(0,C.jsxs)("span",{className:k["label-box"],children:[(0,C.jsx)(p.G,{icon:x.ILF,className:k["icon-input"]}),"Name"]}),(0,C.jsx)("input",{className:k["name-input"],type:"text",name:"name",placeholder:"Enter name",required:!0,pattern:"[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\s]+",title:"Please enter only letters and spaces"})]}),(0,C.jsxs)("label",{className:k["tel-label"],children:[(0,C.jsxs)("span",{className:k["label-box"],children:[(0,C.jsx)(p.G,{icon:x.j1w,className:k["icon-input"]}),"Number"]}),(0,C.jsx)("input",{className:k["tel-input"],type:"tel",name:"number",placeholder:"Enter phone number",required:!0,pattern:"[0-9\\-]+",title:"Please enter only numbers"})]}),(0,C.jsxs)("button",{className:k.button,type:"submit",children:[(0,C.jsx)(p.G,{icon:x.LEp,className:k.iconBtn}),"Add Contact"]})]})},G="Contacts_container__WzsIr",E="Contacts_box__PikAd",P=()=>{const e=(0,a.I0)(),t=(0,a.v9)(r),n=(0,a.v9)(m);return(0,s.useEffect)((()=>{e((0,c.yF)())}),[e]),(0,C.jsxs)("div",{className:G,children:[(0,C.jsx)("h1",{children:"Phonebook"}),(0,C.jsx)(B,{}),(0,C.jsx)("h2",{children:"Contacts"}),t&&!n&&(0,C.jsx)(l.rj,{visible:!0,height:"80",width:"80",color:"gray",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{},wrapperClass:"grid-wrapper"}),(0,C.jsxs)("div",{className:E,children:[(0,C.jsx)(N,{}),(0,C.jsx)(w,{})]})]})}}}]);
//# sourceMappingURL=126.424f0e7e.chunk.js.map