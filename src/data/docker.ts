import { TopicData } from '@/types';

export const dockerData: TopicData = {
  name: 'Docker',
  description: 'Platform for developing, shipping, and running applications in containers',
  icon: '🐳',
  color: '#2496ED',
  gradient: 'from-blue-400 via-cyan-500 to-teal-500',
  commands: [
    // Container Commands
    { id: 'docker-1', command: 'docker run <image>', description: 'Create and start a container from an image', example: 'docker run -d -p 80:80 nginx', category: 'Container', difficulty: 'beginner' },
    { id: 'docker-2', command: 'docker ps', description: 'List running containers', example: 'docker ps -a (all containers)', category: 'Container', difficulty: 'beginner' },
    { id: 'docker-3', command: 'docker stop <container>', description: 'Stop a running container', example: 'docker stop my-container', category: 'Container', difficulty: 'beginner' },
    { id: 'docker-4', command: 'docker start <container>', description: 'Start a stopped container', example: 'docker start my-container', category: 'Container', difficulty: 'beginner' },
    { id: 'docker-5', command: 'docker rm <container>', description: 'Remove a container', example: 'docker rm -f my-container', category: 'Container', difficulty: 'beginner' },
    { id: 'docker-6', command: 'docker exec -it <container> <cmd>', description: 'Execute command in running container', example: 'docker exec -it nginx bash', category: 'Container', difficulty: 'intermediate' },
    { id: 'docker-7', command: 'docker logs <container>', description: 'View container logs', example: 'docker logs -f my-container', category: 'Container', difficulty: 'beginner' },
    { id: 'docker-8', command: 'docker inspect <container>', description: 'Display detailed container information', example: 'docker inspect nginx', category: 'Container', difficulty: 'intermediate' },
    { id: 'docker-9', command: 'docker restart <container>', description: 'Restart a container', example: 'docker restart nginx', category: 'Container', difficulty: 'beginner' },
    { id: 'docker-10', command: 'docker cp <src> <dest>', description: 'Copy files between container and host', example: 'docker cp file.txt container:/app/', category: 'Container', difficulty: 'intermediate' },
    
    // Image Commands
    { id: 'docker-11', command: 'docker images', description: 'List all local images', example: 'docker images -a', category: 'Image', difficulty: 'beginner' },
    { id: 'docker-12', command: 'docker pull <image>', description: 'Pull an image from registry', example: 'docker pull nginx:latest', category: 'Image', difficulty: 'beginner' },
    { id: 'docker-13', command: 'docker build -t <name> .', description: 'Build an image from Dockerfile', example: 'docker build -t myapp:v1 .', category: 'Image', difficulty: 'intermediate' },
    { id: 'docker-14', command: 'docker push <image>', description: 'Push an image to registry', example: 'docker push user/myapp:v1', category: 'Image', difficulty: 'intermediate' },
    { id: 'docker-15', command: 'docker rmi <image>', description: 'Remove an image', example: 'docker rmi nginx:latest', category: 'Image', difficulty: 'beginner' },
    { id: 'docker-16', command: 'docker tag <image> <new-tag>', description: 'Create a tag for an image', example: 'docker tag myapp:v1 myapp:latest', category: 'Image', difficulty: 'intermediate' },
    { id: 'docker-17', command: 'docker history <image>', description: 'Show history of an image', example: 'docker history nginx', category: 'Image', difficulty: 'intermediate' },
    
    // Network Commands
    { id: 'docker-18', command: 'docker network ls', description: 'List all networks', example: 'docker network ls', category: 'Network', difficulty: 'intermediate' },
    { id: 'docker-19', command: 'docker network create <name>', description: 'Create a new network', example: 'docker network create mynet', category: 'Network', difficulty: 'intermediate' },
    { id: 'docker-20', command: 'docker network connect <net> <container>', description: 'Connect container to network', example: 'docker network connect mynet nginx', category: 'Network', difficulty: 'intermediate' },
    { id: 'docker-21', command: 'docker network inspect <name>', description: 'Display network details', example: 'docker network inspect bridge', category: 'Network', difficulty: 'advanced' },
    
    // Volume Commands
    { id: 'docker-22', command: 'docker volume ls', description: 'List all volumes', example: 'docker volume ls', category: 'Volume', difficulty: 'intermediate' },
    { id: 'docker-23', command: 'docker volume create <name>', description: 'Create a new volume', example: 'docker volume create mydata', category: 'Volume', difficulty: 'intermediate' },
    { id: 'docker-24', command: 'docker volume rm <name>', description: 'Remove a volume', example: 'docker volume rm mydata', category: 'Volume', difficulty: 'intermediate' },
    { id: 'docker-25', command: '-v <host>:<container>', description: 'Bind mount a volume', example: 'docker run -v /data:/app/data nginx', category: 'Volume', difficulty: 'intermediate' },
    
    // Docker Compose
    { id: 'docker-26', command: 'docker compose up', description: 'Create and start containers from compose file', example: 'docker compose up -d', category: 'Compose', difficulty: 'intermediate' },
    { id: 'docker-27', command: 'docker compose down', description: 'Stop and remove containers', example: 'docker compose down -v', category: 'Compose', difficulty: 'intermediate' },
    { id: 'docker-28', command: 'docker compose build', description: 'Build or rebuild services', example: 'docker compose build --no-cache', category: 'Compose', difficulty: 'intermediate' },
    { id: 'docker-29', command: 'docker compose logs', description: 'View output from containers', example: 'docker compose logs -f web', category: 'Compose', difficulty: 'intermediate' },
    { id: 'docker-30', command: 'docker compose ps', description: 'List compose containers', example: 'docker compose ps -a', category: 'Compose', difficulty: 'intermediate' },
    
    // System Commands
    { id: 'docker-31', command: 'docker system prune', description: 'Remove unused data', example: 'docker system prune -a', category: 'System', difficulty: 'intermediate' },
    { id: 'docker-32', command: 'docker system df', description: 'Show docker disk usage', example: 'docker system df -v', category: 'System', difficulty: 'intermediate' },
    { id: 'docker-33', command: 'docker stats', description: 'Display live resource usage', example: 'docker stats --no-stream', category: 'System', difficulty: 'intermediate' },
  ],
  flashcards: [
    { id: 'fc-docker-1', front: 'What is a Docker container?', back: 'A lightweight, standalone, executable package that includes everything needed to run a piece of software: code, runtime, system tools, libraries, and settings.', category: 'Concepts', difficulty: 'beginner' },
    { id: 'fc-docker-2', front: 'What is the difference between an image and a container?', back: 'An image is a read-only template with instructions for creating a container. A container is a runnable instance of an image.', category: 'Concepts', difficulty: 'beginner' },
    { id: 'fc-docker-3', front: 'What does the -d flag do in docker run?', back: 'Runs the container in detached mode (in the background), returning control to the terminal.', category: 'Container', difficulty: 'beginner' },
    { id: 'fc-docker-4', front: 'What does -p 8080:80 mean?', back: 'Maps port 8080 on the host to port 80 in the container (host:container).', category: 'Container', difficulty: 'beginner' },
    { id: 'fc-docker-5', front: 'What is a Dockerfile?', back: 'A text file containing instructions to build a Docker image. Each instruction creates a layer in the image.', category: 'Image', difficulty: 'intermediate' },
    { id: 'fc-docker-6', front: 'What is Docker Compose?', back: 'A tool for defining and running multi-container Docker applications using a YAML file.', category: 'Compose', difficulty: 'intermediate' },
    { id: 'fc-docker-7', front: 'How do you access a shell inside a running container?', back: 'docker exec -it <container> /bin/bash (or /bin/sh)', category: 'Container', difficulty: 'beginner' },
    { id: 'fc-docker-8', front: 'What is a Docker volume?', back: 'A mechanism for persisting data generated and used by Docker containers. Data persists even after the container is removed.', category: 'Volume', difficulty: 'intermediate' },
    { id: 'fc-docker-9', front: 'What does docker system prune do?', back: 'Removes all stopped containers, unused networks, dangling images, and build cache to free up space.', category: 'System', difficulty: 'intermediate' },
    { id: 'fc-docker-10', front: 'What is the difference between COPY and ADD in Dockerfile?', back: 'COPY simply copies files. ADD can also extract tar archives and download URLs. COPY is preferred for most cases.', category: 'Image', difficulty: 'intermediate' },
    { id: 'fc-docker-11', front: 'What is the difference between CMD and ENTRYPOINT?', back: 'CMD provides default arguments that can be overridden. ENTRYPOINT sets the main command that cannot be easily overridden.', category: 'Image', difficulty: 'advanced' },
    { id: 'fc-docker-12', front: 'What is a Docker network?', back: 'An isolated network that allows containers to communicate with each other. Types include bridge, host, overlay, and none.', category: 'Network', difficulty: 'intermediate' },
    { id: 'fc-docker-13', front: 'How do you view logs of a container in real-time?', back: 'docker logs -f <container-name> (the -f flag follows the log output)', category: 'Container', difficulty: 'beginner' },
    { id: 'fc-docker-14', front: 'What does the --rm flag do in docker run?', back: 'Automatically removes the container when it exits, useful for one-time or temporary containers.', category: 'Container', difficulty: 'intermediate' },
    { id: 'fc-docker-15', front: 'What is multi-stage build in Docker?', back: 'A technique using multiple FROM statements to create smaller final images by copying only necessary artifacts from build stages.', category: 'Image', difficulty: 'advanced' },
  ],
  quizQuestions: [
    {
      id: 'q-docker-1',
      question: 'Which command lists all running Docker containers?',
      options: ['docker containers', 'docker list', 'docker ps', 'docker show'],
      correctAnswer: 2,
      explanation: 'docker ps lists all currently running containers. Use docker ps -a to see all containers including stopped ones.',
      category: 'Container'
    },
    {
      id: 'q-docker-2',
      question: 'What does the -d flag do when running a container?',
      options: ['Deletes the container', 'Downloads the image', 'Runs in detached mode', 'Displays debug info'],
      correctAnswer: 2,
      explanation: 'The -d flag runs the container in detached mode, meaning it runs in the background.',
      category: 'Container'
    },
    {
      id: 'q-docker-3',
      question: 'Which file is used to build a Docker image?',
      options: ['docker.yml', 'Dockerfile', 'docker-config.json', 'image.docker'],
      correctAnswer: 1,
      explanation: 'A Dockerfile contains instructions for building a Docker image.',
      category: 'Image'
    },
    {
      id: 'q-docker-4',
      question: 'What does docker-compose up -d do?',
      options: [
        'Downloads compose file',
        'Starts services in detached mode',
        'Deletes all services',
        'Updates docker-compose'
      ],
      correctAnswer: 1,
      explanation: 'docker-compose up -d starts all services defined in docker-compose.yml in detached mode.',
      category: 'Compose'
    },
    {
      id: 'q-docker-5',
      question: 'How do you execute a command inside a running container?',
      options: ['docker run', 'docker execute', 'docker exec', 'docker cmd'],
      correctAnswer: 2,
      explanation: 'docker exec is used to run commands inside a running container.',
      category: 'Container'
    },
    {
      id: 'q-docker-6',
      question: 'What is the correct port mapping format?',
      options: ['container:host', 'host:container', 'port:port', 'internal:external'],
      correctAnswer: 1,
      explanation: 'Port mapping follows host:container format. For example, -p 8080:80 maps host port 8080 to container port 80.',
      category: 'Container'
    },
    {
      id: 'q-docker-7',
      question: 'Which command removes all stopped containers and unused images?',
      options: ['docker clean', 'docker remove all', 'docker system prune', 'docker clear'],
      correctAnswer: 2,
      explanation: 'docker system prune removes stopped containers, unused networks, dangling images, and build cache.',
      category: 'System'
    },
    {
      id: 'q-docker-8',
      question: 'What is the purpose of Docker volumes?',
      options: ['To increase container speed', 'To persist data beyond container lifecycle', 'To reduce image size', 'To connect containers'],
      correctAnswer: 1,
      explanation: 'Volumes are used to persist data. Data in volumes survives container deletion and can be shared between containers.',
      category: 'Volume'
    },
    {
      id: 'q-docker-9',
      question: 'Which command shows real-time resource usage of containers?',
      options: ['docker top', 'docker stats', 'docker resources', 'docker monitor'],
      correctAnswer: 1,
      explanation: 'docker stats displays a live stream of container resource usage statistics.',
      category: 'System'
    },
    {
      id: 'q-docker-10',
      question: 'What does EXPOSE in a Dockerfile do?',
      options: [
        'Publishes the port automatically',
        'Documents which ports the container listens on',
        'Opens firewall ports',
        'Creates a network'
      ],
      correctAnswer: 1,
      explanation: 'EXPOSE is documentation - it tells users which ports the container listens on. You still need -p to publish ports.',
      category: 'Image'
    },
  ],
};

