/* eslint-disable no-template-curly-in-string */
import { TCustomValueItems } from '../../customTypes/customValue'
import dedent from 'ts-dedent'

import {ETCD_ARGS}              from '@site/src/constants/kubernetes/etcdArgs'
import {KUBE_API_ARGS}          from '@site/src/constants/kubernetes/kubeAPIArgs'
import {KUBE_CONTROLLER_MANAGER_ARGS} from '@site/src/constants/kubernetes/kubeControllerManagerArgs'
import {KUBE_SCHEDULER_ARGS} from '@site/src/constants/kubernetes/kubeSchedulerArgs'

export const KUBERNETES_ETCD_API_ARGS: TCustomValueItems = {
  data: {
    value: dedent`
      auto-compaction-retention: "${ETCD_ARGS.autoCompactionRetention.value}"
      cert-file: "${ETCD_ARGS.certFile.value}"
      client-cert-auth: "${ETCD_ARGS.clientCertAuth.value}"
      data-dir: "${ETCD_ARGS.dataDir.value}"
      election-timeout: "${ETCD_ARGS.electionTimeout.value}"
      heartbeat-interval: "${ETCD_ARGS.heartbeatInterval.value}"
      key-file: "${ETCD_ARGS.keyFile.value}"
      listen-client-urls: "${ETCD_ARGS.listenClientUrls.value}"
      listen-metrics-urls: "${ETCD_ARGS.listenMetricsUrls.value}"
      listen-peer-urls: "${ETCD_ARGS.listenPeerUrls.value}"
      logger: "${ETCD_ARGS.logger.value}"
      max-snapshots: "${ETCD_ARGS.maxSnapshots.value}"
      max-wals: "${ETCD_ARGS.maxWals.value}"
      metrics: "${ETCD_ARGS.metrics.value}"
      peer-cert-file: "${ETCD_ARGS.peerCertFile.value}"
      peer-client-cert-auth: "${ETCD_ARGS.peerClientCertAuth.value}"
      peer-key-file: "${ETCD_ARGS.peerKeyFile.value}"
      peer-trusted-ca-file: "${ETCD_ARGS.peerTrustedCAFile.value}"
      snapshot-count: "${ETCD_ARGS.snapshotCount.value}"
      quota-backend-bytes: "10737418240" # TODO
      experimental-initial-corrupt-check: "true"
      experimental-watch-progress-notify-interval: "5s"
      trusted-ca-file: "${ETCD_ARGS.trustedCAFile.value}"
    `
  }
};

