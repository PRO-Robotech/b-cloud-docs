"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[147,210,276,359,434,626,823,824,876,889,1063,1121,1197,1200,1251,1438,1449,1488,1507,1575,1579,1585,1597,1607,1608,1653,1736,1759,1802,1999,2077,2082,2085,2108,2158,2262,2275,2287,2334,2355,2393,2412,2431,2459,2488,2505,2526,2528,2628,2752,2758,2770,2773,2823,2876,2901,3052,3218,3332,3515,3536,3537,3659,3701,3728,3751,3843,4036,4048,4145,4311,4373,4582,4667,4668,4730,4742,4927,4936,5001,5139,5253,5266,5405,5569,5618,5782,5800,5876,5889,6139,6156,6484,6527,6544,6585,6622,6658,6661,6675,6846,7016,7160,7162,7167,7224,7387,7389,7393,7562,7579,7778,7813,7981,8001,8034,8129,8154,8261,8426,8446,8462,8492,8559,8577,8743,8912,9116,9171,9249,9371,9396,9435,9548,9671,9683,9689,9740,9876,9967],{305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubectl/statusBinFiles","title":"statusBinFiles","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubectl/statusBinFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubectl","slug":"/tech-docs/kubernetes/components/kubectl/statusBinFiles","permalink":"/tech-docs/kubernetes/components/kubectl/statusBinFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(63770);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{language:"bash",children:o.A`
  journalctl -t kubectl-installer
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(c.A,{language:"text",children:o.A`
  ***** [INFO] Checking current kubectl version...
  ***** [INFO] Current: none, Target: ${i.M.kubernetes.value}
  ***** [INFO] Download URL: https://*******
  ***** [INFO] Updating kubectl to version ${i.M.kubernetes.value}...
  ***** [INFO] Working directory: /tmp/tmp.*****
  ***** [INFO] Downloading kubectl...
  ***** [INFO] Downloading checksum file...
  ***** [INFO] Verifying checksum...
  ***** [INFO] Installing kubectl...
  ***** [INFO] kubectl successfully updated to ${i.M.kubernetes.value}.
`})}),"\n",(0,s.jsx)(c.A,{language:"bash",children:o.A`
  ls -la /usr/local/bin/ | grep 'kubectl$'
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:o.A`
  -rwxr-xr-x  1 root root  51454104 Aug 14  2024 kubectl
`})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA","slug":"/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/kubeadm","permalink":"/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(7478),c=n(1775),i=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase certs ca \\
    --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
  `}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
  #### Create Kubernetes CA
  [certs] Generating "ca" certificate and key
  `})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/payload/startSystemdUnit","title":"startSystemdUnit","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/payload/startSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/payload","slug":"/tech-docs/kubernetes/components/containerd/payload/startSystemdUnit","permalink":"/tech-docs/kubernetes/components/containerd/payload/startSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775);const i={},l=void 0,u={},d=[];function h(e){return(0,s.jsx)(c.A,{language:"bash",children:o.A`
  systemctl enable containerd
  systemctl start containerd
`})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h()}},2763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/checkBIN","title":"checkBIN","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/etcd/components/etcd/checkBIN.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/checkBIN","permalink":"/tech-docs/etcd/components/etcd/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(25527),c=n(39990);const i={},l=void 0,u={},d=[...c.toc,...o.toc];function h(e){const{Details:t}={...(0,a.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,s.jsx)(c.default,{}),(0,s.jsx)(o.default,{})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},3336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/main","title":"main","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435: \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 `Kubernetes CA`.","source":"@site/docs/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA","slug":"/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/main","permalink":"/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(47174),l=n(535);const u={},d=void 0,h={},m=[...i.toc,...l.toc];function p(e){const t={admonition:"admonition",code:"code",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.admonition,{type:"warning",children:[(0,s.jsx)(t.mdxAdmonitionTitle,{}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435:"})," \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 ",(0,s.jsx)(t.code,{children:"Kubernetes CA"}),"."]})]}),"\n",(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(o.A,{value:"HardWay",children:(0,s.jsx)(i.default,{})}),(0,s.jsx)(o.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},4391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/checks/statusBinFiles","title":"statusBinFiles","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/runc/checks/statusBinFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/runc/checks","slug":"/tech-docs/kubernetes/components/runc/checks/statusBinFiles","permalink":"/tech-docs/kubernetes/components/runc/checks/statusBinFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(63770);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{language:"bash",children:o.A`
  journalctl -t runc-installer
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(c.A,{language:"text",children:o.A`
  ***** [INFO] Checking current runc version...
  ***** [INFO] Current: none, Target: ${i.M.runc.value}
  ***** [INFO] Download URL: https://*******
  ***** [INFO] Updating runc to version ${i.M.runc.value}...
  ***** [INFO] Working directory: /tmp/tmp.*****
  ***** [INFO] Downloading runc...
  ***** [INFO] Downloading checksum file...
  ***** [INFO] Verifying checksum...
  ***** [INFO] Installing runc...
  ***** [INFO] runc successfully updated to ${i.M.runc.value}.
`})}),"\n",(0,s.jsx)(c.A,{language:"bash",children:o.A`
  ls -la /usr/local/bin/ | grep 'runc$'
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(c.A,{language:"text",children:o.A`
  -rwxr-xr-x  1 root root  10709696 Jan 23  2024 runc
`})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},4547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/checks/statusBinVersion","title":"statusBinVersion","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/runc/checks/statusBinVersion.mdx","sourceDirName":"tech-docs/kubernetes/components/runc/checks","slug":"/tech-docs/kubernetes/components/runc/checks/statusBinVersion","permalink":"/tech-docs/kubernetes/components/runc/checks/statusBinVersion","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775);const i={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{language:"bash",children:o.A`
  runc --version
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:o.A`
  runc version 1.1.12
  commit: v1.1.12-0-g51d5e946
  spec: 1.0.2-dev
  go: go1.20.13
  libseccomp: 2.5.4
`})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/kubeadm","permalink":"/tech-docs/kubernetes/components/controllerManager/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(7478),c=n(1775),i=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:i.A`
      kubeadm init phase  control-plane controller-manager \\
        --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${o.M.kuberneteBaseFolderPath.value}/super-admin.conf
  `}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:i.A`
      #### Kube API
      [control-plane] Creating static Pod manifest for "kube-controller-manager"
  `})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},5064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/lifecycleDownloadStatus","title":"lifecycleDownloadStatus","description":"\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b","source":"@site/docs/tech-docs/kubernetes/components/containerd/lifecycleDownloadStatus.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/lifecycleDownloadStatus","permalink":"/tech-docs/kubernetes/components/containerd/lifecycleDownloadStatus","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(63217),c=n(69536);const i={},l=void 0,u={},d=[...o.toc,...c.toc];function h(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b"}),"\n",(0,s.jsx)(o.default,{}),"\n",(0,s.jsx)("h3",{children:"\u0412\u0435\u0440\u0441\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),"\n",(0,s.jsx)(c.default,{})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h()}},6353:(e,t,n)=>{n.d(t,{$:()=>s});var r=n(7478);const s={etcdCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"}}},6783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/centerAuthority/etcdCA/main","title":"main","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435: \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 `ETCD CA`.","source":"@site/docs/tech-docs/etcd/certificates/centerAuthority/etcdCA/main.mdx","sourceDirName":"tech-docs/etcd/certificates/centerAuthority/etcdCA","slug":"/tech-docs/etcd/certificates/centerAuthority/etcdCA/main","permalink":"/tech-docs/etcd/certificates/centerAuthority/etcdCA/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(83807),l=n(84778);const u={},d=void 0,h={},m=[...i.toc,...l.toc];function p(e){const t={admonition:"admonition",code:"code",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.admonition,{type:"warning",children:[(0,s.jsx)(t.mdxAdmonitionTitle,{}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435:"})," \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 ",(0,s.jsx)(t.code,{children:"ETCD CA"}),"."]})]}),"\n",(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(o.A,{value:"HardWay",children:(0,s.jsx)(i.default,{})}),(0,s.jsx)(o.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},6847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>f,frontMatter:()=>m,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubectl/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/kubectl/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubectl","slug":"/tech-docs/kubernetes/components/kubectl/downloadBIN","permalink":"/tech-docs/kubernetes/components/kubectl/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(42567),l=n(63770);const u={data:{value:o.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${i.m.kubectl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${i.m.kubectl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${i.m.kubectl.templateUrlBinCheckSum}"
      INSTALL_PATH="${i.m.kubectl.path}"


      LOG_TAG="kubectl-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current kubectl version..."

      CURRENT_VERSION=$(kubectl version --client --short 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION"
      logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION" ]]; then
        logger -t "$LOG_TAG" "[INFO] Updating kubectl to version $COMPONENT_VERSION..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading kubectl..."
        curl -fsSL -o kubectl "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download kubectl"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o kubectl.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        awk '{print $1"  kubectl"}' kubectl.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Installing kubectl..."
        install -m 755 kubectl "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] kubectl successfully updated to $COMPONENT_VERSION."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] kubectl is already up to date. Skipping installation."
      fi
    `}};var d=n(87464),h=n(62774);const m={},p=void 0,b={},k=[];function g(e){return(0,s.jsxs)(h.A,{groupId:"install-type",children:[(0,s.jsxs)(d.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
            mkdir -p /etc/default/kubectl
          `}),(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
            cat <<EOF > /etc/default/kubectl/download.env
            COMPONENT_VERSION="${l.M.kubernetes.value}"
            REPOSITORY="${i.m.kubectl.baseUrl}"
            EOF
          `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
          cat <<"EOF" > /etc/default/kubectl/download-script.sh
          ${u.data.value}
          EOF
        `}),(0,s.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
          chmod +x /etc/default/kubectl/download-script.sh
        `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
          cat <<EOF > /usr/lib/systemd/system/kubectl-install.service
          [Unit]
          Description=Install and update kubectl
          After=network.target
          Wants=network-online.target

          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/kubectl/download.env
          ExecStart=/bin/bash -c "/etc/default/kubectl/download-script.sh"
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
          EOF
        `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
          systemctl enable kubectl-install.service
          systemctl start kubectl-install.service
        `})]}),(0,s.jsxs)(d.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
          - path: /etc/default/kubectl/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${l.M.kubernetes.value}"
              REPOSITORY="${i.m.kubectl.baseUrl}"
        `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
          - path: /etc/default/kubectl/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${u.data.value}
        `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
          - path: /usr/lib/systemd/system/kubectl-install.service
            owner: root:root
            permissions: '0644'
            content: |
              [Unit]
              Description=Install and update kubectl
              After=network.target
              Wants=network-online.target

              [Service]
              Type=oneshot
              EnvironmentFile=-/etc/default/kubectl/download.env
              ExecStart=/bin/bash -c "/etc/default/kubectl/download-script.sh"
              RemainAfterExit=yes

              [Install]
              WantedBy=multi-user.target
        `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
          - systemctl enable kubectl-install.service
          - systemctl start kubectl-install.service
        `})]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g()}},7109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(6353),c=n(7478),i=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  export CLUSTER_NAME=${c.M.clusterName.value}
  export BASE_DOMAIN=${c.M.kubernetesBaseDomain.value}
  export CLUSTER_DOMAIN=${c.M.kubernetesClusterDomain.value}
  export FULL_HOST_NAME=${c.M.virtualMachineFullName.value}
`}),"\n",(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
  mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
  mkdir -p ${c.M.kuberneteKubeletFolderPath.value}/pki
`}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${o.$.kubeletClient.crtConf}
  [ req ]
  default_bits        = ${o.$.kubeletClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = system:node:$\{FULL_HOST_NAME}
  O  = system:nodes

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${o.$.kubeletClient.keyPath} ${o.$.kubeletClient.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${o.$.kubeletClient.keyPath} \\
    -out ${o.$.kubeletClient.csrPath} \\
    -config ${o.$.kubeletClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -outform PEM \\
    -CA ${o.$.kubernetesCA.crtPath} \\
    -CAkey ${o.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${o.$.kubeletClient.csrPath} \\
    -out ${o.$.kubeletClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${o.$.kubeletClient.crtConf}
`}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  cat ${o.$.kubeletClient.crtPath} ${o.$.kubeletClient.keyPath} >> ${o.$.kubeletNowClient.crtPath}
  ln -s ${o.$.kubeletNowClient.crtPath} ${o.$.kubeletCurrentClient.crtPath}
`})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},7478:(e,t,n)=>{n.d(t,{M:()=>r});const r={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"my-first-cluster"},kubernetesClusterDomain:{value:"cluster.local"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kubeadmBaseConfigPath:{value:"/var/run/kubeadm"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_NAME}.${BASE_DOMAIN}"},kubernetesClusterExternalDomain:{value:"${CLUSTER_NAME}.${BASE_DOMAIN}"}}},7915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig","title":"kubeconfig","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig","permalink":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(6353),c=n(7478),i=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{language:"bash",children:l.A`
      export CLUSTER_NAME="${c.M.clusterName.value}"
      export BASE_DOMAIN="${c.M.kubernetesBaseDomain.value}"
      export CLUSTER_DOMAIN="${c.M.kubernetesClusterDomain.value}"
      export FULL_HOST_NAME="${c.M.virtualMachineFullName.value}"
  `}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f Kubeconfig"})}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority="${o.$.kubernetesCA.crtPath}" \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/scheduler.conf

  kubectl config set-credentials system:node:$\{FULL_HOST_NAME} \\
    --client-certificate=${o.$.kubernetesSchedulerClient.crtPath} \\
    --client-key=${o.$.kubernetesSchedulerClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/scheduler.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{FULL_HOST_NAME} \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/scheduler.conf

  kubectl config use-context default \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/scheduler.conf
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 kubeconfig"}),"\n",(0,s.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:[(0,s.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  ${c.M.kuberneteBaseFolderPath.value}/openssl/cert-report.sh ${c.M.kuberneteBaseFolderPath.value}/super-admin.conf
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:l.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  scheduler.conf             Oct 22, 2025 22:06 UTC   364d            kubernetes              no
`})})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(7478),c=n(1775),i=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase certs apiserver-kubelet-client \\
    --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [certs] Generating "apiserver-kubelet-client" certificate and key
`})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},9344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>f,frontMatter:()=>m,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit","title":"setupSystemdUnit","description":"Systemd Unit","source":"@site/docs/tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit","permalink":"/tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(7478),l=n(87464),u=n(62774),d=n(42267),h=n(42567);const m={},p=void 0,b={},k=[...d.toc];function g(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(u.A,{groupId:"install-type",children:[(0,s.jsxs)(l.A,{value:"Bash",children:[(0,s.jsx)(d.default,{}),(0,s.jsx)("h4",{children:"Systemd Unit"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
      cat <<EOF > /usr/lib/systemd/system/kubelet.service
      [Unit]
      Description=kubelet: The Kubernetes Node Agent
      Documentation=https://kubernetes.io/docs/
      Wants=network-online.target containerd.service
      After=network-online.target containerd.service

      [Service]
      ExecStart=${h.m.kubelet.path}
      Restart=always
      StartLimitInterval=0
      RestartSec=10

      [Install]
      WantedBy=multi-user.target
      EOF
    `}),(0,s.jsx)("h4",{children:"Systemd Unit Config"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
      cat <<EOF > /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
      # Note: This dropin only works with kubeadm and kubelet v1.11+
      [Service]
      Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=${i.M.kuberneteBaseFolderPath.value}/bootstrap-kubelet.conf --kubeconfig=${i.M.kuberneteBaseFolderPath.value}/kubelet.conf"
      Environment="KUBELET_CONFIG_ARGS=--config=${i.M.kuberneteKubeletFolderPath.value}/config.yaml"
      # This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
      EnvironmentFile=-${i.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
      # This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
      # the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
      EnvironmentFile=-/etc/default/kubelet/extra-args.env
      ExecStart=
      ExecStart=/usr/local/bin/kubelet \\$KUBELET_KUBECONFIG_ARGS \\$KUBELET_CONFIG_ARGS \\$KUBELET_KUBEADM_ARG \\$KUBELET_EXTRA_ARGS
      EOF
    `}),(0,s.jsx)("h4",{children:"Systemd Unit ENV"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
      cat <<EOF > /etc/default/kubelet/extra-args.env
      KUBELET_EXTRA_ARGS=""
      EOF
    `})]}),(0,s.jsxs)(l.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Systemd Unit ENV"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
      - path: /usr/lib/systemd/system/kubelet.service
        owner: root:root
        permissions: '0644'
        content: |
          [Unit]
          Description=kubelet: The Kubernetes Node Agent
          Documentation=https://kubernetes.io/docs/
          Wants=network-online.target containerd.service
          After=network-online.target containerd.service

          [Service]
          ExecStart=${h.m.kubelet.path}
          Restart=always
          StartLimitInterval=0
          RestartSec=10

          [Install]
          WantedBy=multi-user.target
    `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
      - path: /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
        owner: root:root
        permissions: '0644'
        content: |
          # Note: This dropin only works with kubeadm and kubelet v1.11+
          [Service]
          Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=${i.M.kuberneteBaseFolderPath.value}/bootstrap-kubelet.conf --kubeconfig=${i.M.kuberneteBaseFolderPath.value}/kubelet.conf"
          Environment="KUBELET_CONFIG_ARGS=--config=${i.M.kuberneteKubeletFolderPath.value}/config.yaml"
          # This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
          EnvironmentFile=-${i.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
          # This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
          # the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
          EnvironmentFile=-/etc/default/kubelet/extra-args.env
          ExecStart=
          ExecStart=/usr/local/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_CONFIG_ARGS $KUBELET_KUBEADM_ARGS $KUBELET_EXTRA_ARGS
    `}),(0,s.jsx)("h4",{children:"Systemd Unit Download"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
      - path: /etc/default/kubelet/extra-args.env
        owner: root:root
        permissions: '0644'
        content: |
          KUBELET_EXTRA_ARGS=""
    `}),(0,s.jsx)("h4",{children:"Systemd Unit Custom ENV"}),(0,s.jsxs)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"info",children:[(0,s.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c ",(0,s.jsx)(t.strong,{children:"\u0442\u043e\u043b\u044c\u043a\u043e"})," \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 Kubernetes \u0432\u0440\u0443\u0447\u043d\u0443\u044e (\u043c\u0435\u0442\u043e\u0434\u043e\u043c ",(0,s.jsx)(t.em,{children:"\xabKubernetes the Hard Way\xbb"}),"). \u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",(0,s.jsx)(t.strong,{children:"kubeadm"})," \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,s.jsx)(t.code,{children:"kubeadm-config"}),"."]}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
  - path: ${i.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
    owner: root:root
    permissions: '0644'
    content: |
      KUBELET_KUBEADM_ARGS="--container-runtime-endpoint=unix://${i.M.criEndpoint.value} --pod-infra-container-image=${i.M.baseDockerRegistry.value}/${i.M.pausedImage.value} --config=${i.M.kuberneteKubeletFolderPath.value}/config-custom.yaml"
`})]})]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},10119:(e,t,n)=>{n.d(t,{D:()=>a});var r=n(6353),s=n(31798);const a={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${s.h.etcdPeer.portNumber}`},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:`${r.$.etcdPeer.crtPath}`},peerKeyFile:{value:`${r.$.etcdPeer.keyPath}`},peerTrustedCAFile:{value:`${r.$.etcdCA.crtPath}`},peerClientCertAuth:{value:"true"},certFile:{value:`${r.$.etcdServer.crtPath}`},keyFile:{value:`${r.$.etcdServer.keyPath}`},trustedCAFile:{value:`${r.$.etcdCA.crtPath}`},listenClientUrls:{value:`https://127.0.0.1:${s.h.etcdServer.portNumber},https://\${MACHINE_LOCAL_ADDRESS}:${s.h.etcdServer.portNumber}`},listenPeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${s.h.etcdPeer.portNumber}`},listenMetricsUrls:{value:`http://127.0.0.1:${s.h.etcdMetricServer.portNumber}`},dataDir:{value:"/var/lib/etcd"},quotaBackendBytes:{value:"10737418240"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${s.h.etcdPeer.portNumber}`},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"},snapshotCount:{value:"10000"},experimentalInitialCorruptCheck:{value:"true"},experimentalWatchProgressNotifyInterval:{value:"5s"}}},10815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>g,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/additionalSetup/markingJoinComponent","title":"markingJoinComponent","description":"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0443\u044e \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u0437\u0430\u0434\u0430\u0442\u044c \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442\u044c \u0438\u0437\u043e\u043b\u044f\u0446\u0438\u044e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430 \u043e\u0442 \u043d\u0435\u0437\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043d\u0430\u0433\u0440\u0443\u0437\u043e\u043a.","source":"@site/docs/tech-docs/kubernetes/additionalSetup/markingJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/additionalSetup","slug":"/tech-docs/kubernetes/additionalSetup/markingJoinComponent","permalink":"/tech-docs/kubernetes/additionalSetup/markingJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(1775),l=n(60513),u=n(7478),d=n(72608);const h={},m=void 0,p={},b=[...d.toc];function k(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0443\u044e \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u0437\u0430\u0434\u0430\u0442\u044c \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442\u044c \u0438\u0437\u043e\u043b\u044f\u0446\u0438\u044e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430 \u043e\u0442 \u043d\u0435\u0437\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043d\u0430\u0433\u0440\u0443\u0437\u043e\u043a."})}),"\n",(0,s.jsx)(d.default,{}),"\n",(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  export CLUSTER_NAME=${u.M.clusterName.value}
  export BASE_DOMAIN=${u.M.kubernetesBaseDomain.value}
  export FULL_HOST_NAME=${u.M.virtualMachineFullName.value}
`}),"\n",(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsxs)(o.A,{value:"HardWay",children:[(0,s.jsx)("h4",{children:"\u041c\u0430\u0440\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u0443\u0437\u043b\u0430"}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
      kubectl label node $\{FULL_HOST_NAME} node-role.kubernetes.io/control-plane="" \\
        --kubeconfig=${u.M.kuberneteBaseFolderPath.value}/super-admin.conf
    `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:l.A`
    node/master-<n>.my-first-cluster.example.com labeled
  `})}),(0,s.jsx)("h4",{children:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u0443\u0437\u043b\u0430"}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
      kubectl taint node $\{FULL_HOST_NAME} node-role.kubernetes.io/control-plane="":NoSchedule \\
        --overwrite \\
        --kubeconfig=${u.M.kuberneteBaseFolderPath.value}/super-admin.conf
    `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:l.A`
    node/master-<n>.my-first-cluster.example.com modified
  `})})]}),(0,s.jsxs)(o.A,{value:"Kubeadm",children:[(0,s.jsx)(i.A,{language:"bash",children:l.A`
      kubeadm join phase control-plane-join mark-control-plane \\
        --config=${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${u.M.kuberneteBaseFolderPath.value}/admin.conf
    `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:l.A`
    [mark-control-plane] Marking the node master-<n>.my-first-cluster.example.com as control-plane by adding the labels: [node-role.kubernetes.io/control-plane node.kubernetes.io/exclude-from-external-load-balancers]
    [mark-control-plane] Marking the node master-<n>.my-first-cluster.example.com as control-plane by adding the taints [node-role.kubernetes.io/control-plane:NoSchedule]
  `})})]})]})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},11321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(6353),c=n(7478),i=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${o.$.kubernetesFrontProxyClient.crtConf}
  [ req ]
  default_bits        = ${o.$.kubernetesFrontProxyClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${o.$.kubernetesFrontProxyClient.cname}

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
    openssl genrsa \\
      -out ${o.$.kubernetesFrontProxyClient.keyPath} ${o.$.kubernetesFrontProxyClient.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
    openssl req \\
      -new \\
      -key    ${o.$.kubernetesFrontProxyClient.keyPath} \\
      -out    ${o.$.kubernetesFrontProxyClient.csrPath} \\
      -config ${o.$.kubernetesFrontProxyClient.crtConf}
  `}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${o.$.frontProxyCA.crtPath} \\
    -CAkey ${o.$.frontProxyCA.keyPath} \\
    -CAcreateserial \\
    -in ${o.$.kubernetesFrontProxyClient.csrPath} \\
    -out ${o.$.kubernetesFrontProxyClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${o.$.kubernetesFrontProxyClient.crtConf}
`})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},11946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(7478);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:o.A`
  kubeadm init phase kubeconfig kubelet \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
  #### Генерация сертификатов
  [kubeconfig] Writing "kubelet.conf" kubeconfig file
`})]}),"\n",(0,s.jsx)("h4",{children:"\u0420\u043e\u0442\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:o.A`
  kubeadm init phase kubelet-finalize experimental-cert-rotation \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
  #### Ротация сертификатов
  [kubelet-finalize] Updating "/etc/kubernetes/kubelet.conf" to point to a rotatable kubelet client certificate and key
`})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},12141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>f,frontMatter:()=>m,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/kubelet/payload/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/downloadBIN","permalink":"/tech-docs/kubernetes/components/kubelet/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(42567),l=n(63770);const u={data:{value:o.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${i.m.kubelet.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${i.m.kubelet.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${i.m.kubelet.templateUrlBinCheckSum}"
      INSTALL_PATH="${i.m.kubelet.path}"


      LOG_TAG="kubelet-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current kubelet version..."

      CURRENT_VERSION=$(kubelet version --client --short 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION"
      logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION" ]]; then
        logger -t "$LOG_TAG" "[INFO] Updating kubelet to version $COMPONENT_VERSION..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading kubelet..."
        curl -fsSL -o kubelet "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download kubelet"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o kubelet.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        awk '{print $1"  kubelet"}' kubelet.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Installing kubelet..."
        install -m 755 kubelet "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] kubelet successfully updated to $COMPONENT_VERSION."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] kubelet is already up to date. Skipping installation."
      fi
    `}};var d=n(87464),h=n(62774);const m={},p=void 0,b={},k=[];function g(e){return(0,s.jsxs)(h.A,{groupId:"install-type",children:[(0,s.jsxs)(d.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
            mkdir -p /etc/default/kubelet
          `}),(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
            cat <<EOF > /etc/default/kubelet/download.env
            COMPONENT_VERSION="${l.M.kubernetes.value}"
            REPOSITORY="${i.m.kubelet.baseUrl}"
            EOF
          `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
          cat <<"EOF" > /etc/default/kubelet/download-script.sh
          ${u.data.value}
          EOF
        `}),(0,s.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
          chmod +x /etc/default/kubelet/download-script.sh
        `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
          cat <<EOF > /usr/lib/systemd/system/kubelet-install.service
          [Unit]
          Description=Install and update kubelet
          After=network.target
          Wants=network-online.target

          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/kubelet/download.env
          ExecStart=/bin/bash -c "/etc/default/kubelet/download-script.sh"
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
          EOF
        `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
          systemctl enable kubelet-install.service
          systemctl start kubelet-install.service
        `})]}),(0,s.jsxs)(d.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
          - path: /etc/default/kubelet/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${l.M.kubernetes.value}"
              REPOSITORY="${i.m.kubelet.baseUrl}"
        `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
          - path: /etc/default/kubelet/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${u.data.value}
        `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
          - path: /usr/lib/systemd/system/kubelet-install.service
            owner: root:root
            permissions: '0644'
            content: |
              [Unit]
              Description=Install and update kubelet
              After=network.target
              Wants=network-online.target

              [Service]
              Type=oneshot
              EnvironmentFile=-/etc/default/kubelet/download.env
              ExecStart=/bin/bash -c "/etc/default/kubelet/download-script.sh"
              RemainAfterExit=yes

              [Install]
              WantedBy=multi-user.target
        `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
          - systemctl enable kubelet-install.service
          - systemctl start kubelet-install.service
        `})]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g()}},14592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/componentsReadyComponent","title":"componentsReadyComponent","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/componentsReadyComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/componentsReadyComponent","permalink":"/tech-docs/kubernetes/components/componentsReadyComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(62774),c=n(87464),i=n(1775),l=n(60513),u=n(7478);const d={},h=void 0,m={},p=[];function b(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(o.A,{groupId:"current-master",children:[(0,s.jsxs)(c.A,{value:"Init",children:[(0,s.jsx)(i.A,{language:"bash",children:l.A`
      kubeadm init phase preflight --dry-run \\
        --config=${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
    `}),(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u0415\u0441\u043b\u0438 \u0432\u0441\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e, \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0441\u044f \u0431\u0435\u0437 \u043e\u0448\u0438\u0431\u043e\u043a, \u0438 \u0432\u044b \u0443\u0432\u0438\u0434\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434:"}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
  [preflight] Running pre-flight checks
  [preflight] Would pull the required images (like 'kubeadm config images pull')
`})]}),(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0431\u044b\u043b \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d \u043d\u0430 \u043f\u043e\u043b\u0443\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0440\u0435\u0436\u0438\u043c \u0442\u043e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 \u0432\u044b\u0432\u043e\u0434 \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0432\u043e\u0442 \u0442\u0430\u043a:"}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-apiserver.yaml]: /etc/kubernetes/manifests/kube-apiserver.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-controller-manager.yaml]: /etc/kubernetes/manifests/kube-controller-manager.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-scheduler.yaml]: /etc/kubernetes/manifests/kube-scheduler.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-etcd.yaml]: /etc/kubernetes/manifests/etcd.yaml already exists
    [preflight] Running pre-flight checks
    [preflight] Reading configuration from the cluster...
    [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
    [preflight] Running pre-flight checks before initializing the new control plane instance
    [preflight] Would pull the required images (like 'kubeadm config images pull')
  `})]})]}),(0,s.jsxs)(c.A,{value:"Join",children:[(0,s.jsx)(i.A,{language:"bash",children:l.A`
      kubeadm join phase preflight --dry-run \\
        --config=${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
    `}),(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u0415\u0441\u043b\u0438 \u0432\u0441\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e, \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0441\u044f \u0431\u0435\u0437 \u043e\u0448\u0438\u0431\u043e\u043a, \u0438 \u0432\u044b \u0443\u0432\u0438\u0434\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434:"}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
    [preflight] Running pre-flight checks
    [preflight] Reading configuration from the cluster...
    [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
    [preflight] Running pre-flight checks before initializing the new control plane instance
    [preflight] Would pull the required images (like 'kubeadm config images pull')
  `})]}),(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0431\u044b\u043b \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d \u043d\u0430 \u043f\u043e\u043b\u0443\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0440\u0435\u0436\u0438\u043c \u0442\u043e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 \u0432\u044b\u0432\u043e\u0434 \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0432\u043e\u0442 \u0442\u0430\u043a:"}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-apiserver.yaml]: /etc/kubernetes/manifests/kube-apiserver.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-controller-manager.yaml]: /etc/kubernetes/manifests/kube-controller-manager.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-scheduler.yaml]: /etc/kubernetes/manifests/kube-scheduler.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-etcd.yaml]: /etc/kubernetes/manifests/etcd.yaml already exists
    [preflight] Running pre-flight checks
    [preflight] Reading configuration from the cluster...
    [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
    [preflight] Running pre-flight checks before initializing the new control plane instance
    [preflight] Would pull the required images (like 'kubeadm config images pull')
  `})]})]})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},16455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/checks/statusSystemdUnit","title":"statusSystemdUnit","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/checks/statusSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/checks","slug":"/tech-docs/kubernetes/components/containerd/checks/statusSystemdUnit","permalink":"/tech-docs/kubernetes/components/containerd/checks/statusSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775);const i={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{language:"bash",children:o.A`
  systemctl status containerd
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:o.A`
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

  ***** level=info msg="Start subscribing containerd event"
  ***** level=info msg="Start recovering state"
  ***** level=info msg="Start event monitor"
  ***** level=info msg="Start snapshots syncer"
  ***** level=info msg="Start cni network conf syncer for default"
  ***** level=info msg="Start streaming server"
  ***** level=info msg=serving... address=/run/containerd/containerd.sock.ttrpc
  ***** level=info msg=serving... address=/run/containerd/containerd.sock
  ***** level=info msg="containerd successfully booted in 0.065807s"
  ***** Started containerd.service - containerd container runtime.

`})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},16812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl","permalink":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(6353),c=n(7478),i=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
    mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
    mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
    mkdir -p ${c.M.kuberneteBaseFolderPath.value}/kubeconfig
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${o.$.kubernetesSuperAdminClient.crtConf}
  [ req ]
  default_bits        = ${o.$.kubernetesSuperAdminClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${o.$.kubernetesSuperAdminClient.cname}
  O  = system:masters

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${o.$.kubernetesSuperAdminClient.keyPath} ${o.$.kubernetesSuperAdminClient.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${o.$.kubernetesSuperAdminClient.keyPath} \\
    -out    ${o.$.kubernetesSuperAdminClient.csrPath} \\
    -config ${o.$.kubernetesSuperAdminClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${o.$.kubernetesCA.crtPath} \\
    -CAkey ${o.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${o.$.kubernetesSuperAdminClient.csrPath} \\
    -out ${o.$.kubernetesSuperAdminClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${o.$.kubernetesSuperAdminClient.crtConf}
`})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},17510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdServer/main","title":"main","description":"","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdServer/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdServer/main","permalink":"/tech-docs/etcd/certificates/components/etcd/etcdServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(46567),l=n(49717);const u={},d=void 0,h={},m=[...i.toc,...l.toc];function p(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(o.A,{value:"HardWay",children:(0,s.jsx)(i.default,{})}),(0,s.jsx)(o.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},18727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(7478),c=n(1775),i=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:i.A`
    kubeadm init phase certs front-proxy-client \\
      --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
  `}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [certs] Generating "front-proxy-client" certificate and key
