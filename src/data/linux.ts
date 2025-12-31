import { TopicData } from '@/types';

export const linuxData: TopicData = {
  name: 'Linux',
  description: 'Essential Linux/Unix commands for system administration and development',
  icon: '🐧',
  color: '#FCC624',
  gradient: 'from-yellow-400 via-amber-500 to-orange-500',
  commands: [
    // ============ LINUX BASICS ============
    { id: 'linux-1', command: 'uname -a', description: 'Display system information (kernel, hostname, OS)', example: 'uname -r (kernel version only)', category: 'Basics', difficulty: 'beginner' },
    { id: 'linux-2', command: 'pwd', description: 'Print working directory - shows current location', example: 'pwd', category: 'Basics', difficulty: 'beginner' },
    { id: 'linux-3', command: 'whoami', description: 'Display current username', example: 'whoami', category: 'Basics', difficulty: 'beginner' },
    { id: 'linux-4', command: 'echo "text"', description: 'Print text to terminal', example: 'echo "Hello World"', category: 'Basics', difficulty: 'beginner' },
    { id: 'linux-5', command: 'clear', description: 'Clear the terminal screen', example: 'clear or Ctrl+L', category: 'Basics', difficulty: 'beginner' },
    { id: 'linux-6', command: 'history', description: 'Display command history', example: 'history | grep ssh', category: 'Basics', difficulty: 'beginner' },
    { id: 'linux-7', command: 'man <command>', description: 'Display manual page for a command', example: 'man ls', category: 'Basics', difficulty: 'beginner' },
    { id: 'linux-8', command: 'sudo su -', description: 'Switch to root user with root home directory', example: 'sudo su - (lands in /root)', category: 'Basics', difficulty: 'beginner' },
    { id: 'linux-9', command: 'sudo su', description: 'Switch to root user, stay in current directory', example: 'sudo su', category: 'Basics', difficulty: 'beginner' },
    { id: 'linux-10', command: 'exit', description: 'Exit current shell or user session', example: 'exit', category: 'Basics', difficulty: 'beginner' },

    // ============ FILE SYSTEM & NAVIGATION ============
    { id: 'linux-11', command: 'ls', description: 'List directory contents', example: 'ls -la (detailed + hidden)', category: 'Files', difficulty: 'beginner' },
    { id: 'linux-12', command: 'ls -l', description: 'List files in long format (alphabetical)', example: 'ls -l', category: 'Files', difficulty: 'beginner' },
    { id: 'linux-13', command: 'ls -lr', description: 'List files in reverse alphabetical order', example: 'ls -lr', category: 'Files', difficulty: 'beginner' },
    { id: 'linux-14', command: 'ls -lt', description: 'List files by time (latest on top)', example: 'ls -lt', category: 'Files', difficulty: 'beginner' },
    { id: 'linux-15', command: 'ls -ltr', description: 'List files by time (oldest on top)', example: 'ls -ltr', category: 'Files', difficulty: 'beginner' },
    { id: 'linux-16', command: 'cd <dir>', description: 'Change directory', example: 'cd ~ (home), cd .. (parent), cd / (root)', category: 'Files', difficulty: 'beginner' },
    { id: 'linux-17', command: 'touch <file>', description: 'Create empty file or update timestamp', example: 'touch newfile.txt', category: 'Files', difficulty: 'beginner' },
    { id: 'linux-18', command: 'mkdir <dir>', description: 'Create a directory', example: 'mkdir -p path/to/dir', category: 'Files', difficulty: 'beginner' },
    { id: 'linux-19', command: 'rmdir <dir>', description: 'Remove empty directory', example: 'rmdir emptydir', category: 'Files', difficulty: 'beginner' },
    { id: 'linux-20', command: 'rm -r <dir>', description: 'Remove directory and contents recursively', example: 'rm -rf folder (force)', category: 'Files', difficulty: 'beginner' },
    { id: 'linux-21', command: 'cp <src> <dest>', description: 'Copy files or directories', example: 'cp -r dir1 dir2', category: 'Files', difficulty: 'beginner' },
    { id: 'linux-22', command: 'mv <src> <dest>', description: 'Move or rename files/directories', example: 'mv old.txt new.txt', category: 'Files', difficulty: 'beginner' },
    { id: 'linux-23', command: 'cat <file>', description: 'Display file contents', example: 'cat > file (create with input)', category: 'Files', difficulty: 'beginner' },
    { id: 'linux-24', command: 'cat > file', description: 'Create file and enter text (Ctrl+D to save)', example: 'cat > notes.txt', category: 'Files', difficulty: 'beginner' },
    { id: 'linux-25', command: 'cat >> file', description: 'Append text to file (does not replace)', example: 'cat >> notes.txt', category: 'Files', difficulty: 'beginner' },
    { id: 'linux-26', command: 'head <file>', description: 'Display first 10 lines of file', example: 'head -n 20 file.txt', category: 'Files', difficulty: 'beginner' },
    { id: 'linux-27', command: 'tail <file>', description: 'Display last 10 lines of file', example: 'tail -f log.txt (follow)', category: 'Files', difficulty: 'beginner' },
    { id: 'linux-28', command: 'head -n X | tail -n Y', description: 'Display specific line range', example: 'head -n 65 file | tail -n 11 (lines 55-65)', category: 'Files', difficulty: 'intermediate' },
    { id: 'linux-29', command: 'find <path> -name <pattern>', description: 'Search for files by name', example: 'find . -name "*.txt"', category: 'Files', difficulty: 'intermediate' },
    { id: 'linux-30', command: 'ln -s <target> <link>', description: 'Create symbolic link', example: 'ln -s /path/file link', category: 'Files', difficulty: 'intermediate' },

    // ============ TEXT PROCESSING ============
    { id: 'linux-31', command: 'grep <pattern> <file>', description: 'Search text patterns in files', example: 'grep -r "error" logs/', category: 'Text', difficulty: 'intermediate' },
    { id: 'linux-32', command: 'grep -n', description: 'Show line numbers with matches', example: 'grep -n "error" file.log', category: 'Text', difficulty: 'intermediate' },
    { id: 'linux-33', command: 'grep -c', description: 'Count lines with matches', example: 'grep -c "error" file.log', category: 'Text', difficulty: 'intermediate' },
    { id: 'linux-34', command: 'grep -i', description: 'Case-insensitive search', example: 'grep -i "Error" file.log', category: 'Text', difficulty: 'intermediate' },
    { id: 'linux-35', command: 'grep -v', description: 'Invert match (non-matching lines)', example: 'grep -v "success" file.log', category: 'Text', difficulty: 'intermediate' },
    { id: 'linux-36', command: 'cut -d":" -f1', description: 'Cut/extract fields from text', example: 'cut -d":" -f1 /etc/passwd', category: 'Text', difficulty: 'intermediate' },
    { id: 'linux-37', command: 'awk -F ":" \'{print $1}\'', description: 'Pattern scanning and processing', example: 'awk -F "/" \'{print $1}\'', category: 'Text', difficulty: 'advanced' },
    { id: 'linux-38', command: 'sed \'s/old/new/g\'', description: 'Stream editor for text transformation', example: 'sed "s/root/ROOT/g" file', category: 'Text', difficulty: 'advanced' },
    { id: 'linux-39', command: 'wc -l', description: 'Count lines in file', example: 'wc -l file.txt', category: 'Text', difficulty: 'beginner' },
    { id: 'linux-40', command: 'sort', description: 'Sort lines of text', example: 'sort -n numbers.txt', category: 'Text', difficulty: 'intermediate' },
    { id: 'linux-41', command: 'uniq', description: 'Filter duplicate lines', example: 'sort file | uniq -c', category: 'Text', difficulty: 'intermediate' },
    { id: 'linux-42', command: '| (pipe)', description: 'Pass output of one command to another', example: 'ls -l | grep ".txt"', category: 'Text', difficulty: 'beginner' },
    { id: 'linux-43', command: '> (redirect)', description: 'Redirect output to file (overwrites)', example: 'echo "text" > file.txt', category: 'Text', difficulty: 'beginner' },
    { id: 'linux-44', command: '>> (append)', description: 'Append output to file', example: 'echo "text" >> file.txt', category: 'Text', difficulty: 'beginner' },

    // ============ VIM EDITOR ============
    { id: 'linux-45', command: 'vim <file>', description: 'Open file in vim editor (creates if not exists)', example: 'vim script.sh', category: 'Vim', difficulty: 'intermediate' },
    { id: 'linux-46', command: ':wq', description: 'Vim: Write and quit', example: 'Press Esc, then :wq', category: 'Vim', difficulty: 'intermediate' },
    { id: 'linux-47', command: ':q!', description: 'Vim: Quit without saving', example: 'Press Esc, then :q!', category: 'Vim', difficulty: 'intermediate' },
    { id: 'linux-48', command: ':set nu', description: 'Vim: Display line numbers', example: ':set nu', category: 'Vim', difficulty: 'intermediate' },
    { id: 'linux-49', command: '/<word>', description: 'Vim: Search from top', example: '/error', category: 'Vim', difficulty: 'intermediate' },
    { id: 'linux-50', command: '?<word>', description: 'Vim: Search from bottom', example: '?error', category: 'Vim', difficulty: 'intermediate' },
    { id: 'linux-51', command: ':28s/old/new', description: 'Vim: Replace first occurrence on line 28', example: ':28s/root/ROOT', category: 'Vim', difficulty: 'intermediate' },
    { id: 'linux-52', command: ':%s/old/new/g', description: 'Vim: Replace all occurrences in file', example: ':%s/root/ROOT/g', category: 'Vim', difficulty: 'intermediate' },
    { id: 'linux-53', command: 'dd', description: 'Vim: Delete current line', example: 'Press dd in esc mode', category: 'Vim', difficulty: 'intermediate' },
    { id: 'linux-54', command: 'yy', description: 'Vim: Copy (yank) current line', example: 'Press yy, then p to paste', category: 'Vim', difficulty: 'intermediate' },
    { id: 'linux-55', command: 'u', description: 'Vim: Undo', example: 'Press u in esc mode', category: 'Vim', difficulty: 'intermediate' },
    { id: 'linux-56', command: 'gg / G', description: 'Vim: Go to top (gg) or bottom (G) of file', example: 'gg or Shift+G', category: 'Vim', difficulty: 'intermediate' },

    // ============ USER MANAGEMENT ============
    { id: 'linux-57', command: 'useradd <user>', description: 'Create a new user', example: 'useradd suresh', category: 'Users', difficulty: 'intermediate' },
    { id: 'linux-58', command: 'groupadd <group>', description: 'Create a new group', example: 'groupadd devops', category: 'Users', difficulty: 'intermediate' },
    { id: 'linux-59', command: 'id <user>', description: 'Display user ID and group information', example: 'id suresh', category: 'Users', difficulty: 'intermediate' },
    { id: 'linux-60', command: 'usermod -g <group> <user>', description: 'Change user primary group', example: 'usermod -g devops suresh', category: 'Users', difficulty: 'intermediate' },
    { id: 'linux-61', command: 'usermod -aG <group> <user>', description: 'Add user to secondary group', example: 'usermod -aG wheel suresh', category: 'Users', difficulty: 'intermediate' },
    { id: 'linux-62', command: 'passwd <user>', description: 'Set or change user password', example: 'passwd suresh', category: 'Users', difficulty: 'intermediate' },
    { id: 'linux-63', command: 'gpasswd -d <user> <group>', description: 'Remove user from group', example: 'gpasswd -d suresh devops', category: 'Users', difficulty: 'intermediate' },
    { id: 'linux-64', command: 'userdel <user>', description: 'Delete a user', example: 'userdel -r suresh', category: 'Users', difficulty: 'intermediate' },
    { id: 'linux-65', command: 'visudo', description: 'Edit sudoers file safely with syntax check', example: 'visudo', category: 'Users', difficulty: 'advanced' },

    // ============ FILE PERMISSIONS ============
    { id: 'linux-66', command: 'chmod <mode> <file>', description: 'Change file permissions', example: 'chmod 755 script.sh', category: 'Permissions', difficulty: 'intermediate' },
    { id: 'linux-67', command: 'chmod g+w <file>', description: 'Add write permission for group', example: 'chmod g+w file.txt', category: 'Permissions', difficulty: 'intermediate' },
    { id: 'linux-68', command: 'chown <user>:<group> <file>', description: 'Change file ownership (root only)', example: 'chown suresh:devops file', category: 'Permissions', difficulty: 'intermediate' },
    { id: 'linux-69', command: 'chown -R', description: 'Change ownership recursively', example: 'chown -R user:group /dir', category: 'Permissions', difficulty: 'intermediate' },

    // ============ SSH & SECURITY ============
    { id: 'linux-70', command: 'ssh -i <key> user@host', description: 'SSH login with private key', example: 'ssh -i daws.pem ec2-user@IP', category: 'SSH', difficulty: 'intermediate' },
    { id: 'linux-71', command: 'ssh-keygen -f <name>', description: 'Generate SSH key pair', example: 'ssh-keygen -f mykey', category: 'SSH', difficulty: 'intermediate' },
    { id: 'linux-72', command: 'sshd -t', description: 'Check SSH configuration syntax', example: 'sshd -t', category: 'SSH', difficulty: 'intermediate' },
    { id: 'linux-73', command: 'scp <src> <dest>', description: 'Secure copy over SSH', example: 'scp file user@host:/path', category: 'SSH', difficulty: 'intermediate' },

    // ============ PACKAGE MANAGEMENT ============
    { id: 'linux-74', command: 'dnf install <pkg>', description: 'Install a package (RHEL/CentOS)', example: 'dnf install nginx -y', category: 'Packages', difficulty: 'intermediate' },
    { id: 'linux-75', command: 'dnf remove <pkg>', description: 'Remove a package', example: 'dnf remove nginx', category: 'Packages', difficulty: 'intermediate' },
    { id: 'linux-76', command: 'dnf update', description: 'Update all packages', example: 'dnf update -y', category: 'Packages', difficulty: 'intermediate' },
    { id: 'linux-77', command: 'dnf list installed', description: 'List installed packages', example: 'dnf list installed', category: 'Packages', difficulty: 'intermediate' },
    { id: 'linux-78', command: 'dnf list available', description: 'List available packages from repos', example: 'dnf list available | grep nginx', category: 'Packages', difficulty: 'intermediate' },
    { id: 'linux-79', command: 'dnf module enable <mod>', description: 'Enable a module stream', example: 'dnf module enable nodejs:20 -y', category: 'Packages', difficulty: 'intermediate' },
    { id: 'linux-80', command: 'apt-get install <pkg>', description: 'Install package (Ubuntu/Debian)', example: 'apt-get install nginx', category: 'Packages', difficulty: 'intermediate' },

    // ============ SERVICE MANAGEMENT ============
    { id: 'linux-81', command: 'systemctl start <service>', description: 'Start a service', example: 'systemctl start nginx', category: 'Services', difficulty: 'intermediate' },
    { id: 'linux-82', command: 'systemctl stop <service>', description: 'Stop a service', example: 'systemctl stop nginx', category: 'Services', difficulty: 'intermediate' },
    { id: 'linux-83', command: 'systemctl restart <service>', description: 'Restart a service', example: 'systemctl restart nginx', category: 'Services', difficulty: 'intermediate' },
    { id: 'linux-84', command: 'systemctl status <service>', description: 'Check service status', example: 'systemctl status nginx', category: 'Services', difficulty: 'intermediate' },
    { id: 'linux-85', command: 'systemctl enable <service>', description: 'Enable service to start on boot', example: 'systemctl enable nginx', category: 'Services', difficulty: 'intermediate' },
    { id: 'linux-86', command: 'systemctl disable <service>', description: 'Disable service from starting on boot', example: 'systemctl disable nginx', category: 'Services', difficulty: 'intermediate' },

    // ============ PROCESS MANAGEMENT ============
    { id: 'linux-87', command: 'ps', description: 'List processes started by current user', example: 'ps', category: 'Process', difficulty: 'intermediate' },
    { id: 'linux-88', command: 'ps -ef', description: 'List all processes with full details', example: 'ps -ef | grep nginx', category: 'Process', difficulty: 'intermediate' },
    { id: 'linux-89', command: 'top', description: 'Display live process and resource usage', example: 'top', category: 'Process', difficulty: 'intermediate' },
    { id: 'linux-90', command: 'kill <PID>', description: 'Request process termination', example: 'kill 1234', category: 'Process', difficulty: 'intermediate' },
    { id: 'linux-91', command: 'kill -9 <PID>', description: 'Force kill process', example: 'kill -9 1234', category: 'Process', difficulty: 'intermediate' },
    { id: 'linux-92', command: 'command &', description: 'Run command in background', example: 'sleep 100 &', category: 'Process', difficulty: 'intermediate' },

    // ============ NETWORKING ============
    { id: 'linux-93', command: 'netstat -lntp', description: 'Show listening ports and PIDs', example: 'netstat -lntp', category: 'Network', difficulty: 'intermediate' },
    { id: 'linux-94', command: 'curl <url>', description: 'Transfer data from URL (prints to screen)', example: 'curl https://example.com', category: 'Network', difficulty: 'intermediate' },
    { id: 'linux-95', command: 'wget <url>', description: 'Download file from URL', example: 'wget https://example.com/file.zip', category: 'Network', difficulty: 'beginner' },
    { id: 'linux-96', command: 'ping <host>', description: 'Test network connectivity', example: 'ping -c 4 google.com', category: 'Network', difficulty: 'beginner' },
    { id: 'linux-97', command: 'ip addr', description: 'Display network interface information', example: 'ip addr show', category: 'Network', difficulty: 'intermediate' },

    // ============ DISK & SYSTEM INFO ============
    { id: 'linux-98', command: 'df -h', description: 'Display disk space usage', example: 'df -h', category: 'Disk', difficulty: 'beginner' },
    { id: 'linux-99', command: 'du -sh <dir>', description: 'Display directory size', example: 'du -sh /var/log', category: 'Disk', difficulty: 'beginner' },
    { id: 'linux-100', command: 'free -h', description: 'Display memory usage', example: 'free -h', category: 'System', difficulty: 'beginner' },
    { id: 'linux-101', command: 'uptime', description: 'Show system uptime and load', example: 'uptime', category: 'System', difficulty: 'beginner' },

    // ============ LOG MANAGEMENT ============
    { id: 'linux-102', command: 'tail -f /var/log/messages', description: 'Follow system log in real-time', example: 'tail -f /var/log/syslog', category: 'Logs', difficulty: 'intermediate' },
    { id: 'linux-103', command: 'journalctl', description: 'Query systemd journal logs', example: 'journalctl -u nginx', category: 'Logs', difficulty: 'intermediate' },
    { id: 'linux-104', command: 'dmesg', description: 'Display kernel ring buffer messages', example: 'dmesg | tail', category: 'Logs', difficulty: 'intermediate' },

    // ============ BASH SCRIPTING ============
    { id: 'linux-105', command: '#!/bin/bash', description: 'Shebang - tells system to use bash interpreter', example: 'First line of every bash script', category: 'Bash', difficulty: 'beginner' },
    { id: 'linux-106', command: 'chmod +x script.sh', description: 'Make script executable', example: 'chmod +x myscript.sh', category: 'Bash', difficulty: 'beginner' },
    { id: 'linux-107', command: './script.sh', description: 'Execute a script in current directory', example: './deploy.sh', category: 'Bash', difficulty: 'beginner' },
    { id: 'linux-108', command: 'bash script.sh', description: 'Execute script with bash', example: 'bash -x script.sh (debug mode)', category: 'Bash', difficulty: 'beginner' },
    { id: 'linux-109', command: 'VAR=value', description: 'Assign variable (no spaces around =)', example: 'NAME="John"', category: 'Bash', difficulty: 'beginner' },
    { id: 'linux-110', command: '$VAR or ${VAR}', description: 'Access variable value', example: 'echo $NAME or echo ${NAME}', category: 'Bash', difficulty: 'beginner' },
    { id: 'linux-111', command: 'read VAR', description: 'Read user input into variable', example: 'read -p "Enter name: " NAME', category: 'Bash', difficulty: 'beginner' },
    { id: 'linux-112', command: '$1, $2, $@, $#', description: 'Script arguments ($1=first, $@=all, $#=count)', example: 'echo "First arg: $1"', category: 'Bash', difficulty: 'intermediate' },
    { id: 'linux-113', command: '$?', description: 'Exit status of last command (0=success)', example: 'echo $?', category: 'Bash', difficulty: 'intermediate' },
    { id: 'linux-114', command: '$(command)', description: 'Command substitution', example: 'DATE=$(date +%Y-%m-%d)', category: 'Bash', difficulty: 'intermediate' },
    { id: 'linux-115', command: 'if [ condition ]; then', description: 'If statement', example: 'if [ $x -gt 5 ]; then echo "big"; fi', category: 'Bash', difficulty: 'intermediate' },
    { id: 'linux-116', command: 'for item in list; do', description: 'For loop', example: 'for i in 1 2 3; do echo $i; done', category: 'Bash', difficulty: 'intermediate' },
    { id: 'linux-117', command: 'while [ condition ]; do', description: 'While loop', example: 'while [ $x -lt 10 ]; do ((x++)); done', category: 'Bash', difficulty: 'intermediate' },
    { id: 'linux-118', command: 'case $var in', description: 'Case/switch statement', example: 'case $opt in a) echo A;; b) echo B;; esac', category: 'Bash', difficulty: 'intermediate' },
    { id: 'linux-119', command: 'function name() { }', description: 'Define a function', example: 'function greet() { echo "Hello $1"; }', category: 'Bash', difficulty: 'intermediate' },
    { id: 'linux-120', command: '-eq, -ne, -gt, -lt', description: 'Numeric comparison operators', example: '[ $a -eq $b ] (equals)', category: 'Bash', difficulty: 'intermediate' },
    { id: 'linux-121', command: '=, !=, -z, -n', description: 'String comparison operators', example: '[ "$str" = "hello" ]', category: 'Bash', difficulty: 'intermediate' },
    { id: 'linux-122', command: '-f, -d, -e, -r, -w, -x', description: 'File test operators', example: '[ -f file.txt ] (is file)', category: 'Bash', difficulty: 'intermediate' },
    { id: 'linux-123', command: '&&, ||', description: 'Logical AND, OR operators', example: '[ $a -gt 0 ] && echo "positive"', category: 'Bash', difficulty: 'intermediate' },
    { id: 'linux-124', command: 'set -e', description: 'Exit script on any error', example: 'set -e (at top of script)', category: 'Bash', difficulty: 'intermediate' },
    { id: 'linux-125', command: 'set -x', description: 'Print commands before executing (debug)', example: 'set -x', category: 'Bash', difficulty: 'intermediate' },
    { id: 'linux-126', command: 'exit N', description: 'Exit script with status code', example: 'exit 0 (success), exit 1 (error)', category: 'Bash', difficulty: 'beginner' },
    { id: 'linux-127', command: 'source script.sh', description: 'Execute script in current shell', example: 'source ~/.bashrc or . ~/.bashrc', category: 'Bash', difficulty: 'intermediate' },
    { id: 'linux-128', command: 'export VAR', description: 'Export variable to child processes', example: 'export PATH=$PATH:/new/path', category: 'Bash', difficulty: 'intermediate' },
    { id: 'linux-129', command: 'local VAR', description: 'Declare local variable in function', example: 'local result=0', category: 'Bash', difficulty: 'intermediate' },
    { id: 'linux-130', command: 'trap command signal', description: 'Execute command on signal', example: 'trap "rm temp.txt" EXIT', category: 'Bash', difficulty: 'advanced' },
    { id: 'linux-131', command: 'shift', description: 'Shift positional parameters left', example: 'shift (removes $1, $2 becomes $1)', category: 'Bash', difficulty: 'intermediate' },
    { id: 'linux-132', command: '${VAR:-default}', description: 'Use default if VAR is unset', example: 'echo ${NAME:-"Guest"}', category: 'Bash', difficulty: 'intermediate' },
    { id: 'linux-133', command: '${#VAR}', description: 'Length of variable', example: 'echo ${#NAME} (string length)', category: 'Bash', difficulty: 'intermediate' },
    { id: 'linux-134', command: '${VAR:0:5}', description: 'Substring extraction', example: 'echo ${STR:0:5} (first 5 chars)', category: 'Bash', difficulty: 'intermediate' },
    { id: 'linux-135', command: 'array=(a b c)', description: 'Declare array', example: 'arr=(one two three)', category: 'Bash', difficulty: 'intermediate' },
    { id: 'linux-136', command: '${array[@]}', description: 'All array elements', example: 'echo ${arr[@]}', category: 'Bash', difficulty: 'intermediate' },
    { id: 'linux-137', command: '${#array[@]}', description: 'Array length', example: 'echo ${#arr[@]}', category: 'Bash', difficulty: 'intermediate' },
    { id: 'linux-138', command: 'crontab -e', description: 'Edit user crontab (scheduled tasks)', example: 'crontab -e', category: 'Bash', difficulty: 'intermediate' },
    { id: 'linux-139', command: '* * * * * command', description: 'Cron syntax (min hour day month weekday)', example: '0 2 * * * /backup.sh (2 AM daily)', category: 'Bash', difficulty: 'intermediate' },
  ],

  flashcards: [
    // ============ LINUX BASICS ============
    { id: 'fc-linux-1', front: 'What is the difference between Linux and Unix?', back: 'Unix = Hardware + Unix OS (proprietary). Linux = Kernel developed by Linus Torvalds + utilities (open source). Kernel connects software with hardware.', category: 'Basics', difficulty: 'beginner' },
    { id: 'fc-linux-2', front: 'What does $ and # symbols mean in terminal?', back: '$ = Normal user prompt. # = Root user prompt (superuser with full privileges)', category: 'Basics', difficulty: 'beginner' },
    { id: 'fc-linux-3', front: 'What is the difference between "sudo su -" and "sudo su"?', back: 'sudo su - : Switch to root AND go to root home directory (/root). sudo su : Switch to root but stay in current directory.', category: 'Basics', difficulty: 'beginner' },
    { id: 'fc-linux-4', front: 'What is the root user home directory vs normal user?', back: 'Root user: /root. Normal user: /home/<username> (e.g., /home/ec2-user)', category: 'Basics', difficulty: 'beginner' },
    { id: 'fc-linux-5', front: 'What is the difference between absolute and relative path?', back: 'Absolute path: Starts from root directory with / (e.g., /home/user/file). Relative path: From current directory (e.g., ./file or ../parent/file)', category: 'Basics', difficulty: 'beginner' },
    
    // ============ FILE SYSTEM ============
    { id: 'fc-linux-6', front: 'What are the important directories in Linux file hierarchy?', back: '/ = root, /home = user homes, /etc = config files, /var = variable data/logs, /tmp = temporary files, /bin = essential binaries, /usr = user programs', category: 'Files', difficulty: 'beginner' },
    { id: 'fc-linux-7', front: 'What is the difference between > and >> redirection?', back: '> = Redirect and OVERWRITE file contents. >> = Redirect and APPEND to file (preserves existing content)', category: 'Files', difficulty: 'beginner' },
    { id: 'fc-linux-8', front: 'How do you view lines 55-65 of a file?', back: 'head -n 65 file | tail -n 11 (get first 65 lines, then last 11 of those)', category: 'Files', difficulty: 'intermediate' },
    { id: 'fc-linux-9', front: 'What does rm -rf do and why is it dangerous?', back: 'rm -r = delete recursively (folders + contents). -f = force (no confirmation). Together they delete everything without asking - very dangerous!', category: 'Files', difficulty: 'beginner' },
    { id: 'fc-linux-10', front: 'What is the pipe operator (|) in Linux?', back: 'Pipe passes the OUTPUT of one command as INPUT to another command. Example: ls -l | grep ".txt" (list files then filter for .txt)', category: 'Files', difficulty: 'beginner' },

    // ============ PERMISSIONS ============
    { id: 'fc-linux-11', front: 'What do the permission numbers 4, 2, 1 represent?', back: 'Read = 4, Write = 2, Execute = 1. Combined: 7 = rwx, 6 = rw-, 5 = r-x, 4 = r--. Example: 755 = rwxr-xr-x', category: 'Permissions', difficulty: 'intermediate' },
    { id: 'fc-linux-12', front: 'What does chmod 755 mean?', back: 'Owner: read+write+execute (7=rwx). Group: read+execute (5=r-x). Others: read+execute (5=r-x). Common for scripts.', category: 'Permissions', difficulty: 'intermediate' },
    { id: 'fc-linux-13', front: 'Who can use chmod vs chown?', back: 'chmod: File owner OR root can change permissions. chown: ONLY root can change ownership (even owner cannot).', category: 'Permissions', difficulty: 'intermediate' },
    { id: 'fc-linux-14', front: 'What permissions should .ssh folder and authorized_keys have?', back: '.ssh folder = 700 (only owner full access). authorized_keys = 600 (owner read+write only). Ownership must be the user.', category: 'Permissions', difficulty: 'intermediate' },
    
    // ============ USER MANAGEMENT ============
    { id: 'fc-linux-15', front: 'What happens when you create a user in Linux?', back: 'By default, Linux creates: 1) User account 2) Group with same name as username 3) Home directory at /home/<username>', category: 'Users', difficulty: 'intermediate' },
    { id: 'fc-linux-16', front: 'What is the difference between primary and secondary groups?', back: 'Primary group: Main group (every user must have one). Secondary groups: Additional groups user belongs to. Use usermod -g for primary, -aG for secondary.', category: 'Users', difficulty: 'intermediate' },
    { id: 'fc-linux-17', front: 'Where are user, group, and password information stored?', back: '/etc/passwd = user info. /etc/group = group info. /etc/shadow = encrypted passwords. /etc/sudoers = sudo privileges.', category: 'Users', difficulty: 'intermediate' },
    { id: 'fc-linux-18', front: 'How do you give sudo access to a user?', back: '1) Add user to wheel group: usermod -aG wheel username. 2) Edit /etc/sudoers with visudo to allow wheel group without password.', category: 'Users', difficulty: 'intermediate' },

    // ============ VIM EDITOR ============
    { id: 'fc-linux-19', front: 'What are the three modes in Vim?', back: '1) ESC/Normal mode: Navigation, delete, copy. 2) Insert mode (i): Type text. 3) Command mode (:): Save, quit, search, replace.', category: 'Vim', difficulty: 'intermediate' },
    { id: 'fc-linux-20', front: 'How do you search and replace all occurrences in Vim?', back: ':%s/old/new/g - % = all lines, s = substitute, g = global (all occurrences). Without g, only first occurrence per line.', category: 'Vim', difficulty: 'intermediate' },
    { id: 'fc-linux-21', front: 'What do yy, dd, p, and u do in Vim?', back: 'yy = yank/copy line. dd = delete line. p = paste below, P = paste above. u = undo. Ctrl+r = redo.', category: 'Vim', difficulty: 'intermediate' },

    // ============ SERVICES & PROCESSES ============
    { id: 'fc-linux-22', front: 'What is the difference between systemctl enable and start?', back: 'start: Starts service NOW. enable: Configures service to start automatically on system boot. Use both for persistent services.', category: 'Services', difficulty: 'intermediate' },
    { id: 'fc-linux-23', front: 'What is the difference between foreground and background processes?', back: 'Foreground: Blocks terminal until complete. Background: Runs in background (add & at end). Example: sleep 100 &', category: 'Process', difficulty: 'intermediate' },
    { id: 'fc-linux-24', front: 'What is the difference between kill and kill -9?', back: 'kill PID = Polite request to terminate (process can cleanup). kill -9 PID = Force kill immediately (no cleanup, use as last resort).', category: 'Process', difficulty: 'intermediate' },
    { id: 'fc-linux-25', front: 'What does ps -ef show?', back: 'Lists ALL processes with: UID (user), PID (process ID), PPID (parent process ID), CPU time, start time, command. Use with grep to filter.', category: 'Process', difficulty: 'intermediate' },

    // ============ PACKAGE MANAGEMENT ============
    { id: 'fc-linux-26', front: 'What is the difference between dnf and apt-get?', back: 'dnf (formerly yum): RHEL/CentOS/Fedora/Amazon Linux. apt-get: Ubuntu/Debian. Both are package managers for installing software.', category: 'Packages', difficulty: 'intermediate' },
    { id: 'fc-linux-27', front: 'Where are yum/dnf repository configurations stored?', back: '/etc/yum.repos.d/ - Contains .repo files that define where to download packages from.', category: 'Packages', difficulty: 'intermediate' },

    // ============ SSH ============
    { id: 'fc-linux-28', front: 'What is SSH and what port does it use?', back: 'SSH = Secure Shell for encrypted remote login. Default port = 22. Config file: /etc/ssh/sshd_config', category: 'SSH', difficulty: 'beginner' },
    { id: 'fc-linux-29', front: 'How do you set up SSH key authentication for a user?', back: '1) Create .ssh folder in user home (700 permissions). 2) Create authorized_keys file (600 permissions). 3) Add public key to authorized_keys. 4) Set ownership to user.', category: 'SSH', difficulty: 'intermediate' },

    // ============ NETWORKING ============
    { id: 'fc-linux-30', front: 'What is the difference between curl and wget?', back: 'curl: Displays content on screen (good for APIs). wget: Downloads file to disk (good for file downloads).', category: 'Network', difficulty: 'beginner' },
    { id: 'fc-linux-31', front: 'How many ports are available on a computer?', back: '0 - 65,535 ports. Well-known ports: 22 (SSH), 80 (HTTP), 443 (HTTPS), 3306 (MySQL).', category: 'Network', difficulty: 'beginner' },

    // ============ 3-TIER ARCHITECTURE ============
    { id: 'fc-linux-32', front: 'What is 3-tier architecture?', back: 'Web/Frontend Tier: Load balancer + Web server (nginx). Application Tier: Backend (Java, Python, Node.js). Database Tier: Data storage (MySQL, MongoDB). Provides loose coupling/decoupling.', category: 'Architecture', difficulty: 'intermediate' },
    { id: 'fc-linux-33', front: 'What is the CRUD acronym?', back: 'Create, Read, Update, Delete - The four basic operations for data management in applications and databases.', category: 'Architecture', difficulty: 'beginner' },
    { id: 'fc-linux-34', front: 'What is an AMI in AWS context?', back: 'AMI = Amazon Machine Image. Image = OS + pre-installed software. Used to launch EC2 instances with consistent configuration.', category: 'Architecture', difficulty: 'intermediate' },

    // ============ GREP OPTIONS ============
    { id: 'fc-linux-35', front: 'What are the common grep options?', back: '-n: line numbers, -c: count matches, -i: ignore case, -v: invert (non-matching), -r: recursive search in directories', category: 'Text', difficulty: 'intermediate' },

    // ============ BASH SCRIPTING ============
    { id: 'fc-linux-36', front: 'What is the shebang and why is it important?', back: '#!/bin/bash (first line of script). Tells the system which interpreter to use. Without it, system may use wrong shell or require explicit bash command.', category: 'Bash', difficulty: 'beginner' },
    { id: 'fc-linux-37', front: 'How do you make a script executable?', back: 'chmod +x script.sh - Adds execute permission. Then run with ./script.sh. Without execute permission, you can still run with bash script.sh.', category: 'Bash', difficulty: 'beginner' },
    { id: 'fc-linux-38', front: 'What are the special variables $1, $@, $#, $??', back: '$1, $2... = positional arguments\n$@ = all arguments\n$# = number of arguments\n$? = exit status of last command (0=success)\n$0 = script name', category: 'Bash', difficulty: 'intermediate' },
    { id: 'fc-linux-39', front: 'How do you assign and use variables in bash?', back: 'Assign: VAR=value (NO spaces around =)\nUse: $VAR or ${VAR}\nQuote when using: "$VAR" to handle spaces\nExport for child processes: export VAR', category: 'Bash', difficulty: 'beginner' },
    { id: 'fc-linux-40', front: 'What is command substitution in bash?', back: '$(command) or `command` (backticks)\nCaptures output of command into variable.\nExample: TODAY=$(date +%Y-%m-%d)\nModern style prefers $() over backticks.', category: 'Bash', difficulty: 'intermediate' },
    { id: 'fc-linux-41', front: 'What is the syntax for if statement in bash?', back: 'if [ condition ]; then\n  commands\nelif [ condition ]; then\n  commands\nelse\n  commands\nfi\nNote: spaces inside [ ] are required!', category: 'Bash', difficulty: 'intermediate' },
    { id: 'fc-linux-42', front: 'What are numeric comparison operators in bash?', back: '-eq : equal\n-ne : not equal\n-gt : greater than\n-lt : less than\n-ge : greater or equal\n-le : less or equal\nExample: [ $a -gt 5 ]', category: 'Bash', difficulty: 'intermediate' },
    { id: 'fc-linux-43', front: 'What are file test operators in bash?', back: '-f : is regular file\n-d : is directory\n-e : exists\n-r : is readable\n-w : is writable\n-x : is executable\n-s : file size > 0\nExample: [ -f file.txt ]', category: 'Bash', difficulty: 'intermediate' },
    { id: 'fc-linux-44', front: 'How do you write a for loop in bash?', back: 'for item in list; do\n  commands\ndone\n\nExamples:\nfor i in 1 2 3; do echo $i; done\nfor f in *.txt; do cat $f; done\nfor ((i=0; i<10; i++)); do echo $i; done', category: 'Bash', difficulty: 'intermediate' },
    { id: 'fc-linux-45', front: 'How do you write a while loop in bash?', back: 'while [ condition ]; do\n  commands\ndone\n\nExample:\ncount=1\nwhile [ $count -le 5 ]; do\n  echo $count\n  ((count++))\ndone', category: 'Bash', difficulty: 'intermediate' },
    { id: 'fc-linux-46', front: 'How do you define and call functions in bash?', back: 'Define:\nfunction name() {\n  commands\n  return status\n}\n\nCall: name arg1 arg2\nArgs inside: $1, $2, $@\nLocal vars: local var=value', category: 'Bash', difficulty: 'intermediate' },
    { id: 'fc-linux-47', front: 'What do "set -e" and "set -x" do?', back: 'set -e : Exit immediately if any command fails (non-zero exit)\nset -x : Print each command before executing (debug mode)\nset -u : Error on undefined variables\nOften combined: set -eux', category: 'Bash', difficulty: 'intermediate' },
    { id: 'fc-linux-48', front: 'What is the difference between source and executing a script?', back: './script.sh : Runs in NEW shell, variables don\'t affect parent\nsource script.sh (or . script.sh) : Runs in CURRENT shell, variables persist\nUse source for loading env vars, functions, aliases.', category: 'Bash', difficulty: 'intermediate' },
    { id: 'fc-linux-49', front: 'What is cron and crontab syntax?', back: 'Cron: scheduler for automated tasks\ncrontab -e : edit cron jobs\n\nSyntax: * * * * * command\n(min hour day month weekday)\n\nExample: 0 2 * * * /backup.sh\n(runs at 2:00 AM every day)', category: 'Bash', difficulty: 'intermediate' },
    { id: 'fc-linux-50', front: 'What are parameter expansion tricks in bash?', back: '${VAR:-default} : Use default if unset\n${VAR:=default} : Set default if unset\n${VAR:?error} : Error if unset\n${#VAR} : String length\n${VAR:0:5} : Substring (first 5)', category: 'Bash', difficulty: 'advanced' },
  ],

  quizQuestions: [
    // ============ BASICS ============
    {
      id: 'q-linux-1',
      question: 'What does the $ symbol in the terminal prompt indicate?',
      options: ['Root user', 'Normal user', 'System process', 'Background task'],
      correctAnswer: 1,
      explanation: '$ indicates a normal user. # indicates the root (superuser) with administrative privileges.',
      category: 'Basics'
    },
    {
      id: 'q-linux-2',
      question: 'What is the root user home directory in Linux?',
      options: ['/home/root', '/root', '/', '/user/root'],
      correctAnswer: 1,
      explanation: 'Root user home is /root. Normal users have home at /home/<username>.',
      category: 'Basics'
    },
    {
      id: 'q-linux-3',
      question: 'Which command switches to root user AND changes to root home directory?',
      options: ['sudo su', 'su root', 'sudo su -', 'su - root'],
      correctAnswer: 2,
      explanation: 'sudo su - switches to root AND goes to /root. sudo su stays in current directory.',
      category: 'Basics'
    },

    // ============ FILES ============
    {
      id: 'q-linux-4',
      question: 'What does the >> operator do?',
      options: ['Overwrites file content', 'Appends to file', 'Creates new file', 'Deletes file content'],
      correctAnswer: 1,
      explanation: '>> appends to file (adds at end). > overwrites the entire file content.',
      category: 'Files'
    },
    {
      id: 'q-linux-5',
      question: 'Which command lists files with oldest first?',
      options: ['ls -lt', 'ls -l', 'ls -ltr', 'ls -lr'],
      correctAnswer: 2,
      explanation: 'ls -ltr: -t sorts by time, -r reverses order (oldest first). ls -lt shows latest first.',
      category: 'Files'
    },
    {
      id: 'q-linux-6',
      question: 'What does rm -r do?',
      options: ['Removes read permission', 'Removes files recursively', 'Removes directory only', 'Renames file'],
      correctAnswer: 1,
      explanation: 'rm -r removes directories and all their contents recursively. -f adds force (no prompts).',
      category: 'Files'
    },

    // ============ PERMISSIONS ============
    {
      id: 'q-linux-7',
      question: 'What permission does the number 7 represent?',
      options: ['Read only', 'Write only', 'Execute only', 'Read + Write + Execute'],
      correctAnswer: 3,
      explanation: '7 = 4(read) + 2(write) + 1(execute) = rwx (full permissions)',
      category: 'Permissions'
    },
    {
      id: 'q-linux-8',
      question: 'Who can change file ownership with chown?',
      options: ['File owner', 'Any user', 'Group members', 'Only root user'],
      correctAnswer: 3,
      explanation: 'Only root can use chown to change ownership. Even the file owner cannot change ownership.',
      category: 'Permissions'
    },
    {
      id: 'q-linux-9',
      question: 'What permissions should the .ssh folder have?',
      options: ['777', '644', '700', '755'],
      correctAnswer: 2,
      explanation: '.ssh folder should be 700 (only owner has full access). authorized_keys should be 600.',
      category: 'Permissions'
    },

    // ============ USER MANAGEMENT ============
    {
      id: 'q-linux-10',
      question: 'Which command adds a user to a secondary group?',
      options: ['usermod -g group user', 'usermod -aG group user', 'groupadd user group', 'useradd -g group user'],
      correctAnswer: 1,
      explanation: 'usermod -aG adds to secondary group (-a = append, -G = secondary). -g alone changes primary group.',
      category: 'Users'
    },
    {
      id: 'q-linux-11',
      question: 'Where are encrypted passwords stored in Linux?',
      options: ['/etc/passwd', '/etc/group', '/etc/shadow', '/etc/users'],
      correctAnswer: 2,
      explanation: '/etc/shadow stores encrypted passwords. /etc/passwd has user info, /etc/group has group info.',
      category: 'Users'
    },

    // ============ VIM ============
    {
      id: 'q-linux-12',
      question: 'In Vim, what does :%s/old/new/g do?',
      options: ['Delete all "old" text', 'Replace first "old" with "new"', 'Replace all "old" with "new" in entire file', 'Search for "old"'],
      correctAnswer: 2,
      explanation: '% = all lines, s = substitute, g = global (all occurrences). Replaces every "old" with "new".',
      category: 'Vim'
    },
    {
      id: 'q-linux-13',
      question: 'How do you save and quit in Vim?',
      options: [':q!', ':wq', ':w', ':exit'],
      correctAnswer: 1,
      explanation: ':wq writes (saves) and quits. :q! quits without saving. :w saves without quitting.',
      category: 'Vim'
    },

    // ============ SERVICES ============
    {
      id: 'q-linux-14',
      question: 'What does "systemctl enable nginx" do?',
      options: ['Starts nginx now', 'Stops nginx', 'Makes nginx start on system boot', 'Restarts nginx'],
      correctAnswer: 2,
      explanation: 'enable configures auto-start on boot. start actually starts it now. Use both for persistent services.',
      category: 'Services'
    },

    // ============ PROCESSES ============
    {
      id: 'q-linux-15',
      question: 'What is the difference between kill and kill -9?',
      options: ['No difference', 'kill -9 is slower', 'kill asks nicely, kill -9 forces', 'kill -9 only works on root processes'],
      correctAnswer: 2,
      explanation: 'kill sends SIGTERM (graceful shutdown). kill -9 sends SIGKILL (immediate force kill, no cleanup).',
      category: 'Process'
    },
    {
      id: 'q-linux-16',
      question: 'How do you run a command in the background?',
      options: ['bg command', 'command &', 'nohup command', 'command -bg'],
      correctAnswer: 1,
      explanation: 'Adding & at the end runs command in background. Example: sleep 100 &',
      category: 'Process'
    },

    // ============ PACKAGES ============
    {
      id: 'q-linux-17',
      question: 'Which package manager is used in RHEL/CentOS/Amazon Linux?',
      options: ['apt-get', 'brew', 'dnf/yum', 'pacman'],
      correctAnswer: 2,
      explanation: 'dnf (formerly yum) is for RHEL family. apt-get is for Ubuntu/Debian.',
      category: 'Packages'
    },

    // ============ SSH ============
    {
      id: 'q-linux-18',
      question: 'What is the default SSH port?',
      options: ['21', '22', '80', '443'],
      correctAnswer: 1,
      explanation: 'SSH uses port 22 by default. HTTP is 80, HTTPS is 443, FTP is 21.',
      category: 'SSH'
    },

    // ============ NETWORKING ============
    {
      id: 'q-linux-19',
      question: 'What is the difference between curl and wget?',
      options: ['curl downloads, wget displays', 'wget downloads, curl displays', 'They are identical', 'curl is for Linux, wget for Windows'],
      correctAnswer: 1,
      explanation: 'wget downloads files to disk. curl displays/transfers data (useful for APIs). Both can do similar tasks.',
      category: 'Network'
    },

    // ============ GREP ============
    {
      id: 'q-linux-20',
      question: 'What does grep -v do?',
      options: ['Verbose output', 'Show line numbers', 'Show non-matching lines', 'Case-insensitive search'],
      correctAnswer: 2,
      explanation: '-v inverts match (shows lines that do NOT contain the pattern). -n shows line numbers, -i is case-insensitive.',
      category: 'Text'
    },

    // ============ ARCHITECTURE ============
    {
      id: 'q-linux-21',
      question: 'What are the three tiers in 3-tier architecture?',
      options: ['CPU, Memory, Storage', 'Web, Application, Database', 'Frontend, Middleware, Cache', 'User, Admin, System'],
      correctAnswer: 1,
      explanation: 'Web tier (frontend/load balancer), Application tier (backend logic), Database tier (data storage).',
      category: 'Architecture'
    },
    {
      id: 'q-linux-22',
      question: 'What does CRUD stand for?',
      options: ['Create, Read, Update, Delete', 'Copy, Restore, Undo, Deploy', 'Connect, Retrieve, Upload, Download', 'Cache, Route, Update, Debug'],
      correctAnswer: 0,
      explanation: 'CRUD = Create, Read, Update, Delete - the four basic database operations.',
      category: 'Architecture'
    },

    // ============ BASH SCRIPTING ============
    {
      id: 'q-linux-23',
      question: 'What is the shebang line in a bash script?',
      options: ['#!/bin/bash', '#/bin/bash', '!/bin/bash', '@/bin/bash'],
      correctAnswer: 0,
      explanation: '#!/bin/bash is the shebang - tells the system to use bash interpreter. Must be the first line.',
      category: 'Bash'
    },
    {
      id: 'q-linux-24',
      question: 'How do you make a script executable?',
      options: ['chmod +r script.sh', 'chmod +x script.sh', 'chmod +w script.sh', 'chmod 644 script.sh'],
      correctAnswer: 1,
      explanation: 'chmod +x adds execute permission. Without it, you cannot run ./script.sh directly.',
      category: 'Bash'
    },
    {
      id: 'q-linux-25',
      question: 'What does $? represent in bash?',
      options: ['Current process ID', 'Exit status of last command', 'Number of arguments', 'Script name'],
      correctAnswer: 1,
      explanation: '$? contains the exit status of the last command. 0 means success, non-zero means error.',
      category: 'Bash'
    },
    {
      id: 'q-linux-26',
      question: 'Which is the correct way to assign a variable in bash?',
      options: ['VAR = value', 'VAR=value', '$VAR=value', 'set VAR=value'],
      correctAnswer: 1,
      explanation: 'VAR=value with NO spaces around =. Spaces would make bash interpret it as a command.',
      category: 'Bash'
    },
    {
      id: 'q-linux-27',
      question: 'What does "set -e" do in a bash script?',
      options: ['Enable echo mode', 'Exit on any error', 'Export all variables', 'Enable extended globbing'],
      correctAnswer: 1,
      explanation: 'set -e makes the script exit immediately if any command returns a non-zero exit status.',
      category: 'Bash'
    },
    {
      id: 'q-linux-28',
      question: 'How do you capture command output into a variable?',
      options: ['VAR=command', 'VAR=$(command)', 'VAR={command}', 'VAR=<command>'],
      correctAnswer: 1,
      explanation: '$(command) is command substitution. It runs the command and captures its output. Example: DATE=$(date)',
      category: 'Bash'
    },
    {
      id: 'q-linux-29',
      question: 'What operator checks if a file exists?',
      options: ['[ -f file ]', '[ -e file ]', '[ -d file ]', '[ -r file ]'],
      correctAnswer: 1,
      explanation: '-e checks if file/directory exists. -f checks if it\'s a regular file, -d for directory, -r for readable.',
      category: 'Bash'
    },
    {
      id: 'q-linux-30',
      question: 'What is the difference between source script.sh and ./script.sh?',
      options: ['No difference', 'source runs in current shell, ./ runs in new shell', './ runs in current shell, source runs in new shell', 'source is faster'],
      correctAnswer: 1,
      explanation: 'source (or .) runs in current shell - variables persist. ./script.sh runs in a new shell - changes don\'t affect parent.',
      category: 'Bash'
    },
    {
      id: 'q-linux-31',
      question: 'What does ${VAR:-default} do?',
      options: ['Sets VAR to default', 'Uses default if VAR is unset', 'Deletes VAR', 'Compares VAR with default'],
      correctAnswer: 1,
      explanation: '${VAR:-default} uses "default" if VAR is unset or empty. Does not actually change VAR.',
      category: 'Bash'
    },
    {
      id: 'q-linux-32',
      question: 'What cron expression runs a job at 2 AM every day?',
      options: ['2 0 * * *', '0 2 * * *', '* 2 * * *', '0 0 2 * *'],
      correctAnswer: 1,
      explanation: 'Cron: minute hour day month weekday. "0 2 * * *" = minute 0, hour 2, every day/month/weekday.',
      category: 'Bash'
    },
  ],
};
