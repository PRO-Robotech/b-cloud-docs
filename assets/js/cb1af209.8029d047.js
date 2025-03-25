"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2771],{30596:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>m,default:()=>E,frontMatter:()=>u,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/b-cloud/instance/resource-controller","title":"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440","description":"Instance controller \u2014 \u044d\u0442\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u044b\u0439 \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0440\u044f\u0434\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u0441 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u043c Instance. \u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u043d \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442, \u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0442 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432 K8S, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0434\u043b\u044f \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439.","source":"@site/docs/tech-docs/b-cloud/instance/resource-controller.mdx","sourceDirName":"tech-docs/b-cloud/instance","slug":"/tech-docs/b-cloud/instance/resource-controller","permalink":"/in-cloud/tech-docs/b-cloud/instance/resource-controller","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"resource-controller"}}');var t=n(74848),r=n(28453),i=n(87464),c=n(62774),l=n(1775),o=n(60513),d=n(84740);const u={id:"resource-controller"},m="\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440",p={},h=[{value:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430",id:"\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430",level:2},{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b",level:2},{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435-\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",level:2},{value:"\u0414\u043e\u0447\u0435\u0440\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b",id:"\u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0435-\u0440\u0435\u0441\u0443\u0440\u0441\u044b",level:2}];function j(e){const a={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.header,{children:(0,t.jsx)(a.h1,{id:"\u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440",children:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440"})}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"Instance controller"})," \u2014 \u044d\u0442\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u044b\u0439 \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0440\u044f\u0434\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u0441 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u043c ",(0,t.jsx)(a.code,{children:"Instance"}),". \u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u043d \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442, \u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0442 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432 K8S, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0434\u043b\u044f \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439."]}),"\n",(0,t.jsx)(a.h2,{id:"\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430",children:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430"}),"\n",(0,t.jsx)("div",{className:"center",children:(0,t.jsx)("img",{src:`${(0,d.I)()}/in-cloud/img/controllers/instance-cotroller.drawio.svg`})}),"\n",(0,t.jsx)(a.h2,{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b",children:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432 \u0438\u043c\u0435\u043d"}),": \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0438 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438\u043c\u0435\u043d \u0434\u043b\u044f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u0438\u0437\u043e\u043b\u044f\u0446\u0438\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0435."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u043e\u043b\u0435\u0432\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438"}),": \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u0440\u043e\u043b\u0438 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438\u043c\u0435\u043d."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsxs)(a.strong,{children:["\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441\u0432\u044f\u0437\u0438 ",(0,t.jsx)(a.code,{children:"Group"})," \u0441 \u0440\u043e\u043b\u0435\u0432\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u044c\u044e"]}),": \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430\u043c \u0438\u043c\u0435\u043d \u043f\u0443\u0442\u0435\u043c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u0445 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0433\u0440\u0443\u043f\u043f\u044b (Member Of Group)."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u0432\u043e\u0442\u0430\u043c\u0438"}),": \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f \u043a\u0432\u043e\u0442 \u043d\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043c\u043e\u0449\u043d\u043e\u0441\u0442\u044c, \u043f\u0430\u043c\u044f\u0442\u044c \u0438 \u0434\u0438\u0441\u043a\u0438."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435\u043c"}),": \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435-\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",children:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["\u041f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u0439 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430 ",(0,t.jsx)(a.code,{children:"Instance"}),":"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438, \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0438\u043b\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430 \u0442\u0438\u043f\u0430 ",(0,t.jsx)(a.code,{children:"Instance"})," \u0434\u043e\u043b\u0436\u043d\u043e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u0435, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0440\u0435\u0430\u0433\u0438\u0440\u0443\u0435\u0442 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"\u041f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u0439 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438, \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0438\u043b\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u043e\u043c, \u0442\u0430\u043a\u0436\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u0435, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440 \u0440\u0435\u0430\u0433\u0438\u0440\u0443\u0435\u0442."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u0430 \u043d\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440 \u043e\u0431\u044f\u0437\u0430\u043d \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u043d \u0441\u043e\u0437\u0434\u0430\u0435\u0442, \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0442\u044c \u0438\u0445 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u0440\u0435\u043a\u043e\u043d\u0441\u0438\u043b\u044f\u0446\u0438\u0438 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0441\u043e\u0431\u044b\u0442\u0438\u0439:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"\u041f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u043b\u044e\u0431\u043e\u0433\u043e \u0438\u0437 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u0441\u043e\u0431\u044b\u0442\u0438\u0439 \u0434\u043e\u043b\u0436\u0435\u043d \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0440\u0435\u043a\u043e\u043d\u0441\u0438\u043b\u044f\u0446\u0438\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u0440\u0435\u043a\u043e\u043d\u0441\u0438\u043b\u044f\u0446\u0438\u0438 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\u0412 \u043e\u0442\u0432\u0435\u0442 \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0438\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0440\u0435\u043a\u043e\u043d\u0441\u0438\u043b\u044f\u0446\u0438\u0438 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u0438\u043b\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0442\u0438\u043f\u043e\u0432, \u043f\u0440\u0438\u0432\u043e\u0434\u044f \u0438\u0445 \u043a \u0442\u0440\u0435\u0431\u0443\u0435\u043c\u043e\u043c\u0443 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044e:","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Namespace"}),"\n",(0,t.jsx)(a.li,{children:"RoleBinding"}),"\n",(0,t.jsx)(a.li,{children:"ResourceQuota"}),"\n",(0,t.jsx)(a.li,{children:"ApplicationSet"}),"\n",(0,t.jsx)(a.li,{children:"InstanceLegacy"}),"\n",(0,t.jsx)(a.li,{children:"Secret"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u0440\u0435\u043a\u043e\u043d\u0441\u0438\u043b\u044f\u0446\u0438\u0438 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"\u0412 \u043e\u0442\u0432\u0435\u0442 \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0440\u0435\u043a\u043e\u043d\u0441\u0438\u043b\u044f\u0446\u0438\u0438 \u0434\u043e\u043b\u0436\u0435\u043d \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u0432\u0441\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u043e\u043c, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u043c \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u043c Project."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"\u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0435-\u0440\u0435\u0441\u0443\u0440\u0441\u044b",children:"\u0414\u043e\u0447\u0435\u0440\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b"}),"\n",(0,t.jsxs)(c.A,{children:[(0,t.jsx)(i.A,{value:"RESOURCE_PROJECT",children:(0,t.jsx)(l.A,{language:"yaml",children:o.A`
          ---
          apiVersion: b-cloud.io/v1alpha
          kind: Project
          metadata:
            name: bcloud-sandbox
          spec:
            businessName: B-Cloud
            description: Тестовый проект для B-Cloud Sandbox
            prefix: bcsn
            quotas:
              k8s:
                limits:
                  cpu: "2"
                  memory: 4000M
                requests:
                  cpu: "1"
                  memory: 2000M
                  storage: 1G
            state: pilot
        `})}),(0,t.jsx)(i.A,{value:"RESOURCE_INSTANCE",children:(0,t.jsx)(l.A,{language:"yaml",children:o.A`
          ---
          apiVersion: b-cloud.io/v1alpha
          kind: Instance
          metadata:
            name: bcloud-sandbox-instance
            namespace: '$\{RESOURCE_PROJECT.metadata.name}'
          spec:
            description: Тестовый Instance в Project bcloud-sandbox
            quotas:
              k8s:
                limits:
                  cpu: "1.5"
                  memory: 2G
                requests:
                  cpu: "0.5"
                  memory: 1G
                  storage: 1G
        `})})]}),"\n",(0,t.jsxs)(a.p,{children:["\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438, \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0438\u043b\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430 \u0442\u0438\u043f\u0430 ",(0,t.jsx)(a.code,{children:"Instance"}),", \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u0438\u043b\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0442\u0438\u043f\u043e\u0432:"]}),"\n",(0,t.jsxs)(c.A,{children:[(0,t.jsxs)(i.A,{value:"Namespace",children:[(0,t.jsxs)(a.p,{children:["\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430 ",(0,t.jsx)(a.code,{children:"Instance"})," \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u043e\u0437\u0434\u0430\u0451\u0442\u0441\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0438\u043c\u0451\u043d \u0441 \u0442\u0430\u043a\u0438\u043c \u0436\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c. \u042d\u0442\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043e \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f, \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043d\u044b\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432 \u0438 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u0430\u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u0430."]}),(0,t.jsx)(l.A,{language:"yaml",children:o.A`
          ---
          apiVersion: v1
          kind: Namespace
          metadata:
            labels:
              kubernetes.io/metadata.name: '$\{RESOURCE_PROJECT.metadata.name}'
              chat_id: ""
              instance: '$\{RESOURCE_INSTANCE.metadata.name}' # BUG
              project: '$\{RESOURCE_PROJECT.metadata.name}'
              team_name: '$\{RESOURCE_INSTANCE.metadata.name}'
              tenant: '$\{HELM_VALUES.tenant}'
            name: '$\{RESOURCE_INSTANCE.metadata.name}'
          spec: {}
        `})]}),(0,t.jsxs)(i.A,{value:"RoleBinding",children:[(0,t.jsxs)(a.p,{children:["\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430 ",(0,t.jsx)(a.code,{children:"Instance"})," \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0440\u044f\u0434 \u0441\u0432\u044f\u0437\u0435\u0439 \u043c\u0435\u0436\u0434\u0443 \u0433\u0440\u0443\u043f\u043f\u0430\u043c\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438 \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u0440\u043e\u043b\u0435\u0432\u044b\u043c\u0438 \u043c\u043e\u0434\u0435\u043b\u044f\u043c\u0438."]}),(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"all-architect-namespacescope-view"})," - \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043f\u0440\u0430\u0432\u0430 \u0433\u0440\u0443\u043f\u043f\u043e\u0432\u044b\u0435 \u043f\u0440\u0430\u0432\u0430 \u0434\u043b\u044f ",(0,t.jsx)(a.code,{children:"\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u043e\u0440\u043e\u0432"})," \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 instance namespaces."]}),(0,t.jsx)(l.A,{language:"yaml",children:o.A`
          ---
          apiVersion: rbac.authorization.k8s.io/v1
          kind: RoleBinding
          metadata:
            name: all-architect-namespacescope-view
            namespace: '$\{RESOURCE_INSTANCE.metadata.name}'
          roleRef:
            apiGroup: rbac.authorization.k8s.io
            kind: ClusterRole
            name: view
          subjects:
          - apiGroup: rbac.authorization.k8s.io
            kind: Group
            name: g-all-architect
        `}),(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"all-namespacescope-view"})," - \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043f\u0440\u0430\u0432\u0430 \u0433\u0440\u0443\u043f\u043f\u043e\u0432\u044b\u0435 \u043f\u0440\u0430\u0432\u0430 ",(0,t.jsx)(a.code,{children:"\u0434\u043b\u044f \u0432\u0441\u0435\u0445"})," \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 instance namespaces."]}),(0,t.jsx)(l.A,{language:"yaml",children:o.A`
          ---
          apiVersion: rbac.authorization.k8s.io/v1
          kind: RoleBinding
          metadata:
            name: all-namespacescope-view
            namespace: '$\{RESOURCE_INSTANCE.metadata.name}'
          roleRef:
            apiGroup: rbac.authorization.k8s.io
            kind: ClusterRole
            name: view
          subjects:
          - apiGroup: rbac.authorization.k8s.io
            kind: Group
            name: 'g-all-$\{RESOURCE_PROJECT.metadata.name}'
        `}),(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"analyst-namespacescope-edit"})," - \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043f\u0440\u0430\u0432\u0430 \u0433\u0440\u0443\u043f\u043f\u043e\u0432\u044b\u0435 \u043f\u0440\u0430\u0432\u0430 ",(0,t.jsx)(a.code,{children:"\u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430"})," \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 instance namespaces."]}),(0,t.jsx)(l.A,{language:"yaml",children:o.A`
          ---
          apiVersion: rbac.authorization.k8s.io/v1
          kind: RoleBinding
          metadata:
            name: analyst-namespacescope-edit
            namespace: '$\{RESOURCE_INSTANCE.metadata.name}'
          roleRef:
            apiGroup: rbac.authorization.k8s.io
            kind: ClusterRole
            name: edit
          subjects:
          - apiGroup: rbac.authorization.k8s.io
            kind: Group
            name: 'g-analyst-$\{RESOURCE_PROJECT.metadata.name}'
        `}),(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"default-namespacescope-edit"})," - \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043f\u0440\u0430\u0432\u0430 ",(0,t.jsx)(a.code,{children:"serviceAccount"})," \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 instance namespaces."]}),(0,t.jsx)(l.A,{language:"yaml",children:o.A`
          ---
          apiVersion: rbac.authorization.k8s.io/v1
          kind: RoleBinding
          metadata:
            name: default-namespacescope-edit
            namespace: '$\{RESOURCE_INSTANCE.metadata.name}'
          roleRef:
            apiGroup: rbac.authorization.k8s.io
            kind: ClusterRole
            name: edit
          subjects:
            - kind: ServiceAccount
              name: default
              namespace: '$\{RESOURCE_INSTANCE.metadata.name}'
        `}),(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"developer-namespacescope-edit"})," - \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043f\u0440\u0430\u0432\u0430 \u0433\u0440\u0443\u043f\u043f\u043e\u0432\u044b\u0435 \u043f\u0440\u0430\u0432\u0430 ",(0,t.jsx)(a.code,{children:"\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432"})," \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 instance namespaces."]}),(0,t.jsx)(l.A,{language:"yaml",children:o.A`
          ---
          apiVersion: rbac.authorization.k8s.io/v1
          kind: RoleBinding
          metadata:
            name: developer-namespacescope-edit
            namespace: '$\{RESOURCE_INSTANCE.metadata.name}'
          roleRef:
            apiGroup: rbac.authorization.k8s.io
            kind: ClusterRole
            name: edit
          subjects:
          - apiGroup: rbac.authorization.k8s.io
            kind: Group
            name: 'g-developer-$\{RESOURCE_PROJECT.metadata.name}'
        `}),(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"devops-namespacescope-edit"})," - \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043f\u0440\u0430\u0432\u0430 \u0433\u0440\u0443\u043f\u043f\u043e\u0432\u044b\u0435 \u043f\u0440\u0430\u0432\u0430 ",(0,t.jsx)(a.code,{children:"devops \u0438\u043d\u0436\u0435\u043d\u0435\u0440\u043e\u0432"})," \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 instance namespaces."]}),(0,t.jsx)(l.A,{language:"yaml",children:o.A`
          ---
          apiVersion: rbac.authorization.k8s.io/v1
          kind: RoleBinding
          metadata:
            name: devops-namespacescope-edit
            namespace: '$\{RESOURCE_INSTANCE.metadata.name}'
          roleRef:
            apiGroup: rbac.authorization.k8s.io
            kind: ClusterRole
            name: edit
          subjects:
          - apiGroup: rbac.authorization.k8s.io
            kind: Group
            name: 'g-devops-$\{RESOURCE_PROJECT.metadata.name}'
        `}),(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"qa-namespacescope-edit"})," - \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043f\u0440\u0430\u0432\u0430 \u0433\u0440\u0443\u043f\u043f\u043e\u0432\u044b\u0435 \u043f\u0440\u0430\u0432\u0430 ",(0,t.jsx)(a.code,{children:"\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u043e\u0432"})," \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 instance namespaces."]}),(0,t.jsx)(l.A,{language:"yaml",children:o.A`
          ---
          apiVersion: rbac.authorization.k8s.io/v1
          kind: RoleBinding
          metadata:
            name: qa-namespacescope-edit
            namespace: '$\{RESOURCE_INSTANCE.metadata.name}'
          roleRef:
            apiGroup: rbac.authorization.k8s.io
            kind: ClusterRole
            name: edit
          subjects:
          - apiGroup: rbac.authorization.k8s.io
            kind: Group
            name: 'g-qa-$\{RESOURCE_PROJECT.metadata.name}'
        `})]}),(0,t.jsxs)(i.A,{value:"ResourceQuota",children:[(0,t.jsxs)(a.p,{children:["\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430 ",(0,t.jsx)(a.code,{children:"Instance"})," \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0440\u0435\u0441\u0443\u0440\u0441 ",(0,t.jsx)(a.code,{children:"ResourceQuota"}),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u043f\u043e\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0438 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u0432\u0435\u0447\u0430\u0442\u044c \u0437\u0430 \u043a\u0432\u043e\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430."]}),(0,t.jsx)(l.A,{language:"yaml",children:o.A`
          ---
          apiVersion: v1
          kind: ResourceQuota
          metadata:
            name: '$\{RESOURCE_INSTANCE.metadata.name}-quotas'
            namespace: '$\{RESOURCE_INSTANCE.metadata.name}'
          spec:
            hard:
              limits.cpu: '$\{RESOURCE_INSTANCE.spec.quotas.k8s.limits.cpu}'
              limits.memory: '$\{RESOURCE_INSTANCE.spec.quotas.k8s.limits.memory}'
              requests.cpu: '$\{RESOURCE_INSTANCE.spec.quotas.k8s.requests.cpu}'
              requests.memory: '$\{RESOURCE_INSTANCE.spec.quotas.k8s.requests.memory}'
              requests.storage: '$\{RESOURCE_INSTANCE.spec.quotas.k8s.requests.storage}'
        `})]}),(0,t.jsxs)(i.A,{value:"ApplicationSET",children:[(0,t.jsxs)(a.p,{children:["\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430 ",(0,t.jsx)(a.code,{children:"Instance"})," \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0440\u0435\u0441\u0443\u0440\u0441 ",(0,t.jsx)(a.code,{children:"ApplicationSET"}),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u043f\u043e\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0438 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u0432\u0435\u0447\u0430\u0442\u044c \u0437\u0430 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435."]}),(0,t.jsx)(l.A,{language:"yaml",children:o.A`
          ---
          apiVersion: argoproj.io/v1alpha1
          kind: ApplicationSet
          metadata:
            name: '$\{RESOURCE_INSTANCE.metadata.name}'
            namespace: '$\{RESOURCE_INSTANCE.metadata.name}'
          spec:
            generators:
            - git:
                directories:
                - path: '**'
                repoURL: 'https://gitlab.example.com/$\{RESOURCE_PROJECT.metadata.name}/infrastructure.git'
                revision: HEAD
                template:
                  metadata: {}
                  spec:
                    destination: {}
                    project: ""
                    source:
                      helm:
                        parameters:
                        - name: appName
                          value: '{{path.basename}}'
                        valueFiles:
                        - 'tenant-$\{HELM_VALUES.tenant}/env-$\{RESOURCE_INSTANCE.metadata.name}.yaml'
                      path: '{{path}}'
                      repoURL: 'https://gitlab.example.com/$\{RESOURCE_PROJECT.metadata.name}/infrastructure.git'
                      targetRevision: HEAD
            template:
              metadata:
                name: '{{path.basename}}-$\{RESOURCE_INSTANCE.metadata.name}'
              spec:
                destination:
                  namespace: '$\{RESOURCE_INSTANCE.metadata.name}'
                  server: https://kubernetes.default.svc
                project: '$\{RESOURCE_INSTANCE.metadata.name}'
                source:
                  helm:
                    parameters:
                    - name: appName
                      value: '{{path.basename}}'
                    valueFiles:
                    - 'tenant-$\{HELM_VALUES.tenant}/env-$\{RESOURCE_INSTANCE.metadata.name}.yaml'
                  path: '{{path}}'
                  repoURL: 'https://gitlab.example.com/$\{RESOURCE_PROJECT.metadata.name}/infrastructure.git'
                  targetRevision: HEAD
                syncPolicy:
                  automated:
                    prune: true
                    selfHeal: true
                  syncOptions:
                  - CreateNamespace=true

        `})]}),(0,t.jsxs)(i.A,{value:"InstanceLegacy",children:[(0,t.jsxs)(a.p,{children:["\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430 ",(0,t.jsx)(a.code,{children:"Instance"})," \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0440\u0435\u0441\u0443\u0440\u0441 ",(0,t.jsx)(a.code,{children:"InstanceLegacy"}),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u043f\u043e\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0438 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u0432\u0435\u0447\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044e \u0441 \u0432\u043d\u0435\u0448\u043d\u0438\u043c\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c\u0438."]}),(0,t.jsx)(l.A,{language:"yaml",children:o.A`
            ---
            apiVersion: v1
            kind: InstanceLegacy
            metadata:
              name: '$\{RESOURCE_INSTANCE.metadata.name}-quotas'
              namespace: '$\{RESOURCE_INSTANCE.metadata.name}'
            spec:
              description: '$\{RESOURCE_INSTANCE.spec.description}'
          `})]}),(0,t.jsxs)(i.A,{value:"Secret",children:[(0,t.jsxs)(a.p,{children:["\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430 ",(0,t.jsx)(a.code,{children:"Instance"})," \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0440\u0435\u0441\u0443\u0440\u0441 ",(0,t.jsx)(a.code,{children:"Secret"}),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439\nTODO @\u041a\u043e\u043b\u0431\u0438\u043d - \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0438 \u0434\u0434\u043e\u043f\u0438\u0441\u0430\u0442\u044c!."]}),(0,t.jsx)(l.A,{language:"yaml",children:o.A`
              ---
              apiVersion: v1
              kind: Secret
              metadata:
                name: '$\{RESOURCE_INSTANCE.metadata.name}-quotas'
                namespace: '$\{RESOURCE_INSTANCE.metadata.name}'
            `})]})]})]})}function E(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},62774:(e,a,n)=>{n.d(a,{A:()=>v});var s=n(96540),t=n(34164),r=n(65627),i=n(56347),c=n(50372),l=n(30604),o=n(11861),d=n(78749);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:a,children:n}=e;return(0,s.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:n,attributes:s,default:t}}=e;return{value:a,label:n,attributes:s,default:t}}))}(n);return function(e){const a=(0,o.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function p(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:n}=e;const t=(0,i.W6)(),r=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,l.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(t.location.search);a.set(r,e),t.replace({...t.location,search:a.toString()})}),[r,t])]}function j(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,r=m(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:a,tabValues:r}))),[o,u]=h({queryString:n,groupId:t}),[j,E]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,r]=(0,d.Dv)(n);return[t,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:t}),x=(()=>{const e=o??j;return p({value:e,tabValues:r})?e:null})();(0,c.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),E(e)}),[u,E,r]),tabValues:r}}var E=n(9136);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var R=n(74848);function b(e){let{className:a,block:n,selectedValue:s,selectValue:i,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),d=e=>{const a=e.currentTarget,n=l.indexOf(a),t=c[n].value;t!==s&&(o(a),i(t))},u=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;a=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;a=l[n]??l[l.length-1];break}}a?.focus()};return(0,R.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},a),children:c.map((e=>{let{value:a,label:n,attributes:r}=e;return(0,R.jsx)("li",{role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,ref:e=>{l.push(e)},onKeyDown:u,onClick:d,...r,className:(0,t.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":s===a}),children:n??a},a)}))})}function C(e){let{lazy:a,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,R.jsx)("div",{className:"margin-top--md",children:i.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function g(e){const a=j(e);return(0,R.jsxs)("div",{className:(0,t.A)("tabs-container",x.tabList),children:[(0,R.jsx)(b,{...a,...e}),(0,R.jsx)(C,{...a,...e})]})}function v(e){const a=(0,E.A)();return(0,R.jsx)(g,{...e,children:u(e.children)},String(a))}},84740:(e,a,n)=>{n.d(a,{I:()=>s});const s=()=>"/in-cloud"},87464:(e,a,n)=>{n.d(a,{A:()=>i});n(96540);var s=n(34164);const t={tabItem:"tabItem_Ymn6"};var r=n(74848);function i(e){let{children:a,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,i),hidden:n,children:a})}}}]);