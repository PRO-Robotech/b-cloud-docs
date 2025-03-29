"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6527],{39990:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});const c=JSON.parse('{"id":"tech-docs/etcd/components/etcd/statusBinFiles","title":"statusBinFiles","description":"{dedent`","source":"@site/docs/tech-docs/etcd/components/etcd/statusBinFiles.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/statusBinFiles","permalink":"/tech-docs/etcd/components/etcd/statusBinFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=n(74848),s=n(28453),r=n(60513),d=n(1775),a=n(63770);const i={},l=void 0,u={},p=[];function h(t){const e={admonition:"admonition",...(0,s.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.A,{language:"bash",children:r.A`
  journalctl -t etcd-installer
`}),"\n",(0,o.jsx)(e.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,o.jsx)(d.A,{language:"text",children:r.A`
  ***** [INFO] Checking current etcd version...
  ***** [INFO] Current: none, Target: ${a.M.etcd.value}
  ***** [INFO] Download URL: https://*******
  ***** [INFO] Updating etcd to version ${a.M.etcd.value}...
  ***** [INFO] Working directory: /tmp/tmp.*****
  ***** [INFO] Downloading etcd...
  ***** [INFO] Downloading checksum file...
  ***** [INFO] Verifying checksum...
  ***** [INFO] Installing etcd...
  ***** [INFO] etcd successfully updated to ${a.M.etcd.value}.
`})}),"\n",(0,o.jsx)(d.A,{language:"bash",children:r.A`
  ls -la /usr/local/bin/ | grep 'etcd'
`}),"\n",(0,o.jsx)(e.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,o.jsx)(d.A,{language:"text",children:r.A`
  -rwxr-xr-x  1 root root  23760896 Mar 29 16:21 etcd
  -rwxr-xr-x  1 root root  17960960 Mar 29 16:21 etcdctl
  -rwxr-xr-x  1 root root  16031744 Mar 29 16:21 etcdutl
`})})]})}function m(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(h,{...t})}):h(t)}},63770:(t,e,n)=>{n.d(e,{M:()=>c});const c={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}}}]);