export const KUBERNETES_KUBE_API_ARGS: TCustomValueItems = {
  data: {
    value: dedent`
      aggregator-reject-forwarding-redirect: "${KUBE_API_ARGS.aggregatorRejectForwardingRedirect.value}"
      allow-privileged: "${KUBE_API_ARGS.allowPrivileged.value}"
      anonymous-auth: "${KUBE_API_ARGS.anonymousAuth.value}"
      api-audiences: "${KUBE_API_ARGS.apiAudiences.value}"
      apiserver-count: "${KUBE_API_ARGS.apiserverCount.value}"
      audit-log-batch-buffer-size: "${KUBE_API_ARGS.auditLogBatchBufferSize.value}"
      audit-log-batch-max-size: "${KUBE_API_ARGS.auditLogBatchMaxSize.value}"
      audit-log-batch-max-wait: "${KUBE_API_ARGS.auditLogBatchMaxWait.value}"
      audit-log-batch-throttle-burst: "${KUBE_API_ARGS.auditLogBatchThrottleBurst.value}"
      audit-log-batch-throttle-enable: "${KUBE_API_ARGS.auditLogBatchThrottleEnable.value}"
      audit-log-batch-throttle-qps: "${KUBE_API_ARGS.auditLogBatchThrottleQps.value}"
      audit-log-compress: "${KUBE_API_ARGS.auditLogCompress.value}"
      audit-log-format: "${KUBE_API_ARGS.auditLogFormat.value}"
      audit-log-maxage: "${KUBE_API_ARGS.auditLogMaxage.value}"
      audit-log-maxbackup: "${KUBE_API_ARGS.auditLogMaxbackup.value}"
      audit-log-maxsize: "${KUBE_API_ARGS.auditLogMaxsize.value}"
      audit-log-mode: "${KUBE_API_ARGS.auditLogMode.value}"
      audit-log-truncate-enabled: "${KUBE_API_ARGS.auditLogTruncateEnabled.value}"
      audit-log-truncate-max-batch-size: "${KUBE_API_ARGS.auditLogTruncateMaxBatchSize.value}"
      audit-log-truncate-max-event-size: "${KUBE_API_ARGS.auditLogTruncateMaxEventSize.value}"
      audit-log-version: "${KUBE_API_ARGS.auditLogVersion.value}"
      audit-webhook-batch-buffer-size: "${KUBE_API_ARGS.auditWebhookBatchBufferSize.value}"
      audit-webhook-batch-initial-backoff: "${KUBE_API_ARGS.auditWebhookBatchInitialBackoff.value}"
      audit-webhook-batch-max-size: "${KUBE_API_ARGS.auditWebhookBatchMaxSize.value}"
      audit-webhook-batch-max-wait: "${KUBE_API_ARGS.auditWebhookBatchMaxWait.value}"
      audit-webhook-batch-throttle-burst: "${KUBE_API_ARGS.auditWebhookBatchThrottleBurst.value}"
      audit-webhook-batch-throttle-enable: "${KUBE_API_ARGS.auditWebhookBatchThrottleEnable.value}"
      audit-webhook-batch-throttle-qps: "${KUBE_API_ARGS.auditWebhookBatchThrottleQps.value}"
      audit-webhook-initial-backoff: "${KUBE_API_ARGS.auditWebhookInitialBackoff.value}"
      audit-webhook-mode: "${KUBE_API_ARGS.auditWebhookMode.value}"
      audit-webhook-truncate-enabled: "${KUBE_API_ARGS.auditWebhookTruncateEnabled.value}"
      audit-webhook-truncate-max-batch-size: "${KUBE_API_ARGS.auditWebhookTruncateMaxBatchSize.value}"
      audit-webhook-truncate-max-event-size: "${KUBE_API_ARGS.auditWebhookTruncateMaxEventSize.value}"
      audit-webhook-version: "${KUBE_API_ARGS.auditWebhookVersion.value}"
      authentication-token-webhook-cache-ttl: "${KUBE_API_ARGS.authenticationTokenWebhookCacheTtl.value}"
      authentication-token-webhook-version: "${KUBE_API_ARGS.authenticationTokenWebhookVersion.value}"
      authorization-mode: "${KUBE_API_ARGS.authorizationMode.value}"
      authorization-webhook-cache-authorized-ttl: "${KUBE_API_ARGS.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${KUBE_API_ARGS.authorizationWebhookCacheUnauthorizedTtl.value}"
      authorization-webhook-version: "${KUBE_API_ARGS.authorizationWebhookVersion.value}"
      bind-address: "${KUBE_API_ARGS.bindAddress.value}"
      cert-dir: "${KUBE_API_ARGS.certDir.value}"
      client-ca-file: "${KUBE_API_ARGS.clientCaFile.value}"
      cloud-provider-gce-l7lb-src-cidrs: "${KUBE_API_ARGS.cloudProviderGceL7lbSrcCidrs.value}"
      cloud-provider-gce-lb-src-cidrs: "${KUBE_API_ARGS.cloudProviderGceLbSrcCidrs.value}"
      contention-profiling: "${KUBE_API_ARGS.contentionProfiling.value}"
      default-not-ready-toleration-seconds: "${KUBE_API_ARGS.defaultNotReadyTolerationSeconds.value}"
      default-unreachable-toleration-seconds: "${KUBE_API_ARGS.defaultUnreachableTolerationSeconds.value}"
      default-watch-cache-size: "${KUBE_API_ARGS.defaultWatchCacheSize.value}"
      delete-collection-workers: "${KUBE_API_ARGS.deleteCollectionWorkers.value}"
      enable-admission-plugins: "${KUBE_API_ARGS.enableAdmissionPlugins.value}"
      enable-aggregator-routing: "${KUBE_API_ARGS.enableAggregatorRouting.value}"
      enable-bootstrap-token-auth: "${KUBE_API_ARGS.enableBootstrapTokenAuth.value}"
      enable-garbage-collector: "${KUBE_API_ARGS.enableGarbageCollector.value}"
      enable-logs-handler: "${KUBE_API_ARGS.enableLogsHandler.value}"
      enable-priority-and-fairness: "${KUBE_API_ARGS.enablePriorityAndFairness.value}"
      encryption-provider-config-automatic-reload: "${KUBE_API_ARGS.encryptionProviderConfigAutomaticReload.value}"
      endpoint-reconciler-type: "${KUBE_API_ARGS.endpointReconcilerType.value}"
      etcd-cafile: "${KUBE_API_ARGS.etcdCafile.value}"
      etcd-certfile: "${KUBE_API_ARGS.etcdCertfile.value}"
      etcd-compaction-interval: "${KUBE_API_ARGS.etcdCompactionInterval.value}"
      etcd-count-metric-poll-period: "${KUBE_API_ARGS.etcdCountMetricPollPeriod.value}"
      etcd-db-metric-poll-interval: "${KUBE_API_ARGS.etcdDbMetricPollInterval.value}"
      etcd-healthcheck-timeout: "${KUBE_API_ARGS.etcdHealthcheckTimeout.value}"
      etcd-keyfile: "${KUBE_API_ARGS.etcdKeyfile.value}"
      etcd-prefix: "${KUBE_API_ARGS.etcdPrefix.value}"
      etcd-readycheck-timeout: "${KUBE_API_ARGS.etcdReadycheckTimeout.value}"
      etcd-servers: "${KUBE_API_ARGS.etcdServers.value}"
      event-ttl: "${KUBE_API_ARGS.eventTtl.value}"
      feature-gates: "${KUBE_API_ARGS.featureGates.value}"
      goaway-chance: "${KUBE_API_ARGS.goawayChance.value}"
      help: "${KUBE_API_ARGS.help.value}"
      http2-max-streams-per-connection: "${KUBE_API_ARGS.http2MaxStreamsPerConnection.value}"
      kubelet-client-certificate: "${KUBE_API_ARGS.kubeletClientCertificate.value}"
      kubelet-client-key: "${KUBE_API_ARGS.kubeletClientKey.value}"
      kubelet-port: "${KUBE_API_ARGS.kubeletPort.value}"
      kubelet-preferred-address-types: "${KUBE_API_ARGS.kubeletPreferredAddressTypes.value}"
      kubelet-read-only-port: "${KUBE_API_ARGS.kubeletReadOnlyPort.value}"
      kubelet-timeout: "${KUBE_API_ARGS.kubeletTimeout.value}"
      kubernetes-service-node-port: "${KUBE_API_ARGS.kubernetesServiceNodePort.value}"
      lease-reuse-duration-seconds: "${KUBE_API_ARGS.leaseReuseDurationSeconds.value}"
      livez-grace-period: "${KUBE_API_ARGS.livezGracePeriod.value}"
      log-flush-frequency: "${KUBE_API_ARGS.logFlushFrequency.value}"
      logging-format: "${KUBE_API_ARGS.loggingFormat.value}"
      log-json-info-buffer-size: "${KUBE_API_ARGS.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${KUBE_API_ARGS.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${KUBE_API_ARGS.logTextInfoBufferSize.value}"
      log-text-split-stream: "${KUBE_API_ARGS.logTextSplitStream.value}"
      max-connection-bytes-per-sec: "${KUBE_API_ARGS.maxConnectionBytesPerSec.value}"
      max-mutating-requests-inflight: "${KUBE_API_ARGS.maxMutatingRequestsInflight.value}"
      max-requests-inflight: "${KUBE_API_ARGS.maxRequestsInflight.value}"
      min-request-timeout: "${KUBE_API_ARGS.minRequestTimeout.value}"
      permit-address-sharing: "${KUBE_API_ARGS.permitAddressSharing.value}"
      permit-port-sharing: "${KUBE_API_ARGS.permitPortSharing.value}"
      profiling: "${KUBE_API_ARGS.profiling.value}"
      proxy-client-cert-file: "${KUBE_API_ARGS.proxyClientCertFile.value}"
      proxy-client-key-file: "${KUBE_API_ARGS.proxyClientKeyFile.value}"
      requestheader-allowed-names: "${KUBE_API_ARGS.requestheaderAllowedNames.value}"
      requestheader-client-ca-file: "${KUBE_API_ARGS.requestheaderClientCaFile.value}"
      requestheader-extra-headers-prefix: "${KUBE_API_ARGS.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${KUBE_API_ARGS.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${KUBE_API_ARGS.requestheaderUsernameHeaders.value}"
      request-timeout: "${KUBE_API_ARGS.requestTimeout.value}"
      runtime-config: "${KUBE_API_ARGS.runtimeConfig.value}"
      secure-port: "${KUBE_API_ARGS.securePort.value}"
      service-account-extend-token-expiration: "${KUBE_API_ARGS.serviceAccountExtendTokenExpiration.value}"
      service-account-issuer: "${KUBE_API_ARGS.serviceAccountIssuer.value}"
      service-account-key-file: "${KUBE_API_ARGS.serviceAccountKeyFile.value}"
      service-account-lookup: "${KUBE_API_ARGS.serviceAccountLookup.value}"
      service-account-max-token-expiration: "${KUBE_API_ARGS.serviceAccountMaxTokenExpiration.value}"
      service-account-signing-key-file: "${KUBE_API_ARGS.serviceAccountSigningKeyFile.value}"
      service-cluster-ip-range: "${KUBE_API_ARGS.serviceClusterIpRange.value}"
      service-node-port-range: "${KUBE_API_ARGS.serviceNodePortRange.value}"
      shutdown-delay-duration: "${KUBE_API_ARGS.shutdownDelayDuration.value}"
      shutdown-send-retry-after: "${KUBE_API_ARGS.shutdownSendRetryAfter.value}"
      shutdown-watch-termination-grace-period: "${KUBE_API_ARGS.shutdownWatchTerminationGracePeriod.value}"
      storage-backend: "${KUBE_API_ARGS.storageBackend.value}"
      storage-media-type: "${KUBE_API_ARGS.storageMediaType.value}"
      tls-cert-file: "${KUBE_API_ARGS.tlsCertFile.value}"
      tls-private-key-file: "${KUBE_API_ARGS.tlsPrivateKeyFile.value}"
      v: "${KUBE_API_ARGS.v.value}"
      version: "${KUBE_API_ARGS.version.value}"
      watch-cache: "${KUBE_API_ARGS.watchCache.value}"
      # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ CLOUD-CONTROLLER-MANAGER
      # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
      # ->
      # cloud-provider: "${KUBE_API_ARGS.cloudProvider.value}"
      # Не указывать если значение "" или undefined
      # cloud-config: "${KUBE_API_ARGS.cloudConfig.value}"
      # strict-transport-security-directives: "${KUBE_API_ARGS.strictTransportSecurityDirectives.value}"
      # disable-admission-plugins: "${KUBE_API_ARGS.disableAdmissionPlugins.value}"
      # disabled-metrics: "${KUBE_API_ARGS.disabledMetrics.value}"
      # egress-selector-config-file: "${KUBE_API_ARGS.egressSelectorConfigFile.value}"
      # encryption-provider-config: "${KUBE_API_ARGS.encryptionProviderConfig.value}"
      # etcd-servers-overrides: "${KUBE_API_ARGS.etcdServersOverrides.value}"
      # external-hostname: "${KUBE_API_ARGS.externalHostname.value}"
      # kubelet-certificate-authority: "${KUBE_API_ARGS.kubeletCertificateAuthority.value}"
      # oidc-ca-file: "${KUBE_API_ARGS.oidcCaFile.value}"
      # oidc-client-id: "${KUBE_API_ARGS.oidcClientId.value}"
      # oidc-groups-claim: "${KUBE_API_ARGS.oidcGroupsClaim.value}"
      # oidc-groups-prefix: "${KUBE_API_ARGS.oidcGroupsPrefix.value}"
      # oidc-issuer-url: "${KUBE_API_ARGS.oidcIssuerUrl.value}"
      # oidc-required-claim: "${KUBE_API_ARGS.oidcRequiredClaim.value}"
      # oidc-signing-algs: "${KUBE_API_ARGS.oidcSigningAlgs.value}"
      # oidc-username-claim: "${KUBE_API_ARGS.oidcUsernameClaim.value}"
      # oidc-username-prefix: "${KUBE_API_ARGS.oidcUsernamePrefix.value}"
      # peer-advertise-ip: "${KUBE_API_ARGS.peerAdvertiseIp.value}"
      # peer-advertise-port: "${KUBE_API_ARGS.peerAdvertisePort.value}"
      # peer-ca-file: "${KUBE_API_ARGS.peerCaFile.value}"
      # service-account-jwks-uri: "${KUBE_API_ARGS.serviceAccountJwksUri.value}"
      # show-hidden-metrics-for-version: "${KUBE_API_ARGS.showHiddenMetricsForVersion.value}"
      # tls-cipher-suites: "${KUBE_API_ARGS.tlsCipherSuites.value}"
      # tls-min-version: "${KUBE_API_ARGS.tlsMinVersion.value}"
      # tls-sni-cert-key: "${KUBE_API_ARGS.tlsSniCertKey.value}"
      # token-auth-file: "${KUBE_API_ARGS.tokenAuthFile.value}"
      # tracing-config-file: "${KUBE_API_ARGS.tracingConfigFile.value}"
      # vmodule: "${KUBE_API_ARGS.vmodule.value}"
      # watch-cache-sizes: "${KUBE_API_ARGS.watchCacheSizes.value}"
      # authorization-webhook-config-file: "${KUBE_API_ARGS.authorizationWebhookConfigFile.value}"
      # cors-allowed-origins: "${KUBE_API_ARGS.corsAllowedOrigins.value}"
      # debug-socket-path: "${KUBE_API_ARGS.debugSocketPath.value}"
      # authorization-policy-file: "${KUBE_API_ARGS.authorizationPolicyFile.value}"
      # authorization-config: "${KUBE_API_ARGS.authorizationConfig.value}"
      # authentication-token-webhook-config-file: "${KUBE_API_ARGS.authenticationTokenWebhookConfigFile.value}"
      # authentication-config: "${KUBE_API_ARGS.authenticationConfig.value}"
      # audit-webhook-config-file: "${KUBE_API_ARGS.auditWebhookConfigFile.value}"
      # audit-policy-file: "${KUBE_API_ARGS.auditPolicyFile.value}"
      # audit-log-path: "${KUBE_API_ARGS.auditLogPath.value}"
      # allow-metric-labels: "${KUBE_API_ARGS.allowMetricLabels.value}"
      # allow-metric-labels-manifest: "${KUBE_API_ARGS.allowMetricLabelsManifest.value}"
      # admission-control: "${KUBE_API_ARGS.admissionControl.value}"
      # admission-control-config-file: "${KUBE_API_ARGS.admissionControlConfigFile.value}"
      # advertise-address: "${KUBE_API_ARGS.advertiseAddress.value}"
    `
  }
};



