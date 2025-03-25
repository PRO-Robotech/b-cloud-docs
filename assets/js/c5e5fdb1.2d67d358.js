"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[156],{31595:(e,c,t)=>{t.r(c),t.d(c,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"tech-docs/b-cloud/project/resource-example-spec","title":"resource-example-spec","description":"{dedent`","source":"@site/docs/tech-docs/b-cloud/project/resource-example-spec.mdx","sourceDirName":"tech-docs/b-cloud/project","slug":"/tech-docs/b-cloud/project/resource-example-spec","permalink":"/tech-docs/b-cloud/project/resource-example-spec","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=t(74848),r=t(28453),a=t(1775),n=t(60513);const u={},d=void 0,p={},l=[];function i(e){return(0,o.jsx)(a.A,{language:"yaml",children:n.A`
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
`})}function m(e={}){const{wrapper:c}={...(0,r.R)(),...e.components};return c?(0,o.jsx)(c,{...e,children:(0,o.jsx)(i,{...e})}):i()}}}]);