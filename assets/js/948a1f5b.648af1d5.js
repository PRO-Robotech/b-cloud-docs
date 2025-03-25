"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5949],{78701:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"tech-docs/b-cloud/project-quota/resource-example-status","title":"resource-example-status","description":"{dedent`","source":"@site/docs/tech-docs/b-cloud/project-quota/resource-example-status.mdx","sourceDirName":"tech-docs/b-cloud/project-quota","slug":"/tech-docs/b-cloud/project-quota/resource-example-status","permalink":"/in-cloud/tech-docs/b-cloud/project-quota/resource-example-status","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=o(74848),a=o(28453),r=o(1775),u=o(60513);const n={},d=void 0,l={},i=[];function p(e){return(0,c.jsx)(r.A,{language:"yaml",children:u.A`
  ---
  apiVersion: b-cloud.io/v1alpha
  kind: ProjectQuota
  metadata:
    name: bcloud-sandbox
  ****
  status:
    quotasLeft:
      k8s:
        limits:
          cpu: "2"
          memory: 4000M
        requests:
          cpu: "1"
          memory: 2000M
          storage: 1G
`})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(p,{...e})}):p()}}}]);