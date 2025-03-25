"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1779],{55567:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>r,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"tech-docs/b-cloud/instance/resource-example-status","title":"resource-example-status","description":"{dedent`","source":"@site/docs/tech-docs/b-cloud/instance/resource-example-status.mdx","sourceDirName":"tech-docs/b-cloud/instance","slug":"/tech-docs/b-cloud/instance/resource-example-status","permalink":"/in-cloud/tech-docs/b-cloud/instance/resource-example-status","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=t(74848),c=t(28453),o=t(1775),l=t(60513);const i={},u=void 0,r={},d=[];function m(e){return(0,n.jsx)(o.A,{language:"yaml",children:l.A`
  ---
  apiVersion: b-cloud.io/v1alpha
  kind: Instance
  metadata:
    name: bcloud-sandbox-instance
    namespace: bcloud-sandbox
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
      type: ApplicationSetProcessing
    - lastTransitionTime: "2024-11-02T11:46:24Z"
      message: handling completed successfully
      reason: Available
      status: "True"
      type: ResourceQuotaProcessing
    - lastTransitionTime: "2024-11-02T11:46:25Z"
      message: handling completed successfully
      reason: Available
      status: "True"
      type: RoleBindingProcessing
  status: Available
`})}function p(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(m,{...e})}):m()}}}]);