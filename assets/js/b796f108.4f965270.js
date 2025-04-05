"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2108],{7478:(e,t,a)=>{a.d(t,{M:()=>n});const n={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"my-first-cluster"},kubernetesClusterDomain:{value:"cluster.local"},kubernetesBaseFolderPath:{value:"/etc/kubernetes"},kubeadmBaseConfigPath:{value:"/var/run/kubeadm"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_NAME}.${BASE_DOMAIN}"},kubernetesClusterExternalDomain:{value:"${CLUSTER_NAME}.${BASE_DOMAIN}"}}},62774:(e,t,a)=>{a.d(t,{A:()=>A});var n=a(96540),r=a(34164),s=a(65627),c=a(56347),l=a(50372),u=a(30604),o=a(11861),i=a(78749);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,c.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=p(e),[c,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[o,d]=b({queryString:a,groupId:r}),[m,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,i.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),y=(()=>{const e=o??m;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{y&&u(y)}),[y]);return{selectedValue:c,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=a(9136);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function v(e){let{className:t,block:a,selectedValue:n,selectValue:c,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),i=e=>{const t=e.currentTarget,a=u.indexOf(t),r=l[a].value;r!==n&&(o(t),c(r))},d=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{u.push(e)},onKeyDown:d,onClick:i,...s,className:(0,r.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function k(e){let{lazy:t,children:a,selectedValue:s}=e;const c=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=c.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:c.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function E(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",y.tabList),children:[(0,g.jsx)(v,{...t,...e}),(0,g.jsx)(k,{...t,...e})]})}function A(e){const t=(0,f.A)();return(0,g.jsx)(E,{...e,children:d(e.children)},String(t))}},75735:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>f,frontMatter:()=>d,metadata:()=>n,toc:()=>b});const n=JSON.parse('{"id":"tech-docs/kubernetes/additionalSetup/uploadCAComponent","title":"uploadCAComponent","description":"\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0443\u0440 Kubernetes. \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f \u0432 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435 \u043a\u0430\u043a \u0440\u0435\u0441\u0443\u0440\u0441 Secret, \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0445 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0438 \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u043c \u0443\u0437\u043b\u0435 \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u0443\u0437\u043b\u043e\u0432 \u0423\u041a.","source":"@site/docs/tech-docs/kubernetes/additionalSetup/uploadCAComponent.mdx","sourceDirName":"tech-docs/kubernetes/additionalSetup","slug":"/tech-docs/kubernetes/additionalSetup/uploadCAComponent","permalink":"/tech-docs/kubernetes/additionalSetup/uploadCAComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=a(74848),s=a(28453),c=a(87464),l=a(62774),u=a(1775),o=a(60513),i=a(7478);const d={},p=void 0,h={},b=[];function m(e){const t={admonition:"admonition",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0443\u0440 Kubernetes. \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f \u0432 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435 \u043a\u0430\u043a \u0440\u0435\u0441\u0443\u0440\u0441 ",(0,r.jsx)(t.code,{children:"Secret"}),", \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0445 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0438 \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u043c \u0443\u0437\u043b\u0435 \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u0443\u0437\u043b\u043e\u0432 \u0423\u041a."]})}),"\n",(0,r.jsxs)(l.A,{groupId:"install-type",children:[(0,r.jsxs)(c.A,{value:"HardWay",children:[(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),(0,r.jsx)(u.A,{language:"bash",children:o.A`
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl
    `}),(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(u.A,{language:"bash",children:o.A`
      export CERTIFICATE_UPLOAD_KEY=0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
    `}),(0,r.jsx)(u.A,{language:"bash",children:o.A`
      cat <<EOF > ${i.M.kubernetesBaseFolderPath.value}/openssl/encrypt.py
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
    `}),(0,r.jsx)(u.A,{language:"bash",children:o.A`
      cat <<'EOF' > ${i.M.kubernetesBaseFolderPath.value}/openssl/upload-certs.sh
      #!/bin/bash
      set -euo pipefail

      CERT_PATH="${i.M.kubernetesBaseFolderPath.value}/pki"
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

      KEY="$\{CERTIFICATE_UPLOAD_KEY:-}"
      if [[ -z "$KEY" ]]; then
        echo "[ERROR] CERTIFICATE_UPLOAD_KEY is not set"
        exit 1
      fi

      echo "[INFO] Using certificate key: $KEY"

      TMP_DIR=$(mktemp -d)
      SECRET_FILE="$TMP_DIR/secret.yaml"

      cat <<EOF_SECRET > "$SECRET_FILE"
      apiVersion: v1
      kind: Secret
      metadata:
        name: kubeadm-certs
        namespace: kube-system
      type: Opaque
      data:
      EOF_SECRET

      for name in "$\{!files[@]}"; do
        path="$\{files[$name]}"
        if [[ ! -f "$path" ]]; then
          echo "[WARN] Skipping missing file: $path"
          continue
        fi
        echo "[INFO] Encrypting $name..."
        b64=$(python3 "$PY_SCRIPT" "$KEY" "$path")
        echo "  $name: $b64" >> "$SECRET_FILE"
      done

      echo "[INFO] Applying secret to cluster..."
      kubectl apply -f "$SECRET_FILE"

      echo "[INFO] Secret successfully uploaded."
      EOF
    `}),(0,r.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(u.A,{language:"yaml",children:o.A`
      chmod +x ${i.M.kubernetesBaseFolderPath.value}/openssl/upload-certs.sh
    `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u043a\u0440\u0438\u043f\u0442\u0430"}),(0,r.jsx)(u.A,{language:"yaml",children:o.A`
      ${i.M.kubernetesBaseFolderPath.value}/openssl/upload-certs.sh
    `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(u.A,{language:"yaml",children:o.A`
  [INFO] Using certificate key: 0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
  [INFO] Encrypting front-proxy-ca.key...
  [INFO] Encrypting sa.key...
  [INFO] Encrypting front-proxy-ca.crt...
  [INFO] Encrypting etcd-ca.crt...
  [INFO] Encrypting sa.pub...
  [INFO] Encrypting ca.key...
  [INFO] Encrypting ca.crt...
  [INFO] Encrypting etcd-ca.key...
  [INFO] Applying secret to cluster...
  secret/kubeadm-certs configured
  [INFO] Secret successfully uploaded.
`})})]}),(0,r.jsxs)(c.A,{value:"Kubeadm",children:[(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),(0,r.jsx)(u.A,{language:"bash",children:o.A`
      kubeadm init phase  upload-certs \\
        --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
        --upload-certs
    `}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(u.A,{language:"bash",children:o.A`
  [upload-certs] Storing the certificates in Secret "kubeadm-certs" in the "kube-system" Namespace
  [upload-certs] Using certificate key:
  0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
`})})]})]})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},87464:(e,t,a)=>{a.d(t,{A:()=>c});a(96540);var n=a(34164);const r={tabItem:"tabItem_Ymn6"};var s=a(74848);function c(e){let{children:t,hidden:a,className:c}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,c),hidden:a,children:t})}}}]);