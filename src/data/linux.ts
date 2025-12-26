import { TopicData } from '@/types';

export const linuxData: TopicData = {
  name: 'Linux',
  description: 'Essential Linux/Unix commands for system administration and development',
  icon: '🐧',
  color: '#FCC624',
  gradient: 'from-yellow-400 via-amber-500 to-orange-500',
  commands: [
    // File Operations
    { id: 'linux-1', command: 'ls', description: 'List directory contents', example: 'ls -la (detailed list)', category: 'Files', difficulty: 'beginner' },
    { id: 'linux-2', command: 'cd <dir>', description: 'Change directory', example: 'cd ~ (home), cd .. (parent)', category: 'Files', difficulty: 'beginner' },
    { id: 'linux-3', command: 'pwd', description: 'Print working directory', example: 'pwd', category: 'Files', difficulty: 'beginner' },
    { id: 'linux-4', command: 'mkdir <dir>', description: 'Create a directory', example: 'mkdir -p path/to/dir', category: 'Files', difficulty: 'beginner' },
    { id: 'linux-5', command: 'rm <file>', description: 'Remove files or directories', example: 'rm -rf dir (recursive force)', category: 'Files', difficulty: 'beginner' },
    { id: 'linux-6', command: 'cp <src> <dest>', description: 'Copy files or directories', example: 'cp -r dir1 dir2', category: 'Files', difficulty: 'beginner' },
    { id: 'linux-7', command: 'mv <src> <dest>', description: 'Move or rename files', example: 'mv old.txt new.txt', category: 'Files', difficulty: 'beginner' },
    { id: 'linux-8', command: 'touch <file>', description: 'Create empty file or update timestamp', example: 'touch newfile.txt', category: 'Files', difficulty: 'beginner' },
    { id: 'linux-9', command: 'find <path> -name <pattern>', description: 'Search for files', example: 'find . -name "*.js"', category: 'Files', difficulty: 'intermediate' },
    { id: 'linux-10', command: 'locate <pattern>', description: 'Find files by name (uses database)', example: 'locate nginx.conf', category: 'Files', difficulty: 'intermediate' },
    { id: 'linux-11', command: 'ln -s <target> <link>', description: 'Create symbolic link', example: 'ln -s /path/file link', category: 'Files', difficulty: 'intermediate' },
    
    // Text Processing
    { id: 'linux-12', command: 'cat <file>', description: 'Display file contents', example: 'cat file1 file2 > combined', category: 'Text', difficulty: 'beginner' },
    { id: 'linux-13', command: 'less <file>', description: 'View file with pagination', example: 'less largefile.log', category: 'Text', difficulty: 'beginner' },
    { id: 'linux-14', command: 'head <file>', description: 'Display first lines of file', example: 'head -n 20 file.txt', category: 'Text', difficulty: 'beginner' },
    { id: 'linux-15', command: 'tail <file>', description: 'Display last lines of file', example: 'tail -f log.txt (follow)', category: 'Text', difficulty: 'beginner' },
    { id: 'linux-16', command: 'grep <pattern> <file>', description: 'Search text patterns in files', example: 'grep -r "error" logs/', category: 'Text', difficulty: 'intermediate' },
    { id: 'linux-17', command: 'sed', description: 'Stream editor for text transformation', example: "sed 's/old/new/g' file", category: 'Text', difficulty: 'advanced' },
    { id: 'linux-18', command: 'awk', description: 'Pattern scanning and processing', example: "awk '{print $1}' file", category: 'Text', difficulty: 'advanced' },
    { id: 'linux-19', command: 'wc', description: 'Count lines, words, characters', example: 'wc -l file.txt', category: 'Text', difficulty: 'beginner' },
    { id: 'linux-20', command: 'sort', description: 'Sort lines of text', example: 'sort -n numbers.txt', category: 'Text', difficulty: 'intermediate' },
    { id: 'linux-21', command: 'uniq', description: 'Filter duplicate lines', example: 'sort file | uniq -c', category: 'Text', difficulty: 'intermediate' },
    { id: 'linux-22', command: 'diff <file1> <file2>', description: 'Compare files line by line', example: 'diff -u old.txt new.txt', category: 'Text', difficulty: 'intermediate' },
    
    // Permissions
    { id: 'linux-23', command: 'chmod <mode> <file>', description: 'Change file permissions', example: 'chmod 755 script.sh', category: 'Permissions', difficulty: 'intermediate' },
    { id: 'linux-24', command: 'chown <user>:<group> <file>', description: 'Change file ownership', example: 'chown root:root file', category: 'Permissions', difficulty: 'intermediate' },
    { id: 'linux-25', command: 'sudo <command>', description: 'Execute command as superuser', example: 'sudo apt update', category: 'Permissions', difficulty: 'beginner' },
    
    // Process Management
    { id: 'linux-26', command: 'ps', description: 'Display running processes', example: 'ps aux | grep nginx', category: 'Process', difficulty: 'intermediate' },
    { id: 'linux-27', command: 'top', description: 'Display real-time process info', example: 'top -u username', category: 'Process', difficulty: 'intermediate' },
    { id: 'linux-28', command: 'htop', description: 'Interactive process viewer', example: 'htop', category: 'Process', difficulty: 'intermediate' },
    { id: 'linux-29', command: 'kill <pid>', description: 'Terminate a process', example: 'kill -9 1234 (force)', category: 'Process', difficulty: 'intermediate' },
    { id: 'linux-30', command: 'killall <name>', description: 'Kill processes by name', example: 'killall nginx', category: 'Process', difficulty: 'intermediate' },
    { id: 'linux-31', command: 'bg / fg', description: 'Background/foreground jobs', example: 'bg %1, fg %1', category: 'Process', difficulty: 'intermediate' },
    { id: 'linux-32', command: 'nohup <cmd> &', description: 'Run command immune to hangups', example: 'nohup ./script.sh &', category: 'Process', difficulty: 'advanced' },
    
    // Networking
    { id: 'linux-33', command: 'curl <url>', description: 'Transfer data from URL', example: 'curl -X POST -d "data" url', category: 'Network', difficulty: 'intermediate' },
    { id: 'linux-34', command: 'wget <url>', description: 'Download files from web', example: 'wget -O file.zip url', category: 'Network', difficulty: 'beginner' },
    { id: 'linux-35', command: 'ping <host>', description: 'Test network connectivity', example: 'ping -c 4 google.com', category: 'Network', difficulty: 'beginner' },
    { id: 'linux-36', command: 'netstat', description: 'Network statistics', example: 'netstat -tulpn', category: 'Network', difficulty: 'intermediate' },
    { id: 'linux-37', command: 'ss', description: 'Socket statistics (modern netstat)', example: 'ss -tulpn', category: 'Network', difficulty: 'intermediate' },
    { id: 'linux-38', command: 'ifconfig / ip', description: 'Configure network interfaces', example: 'ip addr show', category: 'Network', difficulty: 'intermediate' },
    { id: 'linux-39', command: 'ssh <user>@<host>', description: 'Secure shell remote login', example: 'ssh -i key.pem user@host', category: 'Network', difficulty: 'intermediate' },
    { id: 'linux-40', command: 'scp <src> <dest>', description: 'Secure copy over SSH', example: 'scp file user@host:/path', category: 'Network', difficulty: 'intermediate' },
    
    // System Info
    { id: 'linux-41', command: 'df -h', description: 'Display disk space usage', example: 'df -h /', category: 'System', difficulty: 'beginner' },
    { id: 'linux-42', command: 'du -sh <dir>', description: 'Display directory space usage', example: 'du -sh *', category: 'System', difficulty: 'beginner' },
    { id: 'linux-43', command: 'free -h', description: 'Display memory usage', example: 'free -h', category: 'System', difficulty: 'beginner' },
    { id: 'linux-44', command: 'uname -a', description: 'Display system information', example: 'uname -r (kernel version)', category: 'System', difficulty: 'beginner' },
    { id: 'linux-45', command: 'uptime', description: 'Show how long system has been running', example: 'uptime', category: 'System', difficulty: 'beginner' },
    { id: 'linux-46', command: 'whoami', description: 'Display current username', example: 'whoami', category: 'System', difficulty: 'beginner' },
    { id: 'linux-47', command: 'history', description: 'Display command history', example: 'history | grep ssh', category: 'System', difficulty: 'beginner' },
    { id: 'linux-48', command: 'env', description: 'Display environment variables', example: 'env | grep PATH', category: 'System', difficulty: 'intermediate' },
    { id: 'linux-49', command: 'export VAR=value', description: 'Set environment variable', example: 'export PATH=$PATH:/new', category: 'System', difficulty: 'intermediate' },
    
    // Archives
    { id: 'linux-50', command: 'tar -czvf <file.tar.gz> <dir>', description: 'Create compressed archive', example: 'tar -czvf backup.tar.gz /data', category: 'Archive', difficulty: 'intermediate' },
    { id: 'linux-51', command: 'tar -xzvf <file.tar.gz>', description: 'Extract compressed archive', example: 'tar -xzvf backup.tar.gz -C /dest', category: 'Archive', difficulty: 'intermediate' },
    { id: 'linux-52', command: 'zip / unzip', description: 'Compress/decompress zip files', example: 'zip -r archive.zip folder/', category: 'Archive', difficulty: 'beginner' },
  ],
  flashcards: [
    { id: 'fc-linux-1', front: 'What does ls -la show?', back: 'Lists all files (including hidden) in long format with permissions, owner, size, and modification date.', category: 'Files', difficulty: 'beginner' },
    { id: 'fc-linux-2', front: 'What is the difference between rm and rm -rf?', back: 'rm removes files. rm -rf removes recursively (-r) and forcefully (-f) without prompting, including directories.', category: 'Files', difficulty: 'beginner' },
    { id: 'fc-linux-3', front: 'What does chmod 755 mean?', back: 'Owner: read+write+execute (7), Group: read+execute (5), Others: read+execute (5). In binary: rwxr-xr-x', category: 'Permissions', difficulty: 'intermediate' },
    { id: 'fc-linux-4', front: 'How do you follow a log file in real-time?', back: 'tail -f filename.log (the -f flag follows the file as it grows)', category: 'Text', difficulty: 'beginner' },
    { id: 'fc-linux-5', front: 'What does the pipe operator | do?', back: 'Takes the output of the command on the left and passes it as input to the command on the right.', category: 'System', difficulty: 'beginner' },
    { id: 'fc-linux-6', front: 'How do you find all .js files in current directory recursively?', back: 'find . -name "*.js" or find . -type f -name "*.js"', category: 'Files', difficulty: 'intermediate' },
    { id: 'fc-linux-7', front: 'What does grep -r "pattern" . do?', back: 'Recursively searches for "pattern" in all files in the current directory and subdirectories.', category: 'Text', difficulty: 'intermediate' },
    { id: 'fc-linux-8', front: 'How do you kill a process by name?', back: 'killall processname or pkill processname', category: 'Process', difficulty: 'intermediate' },
    { id: 'fc-linux-9', front: 'What is the difference between > and >>?', back: '> overwrites the file (redirect). >> appends to the file (append redirect).', category: 'Text', difficulty: 'beginner' },
    { id: 'fc-linux-10', front: 'How do you check disk space usage?', back: 'df -h shows disk space for all mounted filesystems. du -sh shows size of current directory.', category: 'System', difficulty: 'beginner' },
    { id: 'fc-linux-11', front: 'What does sudo do?', back: 'Executes a command with superuser (root) privileges. Stands for "Super User DO".', category: 'Permissions', difficulty: 'beginner' },
    { id: 'fc-linux-12', front: 'How do you SSH into a server with a private key?', back: 'ssh -i /path/to/key.pem username@hostname', category: 'Network', difficulty: 'intermediate' },
    { id: 'fc-linux-13', front: 'What does ps aux show?', back: 'Shows all running processes for all users with detailed info (CPU, memory, command).', category: 'Process', difficulty: 'intermediate' },
    { id: 'fc-linux-14', front: 'How do you create a symbolic link?', back: 'ln -s /path/to/original /path/to/link', category: 'Files', difficulty: 'intermediate' },
    { id: 'fc-linux-15', front: 'What does tar -xzvf archive.tar.gz do?', back: 'Extracts (x) a gzipped (z) tar archive with verbose output (v) from file (f) archive.tar.gz', category: 'Archive', difficulty: 'intermediate' },
  ],
  quizQuestions: [
    {
      id: 'q-linux-1',
      question: 'Which command lists all files including hidden ones?',
      options: ['ls', 'ls -a', 'ls -l', 'ls --hidden'],
      correctAnswer: 1,
      explanation: 'ls -a shows all files including hidden files (those starting with a dot).',
      category: 'Files'
    },
    {
      id: 'q-linux-2',
      question: 'What does the command "chmod 644 file.txt" do?',
      options: [
        'Makes file executable',
        'Owner read+write, group and others read only',
        'Gives everyone full access',
        'Makes file hidden'
      ],
      correctAnswer: 1,
      explanation: '644 means: owner can read/write (6), group can read (4), others can read (4).',
      category: 'Permissions'
    },
    {
      id: 'q-linux-3',
      question: 'Which command shows disk space usage in human-readable format?',
      options: ['disk -h', 'df -h', 'du -h', 'space -h'],
      correctAnswer: 1,
      explanation: 'df -h displays disk space usage for all mounted filesystems in human-readable format.',
      category: 'System'
    },
    {
      id: 'q-linux-4',
      question: 'What does the pipe operator (|) do?',
      options: [
        'Writes output to a file',
        'Runs commands in parallel',
        'Passes output of one command as input to another',
        'Creates a backup'
      ],
      correctAnswer: 2,
      explanation: 'The pipe takes stdout from one command and passes it as stdin to another.',
      category: 'System'
    },
    {
      id: 'q-linux-5',
      question: 'Which command is used to search for text in files?',
      options: ['find', 'search', 'grep', 'locate'],
      correctAnswer: 2,
      explanation: 'grep searches for patterns/text within files. find locates files by name.',
      category: 'Text'
    },
    {
      id: 'q-linux-6',
      question: 'What does "tail -f logfile.log" do?',
      options: [
        'Shows first lines of file',
        'Follows the file in real-time',
        'Counts lines in file',
        'Deletes last lines'
      ],
      correctAnswer: 1,
      explanation: 'tail -f follows the file and displays new lines as they are added (useful for logs).',
      category: 'Text'
    },
    {
      id: 'q-linux-7',
      question: 'Which command forcefully terminates a process?',
      options: ['kill', 'kill -9', 'stop', 'end'],
      correctAnswer: 1,
      explanation: 'kill -9 sends SIGKILL which forcefully terminates a process immediately.',
      category: 'Process'
    },
    {
      id: 'q-linux-8',
      question: 'What does "mkdir -p path/to/dir" do?',
      options: [
        'Creates only the last directory',
        'Creates all parent directories as needed',
        'Creates a protected directory',
        'Prints the directory path'
      ],
      correctAnswer: 1,
      explanation: 'The -p flag creates parent directories as needed, no error if they exist.',
      category: 'Files'
    },
    {
      id: 'q-linux-9',
      question: 'Which redirection operator appends to a file instead of overwriting?',
      options: ['>', '>>', '|', '<'],
      correctAnswer: 1,
      explanation: '>> appends to a file while > overwrites the file.',
      category: 'Text'
    },
    {
      id: 'q-linux-10',
      question: 'What command shows the current directory path?',
      options: ['cd', 'pwd', 'dir', 'path'],
      correctAnswer: 1,
      explanation: 'pwd (print working directory) displays the full path of the current directory.',
      category: 'Files'
    },
  ],
};