`})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},19513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>f,frontMatter:()=>m,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/downloadBIN","permalink":"/tech-docs/kubernetes/components/kubeadm/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(42567),l=n(63770);const u={data:{value:o.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${i.m.kubeadm.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${i.m.kubeadm.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${i.m.kubeadm.templateUrlBinCheckSum}"
      INSTALL_PATH="${i.m.kubeadm.path}"


      LOG_TAG="kubeadm-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current kubeadm version..."

      CURRENT_VERSION=$(kubeadm version --client --short 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION"
      logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION" ]]; then
        logger -t "$LOG_TAG" "[INFO] Updating kubeadm to version $COMPONENT_VERSION..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading kubeadm..."
        curl -fsSL -o kubeadm "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download kubeadm"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o kubeadm.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        awk '{print $1"  kubeadm"}' kubeadm.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Installing kubeadm..."
        install -m 755 kubeadm "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] kubeadm successfully updated to $COMPONENT_VERSION."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] kubeadm is already up to date. Skipping installation."
      fi
    `}};var d=n(87464),h=n(62774);const m={},p=void 0,b={},k=[];function g(e){return(0,s.jsxs)(h.A,{groupId:"install-type",children:[(0,s.jsxs)(d.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
            mkdir -p /etc/default/kubeadm
          `}),(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
            cat <<EOF > /etc/default/kubeadm/download.env
            COMPONENT_VERSION="${l.M.kubernetes.value}"
            REPOSITORY="${i.m.kubeadm.baseUrl}"
            EOF
          `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
          cat <<"EOF" > /etc/default/kubeadm/download-script.sh
          ${u.data.value}
          EOF
        `}),(0,s.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
          chmod +x /etc/default/kubeadm/download-script.sh
        `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
          cat <<EOF > /usr/lib/systemd/system/kubeadm-install.service
          [Unit]
          Description=Install and update kubeadm
          After=network.target
          Wants=network-online.target

          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/kubeadm/download.env
          ExecStart=/bin/bash -c "/etc/default/kubeadm/download-script.sh"
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
          EOF
        `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
          systemctl enable kubeadm-install.service
          systemctl start kubeadm-install.service
        `})]}),(0,s.jsxs)(d.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
          - path: /etc/default/kubeadm/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${l.M.kubernetes.value}"
              REPOSITORY="${i.m.kubeadm.baseUrl}"
        `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
          - path: /etc/default/kubeadm/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${u.data.value}
        `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
          - path: /usr/lib/systemd/system/kubeadm-install.service
            owner: root:root
            permissions: '0644'
            content: |
              [Unit]
              Description=Install and update kubeadm
              After=network.target
              Wants=network-online.target

              [Service]
              Type=oneshot
              EnvironmentFile=-/etc/default/kubeadm/download.env
              ExecStart=/bin/bash -c "/etc/default/kubeadm/download-script.sh"
              RemainAfterExit=yes

              [Install]
              WantedBy=multi-user.target
        `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
          - systemctl enable kubeadm-install.service
          - systemctl start kubeadm-install.service
        `})]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g()}},19529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdPeer/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdPeer/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdPeer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdPeer/openssl","permalink":"/tech-docs/etcd/certificates/components/etcd/etcdPeer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(6353),c=n(7478),i=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
      export CLUSTER_NAME=${c.M.clusterName.value}
      export FULL_HOST_NAME=${c.M.virtualMachineFullName.value}
      export MACHINE_LOCAL_ADDRESS=${c.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${o.$.etcdPeer.crtConf}
  [ req ]
  default_bits        = ${o.$.etcdPeer.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn
  req_extensions      = req_ext

  [ req_ext ]
  subjectAltName = @alt_names

  [ alt_names ]
  DNS.1 = localhost
  DNS.2 = $\{HOST_NAME}
  DNS.3 = $\{FULL_HOST_NAME}
  IP.1  = 127.0.0.1
  IP.2  = 0:0:0:0:0:0:0:1
  IP.3  = \${MACHINE_LOCAL_ADDRESS}

  [ dn ]
  CN = $\{FULL_HOST_NAME}

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=serverAuth,clientAuth
  subjectAltName=@alt_names
  EOF
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${o.$.etcdPeer.keyPath} ${o.$.etcdPeer.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${o.$.etcdPeer.keyPath} \\
    -out ${o.$.etcdPeer.csrPath} \\
    -config ${o.$.etcdPeer.crtConf}
  `}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${o.$.etcdCA.crtPath} \\
    -CAkey ${o.$.etcdCA.keyPath} \\
    -CAcreateserial \\
    -in ${o.$.etcdPeer.csrPath} \\
    -out ${o.$.etcdPeer.crtPath} \\
    -extensions v3_ext \\
    -extfile ${o.$.etcdPeer.crtConf}
  `})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},21849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>g,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/configFiles","title":"configFiles","description":"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet","source":"@site/docs/tech-docs/kubernetes/components/kubelet/payload/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/configFiles","permalink":"/tech-docs/kubernetes/components/kubelet/payload/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(7478),l=n(28702),u=n(87464),d=n(62774);const h={},m=void 0,p={},b=[];function k(e){return(0,s.jsxs)(d.A,{groupId:"install-type",children:[(0,s.jsxs)(u.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
      cat <<EOF > ${i.M.kuberneteKubeletFolderPath.value}/config-custom.yaml
      ---
      ${l.D.data.value}
      EOF
    `})]}),(0,s.jsxs)(u.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
      - path: ${i.M.kuberneteKubeletFolderPath.value}/config-custom.yaml
        owner: root:root
        permissions: '0644'
        content: |
          ---
          ${l.D.data.value}
    `})]})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k()}},22919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/checkComponent","title":"checkComponent","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/containerd/checkComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/checkComponent","permalink":"/tech-docs/kubernetes/components/containerd/checkComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(16455),c=n(71020);const i={},l=void 0,u={},d=[...c.toc,...o.toc];function h(e){const{Details:t}={...(0,a.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),(0,s.jsx)(c.default,{}),(0,s.jsx)(o.default,{})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},23202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(38230),l=n(8790);const u={},d=void 0,h={},m=[...i.toc,...l.toc];function p(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(o.A,{value:"HardWay",children:(0,s.jsx)(i.default,{})}),(0,s.jsx)(o.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},24557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/setupComponent","title":"setupComponent","description":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/kubernetes/components/kubeAPI/setupComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/setupComponent","permalink":"/tech-docs/kubernetes/components/kubeAPI/setupComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(79988),l=n(38229);const u={},d=void 0,h={},m=[...i.toc,...l.toc];function p(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,s.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(o.A,{value:"HardWay",children:(0,s.jsx)(i.default,{})}),(0,s.jsx)(o.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},24917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/etcd/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/etcd/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/etcd","slug":"/tech-docs/kubernetes/components/etcd/kubeadm","permalink":"/tech-docs/kubernetes/components/etcd/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(7478),c=n(1775),i=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:i.A`
      kubeadm init phase etcd local \\
        --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${o.M.kuberneteBaseFolderPath.value}/super-admin.conf
  `}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:i.A`
      #### Kube API
      [etcd] Creating static Pod manifest for local etcd in "${o.M.kuberneteBaseFolderPath.value}"
  `})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},25292:(e,t,n)=>{n.d(t,{L:()=>o});var r=n(6353),s=n(31798),a=n(7478);const o={etcdCafile:{value:`${r.$.etcdCA.crtPath}`},etcdCertfile:{value:`${r.$.kubernetesEtcdClient.crtPath}`},etcdKeyfile:{value:`${r.$.kubernetesEtcdClient.keyPath}`},certDir:{value:"/var/run/kubernetes"},kubeletClientCertificate:{value:`${r.$.kubernetesKubeletClient.crtPath}`},kubeletClientKey:{value:`${r.$.kubernetesKubeletClient.keyPath}`},clientCAFile:{value:`${r.$.kubernetesCA.crtPath}`},proxyClientCertFile:{value:`${r.$.kubernetesFrontProxyClient.crtPath}`},proxyClientKeyFile:{value:`${r.$.kubernetesFrontProxyClient.keyPath}`},tlsCertFile:{value:`${r.$.kubernetesServer.crtPath}`},tlsPrivateKeyFile:{value:`${r.$.kubernetesServer.keyPath}`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountKeyFile:{value:`${r.$.kubernetesSA.crtPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},serviceAccountSigningKeyFile:{value:`${r.$.kubernetesSA.keyPath}`},aggregatorRejectForwardingRedirect:{value:"true"},allowPrivileged:{value:"true"},anonymousAuth:{value:"true"},auditLogBatchThrottleEnable:{value:"false"},auditLogCompress:{value:"false"},auditLogTruncateEnabled:{value:"false"},auditWebhookBatchThrottleEnable:{value:"true"},auditWebhookTruncateEnabled:{value:"false"},contentionProfiling:{value:"false"},enableAggregatorRouting:{value:"true"},enableBootstrapTokenAuth:{value:"true"},enableGarbageCollector:{value:"true"},enableLogsHandler:{value:"true"},enablePriorityAndFairness:{value:"true"},encryptionProviderConfigAutomaticReload:{value:"false"},help:{value:"false"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},version:{value:"false"},watchCache:{value:"true"},logTextSplitStream:{value:"false"},shutdownSendRetryAfter:{value:"false"},logJsonSplitStream:{value:"false"},serviceAccountExtendTokenExpiration:{value:"true"},serviceAccountLookup:{value:"true"},apiserverCount:{value:"1"},auditLogBatchBufferSize:{value:"10000"},auditLogBatchMaxSize:{value:"1"},auditLogBatchThrottleBurst:{value:"0"},auditLogBatchThrottleQps:{value:"0"},auditLogMaxage:{value:"30"},auditLogMaxbackup:{value:"10"},auditLogMaxsize:{value:"1000"},auditLogTruncateMaxBatchSize:{value:"10485760"},auditLogTruncateMaxEventSize:{value:"102400"},auditWebhookBatchBufferSize:{value:"10000"},auditWebhookBatchMaxSize:{value:"400"},auditWebhookBatchThrottleBurst:{value:"15"},auditWebhookBatchThrottleQps:{value:"10"},auditWebhookTruncateMaxBatchSize:{value:"10485760"},auditWebhookTruncateMaxEventSize:{value:"102400"},defaultNotReadyTolerationSeconds:{value:"300"},defaultUnreachableTolerationSeconds:{value:"300"},defaultWatchCacheSize:{value:"100"},deleteCollectionWorkers:{value:"1"},kubernetesServiceNodePort:{value:"0"},leaseReuseDurationSeconds:{value:"60"},maxMutatingRequestsInflight:{value:"200"},maxRequestsInflight:{value:"400"},minRequestTimeout:{value:"1800"},goawayChance:{value:"0"},http2MaxStreamsPerConnection:{value:"0"},v:{value:"2"},logJsonInfoBufferSize:{value:"0"},logTextInfoBufferSize:{value:"0"},maxConnectionBytesPerSec:{value:"0"},kubeletPort:{value:`${s.h.kubeletServer.portNumber}`},securePort:{value:`${s.h.kubeAPIServer.portNumber}`},kubeletReadOnlyPort:{value:`${s.h.kubeletReadOnlyPort.portNumber}`},serviceNodePortRange:{value:"30000-32767"},etcdServers:{value:`https://127.0.0.1:${s.h.etcdServer.portNumber}`},serviceAccountIssuer:{value:`https://kubernetes.default.svc.${a.M.kubernetesClusterDomain.value}`},serviceClusterIpRange:{value:`${a.M.kubernetesServiceCIDR.value}`},auditWebhookInitialBackoff:{value:"10s"},auditWebhookBatchMaxWait:{value:"30s"},serviceAccountMaxTokenExpiration:{value:"0s"},shutdownWatchTerminationGracePeriod:{value:"0s"},shutdownDelayDuration:{value:"0s"},requestTimeout:{value:"1m0s"},eventTtl:{value:"1h0m0s"},livezGracePeriod:{value:"0s"},logFlushFrequency:{value:"5s"},kubeletTimeout:{value:"5s"},etcdCompactionInterval:{value:"5m0s"},etcdCountMetricPollPeriod:{value:"1m0s"},etcdDbMetricPollInterval:{value:"30s"},etcdHealthcheckTimeout:{value:"2s"},etcdReadycheckTimeout:{value:"2s"},authenticationTokenWebhookCacheTtl:{value:"2m0s"},authorizationWebhookCacheAuthorizedTtl:{value:"5m0s"},authorizationWebhookCacheUnauthorizedTtl:{value:"30s"},auditWebhookBatchInitialBackoff:{value:"10s"},auditLogBatchMaxWait:{value:"0s"},bindAddress:{value:"0.0.0.0"},cloudProviderGceL7lbSrcCidrs:{value:"130.211.0.0/22,35.191.0.0/16"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},apiAudiences:{value:"konnectivity-server"},loggingFormat:{value:"text"},auditLogFormat:{value:"json"},auditLogMode:{value:"batch"},auditWebhookMode:{value:"batch"},auditLogVersion:{value:"audit.k8s.io/v1"},auditWebhookVersion:{value:"audit.k8s.io/v1"},authenticationTokenWebhookVersion:{value:"v1beta1"},authorizationMode:{value:"Node,RBAC"},authorizationWebhookVersion:{value:"v1beta1"},cloudProvider:{value:"external"},enableAdmissionPlugins:{value:"NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,AlwaysPullImages,NodeRestriction,PodSecurity"},endpointReconcilerType:{value:"lease"},storageMediaType:{value:"application/vnd.kubernetes.protobuf"},etcdPrefix:{value:"/registry"},featureGates:{value:"RotateKubeletServerCertificate=true"},kubeletPreferredAddressTypes:{value:"InternalIP,ExternalIP,Hostname"},oidcSigningAlgs:{value:"RS256"},oidcUsernameClaim:{value:"sub"},requestheaderAllowedNames:{value:"front-proxy-client"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"},runtimeConfig:{value:"api/all=true"},storageBackend:{value:"etcd3"},advertiseAddress:{value:""},admissionControl:{value:""},admissionControlConfigFile:{value:""},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},auditLogPath:{value:""},auditPolicyFile:{value:""},auditWebhookConfigFile:{value:""},authenticationConfig:{value:""},authenticationTokenWebhookConfigFile:{value:""},authorizationConfig:{value:""},authorizationPolicyFile:{value:""},authorizationWebhookConfigFile:{value:""},cloudConfig:{value:""},corsAllowedOrigins:{value:""},debugSocketPath:{value:""},disableAdmissionPlugins:{value:""},disabledMetrics:{value:""},egressSelectorConfigFile:{value:""},encryptionProviderConfig:{value:""},etcdServersOverrides:{value:""},externalHostname:{value:""},kubeletCertificateAuthority:{value:""},oidcCaFile:{value:""},oidcClientId:{value:""},oidcGroupsClaim:{value:""},oidcGroupsPrefix:{value:""},oidcIssuerUrl:{value:""},oidcRequiredClaim:{value:""},oidcUsernamePrefix:{value:""},peerAdvertiseIp:{value:""},peerAdvertisePort:{value:""},peerCaFile:{value:""},serviceAccountJwksUri:{value:""},showHiddenMetricsForVersion:{value:""},strictTransportSecurityDirectives:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsSniCertKey:{value:""},tokenAuthFile:{value:""},tracingConfigFile:{value:""},vmodule:{value:""},watchCacheSizes:{value:""}}},25527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/statusBinVersion","title":"statusBinVersion","description":"{dedent`","source":"@site/docs/tech-docs/etcd/components/etcd/statusBinVersion.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/statusBinVersion","permalink":"/tech-docs/etcd/components/etcd/statusBinVersion","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775);const i={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{language:"bash",children:o.A`
  etcd --version
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:o.A`
  etcd Version: 3.5.5
  Git SHA: 19002cfc6
  Go Version: go1.16.15
  Go OS/Arch: linux/amd64
`})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},25652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnit","title":"statusSystemdUnit","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Kubeadm \u0431\u0435\u0437 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 kubeadm init \u0438\u043b\u0438 kubeadm join, Systemd Unit \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a, \u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d.","source":"@site/docs/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/checks","slug":"/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnit","permalink":"/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775);const i={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Kubeadm"})})," \u0431\u0435\u0437 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 ",(0,s.jsx)(t.code,{children:"kubeadm init"})," \u0438\u043b\u0438 ",(0,s.jsx)(t.code,{children:"kubeadm join"}),", Systemd Unit \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a, \u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d."]})}),"\n",(0,s.jsx)(c.A,{language:"bash",children:o.A`
      systemctl status kubelet
  `}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(c.A,{language:"bash",children:o.A`
      ○ kubelet.service - kubelet: The Kubernetes Node Agent
          Loaded: loaded (/usr/lib/systemd/system/kubelet.service; enabled; preset: enabled)
          Drop-In: /usr/lib/systemd/system/kubelet.service.d
                  └─10-kubeadm.conf
          Active: inactive (dead)
          Docs: https://kubernetes.io/docs/
  `})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},27590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(6353),c=n(7478),i=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
      export CLUSTER_NAME=${c.M.clusterName.value}
      export BASE_DOMAIN=${c.M.kubernetesBaseDomain.value}
      export CLUSTER_DOMAIN=${c.M.kubernetesClusterDomain.value}
      export FULL_HOST_NAME=${c.M.virtualMachineFullName.value}
      export MACHINE_LOCAL_ADDRESS=${c.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
      mkdir -p ${c.M.kuberneteKubeletFolderPath.value}/pki
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${o.$.kubeletServer.crtConf}
  [ req ]
  default_bits        = ${o.$.kubeletServer.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn
  req_extensions      = req_ext

  [ req_ext ]
  subjectAltName = @alt_names

  [ alt_names ]
  DNS.1 = localhost
  DNS.2 = $\{HOST_NAME}
  DNS.3 = $\{FULL_HOST_NAME}
  IP.1  = 127.0.0.1
  IP.2  = 0:0:0:0:0:0:0:1
  IP.3  = $\{MACHINE_LOCAL_ADDRESS}

  [ dn ]
  CN = "system:node:$\{FULL_HOST_NAME}
  O  = "system:nodes"

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=serverAuth
  subjectAltName=@alt_names
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${o.$.kubeletServer.keyPath} ${o.$.kubeletServer.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
  -new \\
  -key ${o.$.kubeletServer.keyPath} \\
  -out ${o.$.kubeletServer.csrPath} \\
  -config ${o.$.kubeletServer.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -outform PEM \\
    -CA ${o.$.kubernetesCA.crtPath} \\
    -CAkey ${o.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${o.$.kubeletServer.csrPath} \\
    -out ${o.$.kubeletServer.crtPath} \\
    -extensions v3_ext \\
    -extfile ${o.$.kubeletServer.crtConf}
`}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  cat ${o.$.kubeletServer.crtPath} ${o.$.kubeletServer.keyPath} >> ${o.$.kubeletNowServer.crtPath}
  ln -s ${o.$.kubeletNowServer.crtPath} ${o.$.kubeletCurrentServer.crtPath}
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),"\n",(0,s.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:[(0,s.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  ${c.M.kuberneteBaseFolderPath.value}/openssl/cert-report.sh ${o.$.kubeletCurrentServer.crtPath}
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:l.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  admin.conf                 Oct 22, 2025 22:06 UTC   364d            kubernetes                      no
`})})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28702:(e,t,n)=>{n.d(t,{D:()=>c});var r=n(60513),s=n(6353),a=n(7478),o=n(31798);const c={data:{value:r.A`
      apiVersion: kubelet.config.k8s.io/v1beta1
      authentication:
        anonymous:
            enabled: false
        webhook:
            cacheTTL: 0s
            enabled: true
        x509:
          clientCAFile: "${s.$.kubernetesCA.crtPath}"
      authorization:
        mode: Webhook
        webhook:
          cacheAuthorizedTTL: 0s
          cacheUnauthorizedTTL: 0s
      cgroupDriver: systemd
      containerLogMaxSize: "50Mi"
      containerRuntimeEndpoint: "${a.M.criEndpoint.value}"
      cpuManagerReconcilePeriod: 0s
      evictionPressureTransitionPeriod: 5s
      fileCheckFrequency: 0s
      healthzBindAddress: 127.0.0.1
      healthzPort: ${o.h.kubeletHealthz.portNumber}
      httpCheckFrequency: 0s
      imageGCHighThresholdPercent: 55
      imageGCLowThresholdPercent: 50
      imageMaximumGCAge: 0s
      imageMinimumGCAge: 0s
      kind: KubeletConfiguration
      logging:
        flushFrequency: 0
        options:
          json:
            infoBufferSize: "0"
          text:
            infoBufferSize: "0"
        verbosity: 0
      kubeAPIQPS: 50
      kubeAPIBurst: 100
      maxPods: 250
      memorySwap: {}
      nodeStatusReportFrequency: 1s
      nodeStatusUpdateFrequency: 1s
      podPidsLimit: 4096
      registerNode: true
      resolvConf: /run/systemd/resolve/resolv.conf
      rotateCertificates: true
      runtimeRequestTimeout: 0s
      serializeImagePulls: false
      serverTLSBootstrap: true
      shutdownGracePeriod: 15s
      shutdownGracePeriodCriticalPods: 5s
      staticPodPath: ${a.M.kuberneteBaseFolderPath.value}/manifests
      streamingConnectionIdleTimeout: 0s
      syncFrequency: 0s
      tlsMinVersion: "VersionTLS12"
      volumeStatsAggPeriod: 0s
      featureGates:
        RotateKubeletServerCertificate: true
        APIPriorityAndFairness:         true
      tlsCipherSuites:
        - "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256"
        - "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256"
        - "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384"
        - "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384"
        - "TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256"
        - "TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256"
    `}}},31773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig","title":"kubeconfig","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig","permalink":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(6353),c=n(7478),i=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{language:"bash",children:l.A`
  export CLUSTER_NAME="${c.M.clusterName.value}"
  export BASE_DOMAIN="${c.M.kubernetesBaseDomain.value}"
  export CLUSTER_DOMAIN="${c.M.kubernetesClusterDomain.value}"
  export FULL_HOST_NAME="${c.M.virtualMachineFullName.value}"
`}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f Kubeconfig"})}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority="${o.$.kubernetesCA.crtPath}" \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/kubelet.conf

  kubectl config set-credentials system:node:$\{FULL_HOST_NAME} \\
    --client-certificate=${o.$.kubeletClient.crtPath} \\
    --client-key=${o.$.kubeletClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/kubelet.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{FULL_HOST_NAME} \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/kubelet.conf

  kubectl config use-context default \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/kubelet.conf
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 kubeconfig"}),"\n",(0,s.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:[(0,s.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  ${c.M.kuberneteBaseFolderPath.value}/openssl/cert-report.sh ${o.$.kubeletCurrentClient.crtPath}
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:l.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  kubelet-client-current     Oct 22, 2025 22:06 UTC   364d            kubernetes              no
`})})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},31798:(e,t,n)=>{n.d(t,{h:()=>r});const r={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},33901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/adminClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/openssl","permalink":"/tech-docs/kubernetes/certificates/components/admin/adminClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(6353),c=n(7478),i=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/kubeconfig
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${o.$.kubernetesAdminClient.crtConf}
  [ req ]
  default_bits        = ${o.$.kubernetesAdminClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${o.$.kubernetesAdminClient.cname}
  O  = kubeadm:cluster-admins

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0435 \u043a\u043b\u044e\u0447\u0438"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${o.$.kubernetesAdminClient.keyPath} ${o.$.kubernetesAdminClient.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${o.$.kubernetesAdminClient.keyPath} \\
    -out    ${o.$.kubernetesAdminClient.csrPath} \\
    -config ${o.$.kubernetesAdminClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${o.$.kubernetesCA.crtPath} \\
    -CAkey ${o.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${o.$.kubernetesAdminClient.csrPath} \\
    -out ${o.$.kubernetesAdminClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${o.$.kubernetesAdminClient.crtConf}
`})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},34208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/lifecycleSettingsComponent","title":"lifecycleSettingsComponent","description":"\u042d\u0442\u0430\u043f\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubelet/lifecycleSettingsComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/lifecycleSettingsComponent","permalink":"/tech-docs/kubernetes/components/kubelet/lifecycleSettingsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(67332),c=n(9344),i=n(21849);const l={},u=void 0,d={},h=[...c.toc,...o.toc,...i.toc];function m(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Systemd Unit \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,s.jsx)(t.li,{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443 Systemd Unit"}),"\n",(0,s.jsx)(t.li,{children:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u0430\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:[(0,s.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/containerd/lifecycle",children:"Containerd Install"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/runc/lifecycle",children:"Runc Install"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)("h3",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Systemd Unit \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,s.jsx)(c.default,{}),"\n",(0,s.jsx)("h3",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443 Systemd Unit"}),"\n",(0,s.jsx)(o.default,{}),"\n",(0,s.jsx)("h3",{children:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u0430\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,s.jsxs)(n,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Kubelet config"}),(0,s.jsx)(i.default,{})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},34759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig","title":"kubeconfig","description":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f admin","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig","permalink":"/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(6353),c=n(7478),i=n(1775),l=n(60513);const u={},d=void 0,h={},m=[{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f <code>admin</code>",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-admin",level:4}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h4:"h4",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h4,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-admin",children:["\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f ",(0,s.jsx)(t.code,{children:"admin"})]}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority=${o.$.kubernetesCA.crtPath} \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/admin.conf

  kubectl config set-credentials system:node:$\{HOST_NAME} \\
    --client-certificate=${o.$.kubernetesAdminClient.crtPath} \\
    --client-key=${o.$.kubernetesAdminClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/admin.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{HOST_NAME} \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/admin.conf

  kubectl config use-context default \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/admin.conf
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 kubeconfig"}),"\n",(0,s.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:[(0,s.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  ${c.M.kuberneteBaseFolderPath.value}/openssl/cert-report.sh ${c.M.kuberneteBaseFolderPath.value}/admin.conf
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:l.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  admin.conf                 Oct 22, 2025 22:06 UTC   364d            kubernetes                      no
`})})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},35142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/statusBinVersion","title":"statusBinVersion","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/crictl/statusBinVersion.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/statusBinVersion","permalink":"/tech-docs/kubernetes/components/crictl/statusBinVersion","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775);const i={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{language:"bash",children:o.A`
  crictl --version
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:o.A`
  crictl version v1.30.0
`})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},35825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>g,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/scheduler/staticPod","title":"staticPod","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/scheduler/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/scheduler","slug":"/tech-docs/kubernetes/components/scheduler/staticPod","permalink":"/tech-docs/kubernetes/components/scheduler/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(7478),c=n(31798),i=n(63770),l=n(1775),u=n(60513),d=n(85421);const h={},m=void 0,p={},b=[];function k(e){const{Details:t}={...(0,a.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:u.A`
  mkdir -p ${o.M.kuberneteBaseFolderPath.value}/manifests
`}),"\n",(0,s.jsxs)(t,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Static Pod Kube-Schedulerr"}),(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),(0,s.jsx)(l.A,{language:"bash",children:u.A`
  cat <<EOF > ${o.M.kuberneteBaseFolderPath.value}/manifests/kube-scheduler.yaml
  apiVersion: v1
  kind: Pod
  metadata:
    creationTimestamp: null
    labels:
      component: kube-scheduler
      tier: control-plane
    name: kube-scheduler
    namespace: kube-system
  spec:
    containers:
    - command:
      - kube-scheduler
      - --authentication-kubeconfig=${d.w.authenticationKubeconfig.value}
      - --authentication-skip-lookup=${d.w.authenticationSkipLookup.value}
      - --authentication-token-webhook-cache-ttl=${d.w.authenticationTokenWebhookCacheTtl.value}
      - --authentication-tolerate-lookup-failure=${d.w.authenticationTolerateLookupFailure.value}
      - --authorization-always-allow-paths=${d.w.authorizationAlwaysAllowPaths.value}
      - --authorization-kubeconfig=${d.w.authorizationKubeconfig.value}
      - --authorization-webhook-cache-authorized-ttl=${d.w.authorizationWebhookCacheAuthorizedTtl.value}
      - --authorization-webhook-cache-unauthorized-ttl=${d.w.authorizationWebhookCacheUnauthorizedTtl.value}
      - --bind-address=${d.w.bindAddress.value}
      - --client-ca-file=${d.w.clientCaFile.value}
      - --contention-profiling=${d.w.contentionProfiling.value}
      - --help=${d.w.help.value}
      - --http2-max-streams-per-connection=${d.w.http2MaxStreamsPerConnection.value}
      - --kube-api-burst=${d.w.kubeApiBurst.value}
      - --kube-api-content-type=${d.w.kubeApiContentType.value}
      - --kube-api-qps=${d.w.kubeApiQps.value}
      - --kubeconfig=${d.w.kubeconfig.value}
      - --leader-elect=${d.w.leaderElect.value}
      - --leader-elect-lease-duration=${d.w.leaderElectLeaseDuration.value}
      - --leader-elect-renew-deadline=${d.w.leaderElectRenewDeadline.value}
      - --leader-elect-resource-lock=${d.w.leaderElectResourceLock.value}
      - --leader-elect-resource-name=${d.w.leaderElectResourceName.value}
      - --leader-elect-resource-namespace=${d.w.leaderElectResourceNamespace.value}
      - --leader-elect-retry-period=${d.w.leaderElectRetryPeriod.value}
      - --log-flush-frequency=${d.w.logFlushFrequency.value}
      - --log-json-info-buffer-size=${d.w.logJsonInfoBufferSize.value}
      - --log-json-split-stream=${d.w.logJsonSplitStream.value}
      - --log-text-info-buffer-size=${d.w.logTextInfoBufferSize.value}
      - --log-text-split-stream=${d.w.logTextSplitStream.value}
      - --logging-format=${d.w.loggingFormat.value}
      - --permit-address-sharing=${d.w.permitAddressSharing.value}
      - --permit-port-sharing=${d.w.permitPortSharing.value}
      - --pod-max-in-unschedulable-pods-duration=${d.w.podMaxInUnschedulablePodsDuration.value}
      - --profiling=${d.w.profiling.value}
      - --requestheader-extra-headers-prefix=${d.w.requestheaderExtraHeadersPrefix.value}
      - --requestheader-group-headers=${d.w.requestheaderGroupHeaders.value}
      - --requestheader-username-headers=${d.w.requestheaderUsernameHeaders.value}
      - --secure-port=${d.w.securePort.value}
      - --v=${d.w.v.value}
      - --version=${d.w.version.value}
    # - --allow-metric-labels=${d.w.allowMetricLabels.value}
    # - --allow-metric-labels-manifest=${d.w.allowMetricLabelsManifest.value}
    # - --cert-dir=${d.w.certDir.value}
    # - --config=${d.w.config.value}
    # - --disabled-metrics=${d.w.disabledMetrics.value}
    # - --feature-gates=${d.w.featureGates.value}
    # - --master=${d.w.master.value}
    # - --requestheader-allowed-names=${d.w.requestheaderAllowedNames.value}
    # - --requestheader-client-ca-file=${d.w.requestheaderClientCaFile.value}
    # - --show-hidden-metrics-for-version=${d.w.showHiddenMetricsForVersion.value}
    # - --tls-cert-file=${d.w.tlsCertFile.value}
    # - --tls-cipher-suites=${d.w.tlsCipherSuites.value}
    # - --tls-min-version=${d.w.tlsMinVersion.value}
    # - --tls-private-key-file=${d.w.tlsPrivateKeyFile.value}
    # - --tls-sni-cert-key=${d.w.tlsSniCertKey.value}
    # - --vmodule=${d.w.vmodule.value}
    # - --write-config-to=${d.w.writeConfigTo.value}
      image: ${o.M.baseDockerRegistry.value}/kube-scheduler:${i.M.kubernetes.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          path: /healthz
          port: ${c.h.kubeScheduler.portNumber}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      name: kube-scheduler
      resources:
        requests:
          cpu: 100m
      startupProbe:
        failureThreshold: 24
        httpGet:
          path: /healthz
          port: ${c.h.kubeScheduler.portNumber}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      volumeMounts:
      - mountPath: ${o.M.kuberneteBaseFolderPath.value}/scheduler.conf
        name: kubeconfig
        readOnly: true
    hostNetwork: true
    priority: 2000001000
    priorityClassName: system-node-critical
    securityContext:
      seccompProfile:
        type: RuntimeDefault
    volumes:
    - hostPath:
        path: ${o.M.kuberneteBaseFolderPath.value}/scheduler.conf
        type: FileOrCreate
      name: kubeconfig
  status: {}
  EOF
`})]})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},35941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/statusBinVersion","title":"statusBinVersion","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/statusBinVersion.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/statusBinVersion","permalink":"/tech-docs/kubernetes/components/kubeadm/statusBinVersion","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775);const i={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{language:"bash",children:o.A`
  kubeadm version
`}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(c.A,{language:"bash",children:o.A`
  kubeadm version: &version.Info{Major:"1", Minor:"30", GitVersion:"v1.30.4", GitCommit:"a51b3b711150f57ffc1f526a640ec058514ed596", GitTreeState:"clean", BuildDate:"2024-08-14T19:02:46Z", GoVersion:"go1.22.5", Compiler:"gc", Platform:"linux/amd64"}
`})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},36189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdClient/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdClient","slug":"/tech-docs/etcd/certificates/components/etcd/etcdClient/openssl","permalink":"/tech-docs/etcd/certificates/components/etcd/etcdClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(6353),c=n(7478),i=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki/etcd
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
    cat <<EOF > ${o.$.etcdClient.crtConf}
    [ req ]
    default_bits        = ${o.$.etcdClient.keySize}
    prompt              = no
    default_md          = sha256
    distinguished_name  = dn

    [ dn ]
    CN = ${o.$.etcdClient.cname}

    [ v3_ext ]
    authorityKeyIdentifier=keyid,issuer:always
    basicConstraints=CA:FALSE
    keyUsage=keyEncipherment,dataEncipherment
    extendedKeyUsage=clientAuth
    EOF
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
    openssl genrsa \\
        -out ${o.$.etcdClient.keyPath} ${o.$.etcdClient.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
    openssl req \\
      -new \\
      -key ${o.$.etcdClient.keyPath} \\
      -out ${o.$.etcdClient.csrPath} \\
      -config ${o.$.etcdClient.crtConf}
  `}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
    openssl x509 \\
      -req \\
      -days 365 \\
      -sha256 \\
      -CA ${o.$.etcdCA.crtPath} \\
      -CAkey ${o.$.etcdCA.keyPath} \\
      -CAcreateserial \\
      -in ${o.$.etcdClient.csrPath} \\
      -out ${o.$.etcdClient.crtPath} \\
      -extensions v3_ext \\
      -extfile ${o.$.etcdClient.crtConf}
  `})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},36417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>f,frontMatter:()=>m,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/crictl/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/downloadBIN","permalink":"/tech-docs/kubernetes/components/crictl/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(42567),l=n(63770);const u={data:{value:o.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.crictl.value}}"
      REPOSITORY="$\{REPOSITORY:-${i.m.crictl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${i.m.crictl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${i.m.crictl.templateUrlBinCheckSum}"
      INSTALL_PATH="${i.m.crictl.path}"


      LOG_TAG="crictl-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current crictl version..."

      CURRENT_VERSION=$(crictl --version 2>/dev/null | awk '{print $3}') || CURRENT_VERSION="none"

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION"
      logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION" ]]; then
        logger -t "$LOG_TAG" "[INFO] Updating crictl to version $COMPONENT_VERSION..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading crictl..."
        curl -fsSL -o crictl.tar.gz "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download crictl"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o crictl.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        awk '{print $1"  crictl.tar.gz"}' crictl.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Extracting files..."
        tar -C "$TMP_DIR" -xvf crictl.tar.gz

        logger -t "$LOG_TAG" "[INFO] Installing crictl..."
        install -m 755 "$TMP_DIR/crictl" "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] crictl successfully updated to $COMPONENT_VERSION."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] crictl is already up to date. Skipping installation."
      fi
    `}};var d=n(87464),h=n(62774);const m={},p=void 0,b={},k=[];function g(e){return(0,s.jsxs)(h.A,{groupId:"install-type",children:[(0,s.jsxs)(d.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
            mkdir -p /etc/default/crictl
          `}),(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
            cat <<EOF > /etc/default/crictl/download.env
            COMPONENT_VERSION="${l.M.crictl.value}"
            REPOSITORY="${i.m.crictl.baseUrl}"
            EOF
          `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
            cat <<"EOF" > /etc/default/crictl/download-script.sh
            ${u.data.value}
            EOF
          `}),(0,s.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
            chmod +x /etc/default/crictl/download-script.sh
          `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
            cat <<EOF > /usr/lib/systemd/system/crictl-install.service
            [Unit]
            Description=Install and update b-cloud component crictl
            After=network.target
            Wants=network-online.target

            [Service]
            Type=oneshot
            EnvironmentFile=-/etc/default/crictl/download.env
            ExecStart=/bin/bash -c "/etc/default/crictl/download-script.sh"
            RemainAfterExit=yes

            [Install]
            WantedBy=multi-user.target
            EOF
          `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
            systemctl enable crictl-install.service
            systemctl start crictl-install.service
          `})]}),(0,s.jsxs)(d.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
            - path: /etc/default/crictl/download.env
              owner: root:root
              permissions: '0644'
              content: |
                COMPONENT_VERSION="${l.M.crictl.value}"
                REPOSITORY="${i.m.crictl.baseUrl}"
          `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
            - path: /etc/default/crictl/download-script.sh
              owner: root:root
              permissions: '0755'
              content: |
                ${u.data.value}
          `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
            - path: /usr/lib/systemd/system/crictl-install.service
              owner: root:root
              permissions: '0644'
              content: |
                [Unit]
                Description=Install and update b-cloud component crictl
                After=network.target
                Wants=network-online.target

                [Service]
                Type=oneshot
                EnvironmentFile=-/etc/default/crictl/download.env
                ExecStart=/bin/bash -c "/etc/default/crictl/download-script.sh"
                RemainAfterExit=yes

                [Install]
                WantedBy=multi-user.target
          `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
            - systemctl enable crictl-install.service
            - systemctl start crictl-install.service
          `})]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g()}},37796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/scheduler/setupComponent","title":"setupComponent","description":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/kubernetes/components/scheduler/setupComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/scheduler","slug":"/tech-docs/kubernetes/components/scheduler/setupComponent","permalink":"/tech-docs/kubernetes/components/scheduler/setupComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(35825),l=n(50488);const u={},d=void 0,h={},m=[...i.toc,...l.toc];function p(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,s.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(o.A,{value:"HardWay",children:(0,s.jsx)(i.default,{})}),(0,s.jsx)(o.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},38229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubeAPI/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/kubeadm","permalink":"/tech-docs/kubernetes/components/kubeAPI/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(7478),c=n(1775),i=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:i.A`
      kubeadm init phase  control-plane apiserver \\
        --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${o.M.kuberneteBaseFolderPath.value}/super-admin.conf
  `}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:i.A`
      #### Kube API
      [control-plane] Creating static Pod manifest for "apiserver"
  `})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},38230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(6353),c=n(7478),i=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
  mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
`}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${o.$.kubernetesKubeletClient.crtConf}
  [ req ]
  default_bits        = ${o.$.kubernetesKubeletClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${o.$.kubernetesKubeletClient.cname}
  O  = kubeadm:cluster-admins

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
    openssl genrsa \\
      -out ${o.$.kubernetesKubeletClient.keyPath} ${o.$.kubernetesKubeletClient.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${o.$.kubernetesKubeletClient.keyPath} \\
    -out    ${o.$.kubernetesKubeletClient.csrPath} \\
    -config ${o.$.kubernetesKubeletClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${o.$.kubernetesCA.crtPath} \\
    -CAkey ${o.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${o.$.kubernetesKubeletClient.csrPath} \\
    -out ${o.$.kubernetesKubeletClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${o.$.kubernetesKubeletClient.crtConf}
`})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},38541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/statusBinFiles","title":"statusBinFiles","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/crictl/statusBinFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/statusBinFiles","permalink":"/tech-docs/kubernetes/components/crictl/statusBinFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(63770);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{language:"bash",children:o.A`
  journalctl -t crictl-installer
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(c.A,{language:"text",children:o.A`
  ***** [INFO] Checking current crictl version...
  ***** [INFO] Current: none, Target: ${i.M.crictl.value}
  ***** [INFO] Download URL: https://*******
  ***** [INFO] Updating crictl to version ${i.M.crictl.value}...
  ***** [INFO] Working directory: /tmp/tmp.*****
  ***** [INFO] Downloading crictl...
  ***** [INFO] Downloading checksum file...
  ***** [INFO] Verifying checksum...
  ***** [INFO] Installing crictl...
  ***** [INFO] crictl successfully updated to ${i.M.crictl.value}.
`})}),"\n",(0,s.jsx)(c.A,{language:"bash",children:o.A`
  ls -la /usr/local/bin/ | grep 'crictl$'
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:o.A`
  -rwxr-xr-x  1 1001  127  58376628 Apr 18  2024 crictl
`})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},38816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig","title":"kubeconfig","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig","permalink":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(6353),c=n(7478),i=n(1775),l=n(60513);const u={},d=void 0,h={},m=[{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f <code>controller-manager-client</code>",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-controller-manager-client",level:4}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h4:"h4",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{language:"bash",children:l.A`
  export CLUSTER_NAME="${c.M.clusterName.value}"
  export BASE_DOMAIN="${c.M.kubernetesBaseDomain.value}"
  export CLUSTER_DOMAIN="${c.M.kubernetesClusterDomain.value}"
  export FULL_HOST_NAME="${c.M.virtualMachineFullName.value}"
`}),"\n",(0,s.jsxs)(t.h4,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-controller-manager-client",children:["\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f ",(0,s.jsx)(t.code,{children:"controller-manager-client"})]}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority="${o.$.kubernetesCA.crtPath}" \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/controller-manager.conf

  kubectl config set-credentials system:node:$\{FULL_HOST_NAME} \\
    --client-certificate=${o.$.kubernetesControllerManagerClient.crtPath} \\
    --client-key=${o.$.kubernetesControllerManagerClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/controller-manager.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{FULL_HOST_NAME} \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/controller-manager.conf

  kubectl config use-context default \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/controller-manager.conf
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 kubeconfig"}),"\n",(0,s.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:[(0,s.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  ${c.M.kuberneteBaseFolderPath.value}/openssl/cert-report.sh ${c.M.kuberneteBaseFolderPath.value}/controller-manager.conf
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:l.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  controller-manager.conf    Oct 22, 2025 22:06 UTC   364d            kubernetes              no
`})})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},39189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>f,frontMatter:()=>m,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/payload/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/runc/payload/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/runc/payload","slug":"/tech-docs/kubernetes/components/runc/payload/downloadBIN","permalink":"/tech-docs/kubernetes/components/runc/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(42567),l=n(63770);const u={data:{value:o.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.runc.value}}"
      REPOSITORY="$\{REPOSITORY:-https://github.com/opencontainers/runc/releases/download}"
      PATH_BIN="$\{REPOSITORY}/${i.m.runc.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${i.m.runc.templateUrlBinCheckSum}"
      INSTALL_PATH="${i.m.runc.path}"


      LOG_TAG="runc-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current runc version..."

      CURRENT_VERSION=$("$INSTALL_PATH" --version 2>/dev/null | head -n1 | awk '{print $NF}') || CURRENT_VERSION="none"

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION"
      logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"

      if [[ "$CURRENT_VERSION" != "$\{COMPONENT_VERSION#v}" ]]; then
        logger -t "$LOG_TAG" "[INFO] Updating runc to version $COMPONENT_VERSION..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading runc..."
        curl -fsSL -o runc.amd64 "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download runc"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o runc.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        grep "runc.amd64" runc.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Installing runc..."
        install -m 755 runc.amd64 "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] runc successfully updated to $COMPONENT_VERSION."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] runc is already up to date. Skipping installation."
      fi
    `}};var d=n(87464),h=n(62774);const m={},p=void 0,b={},k=[];function g(e){return(0,s.jsxs)(h.A,{groupId:"install-type",children:[(0,s.jsxs)(d.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
      mkdir -p /etc/default/runc
    `}),(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
      cat <<EOF > /etc/default/runc/download.env
      COMPONENT_VERSION="${l.M.runc.value}"
      REPOSITORY="${i.m.runc.baseUrl}"
      EOF
    `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
      cat <<"EOF" > /etc/default/runc/download-script.sh
      ${u.data.value}
      EOF
    `}),(0,s.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
      chmod +x /etc/default/runc/download-script.sh
    `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
      cat <<EOF > /usr/lib/systemd/system/runc-install.service
      [Unit]
      Description=Install and update b-cloud component runc
      After=network.target
      Wants=network-online.target

      [Service]
      Type=oneshot
      EnvironmentFile=-/etc/default/runc/download.env
      ExecStart=/bin/bash -c "/etc/default/runc/download-script.sh"
      RemainAfterExit=yes

      [Install]
      WantedBy=multi-user.target
      EOF
    `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
      systemctl enable runc-install.service
      systemctl start runc-install.service
    `})]}),(0,s.jsxs)(d.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
      - path: /etc/default/runc/download.env
        owner: root:root
        permissions: '0644'
        content: |
          COMPONENT_VERSION="${l.M.runc.value}"
          REPOSITORY="${i.m.runc.baseUrl}"
    `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
      - path: /etc/default/runc/download-script.sh
        owner: root:root
        permissions: '0755'
        content: |
          ${u.data.value}
    `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
      - path: /usr/lib/systemd/system/runc-install.service
        owner: root:root
        permissions: '0644'
        content: |
          [Unit]
          Description=Install and update b-cloud component runc
          After=network.target
          Wants=network-online.target

          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/runc/download.env
          ExecStart=/bin/bash -c "/etc/default/runc/download-script.sh"
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
    `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
      - systemctl enable runc-install.service
      - systemctl start runc-install.service
    `})]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g()}},39990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/statusBinFiles","title":"statusBinFiles","description":"{dedent`","source":"@site/docs/tech-docs/etcd/components/etcd/statusBinFiles.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/statusBinFiles","permalink":"/tech-docs/etcd/components/etcd/statusBinFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(63770);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{language:"bash",children:o.A`
  journalctl -t etcd-installer
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(c.A,{language:"text",children:o.A`
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
`})}),"\n",(0,s.jsx)(c.A,{language:"bash",children:o.A`
  ls -la /usr/local/bin/ | grep 'etcd'
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(c.A,{language:"text",children:o.A`
  -rwxr-xr-x  1 root root  23760896 Mar 29 16:21 etcd
  -rwxr-xr-x  1 root root  17960960 Mar 29 16:21 etcdctl
  -rwxr-xr-x  1 root root  16031744 Mar 29 16:21 etcdutl
`})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},40439:(e,t,n)=>{n.d(t,{Y:()=>a});n(96540);var r=n(53981),s=n(74848);const a=e=>{let{src:t}=e;return(0,s.jsx)(r.l,{options:{Carousel:{infinite:!1}},children:(0,s.jsx)("a",{"data-fancybox":"gallery",href:t,children:(0,s.jsx)("img",{src:t})})})}},41131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","title":"configFilesDefault","description":"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet","source":"@site/docs/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","permalink":"/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(7478),l=n(87464),u=n(62774);const d={},h=void 0,m={},p=[];function b(e){return(0,s.jsxs)(u.A,{groupId:"install-type",children:[(0,s.jsxs)(l.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
      cat <<EOF > ${i.M.kuberneteKubeletFolderPath.value}/config.yaml
      ---
      apiVersion: kubelet.config.k8s.io/v1beta1
      authentication:
        anonymous:
          enabled: false
        webhook:
          cacheTTL: 0s
          enabled: true
        x509:
          clientCAFile: /etc/kubernetes/pki/ca.crt
      authorization:
        mode: Webhook
        webhook:
          cacheAuthorizedTTL: 0s
          cacheUnauthorizedTTL: 0s
      cgroupDriver: systemd
      clusterDNS:
      - 29.64.0.10
      clusterDomain: cluster.local
      containerRuntimeEndpoint: ""
      cpuManagerReconcilePeriod: 0s
      evictionPressureTransitionPeriod: 0s
      fileCheckFrequency: 0s
      healthzBindAddress: 127.0.0.1
      healthzPort: 10248
      httpCheckFrequency: 0s
      imageMaximumGCAge: 0s
      imageMinimumGCAge: 0s
      kind: KubeletConfiguration
      logging:
        flushFrequency: 0
        options:
          json:
            infoBufferSize: "0"
          text:
            infoBufferSize: "0"
        verbosity: 0
      memorySwap: {}
      nodeStatusReportFrequency: 0s
      nodeStatusUpdateFrequency: 0s
      resolvConf: /run/systemd/resolve/resolv.conf
      rotateCertificates: true
      runtimeRequestTimeout: 0s
      shutdownGracePeriod: 0s
      shutdownGracePeriodCriticalPods: 0s
      staticPodPath: /etc/kubernetes/manifests
      streamingConnectionIdleTimeout: 0s
      syncFrequency: 0s
      volumeStatsAggPeriod: 0s
      EOF
    `})]}),(0,s.jsxs)(l.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
      - path: ${i.M.kuberneteKubeletFolderPath.value}/config.yaml
        owner: root:root
        permissions: '0644'
        content: |
          ---
          apiVersion: kubelet.config.k8s.io/v1beta1
          authentication:
            anonymous:
              enabled: false
            webhook:
              cacheTTL: 0s
              enabled: true
            x509:
              clientCAFile: /etc/kubernetes/pki/ca.crt
          authorization:
            mode: Webhook
            webhook:
              cacheAuthorizedTTL: 0s
              cacheUnauthorizedTTL: 0s
          cgroupDriver: systemd
          clusterDNS:
          - 29.64.0.10
          clusterDomain: cluster.local
          containerRuntimeEndpoint: ""
          cpuManagerReconcilePeriod: 0s
          evictionPressureTransitionPeriod: 0s
          fileCheckFrequency: 0s
          healthzBindAddress: 127.0.0.1
          healthzPort: 10248
          httpCheckFrequency: 0s
          imageMaximumGCAge: 0s
          imageMinimumGCAge: 0s
          kind: KubeletConfiguration
          logging:
            flushFrequency: 0
            options:
              json:
                infoBufferSize: "0"
              text:
                infoBufferSize: "0"
            verbosity: 0
          memorySwap: {}
          nodeStatusReportFrequency: 0s
          nodeStatusUpdateFrequency: 0s
          resolvConf: /run/systemd/resolve/resolv.conf
          rotateCertificates: true
          runtimeRequestTimeout: 0s
          shutdownGracePeriod: 0s
          shutdownGracePeriodCriticalPods: 0s
          staticPodPath: /etc/kubernetes/manifests
          streamingConnectionIdleTimeout: 0s
          syncFrequency: 0s
          volumeStatsAggPeriod: 0s
    `})]})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},42267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/dir","title":"dir","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubelet/payload/dir.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/dir","permalink":"/tech-docs/kubernetes/components/kubelet/payload/dir","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775);const i={},l=void 0,u={},d=[];function h(e){return(0,s.jsx)(c.A,{language:"bash",children:o.A`
      mkdir -p /usr/lib/systemd/system/kubelet.service.d
      mkdir -p /var/lib/kubelet/
  `})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h()}},42567:(e,t,n)=>{n.d(t,{m:()=>r});const r={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${COMPONENT_VERSION}/runc.amd64",templateUrlBinCheckSum:"${COMPONENT_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}},42750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var r=n(90725),s=n(74848),a=n(28453);n(31798),n(7478),n(63770),n(84588),n(50730),n(63330),n(22919),n(79827),n(60253),n(61122),n(97836),n(57502),n(65867),n(34208),n(36417),n(58115),n(6847),n(69613),n(19513),n(97373),n(42847),n(2763),n(52672),n(86969),n(44772),n(14592),n(3336),n(80263),n(6783),n(52717),n(59968),n(23202),n(61805),n(47279),n(55609),n(17510),n(67069),n(81970),n(67716),n(68890),n(56721),n(99119),n(97786),n(78647),n(88636),n(24557),n(48506),n(37796),n(84582),n(45936),n(88373),n(67359),n(41131),n(78862),n(92279),n(94761),n(75735),n(80260),n(10815),n(51879),n(89613),n(82e3),n(95640),n(40439),n(87464),n(62774),n(1775);const o={title:"Kubernetes The Hard Way",date:new Date("2025-03-23T00:00:00.000Z"),slug:"kubernetes-the-hard-way",authors:[{name:"\u041f\u0443\u0442\u0438\u043b\u0438\u043d \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u041b\u044c\u0432\u043e\u0432\u0438\u0447",title:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u043e\u0440",url:"https://t.me/bezumniy_kot_work",image_url:"https://avatars.githubusercontent.com/u/107264732?v=4",socials:{github:"FR-Solution"}}],tags:["Kubernetes","Hard-Way"]},c=void 0,i={authorsImageUrls:[void 0]},l=[];function u(e){const t={p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:(0,s.jsxs)(t.p,{children:["Kubernetes The Hard Way ",(0,s.jsx)("span",{style:{color:"#1cc5ac"},children:"#"})]})}),"\n",(0,s.jsx)("p",{style:{fontStyle:"italic",fontWeight:600},children:"\u0412\u043e\u0437\u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u043c \u0441\u0435\u0440\u0438\u044e \u0441\u0442\u0430\u0442\u0435\u0439 \u043f\u043e Kubernetes \u0432 \u043d\u043e\u0432\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435."}),"\n",(0,s.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"flex-start",gap:"30px",marginTop:"1.5rem"},children:[(0,s.jsxs)("div",{style:{flex:"1 1 55%",minWidth:"280px"},children:[(0,s.jsx)("p",{children:(0,s.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u0430\u044f \u0441\u0442\u0430\u0442\u044c\u044f \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043e\u0431\u0449\u0438\u0439 \u043e\u043f\u044b\u0442 \u0440\u0443\u0447\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u044f Kubernetes \u0431\u0435\u0437\n\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\n",(0,s.jsx)("code",{children:"kubeadm"}),". \u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u0441\u043e\u0433\u043b\u0430\u0441\u0443\u0435\u0442\u0441\u044f \u0441 \u043d\u0430\u0448\u0435\u0439\n\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043c\u044b \u0432\u0435\u0434\u0451\u043c \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u043b\u0443\u0447\u0448\u0438\u043c \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430\u043c \u0438\n\u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f\u043c ",(0,s.jsx)("code",{children:"IAC"}),"."]})}),(0,s.jsx)("p",{children:(0,s.jsxs)(t.p,{children:["\u0412\u0441\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f, \u043f\u0440\u0438\u0432\u0435\u0434\u0451\u043d\u043d\u0430\u044f \u0434\u0430\u043b\u0435\u0435, \u0432 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0435\u0442 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\n",(0,s.jsx)("code",{children:"kubeadm"}),". \u0412 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0438\u0442\u043e\u0433\u043e\u0432\u044b\u0439 \u043a\u043b\u0430\u0441\u0442\u0435\u0440 \u0441\u043b\u043e\u0436\u043d\u043e \u043e\u0442\u043b\u0438\u0447\u0438\u0442\u044c \u2014 \u0441\u043e\u0431\u0440\u0430\u043d\n\u043b\u0438 \u043e\u043d \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,s.jsx)("code",{children:"kubeadm"})," \u0438\u043b\u0438 \u0432\u0440\u0443\u0447\u043d\u0443\u044e."]})})]}),(0,s.jsx)("div",{style:{flex:"1 1 40%",minWidth:"220px",textAlign:"center",marginTop:"-6rem"},children:(0,s.jsx)("img",{src:"/img/commics/monkey-user/k8s.png",alt:"commics",style:{width:"90%",maxWidth:"330px",filter:"drop-shadow(0 0 12px rgba(255, 255, 255, 0.2))",transition:"transform 0.3s ease-in-out"}})})]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},42847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>f,frontMatter:()=>m,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/etcd/components/etcd/downloadBIN.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/downloadBIN","permalink":"/tech-docs/etcd/components/etcd/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(42567),l=n(63770);const u={data:{value:o.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.etcdctl.value}}"
      REPOSITORY="$\{REPOSITORY:-${i.m.etcdctl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${i.m.etcdctl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${i.m.etcdctl.templateUrlBinCheckSum}"
      INSTALL_PATH="${i.m.etcdctl.path}"


      LOG_TAG="etcd-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current etcd version..."

      CURRENT_VERSION=$(etcd --version 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION"
      logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION" ]]; then
        logger -t "$LOG_TAG" "[INFO] Updating etcd to version $COMPONENT_VERSION..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading etcd..."
        curl -fsSL -o "etcd-$\{COMPONENT_VERSION}-linux-amd64.tar.gz" "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download etcd"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o "etcd.sha256sum" "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        grep "etcd-$\{COMPONENT_VERSION}-linux-amd64.tar.gz" etcd.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Extracting files..."
        tar -C "$TMP_DIR" -xvf "etcd-$\{COMPONENT_VERSION}-linux-amd64.tar.gz"

        logger -t "$LOG_TAG" "[INFO] Installing binaries..."
        install -m 755 "$TMP_DIR/etcd-$\{COMPONENT_VERSION}-linux-amd64/etcd" $INSTALL_PATH
        install -m 755 "$TMP_DIR/etcd-$\{COMPONENT_VERSION}-linux-amd64/etcdctl" $INSTALL_PATH
        install -m 755 "$TMP_DIR/etcd-$\{COMPONENT_VERSION}-linux-amd64/etcdutl" $INSTALL_PATH

        logger -t "$LOG_TAG" "[INFO] etcd successfully updated to $COMPONENT_VERSION."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] etcd is already up to date. Skipping installation."
      fi
    `}};var d=n(87464),h=n(62774);const m={},p=void 0,b={},k=[];function g(e){return(0,s.jsxs)(h.A,{groupId:"install-type",children:[(0,s.jsxs)(d.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
            mkdir -p /etc/default/etcd
          `}),(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
            cat <<EOF > /etc/default/etcd/download.env
            COMPONENT_VERSION="${l.M.etcdctl.value}"
            REPOSITORY="${i.m.etcdctl.baseUrl}"
            EOF
          `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
            cat <<"EOF" > /etc/default/etcd/download-script.sh
            ${u.data.value}
            EOF
          `}),(0,s.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
            chmod +x /etc/default/etcd/download-script.sh
          `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
            cat <<EOF > /usr/lib/systemd/system/etcd-install.service
            [Unit]
            Description=Install and update b-cloud component etcd
            After=network.target
            Wants=network-online.target

            [Service]
            Type=oneshot
            EnvironmentFile=-/etc/default/etcd/download.env
            ExecStart=/bin/bash -c "/etc/default/etcd/download-script.sh"
            RemainAfterExit=yes

            [Install]
            WantedBy=multi-user.target
            EOF
          `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
          systemctl enable etcd-install.service
          systemctl start etcd-install.service
        `})]}),(0,s.jsxs)(d.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
            #write_files:
            - path: /etc/default/etcd/download.env
              owner: root:root
              permissions: '0644'
              content: |
                COMPONENT_VERSION="${l.M.etcdctl.value}"
                REPOSITORY="${i.m.etcdctl.baseUrl}"
          `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
            - path: /etc/default/etcd/download-script.sh
              owner: root:root
              permissions: '0755'
              content: |
                ${u.data.value}
          `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
            - path: /usr/lib/systemd/system/etcd-install.service
              owner: root:root
              permissions: '0644'
              content: |
                [Unit]
                Description=Install and update b-cloud component etcd
                After=network.target
                Wants=network-online.target

                [Service]
                Type=oneshot
                EnvironmentFile=-/etc/default/etcd/download.env
                ExecStart=/bin/bash -c "/etc/default/etcd/download-script.sh"
                RemainAfterExit=yes

                [Install]
                WantedBy=multi-user.target
          `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
          - systemctl enable etcd-install.service
          - systemctl start etcd-install.service
        `})]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g()}},44772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/dir","title":"dir","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/dir.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/dir","permalink":"/tech-docs/kubernetes/components/kubeadm/dir","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775);const i={},l=void 0,u={},d=[];function h(e){return(0,s.jsx)(c.A,{language:"bash",children:o.A`
  mkdir -p /var/run/kubeadm/
`})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h()}},45936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartInit","title":"systemdUnitStartInit","description":"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0438\u0441 Kubelet \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0444\u0430\u0437\u044b \u0443\u0442\u0438\u043b\u0438\u0442\u044b Kubeadm.","source":"@site/docs/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartInit.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/kubeadm","slug":"/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartInit","permalink":"/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartInit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(7478);const l={},u=void 0,d={},h=[];function m(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0438\u0441 Kubelet \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0444\u0430\u0437\u044b \u0443\u0442\u0438\u043b\u0438\u0442\u044b Kubeadm."}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:[(0,s.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/kubeadm/lifecycle-settings",children:"Kubeadm Configs"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)("h4",{children:"\u0417\u0430\u043f\u0443\u0441\u043a kubelet"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:o.A`
  kubeadm init phase kubelet-start \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:o.A`
  [kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
  [kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
  [kubelet-start] Starting the kubelet
`})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},46567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdServer/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdServer/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdServer/openssl","permalink":"/tech-docs/etcd/certificates/components/etcd/etcdServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(6353),c=n(7478),i=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  export CLUSTER_NAME=${c.M.clusterName.value}
  export BASE_DOMAIN=${c.M.kubernetesBaseDomain.value}
  export FULL_HOST_NAME=${c.M.virtualMachineFullName.value}
  export MACHINE_LOCAL_ADDRESS=${c.M.virtualMachineLocalAddress.value}
