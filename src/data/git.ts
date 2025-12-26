import { TopicData } from '@/types';

export const gitData: TopicData = {
  name: 'Git',
  description: 'Version control system for tracking changes in source code',
  icon: '🔀',
  color: '#F05032',
  gradient: 'from-orange-500 via-red-500 to-pink-500',
  commands: [
    // Basic Commands
    { id: 'git-1', command: 'git init', description: 'Initialize a new Git repository', example: 'git init my-project', category: 'Basic', difficulty: 'beginner' },
    { id: 'git-2', command: 'git clone <url>', description: 'Clone a repository from remote', example: 'git clone https://github.com/user/repo.git', category: 'Basic', difficulty: 'beginner' },
    { id: 'git-3', command: 'git add <file>', description: 'Stage changes for commit', example: 'git add . (stages all)', category: 'Basic', difficulty: 'beginner' },
    { id: 'git-4', command: 'git commit -m "<message>"', description: 'Commit staged changes with a message', example: 'git commit -m "Initial commit"', category: 'Basic', difficulty: 'beginner' },
    { id: 'git-5', command: 'git status', description: 'Show working tree status', example: 'git status -s (short format)', category: 'Basic', difficulty: 'beginner' },
    { id: 'git-6', command: 'git log', description: 'Show commit history', example: 'git log --oneline --graph', category: 'Basic', difficulty: 'beginner' },
    { id: 'git-7', command: 'git diff', description: 'Show changes between commits, commit and working tree', example: 'git diff HEAD~1', category: 'Basic', difficulty: 'beginner' },
    
    // Branching
    { id: 'git-8', command: 'git branch', description: 'List, create, or delete branches', example: 'git branch feature-x', category: 'Branching', difficulty: 'beginner' },
    { id: 'git-9', command: 'git checkout <branch>', description: 'Switch branches or restore files', example: 'git checkout -b new-branch', category: 'Branching', difficulty: 'beginner' },
    { id: 'git-10', command: 'git switch <branch>', description: 'Switch to a specified branch', example: 'git switch -c new-branch', category: 'Branching', difficulty: 'beginner' },
    { id: 'git-11', command: 'git merge <branch>', description: 'Join two or more development histories', example: 'git merge feature-x', category: 'Branching', difficulty: 'intermediate' },
    { id: 'git-12', command: 'git rebase <branch>', description: 'Reapply commits on top of another base', example: 'git rebase main', category: 'Branching', difficulty: 'intermediate' },
    { id: 'git-13', command: 'git branch -d <branch>', description: 'Delete a branch', example: 'git branch -D force-delete', category: 'Branching', difficulty: 'beginner' },
    
    // Remote
    { id: 'git-14', command: 'git remote -v', description: 'List remote repositories', example: 'git remote add origin <url>', category: 'Remote', difficulty: 'beginner' },
    { id: 'git-15', command: 'git push', description: 'Update remote refs with local refs', example: 'git push origin main', category: 'Remote', difficulty: 'beginner' },
    { id: 'git-16', command: 'git pull', description: 'Fetch and integrate with another repository', example: 'git pull --rebase', category: 'Remote', difficulty: 'beginner' },
    { id: 'git-17', command: 'git fetch', description: 'Download objects and refs from remote', example: 'git fetch --all', category: 'Remote', difficulty: 'intermediate' },
    { id: 'git-18', command: 'git push -u origin <branch>', description: 'Push and set upstream branch', example: 'git push -u origin feature-x', category: 'Remote', difficulty: 'intermediate' },
    
    // Advanced
    { id: 'git-19', command: 'git stash', description: 'Stash changes in a dirty working directory', example: 'git stash pop', category: 'Advanced', difficulty: 'intermediate' },
    { id: 'git-20', command: 'git reset <commit>', description: 'Reset current HEAD to specified state', example: 'git reset --hard HEAD~1', category: 'Advanced', difficulty: 'advanced' },
    { id: 'git-21', command: 'git revert <commit>', description: 'Create a new commit that undoes changes', example: 'git revert abc123', category: 'Advanced', difficulty: 'intermediate' },
    { id: 'git-22', command: 'git cherry-pick <commit>', description: 'Apply changes from specific commits', example: 'git cherry-pick abc123', category: 'Advanced', difficulty: 'advanced' },
    { id: 'git-23', command: 'git reflog', description: 'Manage reflog information', example: 'git reflog expire --expire=90.days.ago', category: 'Advanced', difficulty: 'advanced' },
    { id: 'git-24', command: 'git bisect', description: 'Use binary search to find bad commit', example: 'git bisect start', category: 'Advanced', difficulty: 'advanced' },
    { id: 'git-25', command: 'git tag <tagname>', description: 'Create, list, delete or verify tags', example: 'git tag -a v1.0 -m "Release"', category: 'Advanced', difficulty: 'intermediate' },
    { id: 'git-26', command: 'git blame <file>', description: 'Show who changed what in a file', example: 'git blame -L 10,20 file.js', category: 'Advanced', difficulty: 'intermediate' },
    { id: 'git-27', command: 'git clean -fd', description: 'Remove untracked files and directories', example: 'git clean -fxd', category: 'Advanced', difficulty: 'advanced' },
    { id: 'git-28', command: 'git submodule', description: 'Initialize, update or inspect submodules', example: 'git submodule update --init', category: 'Advanced', difficulty: 'advanced' },
  ],
  flashcards: [
    { id: 'fc-git-1', front: 'What command initializes a new Git repository?', back: 'git init', category: 'Basic', difficulty: 'beginner' },
    { id: 'fc-git-2', front: 'How do you stage all changes for commit?', back: 'git add . (or git add -A)', category: 'Basic', difficulty: 'beginner' },
    { id: 'fc-git-3', front: 'What is the difference between git fetch and git pull?', back: 'git fetch downloads changes but does not merge them. git pull fetches AND merges changes into your current branch.', category: 'Remote', difficulty: 'intermediate' },
    { id: 'fc-git-4', front: 'How do you create and switch to a new branch in one command?', back: 'git checkout -b <branch-name> or git switch -c <branch-name>', category: 'Branching', difficulty: 'beginner' },
    { id: 'fc-git-5', front: 'What does git stash do?', back: 'Temporarily saves your uncommitted changes so you can switch branches, then reapply them later with git stash pop', category: 'Advanced', difficulty: 'intermediate' },
    { id: 'fc-git-6', front: 'How do you undo the last commit but keep changes staged?', back: 'git reset --soft HEAD~1', category: 'Advanced', difficulty: 'intermediate' },
    { id: 'fc-git-7', front: 'What is the difference between git reset and git revert?', back: 'git reset changes history (dangerous for shared branches). git revert creates a new commit that undoes changes (safe for shared branches).', category: 'Advanced', difficulty: 'advanced' },
    { id: 'fc-git-8', front: 'How do you see a compact commit history with branch visualization?', back: 'git log --oneline --graph --all', category: 'Basic', difficulty: 'beginner' },
    { id: 'fc-git-9', front: 'What does git rebase do?', back: 'Moves or combines commits by reapplying them on top of another base commit. Creates a linear history.', category: 'Branching', difficulty: 'intermediate' },
    { id: 'fc-git-10', front: 'How do you force push to a remote branch?', back: 'git push --force or git push -f (use with caution!)', category: 'Remote', difficulty: 'advanced' },
    { id: 'fc-git-11', front: 'What is HEAD in Git?', back: 'HEAD is a pointer to the current commit/branch you are working on', category: 'Basic', difficulty: 'beginner' },
    { id: 'fc-git-12', front: 'How do you see who modified each line of a file?', back: 'git blame <filename>', category: 'Advanced', difficulty: 'intermediate' },
    { id: 'fc-git-13', front: 'What is a merge conflict?', back: 'Occurs when Git cannot automatically merge changes because the same lines were modified in different branches', category: 'Branching', difficulty: 'intermediate' },
    { id: 'fc-git-14', front: 'How do you delete a remote branch?', back: 'git push origin --delete <branch-name>', category: 'Remote', difficulty: 'intermediate' },
    { id: 'fc-git-15', front: 'What does git cherry-pick do?', back: 'Applies the changes from a specific commit onto your current branch', category: 'Advanced', difficulty: 'advanced' },
  ],
  quizQuestions: [
    {
      id: 'q-git-1',
      question: 'Which command is used to create a new Git repository?',
      options: ['git create', 'git new', 'git init', 'git start'],
      correctAnswer: 2,
      explanation: 'git init initializes a new Git repository in the current directory.',
      category: 'Basic'
    },
    {
      id: 'q-git-2',
      question: 'What does "git clone" do?',
      options: ['Creates a new branch', 'Copies a repository from remote to local', 'Merges two branches', 'Deletes a repository'],
      correctAnswer: 1,
      explanation: 'git clone creates a copy of a remote repository on your local machine.',
      category: 'Basic'
    },
    {
      id: 'q-git-3',
      question: 'Which command stages all modified and new files?',
      options: ['git stage .', 'git add .', 'git commit -a', 'git save .'],
      correctAnswer: 1,
      explanation: 'git add . stages all changes in the current directory and subdirectories.',
      category: 'Basic'
    },
    {
      id: 'q-git-4',
      question: 'What is the difference between git fetch and git pull?',
      options: [
        'They are the same command',
        'fetch downloads and merges, pull only downloads',
        'fetch only downloads, pull downloads and merges',
        'fetch is for branches, pull is for files'
      ],
      correctAnswer: 2,
      explanation: 'git fetch downloads changes without merging, while git pull downloads and automatically merges.',
      category: 'Remote'
    },
    {
      id: 'q-git-5',
      question: 'How do you create a new branch and switch to it in one command?',
      options: ['git branch -switch new', 'git checkout -b new', 'git new-branch new', 'git create new'],
      correctAnswer: 1,
      explanation: 'git checkout -b creates a new branch and switches to it. You can also use git switch -c.',
      category: 'Branching'
    },
    {
      id: 'q-git-6',
      question: 'What does git stash do?',
      options: [
        'Permanently deletes changes',
        'Commits changes immediately',
        'Temporarily stores uncommitted changes',
        'Creates a new branch'
      ],
      correctAnswer: 2,
      explanation: 'git stash temporarily saves your uncommitted changes so you can work on something else.',
      category: 'Advanced'
    },
    {
      id: 'q-git-7',
      question: 'Which command shows the commit history?',
      options: ['git history', 'git commits', 'git log', 'git show-commits'],
      correctAnswer: 2,
      explanation: 'git log displays the commit history of the repository.',
      category: 'Basic'
    },
    {
      id: 'q-git-8',
      question: 'What does HEAD~1 refer to?',
      options: ['The next commit', 'The first commit', 'The parent of the current commit', 'The remote branch'],
      correctAnswer: 2,
      explanation: 'HEAD~1 refers to the parent commit of HEAD (one commit before current).',
      category: 'Advanced'
    },
    {
      id: 'q-git-9',
      question: 'Which command is safer for undoing commits on shared branches?',
      options: ['git reset --hard', 'git revert', 'git delete', 'git undo'],
      correctAnswer: 1,
      explanation: 'git revert creates a new commit that undoes changes, preserving history. Safe for shared branches.',
      category: 'Advanced'
    },
    {
      id: 'q-git-10',
      question: 'What does git merge --squash do?',
      options: [
        'Deletes the branch after merging',
        'Combines all commits into one before merging',
        'Forces the merge even with conflicts',
        'Merges without fast-forward'
      ],
      correctAnswer: 1,
      explanation: 'git merge --squash combines all the branch commits into a single commit.',
      category: 'Branching'
    },
  ],
};

