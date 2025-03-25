"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7532],{69073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/statusSystemdUnit","title":"statusSystemdUnit","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/statusSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/statusSystemdUnit","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/statusSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=n(74848),i=n(28453),c=n(60513),a=n(1775);const d={},r=void 0,m={},u=[];function l(e){const t={admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.A,{language:"bash",children:c.A`
      systemctl status containerd
  `}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsx)(t.mdxAdmonitionTitle,{}),(0,o.jsx)(a.A,{language:"bash",children:c.A`
      ● containerd.service - containerd container runtime
           Loaded: loaded (/usr/lib/systemd/system/containerd.service; enabled; preset: enabled)
           Active: active (running) since Tue 2024-12-31 17:26:21 UTC; 2min 30s ago
             Docs: https://containerd.io
         Main PID: 839 (containerd)
            Tasks: 7 (limit: 2274)
           Memory: 62.0M (peak: 62.5M)
              CPU: 375ms
           CGroup: /system.slice/containerd.service
                   └─839 /usr/local/bin/containerd
  `})]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}}}]);