`}),"\n",(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
  mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
`}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${o.$.etcdServer.crtConf}
  [ req ]
  default_bits        = ${o.$.etcdServer.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn
  req_extensions      = req_ext

  [ req_ext ]
  subjectAltName = @alt_names

  [ alt_names ]
  DNS.1 = localhost
  DNS.2 = $\{HOST_NAME}
  DNS.3 = $\{FULL_HOST_NAME}
  IP.1  = 127.0.0.1
  IP.2  = 0:0:0:0:0:0:0:1
  IP.3  = $\{MACHINE_LOCAL_ADDRESS}

  [ dn ]
  CN = $\{FULL_HOST_NAME}

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=serverAuth,clientAuth
  subjectAltName=@alt_names
  EOF
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${o.$.etcdServer.keyPath} ${o.$.etcdServer.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${o.$.etcdServer.keyPath} \\
    -out ${o.$.etcdServer.csrPath} \\
    -config ${o.$.etcdServer.crtConf}
  `}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${o.$.etcdCA.crtPath} \\
    -CAkey ${o.$.etcdCA.keyPath} \\
    -CAcreateserial \\
    -in ${o.$.etcdServer.csrPath} \\
    -out ${o.$.etcdServer.crtPath} \\
    -extensions v3_ext \\
    -extfile ${o.$.etcdServer.crtConf}
  `})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},47174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA","slug":"/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/openssl","permalink":"/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(6353),c=n(7478),i=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl
  mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
`}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${o.$.kubernetesCA.crtConf}
  [req]
  distinguished_name = req_distinguished_name
  x509_extensions    = v3_ca
  prompt             = no

  [req_distinguished_name]
  CN = ${o.$.kubernetesCA.cname}

  [v3_ca]
  keyUsage = critical, keyCertSign, keyEncipherment, digitalSignature
  basicConstraints = critical,CA:TRUE
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${o.$.kubernetesCA.keyPath} ${o.$.kubernetesCA.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -x509 \\
    -new \\
    -nodes \\
    -key ${o.$.kubernetesCA.keyPath} \\
    -sha256 \\
    -days 3650 \\
    -out ${o.$.kubernetesCA.crtPath} \\
    -config ${o.$.kubernetesCA.crtConf}
`})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},47279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(66832),l=n(51835);const u={},d=void 0,h={},m=[...i.toc,...l.toc];function p(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(o.A,{value:"HardWay",children:(0,s.jsx)(i.default,{})}),(0,s.jsx)(o.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},47442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeadm","permalink":"/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(7478),c=n(1775),i=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase kubeconfig admin \\
    --config=${o.M.kuberneteBaseFolderPath.value}/kubeadm.yaml
  `}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [kubeconfig] Writing "admin.conf" kubeconfig file
  `})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},48506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/setupComponent","title":"setupComponent","description":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/setupComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/setupComponent","permalink":"/tech-docs/kubernetes/components/controllerManager/setupComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(85631),l=n(4898);const u={},d=void 0,h={},m=[...i.toc,...l.toc];function p(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,s.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(o.A,{value:"HardWay",children:(0,s.jsx)(i.default,{})}),(0,s.jsx)(o.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},49717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdServer/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdServer/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdServer/kubeadm","permalink":"/tech-docs/etcd/certificates/components/etcd/etcdServer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(7478),c=n(1775),i=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase certs etcd-server \\
    --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [certs] Generating "etcd/server" certificate and key
  [certs] etcd/server serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com] and IPs [192.168.10.27 127.0.0.1 ::1]
