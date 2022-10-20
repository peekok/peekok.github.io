"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[170],{4387:function(e,t,n){n(2791);t.Z=n.p+"static/media/social-google.9887eb8eb43729cb99f402cfa0de3c44.svg"},5177:function(e,t,n){var r=n(2791);t.Z=()=>{const e=(0,r.useRef)(!0);return(0,r.useEffect)((()=>()=>{e.current=!1}),[]),e}},8393:function(e,t,n){var r=n(3767),s=n(890),i=n(43),l=n(184);t.Z=()=>(0,l.jsxs)(r.Z,{direction:"row",justifyContent:"space-between",children:[(0,l.jsx)(s.Z,{variant:"subtitle2",component:i.Z,href:"https://berrydashboard.io",target:"_blank",underline:"hover",children:"berrydashboard.io"}),(0,l.jsx)(s.Z,{variant:"subtitle2",component:i.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 codedthemes.com"})]})},5290:function(e,t,n){var r=n(4554),s=n(3735),i=n(184);t.Z=e=>{let{children:t,...n}=e;return(0,i.jsx)(s.Z,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...n,children:(0,i.jsx)(r.Z,{sx:{p:{xs:2,sm:3,xl:5}},children:t})})}},3914:function(e,t,n){const r=(0,n(6934).ZP)("div")((e=>{let{theme:t}=e;return{backgroundColor:t.palette.primary.light,minHeight:"100vh"}}));t.Z=r},3170:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var r=n(3504),s=n(3967),i=n(5193),l=n(1889),o=n(3767),a=n(890),c=n(7924),d=n(3914),x=n(5290),h=n(7514),m=n(2791),u=n(9434),Z=n(6151),g=n(4554),j=n(7212),p=n(8096),b=n(4925),f=n(8029),y=n(7071),v=n(3466),w=n(3400),P=n(5523),C=n(4454),k=n(1724),S=n(5705),I=n(5177),R=n(4387),E=n(752),W=n(8781);const z=e=>{let t=0;return e.length>5&&(t+=1),e.length>7&&(t+=1),(e=>new RegExp(/[0-9]/).test(e))(e)&&(t+=1),(e=>new RegExp(/[!#@$%^&*)(+=._-]/).test(e))(e)&&(t+=1),(e=>new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e))(e)&&(t+=1),t};var B=n(3746),_=n(165),A=n(184);var M=e=>{let{...t}=e;const n=(0,s.Z)(),o=(0,I.Z)(),d=(0,i.Z)(n.breakpoints.down("md")),x=(0,u.v9)((e=>e.customization)),[h,M]=(0,m.useState)(!1),[D,G]=(0,m.useState)(!0),[q,F]=(0,m.useState)(0),[U,V]=(0,m.useState)(),H=()=>{M(!h)},N=e=>{e.preventDefault()},J=e=>{const t=z(e);var n;F(t),V((n=t)<2?{label:"Poor",color:W.Z.errorMain}:n<3?{label:"Weak",color:W.Z.warningDark}:n<4?{label:"Normal",color:W.Z.orangeMain}:n<5?{label:"Good",color:W.Z.successMain}:n<6?{label:"Strong",color:W.Z.successDark}:{label:"Poor",color:W.Z.errorMain})};return(0,m.useEffect)((()=>{J("123456")}),[]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(l.ZP,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[(0,A.jsx)(l.ZP,{item:!0,xs:12,children:(0,A.jsx)(E.Z,{children:(0,A.jsxs)(Z.Z,{variant:"outlined",fullWidth:!0,onClick:async()=>{console.error("Register")},size:"large",sx:{color:"grey.700",backgroundColor:n.palette.grey[50],borderColor:n.palette.grey[100]},children:[(0,A.jsx)(g.Z,{sx:{mr:{xs:1,sm:2,width:20}},children:(0,A.jsx)("img",{src:R.Z,alt:"google",width:16,height:16,style:{marginRight:d?8:16}})}),"Sign up with Google"]})})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,children:(0,A.jsxs)(g.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,A.jsx)(c.Z,{sx:{flexGrow:1},orientation:"horizontal"}),(0,A.jsx)(Z.Z,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:"".concat(n.palette.grey[100]," !important"),color:"".concat(n.palette.grey[900],"!important"),fontWeight:500,borderRadius:"".concat(x.borderRadius,"px")},disableRipple:!0,disabled:!0,children:"OR"}),(0,A.jsx)(c.Z,{sx:{flexGrow:1},orientation:"horizontal"})]})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:(0,A.jsx)(g.Z,{sx:{mb:2},children:(0,A.jsx)(a.Z,{variant:"subtitle1",children:"Sign up with Email address"})})})]}),(0,A.jsx)(S.J9,{initialValues:{email:"",password:"",submit:null},validationSchema:k.Ry().shape({email:k.Z_().email("Must be a valid email").max(255).required("Email is required"),password:k.Z_().max(255).required("Password is required")}),onSubmit:async(e,t)=>{let{setErrors:n,setStatus:r,setSubmitting:s}=t;try{o.current&&(r({success:!0}),s(!1))}catch(i){console.error(i),o.current&&(r({success:!1}),n({submit:i.message}),s(!1))}},children:e=>{let{errors:s,handleBlur:i,handleChange:o,handleSubmit:c,isSubmitting:x,touched:m,values:u}=e;return(0,A.jsxs)("form",{noValidate:!0,onSubmit:c,...t,children:[(0,A.jsxs)(l.ZP,{container:!0,spacing:d?0:2,children:[(0,A.jsx)(l.ZP,{item:!0,xs:12,sm:6,children:(0,A.jsx)(j.Z,{fullWidth:!0,label:"First Name",margin:"normal",name:"fname",type:"text",defaultValue:"",sx:{...n.typography.customInput}})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,sm:6,children:(0,A.jsx)(j.Z,{fullWidth:!0,label:"Last Name",margin:"normal",name:"lname",type:"text",defaultValue:"",sx:{...n.typography.customInput}})})]}),(0,A.jsxs)(p.Z,{fullWidth:!0,error:Boolean(m.email&&s.email),sx:{...n.typography.customInput},children:[(0,A.jsx)(b.Z,{htmlFor:"outlined-adornment-email-register",children:"Email Address / Username"}),(0,A.jsx)(f.Z,{id:"outlined-adornment-email-register",type:"email",value:u.email,name:"email",onBlur:i,onChange:o,inputProps:{}}),m.email&&s.email&&(0,A.jsx)(y.Z,{error:!0,id:"standard-weight-helper-text--register",children:s.email})]}),(0,A.jsxs)(p.Z,{fullWidth:!0,error:Boolean(m.password&&s.password),sx:{...n.typography.customInput},children:[(0,A.jsx)(b.Z,{htmlFor:"outlined-adornment-password-register",children:"Password"}),(0,A.jsx)(f.Z,{id:"outlined-adornment-password-register",type:h?"text":"password",value:u.password,name:"password",label:"Password",onBlur:i,onChange:e=>{o(e),J(e.target.value)},endAdornment:(0,A.jsx)(v.Z,{position:"end",children:(0,A.jsx)(w.Z,{"aria-label":"toggle password visibility",onClick:H,onMouseDown:N,edge:"end",size:"large",children:h?(0,A.jsx)(B.Z,{}):(0,A.jsx)(_.Z,{})})}),inputProps:{}}),m.password&&s.password&&(0,A.jsx)(y.Z,{error:!0,id:"standard-weight-helper-text-password-register",children:s.password})]}),0!==q&&(0,A.jsx)(p.Z,{fullWidth:!0,children:(0,A.jsx)(g.Z,{sx:{mb:2},children:(0,A.jsxs)(l.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,A.jsx)(l.ZP,{item:!0,children:(0,A.jsx)(g.Z,{style:{backgroundColor:null===U||void 0===U?void 0:U.color},sx:{width:85,height:8,borderRadius:"7px"}})}),(0,A.jsx)(l.ZP,{item:!0,children:(0,A.jsx)(a.Z,{variant:"subtitle1",fontSize:"0.75rem",children:null===U||void 0===U?void 0:U.label})})]})})}),(0,A.jsx)(l.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:(0,A.jsx)(l.ZP,{item:!0,children:(0,A.jsx)(P.Z,{control:(0,A.jsx)(C.Z,{checked:D,onChange:e=>G(e.target.checked),name:"checked",color:"primary"}),label:(0,A.jsxs)(a.Z,{variant:"subtitle1",children:["Agree with \xa0",(0,A.jsx)(a.Z,{variant:"subtitle1",component:r.rU,to:"#",children:"Terms & Condition."})]})})})}),s.submit&&(0,A.jsx)(g.Z,{sx:{mt:3},children:(0,A.jsx)(y.Z,{error:!0,children:s.submit})}),(0,A.jsx)(g.Z,{sx:{mt:2},children:(0,A.jsx)(E.Z,{children:(0,A.jsx)(Z.Z,{disableElevation:!0,disabled:x,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign up"})})})]})}})]})},D=n(8393);var G=()=>{const e=(0,s.Z)(),t=(0,i.Z)(e.breakpoints.down("md"));return(0,A.jsx)(d.Z,{children:(0,A.jsxs)(l.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,A.jsx)(l.ZP,{item:!0,xs:12,children:(0,A.jsx)(l.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,A.jsx)(l.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,A.jsx)(x.Z,{children:(0,A.jsxs)(l.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,A.jsx)(l.ZP,{item:!0,sx:{mb:3},children:(0,A.jsx)(r.rU,{to:"#",children:(0,A.jsx)(h.Z,{})})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,children:(0,A.jsx)(l.ZP,{container:!0,direction:t?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,A.jsx)(l.ZP,{item:!0,children:(0,A.jsxs)(o.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,A.jsx)(a.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Sign up"}),(0,A.jsx)(a.Z,{variant:"caption",fontSize:"16px",textAlign:t?"center":"inherit",children:"Enter your credentials to continue"})]})})})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,children:(0,A.jsx)(M,{})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,children:(0,A.jsx)(c.Z,{})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,children:(0,A.jsx)(l.ZP,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:(0,A.jsx)(a.Z,{component:r.rU,to:"/pages/login/login3",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})})})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,A.jsx)(D.Z,{})})]})})}}}]);
//# sourceMappingURL=170.280e7c02.chunk.js.map