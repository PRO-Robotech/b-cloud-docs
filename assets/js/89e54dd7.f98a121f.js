"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1507],{6353:(e,t,a)=>{a.d(t,{$:()=>l});var r=a(7478);const l={etcdCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"}}},7478:(e,t,a)=>{a.d(t,{M:()=>r});const r={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"my-first-cluster"},kubernetesClusterDomain:{value:"cluster.local"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kubeadmBaseConfigPath:{value:"/var/run/kubeadm"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_NAME}.${BASE_DOMAIN}"},kubernetesClusterExternalDomain:{value:"${CLUSTER_NAME}.${BASE_DOMAIN}"}}},31798:(e,t,a)=>{a.d(t,{h:()=>r});const r={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},63770:(e,t,a)=>{a.d(t,{M:()=>r});const r={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},66483:(e,t,a)=>{a.d(t,{L:()=>n});var r=a(6353),l=a(7478);const n={authenticationKubeconfig:{value:`${l.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},authorizationKubeconfig:{value:`${l.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},kubeconfig:{value:`${l.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},clusterSigningCertFile:{value:`${r.$.kubernetesCA.crtPath}`},clusterSigningKeyFile:{value:`${r.$.kubernetesCA.keyPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},rootCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountPrivateKeyFile:{value:`${l.M.kuberneteBaseFolderPath.value}/pki/sa.key`},clusterName:{value:"${CLUSTER_NAME}"},allocateNodeCidrs:{value:"false"},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},allowUntaggedCloud:{value:"false"},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"false"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},certDir:{value:""},cidrAllocatorType:{value:"RangeAllocator"},cloudConfig:{value:""},cloudProvider:{value:"external"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},clusterCidr:{value:""},clusterSigningDuration:{value:"720h0m0s"},clusterSigningKubeApiserverClientCertFile:{value:""},clusterSigningKubeApiserverClientKeyFile:{value:""},clusterSigningKubeletClientCertFile:{value:""},clusterSigningKubeletClientKeyFile:{value:""},clusterSigningKubeletServingCertFile:{value:""},clusterSigningKubeletServingKeyFile:{value:""},clusterSigningLegacyUnknownCertFile:{value:""},clusterSigningLegacyUnknownKeyFile:{value:""},concurrentCronJobSyncs:{value:"5"},concurrentDeploymentSyncs:{value:"5"},concurrentEndpointSyncs:{value:"5"},concurrentEphemeralvolumeSyncs:{value:"5"},concurrentGcSyncs:{value:"20"},concurrentHorizontalPodAutoscalerSyncs:{value:"5"},concurrentJobSyncs:{value:"5"},concurrentNamespaceSyncs:{value:"10"},concurrentRcSyncs:{value:"5"},concurrentReplicasetSyncs:{value:"20"},concurrentResourceQuotaSyncs:{value:"5"},concurrentServiceEndpointSyncs:{value:"5"},concurrentServiceSyncs:{value:"1"},concurrentServiceaccountTokenSyncs:{value:"5"},concurrentStatefulsetSyncs:{value:"5"},concurrentTtlAfterFinishedSyncs:{value:"5"},concurrentValidatingAdmissionPolicyStatusSyncs:{value:"5"},configureCloudRoutes:{value:"true"},contentionProfiling:{value:"false"},controllerStartInterval:{value:"0s"},controllers:{value:"*,bootstrapsigner,tokencleaner"},disableAttachDetachReconcileSync:{value:"false"},disableForceDetachOnTimeout:{value:"false"},disabledMetrics:{value:""},enableDynamicProvisioning:{value:"true"},enableGarbageCollector:{value:"true"},enableHostpathProvisioner:{value:"false"},enableLeaderMigration:{value:"false"},endpointUpdatesBatchPeriod:{value:"0s"},endpointsliceUpdatesBatchPeriod:{value:"0s"},externalCloudVolumePlugin:{value:""},featureGates:{value:"RotateKubeletServerCertificate=true"},flexVolumePluginDir:{value:"/usr/libexec/kubernetes/kubelet-plugins/volume/exec/"},help:{value:"false"},horizontalPodAutoscalerCpuInitializationPeriod:{value:"5m0s"},horizontalPodAutoscalerDownscaleDelay:{value:"5m0s"},horizontalPodAutoscalerDownscaleStabilization:{value:"5m0s"},horizontalPodAutoscalerInitialReadinessDelay:{value:"30s"},horizontalPodAutoscalerSyncPeriod:{value:"30s"},horizontalPodAutoscalerTolerance:{value:"0.1"},horizontalPodAutoscalerUpscaleDelay:{value:"3m0s"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"120"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"100"},largeClusterSizeThreshold:{value:"50"},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-controller-manager"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},leaderMigrationConfig:{value:""},legacyServiceAccountTokenCleanUpPeriod:{value:"8760h0m0s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},attachDetachReconcileSyncPeriod:{value:"1m0s"},master:{value:""},maxEndpointsPerSlice:{value:"100"},minResyncPeriod:{value:"12h0m0s"},mirroringConcurrentServiceEndpointSyncs:{value:"5"},mirroringEndpointsliceUpdatesBatchPeriod:{value:"0s"},mirroringMaxEndpointsPerSubset:{value:"1000"},namespaceSyncPeriod:{value:"2m0s"},nodeCidrMaskSize:{value:"0"},nodeCidrMaskSizeIpv4:{value:"0"},nodeCidrMaskSizeIpv6:{value:"0"},nodeEvictionRate:{value:"0.1"},nodeMonitorGracePeriod:{value:"40s"},nodeMonitorPeriod:{value:"5s"},nodeStartupGracePeriod:{value:"10s"},nodeSyncPeriod:{value:"0s"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},pvRecyclerIncrementTimeoutNfs:{value:"30"},pvRecyclerMinimumTimeoutHostpath:{value:"60"},pvRecyclerMinimumTimeoutNfs:{value:"300"},pvRecyclerPodTemplateFilepathHostpath:{value:""},pvRecyclerPodTemplateFilepathNfs:{value:""},pvRecyclerTimeoutIncrementHostpath:{value:"30"},pvclaimbinderSyncPeriod:{value:"15s"},requestheaderAllowedNames:{value:""},requestheaderExtraHeadersPrefix:{value:"x-remote-extra-"},requestheaderGroupHeaders:{value:"x-remote-group"},requestheaderUsernameHeaders:{value:"x-remote-user"},resourceQuotaSyncPeriod:{value:"5m0s"},routeReconciliationPeriod:{value:"10s"},secondaryNodeEvictionRate:{value:"0.01"},securePort:{value:"10257"},serviceClusterIpRange:{value:""},showHiddenMetricsForVersion:{value:""},terminatedPodGcThreshold:{value:"0"},tlsCertFile:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:""},tlsSniCertKey:{value:""},unhealthyZoneThreshold:{value:"0.55"},useServiceAccountCredentials:{value:"true"},v:{value:"2"},version:{value:"false"},vmodule:{value:""},volumeHostAllowLocalLoopback:{value:"true"},volumeHostCidrDenylist:{value:""}}},85631:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>m,frontMatter:()=>d,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/staticPod","title":"staticPod","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/staticPod","permalink":"/in-cloud/tech-docs/kubernetes/components/controllerManager/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),n=a(28453),o=a(7478),u=(a(6353),a(31798)),c=a(63770),i=a(66483),s=a(60513),v=a(1775);const d={},h=void 0,p={},k=[];function b(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,l.jsx)(v.A,{language:"bash",children:s.A`
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/manifests
  `}),"\n",(0,l.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,l.jsx)(v.A,{language:"bash",children:s.A`
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
        - --allocate-node-cidrs=${i.L.allocateNodeCidrs.value}
        - --allow-untagged-cloud=${i.L.allowUntaggedCloud.value}
        - --attach-detach-reconcile-sync-period=${i.L.attachDetachReconcileSyncPeriod.value}
        - --authentication-kubeconfig=${i.L.authenticationKubeconfig.value}
        - --authentication-skip-lookup=${i.L.authenticationSkipLookup.value}
        - --authentication-token-webhook-cache-ttl=${i.L.authenticationTokenWebhookCacheTtl.value}
        - --authentication-tolerate-lookup-failure=${i.L.authenticationTolerateLookupFailure.value}
        - --authorization-always-allow-paths=${i.L.authorizationAlwaysAllowPaths.value}
        - --authorization-kubeconfig=${i.L.authorizationKubeconfig.value}
        - --authorization-webhook-cache-authorized-ttl=${i.L.authorizationWebhookCacheAuthorizedTtl.value}
        - --authorization-webhook-cache-unauthorized-ttl=${i.L.authorizationWebhookCacheUnauthorizedTtl.value}
        - --bind-address=${i.L.bindAddress.value}
        - --cidr-allocator-type=${i.L.cidrAllocatorType.value}
        - --client-ca-file=${i.L.clientCaFile.value}
        - --cloud-provider=${i.L.cloudProvider.value}
        - --cloud-provider-gce-lb-src-cidrs=${i.L.cloudProviderGceLbSrcCidrs.value}
        - --cluster-signing-cert-file=${i.L.clusterSigningCertFile.value}
        - --cluster-signing-duration=${i.L.clusterSigningDuration.value}
        - --cluster-signing-key-file=${i.L.clusterSigningKeyFile.value}
        - --concurrent-cron-job-syncs=${i.L.concurrentCronJobSyncs.value}
        - --concurrent-deployment-syncs=${i.L.concurrentDeploymentSyncs.value}
        - --concurrent-endpoint-syncs=${i.L.concurrentEndpointSyncs.value}
        - --concurrent-ephemeralvolume-syncs=${i.L.concurrentEphemeralvolumeSyncs.value}
        - --concurrent-gc-syncs=${i.L.concurrentGcSyncs.value}
        - --concurrent-horizontal-pod-autoscaler-syncs=${i.L.concurrentHorizontalPodAutoscalerSyncs.value}
        - --concurrent-job-syncs=${i.L.concurrentJobSyncs.value}
        - --concurrent-namespace-syncs=${i.L.concurrentNamespaceSyncs.value}
        - --concurrent-rc-syncs=${i.L.concurrentRcSyncs.value}
        - --concurrent-replicaset-syncs=${i.L.concurrentReplicasetSyncs.value}
        - --concurrent-resource-quota-syncs=${i.L.concurrentResourceQuotaSyncs.value}
        - --concurrent-service-endpoint-syncs=${i.L.concurrentServiceEndpointSyncs.value}
        - --concurrent-service-syncs=${i.L.concurrentServiceSyncs.value}
        - --concurrent-serviceaccount-token-syncs=${i.L.concurrentServiceaccountTokenSyncs.value}
        - --concurrent-statefulset-syncs=${i.L.concurrentStatefulsetSyncs.value}
        - --concurrent-ttl-after-finished-syncs=${i.L.concurrentTtlAfterFinishedSyncs.value}
        - --concurrent-validating-admission-policy-status-syncs=${i.L.concurrentValidatingAdmissionPolicyStatusSyncs.value}
        - --configure-cloud-routes=${i.L.configureCloudRoutes.value}
        - --contention-profiling=${i.L.contentionProfiling.value}
        - --controller-start-interval=${i.L.controllerStartInterval.value}
        - --controllers=${i.L.controllers.value}
        - --disable-attach-detach-reconcile-sync=${i.L.disableAttachDetachReconcileSync.value}
        - --disable-force-detach-on-timeout=${i.L.disableForceDetachOnTimeout.value}
        - --enable-dynamic-provisioning=${i.L.enableDynamicProvisioning.value}
        - --enable-garbage-collector=${i.L.enableGarbageCollector.value}
        - --enable-hostpath-provisioner=${i.L.enableHostpathProvisioner.value}
        - --enable-leader-migration=${i.L.enableLeaderMigration.value}
        - --endpoint-updates-batch-period=${i.L.endpointUpdatesBatchPeriod.value}
        - --endpointslice-updates-batch-period=${i.L.endpointsliceUpdatesBatchPeriod.value}
        - --feature-gates=${i.L.featureGates.value}
        - --flex-volume-plugin-dir=${i.L.flexVolumePluginDir.value}
        - --help=${i.L.help.value}
        - --horizontal-pod-autoscaler-cpu-initialization-period=${i.L.horizontalPodAutoscalerCpuInitializationPeriod.value}
        - --horizontal-pod-autoscaler-downscale-delay=${i.L.horizontalPodAutoscalerDownscaleDelay.value}
        - --horizontal-pod-autoscaler-downscale-stabilization=${i.L.horizontalPodAutoscalerDownscaleStabilization.value}
        - --horizontal-pod-autoscaler-initial-readiness-delay=${i.L.horizontalPodAutoscalerInitialReadinessDelay.value}
        - --horizontal-pod-autoscaler-sync-period=${i.L.horizontalPodAutoscalerSyncPeriod.value}
        - --horizontal-pod-autoscaler-tolerance=${i.L.horizontalPodAutoscalerTolerance.value}
        - --horizontal-pod-autoscaler-upscale-delay=${i.L.horizontalPodAutoscalerUpscaleDelay.value}
        - --http2-max-streams-per-connection=${i.L.http2MaxStreamsPerConnection.value}
        - --kube-api-burst=${i.L.kubeApiBurst.value}
        - --kube-api-content-type=${i.L.kubeApiContentType.value}
        - --kube-api-qps=${i.L.kubeApiQps.value}
        - --kubeconfig=${i.L.kubeconfig.value}
        - --large-cluster-size-threshold=${i.L.largeClusterSizeThreshold.value}
        - --leader-elect=${i.L.leaderElect.value}
        - --leader-elect-lease-duration=${i.L.leaderElectLeaseDuration.value}
        - --leader-elect-renew-deadline=${i.L.leaderElectRenewDeadline.value}
        - --leader-elect-resource-lock=${i.L.leaderElectResourceLock.value}
        - --leader-elect-resource-name=${i.L.leaderElectResourceName.value}
        - --leader-elect-resource-namespace=${i.L.leaderElectResourceNamespace.value}
        - --leader-elect-retry-period=${i.L.leaderElectRetryPeriod.value}
        - --legacy-service-account-token-clean-up-period=${i.L.legacyServiceAccountTokenCleanUpPeriod.value}
        - --log-flush-frequency=${i.L.logFlushFrequency.value}
        - --log-json-info-buffer-size=${i.L.logJsonInfoBufferSize.value}
        - --log-json-split-stream=${i.L.logJsonSplitStream.value}
        - --log-text-info-buffer-size=${i.L.logTextInfoBufferSize.value}
        - --log-text-split-stream=${i.L.logTextSplitStream.value}
        - --logging-format=${i.L.loggingFormat.value}
        - --max-endpoints-per-slice=${i.L.maxEndpointsPerSlice.value}
        - --min-resync-period=${i.L.minResyncPeriod.value}
        - --mirroring-concurrent-service-endpoint-syncs=${i.L.mirroringConcurrentServiceEndpointSyncs.value}
        - --mirroring-endpointslice-updates-batch-period=${i.L.mirroringEndpointsliceUpdatesBatchPeriod.value}
        - --mirroring-max-endpoints-per-subset=${i.L.mirroringMaxEndpointsPerSubset.value}
        - --namespace-sync-period=${i.L.namespaceSyncPeriod.value}
        - --node-cidr-mask-size=${i.L.nodeCidrMaskSize.value}
        - --node-cidr-mask-size-ipv4=${i.L.nodeCidrMaskSizeIpv4.value}
        - --node-cidr-mask-size-ipv6=${i.L.nodeCidrMaskSizeIpv6.value}
        - --node-eviction-rate=${i.L.nodeEvictionRate.value}
        - --node-monitor-grace-period=${i.L.nodeMonitorGracePeriod.value}
        - --node-monitor-period=${i.L.nodeMonitorPeriod.value}
        - --node-startup-grace-period=${i.L.nodeStartupGracePeriod.value}
        - --node-sync-period=${i.L.nodeSyncPeriod.value}
        - --permit-address-sharing=${i.L.permitAddressSharing.value}
        - --permit-port-sharing=${i.L.permitPortSharing.value}
        - --profiling=${i.L.profiling.value}
        - --pv-recycler-increment-timeout-nfs=${i.L.pvRecyclerIncrementTimeoutNfs.value}
        - --pv-recycler-minimum-timeout-hostpath=${i.L.pvRecyclerMinimumTimeoutHostpath.value}
        - --pv-recycler-minimum-timeout-nfs=${i.L.pvRecyclerMinimumTimeoutNfs.value}
        - --pv-recycler-timeout-increment-hostpath=${i.L.pvRecyclerTimeoutIncrementHostpath.value}
        - --pvclaimbinder-sync-period=${i.L.pvclaimbinderSyncPeriod.value}
        - --requestheader-client-ca-file=${i.L.requestheaderClientCaFile.value}
        - --requestheader-extra-headers-prefix=${i.L.requestheaderExtraHeadersPrefix.value}
        - --requestheader-group-headers=${i.L.requestheaderGroupHeaders.value}
        - --requestheader-username-headers=${i.L.requestheaderUsernameHeaders.value}
        - --resource-quota-sync-period=${i.L.resourceQuotaSyncPeriod.value}
        - --root-ca-file=${i.L.rootCaFile.value}
        - --route-reconciliation-period=${i.L.routeReconciliationPeriod.value}
        - --secondary-node-eviction-rate=${i.L.secondaryNodeEvictionRate.value}
        - --secure-port=${i.L.securePort.value}
        - --service-account-private-key-file=${i.L.serviceAccountPrivateKeyFile.value}
        - --terminated-pod-gc-threshold=${i.L.terminatedPodGcThreshold.value}
        - --unhealthy-zone-threshold=${i.L.unhealthyZoneThreshold.value}
        - --use-service-account-credentials=${i.L.useServiceAccountCredentials.value}
        - --v=${i.L.v.value}
        - --version=${i.L.version.value}
        - --volume-host-allow-local-loopback=${i.L.volumeHostAllowLocalLoopback.value}

        # Не указывать если значение "" или undefined
        # - --cluster-signing-kube-apiserver-client-cert-file=${i.L.clusterSigningKubeApiserverClientCertFile.value}
        # - --cluster-signing-kube-apiserver-client-key-file=${i.L.clusterSigningKubeApiserverClientKeyFile.value}
        # - --cluster-signing-kubelet-client-cert-file=${i.L.clusterSigningKubeletClientCertFile.value}
        # - --cluster-signing-kubelet-client-key-file=${i.L.clusterSigningKubeletClientKeyFile.value}
        # - --cluster-signing-kubelet-serving-cert-file=${i.L.clusterSigningKubeletServingCertFile.value}
        # - --cluster-signing-kubelet-serving-key-file=${i.L.clusterSigningKubeletServingKeyFile.value}
        # - --cluster-signing-legacy-unknown-cert-file=${i.L.clusterSigningLegacyUnknownCertFile.value}
        # - --cluster-signing-legacy-unknown-key-file=${i.L.clusterSigningLegacyUnknownKeyFile.value}
        # - --cluster-cidr=${i.L.clusterCidr.value}
        # - --cloud-config=${i.L.cloudConfig.value}
        # - --cert-dir=${i.L.certDir.value}
        # - --allow-metric-labels-manifest=${i.L.allowMetricLabelsManifest.value}
        # - --allow-metric-labels=${i.L.allowMetricLabels.value}
        # - --disabled-metrics=${i.L.disabledMetrics.value}
        # - --leader-migration-config=${i.L.leaderMigrationConfig.value}
        # - --master=${i.L.master.value}
        # - --pv-recycler-pod-template-filepath-hostpath=${i.L.pvRecyclerPodTemplateFilepathHostpath.value}
        # - --pv-recycler-pod-template-filepath-nfs=${i.L.pvRecyclerPodTemplateFilepathNfs.value}
        # - --service-cluster-ip-range=${i.L.serviceClusterIpRange.value}
        # - --show-hidden-metrics-for-version=${i.L.showHiddenMetricsForVersion.value}
        # - --tls-cert-file=${i.L.tlsCertFile.value}
        # - --tls-cipher-suites=${i.L.tlsCipherSuites.value}
        # - --tls-min-version=${i.L.tlsMinVersion.value}
        # - --tls-private-key-file=${i.L.tlsPrivateKeyFile.value}
        # - --tls-sni-cert-key=${i.L.tlsSniCertKey.value}
        # - --vmodule=${i.L.vmodule.value}
        # - --volume-host-cidr-denylist=${i.L.volumeHostCidrDenylist.value}
        # - --external-cloud-volume-plugin=${i.L.externalCloudVolumePlugin.value}
        # - --requestheader-allowed-names=${i.L.requestheaderAllowedNames.value}
        image: ${o.M.baseDockerRegistry.value}/kube-controller-manager:${c.M.kubernetes.value}
        imagePullPolicy: IfNotPresent
        livenessProbe:
          failureThreshold: 8
          httpGet:
            path: /healthz
            port: ${u.h.kubeControllerManager.portNumber}
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
            port: ${u.h.kubeControllerManager.portNumber}
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
  `})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(b,{...e})}):b()}}}]);