`})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},50488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/scheduler/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/scheduler/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/scheduler","slug":"/tech-docs/kubernetes/components/scheduler/kubeadm","permalink":"/tech-docs/kubernetes/components/scheduler/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(7478),c=n(1775),i=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:i.A`
      kubeadm init phase  control-plane scheduler \\
        --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${o.M.kuberneteBaseFolderPath.value}/super-admin.conf
  `}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:i.A`
      #### Kube API
      [control-plane] Creating static Pod manifest for "kube-scheduler"
  `})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},50730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/containerd/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/lifecycleDownloadComponent","permalink":"/tech-docs/kubernetes/components/containerd/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(61176);const c={},i=void 0,l={},u=[...o.toc];function d(e){const t={li:"li",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,s.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,s.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,s.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,s.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,s.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n"]}),"\n",(0,s.jsx)(o.default,{})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},51835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(7478),c=n(1775),i=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase certs apiserver \\
    --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [certs] Generating "apiserver" certificate and key
  [certs] apiserver serving cert is signed for DNS names [api.my-first-cluster.example.com kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local master-1.my-first-cluster.example.com] and IPs [29.64.0.1 10.0.0.16]
`})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},51879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>g,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/setupEnvironments/baseOSSetupComponent","title":"baseOSSetupComponent","description":"\u0411\u0430\u0437\u043e\u0432\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u0437\u043b\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/setupEnvironments/baseOSSetupComponent.mdx","sourceDirName":"tech-docs/kubernetes/setupEnvironments","slug":"/tech-docs/kubernetes/setupEnvironments/baseOSSetupComponent","permalink":"/tech-docs/kubernetes/setupEnvironments/baseOSSetupComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(7478),c=n(84588),i=n(87464),l=n(62774),u=n(1775),d=n(60513);const h={},m=void 0,p={},b=[{value:"\u0411\u0430\u0437\u043e\u0432\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u0437\u043b\u043e\u0432",id:"\u0431\u0430\u0437\u043e\u0432\u044b\u0435-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438-\u0443\u0437\u043b\u043e\u0432",level:4},{value:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0443\u0437\u043b\u0430",id:"\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435-\u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f-\u0443\u0437\u043b\u0430",level:4},...c.toc,{value:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0438\u043c\u0435\u043d\u0438 \u0443\u0437\u043b\u0430",id:"\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u0438\u043c\u0435\u043d\u0438-\u0443\u0437\u043b\u0430",level:4},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439",level:4}];function k(e){const t={h4:"h4",li:"li",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h4,{id:"\u0431\u0430\u0437\u043e\u0432\u044b\u0435-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438-\u0443\u0437\u043b\u043e\u0432",children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u0437\u043b\u043e\u0432"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0443\u0437\u043b\u0430."}),"\n",(0,s.jsx)(t.li,{children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0438\u043c\u0435\u043d\u0438 \u0443\u0437\u043b\u0430."}),"\n",(0,s.jsx)(t.li,{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439."}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435-\u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f-\u0443\u0437\u043b\u0430",children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0443\u0437\u043b\u0430"}),"\n",(0,s.jsx)(c.default,{}),"\n",(0,s.jsx)(u.A,{language:"bash",children:d.A`
  export CLUSTER_NAME="${o.M.clusterName.value}"
  export BASE_DOMAIN="${o.M.kubernetesBaseDomain.value}"
  export CLUSTER_DOMAIN="${o.M.kubernetesClusterDomain.value}"
  export FULL_HOST_NAME="${o.M.virtualMachineFullName.value}"
`}),"\n",(0,s.jsx)(t.h4,{id:"\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u0438\u043c\u0435\u043d\u0438-\u0443\u0437\u043b\u0430",children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0438\u043c\u0435\u043d\u0438 \u0443\u0437\u043b\u0430"}),"\n",(0,s.jsx)(u.A,{language:"bash",children:d.A`
  hostnamectl set-hostname $\{FULL_HOST_NAME}
`}),"\n",(0,s.jsx)(t.h4,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439"}),"\n",(0,s.jsxs)(l.A,{groupId:"install-pkg",children:[(0,s.jsx)(i.A,{value:"apt",children:(0,s.jsx)(u.A,{language:"bash",children:d.A`
        sudo apt update
        sudo apt install conntrack socat
      `})}),(0,s.jsx)(i.A,{value:"yum",children:(0,s.jsx)(u.A,{language:"bash",children:d.A`
        sudo yum update
        sudo yum install conntrack-tools socat
      `})}),(0,s.jsx)(i.A,{value:"dnf",children:(0,s.jsx)(u.A,{language:"bash",children:d.A`
        sudo dnf update
        sudo dnf install conntrack-tools socat
      `})})]})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},52672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/configFiles","title":"configFiles","description":"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430","source":"@site/docs/tech-docs/kubernetes/components/crictl/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/configFiles","permalink":"/tech-docs/kubernetes/components/crictl/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(7478),l=n(87464),u=n(62774);const d={},h=void 0,m={},p=[];function b(e){return(0,s.jsxs)(u.A,{groupId:"install-type",children:[(0,s.jsxs)(l.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
            cat <<"EOF" > /etc/crictl.yaml
            runtime-endpoint: unix://${i.M.criEndpoint.value}
            EOF
          `})]}),(0,s.jsxs)(l.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
            - path: /etc/crictl.yaml
              owner: root:root
              permissions: '0644'
              content: |
                runtime-endpoint: unix://${i.M.criEndpoint.value}
          `})]})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},52717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main","permalink":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(27590);const l={},u=void 0,d={},h=[...i.toc];function m(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(o.A,{value:"HardWay",children:(0,s.jsx)(i.default,{})}),(0,s.jsx)(o.A,{value:"Kubeadm"})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},53981:(e,t,n)=>{n.d(t,{l:()=>o});var r=n(96540),s=n(60197),a=n(74848);const o=e=>{let{delegate:t,options:n,children:o}=e;const c=(0,r.useRef)(null);return(0,r.useEffect)((()=>{const e=c.current,r=t||"[data-fancybox]",a=n||{};return s.lX.bind(e,r,a),()=>{s.lX.unbind(e),s.lX.close()}})),(0,a.jsx)("div",{ref:c,children:o})}},53982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/lifecycleDownloadStatus","title":"lifecycleDownloadStatus","description":"\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b","source":"@site/docs/tech-docs/kubernetes/components/runc/lifecycleDownloadStatus.mdx","sourceDirName":"tech-docs/kubernetes/components/runc","slug":"/tech-docs/kubernetes/components/runc/lifecycleDownloadStatus","permalink":"/tech-docs/kubernetes/components/runc/lifecycleDownloadStatus","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(4391),c=n(4547);const i={},l=void 0,u={},d=[...o.toc,...c.toc];function h(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b"}),"\n",(0,s.jsx)(o.default,{}),"\n",(0,s.jsx)("h3",{children:"\u0412\u0435\u0440\u0441\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),"\n",(0,s.jsx)(c.default,{})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h()}},55609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdClient/main","title":"main","description":"","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdClient/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdClient","slug":"/tech-docs/etcd/certificates/components/etcd/etcdClient/main","permalink":"/tech-docs/etcd/certificates/components/etcd/etcdClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(36189),l=n(80614);const u={},d=void 0,h={},m=[...i.toc,...l.toc];function p(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(o.A,{value:"HardWay",children:(0,s.jsx)(i.default,{})}),(0,s.jsx)(o.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},56201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checks/statusBinFiles","title":"statusBinFiles","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubelet/checks/statusBinFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/checks","slug":"/tech-docs/kubernetes/components/kubelet/checks/statusBinFiles","permalink":"/tech-docs/kubernetes/components/kubelet/checks/statusBinFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(63770);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{language:"bash",children:o.A`
  journalctl -t kubelet-installer
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(c.A,{language:"text",children:o.A`
  ***** [INFO] Checking current kubelet version...
  ***** [INFO] Current: none, Target: ${i.M.kubernetes.value}
  ***** [INFO] Download URL: https://*******
  ***** [INFO] Updating kubelet to version ${i.M.kubernetes.value}...
  ***** [INFO] Working directory: /tmp/tmp.*****
  ***** [INFO] Downloading kubelet...
  ***** [INFO] Downloading checksum file...
  ***** [INFO] Verifying checksum...
  ***** [INFO] Installing kubelet...
  ***** [INFO] kubelet successfully updated to ${i.M.kubernetes.value}.
`})}),"\n",(0,s.jsx)(c.A,{language:"bash",children:o.A`
  ls -la /usr/local/bin/ | grep 'kubelet$'
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:o.A`
  -rwxr-xr-x  1 root root 100125080 Aug 14  2024 kubelet
`})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},56721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/superAdminClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/main","permalink":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(16812),l=n(79971),u=n(87935);const d={},h=void 0,m={},p=[...i.toc,...u.toc,...l.toc];function b(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsxs)(o.A,{value:"HardWay",children:[(0,s.jsx)(i.default,{}),(0,s.jsx)(u.default,{})]}),(0,s.jsx)(o.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},56960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit","title":"setupSystemdUnit","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/payload","slug":"/tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit","permalink":"/tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(87464),l=n(62774);const u={},d=void 0,h={},m=[];function p(e){return(0,s.jsxs)(l.A,{groupId:"install-type",children:[(0,s.jsx)(i.A,{value:"Bash",children:(0,s.jsx)(c.A,{language:"bash",children:o.A`
      cat <<EOF > /usr/lib/systemd/system/containerd.service
      [Unit]
      Description=containerd container runtime
      Documentation=https://containerd.io
      After=network.target local-fs.target containerd-install.service runc-install.service
      Wants=containerd-install.service runc-install.service

      [Service]
      ExecStartPre=-/sbin/modprobe overlay
      ExecStart=/usr/local/bin/containerd

      Type=notify
      Delegate=yes
      KillMode=process
      Restart=always
      RestartSec=5
      LimitNPROC=infinity
      LimitCORE=infinity
      LimitNOFILE=infinity
      TasksMax=infinity
      OOMScoreAdjust=-999

      [Install]
      WantedBy=multi-user.target
      EOF
    `})}),(0,s.jsx)(i.A,{value:"Cloud-init",children:(0,s.jsx)(c.A,{language:"yaml",children:o.A`
        - path: /usr/lib/systemd/system/containerd.service
          owner: root:root
          permissions: '0644'
          content: |
            [Unit]
            Description=containerd container runtime
            Documentation=https://containerd.io
            After=network.target local-fs.target containerd-install.service runc-install.service
            Wants=containerd-install.service runc-install.service

            [Service]
            ExecStartPre=-/sbin/modprobe overlay
            ExecStart=/usr/local/bin/containerd

            Type=notify
            Delegate=yes
            KillMode=process
            Restart=always
            RestartSec=5
            LimitNPROC=infinity
            LimitCORE=infinity
            LimitNOFILE=infinity
            TasksMax=infinity
            OOMScoreAdjust=-999

            [Install]
            WantedBy=multi-user.target
      `})})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},57502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checkBIN","title":"checkBIN","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/kubelet/checkBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/checkBIN","permalink":"/tech-docs/kubernetes/components/kubelet/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(74823),c=n(56201);const i={},l=void 0,u={},d=[...c.toc,...o.toc];function h(e){const{Details:t}={...(0,a.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,s.jsx)(c.default,{}),(0,s.jsx)(o.default,{})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},58115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/checkBIN","title":"checkBIN","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/crictl/checkBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/checkBIN","permalink":"/tech-docs/kubernetes/components/crictl/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(35142),c=n(38541);const i={},l=void 0,u={},d=[...c.toc,...o.toc];function h(e){const{Details:t}={...(0,a.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,s.jsx)(c.default,{}),(0,s.jsx)(o.default,{})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},59161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubectl/statusBinVersion","title":"statusBinVersion","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubectl/statusBinVersion.mdx","sourceDirName":"tech-docs/kubernetes/components/kubectl","slug":"/tech-docs/kubernetes/components/kubectl/statusBinVersion","permalink":"/tech-docs/kubernetes/components/kubectl/statusBinVersion","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775);const i={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{language:"bash",children:o.A`
  kubectl  version
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:o.A`
  Client Version: v1.30.4
  Kustomize Version: v5.0.4-0.20230601165947-6ce0bf390ce3
`})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},59968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(74279),l=n(74124);const u={},d=void 0,h={},m=[...i.toc,...l.toc];function p(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(o.A,{value:"HardWay",children:(0,s.jsx)(i.default,{})}),(0,s.jsx)(o.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},60145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA","slug":"/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/kubeadm","permalink":"/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(7478),c=n(1775),i=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase certs front-proxy-ca \\
    --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
  #### Create Front Proxy CA
  [certs] Generating "front-proxy-ca" certificate and key
`})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},60253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/runc/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/runc","slug":"/tech-docs/kubernetes/components/runc/lifecycleDownloadComponent","permalink":"/tech-docs/kubernetes/components/runc/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(39189);const c={},i=void 0,l={},u=[...o.toc];function d(e){const t={li:"li",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,s.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,s.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,s.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,s.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,s.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n"]}),"\n",(0,s.jsx)(o.default,{})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},61122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/checkBIN","title":"checkBIN","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/runc/checkBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/runc","slug":"/tech-docs/kubernetes/components/runc/checkBIN","permalink":"/tech-docs/kubernetes/components/runc/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(53982);const c={},i=void 0,l={},u=[...o.toc];function d(e){const{Details:t}={...(0,a.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,s.jsx)(o.default,{})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},61176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>f,frontMatter:()=>m,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/payload/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/containerd/payload/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/payload","slug":"/tech-docs/kubernetes/components/containerd/payload/downloadBIN","permalink":"/tech-docs/kubernetes/components/containerd/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(42567),l=n(63770);const u={data:{value:o.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.containerd.value}}"
      REPOSITORY="$\{REPOSITORY:-${i.m.containerd.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${i.m.containerd.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${i.m.containerd.templateUrlBinCheckSum}"
      INSTALL_PATH="${i.m.containerd.path}"


      LOG_TAG="containerd-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current containerd version..."

      CURRENT_VERSION=$(containerd --version 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION"
      logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION" ]]; then
        logger -t "$LOG_TAG" "[INFO] Updating containerd to version $COMPONENT_VERSION..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading containerd..."
        curl -fsSL -o "containerd-$\{COMPONENT_VERSION}-linux-amd64.tar.gz" "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download containerd"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o "containerd.sha256sum" "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        sha256sum -c containerd.sha256sum | grep 'OK' || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Extracting files..."
        tar -C "$TMP_DIR" -xvf "containerd-$\{COMPONENT_VERSION}-linux-amd64.tar.gz"

        logger -t "$LOG_TAG" "[INFO] Installing binaries..."
        install -m 755 "$TMP_DIR/bin/containerd" $INSTALL_PATH
        install -m 755 "$TMP_DIR/bin/containerd-shim"* $INSTALL_PATH
        install -m 755 "$TMP_DIR/bin/ctr" $INSTALL_PATH

        logger -t "$LOG_TAG" "[INFO] Containerd successfully updated to $COMPONENT_VERSION."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] Containerd is already up to date. Skipping installation."
      fi
    `}};var d=n(87464),h=n(62774);const m={},p=void 0,b={},k=[];function g(e){return(0,s.jsxs)(h.A,{groupId:"install-type",children:[(0,s.jsxs)(d.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
        mkdir -p /etc/default/containerd
      `}),(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
        cat <<EOF > /etc/default/containerd/download.env
        COMPONENT_VERSION="${l.M.containerd.value}"
        REPOSITORY="${i.m.containerd.baseUrl}"
        EOF
      `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
        cat <<"EOF" > /etc/default/containerd/download-script.sh
        ${u.data.value}
        EOF
      `}),(0,s.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
        chmod +x /etc/default/containerd/download-script.sh
      `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
        cat <<EOF > /usr/lib/systemd/system/containerd-install.service
        [Unit]
        Description=Install and update b-cloud component containerd
        After=network.target
        Wants=network-online.target

        [Service]
        Type=oneshot
        EnvironmentFile=-/etc/default/containerd/download.env
        ExecStart=/bin/bash -c "/etc/default/containerd/download-script.sh"
        RemainAfterExit=yes

        [Install]
        WantedBy=multi-user.target
        EOF
      `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
        systemctl enable containerd-install.service
        systemctl start containerd-install.service
      `})]}),(0,s.jsxs)(d.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
      - path: /etc/default/containerd/download.env
        owner: root:root
        permissions: '0644'
        content: |
          COMPONENT_VERSION="${l.M.containerd.value}"
          REPOSITORY="${i.m.containerd.baseUrl}"
    `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
      - path: /etc/default/containerd/download-script.sh
        owner: root:root
        permissions: '0755'
        content: |
          ${u.data.value}
    `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
      - path: /usr/lib/systemd/system/containerd-install.service
        owner: root:root
        permissions: '0644'
        content: |
          [Unit]
          Description=Install and update b-cloud component containerd
          After=network.target
          Wants=network-online.target

          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/containerd/download.env
          ExecStart=/bin/bash -c "/etc/default/containerd/download-script.sh"
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
    `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
      - systemctl enable containerd-install.service
      - systemctl start containerd-install.service
    `})]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g()}},61805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(11321),l=n(18727);const u={},d=void 0,h={},m=[...i.toc,...l.toc];function p(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(o.A,{value:"HardWay",children:(0,s.jsx)(i.default,{})}),(0,s.jsx)(o.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},62376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(6353),c=n(7478),i=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
  mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
`}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${o.$.kubernetesSchedulerClient.crtConf}
  [ req ]
  default_bits        = ${o.$.kubernetesSchedulerClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${o.$.kubernetesSchedulerClient.cname}

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${o.$.kubernetesSchedulerClient.keyPath} ${o.$.kubernetesSchedulerClient.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${o.$.kubernetesSchedulerClient.keyPath} \\
    -out ${o.$.kubernetesSchedulerClient.csrPath} \\
    -config ${o.$.kubernetesSchedulerClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -outform PEM \\
    -CA ${o.$.kubernetesCA.crtPath} \\
    -CAkey ${o.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${o.$.kubernetesSchedulerClient.csrPath} \\
    -out ${o.$.kubernetesSchedulerClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${o.$.kubernetesSchedulerClient.crtConf}
`})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},62774:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),s=n(34164),a=n(65627),o=n(56347),c=n(50372),i=n(30604),l=n(11861),u=n(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[l,d]=p({queryString:n,groupId:s}),[b,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),g=(()=>{const e=l??b;return m({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),k(e)}),[d,k,a]),tabValues:a}}var k=n(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),s=c[n].value;s!==r&&(l(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{i.push(e)},onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function A(e){const t=b(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,f.jsx)(v,{...t,...e}),(0,f.jsx)(x,{...t,...e})]})}function y(e){const t=(0,k.A)();return(0,f.jsx)(A,{...e,children:d(e.children)},String(t))}},63217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/checks/statusBinFiles","title":"statusBinFiles","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/checks/statusBinFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/checks","slug":"/tech-docs/kubernetes/components/containerd/checks/statusBinFiles","permalink":"/tech-docs/kubernetes/components/containerd/checks/statusBinFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(63770);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{language:"bash",children:o.A`
  journalctl -t containerd-installer
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(c.A,{language:"text",children:o.A`
  ***** [INFO] Checking current containerd version...
  ***** [INFO] Current: none, Target: ${i.M.containerd.value}
  ***** [INFO] Download URL: https://*******
  ***** [INFO] Updating containerd to version ${i.M.containerd.value}...
  ***** [INFO] Working directory: /tmp/tmp.*****
  ***** [INFO] Downloading containerd...
  ***** [INFO] Downloading checksum file...
  ***** [INFO] Verifying checksum...
  ***** [INFO] Extracting files...
  ***** [INFO] Installing binaries...
  ***** [INFO] Containerd successfully updated to ${i.M.containerd.value}.
`})}),"\n",(0,s.jsx)(c.A,{language:"bash",children:o.A`
  ls -la /usr/local/bin/ | grep -E "containerd|ctr"
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:o.A`
  -rwxr-xr-x  1 root root  54855296 Feb 18 15:12 containerd
  -rwxr-xr-x  1 root root   7176192 Feb 18 15:12 containerd-shim
  -rwxr-xr-x  1 root root   8884224 Feb 18 15:12 containerd-shim-containerd-v1
  -rwxr-xr-x  1 root root  12169216 Feb 18 15:12 containerd-shim-containerd-v2
  -rwxr-xr-x  1 root root  12169216 Feb 18 15:12 ctr
`})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},63330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/checkBIN","title":"checkBIN","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/containerd/checkBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/checkBIN","permalink":"/tech-docs/kubernetes/components/containerd/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(5064);const c={},i=void 0,l={},u=[...o.toc];function d(e){const{Details:t}={...(0,a.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,s.jsx)(o.default,{})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},63770:(e,t,n)=>{n.d(t,{M:()=>r});const r={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},63859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checks/statusConfigFiles","title":"statusConfigFiles","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Kubeadm \u0431\u0435\u0437 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 kubeadm init \u0438\u043b\u0438 kubeadm join, \u0444\u0430\u0439\u043b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 Kubelet (/var/lib/kubelet/config.yaml) \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d.","source":"@site/docs/tech-docs/kubernetes/components/kubelet/checks/statusConfigFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/checks","slug":"/tech-docs/kubernetes/components/kubelet/checks/statusConfigFiles","permalink":"/tech-docs/kubernetes/components/kubelet/checks/statusConfigFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775);const i={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Kubeadm"})})," \u0431\u0435\u0437 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 ",(0,s.jsx)(t.code,{children:"kubeadm init"})," \u0438\u043b\u0438 ",(0,s.jsx)(t.code,{children:"kubeadm join"}),", \u0444\u0430\u0439\u043b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 Kubelet (",(0,s.jsx)(t.code,{children:"/var/lib/kubelet/config.yaml"}),") \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d."]})}),"\n",(0,s.jsx)(c.A,{language:"bash",children:o.A`
      ls -la /var/lib/kubelet/config.yaml
  `}),"\n",(0,s.jsx)(c.A,{language:"bash",children:o.A`
      ls -la /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
  `}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(c.A,{language:"bash",children:o.A`
      -rw-r--r-- 1 root root 1721 Feb 19 18:57 /var/lib/kubelet/config.yaml
  `}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
      -rw-r--r-- 1 root root 903 Feb 19 22:10 /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
  `})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},65867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checkComponent","title":"checkComponent","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/kubelet/checkComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/checkComponent","permalink":"/tech-docs/kubernetes/components/kubelet/checkComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(25652),c=n(63859);const i={},l=void 0,u={},d=[...c.toc,...o.toc];function h(e){const{Details:t}={...(0,a.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),(0,s.jsx)(c.default,{}),(0,s.jsx)(o.default,{})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},66483:(e,t,n)=>{n.d(t,{L:()=>a});var r=n(6353),s=n(7478);const a={authenticationKubeconfig:{value:`${s.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},authorizationKubeconfig:{value:`${s.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},kubeconfig:{value:`${s.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},clusterSigningCertFile:{value:`${r.$.kubernetesCA.crtPath}`},clusterSigningKeyFile:{value:`${r.$.kubernetesCA.keyPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},rootCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountPrivateKeyFile:{value:`${s.M.kuberneteBaseFolderPath.value}/pki/sa.key`},clusterName:{value:"${CLUSTER_NAME}"},allocateNodeCidrs:{value:"false"},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},allowUntaggedCloud:{value:"false"},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"false"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},certDir:{value:""},cidrAllocatorType:{value:"RangeAllocator"},cloudConfig:{value:""},cloudProvider:{value:"external"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},clusterCidr:{value:""},clusterSigningDuration:{value:"720h0m0s"},clusterSigningKubeApiserverClientCertFile:{value:""},clusterSigningKubeApiserverClientKeyFile:{value:""},clusterSigningKubeletClientCertFile:{value:""},clusterSigningKubeletClientKeyFile:{value:""},clusterSigningKubeletServingCertFile:{value:""},clusterSigningKubeletServingKeyFile:{value:""},clusterSigningLegacyUnknownCertFile:{value:""},clusterSigningLegacyUnknownKeyFile:{value:""},concurrentCronJobSyncs:{value:"5"},concurrentDeploymentSyncs:{value:"5"},concurrentEndpointSyncs:{value:"5"},concurrentEphemeralvolumeSyncs:{value:"5"},concurrentGcSyncs:{value:"20"},concurrentHorizontalPodAutoscalerSyncs:{value:"5"},concurrentJobSyncs:{value:"5"},concurrentNamespaceSyncs:{value:"10"},concurrentRcSyncs:{value:"5"},concurrentReplicasetSyncs:{value:"20"},concurrentResourceQuotaSyncs:{value:"5"},concurrentServiceEndpointSyncs:{value:"5"},concurrentServiceSyncs:{value:"1"},concurrentServiceaccountTokenSyncs:{value:"5"},concurrentStatefulsetSyncs:{value:"5"},concurrentTtlAfterFinishedSyncs:{value:"5"},concurrentValidatingAdmissionPolicyStatusSyncs:{value:"5"},configureCloudRoutes:{value:"true"},contentionProfiling:{value:"false"},controllerStartInterval:{value:"0s"},controllers:{value:"*,bootstrapsigner,tokencleaner"},disableAttachDetachReconcileSync:{value:"false"},disableForceDetachOnTimeout:{value:"false"},disabledMetrics:{value:""},enableDynamicProvisioning:{value:"true"},enableGarbageCollector:{value:"true"},enableHostpathProvisioner:{value:"false"},enableLeaderMigration:{value:"false"},endpointUpdatesBatchPeriod:{value:"0s"},endpointsliceUpdatesBatchPeriod:{value:"0s"},externalCloudVolumePlugin:{value:""},featureGates:{value:"RotateKubeletServerCertificate=true"},flexVolumePluginDir:{value:"/usr/libexec/kubernetes/kubelet-plugins/volume/exec/"},help:{value:"false"},horizontalPodAutoscalerCpuInitializationPeriod:{value:"5m0s"},horizontalPodAutoscalerDownscaleDelay:{value:"5m0s"},horizontalPodAutoscalerDownscaleStabilization:{value:"5m0s"},horizontalPodAutoscalerInitialReadinessDelay:{value:"30s"},horizontalPodAutoscalerSyncPeriod:{value:"30s"},horizontalPodAutoscalerTolerance:{value:"0.1"},horizontalPodAutoscalerUpscaleDelay:{value:"3m0s"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"120"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"100"},largeClusterSizeThreshold:{value:"50"},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-controller-manager"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},leaderMigrationConfig:{value:""},legacyServiceAccountTokenCleanUpPeriod:{value:"8760h0m0s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},attachDetachReconcileSyncPeriod:{value:"1m0s"},master:{value:""},maxEndpointsPerSlice:{value:"100"},minResyncPeriod:{value:"12h0m0s"},mirroringConcurrentServiceEndpointSyncs:{value:"5"},mirroringEndpointsliceUpdatesBatchPeriod:{value:"0s"},mirroringMaxEndpointsPerSubset:{value:"1000"},namespaceSyncPeriod:{value:"2m0s"},nodeCidrMaskSize:{value:"0"},nodeCidrMaskSizeIpv4:{value:"0"},nodeCidrMaskSizeIpv6:{value:"0"},nodeEvictionRate:{value:"0.1"},nodeMonitorGracePeriod:{value:"40s"},nodeMonitorPeriod:{value:"5s"},nodeStartupGracePeriod:{value:"10s"},nodeSyncPeriod:{value:"0s"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},pvRecyclerIncrementTimeoutNfs:{value:"30"},pvRecyclerMinimumTimeoutHostpath:{value:"60"},pvRecyclerMinimumTimeoutNfs:{value:"300"},pvRecyclerPodTemplateFilepathHostpath:{value:""},pvRecyclerPodTemplateFilepathNfs:{value:""},pvRecyclerTimeoutIncrementHostpath:{value:"30"},pvclaimbinderSyncPeriod:{value:"15s"},requestheaderAllowedNames:{value:""},requestheaderExtraHeadersPrefix:{value:"x-remote-extra-"},requestheaderGroupHeaders:{value:"x-remote-group"},requestheaderUsernameHeaders:{value:"x-remote-user"},resourceQuotaSyncPeriod:{value:"5m0s"},routeReconciliationPeriod:{value:"10s"},secondaryNodeEvictionRate:{value:"0.01"},securePort:{value:"10257"},serviceClusterIpRange:{value:""},showHiddenMetricsForVersion:{value:""},terminatedPodGcThreshold:{value:"0"},tlsCertFile:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:""},tlsSniCertKey:{value:""},unhealthyZoneThreshold:{value:"0.55"},useServiceAccountCredentials:{value:"true"},v:{value:"2"},version:{value:"false"},vmodule:{value:""},volumeHostAllowLocalLoopback:{value:"true"},volumeHostCidrDenylist:{value:""}}},66685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(6353),c=n(7478),i=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${o.$.kubernetesControllerManagerClient.crtConf}
  [ req ]
  default_bits        = ${o.$.kubernetesControllerManagerClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${o.$.kubernetesControllerManagerClient.cname}

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${o.$.kubernetesControllerManagerClient.keyPath} ${o.$.kubernetesControllerManagerClient.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${o.$.kubernetesControllerManagerClient.keyPath} \\
    -out ${o.$.kubernetesControllerManagerClient.csrPath} \\
    -config ${o.$.kubernetesControllerManagerClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -outform PEM \\
    -CA ${o.$.kubernetesCA.crtPath} \\
    -CAkey ${o.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${o.$.kubernetesControllerManagerClient.csrPath} \\
    -out ${o.$.kubernetesControllerManagerClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${o.$.kubernetesControllerManagerClient.crtConf}
`})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},66832:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(6353),c=n(7478),i=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  export CLUSTER_NAME=${c.M.clusterName.value}
  export BASE_DOMAIN=${c.M.kubernetesBaseDomain.value}
  export CLUSTER_DOMAIN=${c.M.kubernetesClusterDomain.value}
  export FULL_HOST_NAME=${c.M.virtualMachineFullName.value}
  export CLUSTER_API_ENDPOINT=api.${c.M.clusterName.value}.${c.M.kubernetesBaseDomain.value}
`}),"\n",(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
  mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
`}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${o.$.kubernetesServer.crtConf}
  [ req ]
  default_bits        = ${o.$.kubernetesServer.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn
  req_extensions      = req_ext

  [ req_ext ]
  subjectAltName = @alt_names

  [ alt_names ]
  DNS.1 = kubernetes
  DNS.2 = kubernetes.default
  DNS.3 = kubernetes.default.svc
  DNS.4 = kubernetes.default.svc.$\{CLUSTER_DOMAIN}
  DNS.5 = $\{FULL_HOST_NAME}
  DNS.6 = $\{CLUSTER_API_ENDPOINT}
  IP.1  = ${c.M.virtualMachineLocalAddress.value}
  IP.2  = 127.0.0.1

  [ dn ]
  CN = ${o.$.kubernetesServer.cname}

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=serverAuth
  subjectAltName=@alt_names
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${o.$.kubernetesServer.keyPath} ${o.$.kubernetesServer.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${o.$.kubernetesServer.keyPath} \\
    -out    ${o.$.kubernetesServer.csrPath} \\
    -config ${o.$.kubernetesServer.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${o.$.kubernetesCA.crtPath} \\
    -CAkey ${o.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${o.$.kubernetesServer.csrPath} \\
    -out ${o.$.kubernetesServer.crtPath} \\
    -extensions v3_ext \\
    -extfile ${o.$.kubernetesServer.crtConf}
`})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},67069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdPeer/main","title":"main","description":"","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdPeer/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdPeer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdPeer/main","permalink":"/tech-docs/etcd/certificates/components/etcd/etcdPeer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(19529),l=n(89982);const u={},d=void 0,h={},m=[...i.toc,...l.toc];function p(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(o.A,{value:"HardWay",children:(0,s.jsx)(i.default,{})}),(0,s.jsx)(o.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},67332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitEnable","title":"systemdUnitEnable","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitEnable.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/systemdUnit","slug":"/tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitEnable","permalink":"/tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitEnable","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775);const i={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{language:"bash",children:o.A`
      systemctl enable kubelet
  `}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:o.A`
      Created symlink /etc/systemd/system/multi-user.target.wants/kubelet.service → /usr/lib/systemd/system/kubelet.service.
  `})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},67359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitStart","title":"systemdUnitStart","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitStart.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/systemdUnit","slug":"/tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitStart","permalink":"/tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitStart","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(7478),l=n(87464),u=n(62774);const d={},h=void 0,m={},p=[];function b(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,s.jsxs)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"warning",children:[(0,s.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c ",(0,s.jsx)(t.strong,{children:"\u0442\u043e\u043b\u044c\u043a\u043e"})," \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 Kubernetes \u0432\u0440\u0443\u0447\u043d\u0443\u044e (\u043c\u0435\u0442\u043e\u0434\u043e\u043c ",(0,s.jsx)(t.em,{children:"\xabKubernetes the Hard Way\xbb"}),"). \u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",(0,s.jsx)(t.strong,{children:"kubeadm"})," \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,s.jsx)(t.code,{children:"kubeadm-config"}),"."]}),(0,s.jsxs)(u.A,{groupId:"install-type",children:[(0,s.jsx)(l.A,{value:"Bash",children:(0,s.jsx)(c.A,{language:"bash",children:o.A`
        cat <<EOF > ${i.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
        KUBELET_KUBEADM_ARGS="--container-runtime-endpoint=unix://${i.M.criEndpoint.value} --pod-infra-container-image=${i.M.baseDockerRegistry.value}/${i.M.pausedImage.value} --config=${i.M.kuberneteKubeletFolderPath.value}/config-custom.yaml --cluster-domain=${i.M.kubernetesClusterDomain.value} --cluster-dns=${i.M.kubernetesDNSAddress.value}
        "
        EOF
      `})}),(0,s.jsx)(l.A,{value:"Cloud-init",children:(0,s.jsx)(c.A,{language:"bash",children:o.A`
        - path: ${i.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
          owner: root:root
          permissions: '0644'
          content: |
            KUBELET_KUBEADM_ARGS="--container-runtime-endpoint=unix://${i.M.criEndpoint.value} --pod-infra-container-image=${i.M.baseDockerRegistry.value}/${i.M.pausedImage.value} --config=${i.M.kuberneteKubeletFolderPath.value}/config-custom.yaml --cluster-domain=${i.M.kubernetesClusterDomain.value} --cluster-dns=${i.M.kubernetesDNSAddress.value}                "
      `})})]})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0438\u0441 Kubelet, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435 \u0432\u0441\u0435\u0445 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u043e\u0432 Static Pods."}),"\n"]}),"\n",(0,s.jsx)(c.A,{language:"bash",children:o.A`
      systemctl start kubelet
  `}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:o.A`
      ● kubelet.service - kubelet: The Kubernetes Node Agent
              Loaded: loaded (/usr/lib/systemd/system/kubelet.service; enabled; preset: enabled)
          Drop-In: /usr/lib/systemd/system/kubelet.service.d
                      └─10-kubeadm.conf
              Active: active (running) since Sat 2025-02-22 10:33:54 UTC; 17min ago
              Docs: https://kubernetes.io/docs/
          Main PID: 13779 (kubelet)
              Tasks: 14 (limit: 7069)
              Memory: 34.0M (peak: 35.3M)
              CPU: 27.131s
              CGroup: /system.slice/kubelet.service
                      └─13779 /usr/local/bin/kubelet --bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet.conf --config=/var/lib/kubelet/config.yaml
  `})})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},67716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/main","permalink":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(7109),l=n(31773),u=n(11946);const d={},h=void 0,m={},p=[...i.toc,...l.toc,...u.toc];function b(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsxs)(o.A,{value:"HardWay",children:[(0,s.jsx)(i.default,{}),(0,s.jsx)(l.default,{})]}),(0,s.jsx)(o.A,{value:"Kubeadm",children:(0,s.jsx)(u.default,{})})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},68890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/adminClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/main","permalink":"/tech-docs/kubernetes/certificates/components/admin/adminClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(33901),l=n(47442),u=n(34759);const d={},h=void 0,m={},p=[...i.toc,...u.toc,...l.toc];function b(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsxs)(o.A,{value:"HardWay",children:[(0,s.jsx)(i.default,{}),(0,s.jsx)(u.default,{})]}),(0,s.jsx)(o.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},69423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>g,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/etcd/staticPod","title":"staticPod","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/etcd/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/etcd","slug":"/tech-docs/kubernetes/components/etcd/staticPod","permalink":"/tech-docs/kubernetes/components/etcd/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(7478),c=(n(6353),n(31798)),i=n(63770),l=n(10119),u=n(60513),d=n(1775);const h={},m=void 0,p={},b=[];function k(e){const{Details:t}={...(0,a.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f"}),"\n",(0,s.jsx)(d.A,{language:"bash",children:u.A`
    export CLUSTER_NAME=${o.M.clusterName.value}
    export BASE_DOMAIN=${o.M.kubernetesBaseDomain.value}
    export MACHINE_LOCAL_ADDRESS=${o.M.virtualMachineLocalAddress.value}
    export FULL_HOST_NAME="${o.M.virtualMachineFullName.value}"
    export ETCD_INITIAL_CLUSTER="$\{FULL_HOST_NAME}=${l.D.initialAdvertisePeerUrls.value}"
  `}),"\n",(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(d.A,{language:"bash",children:u.A`
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/manifests
  `}),"\n",(0,s.jsxs)(t,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Static Pod ETCD"}),(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),(0,s.jsx)(d.A,{language:"bash",children:u.A`
  cat <<EOF > ${o.M.kuberneteBaseFolderPath.value}/manifests/etcd.yaml
  apiVersion: v1
  kind: Pod
  metadata:
    annotations:
      kubeadm.kubernetes.io/etcd.advertise-client-urls: https://$\{MACHINE_LOCAL_ADDRESS}:${o.M.kuberneteBaseFolderPath.value}
    creationTimestamp: null
    labels:
      component: etcd
      tier: control-plane
    name: etcd
    namespace: kube-system
  spec:
    containers:
    - command:
      - etcd
      - --advertise-client-urls=${l.D.advertiseClientUrls.value}
      - --auto-compaction-retention=${l.D.autoCompactionRetention.value}
      - --cert-file=${l.D.certFile.value}
      - --client-cert-auth=${l.D.clientCertAuth.value}
      - --data-dir=${l.D.dataDir.value}
      - --election-timeout=${l.D.electionTimeout.value}
      - --experimental-initial-corrupt-check=true
      - --experimental-watch-progress-notify-interval=5s
      - --heartbeat-interval=${l.D.heartbeatInterval.value}
      - --initial-advertise-peer-urls=${l.D.initialAdvertisePeerUrls.value}
      - --initial-cluster=${l.D.initialCluster.value}
      - --key-file=${l.D.keyFile.value}
      - --listen-client-urls=${l.D.listenClientUrls.value}
      - --listen-metrics-urls=${l.D.listenMetricsUrls.value}
      - --listen-peer-urls=${l.D.listenPeerUrls.value}
      - --logger=${l.D.logger.value}
      - --max-snapshots=${l.D.maxSnapshots.value}
      - --max-wals=${l.D.maxWals.value}
      - --metrics=${l.D.metrics.value}
      - --name=${l.D.name.value}
      - --peer-cert-file=${l.D.peerCertFile.value}
      - --peer-client-cert-auth=${l.D.peerClientCertAuth.value}
      - --peer-key-file=${l.D.peerKeyFile.value}
      - --peer-trusted-ca-file=${l.D.peerTrustedCAFile.value}
      - --snapshot-count=${l.D.snapshotCount.value}
      - --quota-backend-bytes=${l.D.quotaBackendBytes.value}
      - --trusted-ca-file=${l.D.trustedCAFile.value}
      image: ${o.M.baseDockerRegistry.value}/etcd:${i.M.etcd.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          host: 127.0.0.1
          path: /health?exclude=NOSPACE&serializable=true
          port: ${c.h.etcdMetricServer.portNumber}
          scheme: HTTP
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      name: etcd
      resources:
        requests:
          cpu: 100m
          memory: 100Mi
      startupProbe:
        failureThreshold: 24
        httpGet:
          host: 127.0.0.1
          path: /health?serializable=false
          port: ${c.h.etcdMetricServer.portNumber}
          scheme: HTTP
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      volumeMounts:
      - mountPath: /var/lib/etcd
        name: etcd-data
      - mountPath: ${o.M.kuberneteBaseFolderPath.value}/pki/etcd
        name: etcd-certs
    hostNetwork: true
    priority: 2000001000
    priorityClassName: system-node-critical
    securityContext:
      seccompProfile:
        type: RuntimeDefault
    volumes:
    - hostPath:
        path: ${o.M.kuberneteBaseFolderPath.value}/pki/etcd
        type: DirectoryOrCreate
      name: etcd-certs
    - hostPath:
        path: /var/lib/etcd
        type: DirectoryOrCreate
      name: etcd-data
  status: {}
  EOF
`})]})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},69536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/checks/statusBinVersion","title":"statusBinVersion","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/checks/statusBinVersion.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/checks","slug":"/tech-docs/kubernetes/components/containerd/checks/statusBinVersion","permalink":"/tech-docs/kubernetes/components/containerd/checks/statusBinVersion","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775);const i={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{language:"bash",children:o.A`
  containerd --version
`}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(c.A,{language:"bash",children:o.A`
  containerd github.com/containerd/containerd v1.7.19 2bf793ef6dc9a18e00cb12efb64355c2c9d5eb41
`})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},69613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubectl/checkBIN","title":"checkBIN","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/kubectl/checkBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubectl","slug":"/tech-docs/kubernetes/components/kubectl/checkBIN","permalink":"/tech-docs/kubernetes/components/kubectl/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(59161),c=n(305);const i={},l=void 0,u={},d=[...c.toc,...o.toc];function h(e){const{Details:t}={...(0,a.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,s.jsx)(c.default,{}),(0,s.jsx)(o.default,{})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},71020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/checks/statusConfigFiles","title":"statusConfigFiles","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/checks/statusConfigFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/checks","slug":"/tech-docs/kubernetes/components/containerd/checks/statusConfigFiles","permalink":"/tech-docs/kubernetes/components/containerd/checks/statusConfigFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775);const i={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{language:"bash",children:o.A`
  tree /etc/containerd/
`}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(c.A,{language:"bash",children:o.A`
  /etc/containerd/
  ├── certs.d
  ├── conf.d
  │   └── cloud.toml
  └── config.toml
`})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},71372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>A,frontMatter:()=>k,metadata:()=>r,toc:()=>v});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configs/initConfig","title":"initConfig","description":"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configs/initConfig.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/configs","slug":"/tech-docs/kubernetes/components/kubeadm/configs/initConfig","permalink":"/tech-docs/kubernetes/components/kubeadm/configs/initConfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(10119),l=n(25292),u=n(7478),d=n(63770),h=n(76519),m=n(86613),p=n(87464),b=n(62774);const k={},g=void 0,f={},v=[];function x(e){const t={admonition:"admonition",code:"code",p:"p",...(0,a.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(n,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,s.jsxs)(b.A,{groupId:"install-type",children:[(0,s.jsxs)(p.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
        export CLUSTER_NAME='${u.M.clusterName.value}'
        export BASE_DOMAIN='${u.M.kubernetesBaseDomain.value}'
        export FULL_HOST_NAME=${u.M.virtualMachineFullName.value}
        export INTERNAL_API=api.${u.M.kubernetesClusterExternalDomain.value}
        export MACHINE_LOCAL_ADDRESS=${u.M.virtualMachineLocalAddress.value}
        export ETCD_INITIAL_CLUSTER="$\{FULL_HOST_NAME}=${i.D.initialAdvertisePeerUrls.value}"
        export CERTIFICATE_UPLOAD_KEY=0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
      `}),(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u044d\u0442\u0430\u043f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 ",(0,s.jsx)(t.code,{children:"addons"})," \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f."]})}),(0,s.jsx)(c.A,{children:o.A`
        cat <<EOF > ${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
        ---
        apiVersion: kubeadm.k8s.io/v1beta3
        kind: InitConfiguration
        skipPhases:
          - addon
        bootstrapTokens:
          - token: "fjt9ex.lwzqgdlvoxtqk4yw"
            description: "kubeadm bootstrap token"
            ttl: "24h"
        certificateKey: $\{CERTIFICATE_UPLOAD_KEY}
        nodeRegistration:
          imagePullPolicy: IfNotPresent
          taints: null
          kubeletExtraArgs:
            cloud-provider: external
            config: "${u.M.kuberneteKubeletFolderPath.value}/config-custom.yaml"
            cluster-domain: ${u.M.kubernetesClusterDomain.value}
            cluster-dns: "${u.M.kubernetesDNSAddress.value}"
          # name: '$\{FULL_HOST_NAME}'
          ignorePreflightErrors:
            # > При поэтапной сборке кластера, а не выполнении единой команды,
            # > необходимо указать исключения в параметре ignorePreflightErrors,
            # > чтобы команда kubeadm init phase preflight выполнялась без препятствий.
            # > Для этого в nodeRegistration добавляются следующие исключения:
            - FileAvailable--etc-kubernetes-manifests-kube-apiserver.yaml
            - FileAvailable--etc-kubernetes-manifests-kube-controller-manager.yaml
            - FileAvailable--etc-kubernetes-manifests-kube-scheduler.yaml
            - FileAvailable--etc-kubernetes-manifests-etcd.yaml
        ---
        apiVersion: kubeadm.k8s.io/v1beta3
        kind: ClusterConfiguration
        ${h.Q.data.value}
        EOF
      `})]}),(0,s.jsx)(p.A,{value:"Cloud-init",children:(0,s.jsx)(c.A,{children:o.A`
        - path: ${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
          owner: root:root
          permissions: '0644'
          content: |
            ---
            apiVersion: kubeadm.k8s.io/v1beta3
            kind: InitConfiguration
            skipPhases:
              - addon
            bootstrapTokens:
              - token: "fjt9ex.lwzqgdlvoxtqk4yw"
                description: "kubeadm bootstrap token"
                ttl: "24h"
            certificateKey: 0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
            nodeRegistration:
              imagePullPolicy: IfNotPresent
              taints: null
              kubeletExtraArgs:
                cloud-provider: external
                config: "${u.M.kuberneteKubeletFolderPath.value}/config-custom.yaml"
                cluster-domain: cluster.local
                cluster-dns: "${u.M.kubernetesDNSAddress.value}"

              # TODO тут нужно подумать, нужно ли определение имени узла при инициализации УК
              # name: {{ local_hostname }}

              ignorePreflightErrors:
                # > При поэтапной сборке кластера, а не выполнении единой команды,
                # > необходимо указать исключения в параметре ignorePreflightErrors,
                # > чтобы команда kubeadm init phase preflight выполнялась без препятствий.
                # > Для этого в nodeRegistration добавляются следующие исключения:
                - FileAvailable--etc-kubernetes-manifests-kube-apiserver.yaml
                - FileAvailable--etc-kubernetes-manifests-kube-controller-manager.yaml
                - FileAvailable--etc-kubernetes-manifests-kube-scheduler.yaml
                - FileAvailable--etc-kubernetes-manifests-etcd.yaml
            ---
            apiVersion: kubeadm.k8s.io/v1beta3
            kind: ClusterConfiguration

            clusterName: "${u.M.clusterName.value}"
            # TODO нужно указывать VIP LoadBalancer
            controlPlaneEndpoint: {{ local_hostname }}:${l.L.securePort.value}

            imageRepository: "${u.M.baseDockerRegistry.value}"

            networking:
              serviceSubnet: ${u.M.kubernetesServiceCIDR.value}
              dnsDomain: cluster.local
            kubernetesVersion: ${d.M.kubernetes.value}

            dns: {}
            etcd:
              local:
                imageRepository: "${u.M.baseDockerRegistry.value}"
                dataDir: "/var/lib/etcd"
                extraArgs:
                  ${m.Nu.data.value}
                peerCertSANs:
                  - 127.0.0.1
                serverCertSANs:
                  - 127.0.0.1

            apiServer:
              extraArgs:
                ${m.IL.data.value}

              extraVolumes:
              - name: "k8s-audit"
                hostPath: "/var/log/kubernetes/audit/"
                mountPath: "/var/log/kubernetes/audit/"
                readOnly: false
                pathType: DirectoryOrCreate
              certSANs:
                - "127.0.0.1"
              timeoutForControlPlane: 4m0s

            controllerManager:
              extraArgs:
                cluster-name: "${u.M.clusterName.value}"
                ${m.Uj.data.value}

            scheduler:
              extraArgs:
                ${m.hZ.data.value}
      `})})]})]})}function A(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},72608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/setupEnvironments/secondaryMasters","title":"secondaryMasters","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/setupEnvironments/secondaryMasters.mdx","sourceDirName":"tech-docs/kubernetes/setupEnvironments","slug":"/tech-docs/kubernetes/setupEnvironments/secondaryMasters","permalink":"/tech-docs/kubernetes/setupEnvironments/secondaryMasters","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(60513),l=n(1775);const u={},d=void 0,h={},m=[];function p(e){return(0,s.jsxs)(c.A,{children:[(0,s.jsx)(o.A,{value:"master-2",children:(0,s.jsx)(l.A,{language:"bash",children:i.A`
        export HOST_NAME=master-2
      `})}),(0,s.jsx)(o.A,{value:"master-3",children:(0,s.jsx)(l.A,{language:"bash",children:i.A`
        export HOST_NAME=master-3
      `})})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},74124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(7478),c=n(1775),i=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase certs apiserver-etcd-client \\
    --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [certs] Generating "apiserver-etcd-client" certificate and key
`})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},74279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(6353),c=n(7478),i=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
    cat <<EOF > ${o.$.kubernetesEtcdClient.crtConf}
    [ req ]
    default_bits        = ${o.$.kubernetesEtcdClient.keySize}
    prompt              = no
    default_md          = sha256
    distinguished_name  = dn

    [ dn ]
    CN = ${o.$.kubernetesEtcdClient.cname}

    [ v3_ext ]
    authorityKeyIdentifier=keyid,issuer:always
    basicConstraints=CA:FALSE
    keyUsage=keyEncipherment,dataEncipherment
    extendedKeyUsage=clientAuth
    EOF
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${o.$.kubernetesEtcdClient.keyPath} ${o.$.kubernetesEtcdClient.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${o.$.kubernetesEtcdClient.keyPath} \\
    -out    ${o.$.kubernetesEtcdClient.csrPath} \\
    -config ${o.$.kubernetesEtcdClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${o.$.etcdCA.crtPath} \\
    -CAkey ${o.$.etcdCA.keyPath} \\
    -CAcreateserial \\
    -in ${o.$.kubernetesEtcdClient.csrPath} \\
    -out ${o.$.kubernetesEtcdClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${o.$.kubernetesEtcdClient.crtConf}
`})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},74823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checks/statusBinVersion","title":"statusBinVersion","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubelet/checks/statusBinVersion.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/checks","slug":"/tech-docs/kubernetes/components/kubelet/checks/statusBinVersion","permalink":"/tech-docs/kubernetes/components/kubelet/checks/statusBinVersion","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775);const i={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{language:"bash",children:o.A`
  kubelet --version
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:o.A`
  Kubernetes v1.30.4
`})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},75478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/setupEnvironments/initMaster","title":"initMaster","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/setupEnvironments/initMaster.mdx","sourceDirName":"tech-docs/kubernetes/setupEnvironments","slug":"/tech-docs/kubernetes/setupEnvironments/initMaster","permalink":"/tech-docs/kubernetes/setupEnvironments/initMaster","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(60513),l=n(1775);const u={},d=void 0,h={},m=[];function p(e){return(0,s.jsx)(c.A,{children:(0,s.jsx)(o.A,{value:"master-1",children:(0,s.jsx)(l.A,{language:"bash",children:i.A`
        export HOST_NAME=master-1
      `})})})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},75735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/additionalSetup/uploadCAComponent","title":"uploadCAComponent","description":"\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0443\u0440 Kubernetes. \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f \u0432 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435 \u043a\u0430\u043a \u0440\u0435\u0441\u0443\u0440\u0441 Secret, \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0445 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0438 \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u043c \u0443\u0437\u043b\u0435 \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u0443\u0437\u043b\u043e\u0432 \u0423\u041a.","source":"@site/docs/tech-docs/kubernetes/additionalSetup/uploadCAComponent.mdx","sourceDirName":"tech-docs/kubernetes/additionalSetup","slug":"/tech-docs/kubernetes/additionalSetup/uploadCAComponent","permalink":"/tech-docs/kubernetes/additionalSetup/uploadCAComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(1775),l=n(60513),u=n(7478);const d={},h=void 0,m={},p=[];function b(e){const t={admonition:"admonition",code:"code",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0443\u0440 Kubernetes. \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f \u0432 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435 \u043a\u0430\u043a \u0440\u0435\u0441\u0443\u0440\u0441 ",(0,s.jsx)(t.code,{children:"Secret"}),", \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0445 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0438 \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u043c \u0443\u0437\u043b\u0435 \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u0443\u0437\u043b\u043e\u0432 \u0423\u041a."]})}),"\n",(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsxs)(o.A,{value:"HardWay",children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${u.M.kuberneteBaseFolderPath.value}/openssl
    `}),(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
      export CERTIFICATE_UPLOAD_KEY=0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
    `}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
      cat <<EOF > ${u.M.kuberneteBaseFolderPath.value}/openssl/encrypt.py
      #!/usr/bin/env python3
      import sys, base64, os
      from cryptography.hazmat.primitives.ciphers.aead import AESGCM

      key = bytes.fromhex(sys.argv[1])
      path = sys.argv[2]

      with open(path, "rb") as f:
          data = f.read()

      nonce = os.urandom(12)
      aesgcm = AESGCM(key)
      ct = aesgcm.encrypt(nonce, data, None)

      # kubeadm ожидает: nonce + ciphertext (включая auth tag)
      payload = nonce + ct
      print(base64.b64encode(payload).decode())
      EOF
    `}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
      cat <<EOF > ${u.M.kuberneteBaseFolderPath.value}/openssl/upload-certs.sh
      #!/bin/bash
      set -euo pipefail

      CERT_PATH="${u.M.kuberneteBaseFolderPath.value}/pki"
      PY_SCRIPT="$(dirname "$0")/encrypt.py"

      declare -A files=(
        ["ca.crt"]="$CERT_PATH/ca.crt"
        ["ca.key"]="$CERT_PATH/ca.key"
        ["etcd-ca.crt"]="$CERT_PATH/etcd/ca.crt"
        ["etcd-ca.key"]="$CERT_PATH/etcd/ca.key"
        ["front-proxy-ca.crt"]="$CERT_PATH/front-proxy-ca.crt"
        ["front-proxy-ca.key"]="$CERT_PATH/front-proxy-ca.key"
        ["sa.key"]="$CERT_PATH/sa.key"
        ["sa.pub"]="$CERT_PATH/sa.pub"
      )

      KEY=$\{CERTIFICATE_UPLOAD_KEY}
      echo "[INFO] certificate-key: $KEY"

      TMP_DIR=$(mktemp -d)
      SECRET_FILE="$TMP_DIR/secret.yaml"

      cat <<EOF > "$SECRET_FILE"
      apiVersion: v1
      kind: Secret
      metadata:
        name: kubeadm-certs
        namespace: kube-system
      type: Opaque
      data:
      EOF

      for name in "$\{!files[@]}"; do
        path="$\{files[$name]}"
        b64=$(python3 "$PY_SCRIPT" "$KEY" "$path")
        echo "  $name: $b64" >> "$SECRET_FILE"
      done

      echo "[INFO] Applying secret to cluster..."
      kubectl apply -f "$SECRET_FILE"
      EOF
    `})]}),(0,s.jsxs)(o.A,{value:"Kubeadm",children:[(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
      kubeadm init phase  upload-certs \\
        --config=${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${u.M.kuberneteBaseFolderPath.value}/super-admin.conf \\
        --upload-certs
    `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:l.A`
  [upload-certs] Storing the certificates in Secret "kubeadm-certs" in the "kube-system" Namespace
  [upload-certs] Using certificate key:
  0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
`})})]})]})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},76519:(e,t,n)=>{n.d(t,{Q:()=>i});var r=n(60513),s=n(25292),a=n(63770),o=n(86613),c=n(7478);const i={data:{value:r.A`
      clusterName: "$\{CLUSTER_NAME}"
      controlPlaneEndpoint: $\{INTERNAL_API}:${s.L.securePort.value}
      imageRepository: "${c.M.baseDockerRegistry.value}"
      networking:
        serviceSubnet: ${c.M.kubernetesServiceCIDR.value}
        dnsDomain: ${c.M.kubernetesClusterDomain.value}
      kubernetesVersion: ${a.M.kubernetes.value}
      dns: {}
      etcd:
        local:
          imageRepository: "${c.M.baseDockerRegistry.value}"
          dataDir: "/var/lib/etcd"
          extraArgs:
            ${o.Nu.data.value}
          peerCertSANs:
            - 127.0.0.1
          serverCertSANs:
            - 127.0.0.1
      apiServer:
        extraArgs:
          ${o.IL.data.value}
        extraVolumes:
        - name: "k8s-audit"
          hostPath: "/var/log/kubernetes/audit/"
          mountPath: "/var/log/kubernetes/audit/"
          readOnly: false
          pathType: DirectoryOrCreate
        certSANs:
          - "127.0.0.1"
          # TODO для доабвления внешнего FQDN в сертификаты кластера
          # - $\{INTERNAL_API}
        timeoutForControlPlane: 4m0s
      controllerManager:
        extraArgs:
          cluster-name: "$\{CLUSTER_NAME}"
          ${o.Uj.data.value}
      scheduler:
        extraArgs:
          ${o.hZ.data.value}
    `}}},78647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/examinationKubeadmComponent","title":"examinationKubeadmComponent","description":"\u041f\u043e\u0441\u043b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0438\u0445 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Kubeadm","source":"@site/docs/tech-docs/kubernetes/certificates/examinationKubeadmComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates","slug":"/tech-docs/kubernetes/certificates/examinationKubeadmComponent","permalink":"/tech-docs/kubernetes/certificates/examinationKubeadmComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(1775),c=n(60513),i=n(7478);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u041f\u043e\u0441\u043b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0438\u0445 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,s.jsx)(t.code,{children:"Kubeadm"})]}),"\n"]}),"\n",(0,s.jsx)(o.A,{language:"bash",children:c.A`
  kubeadm certs check-expiration \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
    --kubeconfig=${i.M.kuberneteBaseFolderPath.value}/super-admin.conf
`}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(o.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  admin.conf                 Oct 22, 2025 22:06 UTC   364d            ca                      no
  apiserver                  Oct 22, 2025 22:06 UTC   364d            ca                      no
  apiserver-etcd-client      Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  apiserver-kubelet-client   Oct 22, 2025 22:06 UTC   364d            ca                      no
  controller-manager.conf    Oct 22, 2025 22:06 UTC   364d            ca                      no
  etcd-healthcheck-client    Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  etcd-peer                  Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  etcd-server                Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  front-proxy-client         Oct 22, 2025 22:06 UTC   364d            front-proxy-ca          no
  scheduler.conf             Oct 22, 2025 22:06 UTC   364d            ca                      no
  super-admin.conf           Oct 22, 2025 22:06 UTC   364d            ca                      no

  CERTIFICATE AUTHORITY   EXPIRES                  RESIDUAL TIME   EXTERNALLY MANAGED
  ca                      Oct 20, 2034 22:04 UTC   9y              no
  etcd-ca                 Oct 20, 2034 22:04 UTC   9y              no
  front-proxy-ca          Oct 20, 2034 22:04 UTC   9y              no
`})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},78862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/statusCluster","title":"statusCluster","description":"\u041f\u043e\u0441\u043b\u0435 \u0441\u0442\u0430\u0440\u0442\u0430 kubelet \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0441\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 3-\u0445 \u044d\u0442\u0430\u043f\u043e\u0432:","source":"@site/docs/tech-docs/kubernetes/statusCluster.mdx","sourceDirName":"tech-docs/kubernetes","slug":"/tech-docs/kubernetes/statusCluster","permalink":"/tech-docs/kubernetes/statusCluster","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=(n(87464),n(62774),n(1775)),c=n(60513);const i={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u041f\u043e\u0441\u043b\u0435 \u0441\u0442\u0430\u0440\u0442\u0430 ",(0,s.jsx)(t.code,{children:"kubelet"})," \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0441\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 3-\u0445 \u044d\u0442\u0430\u043f\u043e\u0432:"]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043e\u0431\u0440\u0430\u0437\u043e\u0432"}),"\n",(0,s.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432"}),"\n",(0,s.jsx)(t.li,{children:"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u044f"}),"\n"]}),"\n",(0,s.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043e\u0431\u0440\u0430\u0437\u043e\u0432"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:c.A`
  crictl images
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(o.A,{language:"bash",children:c.A`
  registry.k8s.io/etcd                      3.5.12-0            3861cfcd7c04c       57.2MB
  registry.k8s.io/kube-apiserver            v1.30.4             8a97b1fb3e2eb       32.8MB
  registry.k8s.io/kube-controller-manager   v1.30.4             8398ad49a121d       31.1MB
  registry.k8s.io/kube-scheduler            v1.30.4             4939f82ab9ab4       19.3MB
  registry.k8s.io/pause                     3.9                 e6f1816883972       322kB
`})}),"\n",(0,s.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:c.A`
  crictl ps -a
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(o.A,{language:"bash",children:c.A`
  CONTAINER           IMAGE               CREATED             STATE               NAME                      ATTEMPT             POD ID              POD
  09c8c2d7b6446       4939f82ab9ab4       2 minutes ago       Running             kube-scheduler            1                   934a798c482c3       kube-scheduler-master-1.my-first-cluster.example.com
  15a10517ea727       8398ad49a121d       2 minutes ago       Running             kube-controller-manager   1                   765405114b0a9       kube-controller-manager-master-1.my-first-cluster.example.com
  4b2d766a5f129       8a97b1fb3e2eb       2 minutes ago       Running             kube-apiserver            0                   bd281a893a7c1       kube-apiserver-master-1.my-first-cluster.example.com
  3fb02d0f802ae       3861cfcd7c04c       2 minutes ago       Running             etcd                      0                   b6b62dc165409       etcd-master-1.my-first-cluster.example.com
`})}),"\n",(0,s.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:c.A`
  crictl logs $(crictl ps -name kube-apiserver \\
  -o json \|
  jq -r '.containers[''].id') 2>&1 \|
  grep created
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsxs)(n,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Output"}),(0,s.jsx)(o.A,{language:"bash",children:c.A`
  I0325 19:50:24.849116       1 strategy.go:270] "Successfully created " type="suggested" name="node-high"
  I0325 19:50:25.015326       1 strategy.go:270] "Successfully created " type="suggested" name="leader-election"
  I0325 19:50:25.015272       1 storage_scheduling.go:95] created PriorityClass system-node-critical with value 2000001000
  I0325 19:50:25.062070       1 strategy.go:270] "Successfully created " type="suggested" name="workload-high"
  I0325 19:50:25.092785       1 storage_scheduling.go:95] created PriorityClass system-cluster-critical with value 2000000000
  I0325 19:50:25.093056       1 storage_scheduling.go:111] all system priority classes are created successfully or already exist.
  I0325 19:50:25.097457       1 strategy.go:270] "Successfully created " type="suggested" name="workload-low"
  I0325 19:50:25.122907       1 strategy.go:270] "Successfully created " type="suggested" name="global-default"
  I0325 19:50:25.136110       1 strategy.go:270] "Successfully created " type="suggested" name="system-nodes"
  I0325 19:50:25.145639       1 strategy.go:270] "Successfully created " type="suggested" name="system-node-high"
  I0325 19:50:25.162094       1 strategy.go:270] "Successfully created " type="suggested" name="probes"
  I0325 19:50:25.171177       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/cluster-admin
  I0325 19:50:25.178987       1 strategy.go:270] "Successfully created " type="suggested" name="system-leader-election"
  I0325 19:50:25.189666       1 strategy.go:270] "Successfully created " type="suggested" name="workload-leader-election"
  I0325 19:50:25.194349       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:discovery
  I0325 19:50:25.201448       1 strategy.go:270] "Successfully created " type="suggested" name="endpoint-controller"
  I0325 19:50:25.209644       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:monitoring
  I0325 19:50:25.216051       1 strategy.go:270] "Successfully created " type="suggested" name="kube-controller-manager"
  I0325 19:50:25.247945       1 strategy.go:270] "Successfully created " type="suggested" name="kube-scheduler"
  I0325 19:50:25.254378       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:basic-user
  I0325 19:50:25.263224       1 strategy.go:270] "Successfully created " type="suggested" name="kube-system-service-accounts"
  I0325 19:50:25.270945       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:public-info-viewer
  I0325 19:50:25.281581       1 strategy.go:270] "Successfully created " type="suggested" name="service-accounts"
  I0325 19:50:25.289105       1 strategy.go:270] "Successfully created " type="suggested" name="global-default"
  I0325 19:50:25.291001       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/admin
  I0325 19:50:25.314232       1 strategy.go:270] "Successfully created " type="mandatory" name="catch-all"
  I0325 19:50:25.318737       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/edit
  I0325 19:50:25.342170       1 strategy.go:270] "Successfully created " type="mandatory" name="exempt"
  I0325 19:50:25.363630       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/view
  I0325 19:50:25.364923       1 strategy.go:270] "Successfully created " type="mandatory" name="exempt"
  I0325 19:50:25.372538       1 strategy.go:270] "Successfully created " type="mandatory" name="catch-all"
  I0325 19:50:25.378771       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:aggregate-to-admin
  I0325 19:50:25.390632       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:aggregate-to-edit
  I0325 19:50:25.404175       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:aggregate-to-view
  I0325 19:50:25.423981       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:heapster
  I0325 19:50:25.455599       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:node
  I0325 19:50:25.470607       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:node-problem-detector
  I0325 19:50:25.476809       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:kubelet-api-admin
  I0325 19:50:25.482742       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:node-bootstrapper
  I0325 19:50:25.509907       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:auth-delegator
  I0325 19:50:25.518103       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:kube-aggregator
  I0325 19:50:25.523930       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:kube-controller-manager
  I0325 19:50:25.530724       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:kube-dns
  I0325 19:50:25.536652       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:persistent-volume-provisioner
  I0325 19:50:25.548041       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:certificates.k8s.io:certificatesigningrequests:nodeclient
  I0325 19:50:25.552946       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:certificates.k8s.io:certificatesigningrequests:selfnodeclient
  I0325 19:50:25.563551       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:volume-scheduler
  I0325 19:50:25.569432       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:certificates.k8s.io:legacy-unknown-approver
  I0325 19:50:25.587133       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:certificates.k8s.io:kubelet-serving-approver
  I0325 19:50:25.593244       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:certificates.k8s.io:kube-apiserver-client-approver
  I0325 19:50:25.601059       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:certificates.k8s.io:kube-apiserver-client-kubelet-approver
  I0325 19:50:25.610208       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:service-account-issuer-discovery
  I0325 19:50:25.618408       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:node-proxier
  I0325 19:50:25.633183       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:kube-scheduler
  I0325 19:50:25.638420       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:attachdetach-controller
  I0325 19:50:25.646202       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:clusterrole-aggregation-controller
  I0325 19:50:25.662691       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:cronjob-controller
  I0325 19:50:25.670479       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:daemon-set-controller
  I0325 19:50:25.695624       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:deployment-controller
  I0325 19:50:25.704607       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:disruption-controller
  I0325 19:50:25.723784       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:endpoint-controller
  I0325 19:50:25.730609       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:endpointslice-controller
  I0325 19:50:25.739767       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:endpointslicemirroring-controller
  I0325 19:50:25.749724       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:expand-controller
  I0325 19:50:25.770915       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:ephemeral-volume-controller
  I0325 19:50:25.778952       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:generic-garbage-collector
  I0325 19:50:25.789374       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:horizontal-pod-autoscaler
  I0325 19:50:25.849152       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:job-controller
  I0325 19:50:25.876849       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:namespace-controller
  I0325 19:50:25.911640       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:node-controller
  I0325 19:50:25.925130       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:persistent-volume-binder
  I0325 19:50:25.931132       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:pod-garbage-collector
  I0325 19:50:25.937393       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:replicaset-controller
  I0325 19:50:25.946109       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:replication-controller
  I0325 19:50:25.960711       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:resourcequota-controller
  I0325 19:50:25.966392       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:route-controller
  I0325 19:50:25.974500       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:service-account-controller
  I0325 19:50:26.006739       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:service-controller
  I0325 19:50:26.024263       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:statefulset-controller
  I0325 19:50:26.030127       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:ttl-controller
  I0325 19:50:26.038301       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:certificate-controller
  I0325 19:50:26.052458       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:pvc-protection-controller
  I0325 19:50:26.059044       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:pv-protection-controller
  I0325 19:50:26.088843       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:ttl-after-finished-controller
  I0325 19:50:26.094917       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:root-ca-cert-publisher
  I0325 19:50:26.101768       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:validatingadmissionpolicy-status-controller
  I0325 19:50:26.116571       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:legacy-service-account-token-cleaner
  I0325 19:50:26.124067       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/cluster-admin
  I0325 19:50:26.130435       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:monitoring
  I0325 19:50:26.135037       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:discovery
  I0325 19:50:26.144777       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:basic-user
  I0325 19:50:26.152784       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:public-info-viewer
  I0325 19:50:26.165524       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:node-proxier
  I0325 19:50:26.172777       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:kube-controller-manager
  I0325 19:50:26.179247       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:kube-dns
  I0325 19:50:26.197002       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:kube-scheduler
  I0325 19:50:26.203166       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:volume-scheduler
  I0325 19:50:26.208714       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:node
  I0325 19:50:26.217096       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:service-account-issuer-discovery
  I0325 19:50:26.226190       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:attachdetach-controller
  I0325 19:50:26.239853       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:clusterrole-aggregation-controller
  I0325 19:50:26.244226       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:cronjob-controller
  I0325 19:50:26.257950       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:daemon-set-controller
  I0325 19:50:26.262028       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:deployment-controller
  I0325 19:50:26.281103       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:disruption-controller
  I0325 19:50:26.294203       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:endpoint-controller
  I0325 19:50:26.309198       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:endpointslice-controller
  I0325 19:50:26.317701       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:endpointslicemirroring-controller
  I0325 19:50:26.333124       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:expand-controller
  I0325 19:50:26.338934       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:ephemeral-volume-controller
  I0325 19:50:26.344080       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:generic-garbage-collector
  I0325 19:50:26.355286       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:horizontal-pod-autoscaler
  I0325 19:50:26.365297       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:job-controller
  I0325 19:50:26.397412       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:namespace-controller
  I0325 19:50:26.402716       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:node-controller
  I0325 19:50:26.452669       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:persistent-volume-binder
  I0325 19:50:26.457837       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:pod-garbage-collector
  I0325 19:50:26.469955       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:replicaset-controller
  I0325 19:50:26.477884       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:replication-controller
  I0325 19:50:26.490451       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:resourcequota-controller
  I0325 19:50:26.509024       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:route-controller
  I0325 19:50:26.543252       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:service-account-controller
  I0325 19:50:26.549039       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:service-controller
  I0325 19:50:26.578269       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:statefulset-controller
  I0325 19:50:26.592059       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:ttl-controller
  I0325 19:50:26.603091       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:certificate-controller
  I0325 19:50:26.622458       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:pvc-protection-controller
  I0325 19:50:26.630783       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:pv-protection-controller
  I0325 19:50:26.647976       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:ttl-after-finished-controller
  I0325 19:50:26.662162       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:root-ca-cert-publisher
  I0325 19:50:26.701501       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:validatingadmissionpolicy-status-controller
  I0325 19:50:26.711935       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:legacy-service-account-token-cleaner
  I0325 19:50:26.724206       1 storage_rbac.go:289] created role.rbac.authorization.k8s.io/extension-apiserver-authentication-reader in kube-system
  I0325 19:50:26.736799       1 storage_rbac.go:289] created role.rbac.authorization.k8s.io/system:controller:bootstrap-signer in kube-system
  I0325 19:50:26.747295       1 storage_rbac.go:289] created role.rbac.authorization.k8s.io/system:controller:cloud-provider in kube-system
  I0325 19:50:26.757544       1 storage_rbac.go:289] created role.rbac.authorization.k8s.io/system:controller:token-cleaner in kube-system
  I0325 19:50:26.766086       1 storage_rbac.go:289] created role.rbac.authorization.k8s.io/system::leader-locking-kube-controller-manager in kube-system
  I0325 19:50:26.773895       1 storage_rbac.go:289] created role.rbac.authorization.k8s.io/system::leader-locking-kube-scheduler in kube-system
  I0325 19:50:26.785505       1 storage_rbac.go:289] created role.rbac.authorization.k8s.io/system:controller:bootstrap-signer in kube-public
  I0325 19:50:26.813423       1 storage_rbac.go:321] created rolebinding.rbac.authorization.k8s.io/system::extension-apiserver-authentication-reader in kube-system
  I0325 19:50:26.822640       1 storage_rbac.go:321] created rolebinding.rbac.authorization.k8s.io/system::leader-locking-kube-controller-manager in kube-system
  I0325 19:50:26.829331       1 storage_rbac.go:321] created rolebinding.rbac.authorization.k8s.io/system::leader-locking-kube-scheduler in kube-system
  I0325 19:50:26.838203       1 storage_rbac.go:321] created rolebinding.rbac.authorization.k8s.io/system:controller:bootstrap-signer in kube-system
  I0325 19:50:26.848813       1 storage_rbac.go:321] created rolebinding.rbac.authorization.k8s.io/system:controller:cloud-provider in kube-system
  I0325 19:50:26.861183       1 storage_rbac.go:321] created rolebinding.rbac.authorization.k8s.io/system:controller:token-cleaner in kube-system
  I0325 19:50:26.871910       1 storage_rbac.go:321] created rolebinding.rbac.authorization.k8s.io/system:controller:bootstrap-signer in kube-public
