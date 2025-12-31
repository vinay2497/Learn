import { TopicData } from '@/types';

export const kubernetesData: TopicData = {
  name: 'Kubernetes',
  description: 'Container orchestration platform for automating deployment, scaling, and management',
  icon: '☸️',
  color: '#326CE5',
  gradient: 'from-blue-500 via-indigo-500 to-purple-500',
  commands: [
    // ============ CLUSTER INFO ============
    { id: 'k8s-1', command: 'kubectl cluster-info', description: 'Display cluster info', example: 'kubectl cluster-info', category: 'Cluster', difficulty: 'beginner' },
    { id: 'k8s-2', command: 'kubectl get nodes', description: 'List all nodes in cluster', example: 'kubectl get nodes -o wide', category: 'Cluster', difficulty: 'beginner' },
    { id: 'k8s-3', command: 'kubectl describe node <name>', description: 'Show detailed node info', example: 'kubectl describe node worker-1', category: 'Cluster', difficulty: 'beginner' },
    { id: 'k8s-4', command: 'kubectl top nodes', description: 'Show node resource usage', example: 'kubectl top nodes', category: 'Cluster', difficulty: 'intermediate' },
    { id: 'k8s-5', command: 'kubectl get componentstatuses', description: 'Check cluster component health', example: 'kubectl get cs', category: 'Cluster', difficulty: 'intermediate' },

    // ============ PODS ============
    { id: 'k8s-6', command: 'kubectl get pods', description: 'List pods in current namespace', example: 'kubectl get pods -A (all namespaces)', category: 'Pods', difficulty: 'beginner' },
    { id: 'k8s-7', command: 'kubectl get pods -o wide', description: 'List pods with extra details (IP, node)', example: 'kubectl get pods -o wide', category: 'Pods', difficulty: 'beginner' },
    { id: 'k8s-8', command: 'kubectl describe pod <name>', description: 'Show detailed pod information', example: 'kubectl describe pod nginx-pod', category: 'Pods', difficulty: 'beginner' },
    { id: 'k8s-9', command: 'kubectl logs <pod>', description: 'View pod logs', example: 'kubectl logs nginx-pod -f (follow)', category: 'Pods', difficulty: 'beginner' },
    { id: 'k8s-10', command: 'kubectl logs <pod> -c <container>', description: 'View specific container logs', example: 'kubectl logs mypod -c sidecar', category: 'Pods', difficulty: 'intermediate' },
    { id: 'k8s-11', command: 'kubectl exec -it <pod> -- /bin/sh', description: 'Execute shell in pod', example: 'kubectl exec -it nginx -- /bin/bash', category: 'Pods', difficulty: 'beginner' },
    { id: 'k8s-12', command: 'kubectl run <name> --image=<image>', description: 'Create a pod imperatively', example: 'kubectl run nginx --image=nginx', category: 'Pods', difficulty: 'beginner' },
    { id: 'k8s-13', command: 'kubectl delete pod <name>', description: 'Delete a pod', example: 'kubectl delete pod nginx --force', category: 'Pods', difficulty: 'beginner' },
    { id: 'k8s-14', command: 'kubectl top pods', description: 'Show pod resource usage', example: 'kubectl top pods --sort-by=memory', category: 'Pods', difficulty: 'intermediate' },
    { id: 'k8s-15', command: 'kubectl port-forward <pod> <local>:<pod>', description: 'Forward local port to pod', example: 'kubectl port-forward nginx 8080:80', category: 'Pods', difficulty: 'intermediate' },

    // ============ DEPLOYMENTS ============
    { id: 'k8s-16', command: 'kubectl get deployments', description: 'List all deployments', example: 'kubectl get deploy -A', category: 'Deployments', difficulty: 'beginner' },
    { id: 'k8s-17', command: 'kubectl create deployment <name> --image=<img>', description: 'Create deployment imperatively', example: 'kubectl create deploy nginx --image=nginx', category: 'Deployments', difficulty: 'beginner' },
    { id: 'k8s-18', command: 'kubectl scale deployment <name> --replicas=N', description: 'Scale deployment replicas', example: 'kubectl scale deploy nginx --replicas=5', category: 'Deployments', difficulty: 'beginner' },
    { id: 'k8s-19', command: 'kubectl rollout status deployment <name>', description: 'Check rollout status', example: 'kubectl rollout status deploy nginx', category: 'Deployments', difficulty: 'intermediate' },
    { id: 'k8s-20', command: 'kubectl rollout history deployment <name>', description: 'View rollout history', example: 'kubectl rollout history deploy nginx', category: 'Deployments', difficulty: 'intermediate' },
    { id: 'k8s-21', command: 'kubectl rollout undo deployment <name>', description: 'Rollback to previous version', example: 'kubectl rollout undo deploy nginx', category: 'Deployments', difficulty: 'intermediate' },
    { id: 'k8s-22', command: 'kubectl set image deployment/<name> <container>=<image>', description: 'Update deployment image', example: 'kubectl set image deploy/nginx nginx=nginx:1.19', category: 'Deployments', difficulty: 'intermediate' },
    { id: 'k8s-23', command: 'kubectl edit deployment <name>', description: 'Edit deployment in editor', example: 'kubectl edit deploy nginx', category: 'Deployments', difficulty: 'intermediate' },

    // ============ SERVICES ============
    { id: 'k8s-24', command: 'kubectl get services', description: 'List all services', example: 'kubectl get svc -A', category: 'Services', difficulty: 'beginner' },
    { id: 'k8s-25', command: 'kubectl expose deployment <name> --port=<port>', description: 'Create service for deployment', example: 'kubectl expose deploy nginx --port=80', category: 'Services', difficulty: 'beginner' },
    { id: 'k8s-26', command: 'kubectl expose deployment <name> --type=NodePort', description: 'Create NodePort service', example: 'kubectl expose deploy nginx --type=NodePort --port=80', category: 'Services', difficulty: 'intermediate' },
    { id: 'k8s-27', command: 'kubectl expose deployment <name> --type=LoadBalancer', description: 'Create LoadBalancer service', example: 'kubectl expose deploy nginx --type=LoadBalancer --port=80', category: 'Services', difficulty: 'intermediate' },
    { id: 'k8s-28', command: 'kubectl describe service <name>', description: 'Show service details', example: 'kubectl describe svc nginx', category: 'Services', difficulty: 'beginner' },

    // ============ REPLICASETS ============
    { id: 'k8s-29', command: 'kubectl get replicasets', description: 'List all ReplicaSets', example: 'kubectl get rs', category: 'ReplicaSets', difficulty: 'beginner' },
    { id: 'k8s-30', command: 'kubectl describe rs <name>', description: 'Show ReplicaSet details', example: 'kubectl describe rs nginx-rs', category: 'ReplicaSets', difficulty: 'intermediate' },
    { id: 'k8s-31', command: 'kubectl scale rs <name> --replicas=N', description: 'Scale ReplicaSet', example: 'kubectl scale rs nginx-rs --replicas=3', category: 'ReplicaSets', difficulty: 'intermediate' },

    // ============ CONFIGMAPS & SECRETS ============
    { id: 'k8s-32', command: 'kubectl get configmaps', description: 'List all ConfigMaps', example: 'kubectl get cm', category: 'Config', difficulty: 'beginner' },
    { id: 'k8s-33', command: 'kubectl create configmap <name> --from-literal=key=val', description: 'Create ConfigMap from literal', example: 'kubectl create cm myconfig --from-literal=env=prod', category: 'Config', difficulty: 'intermediate' },
    { id: 'k8s-34', command: 'kubectl create configmap <name> --from-file=<path>', description: 'Create ConfigMap from file', example: 'kubectl create cm myconfig --from-file=config.txt', category: 'Config', difficulty: 'intermediate' },
    { id: 'k8s-35', command: 'kubectl get secrets', description: 'List all Secrets', example: 'kubectl get secrets', category: 'Config', difficulty: 'beginner' },
    { id: 'k8s-36', command: 'kubectl create secret generic <name> --from-literal=key=val', description: 'Create generic Secret', example: 'kubectl create secret generic mysecret --from-literal=password=abc123', category: 'Config', difficulty: 'intermediate' },
    { id: 'k8s-37', command: 'kubectl get secret <name> -o yaml', description: 'View secret (base64 encoded)', example: 'kubectl get secret mysecret -o yaml', category: 'Config', difficulty: 'intermediate' },

    // ============ NAMESPACES ============
    { id: 'k8s-38', command: 'kubectl get namespaces', description: 'List all namespaces', example: 'kubectl get ns', category: 'Namespaces', difficulty: 'beginner' },
    { id: 'k8s-39', command: 'kubectl create namespace <name>', description: 'Create a namespace', example: 'kubectl create ns dev', category: 'Namespaces', difficulty: 'beginner' },
    { id: 'k8s-40', command: 'kubectl config set-context --current --namespace=<ns>', description: 'Set default namespace', example: 'kubectl config set-context --current --namespace=dev', category: 'Namespaces', difficulty: 'intermediate' },

    // ============ INGRESS ============
    { id: 'k8s-41', command: 'kubectl get ingress', description: 'List all Ingress resources', example: 'kubectl get ing -A', category: 'Ingress', difficulty: 'intermediate' },
    { id: 'k8s-42', command: 'kubectl describe ingress <name>', description: 'Show Ingress details', example: 'kubectl describe ing my-ingress', category: 'Ingress', difficulty: 'intermediate' },

    // ============ STATEFULSETS ============
    { id: 'k8s-43', command: 'kubectl get statefulsets', description: 'List all StatefulSets', example: 'kubectl get sts', category: 'StatefulSets', difficulty: 'intermediate' },
    { id: 'k8s-44', command: 'kubectl describe sts <name>', description: 'Show StatefulSet details', example: 'kubectl describe sts mysql', category: 'StatefulSets', difficulty: 'intermediate' },
    { id: 'k8s-45', command: 'kubectl scale sts <name> --replicas=N', description: 'Scale StatefulSet', example: 'kubectl scale sts mysql --replicas=3', category: 'StatefulSets', difficulty: 'intermediate' },

    // ============ APPLY & CREATE ============
    { id: 'k8s-46', command: 'kubectl apply -f <file.yaml>', description: 'Apply configuration from file', example: 'kubectl apply -f deployment.yaml', category: 'Apply', difficulty: 'beginner' },
    { id: 'k8s-47', command: 'kubectl apply -f <directory>', description: 'Apply all files in directory', example: 'kubectl apply -f ./manifests/', category: 'Apply', difficulty: 'beginner' },
    { id: 'k8s-48', command: 'kubectl delete -f <file.yaml>', description: 'Delete resources from file', example: 'kubectl delete -f deployment.yaml', category: 'Apply', difficulty: 'beginner' },
    { id: 'k8s-49', command: 'kubectl diff -f <file.yaml>', description: 'Show diff before applying', example: 'kubectl diff -f deployment.yaml', category: 'Apply', difficulty: 'intermediate' },

    // ============ HELM ============
    { id: 'k8s-50', command: 'helm install <name> <chart>', description: 'Install a Helm chart', example: 'helm install nginx bitnami/nginx', category: 'Helm', difficulty: 'intermediate' },
    { id: 'k8s-51', command: 'helm upgrade <name> <chart>', description: 'Upgrade a release', example: 'helm upgrade nginx bitnami/nginx', category: 'Helm', difficulty: 'intermediate' },
    { id: 'k8s-52', command: 'helm list', description: 'List installed releases', example: 'helm list -A', category: 'Helm', difficulty: 'intermediate' },
    { id: 'k8s-53', command: 'helm uninstall <name>', description: 'Uninstall a release', example: 'helm uninstall nginx', category: 'Helm', difficulty: 'intermediate' },
    { id: 'k8s-54', command: 'helm repo add <name> <url>', description: 'Add a chart repository', example: 'helm repo add bitnami https://charts.bitnami.com/bitnami', category: 'Helm', difficulty: 'intermediate' },
    { id: 'k8s-55', command: 'helm search repo <keyword>', description: 'Search for charts', example: 'helm search repo nginx', category: 'Helm', difficulty: 'intermediate' },
    { id: 'k8s-56', command: 'helm template <name> <chart>', description: 'Render chart templates locally', example: 'helm template myapp ./mychart', category: 'Helm', difficulty: 'intermediate' },
    { id: 'k8s-57', command: 'helm values <chart>', description: 'Show default values', example: 'helm show values bitnami/nginx', category: 'Helm', difficulty: 'intermediate' },

    // ============ TROUBLESHOOTING ============
    { id: 'k8s-58', command: 'kubectl get events', description: 'List cluster events', example: 'kubectl get events --sort-by=.lastTimestamp', category: 'Debug', difficulty: 'intermediate' },
    { id: 'k8s-59', command: 'kubectl logs <pod> --previous', description: 'View previous container logs', example: 'kubectl logs nginx --previous', category: 'Debug', difficulty: 'intermediate' },
    { id: 'k8s-60', command: 'kubectl get all', description: 'List all resources', example: 'kubectl get all -n dev', category: 'Debug', difficulty: 'beginner' },
  ],

  flashcards: [
    // ============ ARCHITECTURE ============
    { id: 'fc-k8s-1', front: 'What are the main components of Kubernetes Control Plane?', back: '1. API Server: Frontend for K8s, handles REST requests\n2. etcd: Key-value store for cluster data\n3. Scheduler: Assigns pods to nodes\n4. Controller Manager: Runs controllers (Deployment, ReplicaSet, etc.)\n5. Cloud Controller Manager: Cloud-specific integrations', category: 'Architecture', difficulty: 'intermediate' },
    { id: 'fc-k8s-2', front: 'What are the components on a Worker Node?', back: '1. kubelet: Agent that ensures containers are running in pods\n2. kube-proxy: Network proxy, maintains network rules\n3. Container Runtime: Runs containers (containerd, CRI-O, Docker)\nWorker nodes run the actual application workloads.', category: 'Architecture', difficulty: 'intermediate' },
    { id: 'fc-k8s-3', front: 'What is etcd in Kubernetes?', back: 'Distributed, reliable key-value store that stores ALL cluster data:\n- Configuration\n- State\n- Metadata\nOnly API Server communicates with etcd. Critical for cluster - back it up regularly!', category: 'Architecture', difficulty: 'intermediate' },
    { id: 'fc-k8s-4', front: 'What is the role of the Kubernetes Scheduler?', back: 'Watches for new Pods with no assigned node and selects a node based on:\n- Resource requirements (CPU, memory)\n- Affinity/Anti-affinity rules\n- Taints and Tolerations\n- Node selector\n- Pod priority', category: 'Architecture', difficulty: 'intermediate' },

    // ============ PODS ============
    { id: 'fc-k8s-5', front: 'What is a Pod in Kubernetes?', back: 'Smallest deployable unit. Contains one or more containers that:\n- Share network namespace (same IP)\n- Share storage volumes\n- Are co-located and co-scheduled\nPods are ephemeral - they can be created, destroyed, and replaced.', category: 'Pods', difficulty: 'beginner' },
    { id: 'fc-k8s-6', front: 'Why would you run multiple containers in a Pod?', back: 'Sidecar patterns:\n1. Logging/monitoring sidecars\n2. Proxy containers (service mesh)\n3. Init containers (setup)\n4. Adapter containers (format conversion)\nContainers share localhost and volumes.', category: 'Pods', difficulty: 'intermediate' },
    { id: 'fc-k8s-7', front: 'What are Init Containers?', back: 'Special containers that run BEFORE app containers start. Used for:\n- Setup scripts\n- Waiting for dependencies\n- Downloading configs\nRun to completion in order. If one fails, pod restarts.', category: 'Pods', difficulty: 'intermediate' },
    { id: 'fc-k8s-8', front: 'What are the Pod phases/states?', back: 'Pending: Accepted but not running (scheduling, pulling images)\nRunning: At least one container running\nSucceeded: All containers completed successfully\nFailed: All containers terminated, at least one failed\nUnknown: Cannot get pod state', category: 'Pods', difficulty: 'intermediate' },

    // ============ REPLICASETS ============
    { id: 'fc-k8s-9', front: 'What is a ReplicaSet?', back: 'Ensures a specified number of pod replicas are running at any time. Features:\n- Uses label selectors to identify pods\n- Creates/deletes pods to match desired count\n- Usually managed by Deployments (not directly)', category: 'ReplicaSets', difficulty: 'beginner' },
    { id: 'fc-k8s-10', front: 'What is the difference between ReplicaSet and ReplicationController?', back: 'ReplicaSet is the newer version with richer label selectors:\n- ReplicationController: equality-based selectors only (=, !=)\n- ReplicaSet: set-based selectors (in, notin, exists)\nAlways use ReplicaSet (via Deployments).', category: 'ReplicaSets', difficulty: 'intermediate' },

    // ============ DEPLOYMENTS ============
    { id: 'fc-k8s-11', front: 'What is a Deployment in Kubernetes?', back: 'Declarative way to manage Pods and ReplicaSets. Provides:\n- Rolling updates\n- Rollbacks\n- Scaling\n- Pause/Resume\nDeployment → manages → ReplicaSet → manages → Pods', category: 'Deployments', difficulty: 'beginner' },
    { id: 'fc-k8s-12', front: 'What is a Rolling Update in Kubernetes?', back: 'Gradually replaces old pods with new ones:\n1. Creates new ReplicaSet\n2. Scales up new, scales down old incrementally\n3. Zero downtime\nControlled by maxSurge (extra pods) and maxUnavailable.', category: 'Deployments', difficulty: 'intermediate' },
    { id: 'fc-k8s-13', front: 'How do you rollback a Deployment?', back: 'kubectl rollout undo deployment <name>\n\nOr to specific revision:\nkubectl rollout undo deployment <name> --to-revision=2\n\nView history:\nkubectl rollout history deployment <name>', category: 'Deployments', difficulty: 'intermediate' },
    { id: 'fc-k8s-14', front: 'What deployment strategies are available?', back: 'RollingUpdate (default): Gradual replacement, zero downtime\nRecreate: Kill all old pods, then create new (has downtime)\n\nBlue/Green and Canary are implemented via services/ingress, not native strategies.', category: 'Deployments', difficulty: 'intermediate' },

    // ============ SERVICES ============
    { id: 'fc-k8s-15', front: 'What is a Kubernetes Service?', back: 'Stable network endpoint for a set of Pods. Provides:\n- Stable IP (ClusterIP)\n- DNS name (service.namespace.svc.cluster.local)\n- Load balancing across pods\nPods are ephemeral, Services are stable.', category: 'Services', difficulty: 'beginner' },
    { id: 'fc-k8s-16', front: 'What are the Service types in Kubernetes?', back: 'ClusterIP: Internal only (default)\nNodePort: Exposes on each node\'s IP at static port (30000-32767)\nLoadBalancer: Creates cloud load balancer\nExternalName: Maps to DNS name\nHeadless: No ClusterIP, returns pod IPs directly', category: 'Services', difficulty: 'intermediate' },
    { id: 'fc-k8s-17', front: 'How does service discovery work in Kubernetes?', back: 'Two methods:\n1. DNS: service.namespace.svc.cluster.local\n2. Environment variables: SERVICE_HOST, SERVICE_PORT\n\nKubernetes DNS (CoreDNS) automatically creates DNS records for services.', category: 'Services', difficulty: 'intermediate' },
    { id: 'fc-k8s-18', front: 'What is a Headless Service?', back: 'Service with clusterIP: None. Instead of load balancing:\n- DNS returns all Pod IPs directly\n- Used with StatefulSets\n- Allows direct pod communication\n- Example: database clusters', category: 'Services', difficulty: 'advanced' },

    // ============ INGRESS ============
    { id: 'fc-k8s-19', front: 'What is Ingress in Kubernetes?', back: 'API object that manages external access to services. Provides:\n- HTTP/HTTPS routing\n- Path-based routing (/api → service1)\n- Host-based routing (api.example.com)\n- TLS termination\nRequires an Ingress Controller (nginx, traefik).', category: 'Ingress', difficulty: 'intermediate' },
    { id: 'fc-k8s-20', front: 'What is an Ingress Controller?', back: 'Implementation that fulfills Ingress rules. Popular options:\n- NGINX Ingress Controller\n- Traefik\n- HAProxy\n- AWS ALB Ingress\n- Istio Gateway\nIngress resource is useless without a controller.', category: 'Ingress', difficulty: 'intermediate' },

    // ============ CONFIGMAPS & SECRETS ============
    { id: 'fc-k8s-21', front: 'What is a ConfigMap?', back: 'Stores non-confidential configuration data as key-value pairs. Can be consumed as:\n- Environment variables\n- Command-line arguments\n- Config files in volumes\nDecouples configuration from container images.', category: 'Config', difficulty: 'beginner' },
    { id: 'fc-k8s-22', front: 'What is a Secret in Kubernetes?', back: 'Stores sensitive data (passwords, tokens, keys). Features:\n- Base64 encoded (NOT encrypted by default)\n- Can be encrypted at rest with KMS\n- Mounted as files or env vars\n- Types: Opaque, docker-registry, tls, etc.', category: 'Config', difficulty: 'beginner' },
    { id: 'fc-k8s-23', front: 'How do you use ConfigMaps/Secrets in Pods?', back: '1. Environment variables:\n   envFrom: configMapRef/secretRef\n2. Individual env vars:\n   valueFrom: configMapKeyRef/secretKeyRef\n3. Volume mount:\n   volumes: configMap/secret → volumeMounts', category: 'Config', difficulty: 'intermediate' },

    // ============ STATEFULSETS ============
    { id: 'fc-k8s-24', front: 'What is a StatefulSet?', back: 'Manages stateful applications. Provides:\n- Stable, unique pod names (app-0, app-1)\n- Stable network identities\n- Ordered deployment/scaling\n- Persistent storage per pod\nUsed for databases, Kafka, Zookeeper.', category: 'StatefulSets', difficulty: 'intermediate' },
    { id: 'fc-k8s-25', front: 'When to use StatefulSet vs Deployment?', back: 'Deployment: Stateless apps, all pods identical, any pod can be replaced\n\nStatefulSet: Stateful apps needing:\n- Stable network identity\n- Ordered operations\n- Persistent storage per pod\n- Examples: MySQL, MongoDB, Kafka', category: 'StatefulSets', difficulty: 'intermediate' },

    // ============ HELM ============
    { id: 'fc-k8s-26', front: 'What is Helm?', back: 'Package manager for Kubernetes. Components:\n- Charts: Package of K8s resources\n- Release: Instance of a chart\n- Repository: Collection of charts\nSimplifies deployment of complex applications.', category: 'Helm', difficulty: 'beginner' },
    { id: 'fc-k8s-27', front: 'What is a Helm Chart?', back: 'Collection of files describing K8s resources:\n- Chart.yaml: Metadata\n- values.yaml: Default configuration\n- templates/: K8s manifest templates\n- charts/: Dependencies\nAllows parameterized, reusable deployments.', category: 'Helm', difficulty: 'intermediate' },
    { id: 'fc-k8s-28', front: 'What is the difference between helm install and helm upgrade?', back: 'helm install: Creates NEW release\nhelm upgrade: Updates EXISTING release\n\nhelm upgrade --install: Install if not exists, upgrade if exists (idempotent)', category: 'Helm', difficulty: 'intermediate' },

    // ============ STORAGE ============
    { id: 'fc-k8s-29', front: 'What is a PersistentVolume (PV)?', back: 'Cluster-level storage resource provisioned by admin or dynamically. Properties:\n- Capacity\n- Access modes (ReadWriteOnce, ReadOnlyMany, ReadWriteMany)\n- Reclaim policy (Retain, Delete)\n- Storage class', category: 'Storage', difficulty: 'intermediate' },
    { id: 'fc-k8s-30', front: 'What is a PersistentVolumeClaim (PVC)?', back: 'Request for storage by a user. Binds to a PV that meets requirements:\n- Size\n- Access modes\n- Storage class\nPods use PVCs, not PVs directly. Abstracts storage details.', category: 'Storage', difficulty: 'intermediate' },

    // ============ NETWORKING ============
    { id: 'fc-k8s-31', front: 'What are Kubernetes Network Policies?', back: 'Firewall rules for pods. Control:\n- Ingress (incoming traffic)\n- Egress (outgoing traffic)\nBy default, pods accept all traffic. Policies are additive (whitelist).', category: 'Networking', difficulty: 'advanced' },

    // ============ SCHEDULING ============
    { id: 'fc-k8s-32', front: 'What are Taints and Tolerations?', back: 'Taints: Applied to NODES to repel pods\nTolerations: Applied to PODS to allow scheduling on tainted nodes\n\nExample: Taint GPU nodes, only GPU workloads tolerate it.\nTaint effects: NoSchedule, PreferNoSchedule, NoExecute', category: 'Scheduling', difficulty: 'advanced' },
    { id: 'fc-k8s-33', front: 'What is Node Affinity?', back: 'Rules that constrain pod scheduling based on node labels:\n- requiredDuringSchedulingIgnoredDuringExecution (hard)\n- preferredDuringSchedulingIgnoredDuringExecution (soft)\nExample: Schedule on nodes with SSD storage.', category: 'Scheduling', difficulty: 'advanced' },
    { id: 'fc-k8s-34', front: 'What is Pod Affinity/Anti-Affinity?', back: 'Schedule pods relative to OTHER pods:\n- Affinity: Co-locate pods (e.g., app + cache)\n- Anti-Affinity: Spread pods (e.g., replicas on different nodes)\nBased on labels and topology (node, zone).', category: 'Scheduling', difficulty: 'advanced' },

    // ============ RESOURCE MANAGEMENT ============
    { id: 'fc-k8s-35', front: 'What are Resource Requests and Limits?', back: 'Requests: Guaranteed resources (used for scheduling)\nLimits: Maximum resources (enforced at runtime)\n\nresources:\n  requests: {cpu: "100m", memory: "128Mi"}\n  limits: {cpu: "500m", memory: "256Mi"}', category: 'Resources', difficulty: 'intermediate' },
  ],

  quizQuestions: [
    // ============ ARCHITECTURE ============
    {
      id: 'q-k8s-1',
      question: 'Which component stores all cluster data in Kubernetes?',
      options: ['API Server', 'etcd', 'Scheduler', 'Controller Manager'],
      correctAnswer: 1,
      explanation: 'etcd is a distributed key-value store that holds all cluster state, configuration, and metadata.',
      category: 'Architecture'
    },
    {
      id: 'q-k8s-2',
      question: 'What is the role of kubelet?',
      options: ['Schedules pods', 'Stores cluster data', 'Ensures containers run in pods', 'Routes network traffic'],
      correctAnswer: 2,
      explanation: 'kubelet is the agent on each node that ensures containers are running in pods as expected.',
      category: 'Architecture'
    },
    {
      id: 'q-k8s-3',
      question: 'Which component decides which node a pod runs on?',
      options: ['kubelet', 'kube-proxy', 'Scheduler', 'Controller Manager'],
      correctAnswer: 2,
      explanation: 'The Scheduler watches for new pods and assigns them to nodes based on resources and constraints.',
      category: 'Architecture'
    },

    // ============ PODS ============
    {
      id: 'q-k8s-4',
      question: 'What is the smallest deployable unit in Kubernetes?',
      options: ['Container', 'Pod', 'Deployment', 'Node'],
      correctAnswer: 1,
      explanation: 'A Pod is the smallest deployable unit, containing one or more containers that share network and storage.',
      category: 'Pods'
    },
    {
      id: 'q-k8s-5',
      question: 'What do containers in the same Pod share?',
      options: ['Only CPU', 'Only Memory', 'Network namespace and volumes', 'Nothing'],
      correctAnswer: 2,
      explanation: 'Containers in a Pod share the same network namespace (IP) and can share storage volumes.',
      category: 'Pods'
    },
    {
      id: 'q-k8s-6',
      question: 'What is an Init Container?',
      options: ['Main application container', 'Container that runs before app containers', 'Sidecar container', 'Logging container'],
      correctAnswer: 1,
      explanation: 'Init containers run to completion before app containers start. Used for setup and initialization.',
      category: 'Pods'
    },

    // ============ DEPLOYMENTS ============
    {
      id: 'q-k8s-7',
      question: 'What does a Deployment manage?',
      options: ['Nodes', 'ReplicaSets and Pods', 'Services', 'Namespaces'],
      correctAnswer: 1,
      explanation: 'A Deployment manages ReplicaSets, which in turn manage Pods. Deployment → ReplicaSet → Pods.',
      category: 'Deployments'
    },
    {
      id: 'q-k8s-8',
      question: 'What is the default deployment strategy?',
      options: ['Recreate', 'RollingUpdate', 'Blue-Green', 'Canary'],
      correctAnswer: 1,
      explanation: 'RollingUpdate is the default, gradually replacing old pods with new ones for zero downtime.',
      category: 'Deployments'
    },
    {
      id: 'q-k8s-9',
      question: 'How do you rollback a Deployment?',
      options: ['kubectl rollback', 'kubectl undo', 'kubectl rollout undo', 'kubectl revert'],
      correctAnswer: 2,
      explanation: 'kubectl rollout undo deployment <name> rolls back to the previous revision.',
      category: 'Deployments'
    },

    // ============ SERVICES ============
    {
      id: 'q-k8s-10',
      question: 'What is the default Service type?',
      options: ['NodePort', 'LoadBalancer', 'ClusterIP', 'ExternalName'],
      correctAnswer: 2,
      explanation: 'ClusterIP is the default, creating an internal-only IP accessible within the cluster.',
      category: 'Services'
    },
    {
      id: 'q-k8s-11',
      question: 'Which Service type exposes a port on every node?',
      options: ['ClusterIP', 'NodePort', 'LoadBalancer', 'Headless'],
      correctAnswer: 1,
      explanation: 'NodePort exposes the service on each node\'s IP at a static port (30000-32767).',
      category: 'Services'
    },
    {
      id: 'q-k8s-12',
      question: 'What is a Headless Service used for?',
      options: ['Load balancing', 'External access', 'Direct pod communication without load balancing', 'SSL termination'],
      correctAnswer: 2,
      explanation: 'Headless Service (clusterIP: None) returns pod IPs directly, used with StatefulSets for direct communication.',
      category: 'Services'
    },

    // ============ INGRESS ============
    {
      id: 'q-k8s-13',
      question: 'What is required for Ingress to work?',
      options: ['LoadBalancer Service', 'Ingress Controller', 'NodePort Service', 'External DNS'],
      correctAnswer: 1,
      explanation: 'An Ingress Controller (like NGINX or Traefik) is required to implement Ingress rules.',
      category: 'Ingress'
    },

    // ============ CONFIG ============
    {
      id: 'q-k8s-14',
      question: 'How are Secrets stored by default in Kubernetes?',
      options: ['Encrypted', 'Base64 encoded', 'Plain text', 'Hashed'],
      correctAnswer: 1,
      explanation: 'Secrets are Base64 encoded by default, NOT encrypted. Enable encryption at rest for security.',
      category: 'Config'
    },
    {
      id: 'q-k8s-15',
      question: 'What is the difference between ConfigMap and Secret?',
      options: ['No difference', 'ConfigMap is encrypted', 'Secret is for sensitive data, ConfigMap for non-sensitive', 'ConfigMap is larger'],
      correctAnswer: 2,
      explanation: 'Secrets are for sensitive data (base64 encoded, can be encrypted). ConfigMaps are for non-sensitive configuration.',
      category: 'Config'
    },

    // ============ STATEFULSETS ============
    {
      id: 'q-k8s-16',
      question: 'When should you use StatefulSet instead of Deployment?',
      options: ['Stateless web apps', 'Databases needing stable identity', 'Simple APIs', 'Batch jobs'],
      correctAnswer: 1,
      explanation: 'StatefulSets provide stable network identities, ordered operations, and persistent storage for stateful apps like databases.',
      category: 'StatefulSets'
    },
    {
      id: 'q-k8s-17',
      question: 'What naming convention do StatefulSet pods follow?',
      options: ['Random hash', 'Sequential: name-0, name-1, name-2', 'UUID', 'Timestamp'],
      correctAnswer: 1,
      explanation: 'StatefulSet pods have predictable names: <statefulset-name>-0, <statefulset-name>-1, etc.',
      category: 'StatefulSets'
    },

    // ============ HELM ============
    {
      id: 'q-k8s-18',
      question: 'What is a Helm Chart?',
      options: ['Kubernetes node', 'Package of Kubernetes resources', 'Monitoring dashboard', 'Network policy'],
      correctAnswer: 1,
      explanation: 'A Helm Chart is a package containing Kubernetes resource templates and configuration values.',
      category: 'Helm'
    },
    {
      id: 'q-k8s-19',
      question: 'What command installs a Helm chart?',
      options: ['helm deploy', 'helm apply', 'helm install', 'helm create'],
      correctAnswer: 2,
      explanation: 'helm install <release-name> <chart> installs a chart as a new release.',
      category: 'Helm'
    },

    // ============ SCHEDULING ============
    {
      id: 'q-k8s-20',
      question: 'What are Taints applied to?',
      options: ['Pods', 'Nodes', 'Services', 'Deployments'],
      correctAnswer: 1,
      explanation: 'Taints are applied to Nodes to repel pods. Pods need Tolerations to be scheduled on tainted nodes.',
      category: 'Scheduling'
    },

    // ============ STORAGE ============
    {
      id: 'q-k8s-21',
      question: 'What is the relationship between PV and PVC?',
      options: ['PV requests PVC', 'PVC claims/binds to PV', 'They are the same', 'PV is inside PVC'],
      correctAnswer: 1,
      explanation: 'PersistentVolumeClaim (PVC) requests storage and binds to a matching PersistentVolume (PV).',
      category: 'Storage'
    },

    // ============ RESOURCES ============
    {
      id: 'q-k8s-22',
      question: 'What is the purpose of resource requests?',
      options: ['Maximum allowed', 'Used for scheduling decisions', 'Billing only', 'Logging'],
      correctAnswer: 1,
      explanation: 'Resource requests are guaranteed and used by the scheduler to find nodes with available capacity.',
      category: 'Resources'
    },
  ],
};

