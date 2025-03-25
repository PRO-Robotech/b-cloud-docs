"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5409],{71733:(e,c,s)=>{s.r(c),s.d(c,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>d,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"tech-docs/b-cloud/instance/resource-example-spec","title":"resource-example-spec","description":"{dedent`","source":"@site/docs/tech-docs/b-cloud/instance/resource-example-spec.mdx","sourceDirName":"tech-docs/b-cloud/instance","slug":"/tech-docs/b-cloud/instance/resource-example-spec","permalink":"/in-cloud/tech-docs/b-cloud/instance/resource-example-spec","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=s(74848),o=s(28453),a=s(1775),r=s(60513);const d={},u=void 0,i={},l=[];function p(e){return(0,n.jsx)(a.A,{language:"yaml",children:r.A`
  ---
  apiVersion: b-cloud.io/v1alpha
  kind: Instance
  metadata:
    name: bcloud-sandbox-instance
    namespace: bcloud-sandbox
  spec:
    description: Тестовый Instance в Project: bcloud-sandbox
    quotas:
      k8s:
        limits:
          cpu: "1.5"
          memory: 2G
        requests:
          cpu: "0.5"
          memory: 1G
          storage: 1G
`})}function m(e={}){const{wrapper:c}={...(0,o.R)(),...e.components};return c?(0,n.jsx)(c,{...e,children:(0,n.jsx)(p,{...e})}):p()}}}]);