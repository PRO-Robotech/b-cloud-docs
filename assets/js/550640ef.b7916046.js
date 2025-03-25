"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1197,1579,5253,5800,6046,7167,7389,8200,8492,9116,9671],{6353:(e,t,r)=>{r.d(t,{$:()=>c});var n=r(7478);const c={etcdCA:{keyPath:`${n.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${n.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${n.M.kuberneteBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${n.M.kuberneteBaseFolderPath.value}/pki/ca.key`,crtPath:`${n.M.kuberneteBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${n.M.kuberneteBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${n.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${n.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${n.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${n.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${n.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${n.M.kuberneteBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${n.M.kuberneteBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:`${n.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${n.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${n.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${n.M.kuberneteBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${n.M.kuberneteBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${n.M.kuberneteBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${n.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${n.M.kuberneteBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${n.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${n.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${n.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${n.M.kuberneteBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${n.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${n.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${n.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${n.M.kuberneteBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${n.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${n.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${n.M.kuberneteBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${n.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${n.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${n.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${n.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${n.M.kuberneteBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${n.M.kuberneteBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${n.M.kuberneteBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${n.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${n.M.kuberneteBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${n.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${n.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${n.M.kuberneteBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${n.M.kuberneteBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${n.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${n.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${n.M.kuberneteBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${n.M.kuberneteBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${n.M.kuberneteBaseFolderPath.value}/pki/sa.key`,crtPath:`${n.M.kuberneteBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${n.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${n.M.kuberneteBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${n.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${n.M.kuberneteBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${n.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${n.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${n.M.kuberneteBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${n.M.kuberneteBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"}}},7478:(e,t,r)=>{r.d(t,{M:()=>n});const n={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"my-first-cluster"},kubernetesClusterDomain:{value:"cluster.local"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kubeadmBaseConfigPath:{value:"/var/run/kubeadm"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_NAME}.${BASE_DOMAIN}"},kubernetesClusterExternalDomain:{value:"${CLUSTER_NAME}.${BASE_DOMAIN}"}}},17510:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdServer/main","title":"main","description":"","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdServer/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdServer/main","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=r(74848),a=r(28453),s=r(87464),o=r(62774),l=r(46567),i=r(49717);const d={},u=void 0,h={},p=[...l.toc,...i.toc];function m(e){return(0,c.jsxs)(o.A,{groupId:"install-type",children:[(0,c.jsx)(s.A,{value:"HardWay",children:(0,c.jsx)(l.default,{})}),(0,c.jsx)(s.A,{value:"Kubeadm",children:(0,c.jsx)(i.default,{})})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(m,{...e})}):m()}},19529:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdPeer/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdPeer/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdPeer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdPeer/openssl","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdPeer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=r(74848),a=r(28453),s=r(6353),o=r(7478),l=r(1775),i=r(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,c.jsx)(l.A,{language:"bash",children:i.A`
      export CLUSTER_NAME=${o.M.clusterName.value}
      export FULL_HOST_NAME=${o.M.virtualMachineFullName.value}
      export MACHINE_LOCAL_ADDRESS=${o.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,c.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,c.jsx)(l.A,{language:"bash",children:i.A`
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/pki
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,c.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,c.jsx)(l.A,{language:"bash",children:i.A`
  cat <<EOF > ${s.$.etcdPeer.crtConf}
  [ req ]
  default_bits        = ${s.$.etcdPeer.keySize}
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
  `}),"\n",(0,c.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,c.jsx)(l.A,{language:"bash",children:i.A`
  openssl genrsa \\
    -out ${s.$.etcdPeer.keyPath} ${s.$.etcdPeer.keySize}
  `}),"\n",(0,c.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,c.jsx)(l.A,{language:"bash",children:i.A`
  openssl req \\
    -new \\
    -key ${s.$.etcdPeer.keyPath} \\
    -out ${s.$.etcdPeer.csrPath} \\
    -config ${s.$.etcdPeer.crtConf}
  `}),"\n",(0,c.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,c.jsx)(l.A,{language:"bash",children:i.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${s.$.etcdCA.crtPath} \\
    -CAkey ${s.$.etcdCA.keyPath} \\
    -CAcreateserial \\
    -in ${s.$.etcdPeer.csrPath} \\
    -out ${s.$.etcdPeer.crtPath} \\
    -extensions v3_ext \\
    -extfile ${s.$.etcdPeer.crtConf}
  `})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(m,{...e})}):m()}},36189:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdClient/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdClient","slug":"/tech-docs/etcd/certificates/components/etcd/etcdClient/openssl","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=r(74848),a=r(28453),s=r(6353),o=r(7478),l=r(1775),i=r(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,c.jsx)(l.A,{language:"bash",children:i.A`
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/pki/etcd
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,c.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,c.jsx)(l.A,{language:"bash",children:i.A`
    cat <<EOF > ${s.$.etcdClient.crtConf}
    [ req ]
    default_bits        = ${s.$.etcdClient.keySize}
    prompt              = no
    default_md          = sha256
    distinguished_name  = dn

    [ dn ]
    CN = ${s.$.etcdClient.cname}

    [ v3_ext ]
    authorityKeyIdentifier=keyid,issuer:always
    basicConstraints=CA:FALSE
    keyUsage=keyEncipherment,dataEncipherment
    extendedKeyUsage=clientAuth
    EOF
  `}),"\n",(0,c.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,c.jsx)(l.A,{language:"bash",children:i.A`
    openssl genrsa \\
        -out ${s.$.etcdClient.keyPath} ${s.$.etcdClient.keySize}
  `}),"\n",(0,c.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,c.jsx)(l.A,{language:"bash",children:i.A`
    openssl req \\
      -new \\
      -key ${s.$.etcdClient.keyPath} \\
      -out ${s.$.etcdClient.csrPath} \\
      -config ${s.$.etcdClient.crtConf}
  `}),"\n",(0,c.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,c.jsx)(l.A,{language:"bash",children:i.A`
    openssl x509 \\
      -req \\
      -days 365 \\
      -sha256 \\
      -CA ${s.$.etcdCA.crtPath} \\
      -CAkey ${s.$.etcdCA.keyPath} \\
      -CAcreateserial \\
      -in ${s.$.etcdClient.csrPath} \\
      -out ${s.$.etcdClient.crtPath} \\
      -extensions v3_ext \\
      -extfile ${s.$.etcdClient.crtConf}
  `})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(m,{...e})}):m()}},46567:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdServer/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdServer/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdServer/openssl","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=r(74848),a=r(28453),s=r(6353),o=r(7478),l=r(1775),i=r(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,c.jsx)(l.A,{language:"bash",children:i.A`
  export CLUSTER_NAME=${o.M.clusterName.value}
  export BASE_DOMAIN=${o.M.kubernetesBaseDomain.value}
  export FULL_HOST_NAME=${o.M.virtualMachineFullName.value}
  export MACHINE_LOCAL_ADDRESS=${o.M.virtualMachineLocalAddress.value}
`}),"\n",(0,c.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,c.jsx)(l.A,{language:"bash",children:i.A`
  mkdir -p ${o.M.kuberneteBaseFolderPath.value}/pki
  mkdir -p ${o.M.kuberneteBaseFolderPath.value}/openssl/csr
`}),"\n",(0,c.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,c.jsx)(l.A,{language:"bash",children:i.A`
  cat <<EOF > ${s.$.etcdServer.crtConf}
  [ req ]
  default_bits        = ${s.$.etcdServer.keySize}
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
  `}),"\n",(0,c.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,c.jsx)(l.A,{language:"bash",children:i.A`
  openssl genrsa \\
    -out ${s.$.etcdServer.keyPath} ${s.$.etcdServer.keySize}
  `}),"\n",(0,c.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,c.jsx)(l.A,{language:"bash",children:i.A`
  openssl req \\
    -new \\
    -key ${s.$.etcdServer.keyPath} \\
    -out ${s.$.etcdServer.csrPath} \\
    -config ${s.$.etcdServer.crtConf}
  `}),"\n",(0,c.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,c.jsx)(l.A,{language:"bash",children:i.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${s.$.etcdCA.crtPath} \\
    -CAkey ${s.$.etcdCA.keyPath} \\
    -CAcreateserial \\
    -in ${s.$.etcdServer.csrPath} \\
    -out ${s.$.etcdServer.crtPath} \\
    -extensions v3_ext \\
    -extfile ${s.$.etcdServer.crtConf}
  `})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(m,{...e})}):m()}},47363:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/main","title":"main","description":"5.1.2.2.1. Etcd client > Etcd","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd","slug":"/tech-docs/etcd/certificates/components/etcd/main","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=r(74848),a=r(28453),s=r(55609),o=r(17510),l=r(67069);const i={},d=void 0,u={},h=[{value:"5.1.2.2.1. Etcd client &gt; Etcd",id:"51221-etcd-client--etcd",level:2},...s.toc,{value:"5.1.2.2.2. Etcd server",id:"51222-etcd-server",level:2},...o.toc,{value:"5.1.2.2.3. Etcd peer &gt; Etcd",id:"51223-etcd-peer--etcd",level:2},...l.toc];function p(e){const t={h2:"h2",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"51221-etcd-client--etcd",children:"5.1.2.2.1. Etcd client > Etcd"}),"\n",(0,c.jsx)(s.default,{}),"\n",(0,c.jsx)(t.h2,{id:"51222-etcd-server",children:"5.1.2.2.2. Etcd server"}),"\n",(0,c.jsx)(o.default,{}),"\n",(0,c.jsx)(t.h2,{id:"51223-etcd-peer--etcd",children:"5.1.2.2.3. Etcd peer > Etcd"}),"\n",(0,c.jsx)(l.default,{})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},49717:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdServer/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdServer/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdServer/kubeadm","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdServer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=r(74848),a=r(28453),s=r(7478),o=r(1775),l=r(60513);const i={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,c.jsx)(o.A,{language:"bash",children:l.A`
  kubeadm init phase certs etcd-server \\
    --config=${s.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,c.jsxs)(t.admonition,{type:"note",children:[(0,c.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,c.jsx)(o.A,{language:"bash",children:l.A`
  #### Генерация сертификатов
  [certs] Generating "etcd/server" certificate and key
  [certs] etcd/server serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com] and IPs [192.168.10.27 127.0.0.1 ::1]
`})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},53902:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"tech-docs/etcd/certificates/components/main","title":"main","description":"\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/etcd/certificates/components/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components","slug":"/tech-docs/etcd/certificates/components/main","permalink":"/in-cloud/tech-docs/etcd/certificates/components/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=r(74848),a=r(28453),s=r(47363);const o={},l=void 0,i={},d=[{value:"\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432",id:"\u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432",level:3},...s.toc];function u(e){const t={h3:"h3",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:"\u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432",children:"\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,c.jsx)(s.default,{})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},55609:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdClient/main","title":"main","description":"","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdClient/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdClient","slug":"/tech-docs/etcd/certificates/components/etcd/etcdClient/main","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=r(74848),a=r(28453),s=r(87464),o=r(62774),l=r(36189),i=r(80614);const d={},u=void 0,h={},p=[...l.toc,...i.toc];function m(e){return(0,c.jsxs)(o.A,{groupId:"install-type",children:[(0,c.jsx)(s.A,{value:"HardWay",children:(0,c.jsx)(l.default,{})}),(0,c.jsx)(s.A,{value:"Kubeadm",children:(0,c.jsx)(i.default,{})})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(m,{...e})}):m()}},62774:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(96540),c=r(34164),a=r(65627),s=r(56347),o=r(50372),l=r(30604),i=r(11861),d=r(78749);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:c}}=e;return{value:t,label:r,attributes:n,default:c}}))}(r);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const c=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(c.location.search);t.set(a,e),c.replace({...c.location,search:t.toString()})}),[a,c])]}function k(e){const{defaultValue:t,queryString:r=!1,groupId:c}=e,a=h(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[i,u]=m({queryString:r,groupId:c}),[k,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[c,a]=(0,d.Dv)(r);return[c,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:c}),b=(()=>{const e=i??k;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var f=r(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function P(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,a.a_)(),d=e=>{const t=e.currentTarget,r=l.indexOf(t),c=o[r].value;c!==n&&(i(t),s(c))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{l.push(e)},onKeyDown:u,onClick:d,...a,className:(0,c.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function $(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,c.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=k(e);return(0,v.jsxs)("div",{className:(0,c.A)("tabs-container",b.tabList),children:[(0,v.jsx)(P,{...t,...e}),(0,v.jsx)($,{...t,...e})]})}function y(e){const t=(0,f.A)();return(0,v.jsx)(x,{...e,children:u(e.children)},String(t))}},67069:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdPeer/main","title":"main","description":"","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdPeer/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdPeer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdPeer/main","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdPeer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=r(74848),a=r(28453),s=r(87464),o=r(62774),l=r(19529),i=r(89982);const d={},u=void 0,h={},p=[...l.toc,...i.toc];function m(e){return(0,c.jsxs)(o.A,{groupId:"install-type",children:[(0,c.jsx)(s.A,{value:"HardWay",children:(0,c.jsx)(l.default,{})}),(0,c.jsx)(s.A,{value:"Kubeadm",children:(0,c.jsx)(i.default,{})})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(m,{...e})}):m()}},80614:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdClient/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdClient","slug":"/tech-docs/etcd/certificates/components/etcd/etcdClient/kubeadm","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=r(74848),a=r(28453),s=r(7478),o=r(1775),l=r(60513);const i={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,c.jsx)(o.A,{language:"bash",children:l.A`
  kubeadm init phase certs etcd-healthcheck-client \\
    --config=${s.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,c.jsxs)(t.admonition,{type:"note",children:[(0,c.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,c.jsx)(o.A,{language:"bash",children:l.A`
  #### Генерация сертификатов
  [certs] Generating "etcd/healthcheck-client" certificate and key
`})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},87464:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(34164);const c={tabItem:"tabItem_Ymn6"};var a=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(c.tabItem,s),hidden:r,children:t})}},89982:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdPeer/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdPeer/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdPeer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdPeer/kubeadm","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdPeer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=r(74848),a=r(28453),s=r(7478),o=r(1775),l=r(60513);const i={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,c.jsx)(o.A,{language:"bash",children:l.A`
  kubeadm init phase certs etcd-peer \\
    --config=${s.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,c.jsxs)(t.admonition,{type:"note",children:[(0,c.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,c.jsx)(o.A,{language:"bash",children:l.A`
  #### Генерация сертификатов
  [certs] Generating "etcd/peer" certificate and key
  [certs] etcd/peer serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com] and IPs [192.168.10.27 127.0.0.1 ::1]
`})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}}}]);