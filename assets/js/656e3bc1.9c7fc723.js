"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6527,6675,9876],{2763:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});const c=JSON.parse('{"id":"tech-docs/etcd/components/etcd/checkBIN","title":"checkBIN","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/etcd/components/etcd/checkBIN.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/checkBIN","permalink":"/tech-docs/etcd/components/etcd/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=n(74848),s=n(28453),r=n(25527),d=n(39990);const i={},a=void 0,l={},u=[...d.toc,...r.toc];function m(t){const{Details:e}={...(0,s.R)(),...t.components};return e||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,o.jsxs)(e,{className:"custom-blue-block",children:[(0,o.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,o.jsx)(d.default,{}),(0,o.jsx)(r.default,{})]})]})}function p(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(m,{...t})}):m(t)}},25527:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});const c=JSON.parse('{"id":"tech-docs/etcd/components/etcd/statusBinVersion","title":"statusBinVersion","description":"{dedent`","source":"@site/docs/tech-docs/etcd/components/etcd/statusBinVersion.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/statusBinVersion","permalink":"/tech-docs/etcd/components/etcd/statusBinVersion","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=n(74848),s=n(28453),r=n(60513),d=n(1775);const i={},a=void 0,l={},u=[];function m(t){const e={admonition:"admonition",...(0,s.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.A,{language:"bash",children:r.A`
  etcd --version
`}),"\n",(0,o.jsx)(e.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,o.jsx)(d.A,{language:"bash",children:r.A`
  etcd Version: 3.5.5
  Git SHA: 19002cfc6
  Go Version: go1.16.15
  Go OS/Arch: linux/amd64
`})})]})}function p(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(m,{...t})}):m(t)}},39990:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>m});const c=JSON.parse('{"id":"tech-docs/etcd/components/etcd/statusBinFiles","title":"statusBinFiles","description":"{dedent`","source":"@site/docs/tech-docs/etcd/components/etcd/statusBinFiles.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/statusBinFiles","permalink":"/tech-docs/etcd/components/etcd/statusBinFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=n(74848),s=n(28453),r=n(60513),d=n(1775),i=n(63770);const a={},l=void 0,u={},m=[];function p(t){const e={admonition:"admonition",...(0,s.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.A,{language:"bash",children:r.A`
  journalctl -t etcd-installer
`}),"\n",(0,o.jsx)(e.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,o.jsx)(d.A,{language:"text",children:r.A`
  ***** [INFO] Checking current etcd version...
  ***** [INFO] Current: none, Target: ${i.M.etcd.value}
  ***** [INFO] Download URL: https://*******
  ***** [INFO] Updating etcd to version ${i.M.etcd.value}...
  ***** [INFO] Working directory: /tmp/tmp.*****
  ***** [INFO] Downloading etcd...
  ***** [INFO] Downloading checksum file...
  ***** [INFO] Verifying checksum...
  ***** [INFO] Installing etcd...
  ***** [INFO] etcd successfully updated to ${i.M.etcd.value}.
`})}),"\n",(0,o.jsx)(d.A,{language:"bash",children:r.A`
  ls -la /usr/local/bin/ | grep 'etcd'
`}),"\n",(0,o.jsx)(e.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,o.jsx)(d.A,{language:"text",children:r.A`
  -rwxr-xr-x  1 root root  23760896 Mar 29 16:21 etcd
  -rwxr-xr-x  1 root root  17960960 Mar 29 16:21 etcdctl
  -rwxr-xr-x  1 root root  16031744 Mar 29 16:21 etcdutl
`})})]})}function h(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(p,{...t})}):p(t)}},63770:(t,e,n)=>{n.d(e,{M:()=>c});const c={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}}}]);