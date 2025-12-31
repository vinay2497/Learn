import { TopicData } from '@/types';

export const networkingData: TopicData = {
  name: 'Networking',
  description: 'Network fundamentals, protocols, and infrastructure concepts for DevOps',
  icon: '🌐',
  color: '#06B6D4',
  gradient: 'from-cyan-400 via-teal-500 to-emerald-500',
  commands: [
    // ============ DNS (Essential) ============
    { id: 'net-1', command: 'nslookup <domain>', description: 'Query DNS records for a domain', example: 'nslookup google.com', category: 'DNS', difficulty: 'beginner' },
    { id: 'net-2', command: 'dig <domain>', description: 'DNS lookup with detailed info', example: 'dig google.com +short', category: 'DNS', difficulty: 'intermediate' },
    
    // ============ NETWORK DIAGNOSTICS (Essential) ============
    { id: 'net-3', command: 'ping <host>', description: 'Test network connectivity to host', example: 'ping -c 4 google.com', category: 'Diagnostics', difficulty: 'beginner' },
    { id: 'net-4', command: 'traceroute <host>', description: 'Trace packet route to destination', example: 'traceroute google.com', category: 'Diagnostics', difficulty: 'intermediate' },
    { id: 'net-5', command: 'ss -tuln', description: 'Show listening ports and connections', example: 'ss -tulnp', category: 'Diagnostics', difficulty: 'intermediate' },
    { id: 'net-6', command: 'netstat -tuln', description: 'Show network statistics (legacy)', example: 'netstat -tulnp', category: 'Diagnostics', difficulty: 'intermediate' },
    { id: 'net-7', command: 'tcpdump', description: 'Capture and analyze network packets', example: 'tcpdump -i eth0 port 80', category: 'Diagnostics', difficulty: 'advanced' },
    
    // ============ IP & INTERFACE (Essential) ============
    { id: 'net-8', command: 'ip addr', description: 'Show IP addresses of all interfaces', example: 'ip addr show eth0', category: 'IP', difficulty: 'beginner' },
    { id: 'net-9', command: 'ip route', description: 'Show/manage routing table', example: 'ip route show', category: 'IP', difficulty: 'intermediate' },
    { id: 'net-10', command: 'hostname -I', description: 'Show all IP addresses of the host', example: 'hostname -I', category: 'IP', difficulty: 'beginner' },
    
    // ============ HTTP & CURL (Essential) ============
    { id: 'net-11', command: 'curl <url>', description: 'Transfer data from URL', example: 'curl https://api.example.com', category: 'HTTP', difficulty: 'beginner' },
    { id: 'net-12', command: 'curl -I <url>', description: 'Fetch HTTP headers only', example: 'curl -I https://google.com', category: 'HTTP', difficulty: 'intermediate' },
    { id: 'net-13', command: 'curl -X POST -d', description: 'Send POST request with data', example: 'curl -X POST -d \'{"key":"value"}\' -H "Content-Type: application/json" url', category: 'HTTP', difficulty: 'intermediate' },
    { id: 'net-14', command: 'wget <url>', description: 'Download file from URL', example: 'wget https://example.com/file.zip', category: 'HTTP', difficulty: 'beginner' },
    
    // ============ FIREWALL (Essential) ============
    { id: 'net-15', command: 'iptables -L', description: 'List firewall rules', example: 'iptables -L -n -v', category: 'Firewall', difficulty: 'intermediate' },
    { id: 'net-16', command: 'ufw status', description: 'Check UFW firewall status (Ubuntu)', example: 'ufw status verbose', category: 'Firewall', difficulty: 'intermediate' },
    { id: 'net-17', command: 'ufw allow <port>', description: 'Allow port through UFW', example: 'ufw allow 22/tcp', category: 'Firewall', difficulty: 'intermediate' },
    
    // ============ SSH TUNNELING (Essential) ============
    { id: 'net-18', command: 'ssh -L', description: 'Local port forwarding (tunnel)', example: 'ssh -L 8080:localhost:80 user@server', category: 'SSH', difficulty: 'advanced' },
    
    // ============ LOAD BALANCING (Essential) ============
    { id: 'net-19', command: 'nginx -t', description: 'Test nginx configuration', example: 'nginx -t', category: 'LoadBalancer', difficulty: 'intermediate' },
  ],

  flashcards: [
    // ============ OSI MODEL ============
    { id: 'fc-net-1', front: 'What are the 7 layers of the OSI model (top to bottom)?', back: '7. Application (HTTP, FTP, DNS)\n6. Presentation (SSL, Encryption)\n5. Session (NetBIOS)\n4. Transport (TCP, UDP)\n3. Network (IP, ICMP)\n2. Data Link (MAC, Ethernet)\n1. Physical (Cables, Hubs)', category: 'OSI Model', difficulty: 'beginner' },
    { id: 'fc-net-2', front: 'What happens at Layer 4 (Transport Layer)?', back: 'Provides end-to-end communication, segmentation, flow control. Protocols: TCP (reliable, connection-oriented) and UDP (fast, connectionless). Uses port numbers to identify applications.', category: 'OSI Model', difficulty: 'intermediate' },
    { id: 'fc-net-3', front: 'What happens at Layer 3 (Network Layer)?', back: 'Handles logical addressing (IP addresses) and routing. Determines the best path for data to travel. Protocols: IP, ICMP, ARP. Devices: Routers.', category: 'OSI Model', difficulty: 'intermediate' },
    { id: 'fc-net-4', front: 'What is the difference between OSI and TCP/IP model?', back: 'OSI: 7 layers (theoretical model). TCP/IP: 4 layers (practical implementation). TCP/IP combines OSI layers 5-7 into Application layer, and layers 1-2 into Network Access layer.', category: 'OSI Model', difficulty: 'intermediate' },
    
    // ============ TCP/IP ============
    { id: 'fc-net-5', front: 'What are the 4 layers of TCP/IP model?', back: '4. Application (HTTP, DNS, FTP, SSH)\n3. Transport (TCP, UDP)\n2. Internet (IP, ICMP, ARP)\n1. Network Access (Ethernet, Wi-Fi)', category: 'TCP/IP', difficulty: 'beginner' },
    { id: 'fc-net-6', front: 'What is the TCP 3-way handshake?', back: '1. SYN: Client sends synchronize request\n2. SYN-ACK: Server acknowledges and sends its own SYN\n3. ACK: Client acknowledges server\'s SYN\nConnection established! Used to ensure reliable communication.', category: 'TCP/IP', difficulty: 'intermediate' },
    { id: 'fc-net-7', front: 'TCP vs UDP - When to use each?', back: 'TCP: Reliable, ordered delivery. Use for HTTP, FTP, SSH, email. Slower due to handshake/acknowledgments.\n\nUDP: Fast, no connection setup. Use for DNS, streaming, gaming, VoIP. Can lose packets.', category: 'TCP/IP', difficulty: 'intermediate' },
    
    // ============ IP ADDRESSING ============
    { id: 'fc-net-8', front: 'What are the IPv4 address classes?', back: 'Class A: 1.0.0.0 - 126.255.255.255 (/8, large networks)\nClass B: 128.0.0.0 - 191.255.255.255 (/16, medium)\nClass C: 192.0.0.0 - 223.255.255.255 (/24, small)\nClass D: 224-239 (multicast)\nClass E: 240-255 (reserved)', category: 'IP Addressing', difficulty: 'intermediate' },
    { id: 'fc-net-9', front: 'What are private IP address ranges?', back: 'Class A: 10.0.0.0 - 10.255.255.255 (10.0.0.0/8)\nClass B: 172.16.0.0 - 172.31.255.255 (172.16.0.0/12)\nClass C: 192.168.0.0 - 192.168.255.255 (192.168.0.0/16)\nNot routable on public internet.', category: 'IP Addressing', difficulty: 'intermediate' },
    { id: 'fc-net-10', front: 'What is CIDR notation?', back: 'Classless Inter-Domain Routing. /24 = 255.255.255.0 (256 IPs, 254 usable). /16 = 255.255.0.0 (65,536 IPs). The number represents bits in the network portion. Example: 192.168.1.0/24', category: 'IP Addressing', difficulty: 'intermediate' },
    { id: 'fc-net-11', front: 'How do you calculate usable hosts in a subnet?', back: 'Formula: 2^(32-CIDR) - 2\n/24 = 2^8 - 2 = 254 hosts\n/25 = 2^7 - 2 = 126 hosts\n/26 = 2^6 - 2 = 62 hosts\nSubtract 2 for network address and broadcast address.', category: 'IP Addressing', difficulty: 'intermediate' },
    
    // ============ DNS ============
    { id: 'fc-net-12', front: 'What is DNS and how does it work?', back: 'Domain Name System - translates domain names to IP addresses. Process:\n1. Browser checks cache\n2. OS checks hosts file\n3. Query recursive resolver\n4. Query root nameserver\n5. Query TLD nameserver\n6. Query authoritative nameserver', category: 'DNS', difficulty: 'beginner' },
    { id: 'fc-net-13', front: 'What are common DNS record types?', back: 'A: IPv4 address\nAAAA: IPv6 address\nCNAME: Alias to another domain\nMX: Mail server\nNS: Nameserver\nTXT: Text (SPF, verification)\nSOA: Start of Authority\nPTR: Reverse lookup', category: 'DNS', difficulty: 'intermediate' },
    { id: 'fc-net-14', front: 'What is the difference between A and CNAME records?', back: 'A record: Points domain directly to an IP address (e.g., example.com → 93.184.216.34)\n\nCNAME: Points domain to another domain (alias). e.g., www.example.com → example.com. Cannot be used on root domain.', category: 'DNS', difficulty: 'intermediate' },
    { id: 'fc-net-15', front: 'What is DNS TTL?', back: 'Time To Live - how long DNS records are cached (in seconds). Lower TTL = faster propagation but more DNS queries. Higher TTL = better performance but slower changes. Typical: 300-3600 seconds.', category: 'DNS', difficulty: 'intermediate' },
    
    // ============ HTTP/HTTPS ============
    { id: 'fc-net-16', front: 'What is the difference between HTTP and HTTPS?', back: 'HTTP: Port 80, unencrypted, data visible in transit.\nHTTPS: Port 443, encrypted with TLS/SSL, secure. Uses certificates to verify server identity. Required for sensitive data, login pages, e-commerce.', category: 'HTTP', difficulty: 'beginner' },
    { id: 'fc-net-17', front: 'What are common HTTP status codes?', back: '2xx Success: 200 OK, 201 Created, 204 No Content\n3xx Redirect: 301 Moved Permanently, 302 Found, 304 Not Modified\n4xx Client Error: 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found\n5xx Server Error: 500 Internal, 502 Bad Gateway, 503 Unavailable', category: 'HTTP', difficulty: 'intermediate' },
    { id: 'fc-net-18', front: 'What are HTTP methods (verbs)?', back: 'GET: Retrieve data\nPOST: Create new resource\nPUT: Update/replace entire resource\nPATCH: Partial update\nDELETE: Remove resource\nHEAD: Get headers only\nOPTIONS: Get allowed methods', category: 'HTTP', difficulty: 'intermediate' },
    { id: 'fc-net-19', front: 'What is TLS/SSL handshake?', back: '1. Client Hello (supported ciphers)\n2. Server Hello (chosen cipher + certificate)\n3. Client verifies certificate\n4. Key exchange (create session key)\n5. Encrypted communication begins\nModern TLS 1.3 is faster with fewer round trips.', category: 'HTTP', difficulty: 'advanced' },
    
    // ============ LOAD BALANCING ============
    { id: 'fc-net-20', front: 'What is load balancing and why use it?', back: 'Distributes traffic across multiple servers to:\n1. Improve availability (if one fails, others work)\n2. Increase scalability (add more servers)\n3. Better performance (distribute load)\n4. Zero downtime deployments', category: 'Load Balancing', difficulty: 'beginner' },
    { id: 'fc-net-21', front: 'What are common load balancing algorithms?', back: 'Round Robin: Rotate through servers equally\nLeast Connections: Send to server with fewest active connections\nIP Hash: Same client IP always goes to same server\nWeighted: Servers get traffic based on capacity\nRandom: Random server selection', category: 'Load Balancing', difficulty: 'intermediate' },
    { id: 'fc-net-22', front: 'What is the difference between L4 and L7 load balancing?', back: 'L4 (Transport): Routes based on IP and port. Faster, less overhead. Cannot inspect content.\n\nL7 (Application): Routes based on HTTP headers, URL, cookies. More intelligent routing, can do SSL termination, caching.', category: 'Load Balancing', difficulty: 'intermediate' },
    { id: 'fc-net-23', front: 'What is SSL/TLS termination?', back: 'Load balancer decrypts HTTPS traffic, then forwards unencrypted HTTP to backend servers. Benefits: Reduces CPU load on app servers, centralizes certificate management. Also called SSL offloading.', category: 'Load Balancing', difficulty: 'intermediate' },
    
    // ============ FIREWALLS ============
    { id: 'fc-net-24', front: 'What is a firewall and what types exist?', back: 'Controls incoming/outgoing network traffic based on rules.\nTypes:\n1. Packet Filter: Checks IP, port, protocol\n2. Stateful: Tracks connection state\n3. Application/WAF: Inspects application layer\n4. Next-Gen (NGFW): Deep packet inspection + IDS', category: 'Firewall', difficulty: 'beginner' },
    { id: 'fc-net-25', front: 'What is the difference between inbound and outbound rules?', back: 'Inbound: Controls traffic COMING INTO the server (e.g., allow port 80 from internet)\n\nOutbound: Controls traffic GOING OUT from server (e.g., allow server to reach internet on port 443)', category: 'Firewall', difficulty: 'beginner' },
    { id: 'fc-net-26', front: 'What is a Security Group in AWS?', back: 'Virtual firewall for EC2 instances. Stateful (return traffic automatically allowed). Default: deny all inbound, allow all outbound. Rules specify protocol, port, source/destination IP or security group.', category: 'Firewall', difficulty: 'intermediate' },
    
    // ============ PROXIES ============
    { id: 'fc-net-27', front: 'What is the difference between forward and reverse proxy?', back: 'Forward Proxy: Sits in front of CLIENTS. Hides client identity, caching, filtering. Client → Proxy → Internet.\n\nReverse Proxy: Sits in front of SERVERS. Load balancing, SSL termination, caching. Client → Proxy → Servers.', category: 'Proxy', difficulty: 'intermediate' },
    { id: 'fc-net-28', front: 'What is nginx commonly used for?', back: '1. Web server (serve static files)\n2. Reverse proxy (forward requests to backend)\n3. Load balancer (distribute traffic)\n4. SSL termination\n5. Caching\n6. API gateway', category: 'Proxy', difficulty: 'intermediate' },
    
    // ============ VPN ============
    { id: 'fc-net-29', front: 'What is a VPN and why use it?', back: 'Virtual Private Network - creates encrypted tunnel over public internet.\nUse cases:\n1. Secure remote access to private network\n2. Site-to-site connectivity\n3. Privacy/anonymity\n4. Bypass geo-restrictions\nProtocols: OpenVPN, WireGuard, IPSec', category: 'VPN', difficulty: 'beginner' },
    { id: 'fc-net-30', front: 'What is the difference between Site-to-Site and Client VPN?', back: 'Site-to-Site: Connects two networks (e.g., office to AWS VPC). Always on, handled by routers/gateways.\n\nClient VPN: Individual user connects to network. On-demand, requires client software (OpenVPN, WireGuard).', category: 'VPN', difficulty: 'intermediate' },
    
    // ============ PORTS & PROTOCOLS ============
    { id: 'fc-net-31', front: 'What are well-known ports to memorize?', back: '20/21: FTP\n22: SSH\n23: Telnet\n25: SMTP\n53: DNS\n80: HTTP\n443: HTTPS\n110: POP3\n143: IMAP\n3306: MySQL\n5432: PostgreSQL\n6379: Redis\n27017: MongoDB', category: 'Ports', difficulty: 'beginner' },
    { id: 'fc-net-32', front: 'What is the difference between TCP and UDP ports?', back: 'Same port numbers, different protocols. A service can listen on TCP 53 AND UDP 53 (like DNS does).\nTCP: Connection-oriented, reliable\nUDP: Connectionless, fast\nTotal: 65,535 ports (0-65534) per protocol', category: 'Ports', difficulty: 'intermediate' },
    { id: 'fc-net-33', front: 'What are ephemeral ports?', back: 'Temporary ports assigned to client-side of connection. Range: typically 49152-65535 (or 32768-60999 on Linux). When you visit a website, your browser uses an ephemeral port to receive the response.', category: 'Ports', difficulty: 'intermediate' },
    
    // ============ NAT & ROUTING ============
    { id: 'fc-net-34', front: 'What is NAT (Network Address Translation)?', back: 'Translates private IPs to public IPs for internet access. Types:\n1. SNAT: Changes source IP (outgoing)\n2. DNAT: Changes destination IP (incoming)\n3. PAT: Port-based NAT (many private IPs share one public IP)', category: 'Routing', difficulty: 'intermediate' },
    { id: 'fc-net-35', front: 'What is a default gateway?', back: 'The router that forwards traffic to networks outside the local subnet. When a device wants to reach an IP not in its subnet, it sends the packet to the default gateway. Usually the first usable IP in subnet (e.g., 192.168.1.1)', category: 'Routing', difficulty: 'beginner' },
  ],

  quizQuestions: [
    // ============ OSI MODEL ============
    {
      id: 'q-net-1',
      question: 'Which OSI layer is responsible for routing and IP addressing?',
      options: ['Transport Layer (4)', 'Network Layer (3)', 'Data Link Layer (2)', 'Session Layer (5)'],
      correctAnswer: 1,
      explanation: 'Layer 3 (Network) handles logical addressing (IP) and routing between networks. Routers operate at this layer.',
      category: 'OSI Model'
    },
    {
      id: 'q-net-2',
      question: 'TCP operates at which layer of the OSI model?',
      options: ['Application (7)', 'Transport (4)', 'Network (3)', 'Session (5)'],
      correctAnswer: 1,
      explanation: 'TCP operates at Layer 4 (Transport), providing reliable, connection-oriented communication with flow control.',
      category: 'OSI Model'
    },
    {
      id: 'q-net-3',
      question: 'Which layer handles MAC addresses?',
      options: ['Network Layer', 'Physical Layer', 'Data Link Layer', 'Transport Layer'],
      correctAnswer: 2,
      explanation: 'Layer 2 (Data Link) uses MAC addresses for local network communication. Switches operate at this layer.',
      category: 'OSI Model'
    },
    
    // ============ TCP/IP ============
    {
      id: 'q-net-4',
      question: 'What is the correct order of TCP 3-way handshake?',
      options: ['ACK → SYN → SYN-ACK', 'SYN → SYN-ACK → ACK', 'SYN-ACK → SYN → ACK', 'SYN → ACK → SYN-ACK'],
      correctAnswer: 1,
      explanation: 'TCP handshake: 1) Client sends SYN, 2) Server responds with SYN-ACK, 3) Client sends ACK. Connection established.',
      category: 'TCP/IP'
    },
    {
      id: 'q-net-5',
      question: 'Which protocol is connectionless and faster but unreliable?',
      options: ['TCP', 'UDP', 'ICMP', 'ARP'],
      correctAnswer: 1,
      explanation: 'UDP is connectionless - no handshake, no guaranteed delivery. Used for DNS, streaming, gaming where speed matters more than reliability.',
      category: 'TCP/IP'
    },
    
    // ============ IP ADDRESSING ============
    {
      id: 'q-net-6',
      question: 'Which IP address range is private (Class C)?',
      options: ['10.0.0.0 - 10.255.255.255', '172.16.0.0 - 172.31.255.255', '192.168.0.0 - 192.168.255.255', '169.254.0.0 - 169.254.255.255'],
      correctAnswer: 2,
      explanation: '192.168.x.x is the Class C private range. Class A is 10.x.x.x, Class B is 172.16-31.x.x. 169.254.x.x is APIPA (link-local).',
      category: 'IP Addressing'
    },
    {
      id: 'q-net-7',
      question: 'How many usable host addresses are in a /24 subnet?',
      options: ['256', '255', '254', '252'],
      correctAnswer: 2,
      explanation: '/24 = 256 total IPs. Subtract 2 (network address and broadcast) = 254 usable host addresses.',
      category: 'IP Addressing'
    },
    {
      id: 'q-net-8',
      question: 'What subnet mask does /16 represent?',
      options: ['255.0.0.0', '255.255.0.0', '255.255.255.0', '255.255.255.128'],
      correctAnswer: 1,
      explanation: '/16 means 16 bits for network = 255.255.0.0. Each octet is 8 bits, so 16 bits = first two octets all 1s.',
      category: 'IP Addressing'
    },
    
    // ============ DNS ============
    {
      id: 'q-net-9',
      question: 'What DNS record type is used for mail servers?',
      options: ['A', 'CNAME', 'MX', 'NS'],
      correctAnswer: 2,
      explanation: 'MX (Mail Exchange) records specify the mail servers responsible for receiving email for a domain.',
      category: 'DNS'
    },
    {
      id: 'q-net-10',
      question: 'Which DNS record creates an alias to another domain?',
      options: ['A', 'AAAA', 'CNAME', 'PTR'],
      correctAnswer: 2,
      explanation: 'CNAME (Canonical Name) creates an alias pointing to another domain. A/AAAA point directly to IP addresses.',
      category: 'DNS'
    },
    {
      id: 'q-net-11',
      question: 'What port does DNS typically use?',
      options: ['22', '53', '80', '443'],
      correctAnswer: 1,
      explanation: 'DNS uses port 53 for both TCP and UDP. UDP for standard queries, TCP for zone transfers and large responses.',
      category: 'DNS'
    },
    
    // ============ HTTP ============
    {
      id: 'q-net-12',
      question: 'What HTTP status code means "Not Found"?',
      options: ['400', '401', '403', '404'],
      correctAnswer: 3,
      explanation: '404 Not Found means the requested resource doesn\'t exist. 400=Bad Request, 401=Unauthorized, 403=Forbidden.',
      category: 'HTTP'
    },
    {
      id: 'q-net-13',
      question: 'What is the default port for HTTPS?',
      options: ['80', '443', '8080', '8443'],
      correctAnswer: 1,
      explanation: 'HTTPS uses port 443 by default. HTTP uses port 80. 8080/8443 are common alternative ports.',
      category: 'HTTP'
    },
    {
      id: 'q-net-14',
      question: 'Which HTTP method is used to update a resource?',
      options: ['GET', 'POST', 'PUT', 'DELETE'],
      correctAnswer: 2,
      explanation: 'PUT updates/replaces an existing resource. POST creates new resources. GET retrieves, DELETE removes.',
      category: 'HTTP'
    },
    
    // ============ LOAD BALANCING ============
    {
      id: 'q-net-15',
      question: 'Which load balancing algorithm sends each request to the next server in sequence?',
      options: ['Least Connections', 'Round Robin', 'IP Hash', 'Random'],
      correctAnswer: 1,
      explanation: 'Round Robin distributes requests sequentially to each server in turn. Simple but doesn\'t consider server load.',
      category: 'Load Balancing'
    },
    {
      id: 'q-net-16',
      question: 'What is L7 load balancing?',
      options: ['Layer 4 - TCP/UDP based', 'Layer 7 - Application/HTTP based', 'Layer 3 - IP based', 'Layer 2 - MAC based'],
      correctAnswer: 1,
      explanation: 'L7 (Application layer) load balancing can make routing decisions based on HTTP headers, URLs, cookies, and content.',
      category: 'Load Balancing'
    },
    
    // ============ FIREWALL ============
    {
      id: 'q-net-17',
      question: 'What does a stateful firewall track?',
      options: ['Only source IP', 'Only destination port', 'Active connection states', 'Only packet headers'],
      correctAnswer: 2,
      explanation: 'Stateful firewalls track the state of connections and allow return traffic for established connections automatically.',
      category: 'Firewall'
    },
    
    // ============ PROXY ============
    {
      id: 'q-net-18',
      question: 'A reverse proxy sits in front of which component?',
      options: ['Clients', 'Servers', 'Routers', 'DNS servers'],
      correctAnswer: 1,
      explanation: 'Reverse proxy sits in front of servers, handling incoming requests. Forward proxy sits in front of clients.',
      category: 'Proxy'
    },
    
    // ============ VPN ============
    {
      id: 'q-net-19',
      question: 'What type of VPN connects two networks together?',
      options: ['Client VPN', 'Remote Access VPN', 'Site-to-Site VPN', 'SSL VPN'],
      correctAnswer: 2,
      explanation: 'Site-to-Site VPN connects entire networks (e.g., office to cloud VPC). Client VPN is for individual users.',
      category: 'VPN'
    },
    
    // ============ PORTS ============
    {
      id: 'q-net-20',
      question: 'Which port is used by SSH?',
      options: ['21', '22', '23', '25'],
      correctAnswer: 1,
      explanation: 'SSH uses port 22. FTP is 21, Telnet is 23, SMTP is 25.',
      category: 'Ports'
    },
    {
      id: 'q-net-21',
      question: 'Which port does MySQL database use by default?',
      options: ['1433', '3306', '5432', '27017'],
      correctAnswer: 1,
      explanation: 'MySQL uses 3306. PostgreSQL is 5432, MongoDB is 27017, MSSQL is 1433.',
      category: 'Ports'
    },
    {
      id: 'q-net-22',
      question: 'What is NAT primarily used for?',
      options: ['Encrypting traffic', 'Translating private IPs to public IPs', 'Load balancing', 'DNS resolution'],
      correctAnswer: 1,
      explanation: 'NAT (Network Address Translation) allows multiple devices with private IPs to share a single public IP for internet access.',
      category: 'Routing'
    },
  ],
};