`})]})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},79827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/lifecycleSettingsComponent","title":"lifecycleSettingsComponent","description":"\u042d\u0442\u0430\u043f\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/containerd/lifecycleSettingsComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/lifecycleSettingsComponent","permalink":"/tech-docs/kubernetes/components/containerd/lifecycleSettingsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(628),c=n(56960),i=n(91018);const l={},u=void 0,d={},h=[...i.toc,...c.toc,...o.toc];function m(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,s.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Systemd Unit \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,s.jsx)(t.li,{children:"\u0421\u0442\u0430\u0440\u0442 Systemd Unit"}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:[(0,s.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/containerd/lifecycle",children:"Containerd Install"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/runc/lifecycle",children:"Runc Install"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)("h3",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsx)("h3",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Systemd Unit \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,s.jsx)(c.default,{}),"\n",(0,s.jsx)("h3",{children:"\u0421\u0442\u0430\u0440\u0442 Systemd Unit"}),"\n",(0,s.jsx)(o.default,{})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},79971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeadm","permalink":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(7478),c=n(1775),i=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase kubeconfig super-admin \\
    --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [kubeconfig] Writing "super-admin.conf" kubeconfig file
`})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},79988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>g,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/staticPod","title":"staticPod","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/kubeAPI/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/staticPod","permalink":"/tech-docs/kubernetes/components/kubeAPI/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(7478),c=n(63770),i=n(25292),l=n(31798),u=n(1775),d=n(60513);const h={},m=void 0,p={},b=[];function k(e){const{Details:t}={...(0,a.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f"}),"\n",(0,s.jsx)(u.A,{language:"bash",children:d.A`
    export MACHINE_LOCAL_ADDRESS=${o.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(u.A,{language:"bash",children:d.A`
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/manifests
  `}),"\n",(0,s.jsxs)(t,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Static Pod Kube-apiserver"}),(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),(0,s.jsx)(u.A,{language:"bash",children:d.A`
  ---
  cat <<EOF > ${o.M.kuberneteBaseFolderPath.value}/manifests/kube-apiserver.yaml
  apiVersion: v1
  kind: Pod
  metadata:
    annotations:
      kubeadm.kubernetes.io/kube-apiserver.advertise-address.endpoint: $\{MACHINE_LOCAL_ADDRESS}:${i.L.securePort.value}
    creationTimestamp: null
    labels:
      component: kube-apiserver
      tier: control-plane
    name: kube-apiserver
    namespace: kube-system
  spec:
    containers:
    - command:
      - kube-apiserver
      - --aggregator-reject-forwarding-redirect=${i.L.aggregatorRejectForwardingRedirect.value}
      - --allow-privileged=${i.L.allowPrivileged.value}
      - --anonymous-auth=${i.L.anonymousAuth.value}
      - --api-audiences=${i.L.apiAudiences.value}
      - --apiserver-count=${i.L.apiserverCount.value}
      - --audit-log-batch-buffer-size=${i.L.auditLogBatchBufferSize.value}
      - --audit-log-batch-max-size=${i.L.auditLogBatchMaxSize.value}
      - --audit-log-batch-max-wait=${i.L.auditLogBatchMaxWait.value}
      - --audit-log-batch-throttle-burst=${i.L.auditLogBatchThrottleBurst.value}
      - --audit-log-batch-throttle-enable=${i.L.auditLogBatchThrottleEnable.value}
      - --audit-log-batch-throttle-qps=${i.L.auditLogBatchThrottleQps.value}
      - --audit-log-compress=${i.L.auditLogCompress.value}
      - --audit-log-format=${i.L.auditLogFormat.value}
      - --audit-log-maxage=${i.L.auditLogMaxage.value}
      - --audit-log-maxbackup=${i.L.auditLogMaxbackup.value}
      - --audit-log-maxsize=${i.L.auditLogMaxsize.value}
      - --audit-log-mode=${i.L.auditLogMode.value}
      - --audit-log-truncate-enabled=${i.L.auditLogTruncateEnabled.value}
      - --audit-log-truncate-max-batch-size=${i.L.auditLogTruncateMaxBatchSize.value}
      - --audit-log-truncate-max-event-size=${i.L.auditLogTruncateMaxEventSize.value}
      - --audit-log-version=${i.L.auditLogVersion.value}
      - --audit-webhook-batch-buffer-size=${i.L.auditWebhookBatchBufferSize.value}
      - --audit-webhook-batch-initial-backoff=${i.L.auditWebhookBatchInitialBackoff.value}
      - --audit-webhook-batch-max-size=${i.L.auditWebhookBatchMaxSize.value}
      - --audit-webhook-batch-max-wait=${i.L.auditWebhookBatchMaxWait.value}
      - --audit-webhook-batch-throttle-burst=${i.L.auditWebhookBatchThrottleBurst.value}
      - --audit-webhook-batch-throttle-enable=${i.L.auditWebhookBatchThrottleEnable.value}
      - --audit-webhook-batch-throttle-qps=${i.L.auditWebhookBatchThrottleQps.value}
      - --audit-webhook-initial-backoff=${i.L.auditWebhookInitialBackoff.value}
      - --audit-webhook-mode=${i.L.auditWebhookMode.value}
      - --audit-webhook-truncate-enabled=${i.L.auditWebhookTruncateEnabled.value}
      - --audit-webhook-truncate-max-batch-size=${i.L.auditWebhookTruncateMaxBatchSize.value}
      - --audit-webhook-truncate-max-event-size=${i.L.auditWebhookTruncateMaxEventSize.value}
      - --audit-webhook-version=${i.L.auditWebhookVersion.value}
      - --authentication-token-webhook-cache-ttl=${i.L.authenticationTokenWebhookCacheTtl.value}
      - --authentication-token-webhook-version=${i.L.authenticationTokenWebhookVersion.value}
      - --authorization-mode=${i.L.authorizationMode.value}
      - --authorization-webhook-cache-authorized-ttl=${i.L.authorizationWebhookCacheAuthorizedTtl.value}
      - --authorization-webhook-cache-unauthorized-ttl=${i.L.authorizationWebhookCacheUnauthorizedTtl.value}
      - --authorization-webhook-version=${i.L.authorizationWebhookVersion.value}
      - --bind-address=${i.L.bindAddress.value}
      - --cert-dir=${i.L.certDir.value}
      - --client-ca-file=${i.L.clientCaFile.value}
      - --cloud-provider=${i.L.cloudProvider.value}
      - --cloud-provider-gce-l7lb-src-cidrs=${i.L.cloudProviderGceL7lbSrcCidrs.value}
      - --cloud-provider-gce-lb-src-cidrs=${i.L.cloudProviderGceLbSrcCidrs.value}
      - --contention-profiling=${i.L.contentionProfiling.value}
      - --default-not-ready-toleration-seconds=${i.L.defaultNotReadyTolerationSeconds.value}
      - --default-unreachable-toleration-seconds=${i.L.defaultUnreachableTolerationSeconds.value}
      - --default-watch-cache-size=${i.L.defaultWatchCacheSize.value}
      - --delete-collection-workers=${i.L.deleteCollectionWorkers.value}
      - --enable-admission-plugins=${i.L.enableAdmissionPlugins.value}
      - --enable-aggregator-routing=${i.L.enableAggregatorRouting.value}
      - --enable-bootstrap-token-auth=${i.L.enableBootstrapTokenAuth.value}
      - --enable-garbage-collector=${i.L.enableGarbageCollector.value}
      - --enable-logs-handler=${i.L.enableLogsHandler.value}
      - --enable-priority-and-fairness=${i.L.enablePriorityAndFairness.value}
      - --encryption-provider-config-automatic-reload=${i.L.encryptionProviderConfigAutomaticReload.value}
      - --endpoint-reconciler-type=${i.L.endpointReconcilerType.value}
      - --etcd-cafile=${i.L.etcdCafile.value}
      - --etcd-certfile=${i.L.etcdCertfile.value}
      - --etcd-compaction-interval=${i.L.etcdCompactionInterval.value}
      - --etcd-count-metric-poll-period=${i.L.etcdCountMetricPollPeriod.value}
      - --etcd-db-metric-poll-interval=${i.L.etcdDbMetricPollInterval.value}
      - --etcd-healthcheck-timeout=${i.L.etcdHealthcheckTimeout.value}
      - --etcd-keyfile=${i.L.etcdKeyfile.value}
      - --etcd-prefix=${i.L.etcdPrefix.value}
      - --etcd-readycheck-timeout=${i.L.etcdReadycheckTimeout.value}
      - --etcd-servers=${i.L.etcdServers.value}
      - --event-ttl=${i.L.eventTtl.value}
      - --feature-gates=${i.L.featureGates.value}
      - --goaway-chance=${i.L.goawayChance.value}
      - --help=${i.L.help.value}
      - --http2-max-streams-per-connection=${i.L.http2MaxStreamsPerConnection.value}
      - --kubelet-client-certificate=${i.L.kubeletClientCertificate.value}
      - --kubelet-client-key=${i.L.kubeletClientKey.value}
      - --kubelet-port=${i.L.kubeletPort.value}
      - --kubelet-preferred-address-types=${i.L.kubeletPreferredAddressTypes.value}
      - --kubelet-read-only-port=${i.L.kubeletReadOnlyPort.value}
      - --kubelet-timeout=${i.L.kubeletTimeout.value}
      - --kubernetes-service-node-port=${i.L.kubernetesServiceNodePort.value}
      - --lease-reuse-duration-seconds=${i.L.leaseReuseDurationSeconds.value}
      - --livez-grace-period=${i.L.livezGracePeriod.value}
      - --log-flush-frequency=${i.L.logFlushFrequency.value}
      - --logging-format=${i.L.loggingFormat.value}
      - --log-json-info-buffer-size=${i.L.logJsonInfoBufferSize.value}
      - --log-json-split-stream=${i.L.logJsonSplitStream.value}
      - --log-text-info-buffer-size=${i.L.logTextInfoBufferSize.value}
      - --log-text-split-stream=${i.L.logTextSplitStream.value}
      - --max-connection-bytes-per-sec=${i.L.maxConnectionBytesPerSec.value}
      - --max-mutating-requests-inflight=${i.L.maxMutatingRequestsInflight.value}
      - --max-requests-inflight=${i.L.maxRequestsInflight.value}
      - --min-request-timeout=${i.L.minRequestTimeout.value}
      - --permit-address-sharing=${i.L.permitAddressSharing.value}
      - --permit-port-sharing=${i.L.permitPortSharing.value}
      - --profiling=${i.L.profiling.value}
      - --proxy-client-cert-file=${i.L.proxyClientCertFile.value}
      - --proxy-client-key-file=${i.L.proxyClientKeyFile.value}
      - --requestheader-allowed-names=${i.L.requestheaderAllowedNames.value}
      - --requestheader-client-ca-file=${i.L.requestheaderClientCaFile.value}
      - --requestheader-extra-headers-prefix=${i.L.requestheaderExtraHeadersPrefix.value}
      - --requestheader-group-headers=${i.L.requestheaderGroupHeaders.value}
      - --requestheader-username-headers=${i.L.requestheaderUsernameHeaders.value}
      - --request-timeout=${i.L.requestTimeout.value}
      - --runtime-config=${i.L.runtimeConfig.value}
      - --secure-port=${i.L.securePort.value}
      - --service-account-extend-token-expiration=${i.L.serviceAccountExtendTokenExpiration.value}
      - --service-account-issuer=${i.L.serviceAccountIssuer.value}
      - --service-account-key-file=${i.L.serviceAccountKeyFile.value}
      - --service-account-lookup=${i.L.serviceAccountLookup.value}
      - --service-account-max-token-expiration=${i.L.serviceAccountMaxTokenExpiration.value}
      - --service-account-signing-key-file=${i.L.serviceAccountSigningKeyFile.value}
      - --service-cluster-ip-range=${i.L.serviceClusterIpRange.value}
      - --service-node-port-range=${i.L.serviceNodePortRange.value}
      - --shutdown-delay-duration=${i.L.shutdownDelayDuration.value}
      - --shutdown-send-retry-after=${i.L.shutdownSendRetryAfter.value}
      - --shutdown-watch-termination-grace-period=${i.L.shutdownWatchTerminationGracePeriod.value}
      - --storage-backend=${i.L.storageBackend.value}
      - --storage-media-type=${i.L.storageMediaType.value}
      - --tls-cert-file=${i.L.tlsCertFile.value}
      - --tls-private-key-file=${i.L.tlsPrivateKeyFile.value}
      - --v=${i.L.v.value}
      - --version=${i.L.version.value}
      - --watch-cache=${i.L.watchCache.value}

      # Не указывать если значение "" или undefined
      # - --cloud-config=${i.L.cloudConfig.value}
      # - --strict-transport-security-directives=${i.L.strictTransportSecurityDirectives.value}
      # - --disable-admission-plugins=${i.L.disableAdmissionPlugins.value}
      # - --disabled-metrics=${i.L.disabledMetrics.value}
      # - --egress-selector-config-file=${i.L.egressSelectorConfigFile.value}
      # - --encryption-provider-config=${i.L.encryptionProviderConfig.value}
      # - --etcd-servers-overrides=${i.L.etcdServersOverrides.value}
      # - --external-hostname=${i.L.externalHostname.value}
      # - --kubelet-certificate-authority=${i.L.kubeletCertificateAuthority.value}
      # - --oidc-ca-file=${i.L.oidcCaFile.value}
      # - --oidc-client-id=${i.L.oidcClientId.value}
      # - --oidc-groups-claim=${i.L.oidcGroupsClaim.value}
      # - --oidc-groups-prefix=${i.L.oidcGroupsPrefix.value}
      # - --oidc-issuer-url=${i.L.oidcIssuerUrl.value}
      # - --oidc-required-claim=${i.L.oidcRequiredClaim.value}
      # - --oidc-signing-algs=${i.L.oidcSigningAlgs.value}
      # - --oidc-username-claim=${i.L.oidcUsernameClaim.value}
      # - --oidc-username-prefix=${i.L.oidcUsernamePrefix.value}
      # - --peer-advertise-ip=${i.L.peerAdvertiseIp.value}
      # - --peer-advertise-port=${i.L.peerAdvertisePort.value}
      # - --peer-ca-file=${i.L.peerCaFile.value}
      # - --service-account-jwks-uri=${i.L.serviceAccountJwksUri.value}
      # - --show-hidden-metrics-for-version=${i.L.showHiddenMetricsForVersion.value}
      # - --tls-cipher-suites=${i.L.tlsCipherSuites.value}
      # - --tls-min-version=${i.L.tlsMinVersion.value}
      # - --tls-sni-cert-key=${i.L.tlsSniCertKey.value}
      # - --token-auth-file=${i.L.tokenAuthFile.value}
      # - --tracing-config-file=${i.L.tracingConfigFile.value}
      # - --vmodule=${i.L.vmodule.value}
      # - --watch-cache-sizes=${i.L.watchCacheSizes.value}
      # - --authorization-webhook-config-file=${i.L.authorizationWebhookConfigFile.value}
      # - --cors-allowed-origins=${i.L.corsAllowedOrigins.value}
      # - --debug-socket-path=${i.L.debugSocketPath.value}
      # - --authorization-policy-file=${i.L.authorizationPolicyFile.value}
      # - --authorization-config=${i.L.authorizationConfig.value}
      # - --authentication-token-webhook-config-file=${i.L.authenticationTokenWebhookConfigFile.value}
      # - --authentication-config=${i.L.authenticationConfig.value}
      # - --audit-webhook-config-file=${i.L.auditWebhookConfigFile.value}
      # - --audit-policy-file=${i.L.auditPolicyFile.value}
      # - --audit-log-path=${i.L.auditLogPath.value}
      # - --allow-metric-labels=${i.L.allowMetricLabels.value}
      # - --allow-metric-labels-manifest=${i.L.allowMetricLabelsManifest.value}
      # - --admission-control=${i.L.admissionControl.value}
      # - --admission-control-config-file=${i.L.admissionControlConfigFile.value}
      # - --advertise-address=${i.L.advertiseAddress.value}
      image: ${o.M.baseDockerRegistry.value}/kube-apiserver:${c.M.kubernetes.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          host: $\{MACHINE_LOCAL_ADDRESS}
          path: /livez
          port: ${l.h.kubeAPIServer.portNumber}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      name: kube-apiserver
      readinessProbe:
        failureThreshold: 3
        httpGet:
          host: $\{MACHINE_LOCAL_ADDRESS}
          path: /readyz
          port: ${l.h.kubeAPIServer.portNumber}
          scheme: HTTPS
        periodSeconds: 1
        timeoutSeconds: 15
      resources:
        requests:
          cpu: 250m
      startupProbe:
        failureThreshold: 24
        httpGet:
          host: $\{MACHINE_LOCAL_ADDRESS}
          path: /livez
          port: ${l.h.kubeAPIServer.portNumber}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      volumeMounts:
      - mountPath: /etc/ssl/certs
        name: ca-certs
        readOnly: true
      - mountPath: /etc/ca-certificates
        name: etc-ca-certificates
        readOnly: true
      - mountPath: /etc/pki
        name: etc-pki
        readOnly: true
      - mountPath: /var/log/kubernetes/audit/
        name: k8s-audit
      - mountPath: ${o.M.kuberneteBaseFolderPath.value}/pki
        name: k8s-certs
        readOnly: true
      - mountPath: /usr/local/share/ca-certificates
        name: usr-local-share-ca-certificates
        readOnly: true
      - mountPath: /usr/share/ca-certificates
        name: usr-share-ca-certificates
        readOnly: true
    hostNetwork: true
    priority: 2000001000
    priorityClassName: system-node-critical
    securityContext:
      seccompProfile:
        type: RuntimeDefault
    volumes:
    - hostPath:
        path: /etc/ssl/certs
        type: DirectoryOrCreate
      name: ca-certs
    - hostPath:
        path: /etc/ca-certificates
        type: DirectoryOrCreate
      name: etc-ca-certificates
    - hostPath:
        path: /etc/pki
        type: DirectoryOrCreate
      name: etc-pki
    - hostPath:
        path: /var/log/kubernetes/audit/
        type: DirectoryOrCreate
      name: k8s-audit
    - hostPath:
        path: ${o.M.kuberneteBaseFolderPath.value}/pki
        type: DirectoryOrCreate
      name: k8s-certs
    - hostPath:
        path: /usr/local/share/ca-certificates
        type: DirectoryOrCreate
      name: usr-local-share-ca-certificates
    - hostPath:
        path: /usr/share/ca-certificates
        type: DirectoryOrCreate
      name: usr-share-ca-certificates
  status: {}
  EOF
`})]})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},80260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>g,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/additionalSetup/markingInitComponent","title":"markingInitComponent","description":"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0443\u044e \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u0437\u0430\u0434\u0430\u0442\u044c \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442\u044c \u0438\u0437\u043e\u043b\u044f\u0446\u0438\u044e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430 \u043e\u0442 \u043d\u0435\u0437\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043d\u0430\u0433\u0440\u0443\u0437\u043e\u043a.","source":"@site/docs/tech-docs/kubernetes/additionalSetup/markingInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/additionalSetup","slug":"/tech-docs/kubernetes/additionalSetup/markingInitComponent","permalink":"/tech-docs/kubernetes/additionalSetup/markingInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(1775),l=n(60513),u=n(7478),d=n(75478);const h={},m=void 0,p={},b=[...d.toc];function k(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0443\u044e \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u0437\u0430\u0434\u0430\u0442\u044c \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442\u044c \u0438\u0437\u043e\u043b\u044f\u0446\u0438\u044e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430 \u043e\u0442 \u043d\u0435\u0437\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043d\u0430\u0433\u0440\u0443\u0437\u043e\u043a."})}),"\n",(0,s.jsx)(d.default,{}),"\n",(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  export CLUSTER_NAME=${u.M.clusterName.value}
  export BASE_DOMAIN=${u.M.kubernetesBaseDomain.value}
  export FULL_HOST_NAME=${u.M.virtualMachineFullName.value}
`}),"\n",(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsxs)(o.A,{value:"HardWay",children:[(0,s.jsx)("h4",{children:"\u041c\u0430\u0440\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u0443\u0437\u043b\u0430"}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
      kubectl label node $\{FULL_HOST_NAME} node-role.kubernetes.io/control-plane="" \\
        --kubeconfig=${u.M.kuberneteBaseFolderPath.value}/super-admin.conf
    `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:l.A`
  node/master-1.my-first-cluster.example.com labeled
`})}),(0,s.jsx)("h4",{children:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u0443\u0437\u043b\u0430"}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
      kubectl taint node $\{FULL_HOST_NAME} node-role.kubernetes.io/control-plane="":NoSchedule \\
        --overwrite \\
        --kubeconfig=${u.M.kuberneteBaseFolderPath.value}/super-admin.conf
    `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:l.A`
  node/master-1.my-first-cluster.example.com modified
`})})]}),(0,s.jsxs)(o.A,{value:"Kubeadm",children:[(0,s.jsx)(i.A,{language:"bash",children:l.A`
      kubeadm init phase mark-control-plane \\
        --config=${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${u.M.kuberneteBaseFolderPath.value}/super-admin.conf
    `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:l.A`
  [mark-control-plane] Marking the node master-1.my-first-cluster.example.com as control-plane by adding the labels: [node-role.kubernetes.io/control-plane node.kubernetes.io/exclude-from-external-load-balancers]
  [mark-control-plane] Marking the node master-1.my-first-cluster.example.com as control-plane by adding the taints [node-role.kubernetes.io/control-plane:NoSchedule]
`})})]})]})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},80263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/main","title":"main","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435: \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 `Front Proxy CA`.","source":"@site/docs/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA","slug":"/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/main","permalink":"/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(86260),l=n(60145);const u={},d=void 0,h={},m=[...i.toc,...l.toc];function p(e){const t={admonition:"admonition",code:"code",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.admonition,{type:"warning",children:[(0,s.jsx)(t.mdxAdmonitionTitle,{}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435:"})," \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 ",(0,s.jsx)(t.code,{children:"Front Proxy CA"}),"."]})]}),"\n",(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(o.A,{value:"HardWay",children:(0,s.jsx)(i.default,{})}),(0,s.jsx)(o.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},80614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdClient/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdClient","slug":"/tech-docs/etcd/certificates/components/etcd/etcdClient/kubeadm","permalink":"/tech-docs/etcd/certificates/components/etcd/etcdClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(7478),c=n(1775),i=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase certs etcd-healthcheck-client \\
    --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [certs] Generating "etcd/healthcheck-client" certificate and key
`})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},80731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(7478);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:o.A`
  kubeadm init phase kubeconfig scheduler \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
  #### Генерация Kube Scheduler сертификатов
  [kubeconfig] Writing "scheduler.conf" kubeconfig file
`})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},81970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/main","permalink":"/tech-docs/kubernetes/certificates/components/kubeScheduler/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(82286);const c={},i=void 0,l={},u=[...o.toc];function d(e){return(0,s.jsx)(o.default,{})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d()}},82e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/setupEnvironments/sysctlsComponent","title":"sysctlsComponent","description":"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430:","source":"@site/docs/tech-docs/kubernetes/setupEnvironments/sysctlsComponent.mdx","sourceDirName":"tech-docs/kubernetes/setupEnvironments","slug":"/tech-docs/kubernetes/setupEnvironments/sysctlsComponent","permalink":"/tech-docs/kubernetes/setupEnvironments/sysctlsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(1775),c=n(60513),i=n(87464),l=n(62774);const u={},d=void 0,h={},m=[{value:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430:",id:"\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:4},{value:"\u0421\u0435\u0442\u0435\u0432\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u0441\u0435\u0442\u0435\u0432\u044b\u0435-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:4},{value:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl",id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-sysctl",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",level:4},{value:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl",id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-sysctl-1",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438-1",level:4},{value:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl",id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-sysctl-2",level:4},{value:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl",id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-sysctl-3",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438-2",level:4}];function p(e){const t={admonition:"admonition",code:"code",h4:"h4",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h4,{id:"\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl."}),"\n",(0,s.jsx)(t.li,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439."}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:[(0,s.jsx)(t.h4,{id:"\u0441\u0435\u0442\u0435\u0432\u044b\u0435-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",children:"\u0421\u0435\u0442\u0435\u0432\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),(0,s.jsx)(t.p,{children:"\u0414\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u0442\u0440\u0430\u0444\u0438\u043a\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u0434\u0430\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u044f\u0434\u0440\u0430."}),(0,s.jsxs)(l.A,{groupId:"install-type",children:[(0,s.jsxs)(i.A,{value:"Bash",children:[(0,s.jsx)(t.h4,{id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-sysctl",children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl"}),(0,s.jsx)(o.A,{language:"bash",children:c.A`
      cat <<EOF > /etc/sysctl.d/99-br-netfilter.conf
      net.bridge.bridge-nf-call-iptables=1
      net.bridge.bridge-nf-call-ip6tables=1
      EOF
    `}),(0,s.jsx)(t.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"}),(0,s.jsx)(o.A,{language:"bash",children:c.A`
      sysctl --system
    `})]}),(0,s.jsxs)(i.A,{value:"Cloud-init",children:[(0,s.jsx)(t.h4,{id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-sysctl-1",children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl"}),(0,s.jsx)(o.A,{language:"bash",children:c.A`
      # write_files:
      - path: /etc/sysctl.d/99-br-netfilter.conf
        owner: root:root
        permissions: '0644'
        content: |
          net.bridge.bridge-nf-call-iptables=1
          net.bridge.bridge-nf-call-ip6tables=1
    `}),(0,s.jsx)(t.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438-1",children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"}),(0,s.jsx)(o.A,{language:"bash",children:c.A`
      # runcmd:
      - sysctl --system
    `})]})]}),(0,s.jsxs)(t.p,{children:["\u0415\u0441\u043b\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,s.jsx)(t.code,{children:"net.ipv4.ip_forward"})," \u043d\u0435 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d, \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0441\u044b\u043b\u0430\u0442\u044c IP-\u043f\u0430\u043a\u0435\u0442\u044b \u043c\u0435\u0436\u0434\u0443 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430\u043c\u0438. \u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u0441\u0435\u0442\u0435\u0432\u044b\u043c \u0441\u0431\u043e\u044f\u043c \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 \u0438 \u043f\u043e\u0442\u0435\u0440\u0435 \u0441\u0432\u044f\u0437\u0438 \u043c\u0435\u0436\u0434\u0443 \u043f\u043e\u0434\u0430\u043c\u0438."]}),(0,s.jsxs)(l.A,{groupId:"install-type",children:[(0,s.jsxs)(i.A,{value:"Bash",children:[(0,s.jsx)(t.h4,{id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-sysctl-2",children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl"}),(0,s.jsx)(o.A,{language:"bash",children:c.A`
      cat <<EOF > /etc/sysctl.d/99-network.conf
      net.ipv4.ip_forward=1
      EOF
    `}),(0,s.jsx)(o.A,{language:"bash",children:c.A`
      sysctl --system
    `})]}),(0,s.jsxs)(i.A,{value:"Cloud-init",children:[(0,s.jsx)(t.h4,{id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-sysctl-3",children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl"}),(0,s.jsx)(o.A,{language:"bash",children:c.A`
      # write_files:
      - path: /etc/sysctl.d/99-network.conf
        owner: root:root
        permissions: '0644'
        content: |
          net.ipv4.ip_forward=1
    `}),(0,s.jsx)(t.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438-2",children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"}),(0,s.jsx)(o.A,{language:"bash",children:c.A`
      # runcmd:
      - sysctl --system
    `})]})]})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},82286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/main","permalink":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(62376),l=n(80731),u=n(7915);const d={},h=void 0,m={},p=[...i.toc,...u.toc,...l.toc];function b(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsxs)(o.A,{value:"HardWay",children:[(0,s.jsx)(i.default,{}),(0,s.jsx)(u.default,{})]}),(0,s.jsx)(o.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},83807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/centerAuthority/etcdCA/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/etcd/certificates/centerAuthority/etcdCA/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/centerAuthority/etcdCA","slug":"/tech-docs/etcd/certificates/centerAuthority/etcdCA/openssl","permalink":"/tech-docs/etcd/certificates/centerAuthority/etcdCA/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(6353),c=n(7478),i=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki/etcd
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
    cat <<EOF > ${o.$.etcdCA.crtConf}
    [req]
    distinguished_name = req_distinguished_name
    x509_extensions    = v3_ca
    prompt             = no

    [req_distinguished_name]
    CN = "${o.$.etcdCA.cname}"

    [v3_ca]
    keyUsage = critical, keyCertSign, keyEncipherment, digitalSignature
    basicConstraints = critical,CA:TRUE
    EOF
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
    openssl genrsa \\
      -out ${o.$.etcdCA.keyPath} ${o.$.etcdCA.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
    openssl req \\
      -x509 \\
      -new \\
      -nodes \\
      -key ${o.$.etcdCA.keyPath} \\
      -sha256 \\
      -days 3650 \\
      -out ${o.$.etcdCA.crtPath} \\
      -config ${o.$.etcdCA.crtConf}
  `})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},84582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/etcd-settings","title":"etcd-settings","description":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/etcd/components/etcd/setupComponent.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/etcd-settings","permalink":"/tech-docs/etcd/components/etcd/etcd-settings","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"etcd-settings"},"sidebar":"techDocs","previous":{"title":"5.1.2.2. \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b","permalink":"/tech-docs/etcd/certificates/all-certificates"},"next":{"title":"5.1.3.2. \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0443\u0437\u043b\u0430","permalink":"/tech-docs/etcd/components/etcd/add-members"}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(69423),l=n(24917);const u={id:"etcd-settings"},d=void 0,h={},m=[...i.toc,...l.toc];function p(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,s.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(o.A,{value:"HardWay",children:(0,s.jsx)(i.default,{})}),(0,s.jsx)(o.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},84588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/setupEnvironments/allMasterTabs","title":"allMasterTabs","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/setupEnvironments/allMasterTabs.mdx","sourceDirName":"tech-docs/kubernetes/setupEnvironments","slug":"/tech-docs/kubernetes/setupEnvironments/allMasterTabs","permalink":"/tech-docs/kubernetes/setupEnvironments/allMasterTabs","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(60513),l=n(1775);const u={},d=void 0,h={},m=[];function p(e){return(0,s.jsxs)(c.A,{children:[(0,s.jsx)(o.A,{value:"master-1",children:(0,s.jsx)(l.A,{language:"bash",children:i.A`
        export HOST_NAME=master-1
      `})}),(0,s.jsx)(o.A,{value:"master-2",children:(0,s.jsx)(l.A,{language:"bash",children:i.A`
        export HOST_NAME=master-2
      `})}),(0,s.jsx)(o.A,{value:"master-3",children:(0,s.jsx)(l.A,{language:"bash",children:i.A`
        export HOST_NAME=master-3
      `})})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},84778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/centerAuthority/etcdCA/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/etcd/certificates/centerAuthority/etcdCA/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/centerAuthority/etcdCA","slug":"/tech-docs/etcd/certificates/centerAuthority/etcdCA/kubeadm","permalink":"/tech-docs/etcd/certificates/centerAuthority/etcdCA/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(7478),c=n(1775),i=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase certs etcd-ca \\
    --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
  #### Create ETCD CA
  [certs] Generating "etcd/ca" certificate and key
`})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},85421:(e,t,n)=>{n.d(t,{w:()=>a});var r=n(31798),s=n(7478);const a={authenticationKubeconfig:{value:`${s.M.kuberneteBaseFolderPath.value}/scheduler.conf`},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"true"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationKubeconfig:{value:`${s.M.kuberneteBaseFolderPath.value}/scheduler.conf`},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},contentionProfiling:{value:"true"},help:{value:"false"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"100"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"50"},kubeconfig:{value:`${s.M.kuberneteBaseFolderPath.value}/scheduler.conf`},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-scheduler"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},podMaxInUnschedulablePodsDuration:{value:"5m0s"},profiling:{value:"true"},requestheaderExtraHeadersPrefix:{value:"[x-remote-extra-]"},requestheaderGroupHeaders:{value:"[x-remote-group]"},requestheaderUsernameHeaders:{value:"[x-remote-user]"},securePort:{value:`${r.h.kubeScheduler.portNumber}`},v:{value:"2"},version:{value:"false"},allowMetricLabels:{value:"[]"},disabledMetrics:{value:"[]"},requestheaderAllowedNames:{value:"[]"},tlsCipherSuites:{value:"[]"},tlsSniCertKey:{value:"[]"},allowMetricLabelsManifest:{value:""},certDir:{value:""},clientCaFile:{value:""},config:{value:""},featureGates:{value:""},vmodule:{value:""},writeConfigTo:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:""},showHiddenMetricsForVersion:{value:""},tlsCertFile:{value:""},requestheaderClientCaFile:{value:""},master:{value:""}}},85631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>g,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/staticPod","title":"staticPod","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/staticPod","permalink":"/tech-docs/kubernetes/components/controllerManager/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(7478),c=(n(6353),n(31798)),i=n(63770),l=n(66483),u=n(60513),d=n(1775);const h={},m=void 0,p={},b=[];function k(e){const{Details:t}={...(0,a.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(d.A,{language:"bash",children:u.A`
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/manifests
  `}),"\n",(0,s.jsxs)(t,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Static Pod Kube-Controller-Manager"}),(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),(0,s.jsx)(d.A,{language:"bash",children:u.A`
    cat <<EOF > ${o.M.kuberneteBaseFolderPath.value}/manifests/kube-controller-manager.yaml
    apiVersion: v1
    kind: Pod
    metadata:
      creationTimestamp: null
      labels:
        component: kube-controller-manager
        tier: control-plane
      name: kube-controller-manager
      namespace: kube-system
    spec:
      containers:
      - command:
        - kube-controller-manager
        - --allocate-node-cidrs=${l.L.allocateNodeCidrs.value}
        - --allow-untagged-cloud=${l.L.allowUntaggedCloud.value}
        - --attach-detach-reconcile-sync-period=${l.L.attachDetachReconcileSyncPeriod.value}
        - --authentication-kubeconfig=${l.L.authenticationKubeconfig.value}
        - --authentication-skip-lookup=${l.L.authenticationSkipLookup.value}
        - --authentication-token-webhook-cache-ttl=${l.L.authenticationTokenWebhookCacheTtl.value}
        - --authentication-tolerate-lookup-failure=${l.L.authenticationTolerateLookupFailure.value}
        - --authorization-always-allow-paths=${l.L.authorizationAlwaysAllowPaths.value}
        - --authorization-kubeconfig=${l.L.authorizationKubeconfig.value}
        - --authorization-webhook-cache-authorized-ttl=${l.L.authorizationWebhookCacheAuthorizedTtl.value}
        - --authorization-webhook-cache-unauthorized-ttl=${l.L.authorizationWebhookCacheUnauthorizedTtl.value}
        - --bind-address=${l.L.bindAddress.value}
        - --cidr-allocator-type=${l.L.cidrAllocatorType.value}
        - --client-ca-file=${l.L.clientCaFile.value}
        - --cloud-provider=${l.L.cloudProvider.value}
        - --cloud-provider-gce-lb-src-cidrs=${l.L.cloudProviderGceLbSrcCidrs.value}
        - --cluster-signing-cert-file=${l.L.clusterSigningCertFile.value}
        - --cluster-signing-duration=${l.L.clusterSigningDuration.value}
        - --cluster-signing-key-file=${l.L.clusterSigningKeyFile.value}
        - --concurrent-cron-job-syncs=${l.L.concurrentCronJobSyncs.value}
        - --concurrent-deployment-syncs=${l.L.concurrentDeploymentSyncs.value}
        - --concurrent-endpoint-syncs=${l.L.concurrentEndpointSyncs.value}
        - --concurrent-ephemeralvolume-syncs=${l.L.concurrentEphemeralvolumeSyncs.value}
        - --concurrent-gc-syncs=${l.L.concurrentGcSyncs.value}
        - --concurrent-horizontal-pod-autoscaler-syncs=${l.L.concurrentHorizontalPodAutoscalerSyncs.value}
        - --concurrent-job-syncs=${l.L.concurrentJobSyncs.value}
        - --concurrent-namespace-syncs=${l.L.concurrentNamespaceSyncs.value}
        - --concurrent-rc-syncs=${l.L.concurrentRcSyncs.value}
        - --concurrent-replicaset-syncs=${l.L.concurrentReplicasetSyncs.value}
        - --concurrent-resource-quota-syncs=${l.L.concurrentResourceQuotaSyncs.value}
        - --concurrent-service-endpoint-syncs=${l.L.concurrentServiceEndpointSyncs.value}
        - --concurrent-service-syncs=${l.L.concurrentServiceSyncs.value}
        - --concurrent-serviceaccount-token-syncs=${l.L.concurrentServiceaccountTokenSyncs.value}
        - --concurrent-statefulset-syncs=${l.L.concurrentStatefulsetSyncs.value}
        - --concurrent-ttl-after-finished-syncs=${l.L.concurrentTtlAfterFinishedSyncs.value}
        - --concurrent-validating-admission-policy-status-syncs=${l.L.concurrentValidatingAdmissionPolicyStatusSyncs.value}
        - --configure-cloud-routes=${l.L.configureCloudRoutes.value}
        - --contention-profiling=${l.L.contentionProfiling.value}
        - --controller-start-interval=${l.L.controllerStartInterval.value}
        - --controllers=${l.L.controllers.value}
        - --disable-attach-detach-reconcile-sync=${l.L.disableAttachDetachReconcileSync.value}
        - --disable-force-detach-on-timeout=${l.L.disableForceDetachOnTimeout.value}
        - --enable-dynamic-provisioning=${l.L.enableDynamicProvisioning.value}
        - --enable-garbage-collector=${l.L.enableGarbageCollector.value}
        - --enable-hostpath-provisioner=${l.L.enableHostpathProvisioner.value}
        - --enable-leader-migration=${l.L.enableLeaderMigration.value}
        - --endpoint-updates-batch-period=${l.L.endpointUpdatesBatchPeriod.value}
        - --endpointslice-updates-batch-period=${l.L.endpointsliceUpdatesBatchPeriod.value}
        - --feature-gates=${l.L.featureGates.value}
        - --flex-volume-plugin-dir=${l.L.flexVolumePluginDir.value}
        - --help=${l.L.help.value}
        - --horizontal-pod-autoscaler-cpu-initialization-period=${l.L.horizontalPodAutoscalerCpuInitializationPeriod.value}
        - --horizontal-pod-autoscaler-downscale-delay=${l.L.horizontalPodAutoscalerDownscaleDelay.value}
        - --horizontal-pod-autoscaler-downscale-stabilization=${l.L.horizontalPodAutoscalerDownscaleStabilization.value}
        - --horizontal-pod-autoscaler-initial-readiness-delay=${l.L.horizontalPodAutoscalerInitialReadinessDelay.value}
        - --horizontal-pod-autoscaler-sync-period=${l.L.horizontalPodAutoscalerSyncPeriod.value}
        - --horizontal-pod-autoscaler-tolerance=${l.L.horizontalPodAutoscalerTolerance.value}
        - --horizontal-pod-autoscaler-upscale-delay=${l.L.horizontalPodAutoscalerUpscaleDelay.value}
        - --http2-max-streams-per-connection=${l.L.http2MaxStreamsPerConnection.value}
        - --kube-api-burst=${l.L.kubeApiBurst.value}
        - --kube-api-content-type=${l.L.kubeApiContentType.value}
        - --kube-api-qps=${l.L.kubeApiQps.value}
        - --kubeconfig=${l.L.kubeconfig.value}
        - --large-cluster-size-threshold=${l.L.largeClusterSizeThreshold.value}
        - --leader-elect=${l.L.leaderElect.value}
        - --leader-elect-lease-duration=${l.L.leaderElectLeaseDuration.value}
        - --leader-elect-renew-deadline=${l.L.leaderElectRenewDeadline.value}
        - --leader-elect-resource-lock=${l.L.leaderElectResourceLock.value}
        - --leader-elect-resource-name=${l.L.leaderElectResourceName.value}
        - --leader-elect-resource-namespace=${l.L.leaderElectResourceNamespace.value}
        - --leader-elect-retry-period=${l.L.leaderElectRetryPeriod.value}
        - --legacy-service-account-token-clean-up-period=${l.L.legacyServiceAccountTokenCleanUpPeriod.value}
        - --log-flush-frequency=${l.L.logFlushFrequency.value}
        - --log-json-info-buffer-size=${l.L.logJsonInfoBufferSize.value}
        - --log-json-split-stream=${l.L.logJsonSplitStream.value}
        - --log-text-info-buffer-size=${l.L.logTextInfoBufferSize.value}
        - --log-text-split-stream=${l.L.logTextSplitStream.value}
        - --logging-format=${l.L.loggingFormat.value}
        - --max-endpoints-per-slice=${l.L.maxEndpointsPerSlice.value}
        - --min-resync-period=${l.L.minResyncPeriod.value}
        - --mirroring-concurrent-service-endpoint-syncs=${l.L.mirroringConcurrentServiceEndpointSyncs.value}
        - --mirroring-endpointslice-updates-batch-period=${l.L.mirroringEndpointsliceUpdatesBatchPeriod.value}
        - --mirroring-max-endpoints-per-subset=${l.L.mirroringMaxEndpointsPerSubset.value}
        - --namespace-sync-period=${l.L.namespaceSyncPeriod.value}
        - --node-cidr-mask-size=${l.L.nodeCidrMaskSize.value}
        - --node-cidr-mask-size-ipv4=${l.L.nodeCidrMaskSizeIpv4.value}
        - --node-cidr-mask-size-ipv6=${l.L.nodeCidrMaskSizeIpv6.value}
        - --node-eviction-rate=${l.L.nodeEvictionRate.value}
        - --node-monitor-grace-period=${l.L.nodeMonitorGracePeriod.value}
        - --node-monitor-period=${l.L.nodeMonitorPeriod.value}
        - --node-startup-grace-period=${l.L.nodeStartupGracePeriod.value}
        - --node-sync-period=${l.L.nodeSyncPeriod.value}
        - --permit-address-sharing=${l.L.permitAddressSharing.value}
        - --permit-port-sharing=${l.L.permitPortSharing.value}
        - --profiling=${l.L.profiling.value}
        - --pv-recycler-increment-timeout-nfs=${l.L.pvRecyclerIncrementTimeoutNfs.value}
        - --pv-recycler-minimum-timeout-hostpath=${l.L.pvRecyclerMinimumTimeoutHostpath.value}
        - --pv-recycler-minimum-timeout-nfs=${l.L.pvRecyclerMinimumTimeoutNfs.value}
        - --pv-recycler-timeout-increment-hostpath=${l.L.pvRecyclerTimeoutIncrementHostpath.value}
        - --pvclaimbinder-sync-period=${l.L.pvclaimbinderSyncPeriod.value}
        - --requestheader-client-ca-file=${l.L.requestheaderClientCaFile.value}
        - --requestheader-extra-headers-prefix=${l.L.requestheaderExtraHeadersPrefix.value}
        - --requestheader-group-headers=${l.L.requestheaderGroupHeaders.value}
        - --requestheader-username-headers=${l.L.requestheaderUsernameHeaders.value}
        - --resource-quota-sync-period=${l.L.resourceQuotaSyncPeriod.value}
        - --root-ca-file=${l.L.rootCaFile.value}
        - --route-reconciliation-period=${l.L.routeReconciliationPeriod.value}
        - --secondary-node-eviction-rate=${l.L.secondaryNodeEvictionRate.value}
        - --secure-port=${l.L.securePort.value}
        - --service-account-private-key-file=${l.L.serviceAccountPrivateKeyFile.value}
        - --terminated-pod-gc-threshold=${l.L.terminatedPodGcThreshold.value}
        - --unhealthy-zone-threshold=${l.L.unhealthyZoneThreshold.value}
        - --use-service-account-credentials=${l.L.useServiceAccountCredentials.value}
        - --v=${l.L.v.value}
        - --version=${l.L.version.value}
        - --volume-host-allow-local-loopback=${l.L.volumeHostAllowLocalLoopback.value}

        # Не указывать если значение "" или undefined
        # - --cluster-signing-kube-apiserver-client-cert-file=${l.L.clusterSigningKubeApiserverClientCertFile.value}
        # - --cluster-signing-kube-apiserver-client-key-file=${l.L.clusterSigningKubeApiserverClientKeyFile.value}
        # - --cluster-signing-kubelet-client-cert-file=${l.L.clusterSigningKubeletClientCertFile.value}
        # - --cluster-signing-kubelet-client-key-file=${l.L.clusterSigningKubeletClientKeyFile.value}
        # - --cluster-signing-kubelet-serving-cert-file=${l.L.clusterSigningKubeletServingCertFile.value}
        # - --cluster-signing-kubelet-serving-key-file=${l.L.clusterSigningKubeletServingKeyFile.value}
        # - --cluster-signing-legacy-unknown-cert-file=${l.L.clusterSigningLegacyUnknownCertFile.value}
        # - --cluster-signing-legacy-unknown-key-file=${l.L.clusterSigningLegacyUnknownKeyFile.value}
        # - --cluster-cidr=${l.L.clusterCidr.value}
        # - --cloud-config=${l.L.cloudConfig.value}
        # - --cert-dir=${l.L.certDir.value}
        # - --allow-metric-labels-manifest=${l.L.allowMetricLabelsManifest.value}
        # - --allow-metric-labels=${l.L.allowMetricLabels.value}
        # - --disabled-metrics=${l.L.disabledMetrics.value}
        # - --leader-migration-config=${l.L.leaderMigrationConfig.value}
        # - --master=${l.L.master.value}
        # - --pv-recycler-pod-template-filepath-hostpath=${l.L.pvRecyclerPodTemplateFilepathHostpath.value}
        # - --pv-recycler-pod-template-filepath-nfs=${l.L.pvRecyclerPodTemplateFilepathNfs.value}
        # - --service-cluster-ip-range=${l.L.serviceClusterIpRange.value}
        # - --show-hidden-metrics-for-version=${l.L.showHiddenMetricsForVersion.value}
        # - --tls-cert-file=${l.L.tlsCertFile.value}
        # - --tls-cipher-suites=${l.L.tlsCipherSuites.value}
        # - --tls-min-version=${l.L.tlsMinVersion.value}
        # - --tls-private-key-file=${l.L.tlsPrivateKeyFile.value}
        # - --tls-sni-cert-key=${l.L.tlsSniCertKey.value}
        # - --vmodule=${l.L.vmodule.value}
        # - --volume-host-cidr-denylist=${l.L.volumeHostCidrDenylist.value}
        # - --external-cloud-volume-plugin=${l.L.externalCloudVolumePlugin.value}
        # - --requestheader-allowed-names=${l.L.requestheaderAllowedNames.value}
        image: ${o.M.baseDockerRegistry.value}/kube-controller-manager:${i.M.kubernetes.value}
        imagePullPolicy: IfNotPresent
        livenessProbe:
          failureThreshold: 8
          httpGet:
            path: /healthz
            port: ${c.h.kubeControllerManager.portNumber}
            scheme: HTTPS
          initialDelaySeconds: 10
          periodSeconds: 10
          timeoutSeconds: 15
        name: kube-controller-manager
        resources:
          requests:
            cpu: 200m
        startupProbe:
          failureThreshold: 24
          httpGet:
            path: /healthz
            port: ${c.h.kubeControllerManager.portNumber}
            scheme: HTTPS
          initialDelaySeconds: 10
          periodSeconds: 10
          timeoutSeconds: 15
        volumeMounts:
        - mountPath: /etc/ssl/certs
          name: ca-certs
          readOnly: true
        - mountPath: /etc/ca-certificates
          name: etc-ca-certificates
          readOnly: true
        - mountPath: /etc/pki
          name: etc-pki
          readOnly: true
        - mountPath: /usr/libexec/kubernetes/kubelet-plugins/volume/exec
          name: flexvolume-dir
        - mountPath: ${o.M.kuberneteBaseFolderPath.value}/pki
          name: k8s-certs
          readOnly: true
        - mountPath: ${o.M.kuberneteBaseFolderPath.value}/controller-manager.conf
          name: kubeconfig
          readOnly: true
        - mountPath: /usr/local/share/ca-certificates
          name: usr-local-share-ca-certificates
          readOnly: true
        - mountPath: /usr/share/ca-certificates
          name: usr-share-ca-certificates
          readOnly: true
      hostNetwork: true
      priority: 2000001000
      priorityClassName: system-node-critical
      securityContext:
        seccompProfile:
          type: RuntimeDefault
      volumes:
      - hostPath:
          path: /etc/ssl/certs
          type: DirectoryOrCreate
        name: ca-certs
      - hostPath:
          path: /etc/ca-certificates
          type: DirectoryOrCreate
        name: etc-ca-certificates
      - hostPath:
          path: /etc/pki
          type: DirectoryOrCreate
        name: etc-pki
      - hostPath:
          path: /usr/libexec/kubernetes/kubelet-plugins/volume/exec
          type: DirectoryOrCreate
        name: flexvolume-dir
      - hostPath:
          path: ${o.M.kuberneteBaseFolderPath.value}/pki
          type: DirectoryOrCreate
        name: k8s-certs
      - hostPath:
          path: ${o.M.kuberneteBaseFolderPath.value}/controller-manager.conf
          type: FileOrCreate
        name: kubeconfig
      - hostPath:
          path: /usr/local/share/ca-certificates
          type: DirectoryOrCreate
        name: usr-local-share-ca-certificates
      - hostPath:
          path: /usr/share/ca-certificates
          type: DirectoryOrCreate
        name: usr-share-ca-certificates
    status: {}
    EOF
  `})]})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},86260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA","slug":"/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/openssl","permalink":"/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(6353),c=n(7478),i=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
    cat <<EOF > ${o.$.frontProxyCA.crtConf}
    [req]
    distinguished_name = req_distinguished_name
    x509_extensions    = v3_ca
    prompt             = no

    [req_distinguished_name]
    CN = ${o.$.frontProxyCA.cname}

    [v3_ca]
    keyUsage = critical, keyCertSign, keyEncipherment, digitalSignature
    basicConstraints = critical,CA:TRUE
    EOF
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${o.$.frontProxyCA.keyPath} ${o.$.frontProxyCA.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -x509 \\
    -new \\
    -nodes \\
    -key ${o.$.frontProxyCA.keyPath} \\
    -sha256 \\
    -days 3650 \\
    -out ${o.$.frontProxyCA.crtPath} \\
    -config ${o.$.frontProxyCA.crtConf}
  `})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},86613:(e,t,n)=>{n.d(t,{IL:()=>l,Nu:()=>i,Uj:()=>u,hZ:()=>d});var r=n(60513),s=n(10119),a=n(25292),o=n(66483),c=n(85421);const i={data:{value:r.A`
      advertise-client-urls: "${s.D.advertiseClientUrls.value}"
      auto-compaction-retention: "${s.D.autoCompactionRetention.value}"
      cert-file: "${s.D.certFile.value}"
      client-cert-auth: "${s.D.clientCertAuth.value}"
      data-dir: "${s.D.dataDir.value}"
      election-timeout: "${s.D.electionTimeout.value}"
      heartbeat-interval: "${s.D.heartbeatInterval.value}"
      initial-advertise-peer-urls: "${s.D.initialAdvertisePeerUrls.value}"
      initial-cluster: "${s.D.initialCluster.value}"
      key-file: "${s.D.keyFile.value}"
      listen-client-urls: "${s.D.listenClientUrls.value}"
      listen-metrics-urls: "${s.D.listenMetricsUrls.value}"
      listen-peer-urls: "${s.D.listenPeerUrls.value}"
      logger: "${s.D.logger.value}"
      max-snapshots: "${s.D.maxSnapshots.value}"
      max-wals: "${s.D.maxWals.value}"
      metrics: "${s.D.metrics.value}"
      name: "${s.D.name.value}"
      peer-cert-file: "${s.D.peerCertFile.value}"
      peer-client-cert-auth: "${s.D.peerClientCertAuth.value}"
      peer-key-file: "${s.D.peerKeyFile.value}"
      peer-trusted-ca-file: "${s.D.peerTrustedCAFile.value}"
      snapshot-count: "${s.D.snapshotCount.value}"
      quota-backend-bytes: "10737418240" # TODO
      experimental-initial-corrupt-check: "true"
      experimental-watch-progress-notify-interval: "5s"
      trusted-ca-file: "${s.D.trustedCAFile.value}"
    `}},l={data:{value:r.A`
      aggregator-reject-forwarding-redirect: "${a.L.aggregatorRejectForwardingRedirect.value}"
      allow-privileged: "${a.L.allowPrivileged.value}"
      anonymous-auth: "${a.L.anonymousAuth.value}"
      api-audiences: "${a.L.apiAudiences.value}"
      apiserver-count: "${a.L.apiserverCount.value}"
      audit-log-batch-buffer-size: "${a.L.auditLogBatchBufferSize.value}"
      audit-log-batch-max-size: "${a.L.auditLogBatchMaxSize.value}"
      audit-log-batch-max-wait: "${a.L.auditLogBatchMaxWait.value}"
      audit-log-batch-throttle-burst: "${a.L.auditLogBatchThrottleBurst.value}"
      audit-log-batch-throttle-enable: "${a.L.auditLogBatchThrottleEnable.value}"
      audit-log-batch-throttle-qps: "${a.L.auditLogBatchThrottleQps.value}"
      audit-log-compress: "${a.L.auditLogCompress.value}"
      audit-log-format: "${a.L.auditLogFormat.value}"
      audit-log-maxage: "${a.L.auditLogMaxage.value}"
      audit-log-maxbackup: "${a.L.auditLogMaxbackup.value}"
      audit-log-maxsize: "${a.L.auditLogMaxsize.value}"
      audit-log-mode: "${a.L.auditLogMode.value}"
      audit-log-truncate-enabled: "${a.L.auditLogTruncateEnabled.value}"
      audit-log-truncate-max-batch-size: "${a.L.auditLogTruncateMaxBatchSize.value}"
      audit-log-truncate-max-event-size: "${a.L.auditLogTruncateMaxEventSize.value}"
      audit-log-version: "${a.L.auditLogVersion.value}"
      audit-webhook-batch-buffer-size: "${a.L.auditWebhookBatchBufferSize.value}"
      audit-webhook-batch-initial-backoff: "${a.L.auditWebhookBatchInitialBackoff.value}"
      audit-webhook-batch-max-size: "${a.L.auditWebhookBatchMaxSize.value}"
      audit-webhook-batch-max-wait: "${a.L.auditWebhookBatchMaxWait.value}"
      audit-webhook-batch-throttle-burst: "${a.L.auditWebhookBatchThrottleBurst.value}"
      audit-webhook-batch-throttle-enable: "${a.L.auditWebhookBatchThrottleEnable.value}"
      audit-webhook-batch-throttle-qps: "${a.L.auditWebhookBatchThrottleQps.value}"
      audit-webhook-initial-backoff: "${a.L.auditWebhookInitialBackoff.value}"
      audit-webhook-mode: "${a.L.auditWebhookMode.value}"
      audit-webhook-truncate-enabled: "${a.L.auditWebhookTruncateEnabled.value}"
      audit-webhook-truncate-max-batch-size: "${a.L.auditWebhookTruncateMaxBatchSize.value}"
      audit-webhook-truncate-max-event-size: "${a.L.auditWebhookTruncateMaxEventSize.value}"
      audit-webhook-version: "${a.L.auditWebhookVersion.value}"
      authentication-token-webhook-cache-ttl: "${a.L.authenticationTokenWebhookCacheTtl.value}"
      authentication-token-webhook-version: "${a.L.authenticationTokenWebhookVersion.value}"
      authorization-mode: "${a.L.authorizationMode.value}"
      authorization-webhook-cache-authorized-ttl: "${a.L.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${a.L.authorizationWebhookCacheUnauthorizedTtl.value}"
      authorization-webhook-version: "${a.L.authorizationWebhookVersion.value}"
      bind-address: "${a.L.bindAddress.value}"
      cert-dir: "${a.L.certDir.value}"
      client-ca-file: "${a.L.clientCaFile.value}"
      cloud-provider: "${a.L.cloudProvider.value}"
      cloud-provider-gce-l7lb-src-cidrs: "${a.L.cloudProviderGceL7lbSrcCidrs.value}"
      cloud-provider-gce-lb-src-cidrs: "${a.L.cloudProviderGceLbSrcCidrs.value}"
      contention-profiling: "${a.L.contentionProfiling.value}"
      default-not-ready-toleration-seconds: "${a.L.defaultNotReadyTolerationSeconds.value}"
      default-unreachable-toleration-seconds: "${a.L.defaultUnreachableTolerationSeconds.value}"
      default-watch-cache-size: "${a.L.defaultWatchCacheSize.value}"
      delete-collection-workers: "${a.L.deleteCollectionWorkers.value}"
      enable-admission-plugins: "${a.L.enableAdmissionPlugins.value}"
      enable-aggregator-routing: "${a.L.enableAggregatorRouting.value}"
      enable-bootstrap-token-auth: "${a.L.enableBootstrapTokenAuth.value}"
      enable-garbage-collector: "${a.L.enableGarbageCollector.value}"
      enable-logs-handler: "${a.L.enableLogsHandler.value}"
      enable-priority-and-fairness: "${a.L.enablePriorityAndFairness.value}"
      encryption-provider-config-automatic-reload: "${a.L.encryptionProviderConfigAutomaticReload.value}"
      endpoint-reconciler-type: "${a.L.endpointReconcilerType.value}"
      etcd-cafile: "${a.L.etcdCafile.value}"
      etcd-certfile: "${a.L.etcdCertfile.value}"
      etcd-compaction-interval: "${a.L.etcdCompactionInterval.value}"
      etcd-count-metric-poll-period: "${a.L.etcdCountMetricPollPeriod.value}"
      etcd-db-metric-poll-interval: "${a.L.etcdDbMetricPollInterval.value}"
      etcd-healthcheck-timeout: "${a.L.etcdHealthcheckTimeout.value}"
      etcd-keyfile: "${a.L.etcdKeyfile.value}"
      etcd-prefix: "${a.L.etcdPrefix.value}"
      etcd-readycheck-timeout: "${a.L.etcdReadycheckTimeout.value}"
      etcd-servers: "${a.L.etcdServers.value}"
      event-ttl: "${a.L.eventTtl.value}"
      feature-gates: "${a.L.featureGates.value}"
      goaway-chance: "${a.L.goawayChance.value}"
      help: "${a.L.help.value}"
      http2-max-streams-per-connection: "${a.L.http2MaxStreamsPerConnection.value}"
      kubelet-client-certificate: "${a.L.kubeletClientCertificate.value}"
      kubelet-client-key: "${a.L.kubeletClientKey.value}"
      kubelet-port: "${a.L.kubeletPort.value}"
      kubelet-preferred-address-types: "${a.L.kubeletPreferredAddressTypes.value}"
      kubelet-read-only-port: "${a.L.kubeletReadOnlyPort.value}"
      kubelet-timeout: "${a.L.kubeletTimeout.value}"
      kubernetes-service-node-port: "${a.L.kubernetesServiceNodePort.value}"
      lease-reuse-duration-seconds: "${a.L.leaseReuseDurationSeconds.value}"
      livez-grace-period: "${a.L.livezGracePeriod.value}"
      log-flush-frequency: "${a.L.logFlushFrequency.value}"
      logging-format: "${a.L.loggingFormat.value}"
      log-json-info-buffer-size: "${a.L.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${a.L.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${a.L.logTextInfoBufferSize.value}"
      log-text-split-stream: "${a.L.logTextSplitStream.value}"
      max-connection-bytes-per-sec: "${a.L.maxConnectionBytesPerSec.value}"
      max-mutating-requests-inflight: "${a.L.maxMutatingRequestsInflight.value}"
      max-requests-inflight: "${a.L.maxRequestsInflight.value}"
      min-request-timeout: "${a.L.minRequestTimeout.value}"
      permit-address-sharing: "${a.L.permitAddressSharing.value}"
      permit-port-sharing: "${a.L.permitPortSharing.value}"
      profiling: "${a.L.profiling.value}"
      proxy-client-cert-file: "${a.L.proxyClientCertFile.value}"
      proxy-client-key-file: "${a.L.proxyClientKeyFile.value}"
      requestheader-allowed-names: "${a.L.requestheaderAllowedNames.value}"
      requestheader-client-ca-file: "${a.L.requestheaderClientCaFile.value}"
      requestheader-extra-headers-prefix: "${a.L.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${a.L.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${a.L.requestheaderUsernameHeaders.value}"
      request-timeout: "${a.L.requestTimeout.value}"
      runtime-config: "${a.L.runtimeConfig.value}"
      secure-port: "${a.L.securePort.value}"
      service-account-extend-token-expiration: "${a.L.serviceAccountExtendTokenExpiration.value}"
      service-account-issuer: "${a.L.serviceAccountIssuer.value}"
      service-account-key-file: "${a.L.serviceAccountKeyFile.value}"
      service-account-lookup: "${a.L.serviceAccountLookup.value}"
      service-account-max-token-expiration: "${a.L.serviceAccountMaxTokenExpiration.value}"
      service-account-signing-key-file: "${a.L.serviceAccountSigningKeyFile.value}"
      service-cluster-ip-range: "${a.L.serviceClusterIpRange.value}"
      service-node-port-range: "${a.L.serviceNodePortRange.value}"
      shutdown-delay-duration: "${a.L.shutdownDelayDuration.value}"
      shutdown-send-retry-after: "${a.L.shutdownSendRetryAfter.value}"
      shutdown-watch-termination-grace-period: "${a.L.shutdownWatchTerminationGracePeriod.value}"
      storage-backend: "${a.L.storageBackend.value}"
      storage-media-type: "${a.L.storageMediaType.value}"
      tls-cert-file: "${a.L.tlsCertFile.value}"
      tls-private-key-file: "${a.L.tlsPrivateKeyFile.value}"
      v: "${a.L.v.value}"
      version: "${a.L.version.value}"
      watch-cache: "${a.L.watchCache.value}"

      # Не указывать если значение "" или undefined
      # cloud-config: "${a.L.cloudConfig.value}"
      # strict-transport-security-directives: "${a.L.strictTransportSecurityDirectives.value}"
      # disable-admission-plugins: "${a.L.disableAdmissionPlugins.value}"
      # disabled-metrics: "${a.L.disabledMetrics.value}"
      # egress-selector-config-file: "${a.L.egressSelectorConfigFile.value}"
      # encryption-provider-config: "${a.L.encryptionProviderConfig.value}"
      # etcd-servers-overrides: "${a.L.etcdServersOverrides.value}"
      # external-hostname: "${a.L.externalHostname.value}"
      # kubelet-certificate-authority: "${a.L.kubeletCertificateAuthority.value}"
      # oidc-ca-file: "${a.L.oidcCaFile.value}"
      # oidc-client-id: "${a.L.oidcClientId.value}"
      # oidc-groups-claim: "${a.L.oidcGroupsClaim.value}"
      # oidc-groups-prefix: "${a.L.oidcGroupsPrefix.value}"
      # oidc-issuer-url: "${a.L.oidcIssuerUrl.value}"
      # oidc-required-claim: "${a.L.oidcRequiredClaim.value}"
      # oidc-signing-algs: "${a.L.oidcSigningAlgs.value}"
      # oidc-username-claim: "${a.L.oidcUsernameClaim.value}"
      # oidc-username-prefix: "${a.L.oidcUsernamePrefix.value}"
      # peer-advertise-ip: "${a.L.peerAdvertiseIp.value}"
      # peer-advertise-port: "${a.L.peerAdvertisePort.value}"
      # peer-ca-file: "${a.L.peerCaFile.value}"
      # service-account-jwks-uri: "${a.L.serviceAccountJwksUri.value}"
      # show-hidden-metrics-for-version: "${a.L.showHiddenMetricsForVersion.value}"
      # tls-cipher-suites: "${a.L.tlsCipherSuites.value}"
      # tls-min-version: "${a.L.tlsMinVersion.value}"
      # tls-sni-cert-key: "${a.L.tlsSniCertKey.value}"
      # token-auth-file: "${a.L.tokenAuthFile.value}"
      # tracing-config-file: "${a.L.tracingConfigFile.value}"
      # vmodule: "${a.L.vmodule.value}"
      # watch-cache-sizes: "${a.L.watchCacheSizes.value}"
      # authorization-webhook-config-file: "${a.L.authorizationWebhookConfigFile.value}"
      # cors-allowed-origins: "${a.L.corsAllowedOrigins.value}"
      # debug-socket-path: "${a.L.debugSocketPath.value}"
      # authorization-policy-file: "${a.L.authorizationPolicyFile.value}"
      # authorization-config: "${a.L.authorizationConfig.value}"
      # authentication-token-webhook-config-file: "${a.L.authenticationTokenWebhookConfigFile.value}"
      # authentication-config: "${a.L.authenticationConfig.value}"
      # audit-webhook-config-file: "${a.L.auditWebhookConfigFile.value}"
      # audit-policy-file: "${a.L.auditPolicyFile.value}"
      # audit-log-path: "${a.L.auditLogPath.value}"
      # allow-metric-labels: "${a.L.allowMetricLabels.value}"
      # allow-metric-labels-manifest: "${a.L.allowMetricLabelsManifest.value}"
      # admission-control: "${a.L.admissionControl.value}"
      # admission-control-config-file: "${a.L.admissionControlConfigFile.value}"
      # advertise-address: "${a.L.advertiseAddress.value}"
    `}},u={data:{value:r.A`
      allocate-node-cidrs: "${o.L.allocateNodeCidrs.value}"
      allow-untagged-cloud: "${o.L.allowUntaggedCloud.value}"
      attach-detach-reconcile-sync-period: "${o.L.attachDetachReconcileSyncPeriod.value}"
      authentication-kubeconfig: "${o.L.authenticationKubeconfig.value}"
      authentication-skip-lookup: "${o.L.authenticationSkipLookup.value}"
      authentication-token-webhook-cache-ttl: "${o.L.authenticationTokenWebhookCacheTtl.value}"
      authentication-tolerate-lookup-failure: "${o.L.authenticationTolerateLookupFailure.value}"
      authorization-always-allow-paths: "${o.L.authorizationAlwaysAllowPaths.value}"
      authorization-kubeconfig: "${o.L.authorizationKubeconfig.value}"
      authorization-webhook-cache-authorized-ttl: "${o.L.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${o.L.authorizationWebhookCacheUnauthorizedTtl.value}"
      bind-address: "${o.L.bindAddress.value}"
      cidr-allocator-type: "${o.L.cidrAllocatorType.value}"
      client-ca-file: "${o.L.clientCaFile.value}"
      cloud-provider: "${o.L.cloudProvider.value}"
      cloud-provider-gce-lb-src-cidrs: "${o.L.cloudProviderGceLbSrcCidrs.value}"
      cluster-signing-cert-file: "${o.L.clusterSigningCertFile.value}"
      cluster-signing-duration: "${o.L.clusterSigningDuration.value}"
      cluster-signing-key-file: "${o.L.clusterSigningKeyFile.value}"
      concurrent-cron-job-syncs: "${o.L.concurrentCronJobSyncs.value}"
      concurrent-deployment-syncs: "${o.L.concurrentDeploymentSyncs.value}"
      concurrent-endpoint-syncs: "${o.L.concurrentEndpointSyncs.value}"
      concurrent-ephemeralvolume-syncs: "${o.L.concurrentEphemeralvolumeSyncs.value}"
      concurrent-gc-syncs: "${o.L.concurrentGcSyncs.value}"
      concurrent-horizontal-pod-autoscaler-syncs: "${o.L.concurrentHorizontalPodAutoscalerSyncs.value}"
      concurrent-job-syncs: "${o.L.concurrentJobSyncs.value}"
      concurrent-namespace-syncs: "${o.L.concurrentNamespaceSyncs.value}"
      concurrent-rc-syncs: "${o.L.concurrentRcSyncs.value}"
      concurrent-replicaset-syncs: "${o.L.concurrentReplicasetSyncs.value}"
      concurrent-resource-quota-syncs: "${o.L.concurrentResourceQuotaSyncs.value}"
      concurrent-service-endpoint-syncs: "${o.L.concurrentServiceEndpointSyncs.value}"
      concurrent-service-syncs: "${o.L.concurrentServiceSyncs.value}"
      concurrent-serviceaccount-token-syncs: "${o.L.concurrentServiceaccountTokenSyncs.value}"
      concurrent-statefulset-syncs: "${o.L.concurrentStatefulsetSyncs.value}"
      concurrent-ttl-after-finished-syncs: "${o.L.concurrentTtlAfterFinishedSyncs.value}"
      concurrent-validating-admission-policy-status-syncs: "${o.L.concurrentValidatingAdmissionPolicyStatusSyncs.value}"
      configure-cloud-routes: "${o.L.configureCloudRoutes.value}"
      contention-profiling: "${o.L.contentionProfiling.value}"
      controller-start-interval: "${o.L.controllerStartInterval.value}"
      controllers: "${o.L.controllers.value}"
      disable-attach-detach-reconcile-sync: "${o.L.disableAttachDetachReconcileSync.value}"
      disable-force-detach-on-timeout: "${o.L.disableForceDetachOnTimeout.value}"
      enable-dynamic-provisioning: "${o.L.enableDynamicProvisioning.value}"
      enable-garbage-collector: "${o.L.enableGarbageCollector.value}"
      enable-hostpath-provisioner: "${o.L.enableHostpathProvisioner.value}"
      enable-leader-migration: "${o.L.enableLeaderMigration.value}"
      endpoint-updates-batch-period: "${o.L.endpointUpdatesBatchPeriod.value}"
      endpointslice-updates-batch-period: "${o.L.endpointsliceUpdatesBatchPeriod.value}"
      feature-gates: "${o.L.featureGates.value}"
      flex-volume-plugin-dir: "${o.L.flexVolumePluginDir.value}"
      help: "${o.L.help.value}"
      horizontal-pod-autoscaler-cpu-initialization-period: "${o.L.horizontalPodAutoscalerCpuInitializationPeriod.value}"
      horizontal-pod-autoscaler-downscale-delay: "${o.L.horizontalPodAutoscalerDownscaleDelay.value}"
      horizontal-pod-autoscaler-downscale-stabilization: "${o.L.horizontalPodAutoscalerDownscaleStabilization.value}"
      horizontal-pod-autoscaler-initial-readiness-delay: "${o.L.horizontalPodAutoscalerInitialReadinessDelay.value}"
      horizontal-pod-autoscaler-sync-period: "${o.L.horizontalPodAutoscalerSyncPeriod.value}"
      horizontal-pod-autoscaler-tolerance: "${o.L.horizontalPodAutoscalerTolerance.value}"
      horizontal-pod-autoscaler-upscale-delay: "${o.L.horizontalPodAutoscalerUpscaleDelay.value}"
      http2-max-streams-per-connection: "${o.L.http2MaxStreamsPerConnection.value}"
      kube-api-burst: "${o.L.kubeApiBurst.value}"
      kube-api-content-type: "${o.L.kubeApiContentType.value}"
      kube-api-qps: "${o.L.kubeApiQps.value}"
      kubeconfig: "${o.L.kubeconfig.value}"
      large-cluster-size-threshold: "${o.L.largeClusterSizeThreshold.value}"
      leader-elect: "${o.L.leaderElect.value}"
      leader-elect-lease-duration: "${o.L.leaderElectLeaseDuration.value}"
      leader-elect-renew-deadline: "${o.L.leaderElectRenewDeadline.value}"
      leader-elect-resource-lock: "${o.L.leaderElectResourceLock.value}"
      leader-elect-resource-name: "${o.L.leaderElectResourceName.value}"
      leader-elect-resource-namespace: "${o.L.leaderElectResourceNamespace.value}"
      leader-elect-retry-period: "${o.L.leaderElectRetryPeriod.value}"
      legacy-service-account-token-clean-up-period: "${o.L.legacyServiceAccountTokenCleanUpPeriod.value}"
      log-flush-frequency: "${o.L.logFlushFrequency.value}"
      log-json-info-buffer-size: "${o.L.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${o.L.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${o.L.logTextInfoBufferSize.value}"
      log-text-split-stream: "${o.L.logTextSplitStream.value}"
      logging-format: "${o.L.loggingFormat.value}"
      max-endpoints-per-slice: "${o.L.maxEndpointsPerSlice.value}"
      min-resync-period: "${o.L.minResyncPeriod.value}"
      mirroring-concurrent-service-endpoint-syncs: "${o.L.mirroringConcurrentServiceEndpointSyncs.value}"
      mirroring-endpointslice-updates-batch-period: "${o.L.mirroringEndpointsliceUpdatesBatchPeriod.value}"
      mirroring-max-endpoints-per-subset: "${o.L.mirroringMaxEndpointsPerSubset.value}"
      namespace-sync-period: "${o.L.namespaceSyncPeriod.value}"
      node-cidr-mask-size: "${o.L.nodeCidrMaskSize.value}"
      node-cidr-mask-size-ipv4: "${o.L.nodeCidrMaskSizeIpv4.value}"
      node-cidr-mask-size-ipv6: "${o.L.nodeCidrMaskSizeIpv6.value}"
      node-eviction-rate: "${o.L.nodeEvictionRate.value}"
      node-monitor-grace-period: "${o.L.nodeMonitorGracePeriod.value}"
      node-monitor-period: "${o.L.nodeMonitorPeriod.value}"
      node-startup-grace-period: "${o.L.nodeStartupGracePeriod.value}"
      node-sync-period: "${o.L.nodeSyncPeriod.value}"
      permit-address-sharing: "${o.L.permitAddressSharing.value}"
      permit-port-sharing: "${o.L.permitPortSharing.value}"
      profiling: "${o.L.profiling.value}"
      pv-recycler-increment-timeout-nfs: "${o.L.pvRecyclerIncrementTimeoutNfs.value}"
      pv-recycler-minimum-timeout-hostpath: "${o.L.pvRecyclerMinimumTimeoutHostpath.value}"
      pv-recycler-minimum-timeout-nfs: "${o.L.pvRecyclerMinimumTimeoutNfs.value}"
      pv-recycler-timeout-increment-hostpath: "${o.L.pvRecyclerTimeoutIncrementHostpath.value}"
      pvclaimbinder-sync-period: "${o.L.pvclaimbinderSyncPeriod.value}"
      requestheader-client-ca-file: "${o.L.requestheaderClientCaFile.value}"
      requestheader-extra-headers-prefix: "${o.L.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${o.L.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${o.L.requestheaderUsernameHeaders.value}"
      resource-quota-sync-period: "${o.L.resourceQuotaSyncPeriod.value}"
      root-ca-file: "${o.L.rootCaFile.value}"
      route-reconciliation-period: "${o.L.routeReconciliationPeriod.value}"
      secondary-node-eviction-rate: "${o.L.secondaryNodeEvictionRate.value}"
      secure-port: "${o.L.securePort.value}"
      service-account-private-key-file: "${o.L.serviceAccountPrivateKeyFile.value}"
      terminated-pod-gc-threshold: "${o.L.terminatedPodGcThreshold.value}"
      unhealthy-zone-threshold: "${o.L.unhealthyZoneThreshold.value}"
      use-service-account-credentials: "${o.L.useServiceAccountCredentials.value}"
      v: "${o.L.v.value}"
      version: "${o.L.version.value}"
      volume-host-allow-local-loopback: "${o.L.volumeHostAllowLocalLoopback.value}"

      # Не указывать если значение "" или undefined
      # cluster-signing-kube-apiserver-client-cert-file: "${o.L.clusterSigningKubeApiserverClientCertFile.value}"
      # cluster-signing-kube-apiserver-client-key-file: "${o.L.clusterSigningKubeApiserverClientKeyFile.value}"
      # cluster-signing-kubelet-client-cert-file: "${o.L.clusterSigningKubeletClientCertFile.value}"
      # cluster-signing-kubelet-client-key-file: "${o.L.clusterSigningKubeletClientKeyFile.value}"
      # cluster-signing-kubelet-serving-cert-file: "${o.L.clusterSigningKubeletServingCertFile.value}"
      # cluster-signing-kubelet-serving-key-file: "${o.L.clusterSigningKubeletServingKeyFile.value}"
      # cluster-signing-legacy-unknown-cert-file: "${o.L.clusterSigningLegacyUnknownCertFile.value}"
      # cluster-signing-legacy-unknown-key-file: "${o.L.clusterSigningLegacyUnknownKeyFile.value}"
      # cluster-cidr: "${o.L.clusterCidr.value}"
      # cloud-config: "${o.L.cloudConfig.value}"
      # cert-dir: "${o.L.certDir.value}"
      # allow-metric-labels-manifest: "${o.L.allowMetricLabelsManifest.value}"
      # allow-metric-labels: "${o.L.allowMetricLabels.value}"
      # disabled-metrics: "${o.L.disabledMetrics.value}"
      # leader-migration-config: "${o.L.leaderMigrationConfig.value}"
      # master: "${o.L.master.value}"
      # pv-recycler-pod-template-filepath-hostpath: "${o.L.pvRecyclerPodTemplateFilepathHostpath.value}"
      # pv-recycler-pod-template-filepath-nfs: "${o.L.pvRecyclerPodTemplateFilepathNfs.value}"
      # service-cluster-ip-range: "${o.L.serviceClusterIpRange.value}"
      # show-hidden-metrics-for-version: "${o.L.showHiddenMetricsForVersion.value}"
      # tls-cert-file: "${o.L.tlsCertFile.value}"
      # tls-cipher-suites: "${o.L.tlsCipherSuites.value}"
      # tls-min-version: "${o.L.tlsMinVersion.value}"
      # tls-private-key-file: "${o.L.tlsPrivateKeyFile.value}"
      # tls-sni-cert-key: "${o.L.tlsSniCertKey.value}"
      # vmodule: "${o.L.vmodule.value}"
      # volume-host-cidr-denylist: "${o.L.volumeHostCidrDenylist.value}"
      # external-cloud-volume-plugin: "${o.L.externalCloudVolumePlugin.value}"
      # requestheader-allowed-names: "${o.L.requestheaderAllowedNames.value}"
    `}},d={data:{value:r.A`
      authentication-kubeconfig: "${c.w.authenticationKubeconfig.value}"
      authentication-skip-lookup: "${c.w.authenticationSkipLookup.value}"
      authentication-token-webhook-cache-ttl: "${c.w.authenticationTokenWebhookCacheTtl.value}"
      authentication-tolerate-lookup-failure: "${c.w.authenticationTolerateLookupFailure.value}"
      authorization-always-allow-paths: "${c.w.authorizationAlwaysAllowPaths.value}"
      authorization-kubeconfig: "${c.w.authorizationKubeconfig.value}"
      authorization-webhook-cache-authorized-ttl: "${c.w.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${c.w.authorizationWebhookCacheUnauthorizedTtl.value}"
      bind-address: "${c.w.bindAddress.value}"
      client-ca-file: "${c.w.clientCaFile.value}"
      contention-profiling: "${c.w.contentionProfiling.value}"
      help: "${c.w.help.value}"
      http2-max-streams-per-connection: "${c.w.http2MaxStreamsPerConnection.value}"
      kube-api-burst: "${c.w.kubeApiBurst.value}"
      kube-api-content-type: "${c.w.kubeApiContentType.value}"
      kube-api-qps: "${c.w.kubeApiQps.value}"
      kubeconfig: "${c.w.kubeconfig.value}"
      leader-elect: "${c.w.leaderElect.value}"
      leader-elect-lease-duration: "${c.w.leaderElectLeaseDuration.value}"
      leader-elect-renew-deadline: "${c.w.leaderElectRenewDeadline.value}"
      leader-elect-resource-lock: "${c.w.leaderElectResourceLock.value}"
      leader-elect-resource-name: "${c.w.leaderElectResourceName.value}"
      leader-elect-resource-namespace: "${c.w.leaderElectResourceNamespace.value}"
      leader-elect-retry-period: "${c.w.leaderElectRetryPeriod.value}"
      log-flush-frequency: "${c.w.logFlushFrequency.value}"
      log-json-info-buffer-size: "${c.w.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${c.w.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${c.w.logTextInfoBufferSize.value}"
      log-text-split-stream: "${c.w.logTextSplitStream.value}"
      logging-format: "${c.w.loggingFormat.value}"
      permit-address-sharing: "${c.w.permitAddressSharing.value}"
      permit-port-sharing: "${c.w.permitPortSharing.value}"
      pod-max-in-unschedulable-pods-duration: "${c.w.podMaxInUnschedulablePodsDuration.value}"
      profiling: "${c.w.profiling.value}"
      requestheader-extra-headers-prefix: "${c.w.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${c.w.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${c.w.requestheaderUsernameHeaders.value}"
      secure-port: "${c.w.securePort.value}"
      v: "${c.w.v.value}"
      version: "${c.w.version.value}"

      # allow-metric-labels: "${c.w.allowMetricLabels.value}"
      # allow-metric-labels-manifest: "${c.w.allowMetricLabelsManifest.value}"
      # cert-dir: "${c.w.certDir.value}"
      # config: "${c.w.config.value}"
      # disabled-metrics: "${c.w.disabledMetrics.value}"
      # feature-gates: "${c.w.featureGates.value}"
      # master: "${c.w.master.value}"
      # requestheader-allowed-names: "${c.w.requestheaderAllowedNames.value}"
      # requestheader-client-ca-file: "${c.w.requestheaderClientCaFile.value}"
      # show-hidden-metrics-for-version: "${c.w.showHiddenMetricsForVersion.value}"
      # tls-cert-file: "${c.w.tlsCertFile.value}"
      # tls-cipher-suites: "${c.w.tlsCipherSuites.value}"
      # tls-min-version: "${c.w.tlsMinVersion.value}"
      # tls-private-key-file: "${c.w.tlsPrivateKeyFile.value}"
      # tls-sni-cert-key: "${c.w.tlsSniCertKey.value}"
      # vmodule: "${c.w.vmodule.value}"
      # write-config-to: "${c.w.writeConfigTo.value}"
    `}}},86969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configFiles","title":"configFiles","description":"(init) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/configFiles","permalink":"/tech-docs/kubernetes/components/kubeadm/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(98744),c=n(71372),i=n(75478),l=n(72608);const u={},d=void 0,h={},m=[{value:"(init) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b",id:"init-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439-\u0444\u0430\u0439\u043b",level:4},...i.toc,...c.toc,{value:"(join) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b",id:"join-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439-\u0444\u0430\u0439\u043b",level:4},...l.toc,...o.toc];function p(e){const t={h4:"h4",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h4,{id:"init-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439-\u0444\u0430\u0439\u043b",children:"(init) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),"\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsx)(c.default,{}),"\n",(0,s.jsx)(t.h4,{id:"join-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439-\u0444\u0430\u0439\u043b",children:"(join) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),"\n",(0,s.jsx)(l.default,{}),"\n",(0,s.jsx)(o.default,{})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},87464:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:n,children:t})}},87935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig","title":"kubeconfig","description":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f super-admin","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig","permalink":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(6353),c=n(7478),i=n(1775),l=n(60513);const u={},d=void 0,h={},m=[{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f <code>super-admin</code>",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-super-admin",level:4}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h4:"h4",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h4,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-super-admin",children:["\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f ",(0,s.jsx)(t.code,{children:"super-admin"})]}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority=${o.$.kubernetesCA.crtPath} \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/super-admin.conf

  kubectl config set-credentials system:node:$\{HOST_NAME} \\
    --client-certificate=${o.$.kubernetesSuperAdminClient.crtPath} \\
    --client-key=${o.$.kubernetesSuperAdminClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/super-admin.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{HOST_NAME} \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/super-admin.conf

  kubectl config use-context default \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/super-admin.conf
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 kubeconfig"}),"\n",(0,s.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:[(0,s.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  ${c.M.kuberneteBaseFolderPath.value}/openssl/cert-report.sh ${c.M.kuberneteBaseFolderPath.value}/super-admin.conf
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:l.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  super-admin.conf           Oct 22, 2025 22:06 UTC   364d            kubernetes              no
`})})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},88373:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartJoin","title":"systemdUnitStartJoin","description":"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0438\u0441 Kubelet \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0444\u0430\u0437\u044b \u0443\u0442\u0438\u043b\u0438\u0442\u044b Kubeadm.","source":"@site/docs/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartJoin.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/kubeadm","slug":"/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartJoin","permalink":"/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartJoin","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(7478);const l={},u=void 0,d={},h=[];function m(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0438\u0441 Kubelet \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0444\u0430\u0437\u044b \u0443\u0442\u0438\u043b\u0438\u0442\u044b Kubeadm."}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:[(0,s.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/kubeadm/lifecycle-settings",children:"Kubeadm Configs"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)("h4",{children:"\u0417\u0430\u043f\u0443\u0441\u043a kubelet"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:o.A`
  kubeadm join phase kubelet-start \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:o.A`
  [preflight] Reading configuration from the cluster...
  [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
  [kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
  [kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
  [kubelet-start] Starting the kubelet
  [kubelet-check] Waiting for a healthy kubelet at http://127.0.0.1:10248/healthz. This can take up to 4m0s
  [kubelet-check] The kubelet is healthy after 502.252318ms
  [kubelet-start] Waiting for the kubelet to perform the TLS Bootstrap
`})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},88636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/examinationOpensslComponent","title":"examinationOpensslComponent","description":"\u041f\u043e\u0441\u043b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0438\u0445 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Kubeadm","source":"@site/docs/tech-docs/kubernetes/certificates/examinationOpensslComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates","slug":"/tech-docs/kubernetes/certificates/examinationOpensslComponent","permalink":"/tech-docs/kubernetes/certificates/examinationOpensslComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(1775),c=n(60513),i=n(7478);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",...(0,a.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u041f\u043e\u0441\u043b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0438\u0445 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,s.jsx)(t.code,{children:"Kubeadm"})]}),"\n"]}),"\n",(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:c.A`
      mkdir -p ${i.M.kuberneteBaseFolderPath.value}/openssl
  `}),"\n",(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e \u0441\u043a\u0440\u0438\u043f\u0442\u0430"}),"\n",(0,s.jsxs)(n,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e \u0441\u043a\u0440\u0438\u043f\u0442\u0430"}),(0,s.jsx)(o.A,{language:"bash",children:c.A`
  cat <<'EOF' > ${i.M.kuberneteBaseFolderPath.value}/openssl/cert-report.sh
  #!/usr/bin/env bash
  set -euo pipefail

  # Временная директория для извлечённых сертификатов
  TMPDIR=\$(mktemp -d)
  trap 'rm -rf "\$TMPDIR"' EXIT

  # Хэш-карта CN → имя CA-файла
  declare -A CN_TO_CA_NAME
  CERT_ROWS=()
  CA_ROWS=()

  # Заголовки таблиц
  CERT_HEADER=\$(printf "%-28s %-25s %-15s %-24s %-20s" \\
    "CERTIFICATE" "EXPIRES" "RESIDUAL TIME" "CERTIFICATE AUTHORITY" "EXTERNALLY MANAGED")
  CA_HEADER=\$(printf "%-24s %-25s %-15s %-20s" \\
    "CERTIFICATE AUTHORITY" "EXPIRES" "RESIDUAL TIME" "EXTERNALLY MANAGED")

  # Путь к файлу сертификата для обработки (если указан)
  CERT_PATH="\${1:-}"

  if [ -n "\$CERT_PATH" ]; then
    # Если путь к файлу передан, обрабатываем только этот файл
    FILES=("\$CERT_PATH")
  else
    # Если путь не передан, ищем все сертификаты в /etc/kubernetes
    mapfile -t FILES < <(find /etc/kubernetes -type f \\( -name "*.crt" -o -name "*.pem" -o -name "*.conf" \\) 2>/dev/null)
  fi

  # Извлекаем embedded сертификаты из kubeconfig'ов
  extract_cert() {
    local file="\$1"
    local out="\$2"
    if grep -q "client-certificate-data:" "\$file"; then
      awk '/client-certificate-data:/ {print \$2}' "\$file" | base64 -d > "\$out"
    else
      cp "\$file" "\$out"
    fi
  }

  # Подсчёт остатка времени действия
  cert_lifetime() {
    local end="\$1"
    local end_ts now_ts days years
    end_ts=\$(date -d "\$end" +%s)
    now_ts=\$(date +%s)
    (( end_ts < now_ts )) && echo "expired" && return
    days=\$(( (end_ts - now_ts) / 86400 ))
    years=\$(( days / 365 ))
    (( years > 0 )) && echo "\${years}y" || echo "\${days}d"
  }

  # Нормализуем имя сертификата
  cert_name() {
    local path="\$1"
    local base
    base=\$(basename "\$path" | sed 's/\.\\(crt\\|pem\\)\$//')
    case "\$path" in
      */etcd/*)         echo "etcd-\$base" ;;
      */front-proxy/*)  echo "front-proxy-\$base" ;;
      *)                echo "\$base" ;;
    esac
  }

  # Первый проход: собираем карту CN → имя CA
  for file in "\${FILES[@]}"; do
    crt="\$TMPDIR/ca.crt"
    extract_cert "\$file" "\$crt" || continue
    openssl x509 -in "\$crt" -noout -text 2>/dev/null | grep -A1 "Key Usage" | grep -q "Certificate Sign" || continue
    cn=\$(openssl x509 -in "\$crt" -noout -subject 2>/dev/null | sed -n 's/.*CN *= *\\([^,\\/]*\\).*/\\1/p')
    [[ -n "\$cn" ]] && CN_TO_CA_NAME["\$cn"]="\$(cert_name "\$file")"
  done

  # Второй проход: составляем таблицы сертификатов и CA
  for file in "\${FILES[@]}"; do
    crt="\$TMPDIR/cert.crt"
    extract_cert "\$file" "\$crt" || continue
    openssl x509 -in "\$crt" -noout >/dev/null 2>&1 || continue

    name=\$(cert_name "\$file")
    end_raw=\$(openssl x509 -in "\$crt" -noout -enddate | cut -d= -f2)
    expires=\$(date -d "\$end_raw" "+%b %d, %Y %H:%M UTC")
    residual=\$(cert_lifetime "\$end_raw")

    if openssl x509 -in "\$crt" -noout -text | grep -A1 "Key Usage" | grep -q "Certificate Sign"; then
      CA_ROWS+=("\$(printf "%-24s %-25s %-15s %-20s" "\$name" "\$expires" "\$residual" "no")")
    else
      issuer_cn=\$(openssl x509 -in "\$crt" -noout -issuer | sed -n 's/.*CN *= *\\([^,\\/]*\\).*/\\1/p')
      ca_name="\${CN_TO_CA_NAME[\$issuer_cn]:-\$issuer_cn}"
      CERT_ROWS+=("\$(printf "%-28s %-25s %-15s %-24s %-20s" "\$name" "\$expires" "\$residual" "\$ca_name" "no")")
    fi
  done

  # Вывод финальных таблиц
  echo
  echo "\$CERT_HEADER"
  printf "%s\\n" "\${CERT_ROWS[@]}" | sort
  echo
  echo "\$CA_HEADER"
  printf "%s\\n" "\${CA_ROWS[@]}" | sort
  EOF
`})]}),"\n",(0,s.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:c.A`
    chmod +x ${i.M.kuberneteBaseFolderPath.value}/openssl/cert-report.sh
  `}),"\n",(0,s.jsx)("h4",{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0432\u0441\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432/kubeconfigs"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:c.A`
    ${i.M.kuberneteBaseFolderPath.value}/openssl/cert-report.sh
  `}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(o.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  admin.conf                 Oct 22, 2025 22:06 UTC   364d            ca                      no
  apiserver                  Oct 22, 2025 22:06 UTC   364d            ca                      no
  apiserver-etcd-client      Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  apiserver-kubelet-client   Oct 22, 2025 22:06 UTC   364d            ca                      no
  controller-manager.conf    Oct 22, 2025 22:06 UTC   364d            ca                      no
  etcd-healthcheck-client    Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  etcd-peer                  Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  etcd-server                Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  front-proxy-client         Oct 22, 2025 22:06 UTC   364d            front-proxy-ca          no
  scheduler.conf             Oct 22, 2025 22:06 UTC   364d            ca                      no
  super-admin.conf           Oct 22, 2025 22:06 UTC   364d            ca                      no

  CERTIFICATE AUTHORITY   EXPIRES                  RESIDUAL TIME   EXTERNALLY MANAGED
  ca                      Oct 20, 2034 22:04 UTC   9y              no
  etcd-ca                 Oct 20, 2034 22:04 UTC   9y              no
  front-proxy-ca          Oct 20, 2034 22:04 UTC   9y              no
`})}),"\n",(0,s.jsx)("h4",{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430/kubeconfig"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:c.A`
    ${i.M.kuberneteBaseFolderPath.value}/openssl/cert-report.sh ${i.M.kuberneteBaseFolderPath.value}/pki/ca.crt
  `}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(o.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED


  CERTIFICATE AUTHORITY   EXPIRES                  RESIDUAL TIME   EXTERNALLY MANAGED
  ca                      Oct 20, 2034 22:04 UTC   9y              no
`})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},89613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/setupEnvironments/coreModulesComponent","title":"coreModulesComponent","description":"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430:","source":"@site/docs/tech-docs/kubernetes/setupEnvironments/coreModulesComponent.mdx","sourceDirName":"tech-docs/kubernetes/setupEnvironments","slug":"/tech-docs/kubernetes/setupEnvironments/coreModulesComponent","permalink":"/tech-docs/kubernetes/setupEnvironments/coreModulesComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(1775),c=n(60513),i=n(87464),l=n(62774);const u={},d=void 0,h={},m=[{value:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430:",id:"\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:4},{value:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f modprobe",id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-modprobe",level:4},{value:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439",id:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043c\u043e\u0434\u0443\u043b\u0435\u0439",level:4},{value:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f modprobe",id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-modprobe-1",level:4},{value:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439",id:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043c\u043e\u0434\u0443\u043b\u0435\u0439-1",level:4}];function p(e){const t={admonition:"admonition",h4:"h4",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h4,{id:"\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f modprobe."}),"\n",(0,s.jsx)(t.li,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439."}),"\n"]}),"\n",(0,s.jsxs)(l.A,{groupId:"install-type",children:[(0,s.jsxs)(i.A,{value:"Bash",children:[(0,s.jsx)(t.h4,{id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-modprobe",children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f modprobe"}),(0,s.jsx)(o.A,{language:"bash",children:c.A`
    cat <<EOF > /etc/modules-load.d/k8s.conf
    overlay
    br_netfilter
    EOF
  `}),(0,s.jsx)(t.h4,{id:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043c\u043e\u0434\u0443\u043b\u0435\u0439",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439"}),(0,s.jsx)(o.A,{language:"bash",children:c.A`
    sudo -i
    modprobe overlay
    modprobe br_netfilter
  `})]}),(0,s.jsxs)(i.A,{value:"Cloud-init",children:[(0,s.jsx)(t.h4,{id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-modprobe-1",children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f modprobe"}),(0,s.jsx)(o.A,{language:"bash",children:c.A`
    # write_files:
    - path: /etc/modules-load.d/k8s.conf
      owner: root:root
      permissions: '0644'
      content: |
        overlay
        br_netfilter
  `}),(0,s.jsx)(t.h4,{id:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043c\u043e\u0434\u0443\u043b\u0435\u0439-1",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439"}),(0,s.jsx)(o.A,{language:"bash",children:c.A`
    # runcmd:
    - modprobe overlay
    - modprobe br_netfilter
  `})]})]}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041c\u043e\u0434\u0443\u043b\u044c overlay \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 OverlayFS \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u043b\u043e\u044f\u043c\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432. \u041e\u043d \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439 \u0432 \u0435\u0434\u0438\u043d\u0443\u044e \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u0443\u044e \u0444\u0430\u0439\u043b\u043e\u0432\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443. \u041f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0442\u0430\u043a\u0438\u043c\u0438 \u0440\u0430\u043d\u0442\u0430\u0439\u043c\u0430\u043c\u0438, \u043a\u0430\u043a Docker \u0438 containerd."}),(0,s.jsx)(t.p,{children:"\u041c\u043e\u0434\u0443\u043b\u044c br_netfilter \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0442\u0440\u0430\u0444\u0438\u043a\u0430 \u0441\u0435\u0442\u0435\u0432\u044b\u0445 \u043c\u043e\u0441\u0442\u043e\u0432 \u0447\u0435\u0440\u0435\u0437 \u043f\u043e\u0434\u0441\u0438\u0441\u0442\u0435\u043c\u0443 netfilter. \u042d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b iptables \u0432 Kubernetes."})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},89982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdPeer/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdPeer/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdPeer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdPeer/kubeadm","permalink":"/tech-docs/etcd/certificates/components/etcd/etcdPeer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(7478),c=n(1775),i=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase certs etcd-peer \\
    --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [certs] Generating "etcd/peer" certificate and key
  [certs] etcd/peer serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com] and IPs [192.168.10.27 127.0.0.1 ::1]
`})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},90725:e=>{e.exports=JSON.parse('{"permalink":"/blog/kubernetes-the-hard-way","source":"@site/blog/kubernetes-the-hard-way.mdx","title":"Kubernetes The Hard Way","description":"Kubernetes The Hard Way #","date":"2025-03-23T00:00:00.000Z","tags":[{"inline":true,"label":"Kubernetes","permalink":"/blog/tags/kubernetes"},{"inline":true,"label":"Hard-Way","permalink":"/blog/tags/hard-way"}],"readingTime":12.21,"hasTruncateMarker":true,"authors":[{"name":"\u041f\u0443\u0442\u0438\u043b\u0438\u043d \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u041b\u044c\u0432\u043e\u0432\u0438\u0447","title":"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u043e\u0440","url":"https://t.me/bezumniy_kot_work","image_url":"https://avatars.githubusercontent.com/u/107264732?v=4","socials":{"github":"https://github.com/FR-Solution"},"imageURL":"https://avatars.githubusercontent.com/u/107264732?v=4","key":null,"page":null}],"frontMatter":{"title":"Kubernetes The Hard Way","date":"2025-03-23T00:00:00.000Z","slug":"kubernetes-the-hard-way","authors":[{"name":"\u041f\u0443\u0442\u0438\u043b\u0438\u043d \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u041b\u044c\u0432\u043e\u0432\u0438\u0447","title":"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u043e\u0440","url":"https://t.me/bezumniy_kot_work","image_url":"https://avatars.githubusercontent.com/u/107264732?v=4","socials":{"github":"FR-Solution"},"imageURL":"https://avatars.githubusercontent.com/u/107264732?v=4"}],"tags":["Kubernetes","Hard-Way"]},"unlisted":false}')},91018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/payload/configFiles","title":"configFiles","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/containerd/payload/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/payload","slug":"/tech-docs/kubernetes/components/containerd/payload/configFiles","permalink":"/tech-docs/kubernetes/components/containerd/payload/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(7478),l=n(87464),u=n(62774);const d={},h=void 0,m={},p=[];function b(e){return(0,s.jsxs)(u.A,{groupId:"install-type",children:[(0,s.jsxs)(l.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
      mkdir -p /etc/containerd/
      mkdir -p /etc/containerd/conf.d
      mkdir -p /etc/containerd/certs.d
    `}),(0,s.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
      cat <<"EOF" > /etc/containerd/config.toml
      version = 2
      imports = ["/etc/containerd/conf.d/*.toml"]
      EOF
    `}),(0,s.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:o.A`
      cat <<"EOF" > /etc/containerd/conf.d/b-cloud.toml
      version = 2
      [plugins]
        [plugins."io.containerd.grpc.v1.cri"]
          sandbox_image = "${i.M.baseDockerRegistry.value}/${i.M.pausedImage.value}"
        [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
          runtime_type = "io.containerd.runc.v2"
        [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
          SystemdCgroup = true
        [plugins."io.containerd.grpc.v1.cri".registry]
          config_path = "/etc/containerd/certs.d/"
      EOF
    `})]}),(0,s.jsxs)(l.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
      - path: /etc/containerd/config.toml
        owner: root:root
        permissions: '0644'
        content: |
          version = 2
          imports = ["/etc/containerd/conf.d/*.toml"]
    `}),(0,s.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,s.jsx)(c.A,{language:"yaml",children:o.A`
      - path: /etc/containerd/conf.d/b-cloud.toml
        owner: root:root
        permissions: '0644'
        content: |
          version = 2
          [plugins]
            [plugins."io.containerd.grpc.v1.cri"]
              sandbox_image = "${i.M.baseDockerRegistry.value}/${i.M.pausedImage.value}"
            [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
              runtime_type = "io.containerd.runc.v2"
            [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
              SystemdCgroup = true
            [plugins."io.containerd.grpc.v1.cri".registry]
              config_path = "/etc/containerd/certs.d/"
    `})]})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},92279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>g,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/additionalSetup/rbacComponent","title":"rbacComponent","description":"Role bindings","source":"@site/docs/tech-docs/kubernetes/additionalSetup/rbacComponent.mdx","sourceDirName":"tech-docs/kubernetes/additionalSetup","slug":"/tech-docs/kubernetes/additionalSetup/rbacComponent","permalink":"/tech-docs/kubernetes/additionalSetup/rbacComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(1775),l=n(60513),u=n(7478),d=n(25292);const h={},m=void 0,p={},b=[];function k(e){const t={admonition:"admonition",...(0,a.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsxs)(o.A,{value:"HardWay",children:[(0,s.jsxs)(n,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Role bindings"}),(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
          export AUTH_EXTRA_GROUPS="system:bootstrappers:kubeadm:default-node-token"
      `}),(0,s.jsx)("h4",{children:"\u0420\u043e\u043b\u0438 \u0438 \u0441\u0432\u044f\u0437\u0438"}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
        kubectl \\
          --kubeconfig=${u.M.kuberneteBaseFolderPath.value}/super-admin.conf apply -f - <<EOF
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRole
        metadata:
          name: kubeadm:get-nodes
        rules:
        - apiGroups:
          - ""
          resources:
          - nodes
          verbs:
          - get
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: Role
        metadata:
          name: kubeadm:bootstrap-signer-clusterinfo
          namespace: kube-public
        rules:
        - apiGroups:
          - ""
          resourceNames:
          - cluster-info
          resources:
          - configmaps
          verbs:
          - get
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: RoleBinding
        metadata:
          name: kubeadm:bootstrap-signer-clusterinfo
          namespace: kube-public
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: Role
          name: kubeadm:bootstrap-signer-clusterinfo
        subjects:
        - apiGroup: rbac.authorization.k8s.io
          kind: User
          name: system:anonymous
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRoleBinding
        metadata:
          name: kubeadm:cluster-admins
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: ClusterRole
          name: cluster-admin
        subjects:
        - apiGroup: rbac.authorization.k8s.io
          kind: Group
          name: kubeadm:cluster-admins
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRoleBinding
        metadata:
          name: kubeadm:get-nodes
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: ClusterRole
          name: kubeadm:get-nodes
        subjects:
        - apiGroup: rbac.authorization.k8s.io
          kind: Group
          name: $\{AUTH_EXTRA_GROUPS}
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRoleBinding
        metadata:
          name: kubeadm:kubelet-bootstrap
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: ClusterRole
          name: system:node-bootstrapper
        subjects:
        - apiGroup: rbac.authorization.k8s.io
          kind: Group
          name: $\{AUTH_EXTRA_GROUPS}
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRoleBinding
        metadata:
          name: kubeadm:node-autoapprove-bootstrap
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: ClusterRole
          name: system:certificates.k8s.io:certificatesigningrequests:nodeclient
        subjects:
        - apiGroup: rbac.authorization.k8s.io
          kind: Group
          name: $\{AUTH_EXTRA_GROUPS}
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRoleBinding
        metadata:
          name: kubeadm:node-autoapprove-certificate-rotation
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: ClusterRole
          name: system:certificates.k8s.io:certificatesigningrequests:selfnodeclient
        subjects:
        - apiGroup: rbac.authorization.k8s.io
          kind: Group
          name: system:nodes
        EOF
      `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:l.A`
      clusterrole.rbac.authorization.k8s.io/kubeadm:get-nodes created
      role.rbac.authorization.k8s.io/kubeadm:bootstrap-signer-clusterinfo created
      rolebinding.rbac.authorization.k8s.io/kubeadm:bootstrap-signer-clusterinfo created
      clusterrolebinding.rbac.authorization.k8s.io/kubeadm:cluster-admins created
      clusterrolebinding.rbac.authorization.k8s.io/kubeadm:get-nodes created
      clusterrolebinding.rbac.authorization.k8s.io/kubeadm:kubelet-bootstrap created
      clusterrolebinding.rbac.authorization.k8s.io/kubeadm:node-autoapprove-bootstrap created
      clusterrolebinding.rbac.authorization.k8s.io/kubeadm:node-autoapprove-certificate-rotation created
  `})})]}),(0,s.jsxs)(n,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Bootstrap tokens"}),(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
          export AUTH_EXTRA_GROUPS="system:bootstrappers:kubeadm:default-node-token"
          export DESCRIPTION="kubeadm bootstrap token"
          export EXPIRATION=$(date -d '24 hours' "+%Y-%m-%dT%H:%M:%SZ")
          export TOKEN_ID="fjt9ex"
          export TOKEN_SECRET="lwzqgdlvoxtqk4yw"
          export USAGE_BOOTSTRAP_AUTHENTIFICATION="true"
          export USAGE_BOOTSTRAP_SIGNING="true"
      `}),(0,s.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u043e\u043a\u0435\u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430"}),(0,s.jsx)(i.A,{children:l.A`
      kubectl \\
        --kubeconfig=${u.M.kuberneteBaseFolderPath.value}/super-admin.conf \\
        apply -f - <<EOF
      ---
      apiVersion: v1
      kind: Secret
      metadata:
        name: bootstrap-token-$\{TOKEN_ID}
        namespace: kube-system
      data:
        auth-extra-groups: $(echo -n "$AUTH_EXTRA_GROUPS" | base64)
        description: $(echo -n "$DESCRIPTION" | base64)
        expiration: $(echo -n "$EXPIRATION" | base64)
        token-id: $(echo -n "$TOKEN_ID" | base64)
        token-secret: $(echo -n "$TOKEN_SECRET" | base64)
        usage-bootstrap-authentication: $(echo -n "$USAGE_BOOTSTRAP_AUTHENTIFICATION" | base64)
        usage-bootstrap-signing: $(echo -n "$USAGE_BOOTSTRAP_SIGNING" | base64)
      type: bootstrap.kubernetes.io/token
      EOF
    `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:l.A`
      secret/bootstrap-token-fjt9ex configured
  `})})]}),(0,s.jsxs)(n,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Cluster-Info"}),(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
        export KUBE_CA_CRT_BASE64=$(base64 -w 0 /etc/kubernetes/pki/ca.crt)
        export CLUSTER_API_URL=https://api.${u.M.clusterName.value}.${u.M.kubernetesBaseDomain.value}
    `}),(0,s.jsx)("h4",{children:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0421luster-info"}),(0,s.jsx)(i.A,{children:l.A`
      kubectl \\
        --kubeconfig=${u.M.kuberneteBaseFolderPath.value}/super-admin.conf \\
        apply -f - <<EOF
      ---
      apiVersion: v1
      data:
        kubeconfig: |
          apiVersion: v1
          clusters:
          - cluster:
              certificate-authority-data: $\{KUBE_CA_CRT_BASE64}
              server: $\{CLUSTER_API_URL}:${d.L.securePort.value}
            name: ""
          contexts: null
          current-context: ""
          kind: Config
          preferences: {}
          users: null
      kind: ConfigMap
      metadata:
        name: cluster-info
        namespace: kube-public

      EOF
    `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:l.A`
      configmap/cluster-info created
  `})})]})]}),(0,s.jsxs)(o.A,{value:"Kubeadm",children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0440\u043e\u043b\u0435\u0432\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438"}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
      kubeadm init phase bootstrap-token \\
        --config=${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${u.M.kuberneteBaseFolderPath.value}/super-admin.conf
    `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:l.A`
  [bootstrap-token] Using token: fjt9ex.lwzqgdlvoxtqk4yw
  [bootstrap-token] Configuring bootstrap tokens, cluster-info ConfigMap, RBAC Roles
  [bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to get nodes
  [bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to post CSRs in order for nodes to get long term certificate credentials
  [bootstrap-token] Configured RBAC rules to allow the csrapprover controller automatically approve CSRs from a Node Bootstrap Token
  [bootstrap-token] Configured RBAC rules to allow certificate rotation for all node client certificates in the cluster
  [bootstrap-token] Creating the "cluster-info" ConfigMap in the "kube-public" namespace
`})})]})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},92374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(7478),c=n(1775),i=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase kubeconfig controller-manager \\
    --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [kubeconfig] Writing "controller-manager.conf" kubeconfig file
