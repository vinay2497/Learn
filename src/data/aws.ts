import { TopicData } from '@/types';

export const awsData: TopicData = {
  name: 'AWS',
  description: 'Amazon Web Services cloud platform - compute, storage, networking, and more',
  icon: '☁️',
  color: '#FF9900',
  gradient: 'from-orange-400 via-amber-500 to-yellow-500',
  commands: [
    // ============ AWS CLI BASICS ============
    { id: 'aws-1', command: 'aws configure', description: 'Configure AWS CLI credentials', example: 'aws configure --profile prod', category: 'CLI', difficulty: 'beginner' },
    { id: 'aws-2', command: 'aws sts get-caller-identity', description: 'Get current IAM identity', example: 'aws sts get-caller-identity', category: 'CLI', difficulty: 'beginner' },
    { id: 'aws-3', command: 'aws --version', description: 'Check AWS CLI version', example: 'aws --version', category: 'CLI', difficulty: 'beginner' },
    { id: 'aws-4', command: 'aws <service> help', description: 'Get help for a service', example: 'aws ec2 help', category: 'CLI', difficulty: 'beginner' },

    // ============ EC2 ============
    { id: 'aws-5', command: 'aws ec2 describe-instances', description: 'List EC2 instances', example: 'aws ec2 describe-instances --filters "Name=instance-state-name,Values=running"', category: 'EC2', difficulty: 'beginner' },
    { id: 'aws-6', command: 'aws ec2 start-instances --instance-ids <id>', description: 'Start EC2 instance', example: 'aws ec2 start-instances --instance-ids i-1234567890abcdef0', category: 'EC2', difficulty: 'beginner' },
    { id: 'aws-7', command: 'aws ec2 stop-instances --instance-ids <id>', description: 'Stop EC2 instance', example: 'aws ec2 stop-instances --instance-ids i-1234567890abcdef0', category: 'EC2', difficulty: 'beginner' },
    { id: 'aws-8', command: 'aws ec2 terminate-instances --instance-ids <id>', description: 'Terminate EC2 instance', example: 'aws ec2 terminate-instances --instance-ids i-1234567890abcdef0', category: 'EC2', difficulty: 'beginner' },
    { id: 'aws-9', command: 'aws ec2 describe-security-groups', description: 'List security groups', example: 'aws ec2 describe-security-groups', category: 'EC2', difficulty: 'intermediate' },
    { id: 'aws-10', command: 'aws ec2 describe-vpcs', description: 'List VPCs', example: 'aws ec2 describe-vpcs', category: 'EC2', difficulty: 'intermediate' },
    { id: 'aws-11', command: 'aws ec2 describe-subnets', description: 'List subnets', example: 'aws ec2 describe-subnets --filters "Name=vpc-id,Values=vpc-xxx"', category: 'EC2', difficulty: 'intermediate' },
    { id: 'aws-12', command: 'aws ec2 create-key-pair --key-name <name>', description: 'Create SSH key pair', example: 'aws ec2 create-key-pair --key-name mykey', category: 'EC2', difficulty: 'intermediate' },

    // ============ S3 ============
    { id: 'aws-13', command: 'aws s3 ls', description: 'List S3 buckets', example: 'aws s3 ls s3://bucket-name/', category: 'S3', difficulty: 'beginner' },
    { id: 'aws-14', command: 'aws s3 cp <src> <dest>', description: 'Copy files to/from S3', example: 'aws s3 cp file.txt s3://bucket/file.txt', category: 'S3', difficulty: 'beginner' },
    { id: 'aws-15', command: 'aws s3 sync <src> <dest>', description: 'Sync directories with S3', example: 'aws s3 sync ./local s3://bucket/path', category: 'S3', difficulty: 'beginner' },
    { id: 'aws-16', command: 'aws s3 mb s3://<bucket-name>', description: 'Create S3 bucket', example: 'aws s3 mb s3://my-bucket-name', category: 'S3', difficulty: 'beginner' },
    { id: 'aws-17', command: 'aws s3 rb s3://<bucket-name>', description: 'Delete S3 bucket', example: 'aws s3 rb s3://my-bucket --force', category: 'S3', difficulty: 'beginner' },
    { id: 'aws-18', command: 'aws s3 rm s3://<bucket>/<key>', description: 'Delete S3 object', example: 'aws s3 rm s3://bucket/file.txt', category: 'S3', difficulty: 'beginner' },
    { id: 'aws-19', command: 'aws s3 presign s3://<bucket>/<key>', description: 'Generate presigned URL', example: 'aws s3 presign s3://bucket/file.txt --expires-in 3600', category: 'S3', difficulty: 'intermediate' },

    // ============ IAM ============
    { id: 'aws-20', command: 'aws iam list-users', description: 'List IAM users', example: 'aws iam list-users', category: 'IAM', difficulty: 'beginner' },
    { id: 'aws-21', command: 'aws iam list-roles', description: 'List IAM roles', example: 'aws iam list-roles', category: 'IAM', difficulty: 'beginner' },
    { id: 'aws-22', command: 'aws iam list-policies', description: 'List IAM policies', example: 'aws iam list-policies --scope Local', category: 'IAM', difficulty: 'intermediate' },
    { id: 'aws-23', command: 'aws iam create-user --user-name <name>', description: 'Create IAM user', example: 'aws iam create-user --user-name john', category: 'IAM', difficulty: 'intermediate' },
    { id: 'aws-24', command: 'aws iam attach-user-policy', description: 'Attach policy to user', example: 'aws iam attach-user-policy --user-name john --policy-arn arn:aws:iam::aws:policy/ReadOnlyAccess', category: 'IAM', difficulty: 'intermediate' },
    { id: 'aws-25', command: 'aws iam create-role', description: 'Create IAM role', example: 'aws iam create-role --role-name myrole --assume-role-policy-document file://trust.json', category: 'IAM', difficulty: 'intermediate' },

    // ============ LAMBDA ============
    { id: 'aws-26', command: 'aws lambda list-functions', description: 'List Lambda functions', example: 'aws lambda list-functions', category: 'Lambda', difficulty: 'beginner' },
    { id: 'aws-27', command: 'aws lambda invoke', description: 'Invoke Lambda function', example: 'aws lambda invoke --function-name myFunc output.json', category: 'Lambda', difficulty: 'intermediate' },
    { id: 'aws-28', command: 'aws lambda update-function-code', description: 'Update function code', example: 'aws lambda update-function-code --function-name myFunc --zip-file fileb://code.zip', category: 'Lambda', difficulty: 'intermediate' },
    { id: 'aws-29', command: 'aws lambda create-function', description: 'Create Lambda function', example: 'aws lambda create-function --function-name myFunc --runtime python3.9 --handler index.handler --role arn:aws:iam::xxx:role/xxx --zip-file fileb://code.zip', category: 'Lambda', difficulty: 'intermediate' },

    // ============ RDS ============
    { id: 'aws-30', command: 'aws rds describe-db-instances', description: 'List RDS instances', example: 'aws rds describe-db-instances', category: 'RDS', difficulty: 'beginner' },
    { id: 'aws-31', command: 'aws rds create-db-snapshot', description: 'Create RDS snapshot', example: 'aws rds create-db-snapshot --db-instance-identifier mydb --db-snapshot-identifier mysnapshot', category: 'RDS', difficulty: 'intermediate' },
    { id: 'aws-32', command: 'aws rds start-db-instance', description: 'Start RDS instance', example: 'aws rds start-db-instance --db-instance-identifier mydb', category: 'RDS', difficulty: 'beginner' },
    { id: 'aws-33', command: 'aws rds stop-db-instance', description: 'Stop RDS instance', example: 'aws rds stop-db-instance --db-instance-identifier mydb', category: 'RDS', difficulty: 'beginner' },

    // ============ ECS/EKS ============
    { id: 'aws-34', command: 'aws ecs list-clusters', description: 'List ECS clusters', example: 'aws ecs list-clusters', category: 'ECS', difficulty: 'intermediate' },
    { id: 'aws-35', command: 'aws ecs list-services --cluster <name>', description: 'List ECS services', example: 'aws ecs list-services --cluster mycluster', category: 'ECS', difficulty: 'intermediate' },
    { id: 'aws-36', command: 'aws ecs update-service', description: 'Update ECS service', example: 'aws ecs update-service --cluster mycluster --service myservice --force-new-deployment', category: 'ECS', difficulty: 'intermediate' },
    { id: 'aws-37', command: 'aws eks list-clusters', description: 'List EKS clusters', example: 'aws eks list-clusters', category: 'EKS', difficulty: 'intermediate' },
    { id: 'aws-38', command: 'aws eks update-kubeconfig --name <cluster>', description: 'Update kubeconfig for EKS', example: 'aws eks update-kubeconfig --name mycluster --region us-east-1', category: 'EKS', difficulty: 'intermediate' },

    // ============ CLOUDFORMATION ============
    { id: 'aws-39', command: 'aws cloudformation create-stack', description: 'Create CloudFormation stack', example: 'aws cloudformation create-stack --stack-name mystack --template-body file://template.yaml', category: 'CloudFormation', difficulty: 'intermediate' },
    { id: 'aws-40', command: 'aws cloudformation update-stack', description: 'Update CloudFormation stack', example: 'aws cloudformation update-stack --stack-name mystack --template-body file://template.yaml', category: 'CloudFormation', difficulty: 'intermediate' },
    { id: 'aws-41', command: 'aws cloudformation delete-stack', description: 'Delete CloudFormation stack', example: 'aws cloudformation delete-stack --stack-name mystack', category: 'CloudFormation', difficulty: 'intermediate' },
    { id: 'aws-42', command: 'aws cloudformation describe-stacks', description: 'List CloudFormation stacks', example: 'aws cloudformation describe-stacks --stack-name mystack', category: 'CloudFormation', difficulty: 'intermediate' },

    // ============ CLOUDWATCH ============
    { id: 'aws-43', command: 'aws logs describe-log-groups', description: 'List CloudWatch log groups', example: 'aws logs describe-log-groups', category: 'CloudWatch', difficulty: 'beginner' },
    { id: 'aws-44', command: 'aws logs tail <log-group>', description: 'Tail CloudWatch logs', example: 'aws logs tail /aws/lambda/myFunc --follow', category: 'CloudWatch', difficulty: 'intermediate' },
    { id: 'aws-45', command: 'aws cloudwatch list-metrics', description: 'List CloudWatch metrics', example: 'aws cloudwatch list-metrics --namespace AWS/EC2', category: 'CloudWatch', difficulty: 'intermediate' },

    // ============ ROUTE53 ============
    { id: 'aws-46', command: 'aws route53 list-hosted-zones', description: 'List Route53 hosted zones', example: 'aws route53 list-hosted-zones', category: 'Route53', difficulty: 'intermediate' },
    { id: 'aws-47', command: 'aws route53 list-resource-record-sets', description: 'List DNS records', example: 'aws route53 list-resource-record-sets --hosted-zone-id Z123456', category: 'Route53', difficulty: 'intermediate' },

    // ============ ECR ============
    { id: 'aws-48', command: 'aws ecr get-login-password | docker login', description: 'Login to ECR', example: 'aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin xxx.dkr.ecr.us-east-1.amazonaws.com', category: 'ECR', difficulty: 'intermediate' },
    { id: 'aws-49', command: 'aws ecr describe-repositories', description: 'List ECR repositories', example: 'aws ecr describe-repositories', category: 'ECR', difficulty: 'intermediate' },
    { id: 'aws-50', command: 'aws ecr create-repository --repository-name <name>', description: 'Create ECR repository', example: 'aws ecr create-repository --repository-name myapp', category: 'ECR', difficulty: 'intermediate' },
  ],

  flashcards: [
    // ============ AWS FUNDAMENTALS ============
    { id: 'fc-aws-1', front: 'What is an AWS Region?', back: 'Geographic area with multiple Availability Zones. Each region is completely isolated. Choose based on:\n- Latency to users\n- Data compliance requirements\n- Service availability\n- Pricing\nExamples: us-east-1, eu-west-1, ap-southeast-1', category: 'Fundamentals', difficulty: 'beginner' },
    { id: 'fc-aws-2', front: 'What is an Availability Zone (AZ)?', back: 'One or more data centers with redundant power, networking, and connectivity within a Region.\n- Each region has 2-6 AZs\n- AZs are physically separated\n- Connected by high-speed, low-latency links\n- Names like us-east-1a, us-east-1b', category: 'Fundamentals', difficulty: 'beginner' },
    { id: 'fc-aws-3', front: 'What is the AWS Shared Responsibility Model?', back: 'AWS Responsible for: Security OF the cloud\n- Physical security, hardware, networking, hypervisor\n\nCustomer Responsible for: Security IN the cloud\n- Data, OS, applications, IAM, firewall config, encryption', category: 'Fundamentals', difficulty: 'beginner' },
    { id: 'fc-aws-4', front: 'What are AWS Edge Locations?', back: 'Data centers for content delivery (CloudFront CDN). Located in major cities worldwide.\n- Cache content close to users\n- Reduce latency\n- Also used by Route 53, Shield, WAF\nMore edge locations than regions.', category: 'Fundamentals', difficulty: 'beginner' },
    { id: 'fc-aws-5', front: 'What are the AWS pricing models?', back: 'On-Demand: Pay by hour/second, no commitment\nReserved: 1-3 year commitment, up to 72% discount\nSavings Plans: Flexible compute commitment\nSpot: Bid on unused capacity, up to 90% off, can be interrupted\nDedicated: Physical server dedicated to you', category: 'Fundamentals', difficulty: 'intermediate' },

    // ============ IAM ============
    { id: 'fc-aws-6', front: 'What is IAM?', back: 'Identity and Access Management. Controls WHO can do WHAT:\n- Users: People\n- Groups: Collection of users\n- Roles: Assumed by services/users temporarily\n- Policies: JSON documents defining permissions\nGlobal service (not region-specific).', category: 'IAM', difficulty: 'beginner' },
    { id: 'fc-aws-7', front: 'What is an IAM Policy?', back: 'JSON document defining permissions. Structure:\n- Version: "2012-10-17"\n- Statement: Array of permissions\n  - Effect: Allow/Deny\n  - Action: What actions (s3:GetObject)\n  - Resource: Which resources (arn:aws:s3:::bucket/*)\n  - Condition: Optional conditions', category: 'IAM', difficulty: 'intermediate' },
    { id: 'fc-aws-8', front: 'What is the principle of Least Privilege?', back: 'Grant only the minimum permissions needed to perform a task. Best practices:\n- Start with no permissions\n- Add only what\'s needed\n- Use specific resources, not *\n- Review and remove unused permissions\n- Use IAM Access Analyzer', category: 'IAM', difficulty: 'beginner' },
    { id: 'fc-aws-9', front: 'What is an IAM Role vs User?', back: 'User: Long-term credentials for people\n- Has password, access keys\n- Belongs to one account\n\nRole: Temporary credentials assumed by:\n- EC2 instances\n- Lambda functions\n- Other AWS services\n- Users (cross-account)', category: 'IAM', difficulty: 'intermediate' },
    { id: 'fc-aws-10', front: 'What is AWS STS (Security Token Service)?', back: 'Provides temporary security credentials:\n- AssumeRole: Assume an IAM role\n- GetSessionToken: MFA-enabled temp credentials\n- GetFederationToken: Federation\nCredentials expire (15 min to 12 hours).', category: 'IAM', difficulty: 'intermediate' },

    // ============ EC2 ============
    { id: 'fc-aws-11', front: 'What is EC2?', back: 'Elastic Compute Cloud - virtual servers in AWS.\nComponents:\n- Instance: Virtual server\n- AMI: Machine image (OS + software)\n- Instance Type: CPU, memory, storage specs\n- EBS: Persistent storage\n- Security Group: Firewall\n- Key Pair: SSH access', category: 'EC2', difficulty: 'beginner' },
    { id: 'fc-aws-12', front: 'What are EC2 instance types?', back: 'Categories by use case:\n- General Purpose (t3, m5): Balanced\n- Compute Optimized (c5): High CPU\n- Memory Optimized (r5): High RAM\n- Storage Optimized (i3): High I/O\n- Accelerated (p3, g4): GPU\nNaming: m5.large = family + generation.size', category: 'EC2', difficulty: 'intermediate' },
    { id: 'fc-aws-13', front: 'What is an AMI?', back: 'Amazon Machine Image - template for EC2 instances.\nContains:\n- OS (Linux, Windows)\n- Pre-installed software\n- Launch permissions\n- EBS volume mapping\nTypes: AWS provided, Marketplace, Community, Custom', category: 'EC2', difficulty: 'beginner' },
    { id: 'fc-aws-14', front: 'What is EC2 Auto Scaling?', back: 'Automatically adjusts EC2 capacity:\n- Scale out: Add instances when demand increases\n- Scale in: Remove instances when demand decreases\nComponents:\n- Launch Template: Instance config\n- Auto Scaling Group: Min/Max/Desired count\n- Scaling Policy: When to scale', category: 'EC2', difficulty: 'intermediate' },
    { id: 'fc-aws-15', front: 'What are EC2 Placement Groups?', back: 'Cluster: Same rack, low latency, high throughput (HPC)\nSpread: Different racks/AZs, max 7 per AZ (critical apps)\nPartition: Distributed across partitions (Hadoop, Kafka)\nUse case determines which to choose.', category: 'EC2', difficulty: 'advanced' },

    // ============ S3 ============
    { id: 'fc-aws-16', front: 'What is S3?', back: 'Simple Storage Service - object storage.\n- Buckets: Containers for objects (globally unique name)\n- Objects: Files up to 5TB\n- Keys: Object path/name\n- Durability: 99.999999999% (11 9s)\n- Availability: 99.99%', category: 'S3', difficulty: 'beginner' },
    { id: 'fc-aws-17', front: 'What are S3 storage classes?', back: 'Standard: Frequent access, low latency\nIntelligent-Tiering: Auto-moves data\nStandard-IA: Infrequent, quick retrieval\nOne Zone-IA: Single AZ, cheaper\nGlacier Instant: Archive, milliseconds retrieval\nGlacier Flexible: Archive, minutes-hours\nGlacier Deep Archive: Cheapest, 12+ hours', category: 'S3', difficulty: 'intermediate' },
    { id: 'fc-aws-18', front: 'What are S3 Lifecycle Policies?', back: 'Automate object transitions and deletion:\n- Transition: Move to cheaper storage class after X days\n- Expiration: Delete objects after X days\n- Clean up incomplete multipart uploads\nExample: Move to IA after 30 days, Glacier after 90, delete after 365.', category: 'S3', difficulty: 'intermediate' },
    { id: 'fc-aws-19', front: 'What is S3 Versioning?', back: 'Keep multiple versions of objects.\n- Protection against accidental deletion\n- Deleted objects have delete marker (recoverable)\n- Each version has unique ID\n- Can use lifecycle to expire old versions\nOnce enabled, cannot be disabled (only suspended).', category: 'S3', difficulty: 'intermediate' },

    // ============ VPC ============
    { id: 'fc-aws-20', front: 'What is a VPC?', back: 'Virtual Private Cloud - isolated network in AWS.\nComponents:\n- CIDR block (IP range)\n- Subnets (public/private)\n- Route Tables\n- Internet Gateway\n- NAT Gateway\n- Security Groups\n- Network ACLs', category: 'VPC', difficulty: 'beginner' },
    { id: 'fc-aws-21', front: 'What is the difference between Public and Private subnets?', back: 'Public Subnet:\n- Has route to Internet Gateway\n- Resources can have public IPs\n- For web servers, load balancers\n\nPrivate Subnet:\n- No direct internet access\n- Uses NAT for outbound only\n- For databases, app servers', category: 'VPC', difficulty: 'intermediate' },
    { id: 'fc-aws-22', front: 'What is the difference between Security Groups and NACLs?', back: 'Security Groups:\n- Instance level\n- Stateful (return traffic auto-allowed)\n- Allow rules only\n- All rules evaluated\n\nNACLs:\n- Subnet level\n- Stateless (must allow return traffic)\n- Allow and Deny rules\n- Rules evaluated in order', category: 'VPC', difficulty: 'intermediate' },
    { id: 'fc-aws-23', front: 'What is a NAT Gateway?', back: 'Network Address Translation - allows private subnet resources to access internet (outbound only).\n- Managed by AWS\n- Deployed in public subnet\n- Highly available within AZ\n- Private subnet routes to NAT\n- Alternative: NAT Instance (self-managed)', category: 'VPC', difficulty: 'intermediate' },

    // ============ ELB ============
    { id: 'fc-aws-24', front: 'What are the types of Elastic Load Balancers?', back: 'ALB (Application): Layer 7, HTTP/HTTPS, path-based routing\nNLB (Network): Layer 4, TCP/UDP, ultra-low latency\nGWLB (Gateway): Layer 3, third-party appliances\nCLB (Classic): Legacy, both L4/L7\n\nChoose ALB for web apps, NLB for performance.', category: 'ELB', difficulty: 'intermediate' },
    { id: 'fc-aws-25', front: 'What is an ALB Target Group?', back: 'Group of targets that receive traffic from ALB:\n- EC2 instances\n- IP addresses\n- Lambda functions\n- Other ALBs\nHealth checks determine if targets are healthy. Route based on path, host, headers.', category: 'ELB', difficulty: 'intermediate' },

    // ============ RDS ============
    { id: 'fc-aws-26', front: 'What is RDS?', back: 'Relational Database Service - managed databases.\nSupports: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, Aurora\nManaged features:\n- Automated backups\n- Multi-AZ failover\n- Read Replicas\n- Patching\n- Monitoring', category: 'RDS', difficulty: 'beginner' },
    { id: 'fc-aws-27', front: 'What is RDS Multi-AZ vs Read Replicas?', back: 'Multi-AZ:\n- Synchronous replication\n- Automatic failover\n- Same endpoint\n- For HIGH AVAILABILITY\n\nRead Replicas:\n- Asynchronous replication\n- Different endpoint\n- Read-only queries\n- For PERFORMANCE (scale reads)', category: 'RDS', difficulty: 'intermediate' },
    { id: 'fc-aws-28', front: 'What is Amazon Aurora?', back: 'AWS cloud-native relational database.\n- MySQL and PostgreSQL compatible\n- 5x faster than MySQL, 3x than PostgreSQL\n- Storage auto-scales up to 128TB\n- 6 copies across 3 AZs\n- Up to 15 read replicas\n- Serverless option available', category: 'RDS', difficulty: 'intermediate' },

    // ============ DYNAMODB ============
    { id: 'fc-aws-29', front: 'What is DynamoDB?', back: 'Fully managed NoSQL database.\n- Key-value and document store\n- Single-digit millisecond latency\n- Serverless, auto-scaling\n- Global tables for multi-region\n- DAX for caching\nCapacity: On-demand or Provisioned', category: 'DynamoDB', difficulty: 'beginner' },
    { id: 'fc-aws-30', front: 'What are DynamoDB primary keys?', back: 'Partition Key: Single attribute, must be unique\nPartition + Sort Key: Composite, partition can repeat\n\nExample:\n- Partition: UserID (unique per user)\n- Partition + Sort: UserID + OrderDate (multiple orders per user)', category: 'DynamoDB', difficulty: 'intermediate' },

    // ============ LAMBDA ============
    { id: 'fc-aws-31', front: 'What is AWS Lambda?', back: 'Serverless compute - run code without servers.\n- Pay per invocation (100ms increments)\n- Auto-scales to thousands\n- Max 15 minutes execution\n- Supports: Python, Node.js, Java, Go, .NET, Ruby\nTriggers: API Gateway, S3, DynamoDB, CloudWatch, etc.', category: 'Lambda', difficulty: 'beginner' },
    { id: 'fc-aws-32', front: 'What are Lambda limits?', back: 'Memory: 128MB - 10GB\nTimeout: Max 15 minutes\nConcurrency: 1000 default (can increase)\nDeployment: 50MB zipped, 250MB unzipped\n/tmp storage: 512MB - 10GB\nEnv variables: 4KB total', category: 'Lambda', difficulty: 'intermediate' },

    // ============ API GATEWAY ============
    { id: 'fc-aws-33', front: 'What is API Gateway?', back: 'Managed service to create, publish, and manage APIs.\nFeatures:\n- REST and WebSocket APIs\n- Authentication (IAM, Cognito, Lambda)\n- Rate limiting, throttling\n- Request/response transformation\n- Caching\nIntegrates with Lambda, EC2, any HTTP endpoint.', category: 'API Gateway', difficulty: 'intermediate' },

    // ============ CLOUDWATCH ============
    { id: 'fc-aws-34', front: 'What is CloudWatch?', back: 'Monitoring and observability service.\n- Metrics: CPU, memory, custom metrics\n- Logs: Application and system logs\n- Alarms: Notifications and auto-actions\n- Dashboards: Visualizations\n- Events/EventBridge: React to changes', category: 'CloudWatch', difficulty: 'beginner' },
    { id: 'fc-aws-35', front: 'What is the difference between CloudWatch and CloudTrail?', back: 'CloudWatch: Monitoring\n- Performance metrics\n- Application logs\n- Alarms\n\nCloudTrail: Auditing\n- API call history\n- WHO did WHAT and WHEN\n- Security and compliance\n- Governance', category: 'CloudWatch', difficulty: 'intermediate' },

    // ============ CLOUDFORMATION ============
    { id: 'fc-aws-36', front: 'What is CloudFormation?', back: 'Infrastructure as Code (IaC) for AWS.\n- Define infrastructure in YAML/JSON templates\n- Version control your infrastructure\n- Repeatable, consistent deployments\n- Stack: Collection of resources\n- Change Sets: Preview changes before applying', category: 'CloudFormation', difficulty: 'intermediate' },
    { id: 'fc-aws-37', front: 'What is AWS CDK?', back: 'Cloud Development Kit - define infrastructure using programming languages.\n- TypeScript, Python, Java, C#, Go\n- Higher-level abstractions than CloudFormation\n- Generates CloudFormation templates\n- Constructs: Reusable components', category: 'CloudFormation', difficulty: 'intermediate' },

    // ============ ECS/EKS ============
    { id: 'fc-aws-38', front: 'What is the difference between ECS and EKS?', back: 'ECS (Elastic Container Service):\n- AWS proprietary orchestration\n- Simpler, AWS-native\n- Fargate or EC2 launch types\n\nEKS (Elastic Kubernetes Service):\n- Managed Kubernetes\n- Open-source, portable\n- Steeper learning curve', category: 'ECS/EKS', difficulty: 'intermediate' },
    { id: 'fc-aws-39', front: 'What is AWS Fargate?', back: 'Serverless compute for containers.\n- No EC2 instances to manage\n- Pay per vCPU and memory used\n- Works with ECS and EKS\n- Auto-scales\nChoose when you don\'t want to manage infrastructure.', category: 'ECS/EKS', difficulty: 'intermediate' },

    // ============ ROUTE53 ============
    { id: 'fc-aws-40', front: 'What is Route 53?', back: 'Managed DNS service.\nFeatures:\n- Domain registration\n- DNS routing\n- Health checks\nRouting policies: Simple, Weighted, Latency, Failover, Geolocation, Multi-Value', category: 'Route53', difficulty: 'beginner' },

    // ============ SQS/SNS ============
    { id: 'fc-aws-41', front: 'What is the difference between SQS and SNS?', back: 'SQS (Simple Queue Service):\n- Message queue\n- Pull model (consumers poll)\n- Decoupling, buffering\n- Messages deleted after processing\n\nSNS (Simple Notification Service):\n- Pub/Sub messaging\n- Push model (subscribers receive)\n- Fan-out to multiple endpoints\n- Email, SMS, HTTP, Lambda, SQS', category: 'Messaging', difficulty: 'intermediate' },

    // ============ DISASTER RECOVERY ============
    { id: 'fc-aws-42', front: 'What are AWS disaster recovery strategies?', back: 'Backup & Restore: Cheapest, highest RTO/RPO\nPilot Light: Minimal core running, scale up when needed\nWarm Standby: Scaled-down version always running\nActive-Active: Full capacity in multiple regions\n\nRTO: Recovery Time Objective\nRPO: Recovery Point Objective', category: 'DR', difficulty: 'advanced' },

    // ============ WELL-ARCHITECTED ============
    { id: 'fc-aws-43', front: 'What are the AWS Well-Architected pillars?', back: '1. Operational Excellence: Run and monitor systems\n2. Security: Protect data and systems\n3. Reliability: Recover from failures\n4. Performance Efficiency: Use resources efficiently\n5. Cost Optimization: Avoid unnecessary costs\n6. Sustainability: Minimize environmental impact', category: 'Architecture', difficulty: 'intermediate' },
    { id: 'fc-aws-44', front: 'What is the AWS Reliability pillar about?', back: 'Ability to recover from failures:\n- Multi-AZ deployments\n- Auto Scaling\n- Backups and replication\n- Health checks\n- Chaos engineering\n- Defined RTO/RPO\nDesign for failure, test recovery.', category: 'Architecture', difficulty: 'intermediate' },
    { id: 'fc-aws-45', front: 'What is the Cost Optimization pillar about?', back: 'Avoid unnecessary costs:\n- Right-sizing instances\n- Reserved Instances/Savings Plans\n- Spot Instances for flexible workloads\n- S3 lifecycle policies\n- Delete unused resources\n- Use Cost Explorer and Budgets', category: 'Architecture', difficulty: 'intermediate' },
  ],

  quizQuestions: [
    // ============ FUNDAMENTALS ============
    {
      id: 'q-aws-1',
      question: 'What is the relationship between Regions and Availability Zones?',
      options: ['Regions contain multiple AZs', 'AZs contain multiple Regions', 'They are the same thing', 'AZs are across multiple Regions'],
      correctAnswer: 0,
      explanation: 'Each AWS Region contains 2-6 Availability Zones. AZs are isolated data centers within a Region.',
      category: 'Fundamentals'
    },
    {
      id: 'q-aws-2',
      question: 'In the Shared Responsibility Model, who is responsible for patching the EC2 operating system?',
      options: ['AWS', 'Customer', 'Both equally', 'Third-party'],
      correctAnswer: 1,
      explanation: 'Customers are responsible for patching the OS on EC2 instances. AWS manages the underlying infrastructure.',
      category: 'Fundamentals'
    },
    {
      id: 'q-aws-3',
      question: 'Which pricing model offers the highest discount but can be interrupted?',
      options: ['On-Demand', 'Reserved', 'Spot', 'Savings Plans'],
      correctAnswer: 2,
      explanation: 'Spot Instances offer up to 90% discount but can be terminated when AWS needs the capacity back.',
      category: 'Fundamentals'
    },

    // ============ IAM ============
    {
      id: 'q-aws-4',
      question: 'What is the best practice for AWS root account?',
      options: ['Use it for daily tasks', 'Share credentials with team', 'Enable MFA and don\'t use for daily tasks', 'Delete it after setup'],
      correctAnswer: 2,
      explanation: 'Root account should have MFA enabled and NOT be used for daily tasks. Create IAM users instead.',
      category: 'IAM'
    },
    {
      id: 'q-aws-5',
      question: 'What should an EC2 instance use to access other AWS services?',
      options: ['Root credentials', 'IAM user access keys', 'IAM Role', 'No credentials needed'],
      correctAnswer: 2,
      explanation: 'IAM Roles provide temporary credentials to EC2. Never put access keys on instances.',
      category: 'IAM'
    },
    {
      id: 'q-aws-6',
      question: 'What is the default effect of an IAM policy?',
      options: ['Allow all', 'Deny all', 'Depends on resource', 'No effect'],
      correctAnswer: 1,
      explanation: 'By default, all permissions are denied. You must explicitly allow actions in IAM policies.',
      category: 'IAM'
    },

    // ============ EC2 ============
    {
      id: 'q-aws-7',
      question: 'Which EC2 instance type is best for compute-intensive workloads?',
      options: ['T3 (General Purpose)', 'R5 (Memory Optimized)', 'C5 (Compute Optimized)', 'I3 (Storage Optimized)'],
      correctAnswer: 2,
      explanation: 'C5 instances are compute-optimized with high CPU performance for batch processing, gaming servers, etc.',
      category: 'EC2'
    },
    {
      id: 'q-aws-8',
      question: 'What does EC2 Auto Scaling do when demand decreases?',
      options: ['Terminates instances', 'Stops instances', 'Does nothing', 'Moves to different AZ'],
      correctAnswer: 0,
      explanation: 'Auto Scaling terminates instances during scale-in to reduce capacity and costs.',
      category: 'EC2'
    },

    // ============ S3 ============
    {
      id: 'q-aws-9',
      question: 'What is the durability of S3 Standard?',
      options: ['99.9%', '99.99%', '99.999999999%', '100%'],
      correctAnswer: 2,
      explanation: 'S3 Standard offers 99.999999999% (11 9\'s) durability, meaning extremely low chance of data loss.',
      category: 'S3'
    },
    {
      id: 'q-aws-10',
      question: 'Which S3 storage class is cheapest for rarely accessed data that needs immediate retrieval?',
      options: ['S3 Standard', 'S3 Standard-IA', 'S3 Glacier', 'S3 Glacier Deep Archive'],
      correctAnswer: 1,
      explanation: 'S3 Standard-IA (Infrequent Access) is cheaper for rarely accessed data but still provides millisecond access.',
      category: 'S3'
    },
    {
      id: 'q-aws-11',
      question: 'What happens when you delete a versioned object in S3?',
      options: ['Permanently deleted', 'A delete marker is added', 'All versions deleted', 'Error occurs'],
      correctAnswer: 1,
      explanation: 'Deleting a versioned object adds a delete marker. Previous versions remain and can be restored.',
      category: 'S3'
    },

    // ============ VPC ============
    {
      id: 'q-aws-12',
      question: 'What makes a subnet "public"?',
      options: ['Has public IP addresses', 'Has route to Internet Gateway', 'Is in multiple AZs', 'Has Security Group'],
      correctAnswer: 1,
      explanation: 'A public subnet has a route table entry pointing to an Internet Gateway, allowing internet access.',
      category: 'VPC'
    },
    {
      id: 'q-aws-13',
      question: 'Security Groups are stateful. What does this mean?',
      options: ['Rules can change', 'Return traffic is automatically allowed', 'They remember connections', 'Both B and C'],
      correctAnswer: 3,
      explanation: 'Stateful means Security Groups track connections and automatically allow return traffic.',
      category: 'VPC'
    },
    {
      id: 'q-aws-14',
      question: 'What does a NAT Gateway allow?',
      options: ['Inbound internet access to private subnet', 'Outbound internet access from private subnet', 'VPC peering', 'Cross-region communication'],
      correctAnswer: 1,
      explanation: 'NAT Gateway allows resources in private subnets to access the internet (outbound only).',
      category: 'VPC'
    },

    // ============ RDS ============
    {
      id: 'q-aws-15',
      question: 'What is the purpose of RDS Multi-AZ?',
      options: ['Read scaling', 'Cost savings', 'High availability', 'Data analytics'],
      correctAnswer: 2,
      explanation: 'Multi-AZ provides high availability with automatic failover to a standby in another AZ.',
      category: 'RDS'
    },
    {
      id: 'q-aws-16',
      question: 'What is the purpose of RDS Read Replicas?',
      options: ['High availability', 'Read scaling', 'Backup', 'Write scaling'],
      correctAnswer: 1,
      explanation: 'Read Replicas allow you to scale read operations by distributing queries across replicas.',
      category: 'RDS'
    },

    // ============ LAMBDA ============
    {
      id: 'q-aws-17',
      question: 'What is the maximum execution time for a Lambda function?',
      options: ['5 minutes', '10 minutes', '15 minutes', '30 minutes'],
      correctAnswer: 2,
      explanation: 'Lambda functions can run for a maximum of 15 minutes (900 seconds).',
      category: 'Lambda'
    },
    {
      id: 'q-aws-18',
      question: 'How is Lambda priced?',
      options: ['Per hour', 'Per invocation and duration', 'Flat monthly fee', 'Per GB stored'],
      correctAnswer: 1,
      explanation: 'Lambda charges per request and per GB-second of compute time used.',
      category: 'Lambda'
    },

    // ============ ELB ============
    {
      id: 'q-aws-19',
      question: 'Which load balancer operates at Layer 7 (HTTP)?',
      options: ['NLB', 'ALB', 'CLB', 'GWLB'],
      correctAnswer: 1,
      explanation: 'Application Load Balancer (ALB) operates at Layer 7 and can route based on URL path, headers, etc.',
      category: 'ELB'
    },

    // ============ CLOUDWATCH ============
    {
      id: 'q-aws-20',
      question: 'What is CloudTrail used for?',
      options: ['Performance monitoring', 'API activity logging', 'Application logging', 'Cost tracking'],
      correctAnswer: 1,
      explanation: 'CloudTrail logs all API calls for auditing - who did what, when, and from where.',
      category: 'CloudWatch'
    },

    // ============ SQS ============
    {
      id: 'q-aws-21',
      question: 'What is the difference between SQS Standard and FIFO queues?',
      options: ['FIFO is faster', 'Standard guarantees order', 'FIFO guarantees order and exactly-once', 'No difference'],
      correctAnswer: 2,
      explanation: 'FIFO queues guarantee message order and exactly-once processing. Standard offers higher throughput but no ordering.',
      category: 'Messaging'
    },

    // ============ ARCHITECTURE ============
    {
      id: 'q-aws-22',
      question: 'Which disaster recovery strategy has the lowest RTO?',
      options: ['Backup & Restore', 'Pilot Light', 'Warm Standby', 'Active-Active'],
      correctAnswer: 3,
      explanation: 'Active-Active runs full capacity in multiple regions, providing near-zero RTO.',
      category: 'Architecture'
    },
    {
      id: 'q-aws-23',
      question: 'How many pillars are in the AWS Well-Architected Framework?',
      options: ['4', '5', '6', '7'],
      correctAnswer: 2,
      explanation: '6 pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability.',
      category: 'Architecture'
    },
    {
      id: 'q-aws-24',
      question: 'What AWS service is used for Infrastructure as Code?',
      options: ['CloudWatch', 'CloudFormation', 'CloudFront', 'CloudTrail'],
      correctAnswer: 1,
      explanation: 'CloudFormation allows you to define and deploy infrastructure using YAML/JSON templates.',
      category: 'Architecture'
    },
    {
      id: 'q-aws-25',
      question: 'What is the difference between ECS and EKS?',
      options: ['ECS is serverless, EKS is not', 'ECS is AWS-native, EKS is managed Kubernetes', 'EKS is cheaper', 'They are the same'],
      correctAnswer: 1,
      explanation: 'ECS is AWS\'s proprietary container orchestration. EKS is managed Kubernetes (open-source, portable).',
      category: 'ECS/EKS'
    },
  ],
};

