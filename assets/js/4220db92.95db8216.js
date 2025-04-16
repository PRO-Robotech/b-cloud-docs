"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[49952],{82539:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>n,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"tech-docs/monitoring/victoria-metrics-operator/victoria-metrics-operator-testing","title":"5.5.2.1.6. VictoriaMetrics Operator","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443","source":"@site/docs/tech-docs/monitoring/victoria-metrics-operator/victoria-metrics-operator-testing.mdx","sourceDirName":"tech-docs/monitoring/victoria-metrics-operator","slug":"/tech-docs/monitoring/victoria-metrics-operator/victoria-metrics-operator-testing","permalink":"/tech-docs/monitoring/victoria-metrics-operator/victoria-metrics-operator-testing","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"victoria-metrics-operator-testing"}}');var c=t(74848),o=t(28453);const s={id:"victoria-metrics-operator-testing"},n="5.5.2.1.6. VictoriaMetrics Operator",a={},d=[{value:"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443",id:"\u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443",level:2},{value:"\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u043c\u0435\u0442\u0440\u0438\u043a\u0430\u043c",id:"\u0434\u043e\u0441\u0442\u0443\u043f-\u043a-\u043c\u0435\u0442\u0440\u0438\u043a\u0430\u043c",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.header,{children:(0,c.jsx)(r.h1,{id:"55216-victoriametrics-operator",children:"5.5.2.1.6. VictoriaMetrics Operator"})}),"\n",(0,c.jsx)(r.h2,{id:"\u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443",children:"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443"}),"\n",(0,c.jsxs)(r.p,{children:["\u0427\u0442\u043e\u0431\u044b \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e ",(0,c.jsx)(r.code,{children:"VictoriaMetrics Operator"})," \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442, \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u0443:"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-bash",children:"kubectl get pods -l app.kubernetes.io/name=victoria-metrics-operator --namespace in-cloud-vmcluster\n"})}),"\n",(0,c.jsxs)(r.p,{children:["\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0435 \u043f\u043e\u0434\u044b ",(0,c.jsx)(r.code,{children:"VictoriaMetrics Operator"}),"."]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{children:"NAME                              READY   STATUS    RESTARTS   AGE\nvictoria-metrics-operator-6c65f6987f-v6djh   1/1     Running   0          18d\n"})}),"\n",(0,c.jsx)(r.h2,{id:"\u0434\u043e\u0441\u0442\u0443\u043f-\u043a-\u043c\u0435\u0442\u0440\u0438\u043a\u0430\u043c",children:"\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u043c\u0435\u0442\u0440\u0438\u043a\u0430\u043c"}),"\n",(0,c.jsxs)(r.p,{children:["\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043c\u0435\u0442\u0440\u0438\u043a\u0430\u043c, \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c IP-\u0430\u0434\u0440\u0435\u0441 \u0438\u043b\u0438 \u0438\u043c\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u043e\u0434\u0430 ",(0,c.jsx)(r.code,{children:"VictoriaMetrics Operator"})," \u0438 \u043f\u043e\u0440\u0442, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043e\u043d \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e 10250). \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e:"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-bash",children:"kubectl get endpoints/victoria-metrics-operator --namespace in-cloud-vmcluster  -o json\n\n"})}),"\n",(0,c.jsxs)(r.p,{children:["\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0443\u0436\u043d\u044b\u0439 \u043f\u043e\u0434, \u043a \u043f\u0440\u0438\u043c\u0435\u0440\u0443 ",(0,c.jsx)(r.code,{children:"victoria-metrics-operator-6c65f6987f-v6djh"})," \u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435:"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-bash",children:"kubectl port-forward pod/victoria-metrics-operator-6c65f6987f-v6djh 10250:10250 --namespace in-cloud-vmcluster\n"})}),"\n",(0,c.jsxs)(r.p,{children:["\u0422\u0435\u043f\u0435\u0440\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 ",(0,c.jsx)(r.a,{href:"https://localhost:10250/metrics",children:"https://localhost:10250/metrics"})," \u0432 \u0432\u0430\u0448\u0435\u043c \u0432\u0435\u0431-\u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435, \u0447\u0442\u043e\u0431\u044b \u0432\u0438\u0434\u0435\u0442\u044c \u043c\u0435\u0442\u0440\u0438\u043a\u0438, \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c\u044b\u0435 ",(0,c.jsx)(r.code,{children:"VictoriaMetrics Operator"}),"."]})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}}}]);