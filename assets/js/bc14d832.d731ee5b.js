"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8034],{6353:(e,t,a)=>{a.d(t,{$:()=>l});var r=a(7478);const l={etcdCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"}}},7478:(e,t,a)=>{a.d(t,{M:()=>r});const r={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"my-first-cluster"},kubernetesClusterDomain:{value:"cluster.local"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kubeadmBaseConfigPath:{value:"/var/run/kubeadm"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_NAME}.${BASE_DOMAIN}"},kubernetesClusterExternalDomain:{value:"${CLUSTER_NAME}.${BASE_DOMAIN}"}}},25292:(e,t,a)=>{a.d(t,{L:()=>o});var r=a(6353),l=a(31798),u=a(7478);const o={etcdCafile:{value:`${r.$.etcdCA.crtPath}`},etcdCertfile:{value:`${r.$.kubernetesEtcdClient.crtPath}`},etcdKeyfile:{value:`${r.$.kubernetesEtcdClient.keyPath}`},certDir:{value:"/var/run/kubernetes"},kubeletClientCertificate:{value:`${r.$.kubernetesKubeletClient.crtPath}`},kubeletClientKey:{value:`${r.$.kubernetesKubeletClient.keyPath}`},clientCAFile:{value:`${r.$.kubernetesCA.crtPath}`},proxyClientCertFile:{value:`${r.$.kubernetesFrontProxyClient.crtPath}`},proxyClientKeyFile:{value:`${r.$.kubernetesFrontProxyClient.keyPath}`},tlsCertFile:{value:`${r.$.kubernetesServer.crtPath}`},tlsPrivateKeyFile:{value:`${r.$.kubernetesServer.keyPath}`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountKeyFile:{value:`${r.$.kubernetesSA.crtPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},serviceAccountSigningKeyFile:{value:`${r.$.kubernetesSA.keyPath}`},aggregatorRejectForwardingRedirect:{value:"true"},allowPrivileged:{value:"true"},anonymousAuth:{value:"true"},auditLogBatchThrottleEnable:{value:"false"},auditLogCompress:{value:"false"},auditLogTruncateEnabled:{value:"false"},auditWebhookBatchThrottleEnable:{value:"true"},auditWebhookTruncateEnabled:{value:"false"},contentionProfiling:{value:"false"},enableAggregatorRouting:{value:"true"},enableBootstrapTokenAuth:{value:"true"},enableGarbageCollector:{value:"true"},enableLogsHandler:{value:"true"},enablePriorityAndFairness:{value:"true"},encryptionProviderConfigAutomaticReload:{value:"false"},help:{value:"false"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},version:{value:"false"},watchCache:{value:"true"},logTextSplitStream:{value:"false"},shutdownSendRetryAfter:{value:"false"},logJsonSplitStream:{value:"false"},serviceAccountExtendTokenExpiration:{value:"true"},serviceAccountLookup:{value:"true"},apiserverCount:{value:"1"},auditLogBatchBufferSize:{value:"10000"},auditLogBatchMaxSize:{value:"1"},auditLogBatchThrottleBurst:{value:"0"},auditLogBatchThrottleQps:{value:"0"},auditLogMaxage:{value:"30"},auditLogMaxbackup:{value:"10"},auditLogMaxsize:{value:"1000"},auditLogTruncateMaxBatchSize:{value:"10485760"},auditLogTruncateMaxEventSize:{value:"102400"},auditWebhookBatchBufferSize:{value:"10000"},auditWebhookBatchMaxSize:{value:"400"},auditWebhookBatchThrottleBurst:{value:"15"},auditWebhookBatchThrottleQps:{value:"10"},auditWebhookTruncateMaxBatchSize:{value:"10485760"},auditWebhookTruncateMaxEventSize:{value:"102400"},defaultNotReadyTolerationSeconds:{value:"300"},defaultUnreachableTolerationSeconds:{value:"300"},defaultWatchCacheSize:{value:"100"},deleteCollectionWorkers:{value:"1"},kubernetesServiceNodePort:{value:"0"},leaseReuseDurationSeconds:{value:"60"},maxMutatingRequestsInflight:{value:"200"},maxRequestsInflight:{value:"400"},minRequestTimeout:{value:"1800"},goawayChance:{value:"0"},http2MaxStreamsPerConnection:{value:"0"},v:{value:"2"},logJsonInfoBufferSize:{value:"0"},logTextInfoBufferSize:{value:"0"},maxConnectionBytesPerSec:{value:"0"},kubeletPort:{value:`${l.h.kubeletServer.portNumber}`},securePort:{value:`${l.h.kubeAPIServer.portNumber}`},kubeletReadOnlyPort:{value:`${l.h.kubeletReadOnlyPort.portNumber}`},serviceNodePortRange:{value:"30000-32767"},etcdServers:{value:`https://127.0.0.1:${l.h.etcdServer.portNumber}`},serviceAccountIssuer:{value:`https://kubernetes.default.svc.${u.M.kubernetesClusterDomain.value}`},serviceClusterIpRange:{value:`${u.M.kubernetesServiceCIDR.value}`},auditWebhookInitialBackoff:{value:"10s"},auditWebhookBatchMaxWait:{value:"30s"},serviceAccountMaxTokenExpiration:{value:"0s"},shutdownWatchTerminationGracePeriod:{value:"0s"},shutdownDelayDuration:{value:"0s"},requestTimeout:{value:"1m0s"},eventTtl:{value:"1h0m0s"},livezGracePeriod:{value:"0s"},logFlushFrequency:{value:"5s"},kubeletTimeout:{value:"5s"},etcdCompactionInterval:{value:"5m0s"},etcdCountMetricPollPeriod:{value:"1m0s"},etcdDbMetricPollInterval:{value:"30s"},etcdHealthcheckTimeout:{value:"2s"},etcdReadycheckTimeout:{value:"2s"},authenticationTokenWebhookCacheTtl:{value:"2m0s"},authorizationWebhookCacheAuthorizedTtl:{value:"5m0s"},authorizationWebhookCacheUnauthorizedTtl:{value:"30s"},auditWebhookBatchInitialBackoff:{value:"10s"},auditLogBatchMaxWait:{value:"0s"},bindAddress:{value:"0.0.0.0"},cloudProviderGceL7lbSrcCidrs:{value:"130.211.0.0/22,35.191.0.0/16"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},apiAudiences:{value:"konnectivity-server"},loggingFormat:{value:"text"},auditLogFormat:{value:"json"},auditLogMode:{value:"batch"},auditWebhookMode:{value:"batch"},auditLogVersion:{value:"audit.k8s.io/v1"},auditWebhookVersion:{value:"audit.k8s.io/v1"},authenticationTokenWebhookVersion:{value:"v1beta1"},authorizationMode:{value:"Node,RBAC"},authorizationWebhookVersion:{value:"v1beta1"},cloudProvider:{value:"external"},enableAdmissionPlugins:{value:"NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,AlwaysPullImages,NodeRestriction,PodSecurity"},endpointReconcilerType:{value:"lease"},storageMediaType:{value:"application/vnd.kubernetes.protobuf"},etcdPrefix:{value:"/registry"},featureGates:{value:"RotateKubeletServerCertificate=true"},kubeletPreferredAddressTypes:{value:"InternalIP,ExternalIP,Hostname"},oidcSigningAlgs:{value:"RS256"},oidcUsernameClaim:{value:"sub"},requestheaderAllowedNames:{value:"front-proxy-client"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"},runtimeConfig:{value:"api/all=true"},storageBackend:{value:"etcd3"},advertiseAddress:{value:""},admissionControl:{value:""},admissionControlConfigFile:{value:""},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},auditLogPath:{value:""},auditPolicyFile:{value:""},auditWebhookConfigFile:{value:""},authenticationConfig:{value:""},authenticationTokenWebhookConfigFile:{value:""},authorizationConfig:{value:""},authorizationPolicyFile:{value:""},authorizationWebhookConfigFile:{value:""},cloudConfig:{value:""},corsAllowedOrigins:{value:""},debugSocketPath:{value:""},disableAdmissionPlugins:{value:""},disabledMetrics:{value:""},egressSelectorConfigFile:{value:""},encryptionProviderConfig:{value:""},etcdServersOverrides:{value:""},externalHostname:{value:""},kubeletCertificateAuthority:{value:""},oidcCaFile:{value:""},oidcClientId:{value:""},oidcGroupsClaim:{value:""},oidcGroupsPrefix:{value:""},oidcIssuerUrl:{value:""},oidcRequiredClaim:{value:""},oidcUsernamePrefix:{value:""},peerAdvertiseIp:{value:""},peerAdvertisePort:{value:""},peerCaFile:{value:""},serviceAccountJwksUri:{value:""},showHiddenMetricsForVersion:{value:""},strictTransportSecurityDirectives:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsSniCertKey:{value:""},tokenAuthFile:{value:""},tracingConfigFile:{value:""},vmodule:{value:""},watchCacheSizes:{value:""}}},31798:(e,t,a)=>{a.d(t,{h:()=>r});const r={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},63770:(e,t,a)=>{a.d(t,{M:()=>r});const r={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},79988:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>$,frontMatter:()=>v,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/staticPod","title":"staticPod","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/kubeAPI/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/staticPod","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeAPI/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),u=a(28453),o=a(7478),i=a(63770),n=a(25292),s=a(31798),c=a(1775),d=a(60513);const v={},h=void 0,k={},b=[];function p(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f"}),"\n",(0,l.jsx)(c.A,{language:"bash",children:d.A`
    export MACHINE_LOCAL_ADDRESS=${o.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,l.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,l.jsx)(c.A,{language:"bash",children:d.A`
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/manifests
  `}),"\n",(0,l.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,l.jsx)(c.A,{language:"bash",children:d.A`
  ---
  cat <<EOF > ${o.M.kuberneteBaseFolderPath.value}/manifests/kube-apiserver.yaml
  apiVersion: v1
  kind: Pod
  metadata:
    annotations:
      kubeadm.kubernetes.io/kube-apiserver.advertise-address.endpoint: $\{MACHINE_LOCAL_ADDRESS}:${n.L.securePort.value}
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
      - --aggregator-reject-forwarding-redirect=${n.L.aggregatorRejectForwardingRedirect.value}
      - --allow-privileged=${n.L.allowPrivileged.value}
      - --anonymous-auth=${n.L.anonymousAuth.value}
      - --api-audiences=${n.L.apiAudiences.value}
      - --apiserver-count=${n.L.apiserverCount.value}
      - --audit-log-batch-buffer-size=${n.L.auditLogBatchBufferSize.value}
      - --audit-log-batch-max-size=${n.L.auditLogBatchMaxSize.value}
      - --audit-log-batch-max-wait=${n.L.auditLogBatchMaxWait.value}
      - --audit-log-batch-throttle-burst=${n.L.auditLogBatchThrottleBurst.value}
      - --audit-log-batch-throttle-enable=${n.L.auditLogBatchThrottleEnable.value}
      - --audit-log-batch-throttle-qps=${n.L.auditLogBatchThrottleQps.value}
      - --audit-log-compress=${n.L.auditLogCompress.value}
      - --audit-log-format=${n.L.auditLogFormat.value}
      - --audit-log-maxage=${n.L.auditLogMaxage.value}
      - --audit-log-maxbackup=${n.L.auditLogMaxbackup.value}
      - --audit-log-maxsize=${n.L.auditLogMaxsize.value}
      - --audit-log-mode=${n.L.auditLogMode.value}
      - --audit-log-truncate-enabled=${n.L.auditLogTruncateEnabled.value}
      - --audit-log-truncate-max-batch-size=${n.L.auditLogTruncateMaxBatchSize.value}
      - --audit-log-truncate-max-event-size=${n.L.auditLogTruncateMaxEventSize.value}
      - --audit-log-version=${n.L.auditLogVersion.value}
      - --audit-webhook-batch-buffer-size=${n.L.auditWebhookBatchBufferSize.value}
      - --audit-webhook-batch-initial-backoff=${n.L.auditWebhookBatchInitialBackoff.value}
      - --audit-webhook-batch-max-size=${n.L.auditWebhookBatchMaxSize.value}
      - --audit-webhook-batch-max-wait=${n.L.auditWebhookBatchMaxWait.value}
      - --audit-webhook-batch-throttle-burst=${n.L.auditWebhookBatchThrottleBurst.value}
      - --audit-webhook-batch-throttle-enable=${n.L.auditWebhookBatchThrottleEnable.value}
      - --audit-webhook-batch-throttle-qps=${n.L.auditWebhookBatchThrottleQps.value}
      - --audit-webhook-initial-backoff=${n.L.auditWebhookInitialBackoff.value}
      - --audit-webhook-mode=${n.L.auditWebhookMode.value}
      - --audit-webhook-truncate-enabled=${n.L.auditWebhookTruncateEnabled.value}
      - --audit-webhook-truncate-max-batch-size=${n.L.auditWebhookTruncateMaxBatchSize.value}
      - --audit-webhook-truncate-max-event-size=${n.L.auditWebhookTruncateMaxEventSize.value}
      - --audit-webhook-version=${n.L.auditWebhookVersion.value}
      - --authentication-token-webhook-cache-ttl=${n.L.authenticationTokenWebhookCacheTtl.value}
      - --authentication-token-webhook-version=${n.L.authenticationTokenWebhookVersion.value}
      - --authorization-mode=${n.L.authorizationMode.value}
      - --authorization-webhook-cache-authorized-ttl=${n.L.authorizationWebhookCacheAuthorizedTtl.value}
      - --authorization-webhook-cache-unauthorized-ttl=${n.L.authorizationWebhookCacheUnauthorizedTtl.value}
      - --authorization-webhook-version=${n.L.authorizationWebhookVersion.value}
      - --bind-address=${n.L.bindAddress.value}
      - --cert-dir=${n.L.certDir.value}
      - --client-ca-file=${n.L.clientCaFile.value}
      - --cloud-provider=${n.L.cloudProvider.value}
      - --cloud-provider-gce-l7lb-src-cidrs=${n.L.cloudProviderGceL7lbSrcCidrs.value}
      - --cloud-provider-gce-lb-src-cidrs=${n.L.cloudProviderGceLbSrcCidrs.value}
      - --contention-profiling=${n.L.contentionProfiling.value}
      - --default-not-ready-toleration-seconds=${n.L.defaultNotReadyTolerationSeconds.value}
      - --default-unreachable-toleration-seconds=${n.L.defaultUnreachableTolerationSeconds.value}
      - --default-watch-cache-size=${n.L.defaultWatchCacheSize.value}
      - --delete-collection-workers=${n.L.deleteCollectionWorkers.value}
      - --enable-admission-plugins=${n.L.enableAdmissionPlugins.value}
      - --enable-aggregator-routing=${n.L.enableAggregatorRouting.value}
      - --enable-bootstrap-token-auth=${n.L.enableBootstrapTokenAuth.value}
      - --enable-garbage-collector=${n.L.enableGarbageCollector.value}
      - --enable-logs-handler=${n.L.enableLogsHandler.value}
      - --enable-priority-and-fairness=${n.L.enablePriorityAndFairness.value}
      - --encryption-provider-config-automatic-reload=${n.L.encryptionProviderConfigAutomaticReload.value}
      - --endpoint-reconciler-type=${n.L.endpointReconcilerType.value}
      - --etcd-cafile=${n.L.etcdCafile.value}
      - --etcd-certfile=${n.L.etcdCertfile.value}
      - --etcd-compaction-interval=${n.L.etcdCompactionInterval.value}
      - --etcd-count-metric-poll-period=${n.L.etcdCountMetricPollPeriod.value}
      - --etcd-db-metric-poll-interval=${n.L.etcdDbMetricPollInterval.value}
      - --etcd-healthcheck-timeout=${n.L.etcdHealthcheckTimeout.value}
      - --etcd-keyfile=${n.L.etcdKeyfile.value}
      - --etcd-prefix=${n.L.etcdPrefix.value}
      - --etcd-readycheck-timeout=${n.L.etcdReadycheckTimeout.value}
      - --etcd-servers=${n.L.etcdServers.value}
      - --event-ttl=${n.L.eventTtl.value}
      - --feature-gates=${n.L.featureGates.value}
      - --goaway-chance=${n.L.goawayChance.value}
      - --help=${n.L.help.value}
      - --http2-max-streams-per-connection=${n.L.http2MaxStreamsPerConnection.value}
      - --kubelet-client-certificate=${n.L.kubeletClientCertificate.value}
      - --kubelet-client-key=${n.L.kubeletClientKey.value}
      - --kubelet-port=${n.L.kubeletPort.value}
      - --kubelet-preferred-address-types=${n.L.kubeletPreferredAddressTypes.value}
      - --kubelet-read-only-port=${n.L.kubeletReadOnlyPort.value}
      - --kubelet-timeout=${n.L.kubeletTimeout.value}
      - --kubernetes-service-node-port=${n.L.kubernetesServiceNodePort.value}
      - --lease-reuse-duration-seconds=${n.L.leaseReuseDurationSeconds.value}
      - --livez-grace-period=${n.L.livezGracePeriod.value}
      - --log-flush-frequency=${n.L.logFlushFrequency.value}
      - --logging-format=${n.L.loggingFormat.value}
      - --log-json-info-buffer-size=${n.L.logJsonInfoBufferSize.value}
      - --log-json-split-stream=${n.L.logJsonSplitStream.value}
      - --log-text-info-buffer-size=${n.L.logTextInfoBufferSize.value}
      - --log-text-split-stream=${n.L.logTextSplitStream.value}
      - --max-connection-bytes-per-sec=${n.L.maxConnectionBytesPerSec.value}
      - --max-mutating-requests-inflight=${n.L.maxMutatingRequestsInflight.value}
      - --max-requests-inflight=${n.L.maxRequestsInflight.value}
      - --min-request-timeout=${n.L.minRequestTimeout.value}
      - --permit-address-sharing=${n.L.permitAddressSharing.value}
      - --permit-port-sharing=${n.L.permitPortSharing.value}
      - --profiling=${n.L.profiling.value}
      - --proxy-client-cert-file=${n.L.proxyClientCertFile.value}
      - --proxy-client-key-file=${n.L.proxyClientKeyFile.value}
      - --requestheader-allowed-names=${n.L.requestheaderAllowedNames.value}
      - --requestheader-client-ca-file=${n.L.requestheaderClientCaFile.value}
      - --requestheader-extra-headers-prefix=${n.L.requestheaderExtraHeadersPrefix.value}
      - --requestheader-group-headers=${n.L.requestheaderGroupHeaders.value}
      - --requestheader-username-headers=${n.L.requestheaderUsernameHeaders.value}
      - --request-timeout=${n.L.requestTimeout.value}
      - --runtime-config=${n.L.runtimeConfig.value}
      - --secure-port=${n.L.securePort.value}
      - --service-account-extend-token-expiration=${n.L.serviceAccountExtendTokenExpiration.value}
      - --service-account-issuer=${n.L.serviceAccountIssuer.value}
      - --service-account-key-file=${n.L.serviceAccountKeyFile.value}
      - --service-account-lookup=${n.L.serviceAccountLookup.value}
      - --service-account-max-token-expiration=${n.L.serviceAccountMaxTokenExpiration.value}
      - --service-account-signing-key-file=${n.L.serviceAccountSigningKeyFile.value}
      - --service-cluster-ip-range=${n.L.serviceClusterIpRange.value}
      - --service-node-port-range=${n.L.serviceNodePortRange.value}
      - --shutdown-delay-duration=${n.L.shutdownDelayDuration.value}
      - --shutdown-send-retry-after=${n.L.shutdownSendRetryAfter.value}
      - --shutdown-watch-termination-grace-period=${n.L.shutdownWatchTerminationGracePeriod.value}
      - --storage-backend=${n.L.storageBackend.value}
      - --storage-media-type=${n.L.storageMediaType.value}
      - --tls-cert-file=${n.L.tlsCertFile.value}
      - --tls-private-key-file=${n.L.tlsPrivateKeyFile.value}
      - --v=${n.L.v.value}
      - --version=${n.L.version.value}
      - --watch-cache=${n.L.watchCache.value}

      # Не указывать если значение "" или undefined
      # - --cloud-config=${n.L.cloudConfig.value}
      # - --strict-transport-security-directives=${n.L.strictTransportSecurityDirectives.value}
      # - --disable-admission-plugins=${n.L.disableAdmissionPlugins.value}
      # - --disabled-metrics=${n.L.disabledMetrics.value}
      # - --egress-selector-config-file=${n.L.egressSelectorConfigFile.value}
      # - --encryption-provider-config=${n.L.encryptionProviderConfig.value}
      # - --etcd-servers-overrides=${n.L.etcdServersOverrides.value}
      # - --external-hostname=${n.L.externalHostname.value}
      # - --kubelet-certificate-authority=${n.L.kubeletCertificateAuthority.value}
      # - --oidc-ca-file=${n.L.oidcCaFile.value}
      # - --oidc-client-id=${n.L.oidcClientId.value}
      # - --oidc-groups-claim=${n.L.oidcGroupsClaim.value}
      # - --oidc-groups-prefix=${n.L.oidcGroupsPrefix.value}
      # - --oidc-issuer-url=${n.L.oidcIssuerUrl.value}
      # - --oidc-required-claim=${n.L.oidcRequiredClaim.value}
      # - --oidc-signing-algs=${n.L.oidcSigningAlgs.value}
      # - --oidc-username-claim=${n.L.oidcUsernameClaim.value}
      # - --oidc-username-prefix=${n.L.oidcUsernamePrefix.value}
      # - --peer-advertise-ip=${n.L.peerAdvertiseIp.value}
      # - --peer-advertise-port=${n.L.peerAdvertisePort.value}
      # - --peer-ca-file=${n.L.peerCaFile.value}
      # - --service-account-jwks-uri=${n.L.serviceAccountJwksUri.value}
      # - --show-hidden-metrics-for-version=${n.L.showHiddenMetricsForVersion.value}
      # - --tls-cipher-suites=${n.L.tlsCipherSuites.value}
      # - --tls-min-version=${n.L.tlsMinVersion.value}
      # - --tls-sni-cert-key=${n.L.tlsSniCertKey.value}
      # - --token-auth-file=${n.L.tokenAuthFile.value}
      # - --tracing-config-file=${n.L.tracingConfigFile.value}
      # - --vmodule=${n.L.vmodule.value}
      # - --watch-cache-sizes=${n.L.watchCacheSizes.value}
      # - --authorization-webhook-config-file=${n.L.authorizationWebhookConfigFile.value}
      # - --cors-allowed-origins=${n.L.corsAllowedOrigins.value}
      # - --debug-socket-path=${n.L.debugSocketPath.value}
      # - --authorization-policy-file=${n.L.authorizationPolicyFile.value}
      # - --authorization-config=${n.L.authorizationConfig.value}
      # - --authentication-token-webhook-config-file=${n.L.authenticationTokenWebhookConfigFile.value}
      # - --authentication-config=${n.L.authenticationConfig.value}
      # - --audit-webhook-config-file=${n.L.auditWebhookConfigFile.value}
      # - --audit-policy-file=${n.L.auditPolicyFile.value}
      # - --audit-log-path=${n.L.auditLogPath.value}
      # - --allow-metric-labels=${n.L.allowMetricLabels.value}
      # - --allow-metric-labels-manifest=${n.L.allowMetricLabelsManifest.value}
      # - --admission-control=${n.L.admissionControl.value}
      # - --admission-control-config-file=${n.L.admissionControlConfigFile.value}
      # - --advertise-address=${n.L.advertiseAddress.value}
      image: ${o.M.baseDockerRegistry.value}/kube-apiserver:${i.M.kubernetes.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          host: $\{MACHINE_LOCAL_ADDRESS}
          path: /livez
          port: ${s.h.kubeAPIServer.portNumber}
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
          port: ${s.h.kubeAPIServer.portNumber}
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
          port: ${s.h.kubeAPIServer.portNumber}
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
`})]})}function $(e={}){const{wrapper:t}={...(0,u.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(p,{...e})}):p()}}}]);