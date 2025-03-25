"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5305,9171],{6353:(e,a,t)=>{t.d(a,{$:()=>l});var r=t(7478);const l={etcdCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"}}},7478:(e,a,t)=>{t.d(a,{M:()=>r});const r={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"my-first-cluster"},kubernetesClusterDomain:{value:"cluster.local"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kubeadmBaseConfigPath:{value:"/var/run/kubeadm"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_NAME}.${BASE_DOMAIN}"},kubernetesClusterExternalDomain:{value:"${CLUSTER_NAME}.${BASE_DOMAIN}"}}},10119:(e,a,t)=>{t.d(a,{D:()=>u});var r=t(6353),l=t(31798);const u={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdPeer.portNumber}`},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:`${r.$.etcdPeer.crtPath}`},peerKeyFile:{value:`${r.$.etcdPeer.keyPath}`},peerTrustedCAFile:{value:`${r.$.etcdCA.crtPath}`},peerClientCertAuth:{value:"true"},certFile:{value:`${r.$.etcdServer.crtPath}`},keyFile:{value:`${r.$.etcdServer.keyPath}`},trustedCAFile:{value:`${r.$.etcdCA.crtPath}`},listenClientUrls:{value:`https://127.0.0.1:${l.h.etcdServer.portNumber},https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdServer.portNumber}`},listenPeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdPeer.portNumber}`},listenMetricsUrls:{value:`http://127.0.0.1:${l.h.etcdMetricServer.portNumber}`},dataDir:{value:"/var/lib/etcd"},quotaBackendBytes:{value:"10737418240"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdPeer.portNumber}`},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"},snapshotCount:{value:"10000"},experimentalInitialCorruptCheck:{value:"true"},experimentalWatchProgressNotifyInterval:{value:"5s"}}},12627:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>n,default:()=>v,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"tech-docs/kubernetes/additionalSetup/upload-configs-all-init","title":"5.2.4.1.3.1. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438","description":"","source":"@site/docs/tech-docs/kubernetes/additionalSetup/uploadConfigsInit.mdx","sourceDirName":"tech-docs/kubernetes/additionalSetup","slug":"/tech-docs/kubernetes/additionalSetup/upload-configs-all-init","permalink":"/in-cloud/tech-docs/kubernetes/additionalSetup/upload-configs-all-init","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"upload-configs-all-init"},"sidebar":"techDocs","previous":{"title":"5.2.4.1.2. RBAC","permalink":"/in-cloud/tech-docs/kubernetes/additionalSetup/rbac"},"next":{"title":"5.2.4.1.3.2. Join","permalink":"/in-cloud/tech-docs/kubernetes/additionalSetup/upload-configs-all-join"}}');var l=t(74848),u=t(28453),o=t(94761);const i={id:"upload-configs-all-init"},n="5.2.4.1.3.1. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",s={},c=[...o.toc];function d(e){const a={h1:"h1",header:"header",...(0,u.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.header,{children:(0,l.jsx)(a.h1,{id:"524131-\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",children:"5.2.4.1.3.1. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"})}),"\n",(0,l.jsx)(o.default,{})]})}function v(e={}){const{wrapper:a}={...(0,u.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},25292:(e,a,t)=>{t.d(a,{L:()=>o});var r=t(6353),l=t(31798),u=t(7478);const o={etcdCafile:{value:`${r.$.etcdCA.crtPath}`},etcdCertfile:{value:`${r.$.kubernetesEtcdClient.crtPath}`},etcdKeyfile:{value:`${r.$.kubernetesEtcdClient.keyPath}`},certDir:{value:"/var/run/kubernetes"},kubeletClientCertificate:{value:`${r.$.kubernetesKubeletClient.crtPath}`},kubeletClientKey:{value:`${r.$.kubernetesKubeletClient.keyPath}`},clientCAFile:{value:`${r.$.kubernetesCA.crtPath}`},proxyClientCertFile:{value:`${r.$.kubernetesFrontProxyClient.crtPath}`},proxyClientKeyFile:{value:`${r.$.kubernetesFrontProxyClient.keyPath}`},tlsCertFile:{value:`${r.$.kubernetesServer.crtPath}`},tlsPrivateKeyFile:{value:`${r.$.kubernetesServer.keyPath}`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountKeyFile:{value:`${r.$.kubernetesSA.crtPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},serviceAccountSigningKeyFile:{value:`${r.$.kubernetesSA.keyPath}`},aggregatorRejectForwardingRedirect:{value:"true"},allowPrivileged:{value:"true"},anonymousAuth:{value:"true"},auditLogBatchThrottleEnable:{value:"false"},auditLogCompress:{value:"false"},auditLogTruncateEnabled:{value:"false"},auditWebhookBatchThrottleEnable:{value:"true"},auditWebhookTruncateEnabled:{value:"false"},contentionProfiling:{value:"false"},enableAggregatorRouting:{value:"true"},enableBootstrapTokenAuth:{value:"true"},enableGarbageCollector:{value:"true"},enableLogsHandler:{value:"true"},enablePriorityAndFairness:{value:"true"},encryptionProviderConfigAutomaticReload:{value:"false"},help:{value:"false"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},version:{value:"false"},watchCache:{value:"true"},logTextSplitStream:{value:"false"},shutdownSendRetryAfter:{value:"false"},logJsonSplitStream:{value:"false"},serviceAccountExtendTokenExpiration:{value:"true"},serviceAccountLookup:{value:"true"},apiserverCount:{value:"1"},auditLogBatchBufferSize:{value:"10000"},auditLogBatchMaxSize:{value:"1"},auditLogBatchThrottleBurst:{value:"0"},auditLogBatchThrottleQps:{value:"0"},auditLogMaxage:{value:"30"},auditLogMaxbackup:{value:"10"},auditLogMaxsize:{value:"1000"},auditLogTruncateMaxBatchSize:{value:"10485760"},auditLogTruncateMaxEventSize:{value:"102400"},auditWebhookBatchBufferSize:{value:"10000"},auditWebhookBatchMaxSize:{value:"400"},auditWebhookBatchThrottleBurst:{value:"15"},auditWebhookBatchThrottleQps:{value:"10"},auditWebhookTruncateMaxBatchSize:{value:"10485760"},auditWebhookTruncateMaxEventSize:{value:"102400"},defaultNotReadyTolerationSeconds:{value:"300"},defaultUnreachableTolerationSeconds:{value:"300"},defaultWatchCacheSize:{value:"100"},deleteCollectionWorkers:{value:"1"},kubernetesServiceNodePort:{value:"0"},leaseReuseDurationSeconds:{value:"60"},maxMutatingRequestsInflight:{value:"200"},maxRequestsInflight:{value:"400"},minRequestTimeout:{value:"1800"},goawayChance:{value:"0"},http2MaxStreamsPerConnection:{value:"0"},v:{value:"2"},logJsonInfoBufferSize:{value:"0"},logTextInfoBufferSize:{value:"0"},maxConnectionBytesPerSec:{value:"0"},kubeletPort:{value:`${l.h.kubeletServer.portNumber}`},securePort:{value:`${l.h.kubeAPIServer.portNumber}`},kubeletReadOnlyPort:{value:`${l.h.kubeletReadOnlyPort.portNumber}`},serviceNodePortRange:{value:"30000-32767"},etcdServers:{value:`https://127.0.0.1:${l.h.etcdServer.portNumber}`},serviceAccountIssuer:{value:`https://kubernetes.default.svc.${u.M.kubernetesClusterDomain.value}`},serviceClusterIpRange:{value:`${u.M.kubernetesServiceCIDR.value}`},auditWebhookInitialBackoff:{value:"10s"},auditWebhookBatchMaxWait:{value:"30s"},serviceAccountMaxTokenExpiration:{value:"0s"},shutdownWatchTerminationGracePeriod:{value:"0s"},shutdownDelayDuration:{value:"0s"},requestTimeout:{value:"1m0s"},eventTtl:{value:"1h0m0s"},livezGracePeriod:{value:"0s"},logFlushFrequency:{value:"5s"},kubeletTimeout:{value:"5s"},etcdCompactionInterval:{value:"5m0s"},etcdCountMetricPollPeriod:{value:"1m0s"},etcdDbMetricPollInterval:{value:"30s"},etcdHealthcheckTimeout:{value:"2s"},etcdReadycheckTimeout:{value:"2s"},authenticationTokenWebhookCacheTtl:{value:"2m0s"},authorizationWebhookCacheAuthorizedTtl:{value:"5m0s"},authorizationWebhookCacheUnauthorizedTtl:{value:"30s"},auditWebhookBatchInitialBackoff:{value:"10s"},auditLogBatchMaxWait:{value:"0s"},bindAddress:{value:"0.0.0.0"},cloudProviderGceL7lbSrcCidrs:{value:"130.211.0.0/22,35.191.0.0/16"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},apiAudiences:{value:"konnectivity-server"},loggingFormat:{value:"text"},auditLogFormat:{value:"json"},auditLogMode:{value:"batch"},auditWebhookMode:{value:"batch"},auditLogVersion:{value:"audit.k8s.io/v1"},auditWebhookVersion:{value:"audit.k8s.io/v1"},authenticationTokenWebhookVersion:{value:"v1beta1"},authorizationMode:{value:"Node,RBAC"},authorizationWebhookVersion:{value:"v1beta1"},cloudProvider:{value:"external"},enableAdmissionPlugins:{value:"NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,AlwaysPullImages,NodeRestriction,PodSecurity"},endpointReconcilerType:{value:"lease"},storageMediaType:{value:"application/vnd.kubernetes.protobuf"},etcdPrefix:{value:"/registry"},featureGates:{value:"RotateKubeletServerCertificate=true"},kubeletPreferredAddressTypes:{value:"InternalIP,ExternalIP,Hostname"},oidcSigningAlgs:{value:"RS256"},oidcUsernameClaim:{value:"sub"},requestheaderAllowedNames:{value:"front-proxy-client"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"},runtimeConfig:{value:"api/all=true"},storageBackend:{value:"etcd3"},advertiseAddress:{value:""},admissionControl:{value:""},admissionControlConfigFile:{value:""},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},auditLogPath:{value:""},auditPolicyFile:{value:""},auditWebhookConfigFile:{value:""},authenticationConfig:{value:""},authenticationTokenWebhookConfigFile:{value:""},authorizationConfig:{value:""},authorizationPolicyFile:{value:""},authorizationWebhookConfigFile:{value:""},cloudConfig:{value:""},corsAllowedOrigins:{value:""},debugSocketPath:{value:""},disableAdmissionPlugins:{value:""},disabledMetrics:{value:""},egressSelectorConfigFile:{value:""},encryptionProviderConfig:{value:""},etcdServersOverrides:{value:""},externalHostname:{value:""},kubeletCertificateAuthority:{value:""},oidcCaFile:{value:""},oidcClientId:{value:""},oidcGroupsClaim:{value:""},oidcGroupsPrefix:{value:""},oidcIssuerUrl:{value:""},oidcRequiredClaim:{value:""},oidcUsernamePrefix:{value:""},peerAdvertiseIp:{value:""},peerAdvertisePort:{value:""},peerCaFile:{value:""},serviceAccountJwksUri:{value:""},showHiddenMetricsForVersion:{value:""},strictTransportSecurityDirectives:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsSniCertKey:{value:""},tokenAuthFile:{value:""},tracingConfigFile:{value:""},vmodule:{value:""},watchCacheSizes:{value:""}}},28702:(e,a,t)=>{t.d(a,{D:()=>i});var r=t(60513),l=t(6353),u=t(7478),o=t(31798);const i={data:{value:r.A`
      apiVersion: kubelet.config.k8s.io/v1beta1
      authentication:
        anonymous:
            enabled: false
        webhook:
            cacheTTL: 0s
            enabled: true
        x509:
          clientCAFile: "${l.$.kubernetesCA.crtPath}"
      authorization:
        mode: Webhook
        webhook:
          cacheAuthorizedTTL: 0s
          cacheUnauthorizedTTL: 0s
      cgroupDriver: systemd
      containerLogMaxSize: "50Mi"
      containerRuntimeEndpoint: "${u.M.criEndpoint.value}"
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
      staticPodPath: ${u.M.kuberneteBaseFolderPath.value}/manifests
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
    `}}},31798:(e,a,t)=>{t.d(a,{h:()=>r});const r={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},62774:(e,a,t)=>{t.d(a,{A:()=>y});var r=t(96540),l=t(34164),u=t(65627),o=t(56347),i=t(50372),n=t(30604),s=t(11861),c=t(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function v(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:l}}=e;return{value:a,label:t,attributes:r,default:l}}))}(t);return function(e){const a=(0,s.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function h(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function p(e){let{queryString:a=!1,groupId:t}=e;const l=(0,o.W6)(),u=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,n.aZ)(u),(0,r.useCallback)((e=>{if(!u)return;const a=new URLSearchParams(l.location.search);a.set(u,e),l.replace({...l.location,search:a.toString()})}),[u,l])]}function b(e){const{defaultValue:a,queryString:t=!1,groupId:l}=e,u=v(e),[o,n]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:u}))),[s,d]=p({queryString:t,groupId:l}),[b,k]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[l,u]=(0,c.Dv)(t);return[l,(0,r.useCallback)((e=>{t&&u.set(e)}),[t,u])]}({groupId:l}),m=(()=>{const e=s??b;return h({value:e,tabValues:u})?e:null})();(0,i.A)((()=>{m&&n(m)}),[m]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:u}))throw new Error(`Can't select invalid tab value=${e}`);n(e),d(e),k(e)}),[d,k,u]),tabValues:u}}var k=t(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function $(e){let{className:a,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;const n=[],{blockElementScrollPositionUntilNextRender:s}=(0,u.a_)(),c=e=>{const a=e.currentTarget,t=n.indexOf(a),l=i[t].value;l!==r&&(s(a),o(l))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=n.indexOf(e.currentTarget)+1;a=n[t]??n[0];break}case"ArrowLeft":{const t=n.indexOf(e.currentTarget)-1;a=n[t]??n[n.length-1];break}}a?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},a),children:i.map((e=>{let{value:a,label:t,attributes:u}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:e=>{n.push(e)},onKeyDown:d,onClick:c,...u,className:(0,l.A)("tabs__item",m.tabItem,u?.className,{"tabs__item--active":r===a}),children:t??a},a)}))})}function f(e){let{lazy:a,children:t,selectedValue:u}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===u));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==u})))})}function L(e){const a=b(e);return(0,g.jsxs)("div",{className:(0,l.A)("tabs-container",m.tabList),children:[(0,g.jsx)($,{...a,...e}),(0,g.jsx)(f,{...a,...e})]})}function y(e){const a=(0,k.A)();return(0,g.jsx)(L,{...e,children:d(e.children)},String(a))}},63770:(e,a,t)=>{t.d(a,{M:()=>r});const r={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},66483:(e,a,t)=>{t.d(a,{L:()=>u});var r=t(6353),l=t(7478);const u={authenticationKubeconfig:{value:`${l.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},authorizationKubeconfig:{value:`${l.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},kubeconfig:{value:`${l.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},clusterSigningCertFile:{value:`${r.$.kubernetesCA.crtPath}`},clusterSigningKeyFile:{value:`${r.$.kubernetesCA.keyPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},rootCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountPrivateKeyFile:{value:`${l.M.kuberneteBaseFolderPath.value}/pki/sa.key`},clusterName:{value:"${CLUSTER_NAME}"},allocateNodeCidrs:{value:"false"},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},allowUntaggedCloud:{value:"false"},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"false"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},certDir:{value:""},cidrAllocatorType:{value:"RangeAllocator"},cloudConfig:{value:""},cloudProvider:{value:"external"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},clusterCidr:{value:""},clusterSigningDuration:{value:"720h0m0s"},clusterSigningKubeApiserverClientCertFile:{value:""},clusterSigningKubeApiserverClientKeyFile:{value:""},clusterSigningKubeletClientCertFile:{value:""},clusterSigningKubeletClientKeyFile:{value:""},clusterSigningKubeletServingCertFile:{value:""},clusterSigningKubeletServingKeyFile:{value:""},clusterSigningLegacyUnknownCertFile:{value:""},clusterSigningLegacyUnknownKeyFile:{value:""},concurrentCronJobSyncs:{value:"5"},concurrentDeploymentSyncs:{value:"5"},concurrentEndpointSyncs:{value:"5"},concurrentEphemeralvolumeSyncs:{value:"5"},concurrentGcSyncs:{value:"20"},concurrentHorizontalPodAutoscalerSyncs:{value:"5"},concurrentJobSyncs:{value:"5"},concurrentNamespaceSyncs:{value:"10"},concurrentRcSyncs:{value:"5"},concurrentReplicasetSyncs:{value:"20"},concurrentResourceQuotaSyncs:{value:"5"},concurrentServiceEndpointSyncs:{value:"5"},concurrentServiceSyncs:{value:"1"},concurrentServiceaccountTokenSyncs:{value:"5"},concurrentStatefulsetSyncs:{value:"5"},concurrentTtlAfterFinishedSyncs:{value:"5"},concurrentValidatingAdmissionPolicyStatusSyncs:{value:"5"},configureCloudRoutes:{value:"true"},contentionProfiling:{value:"false"},controllerStartInterval:{value:"0s"},controllers:{value:"*,bootstrapsigner,tokencleaner"},disableAttachDetachReconcileSync:{value:"false"},disableForceDetachOnTimeout:{value:"false"},disabledMetrics:{value:""},enableDynamicProvisioning:{value:"true"},enableGarbageCollector:{value:"true"},enableHostpathProvisioner:{value:"false"},enableLeaderMigration:{value:"false"},endpointUpdatesBatchPeriod:{value:"0s"},endpointsliceUpdatesBatchPeriod:{value:"0s"},externalCloudVolumePlugin:{value:""},featureGates:{value:"RotateKubeletServerCertificate=true"},flexVolumePluginDir:{value:"/usr/libexec/kubernetes/kubelet-plugins/volume/exec/"},help:{value:"false"},horizontalPodAutoscalerCpuInitializationPeriod:{value:"5m0s"},horizontalPodAutoscalerDownscaleDelay:{value:"5m0s"},horizontalPodAutoscalerDownscaleStabilization:{value:"5m0s"},horizontalPodAutoscalerInitialReadinessDelay:{value:"30s"},horizontalPodAutoscalerSyncPeriod:{value:"30s"},horizontalPodAutoscalerTolerance:{value:"0.1"},horizontalPodAutoscalerUpscaleDelay:{value:"3m0s"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"120"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"100"},largeClusterSizeThreshold:{value:"50"},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-controller-manager"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},leaderMigrationConfig:{value:""},legacyServiceAccountTokenCleanUpPeriod:{value:"8760h0m0s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},attachDetachReconcileSyncPeriod:{value:"1m0s"},master:{value:""},maxEndpointsPerSlice:{value:"100"},minResyncPeriod:{value:"12h0m0s"},mirroringConcurrentServiceEndpointSyncs:{value:"5"},mirroringEndpointsliceUpdatesBatchPeriod:{value:"0s"},mirroringMaxEndpointsPerSubset:{value:"1000"},namespaceSyncPeriod:{value:"2m0s"},nodeCidrMaskSize:{value:"0"},nodeCidrMaskSizeIpv4:{value:"0"},nodeCidrMaskSizeIpv6:{value:"0"},nodeEvictionRate:{value:"0.1"},nodeMonitorGracePeriod:{value:"40s"},nodeMonitorPeriod:{value:"5s"},nodeStartupGracePeriod:{value:"10s"},nodeSyncPeriod:{value:"0s"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},pvRecyclerIncrementTimeoutNfs:{value:"30"},pvRecyclerMinimumTimeoutHostpath:{value:"60"},pvRecyclerMinimumTimeoutNfs:{value:"300"},pvRecyclerPodTemplateFilepathHostpath:{value:""},pvRecyclerPodTemplateFilepathNfs:{value:""},pvRecyclerTimeoutIncrementHostpath:{value:"30"},pvclaimbinderSyncPeriod:{value:"15s"},requestheaderAllowedNames:{value:""},requestheaderExtraHeadersPrefix:{value:"x-remote-extra-"},requestheaderGroupHeaders:{value:"x-remote-group"},requestheaderUsernameHeaders:{value:"x-remote-user"},resourceQuotaSyncPeriod:{value:"5m0s"},routeReconciliationPeriod:{value:"10s"},secondaryNodeEvictionRate:{value:"0.01"},securePort:{value:"10257"},serviceClusterIpRange:{value:""},showHiddenMetricsForVersion:{value:""},terminatedPodGcThreshold:{value:"0"},tlsCertFile:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:""},tlsSniCertKey:{value:""},unhealthyZoneThreshold:{value:"0.55"},useServiceAccountCredentials:{value:"true"},v:{value:"2"},version:{value:"false"},vmodule:{value:""},volumeHostAllowLocalLoopback:{value:"true"},volumeHostCidrDenylist:{value:""}}},76519:(e,a,t)=>{t.d(a,{Q:()=>n});var r=t(60513),l=t(25292),u=t(63770),o=t(86613),i=t(7478);const n={data:{value:r.A`
      clusterName: "$\{CLUSTER_NAME}"
      controlPlaneEndpoint: $\{INTERNAL_API}:${l.L.securePort.value}
      imageRepository: "${i.M.baseDockerRegistry.value}"
      networking:
        serviceSubnet: ${i.M.kubernetesServiceCIDR.value}
        dnsDomain: ${i.M.kubernetesClusterDomain.value}
      kubernetesVersion: ${u.M.kubernetes.value}
      dns: {}
      etcd:
        local:
          imageRepository: "${i.M.baseDockerRegistry.value}"
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
    `}}},85421:(e,a,t)=>{t.d(a,{w:()=>u});var r=t(31798),l=t(7478);const u={authenticationKubeconfig:{value:`${l.M.kuberneteBaseFolderPath.value}/scheduler.conf`},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"true"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationKubeconfig:{value:`${l.M.kuberneteBaseFolderPath.value}/scheduler.conf`},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},contentionProfiling:{value:"true"},help:{value:"false"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"100"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"50"},kubeconfig:{value:`${l.M.kuberneteBaseFolderPath.value}/scheduler.conf`},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-scheduler"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},podMaxInUnschedulablePodsDuration:{value:"5m0s"},profiling:{value:"true"},requestheaderExtraHeadersPrefix:{value:"[x-remote-extra-]"},requestheaderGroupHeaders:{value:"[x-remote-group]"},requestheaderUsernameHeaders:{value:"[x-remote-user]"},securePort:{value:`${r.h.kubeScheduler.portNumber}`},v:{value:"2"},version:{value:"false"},allowMetricLabels:{value:"[]"},disabledMetrics:{value:"[]"},requestheaderAllowedNames:{value:"[]"},tlsCipherSuites:{value:"[]"},tlsSniCertKey:{value:"[]"},allowMetricLabelsManifest:{value:""},certDir:{value:""},clientCaFile:{value:""},config:{value:""},featureGates:{value:""},vmodule:{value:""},writeConfigTo:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:""},showHiddenMetricsForVersion:{value:""},tlsCertFile:{value:""},requestheaderClientCaFile:{value:""},master:{value:""}}},86613:(e,a,t)=>{t.d(a,{IL:()=>s,Nu:()=>n,Uj:()=>c,hZ:()=>d});var r=t(60513),l=t(10119),u=t(25292),o=t(66483),i=t(85421);const n={data:{value:r.A`
      advertise-client-urls: "${l.D.advertiseClientUrls.value}"
      auto-compaction-retention: "${l.D.autoCompactionRetention.value}"
      cert-file: "${l.D.certFile.value}"
      client-cert-auth: "${l.D.clientCertAuth.value}"
      data-dir: "${l.D.dataDir.value}"
      election-timeout: "${l.D.electionTimeout.value}"
      heartbeat-interval: "${l.D.heartbeatInterval.value}"
      initial-advertise-peer-urls: "${l.D.initialAdvertisePeerUrls.value}"
      initial-cluster: "${l.D.initialCluster.value}"
      key-file: "${l.D.keyFile.value}"
      listen-client-urls: "${l.D.listenClientUrls.value}"
      listen-metrics-urls: "${l.D.listenMetricsUrls.value}"
      listen-peer-urls: "${l.D.listenPeerUrls.value}"
      logger: "${l.D.logger.value}"
      max-snapshots: "${l.D.maxSnapshots.value}"
      max-wals: "${l.D.maxWals.value}"
      metrics: "${l.D.metrics.value}"
      name: "${l.D.name.value}"
      peer-cert-file: "${l.D.peerCertFile.value}"
      peer-client-cert-auth: "${l.D.peerClientCertAuth.value}"
      peer-key-file: "${l.D.peerKeyFile.value}"
      peer-trusted-ca-file: "${l.D.peerTrustedCAFile.value}"
      snapshot-count: "${l.D.snapshotCount.value}"
      quota-backend-bytes: "10737418240" # TODO
      experimental-initial-corrupt-check: "true"
      experimental-watch-progress-notify-interval: "5s"
      trusted-ca-file: "${l.D.trustedCAFile.value}"
    `}},s={data:{value:r.A`
      aggregator-reject-forwarding-redirect: "${u.L.aggregatorRejectForwardingRedirect.value}"
      allow-privileged: "${u.L.allowPrivileged.value}"
      anonymous-auth: "${u.L.anonymousAuth.value}"
      api-audiences: "${u.L.apiAudiences.value}"
      apiserver-count: "${u.L.apiserverCount.value}"
      audit-log-batch-buffer-size: "${u.L.auditLogBatchBufferSize.value}"
      audit-log-batch-max-size: "${u.L.auditLogBatchMaxSize.value}"
      audit-log-batch-max-wait: "${u.L.auditLogBatchMaxWait.value}"
      audit-log-batch-throttle-burst: "${u.L.auditLogBatchThrottleBurst.value}"
      audit-log-batch-throttle-enable: "${u.L.auditLogBatchThrottleEnable.value}"
      audit-log-batch-throttle-qps: "${u.L.auditLogBatchThrottleQps.value}"
      audit-log-compress: "${u.L.auditLogCompress.value}"
      audit-log-format: "${u.L.auditLogFormat.value}"
      audit-log-maxage: "${u.L.auditLogMaxage.value}"
      audit-log-maxbackup: "${u.L.auditLogMaxbackup.value}"
      audit-log-maxsize: "${u.L.auditLogMaxsize.value}"
      audit-log-mode: "${u.L.auditLogMode.value}"
      audit-log-truncate-enabled: "${u.L.auditLogTruncateEnabled.value}"
      audit-log-truncate-max-batch-size: "${u.L.auditLogTruncateMaxBatchSize.value}"
      audit-log-truncate-max-event-size: "${u.L.auditLogTruncateMaxEventSize.value}"
      audit-log-version: "${u.L.auditLogVersion.value}"
      audit-webhook-batch-buffer-size: "${u.L.auditWebhookBatchBufferSize.value}"
      audit-webhook-batch-initial-backoff: "${u.L.auditWebhookBatchInitialBackoff.value}"
      audit-webhook-batch-max-size: "${u.L.auditWebhookBatchMaxSize.value}"
      audit-webhook-batch-max-wait: "${u.L.auditWebhookBatchMaxWait.value}"
      audit-webhook-batch-throttle-burst: "${u.L.auditWebhookBatchThrottleBurst.value}"
      audit-webhook-batch-throttle-enable: "${u.L.auditWebhookBatchThrottleEnable.value}"
      audit-webhook-batch-throttle-qps: "${u.L.auditWebhookBatchThrottleQps.value}"
      audit-webhook-initial-backoff: "${u.L.auditWebhookInitialBackoff.value}"
      audit-webhook-mode: "${u.L.auditWebhookMode.value}"
      audit-webhook-truncate-enabled: "${u.L.auditWebhookTruncateEnabled.value}"
      audit-webhook-truncate-max-batch-size: "${u.L.auditWebhookTruncateMaxBatchSize.value}"
      audit-webhook-truncate-max-event-size: "${u.L.auditWebhookTruncateMaxEventSize.value}"
      audit-webhook-version: "${u.L.auditWebhookVersion.value}"
      authentication-token-webhook-cache-ttl: "${u.L.authenticationTokenWebhookCacheTtl.value}"
      authentication-token-webhook-version: "${u.L.authenticationTokenWebhookVersion.value}"
      authorization-mode: "${u.L.authorizationMode.value}"
      authorization-webhook-cache-authorized-ttl: "${u.L.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${u.L.authorizationWebhookCacheUnauthorizedTtl.value}"
      authorization-webhook-version: "${u.L.authorizationWebhookVersion.value}"
      bind-address: "${u.L.bindAddress.value}"
      cert-dir: "${u.L.certDir.value}"
      client-ca-file: "${u.L.clientCaFile.value}"
      cloud-provider: "${u.L.cloudProvider.value}"
      cloud-provider-gce-l7lb-src-cidrs: "${u.L.cloudProviderGceL7lbSrcCidrs.value}"
      cloud-provider-gce-lb-src-cidrs: "${u.L.cloudProviderGceLbSrcCidrs.value}"
      contention-profiling: "${u.L.contentionProfiling.value}"
      default-not-ready-toleration-seconds: "${u.L.defaultNotReadyTolerationSeconds.value}"
      default-unreachable-toleration-seconds: "${u.L.defaultUnreachableTolerationSeconds.value}"
      default-watch-cache-size: "${u.L.defaultWatchCacheSize.value}"
      delete-collection-workers: "${u.L.deleteCollectionWorkers.value}"
      enable-admission-plugins: "${u.L.enableAdmissionPlugins.value}"
      enable-aggregator-routing: "${u.L.enableAggregatorRouting.value}"
      enable-bootstrap-token-auth: "${u.L.enableBootstrapTokenAuth.value}"
      enable-garbage-collector: "${u.L.enableGarbageCollector.value}"
      enable-logs-handler: "${u.L.enableLogsHandler.value}"
      enable-priority-and-fairness: "${u.L.enablePriorityAndFairness.value}"
      encryption-provider-config-automatic-reload: "${u.L.encryptionProviderConfigAutomaticReload.value}"
      endpoint-reconciler-type: "${u.L.endpointReconcilerType.value}"
      etcd-cafile: "${u.L.etcdCafile.value}"
      etcd-certfile: "${u.L.etcdCertfile.value}"
      etcd-compaction-interval: "${u.L.etcdCompactionInterval.value}"
      etcd-count-metric-poll-period: "${u.L.etcdCountMetricPollPeriod.value}"
      etcd-db-metric-poll-interval: "${u.L.etcdDbMetricPollInterval.value}"
      etcd-healthcheck-timeout: "${u.L.etcdHealthcheckTimeout.value}"
      etcd-keyfile: "${u.L.etcdKeyfile.value}"
      etcd-prefix: "${u.L.etcdPrefix.value}"
      etcd-readycheck-timeout: "${u.L.etcdReadycheckTimeout.value}"
      etcd-servers: "${u.L.etcdServers.value}"
      event-ttl: "${u.L.eventTtl.value}"
      feature-gates: "${u.L.featureGates.value}"
      goaway-chance: "${u.L.goawayChance.value}"
      help: "${u.L.help.value}"
      http2-max-streams-per-connection: "${u.L.http2MaxStreamsPerConnection.value}"
      kubelet-client-certificate: "${u.L.kubeletClientCertificate.value}"
      kubelet-client-key: "${u.L.kubeletClientKey.value}"
      kubelet-port: "${u.L.kubeletPort.value}"
      kubelet-preferred-address-types: "${u.L.kubeletPreferredAddressTypes.value}"
      kubelet-read-only-port: "${u.L.kubeletReadOnlyPort.value}"
      kubelet-timeout: "${u.L.kubeletTimeout.value}"
      kubernetes-service-node-port: "${u.L.kubernetesServiceNodePort.value}"
      lease-reuse-duration-seconds: "${u.L.leaseReuseDurationSeconds.value}"
      livez-grace-period: "${u.L.livezGracePeriod.value}"
      log-flush-frequency: "${u.L.logFlushFrequency.value}"
      logging-format: "${u.L.loggingFormat.value}"
      log-json-info-buffer-size: "${u.L.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${u.L.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${u.L.logTextInfoBufferSize.value}"
      log-text-split-stream: "${u.L.logTextSplitStream.value}"
      max-connection-bytes-per-sec: "${u.L.maxConnectionBytesPerSec.value}"
      max-mutating-requests-inflight: "${u.L.maxMutatingRequestsInflight.value}"
      max-requests-inflight: "${u.L.maxRequestsInflight.value}"
      min-request-timeout: "${u.L.minRequestTimeout.value}"
      permit-address-sharing: "${u.L.permitAddressSharing.value}"
      permit-port-sharing: "${u.L.permitPortSharing.value}"
      profiling: "${u.L.profiling.value}"
      proxy-client-cert-file: "${u.L.proxyClientCertFile.value}"
      proxy-client-key-file: "${u.L.proxyClientKeyFile.value}"
      requestheader-allowed-names: "${u.L.requestheaderAllowedNames.value}"
      requestheader-client-ca-file: "${u.L.requestheaderClientCaFile.value}"
      requestheader-extra-headers-prefix: "${u.L.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${u.L.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${u.L.requestheaderUsernameHeaders.value}"
      request-timeout: "${u.L.requestTimeout.value}"
      runtime-config: "${u.L.runtimeConfig.value}"
      secure-port: "${u.L.securePort.value}"
      service-account-extend-token-expiration: "${u.L.serviceAccountExtendTokenExpiration.value}"
      service-account-issuer: "${u.L.serviceAccountIssuer.value}"
      service-account-key-file: "${u.L.serviceAccountKeyFile.value}"
      service-account-lookup: "${u.L.serviceAccountLookup.value}"
      service-account-max-token-expiration: "${u.L.serviceAccountMaxTokenExpiration.value}"
      service-account-signing-key-file: "${u.L.serviceAccountSigningKeyFile.value}"
      service-cluster-ip-range: "${u.L.serviceClusterIpRange.value}"
      service-node-port-range: "${u.L.serviceNodePortRange.value}"
      shutdown-delay-duration: "${u.L.shutdownDelayDuration.value}"
      shutdown-send-retry-after: "${u.L.shutdownSendRetryAfter.value}"
      shutdown-watch-termination-grace-period: "${u.L.shutdownWatchTerminationGracePeriod.value}"
      storage-backend: "${u.L.storageBackend.value}"
      storage-media-type: "${u.L.storageMediaType.value}"
      tls-cert-file: "${u.L.tlsCertFile.value}"
      tls-private-key-file: "${u.L.tlsPrivateKeyFile.value}"
      v: "${u.L.v.value}"
      version: "${u.L.version.value}"
      watch-cache: "${u.L.watchCache.value}"

      # Не указывать если значение "" или undefined
      # cloud-config: "${u.L.cloudConfig.value}"
      # strict-transport-security-directives: "${u.L.strictTransportSecurityDirectives.value}"
      # disable-admission-plugins: "${u.L.disableAdmissionPlugins.value}"
      # disabled-metrics: "${u.L.disabledMetrics.value}"
      # egress-selector-config-file: "${u.L.egressSelectorConfigFile.value}"
      # encryption-provider-config: "${u.L.encryptionProviderConfig.value}"
      # etcd-servers-overrides: "${u.L.etcdServersOverrides.value}"
      # external-hostname: "${u.L.externalHostname.value}"
      # kubelet-certificate-authority: "${u.L.kubeletCertificateAuthority.value}"
      # oidc-ca-file: "${u.L.oidcCaFile.value}"
      # oidc-client-id: "${u.L.oidcClientId.value}"
      # oidc-groups-claim: "${u.L.oidcGroupsClaim.value}"
      # oidc-groups-prefix: "${u.L.oidcGroupsPrefix.value}"
      # oidc-issuer-url: "${u.L.oidcIssuerUrl.value}"
      # oidc-required-claim: "${u.L.oidcRequiredClaim.value}"
      # oidc-signing-algs: "${u.L.oidcSigningAlgs.value}"
      # oidc-username-claim: "${u.L.oidcUsernameClaim.value}"
      # oidc-username-prefix: "${u.L.oidcUsernamePrefix.value}"
      # peer-advertise-ip: "${u.L.peerAdvertiseIp.value}"
      # peer-advertise-port: "${u.L.peerAdvertisePort.value}"
      # peer-ca-file: "${u.L.peerCaFile.value}"
      # service-account-jwks-uri: "${u.L.serviceAccountJwksUri.value}"
      # show-hidden-metrics-for-version: "${u.L.showHiddenMetricsForVersion.value}"
      # tls-cipher-suites: "${u.L.tlsCipherSuites.value}"
      # tls-min-version: "${u.L.tlsMinVersion.value}"
      # tls-sni-cert-key: "${u.L.tlsSniCertKey.value}"
      # token-auth-file: "${u.L.tokenAuthFile.value}"
      # tracing-config-file: "${u.L.tracingConfigFile.value}"
      # vmodule: "${u.L.vmodule.value}"
      # watch-cache-sizes: "${u.L.watchCacheSizes.value}"
      # authorization-webhook-config-file: "${u.L.authorizationWebhookConfigFile.value}"
      # cors-allowed-origins: "${u.L.corsAllowedOrigins.value}"
      # debug-socket-path: "${u.L.debugSocketPath.value}"
      # authorization-policy-file: "${u.L.authorizationPolicyFile.value}"
      # authorization-config: "${u.L.authorizationConfig.value}"
      # authentication-token-webhook-config-file: "${u.L.authenticationTokenWebhookConfigFile.value}"
      # authentication-config: "${u.L.authenticationConfig.value}"
      # audit-webhook-config-file: "${u.L.auditWebhookConfigFile.value}"
      # audit-policy-file: "${u.L.auditPolicyFile.value}"
      # audit-log-path: "${u.L.auditLogPath.value}"
      # allow-metric-labels: "${u.L.allowMetricLabels.value}"
      # allow-metric-labels-manifest: "${u.L.allowMetricLabelsManifest.value}"
      # admission-control: "${u.L.admissionControl.value}"
      # admission-control-config-file: "${u.L.admissionControlConfigFile.value}"
      # advertise-address: "${u.L.advertiseAddress.value}"
    `}},c={data:{value:r.A`
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
      authentication-kubeconfig: "${i.w.authenticationKubeconfig.value}"
      authentication-skip-lookup: "${i.w.authenticationSkipLookup.value}"
      authentication-token-webhook-cache-ttl: "${i.w.authenticationTokenWebhookCacheTtl.value}"
      authentication-tolerate-lookup-failure: "${i.w.authenticationTolerateLookupFailure.value}"
      authorization-always-allow-paths: "${i.w.authorizationAlwaysAllowPaths.value}"
      authorization-kubeconfig: "${i.w.authorizationKubeconfig.value}"
      authorization-webhook-cache-authorized-ttl: "${i.w.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${i.w.authorizationWebhookCacheUnauthorizedTtl.value}"
      bind-address: "${i.w.bindAddress.value}"
      client-ca-file: "${i.w.clientCaFile.value}"
      contention-profiling: "${i.w.contentionProfiling.value}"
      help: "${i.w.help.value}"
      http2-max-streams-per-connection: "${i.w.http2MaxStreamsPerConnection.value}"
      kube-api-burst: "${i.w.kubeApiBurst.value}"
      kube-api-content-type: "${i.w.kubeApiContentType.value}"
      kube-api-qps: "${i.w.kubeApiQps.value}"
      kubeconfig: "${i.w.kubeconfig.value}"
      leader-elect: "${i.w.leaderElect.value}"
      leader-elect-lease-duration: "${i.w.leaderElectLeaseDuration.value}"
      leader-elect-renew-deadline: "${i.w.leaderElectRenewDeadline.value}"
      leader-elect-resource-lock: "${i.w.leaderElectResourceLock.value}"
      leader-elect-resource-name: "${i.w.leaderElectResourceName.value}"
      leader-elect-resource-namespace: "${i.w.leaderElectResourceNamespace.value}"
      leader-elect-retry-period: "${i.w.leaderElectRetryPeriod.value}"
      log-flush-frequency: "${i.w.logFlushFrequency.value}"
      log-json-info-buffer-size: "${i.w.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${i.w.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${i.w.logTextInfoBufferSize.value}"
      log-text-split-stream: "${i.w.logTextSplitStream.value}"
      logging-format: "${i.w.loggingFormat.value}"
      permit-address-sharing: "${i.w.permitAddressSharing.value}"
      permit-port-sharing: "${i.w.permitPortSharing.value}"
      pod-max-in-unschedulable-pods-duration: "${i.w.podMaxInUnschedulablePodsDuration.value}"
      profiling: "${i.w.profiling.value}"
      requestheader-extra-headers-prefix: "${i.w.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${i.w.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${i.w.requestheaderUsernameHeaders.value}"
      secure-port: "${i.w.securePort.value}"
      v: "${i.w.v.value}"
      version: "${i.w.version.value}"

      # allow-metric-labels: "${i.w.allowMetricLabels.value}"
      # allow-metric-labels-manifest: "${i.w.allowMetricLabelsManifest.value}"
      # cert-dir: "${i.w.certDir.value}"
      # config: "${i.w.config.value}"
      # disabled-metrics: "${i.w.disabledMetrics.value}"
      # feature-gates: "${i.w.featureGates.value}"
      # master: "${i.w.master.value}"
      # requestheader-allowed-names: "${i.w.requestheaderAllowedNames.value}"
      # requestheader-client-ca-file: "${i.w.requestheaderClientCaFile.value}"
      # show-hidden-metrics-for-version: "${i.w.showHiddenMetricsForVersion.value}"
      # tls-cert-file: "${i.w.tlsCertFile.value}"
      # tls-cipher-suites: "${i.w.tlsCipherSuites.value}"
      # tls-min-version: "${i.w.tlsMinVersion.value}"
      # tls-private-key-file: "${i.w.tlsPrivateKeyFile.value}"
      # tls-sni-cert-key: "${i.w.tlsSniCertKey.value}"
      # vmodule: "${i.w.vmodule.value}"
      # write-config-to: "${i.w.writeConfigTo.value}"
    `}}},87464:(e,a,t)=>{t.d(a,{A:()=>o});t(96540);var r=t(34164);const l={tabItem:"tabItem_Ymn6"};var u=t(74848);function o(e){let{children:a,hidden:t,className:o}=e;return(0,u.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:t,children:a})}},94761:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>k,contentTitle:()=>b,default:()=>$,frontMatter:()=>p,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/additionalSetup/uploadConfigsInitComponent","title":"uploadConfigsInitComponent","description":"\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 Kubeadm \u0438 Kubelet \u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0443\u0440 Kubernetes \u0432 \u0432\u0438\u0434\u0435 \u0440\u0435\u0441\u0443\u0440\u0430 ConfigMap. \u042d\u0442\u043e\u0442 \u043f\u043e\u0434\u0445\u043e\u0434 \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0443\u0437\u043b\u043e\u0432 Kubernetes, \u043e\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u044f \u043a\u0430\u043a \u0440\u0430\u0431\u043e\u0447\u0438\u0435 (worker), \u0442\u0430\u043a \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0435 (master) \u0443\u0437\u043b\u044b.","source":"@site/docs/tech-docs/kubernetes/additionalSetup/uploadConfigsInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/additionalSetup","slug":"/tech-docs/kubernetes/additionalSetup/uploadConfigsInitComponent","permalink":"/in-cloud/tech-docs/kubernetes/additionalSetup/uploadConfigsInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=t(74848),u=t(28453),o=t(87464),i=t(62774),n=t(1775),s=t(60513),c=t(76519),d=t(28702),v=t(7478),h=t(10119);const p={},b=void 0,k={},m=[];function g(e){const a={admonition:"admonition",code:"code",p:"p",...(0,u.R)(),...e.components},{Details:t}=a;return t||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.admonition,{type:"warning",children:(0,l.jsxs)(a.p,{children:["\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 ",(0,l.jsx)(a.code,{children:"Kubeadm"})," \u0438 ",(0,l.jsx)(a.code,{children:"Kubelet"})," \u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0443\u0440 Kubernetes \u0432 \u0432\u0438\u0434\u0435 \u0440\u0435\u0441\u0443\u0440\u0430 ",(0,l.jsx)(a.code,{children:"ConfigMap"}),". \u042d\u0442\u043e\u0442 \u043f\u043e\u0434\u0445\u043e\u0434 \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0443\u0437\u043b\u043e\u0432 Kubernetes, \u043e\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u044f \u043a\u0430\u043a \u0440\u0430\u0431\u043e\u0447\u0438\u0435 (",(0,l.jsx)(a.code,{children:"worker"}),"), \u0442\u0430\u043a \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0435 (",(0,l.jsx)(a.code,{children:"master"}),") \u0443\u0437\u043b\u044b."]})}),"\n",(0,l.jsxs)(i.A,{groupId:"install-type",children:[(0,l.jsxs)(o.A,{value:"HardWay",children:[(0,l.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,l.jsx)(n.A,{language:"bash",children:s.A`
      export CLUSTER_NAME='${v.M.clusterName.value}'
      export BASE_DOMAIN='${v.M.kubernetesBaseDomain.value}'
      export FULL_HOST_NAME=${v.M.virtualMachineFullName.value}
      export INTERNAL_API=api.${v.M.kubernetesClusterExternalDomain.value}
      export MACHINE_LOCAL_ADDRESS=${v.M.virtualMachineLocalAddress.value}
      export ETCD_INITIAL_CLUSTER="$\{FULL_HOST_NAME}=${h.D.initialAdvertisePeerUrls.value}"
    `}),(0,l.jsxs)(t,{className:"custom-gray-block",children:[(0,l.jsx)("summary",{children:"kubeadm-config"}),(0,l.jsx)(n.A,{children:s.A`
      kubectl \\
        --kubeconfig=${v.M.kuberneteBaseFolderPath.value}/super-admin.conf \\
        apply -f - <<EOF
      ---
      apiVersion: v1
      kind: ConfigMap
      metadata:
        name: kubeadm-config
        namespace: kube-system
      data:
        ClusterConfiguration: |
          ${c.Q.data.value}
      EOF
    `})]}),(0,l.jsxs)(t,{className:"custom-gray-block",children:[(0,l.jsx)("summary",{children:"kubelet-config"}),(0,l.jsx)(n.A,{children:s.A`
      kubectl \\
        --kubeconfig=${v.M.kuberneteBaseFolderPath.value}/super-admin.conf \\
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
    `})]})]}),(0,l.jsxs)(o.A,{value:"Kubeadm",children:[(0,l.jsx)("h4",{children:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"}),(0,l.jsx)(n.A,{language:"bash",children:s.A`
      kubeadm init phase upload-config all \\
        --config=${v.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${v.M.kuberneteBaseFolderPath.value}/super-admin.conf
    `}),(0,l.jsx)(a.admonition,{type:"note",children:(0,l.jsx)(n.A,{language:"bash",children:s.A`
  [upload-config] Storing the configuration used in ConfigMap "kubeadm-config" in the "kube-system" Namespace
  [kubelet] Creating a ConfigMap "kubelet-config" in namespace kube-system with the configuration for the kubelets in the cluster
`})})]})]})]})}function $(e={}){const{wrapper:a}={...(0,u.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(g,{...e})}):g(e)}}}]);