`})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},94761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>v,frontMatter:()=>p,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"tech-docs/kubernetes/additionalSetup/uploadConfigsInitComponent","title":"uploadConfigsInitComponent","description":"\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 Kubeadm \u0438 Kubelet \u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0443\u0440 Kubernetes \u0432 \u0432\u0438\u0434\u0435 \u0440\u0435\u0441\u0443\u0440\u0430 ConfigMap. \u042d\u0442\u043e\u0442 \u043f\u043e\u0434\u0445\u043e\u0434 \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0443\u0437\u043b\u043e\u0432 Kubernetes, \u043e\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u044f \u043a\u0430\u043a \u0440\u0430\u0431\u043e\u0447\u0438\u0435 (worker), \u0442\u0430\u043a \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0435 (master) \u0443\u0437\u043b\u044b.","source":"@site/docs/tech-docs/kubernetes/additionalSetup/uploadConfigsInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/additionalSetup","slug":"/tech-docs/kubernetes/additionalSetup/uploadConfigsInitComponent","permalink":"/tech-docs/kubernetes/additionalSetup/uploadConfigsInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(1775),l=n(60513),u=n(76519),d=n(28702),h=n(7478),m=n(10119);const p={},b=void 0,k={},g=[];function f(e){const t={admonition:"admonition",code:"code",p:"p",...(0,a.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 ",(0,s.jsx)(t.code,{children:"Kubeadm"})," \u0438 ",(0,s.jsx)(t.code,{children:"Kubelet"})," \u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0443\u0440 Kubernetes \u0432 \u0432\u0438\u0434\u0435 \u0440\u0435\u0441\u0443\u0440\u0430 ",(0,s.jsx)(t.code,{children:"ConfigMap"}),". \u042d\u0442\u043e\u0442 \u043f\u043e\u0434\u0445\u043e\u0434 \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0443\u0437\u043b\u043e\u0432 Kubernetes, \u043e\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u044f \u043a\u0430\u043a \u0440\u0430\u0431\u043e\u0447\u0438\u0435 (",(0,s.jsx)(t.code,{children:"worker"}),"), \u0442\u0430\u043a \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0435 (",(0,s.jsx)(t.code,{children:"master"}),") \u0443\u0437\u043b\u044b."]})}),"\n",(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsxs)(o.A,{value:"HardWay",children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
      export CLUSTER_NAME='${h.M.clusterName.value}'
      export BASE_DOMAIN='${h.M.kubernetesBaseDomain.value}'
      export FULL_HOST_NAME=${h.M.virtualMachineFullName.value}
      export INTERNAL_API=api.${h.M.kubernetesClusterExternalDomain.value}
      export MACHINE_LOCAL_ADDRESS=${h.M.virtualMachineLocalAddress.value}
      export ETCD_INITIAL_CLUSTER="$\{FULL_HOST_NAME}=${m.D.initialAdvertisePeerUrls.value}"
    `}),(0,s.jsxs)(n,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"kubeadm-config"}),(0,s.jsx)(i.A,{children:l.A`
      kubectl \\
        --kubeconfig=${h.M.kuberneteBaseFolderPath.value}/super-admin.conf \\
        apply -f - <<EOF
      ---
      apiVersion: v1
      kind: ConfigMap
      metadata:
        name: kubeadm-config
        namespace: kube-system
      data:
        ClusterConfiguration: |
          ${u.Q.data.value}
      EOF
    `})]}),(0,s.jsxs)(n,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"kubelet-config"}),(0,s.jsx)(i.A,{children:l.A`
      kubectl \\
        --kubeconfig=${h.M.kuberneteBaseFolderPath.value}/super-admin.conf \\
        apply -f - <<EOF
      ---
      apiVersion: v1
      kind: ConfigMap
      metadata:
        name: kubelet-config
        namespace: kube-system
      data:
        kubelet: |
          ${d.D.data.value}
      EOF
    `})]})]}),(0,s.jsxs)(o.A,{value:"Kubeadm",children:[(0,s.jsx)("h4",{children:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
      kubeadm init phase upload-config all \\
        --config=${h.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${h.M.kuberneteBaseFolderPath.value}/super-admin.conf
    `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:l.A`
  [upload-config] Storing the configuration used in ConfigMap "kubeadm-config" in the "kube-system" Namespace
  [kubelet] Creating a ConfigMap "kubelet-config" in namespace kube-system with the configuration for the kubelets in the cluster
`})})]})]})]})}function v(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},95145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/statusBinFiles","title":"statusBinFiles","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/statusBinFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/statusBinFiles","permalink":"/tech-docs/kubernetes/components/kubeadm/statusBinFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),c=n(1775),i=n(63770);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{language:"bash",children:o.A`
  journalctl -t kubeadm-installer
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(c.A,{language:"text",children:o.A`
  ***** [INFO] Checking current kubeadm version...
  ***** [INFO] Current: none, Target: ${i.M.kubernetes.value}
  ***** [INFO] Download URL: https://*******
  ***** [INFO] Updating kubeadm to version ${i.M.kubernetes.value}...
  ***** [INFO] Working directory: /tmp/tmp.*****
  ***** [INFO] Downloading kubeadm...
  ***** [INFO] Downloading checksum file...
  ***** [INFO] Verifying checksum...
  ***** [INFO] Extracting files...
  ***** [INFO] Installing binaries...
  ***** [INFO] kubeadm successfully updated to ${i.M.kubernetes.value}.
`})}),"\n",(0,s.jsx)(c.A,{language:"bash",children:o.A`
  ls -la /usr/local/bin/ | grep 'kubeadm$'
`}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(c.A,{language:"bash",children:o.A`
  -rwxr-xr-x  1 root root  50253976 Aug 14  2024 kubeadm
`})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},95640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/centerAuthority/downloadCA","title":"downloadCA","description":"TODO","source":"@site/docs/tech-docs/kubernetes/certificates/centerAuthority/downloadCA.mdx","sourceDirName":"tech-docs/kubernetes/certificates/centerAuthority","slug":"/tech-docs/kubernetes/certificates/centerAuthority/downloadCA","permalink":"/tech-docs/kubernetes/certificates/centerAuthority/downloadCA","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(7478),c=n(1775),i=n(60513),l=n(87464),u=n(62774);const d={},h=void 0,m={},p=[];function b(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(u.A,{groupId:"install-type",children:[(0,s.jsx)(l.A,{value:"HardWay",children:(0,s.jsx)(t.p,{children:"TODO"})}),(0,s.jsxs)(l.A,{value:"Kubeadm",children:[(0,s.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:[(0,s.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/kubeadm/lifecycle-settings",children:"Kubeadm Configs"}),"."]}),"\n"]})]}),(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
      kubeadm join phase control-plane-prepare download-certs \\
        --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${o.M.kuberneteBaseFolderPath.value}/admin.conf
    `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:i.A`
  [preflight] Reading configuration from the cluster...
  [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
  [download-certs] Downloading the certificates in Secret "kubeadm-certs" in the "kube-system" Namespace
  [download-certs] Saving the certificates to the folder: "/etc/kubernetes/pki"
`})})]})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},97373:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/checkBIN","title":"checkBIN","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/checkBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/checkBIN","permalink":"/tech-docs/kubernetes/components/kubeadm/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(35941),c=n(95145);const i={},l=void 0,u={},d=[...c.toc,...o.toc];function h(e){const{Details:t}={...(0,a.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,s.jsx)(c.default,{}),(0,s.jsx)(o.default,{})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},97786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/serviceAccountComponent","title":"serviceAccountComponent","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/certificates/serviceAccountComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates","slug":"/tech-docs/kubernetes/certificates/serviceAccountComponent","permalink":"/tech-docs/kubernetes/certificates/serviceAccountComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(1775),l=n(60513),u=n(6353);const d={},h=void 0,m={},p=[];function b(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsxs)(o.A,{value:"HardWay",children:[(0,s.jsx)(i.A,{language:"bash",children:l.A`
        openssl genpkey \\
          -algorithm RSA \\
          -out ${u.$.kubernetesSA.keyPath} \\
          -pkeyopt rsa_keygen_bits:2048
      `}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
        openssl rsa \\
          -pubout \\
          -in ${u.$.kubernetesSA.keyPath} \\
          -out ${u.$.kubernetesSA.crtPath}
      `})]}),(0,s.jsxs)(o.A,{value:"Kubeadm",children:[(0,s.jsx)(i.A,{language:"bash",children:l.A`
        kubeadm init phase certs sa
      `}),(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
  #### Генерация Kube API сертификатов
  [certs] Generating "sa" key and public key
`})]})]})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},97836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubelet/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/lifecycleDownloadComponent","permalink":"/tech-docs/kubernetes/components/kubelet/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(12141);const c={},i=void 0,l={},u=[...o.toc];function d(e){const t={li:"li",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,s.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,s.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,s.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,s.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,s.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n"]}),"\n",(0,s.jsx)(o.default,{})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},98744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configs/joinConfig","title":"joinConfig","description":"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440 \u043d\u043e\u0434\u044b \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configs/joinConfig.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/configs","slug":"/tech-docs/kubernetes/components/kubeadm/configs/joinConfig","permalink":"/tech-docs/kubernetes/components/kubeadm/configs/joinConfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(1775),c=n(25292),i=n(60513),l=n(7478),u=n(31798);const d={},h=void 0,m={},p=[];function b(e){const{Details:t}={...(0,a.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(t,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440 \u043d\u043e\u0434\u044b \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443"}),(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,s.jsx)(o.A,{language:"bash",children:i.A`
      export MACHINE_LOCAL_ADDRESS="${l.M.virtualMachineLocalAddress.value}"
      export CLUSTER_API_ENDPOINT=api.${l.M.clusterName.value}.${l.M.kubernetesBaseDomain.value}
      export CERTIFICATE_UPLOAD_KEY=0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59

    `}),(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440\u0430 \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443"}),(0,s.jsx)(o.A,{children:i.A`cat <<EOF > ${l.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
    ---
    apiVersion: kubeadm.k8s.io/v1beta3
    controlPlane:
      localAPIEndpoint:
        advertiseAddress: $\{MACHINE_LOCAL_ADDRESS}
        bindPort: ${u.h.kubeAPIServer.portNumber}
      certificateKey: $\{CERTIFICATE_UPLOAD_KEY}
    discovery:
      bootstrapToken:
        apiServerEndpoint: $\{CLUSTER_API_ENDPOINT}:${c.L.securePort.value}
        unsafeSkipCAVerification: true
        token: "fjt9ex.lwzqgdlvoxtqk4yw"
    kind: JoinConfiguration
    EOF
  `})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},99119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/main","permalink":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(87464),c=n(62774),i=n(66685),l=n(38816),u=n(92374);const d={},h=void 0,m={},p=[...i.toc,...l.toc,...u.toc];function b(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsxs)(o.A,{value:"HardWay",children:[(0,s.jsx)(i.default,{}),(0,s.jsx)(l.default,{})]}),(0,s.jsx)(o.A,{value:"Kubeadm",children:(0,s.jsx)(u.default,{})})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}}}]);