export const KUBERNETES_KUBE_CONTROLLER_MANAGER_ARGS: TCustomValueItems = {
  data: {
    value: dedent`
      allocate-node-cidrs: "${KUBE_CONTROLLER_MANAGER_ARGS.allocateNodeCidrs.value}"
      allow-untagged-cloud: "${KUBE_CONTROLLER_MANAGER_ARGS.allowUntaggedCloud.value}"
      attach-detach-reconcile-sync-period: "${KUBE_CONTROLLER_MANAGER_ARGS.attachDetachReconcileSyncPeriod.value}"
      authentication-kubeconfig: "${KUBE_CONTROLLER_MANAGER_ARGS.authenticationKubeconfig.value}"
      authentication-skip-lookup: "${KUBE_CONTROLLER_MANAGER_ARGS.authenticationSkipLookup.value}"
      authentication-token-webhook-cache-ttl: "${KUBE_CONTROLLER_MANAGER_ARGS.authenticationTokenWebhookCacheTtl.value}"
      authentication-tolerate-lookup-failure: "${KUBE_CONTROLLER_MANAGER_ARGS.authenticationTolerateLookupFailure.value}"
      authorization-always-allow-paths: "${KUBE_CONTROLLER_MANAGER_ARGS.authorizationAlwaysAllowPaths.value}"
      authorization-kubeconfig: "${KUBE_CONTROLLER_MANAGER_ARGS.authorizationKubeconfig.value}"
      authorization-webhook-cache-authorized-ttl: "${KUBE_CONTROLLER_MANAGER_ARGS.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${KUBE_CONTROLLER_MANAGER_ARGS.authorizationWebhookCacheUnauthorizedTtl.value}"
      bind-address: "${KUBE_CONTROLLER_MANAGER_ARGS.bindAddress.value}"
      cidr-allocator-type: "${KUBE_CONTROLLER_MANAGER_ARGS.cidrAllocatorType.value}"
      client-ca-file: "${KUBE_CONTROLLER_MANAGER_ARGS.clientCaFile.value}"
      cloud-provider: "${KUBE_CONTROLLER_MANAGER_ARGS.cloudProvider.value}"
      cloud-provider-gce-lb-src-cidrs: "${KUBE_CONTROLLER_MANAGER_ARGS.cloudProviderGceLbSrcCidrs.value}"
      cluster-signing-cert-file: "${KUBE_CONTROLLER_MANAGER_ARGS.clusterSigningCertFile.value}"
      cluster-signing-duration: "${KUBE_CONTROLLER_MANAGER_ARGS.clusterSigningDuration.value}"
      cluster-signing-key-file: "${KUBE_CONTROLLER_MANAGER_ARGS.clusterSigningKeyFile.value}"
      concurrent-cron-job-syncs: "${KUBE_CONTROLLER_MANAGER_ARGS.concurrentCronJobSyncs.value}"
      concurrent-deployment-syncs: "${KUBE_CONTROLLER_MANAGER_ARGS.concurrentDeploymentSyncs.value}"
      concurrent-endpoint-syncs: "${KUBE_CONTROLLER_MANAGER_ARGS.concurrentEndpointSyncs.value}"
      concurrent-ephemeralvolume-syncs: "${KUBE_CONTROLLER_MANAGER_ARGS.concurrentEphemeralvolumeSyncs.value}"
      concurrent-gc-syncs: "${KUBE_CONTROLLER_MANAGER_ARGS.concurrentGcSyncs.value}"
      concurrent-horizontal-pod-autoscaler-syncs: "${KUBE_CONTROLLER_MANAGER_ARGS.concurrentHorizontalPodAutoscalerSyncs.value}"
      concurrent-job-syncs: "${KUBE_CONTROLLER_MANAGER_ARGS.concurrentJobSyncs.value}"
      concurrent-namespace-syncs: "${KUBE_CONTROLLER_MANAGER_ARGS.concurrentNamespaceSyncs.value}"
      concurrent-rc-syncs: "${KUBE_CONTROLLER_MANAGER_ARGS.concurrentRcSyncs.value}"
      concurrent-replicaset-syncs: "${KUBE_CONTROLLER_MANAGER_ARGS.concurrentReplicasetSyncs.value}"
      concurrent-resource-quota-syncs: "${KUBE_CONTROLLER_MANAGER_ARGS.concurrentResourceQuotaSyncs.value}"
      concurrent-service-endpoint-syncs: "${KUBE_CONTROLLER_MANAGER_ARGS.concurrentServiceEndpointSyncs.value}"
      concurrent-service-syncs: "${KUBE_CONTROLLER_MANAGER_ARGS.concurrentServiceSyncs.value}"
      concurrent-serviceaccount-token-syncs: "${KUBE_CONTROLLER_MANAGER_ARGS.concurrentServiceaccountTokenSyncs.value}"
      concurrent-statefulset-syncs: "${KUBE_CONTROLLER_MANAGER_ARGS.concurrentStatefulsetSyncs.value}"
      concurrent-ttl-after-finished-syncs: "${KUBE_CONTROLLER_MANAGER_ARGS.concurrentTtlAfterFinishedSyncs.value}"
      concurrent-validating-admission-policy-status-syncs: "${KUBE_CONTROLLER_MANAGER_ARGS.concurrentValidatingAdmissionPolicyStatusSyncs.value}"
      configure-cloud-routes: "${KUBE_CONTROLLER_MANAGER_ARGS.configureCloudRoutes.value}"
      contention-profiling: "${KUBE_CONTROLLER_MANAGER_ARGS.contentionProfiling.value}"
      controller-start-interval: "${KUBE_CONTROLLER_MANAGER_ARGS.controllerStartInterval.value}"
      controllers: "${KUBE_CONTROLLER_MANAGER_ARGS.controllers.value}"
      disable-attach-detach-reconcile-sync: "${KUBE_CONTROLLER_MANAGER_ARGS.disableAttachDetachReconcileSync.value}"
      disable-force-detach-on-timeout: "${KUBE_CONTROLLER_MANAGER_ARGS.disableForceDetachOnTimeout.value}"
      enable-dynamic-provisioning: "${KUBE_CONTROLLER_MANAGER_ARGS.enableDynamicProvisioning.value}"
      enable-garbage-collector: "${KUBE_CONTROLLER_MANAGER_ARGS.enableGarbageCollector.value}"
      enable-hostpath-provisioner: "${KUBE_CONTROLLER_MANAGER_ARGS.enableHostpathProvisioner.value}"
      enable-leader-migration: "${KUBE_CONTROLLER_MANAGER_ARGS.enableLeaderMigration.value}"
      endpoint-updates-batch-period: "${KUBE_CONTROLLER_MANAGER_ARGS.endpointUpdatesBatchPeriod.value}"
      endpointslice-updates-batch-period: "${KUBE_CONTROLLER_MANAGER_ARGS.endpointsliceUpdatesBatchPeriod.value}"
      feature-gates: "${KUBE_CONTROLLER_MANAGER_ARGS.featureGates.value}"
      flex-volume-plugin-dir: "${KUBE_CONTROLLER_MANAGER_ARGS.flexVolumePluginDir.value}"
      help: "${KUBE_CONTROLLER_MANAGER_ARGS.help.value}"
      horizontal-pod-autoscaler-cpu-initialization-period: "${KUBE_CONTROLLER_MANAGER_ARGS.horizontalPodAutoscalerCpuInitializationPeriod.value}"
      horizontal-pod-autoscaler-downscale-delay: "${KUBE_CONTROLLER_MANAGER_ARGS.horizontalPodAutoscalerDownscaleDelay.value}"
      horizontal-pod-autoscaler-downscale-stabilization: "${KUBE_CONTROLLER_MANAGER_ARGS.horizontalPodAutoscalerDownscaleStabilization.value}"
      horizontal-pod-autoscaler-initial-readiness-delay: "${KUBE_CONTROLLER_MANAGER_ARGS.horizontalPodAutoscalerInitialReadinessDelay.value}"
      horizontal-pod-autoscaler-sync-period: "${KUBE_CONTROLLER_MANAGER_ARGS.horizontalPodAutoscalerSyncPeriod.value}"
      horizontal-pod-autoscaler-tolerance: "${KUBE_CONTROLLER_MANAGER_ARGS.horizontalPodAutoscalerTolerance.value}"
      horizontal-pod-autoscaler-upscale-delay: "${KUBE_CONTROLLER_MANAGER_ARGS.horizontalPodAutoscalerUpscaleDelay.value}"
      http2-max-streams-per-connection: "${KUBE_CONTROLLER_MANAGER_ARGS.http2MaxStreamsPerConnection.value}"
      kube-api-burst: "${KUBE_CONTROLLER_MANAGER_ARGS.kubeApiBurst.value}"
      kube-api-content-type: "${KUBE_CONTROLLER_MANAGER_ARGS.kubeApiContentType.value}"
      kube-api-qps: "${KUBE_CONTROLLER_MANAGER_ARGS.kubeApiQps.value}"
      kubeconfig: "${KUBE_CONTROLLER_MANAGER_ARGS.kubeconfig.value}"
      large-cluster-size-threshold: "${KUBE_CONTROLLER_MANAGER_ARGS.largeClusterSizeThreshold.value}"
      leader-elect: "${KUBE_CONTROLLER_MANAGER_ARGS.leaderElect.value}"
      leader-elect-lease-duration: "${KUBE_CONTROLLER_MANAGER_ARGS.leaderElectLeaseDuration.value}"
      leader-elect-renew-deadline: "${KUBE_CONTROLLER_MANAGER_ARGS.leaderElectRenewDeadline.value}"
      leader-elect-resource-lock: "${KUBE_CONTROLLER_MANAGER_ARGS.leaderElectResourceLock.value}"
      leader-elect-resource-name: "${KUBE_CONTROLLER_MANAGER_ARGS.leaderElectResourceName.value}"
      leader-elect-resource-namespace: "${KUBE_CONTROLLER_MANAGER_ARGS.leaderElectResourceNamespace.value}"
      leader-elect-retry-period: "${KUBE_CONTROLLER_MANAGER_ARGS.leaderElectRetryPeriod.value}"
      legacy-service-account-token-clean-up-period: "${KUBE_CONTROLLER_MANAGER_ARGS.legacyServiceAccountTokenCleanUpPeriod.value}"
      log-flush-frequency: "${KUBE_CONTROLLER_MANAGER_ARGS.logFlushFrequency.value}"
      log-json-info-buffer-size: "${KUBE_CONTROLLER_MANAGER_ARGS.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${KUBE_CONTROLLER_MANAGER_ARGS.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${KUBE_CONTROLLER_MANAGER_ARGS.logTextInfoBufferSize.value}"
      log-text-split-stream: "${KUBE_CONTROLLER_MANAGER_ARGS.logTextSplitStream.value}"
      logging-format: "${KUBE_CONTROLLER_MANAGER_ARGS.loggingFormat.value}"
      max-endpoints-per-slice: "${KUBE_CONTROLLER_MANAGER_ARGS.maxEndpointsPerSlice.value}"
      min-resync-period: "${KUBE_CONTROLLER_MANAGER_ARGS.minResyncPeriod.value}"
      mirroring-concurrent-service-endpoint-syncs: "${KUBE_CONTROLLER_MANAGER_ARGS.mirroringConcurrentServiceEndpointSyncs.value}"
      mirroring-endpointslice-updates-batch-period: "${KUBE_CONTROLLER_MANAGER_ARGS.mirroringEndpointsliceUpdatesBatchPeriod.value}"
      mirroring-max-endpoints-per-subset: "${KUBE_CONTROLLER_MANAGER_ARGS.mirroringMaxEndpointsPerSubset.value}"
      namespace-sync-period: "${KUBE_CONTROLLER_MANAGER_ARGS.namespaceSyncPeriod.value}"
      node-cidr-mask-size: "${KUBE_CONTROLLER_MANAGER_ARGS.nodeCidrMaskSize.value}"
      node-cidr-mask-size-ipv4: "${KUBE_CONTROLLER_MANAGER_ARGS.nodeCidrMaskSizeIpv4.value}"
      node-cidr-mask-size-ipv6: "${KUBE_CONTROLLER_MANAGER_ARGS.nodeCidrMaskSizeIpv6.value}"
      node-eviction-rate: "${KUBE_CONTROLLER_MANAGER_ARGS.nodeEvictionRate.value}"
      node-monitor-grace-period: "${KUBE_CONTROLLER_MANAGER_ARGS.nodeMonitorGracePeriod.value}"
      node-monitor-period: "${KUBE_CONTROLLER_MANAGER_ARGS.nodeMonitorPeriod.value}"
      node-startup-grace-period: "${KUBE_CONTROLLER_MANAGER_ARGS.nodeStartupGracePeriod.value}"
      node-sync-period: "${KUBE_CONTROLLER_MANAGER_ARGS.nodeSyncPeriod.value}"
      permit-address-sharing: "${KUBE_CONTROLLER_MANAGER_ARGS.permitAddressSharing.value}"
      permit-port-sharing: "${KUBE_CONTROLLER_MANAGER_ARGS.permitPortSharing.value}"
      profiling: "${KUBE_CONTROLLER_MANAGER_ARGS.profiling.value}"
      pv-recycler-increment-timeout-nfs: "${KUBE_CONTROLLER_MANAGER_ARGS.pvRecyclerIncrementTimeoutNfs.value}"
      pv-recycler-minimum-timeout-hostpath: "${KUBE_CONTROLLER_MANAGER_ARGS.pvRecyclerMinimumTimeoutHostpath.value}"
      pv-recycler-minimum-timeout-nfs: "${KUBE_CONTROLLER_MANAGER_ARGS.pvRecyclerMinimumTimeoutNfs.value}"
      pv-recycler-timeout-increment-hostpath: "${KUBE_CONTROLLER_MANAGER_ARGS.pvRecyclerTimeoutIncrementHostpath.value}"
      pvclaimbinder-sync-period: "${KUBE_CONTROLLER_MANAGER_ARGS.pvclaimbinderSyncPeriod.value}"
      requestheader-client-ca-file: "${KUBE_CONTROLLER_MANAGER_ARGS.requestheaderClientCaFile.value}"
      requestheader-extra-headers-prefix: "${KUBE_CONTROLLER_MANAGER_ARGS.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${KUBE_CONTROLLER_MANAGER_ARGS.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${KUBE_CONTROLLER_MANAGER_ARGS.requestheaderUsernameHeaders.value}"
      resource-quota-sync-period: "${KUBE_CONTROLLER_MANAGER_ARGS.resourceQuotaSyncPeriod.value}"
      root-ca-file: "${KUBE_CONTROLLER_MANAGER_ARGS.rootCaFile.value}"
      route-reconciliation-period: "${KUBE_CONTROLLER_MANAGER_ARGS.routeReconciliationPeriod.value}"
      secondary-node-eviction-rate: "${KUBE_CONTROLLER_MANAGER_ARGS.secondaryNodeEvictionRate.value}"
      secure-port: "${KUBE_CONTROLLER_MANAGER_ARGS.securePort.value}"
      service-account-private-key-file: "${KUBE_CONTROLLER_MANAGER_ARGS.serviceAccountPrivateKeyFile.value}"
      terminated-pod-gc-threshold: "${KUBE_CONTROLLER_MANAGER_ARGS.terminatedPodGcThreshold.value}"
      unhealthy-zone-threshold: "${KUBE_CONTROLLER_MANAGER_ARGS.unhealthyZoneThreshold.value}"
      use-service-account-credentials: "${KUBE_CONTROLLER_MANAGER_ARGS.useServiceAccountCredentials.value}"
      v: "${KUBE_CONTROLLER_MANAGER_ARGS.v.value}"
      version: "${KUBE_CONTROLLER_MANAGER_ARGS.version.value}"
      volume-host-allow-local-loopback: "${KUBE_CONTROLLER_MANAGER_ARGS.volumeHostAllowLocalLoopback.value}"
      # Не указывать если значение "" или undefined
      # cluster-signing-kube-apiserver-client-cert-file: "${KUBE_CONTROLLER_MANAGER_ARGS.clusterSigningKubeApiserverClientCertFile.value}"
      # cluster-signing-kube-apiserver-client-key-file: "${KUBE_CONTROLLER_MANAGER_ARGS.clusterSigningKubeApiserverClientKeyFile.value}"
      # cluster-signing-kubelet-client-cert-file: "${KUBE_CONTROLLER_MANAGER_ARGS.clusterSigningKubeletClientCertFile.value}"
      # cluster-signing-kubelet-client-key-file: "${KUBE_CONTROLLER_MANAGER_ARGS.clusterSigningKubeletClientKeyFile.value}"
      # cluster-signing-kubelet-serving-cert-file: "${KUBE_CONTROLLER_MANAGER_ARGS.clusterSigningKubeletServingCertFile.value}"
      # cluster-signing-kubelet-serving-key-file: "${KUBE_CONTROLLER_MANAGER_ARGS.clusterSigningKubeletServingKeyFile.value}"
      # cluster-signing-legacy-unknown-cert-file: "${KUBE_CONTROLLER_MANAGER_ARGS.clusterSigningLegacyUnknownCertFile.value}"
      # cluster-signing-legacy-unknown-key-file: "${KUBE_CONTROLLER_MANAGER_ARGS.clusterSigningLegacyUnknownKeyFile.value}"
      # cluster-cidr: "${KUBE_CONTROLLER_MANAGER_ARGS.clusterCidr.value}"
      # cloud-config: "${KUBE_CONTROLLER_MANAGER_ARGS.cloudConfig.value}"
      # cert-dir: "${KUBE_CONTROLLER_MANAGER_ARGS.certDir.value}"
      # allow-metric-labels-manifest: "${KUBE_CONTROLLER_MANAGER_ARGS.allowMetricLabelsManifest.value}"
      # allow-metric-labels: "${KUBE_CONTROLLER_MANAGER_ARGS.allowMetricLabels.value}"
      # disabled-metrics: "${KUBE_CONTROLLER_MANAGER_ARGS.disabledMetrics.value}"
      # leader-migration-config: "${KUBE_CONTROLLER_MANAGER_ARGS.leaderMigrationConfig.value}"
      # master: "${KUBE_CONTROLLER_MANAGER_ARGS.master.value}"
      # pv-recycler-pod-template-filepath-hostpath: "${KUBE_CONTROLLER_MANAGER_ARGS.pvRecyclerPodTemplateFilepathHostpath.value}"
      # pv-recycler-pod-template-filepath-nfs: "${KUBE_CONTROLLER_MANAGER_ARGS.pvRecyclerPodTemplateFilepathNfs.value}"
      # service-cluster-ip-range: "${KUBE_CONTROLLER_MANAGER_ARGS.serviceClusterIpRange.value}"
      # show-hidden-metrics-for-version: "${KUBE_CONTROLLER_MANAGER_ARGS.showHiddenMetricsForVersion.value}"
      # tls-cert-file: "${KUBE_CONTROLLER_MANAGER_ARGS.tlsCertFile.value}"
      # tls-cipher-suites: "${KUBE_CONTROLLER_MANAGER_ARGS.tlsCipherSuites.value}"
      # tls-min-version: "${KUBE_CONTROLLER_MANAGER_ARGS.tlsMinVersion.value}"
      # tls-private-key-file: "${KUBE_CONTROLLER_MANAGER_ARGS.tlsPrivateKeyFile.value}"
      # tls-sni-cert-key: "${KUBE_CONTROLLER_MANAGER_ARGS.tlsSniCertKey.value}"
      # vmodule: "${KUBE_CONTROLLER_MANAGER_ARGS.vmodule.value}"
      # volume-host-cidr-denylist: "${KUBE_CONTROLLER_MANAGER_ARGS.volumeHostCidrDenylist.value}"
      # external-cloud-volume-plugin: "${KUBE_CONTROLLER_MANAGER_ARGS.externalCloudVolumePlugin.value}"
      # requestheader-allowed-names: "${KUBE_CONTROLLER_MANAGER_ARGS.requestheaderAllowedNames.value}"
    `
  }
};

