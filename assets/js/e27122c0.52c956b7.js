"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6435],{89763:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"tech-docs/b-cloud/project/resource-example-status","title":"resource-example-status","description":"{dedent`","source":"@site/docs/tech-docs/b-cloud/project/resource-example-status.mdx","sourceDirName":"tech-docs/b-cloud/project","slug":"/tech-docs/b-cloud/project/resource-example-status","permalink":"/in-cloud/tech-docs/b-cloud/project/resource-example-status","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=t(74848),o=t(28453),n=t(1775),l=t(60513);const r={},i=void 0,u={},d=[];function p(e){return(0,c.jsx)(n.A,{language:"yaml",children:l.A`
  ---
  apiVersion: b-cloud.io/v1alpha
  kind: Project
  metadata:
    name: bcloud-sandbox
  ****
  status:
    conditions:
    - lastTransitionTime: "2024-11-02T11:46:25Z"
      message: Reconciliation completed successfully
      reason: Available
      status: "True"
      type: ReconcileStatus
    - lastTransitionTime: "2024-11-02T11:46:23Z"
      message: handling completed successfully
      reason: Available
      status: "True"
      type: NamespaceProcessing
    - lastTransitionTime: "2024-11-02T11:46:23Z"
      message: handling completed successfully
      reason: Available
      status: "True"
      type: ProjectLegacyProcessing
    - lastTransitionTime: "2024-11-02T11:46:24Z"
      message: handling completed successfully
      reason: Available
      status: "True"
      type: ProjectQuotaProcessing
    - lastTransitionTime: "2024-11-02T11:46:25Z"
      message: handling completed successfully
      reason: Available
      status: "True"
      type: RoleBindingProcessing
  status: Available
`})}function m(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(p,{...e})}):p()}}}]);