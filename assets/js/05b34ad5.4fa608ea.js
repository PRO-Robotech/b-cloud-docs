"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9803],{21517:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>n,metadata:()=>c,toc:()=>p});const c=JSON.parse('{"id":"tech-docs/b-cloud/project-quota/resource-example-spec","title":"resource-example-spec","description":"{dedent`","source":"@site/docs/tech-docs/b-cloud/project-quota/resource-example-spec.mdx","sourceDirName":"tech-docs/b-cloud/project-quota","slug":"/tech-docs/b-cloud/project-quota/resource-example-spec","permalink":"/in-cloud/tech-docs/b-cloud/project-quota/resource-example-spec","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=o(74848),r=o(28453),a=o(1775),u=o(60513);const n={},d=void 0,l={},p=[];function i(e){return(0,s.jsx)(a.A,{language:"yaml",children:u.A`
  ---
  apiVersion: b-cloud.io/v1alpha
  kind: ProjectQuota
  metadata:
    name: bcloud-sandbox
  spec:
    quotas:
      k8s:
        limits:
          cpu: "2"
          memory: 4000M
        requests:
          cpu: "1"
          memory: 2000M
          storage: 1G
`})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(i,{...e})}):i()}}}]);