export const KUBERNETES_KUBE_SCHEDULER_ARGS: TCustomValueItems = {
  data: {
    value: dedent`
      authentication-kubeconfig: "${KUBE_SCHEDULER_ARGS.authenticationKubeconfig.value}"
      authentication-skip-lookup: "${KUBE_SCHEDULER_ARGS.authenticationSkipLookup.value}"
      authentication-token-webhook-cache-ttl: "${KUBE_SCHEDULER_ARGS.authenticationTokenWebhookCacheTtl.value}"
      authentication-tolerate-lookup-failure: "${KUBE_SCHEDULER_ARGS.authenticationTolerateLookupFailure.value}"
      authorization-always-allow-paths: "${KUBE_SCHEDULER_ARGS.authorizationAlwaysAllowPaths.value}"
      authorization-kubeconfig: "${KUBE_SCHEDULER_ARGS.authorizationKubeconfig.value}"
      authorization-webhook-cache-authorized-ttl: "${KUBE_SCHEDULER_ARGS.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${KUBE_SCHEDULER_ARGS.authorizationWebhookCacheUnauthorizedTtl.value}"
      bind-address: "${KUBE_SCHEDULER_ARGS.bindAddress.value}"
      client-ca-file: "${KUBE_SCHEDULER_ARGS.clientCaFile.value}"
      contention-profiling: "${KUBE_SCHEDULER_ARGS.contentionProfiling.value}"
      help: "${KUBE_SCHEDULER_ARGS.help.value}"
      http2-max-streams-per-connection: "${KUBE_SCHEDULER_ARGS.http2MaxStreamsPerConnection.value}"
      kube-api-burst: "${KUBE_SCHEDULER_ARGS.kubeApiBurst.value}"
      kube-api-content-type: "${KUBE_SCHEDULER_ARGS.kubeApiContentType.value}"
      kube-api-qps: "${KUBE_SCHEDULER_ARGS.kubeApiQps.value}"
      kubeconfig: "${KUBE_SCHEDULER_ARGS.kubeconfig.value}"
      leader-elect: "${KUBE_SCHEDULER_ARGS.leaderElect.value}"
      leader-elect-lease-duration: "${KUBE_SCHEDULER_ARGS.leaderElectLeaseDuration.value}"
      leader-elect-renew-deadline: "${KUBE_SCHEDULER_ARGS.leaderElectRenewDeadline.value}"
      leader-elect-resource-lock: "${KUBE_SCHEDULER_ARGS.leaderElectResourceLock.value}"
      leader-elect-resource-name: "${KUBE_SCHEDULER_ARGS.leaderElectResourceName.value}"
      leader-elect-resource-namespace: "${KUBE_SCHEDULER_ARGS.leaderElectResourceNamespace.value}"
      leader-elect-retry-period: "${KUBE_SCHEDULER_ARGS.leaderElectRetryPeriod.value}"
      log-flush-frequency: "${KUBE_SCHEDULER_ARGS.logFlushFrequency.value}"
      log-json-info-buffer-size: "${KUBE_SCHEDULER_ARGS.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${KUBE_SCHEDULER_ARGS.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${KUBE_SCHEDULER_ARGS.logTextInfoBufferSize.value}"
      log-text-split-stream: "${KUBE_SCHEDULER_ARGS.logTextSplitStream.value}"
      logging-format: "${KUBE_SCHEDULER_ARGS.loggingFormat.value}"
      permit-address-sharing: "${KUBE_SCHEDULER_ARGS.permitAddressSharing.value}"
      permit-port-sharing: "${KUBE_SCHEDULER_ARGS.permitPortSharing.value}"
      pod-max-in-unschedulable-pods-duration: "${KUBE_SCHEDULER_ARGS.podMaxInUnschedulablePodsDuration.value}"
      profiling: "${KUBE_SCHEDULER_ARGS.profiling.value}"
      requestheader-extra-headers-prefix: "${KUBE_SCHEDULER_ARGS.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${KUBE_SCHEDULER_ARGS.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${KUBE_SCHEDULER_ARGS.requestheaderUsernameHeaders.value}"
      secure-port: "${KUBE_SCHEDULER_ARGS.securePort.value}"
      v: "${KUBE_SCHEDULER_ARGS.v.value}"
      version: "${KUBE_SCHEDULER_ARGS.version.value}"
      # allow-metric-labels: "${KUBE_SCHEDULER_ARGS.allowMetricLabels.value}"
      # allow-metric-labels-manifest: "${KUBE_SCHEDULER_ARGS.allowMetricLabelsManifest.value}"
      # cert-dir: "${KUBE_SCHEDULER_ARGS.certDir.value}"
      # config: "${KUBE_SCHEDULER_ARGS.config.value}"
      # disabled-metrics: "${KUBE_SCHEDULER_ARGS.disabledMetrics.value}"
      # feature-gates: "${KUBE_SCHEDULER_ARGS.featureGates.value}"
      # master: "${KUBE_SCHEDULER_ARGS.master.value}"
      # requestheader-allowed-names: "${KUBE_SCHEDULER_ARGS.requestheaderAllowedNames.value}"
      # requestheader-client-ca-file: "${KUBE_SCHEDULER_ARGS.requestheaderClientCaFile.value}"
      # show-hidden-metrics-for-version: "${KUBE_SCHEDULER_ARGS.showHiddenMetricsForVersion.value}"
      # tls-cert-file: "${KUBE_SCHEDULER_ARGS.tlsCertFile.value}"
      # tls-cipher-suites: "${KUBE_SCHEDULER_ARGS.tlsCipherSuites.value}"
      # tls-min-version: "${KUBE_SCHEDULER_ARGS.tlsMinVersion.value}"
      # tls-private-key-file: "${KUBE_SCHEDULER_ARGS.tlsPrivateKeyFile.value}"
      # tls-sni-cert-key: "${KUBE_SCHEDULER_ARGS.tlsSniCertKey.value}"
      # vmodule: "${KUBE_SCHEDULER_ARGS.vmodule.value}"
      # write-config-to: "${KUBE_SCHEDULER_ARGS.writeConfigTo.value}"
    `
  }
}
