import { TopicData } from '@/types';

export const gitData: TopicData = {
  name: 'Git',
  description: 'Version control system for tracking changes in source code',
  icon: '🔀',
  color: '#F05032',
  gradient: 'from-orange-500 via-red-500 to-pink-500',
  commands: [
    // ============ BASIC COMMANDS ============
    { id: 'git-1', command: 'git init', description: 'Initialize a new Git repository', example: 'git init my-project', category: 'Basic', difficulty: 'beginner' },
    { id: 'git-2', command: 'git clone <url>', description: 'Clone a repository from remote', example: 'git clone https://github.com/user/repo.git', category: 'Basic', difficulty: 'beginner' },
    { id: 'git-3', command: 'git add <file>', description: 'Stage changes for commit', example: 'git add . (stages all)', category: 'Basic', difficulty: 'beginner' },
    { id: 'git-4', command: 'git commit -m "<message>"', description: 'Commit staged changes with a message', example: 'git commit -m "Initial commit"', category: 'Basic', difficulty: 'beginner' },
    { id: 'git-5', command: 'git status', description: 'Show working tree status', example: 'git status -s (short format)', category: 'Basic', difficulty: 'beginner' },
    { id: 'git-6', command: 'git log', description: 'Show commit history', example: 'git log --oneline --graph', category: 'Basic', difficulty: 'beginner' },
    { id: 'git-7', command: 'git diff', description: 'Show changes between commits, commit and working tree', example: 'git diff HEAD~1', category: 'Basic', difficulty: 'beginner' },
    { id: 'git-8', command: 'git show <commit>', description: 'Show details of a specific commit', example: 'git show abc123', category: 'Basic', difficulty: 'beginner' },
    { id: 'git-9', command: 'git rm <file>', description: 'Remove file from working tree and index', example: 'git rm --cached file.txt', category: 'Basic', difficulty: 'beginner' },
    { id: 'git-10', command: 'git mv <old> <new>', description: 'Move or rename a file', example: 'git mv old.txt new.txt', category: 'Basic', difficulty: 'beginner' },
    
    // ============ BRANCHING ============
    { id: 'git-11', command: 'git branch', description: 'List all local branches', example: 'git branch -a (all branches)', category: 'Branching', difficulty: 'beginner' },
    { id: 'git-12', command: 'git branch <name>', description: 'Create a new branch', example: 'git branch feature-login', category: 'Branching', difficulty: 'beginner' },
    { id: 'git-13', command: 'git checkout <branch>', description: 'Switch to a branch', example: 'git checkout main', category: 'Branching', difficulty: 'beginner' },
    { id: 'git-14', command: 'git checkout -b <branch>', description: 'Create and switch to new branch', example: 'git checkout -b feature-x', category: 'Branching', difficulty: 'beginner' },
    { id: 'git-15', command: 'git switch <branch>', description: 'Switch to a specified branch (modern)', example: 'git switch main', category: 'Branching', difficulty: 'beginner' },
    { id: 'git-16', command: 'git switch -c <branch>', description: 'Create and switch to new branch (modern)', example: 'git switch -c feature-y', category: 'Branching', difficulty: 'beginner' },
    { id: 'git-17', command: 'git branch -d <branch>', description: 'Delete a branch (safe)', example: 'git branch -d feature-done', category: 'Branching', difficulty: 'beginner' },
    { id: 'git-18', command: 'git branch -D <branch>', description: 'Force delete a branch', example: 'git branch -D broken-feature', category: 'Branching', difficulty: 'intermediate' },
    { id: 'git-19', command: 'git branch -m <new-name>', description: 'Rename current branch', example: 'git branch -m new-name', category: 'Branching', difficulty: 'intermediate' },
    { id: 'git-20', command: 'git branch --merged', description: 'List branches merged into current', example: 'git branch --merged main', category: 'Branching', difficulty: 'intermediate' },
    
    // ============ MERGING ============
    { id: 'git-21', command: 'git merge <branch>', description: 'Merge branch into current branch', example: 'git merge feature-x', category: 'Merging', difficulty: 'intermediate' },
    { id: 'git-22', command: 'git merge --no-ff <branch>', description: 'Merge with a merge commit (no fast-forward)', example: 'git merge --no-ff feature-x', category: 'Merging', difficulty: 'intermediate' },
    { id: 'git-23', command: 'git merge --squash <branch>', description: 'Squash all commits into one before merging', example: 'git merge --squash feature-x', category: 'Merging', difficulty: 'intermediate' },
    { id: 'git-24', command: 'git merge --abort', description: 'Abort a merge in progress', example: 'git merge --abort', category: 'Merging', difficulty: 'intermediate' },
    { id: 'git-25', command: 'git mergetool', description: 'Run merge conflict resolution tools', example: 'git mergetool', category: 'Merging', difficulty: 'intermediate' },
    
    // ============ REBASE ============
    { id: 'git-26', command: 'git rebase <branch>', description: 'Reapply commits on top of another base', example: 'git rebase main', category: 'Rebase', difficulty: 'intermediate' },
    { id: 'git-27', command: 'git rebase -i <commit>', description: 'Interactive rebase (edit, squash, reorder)', example: 'git rebase -i HEAD~3', category: 'Rebase', difficulty: 'advanced' },
    { id: 'git-28', command: 'git rebase --continue', description: 'Continue rebase after resolving conflicts', example: 'git rebase --continue', category: 'Rebase', difficulty: 'intermediate' },
    { id: 'git-29', command: 'git rebase --abort', description: 'Abort rebase and return to original state', example: 'git rebase --abort', category: 'Rebase', difficulty: 'intermediate' },
    { id: 'git-30', command: 'git rebase --skip', description: 'Skip current commit during rebase', example: 'git rebase --skip', category: 'Rebase', difficulty: 'intermediate' },
    { id: 'git-31', command: 'git pull --rebase', description: 'Pull and rebase instead of merge', example: 'git pull --rebase origin main', category: 'Rebase', difficulty: 'intermediate' },
    
    // ============ REMOTE ============
    { id: 'git-32', command: 'git remote -v', description: 'List remote repositories', example: 'git remote -v', category: 'Remote', difficulty: 'beginner' },
    { id: 'git-33', command: 'git remote add <name> <url>', description: 'Add a new remote repository', example: 'git remote add origin https://...', category: 'Remote', difficulty: 'beginner' },
    { id: 'git-34', command: 'git remote remove <name>', description: 'Remove a remote', example: 'git remote remove origin', category: 'Remote', difficulty: 'intermediate' },
    { id: 'git-35', command: 'git push', description: 'Push commits to remote', example: 'git push origin main', category: 'Remote', difficulty: 'beginner' },
    { id: 'git-36', command: 'git push -u origin <branch>', description: 'Push and set upstream branch', example: 'git push -u origin feature-x', category: 'Remote', difficulty: 'intermediate' },
    { id: 'git-37', command: 'git push --force', description: 'Force push (overwrites remote)', example: 'git push --force-with-lease', category: 'Remote', difficulty: 'advanced' },
    { id: 'git-38', command: 'git push origin --delete <branch>', description: 'Delete a remote branch', example: 'git push origin --delete feature-x', category: 'Remote', difficulty: 'intermediate' },
    { id: 'git-39', command: 'git pull', description: 'Fetch and merge from remote', example: 'git pull origin main', category: 'Remote', difficulty: 'beginner' },
    { id: 'git-40', command: 'git fetch', description: 'Download objects from remote (no merge)', example: 'git fetch --all', category: 'Remote', difficulty: 'intermediate' },
    { id: 'git-41', command: 'git fetch --prune', description: 'Fetch and remove deleted remote branches', example: 'git fetch --prune', category: 'Remote', difficulty: 'intermediate' },
    
    // ============ STASH ============
    { id: 'git-42', command: 'git stash', description: 'Stash uncommitted changes', example: 'git stash', category: 'Stash', difficulty: 'intermediate' },
    { id: 'git-43', command: 'git stash save "message"', description: 'Stash with a description', example: 'git stash save "WIP: login feature"', category: 'Stash', difficulty: 'intermediate' },
    { id: 'git-44', command: 'git stash list', description: 'List all stashed changes', example: 'git stash list', category: 'Stash', difficulty: 'intermediate' },
    { id: 'git-45', command: 'git stash pop', description: 'Apply and remove latest stash', example: 'git stash pop', category: 'Stash', difficulty: 'intermediate' },
    { id: 'git-46', command: 'git stash apply', description: 'Apply stash without removing it', example: 'git stash apply stash@{0}', category: 'Stash', difficulty: 'intermediate' },
    { id: 'git-47', command: 'git stash drop', description: 'Delete a specific stash', example: 'git stash drop stash@{1}', category: 'Stash', difficulty: 'intermediate' },
    { id: 'git-48', command: 'git stash clear', description: 'Delete all stashes', example: 'git stash clear', category: 'Stash', difficulty: 'intermediate' },
    
    // ============ ADVANCED ============
    { id: 'git-49', command: 'git reset --soft <commit>', description: 'Reset HEAD, keep changes staged', example: 'git reset --soft HEAD~1', category: 'Advanced', difficulty: 'intermediate' },
    { id: 'git-50', command: 'git reset --mixed <commit>', description: 'Reset HEAD and staging (default)', example: 'git reset HEAD~1', category: 'Advanced', difficulty: 'intermediate' },
    { id: 'git-51', command: 'git reset --hard <commit>', description: 'Reset HEAD, staging, and working dir', example: 'git reset --hard HEAD~1', category: 'Advanced', difficulty: 'advanced' },
    { id: 'git-52', command: 'git revert <commit>', description: 'Create new commit that undoes changes', example: 'git revert abc123', category: 'Advanced', difficulty: 'intermediate' },
    { id: 'git-53', command: 'git cherry-pick <commit>', description: 'Apply changes from specific commit', example: 'git cherry-pick abc123', category: 'Advanced', difficulty: 'advanced' },
    { id: 'git-54', command: 'git reflog', description: 'Show reference log (recover lost commits)', example: 'git reflog', category: 'Advanced', difficulty: 'advanced' },
    { id: 'git-55', command: 'git bisect start', description: 'Start binary search for bad commit', example: 'git bisect start', category: 'Advanced', difficulty: 'advanced' },
    { id: 'git-56', command: 'git tag <tagname>', description: 'Create a lightweight tag', example: 'git tag v1.0.0', category: 'Advanced', difficulty: 'intermediate' },
    { id: 'git-57', command: 'git tag -a <tag> -m "<msg>"', description: 'Create an annotated tag', example: 'git tag -a v1.0.0 -m "Release"', category: 'Advanced', difficulty: 'intermediate' },
    { id: 'git-58', command: 'git push --tags', description: 'Push all tags to remote', example: 'git push origin --tags', category: 'Advanced', difficulty: 'intermediate' },
    { id: 'git-59', command: 'git blame <file>', description: 'Show who changed each line', example: 'git blame -L 10,20 file.js', category: 'Advanced', difficulty: 'intermediate' },
    { id: 'git-60', command: 'git clean -fd', description: 'Remove untracked files and dirs', example: 'git clean -fxd', category: 'Advanced', difficulty: 'advanced' },
    { id: 'git-61', command: 'git submodule add <url>', description: 'Add a submodule', example: 'git submodule add https://...', category: 'Advanced', difficulty: 'advanced' },
    { id: 'git-62', command: 'git submodule update --init', description: 'Initialize and update submodules', example: 'git submodule update --init --recursive', category: 'Advanced', difficulty: 'advanced' },
    
    // ============ GITHUB/GITLAB/BITBUCKET ============
    { id: 'git-63', command: 'gh repo create', description: 'Create a new GitHub repo (GitHub CLI)', example: 'gh repo create my-repo --public', category: 'GitHub', difficulty: 'intermediate' },
    { id: 'git-64', command: 'gh pr create', description: 'Create a pull request (GitHub CLI)', example: 'gh pr create --title "Feature"', category: 'GitHub', difficulty: 'intermediate' },
    { id: 'git-65', command: 'gh pr list', description: 'List pull requests (GitHub CLI)', example: 'gh pr list --state open', category: 'GitHub', difficulty: 'intermediate' },
    { id: 'git-66', command: 'gh pr checkout <number>', description: 'Checkout a PR locally', example: 'gh pr checkout 123', category: 'GitHub', difficulty: 'intermediate' },
    { id: 'git-67', command: 'gh issue create', description: 'Create an issue (GitHub CLI)', example: 'gh issue create --title "Bug"', category: 'GitHub', difficulty: 'intermediate' },
    { id: 'git-68', command: 'gh workflow run', description: 'Trigger a GitHub Actions workflow', example: 'gh workflow run deploy.yml', category: 'GitHub', difficulty: 'intermediate' },
  ],

  flashcards: [
    // ============ BASICS ============
    { id: 'fc-git-1', front: 'What command initializes a new Git repository?', back: 'git init - Creates a new .git directory in the current folder, initializing version control.', category: 'Basic', difficulty: 'beginner' },
    { id: 'fc-git-2', front: 'How do you stage all changes for commit?', back: 'git add . (stages all in current dir)\ngit add -A (stages all including deletions)\ngit add -p (interactive staging)', category: 'Basic', difficulty: 'beginner' },
    { id: 'fc-git-3', front: 'What is HEAD in Git?', back: 'HEAD is a pointer to the current commit/branch you are working on. HEAD~1 means one commit before HEAD, HEAD~2 means two commits before, etc.', category: 'Basic', difficulty: 'beginner' },
    { id: 'fc-git-4', front: 'What is the staging area (index)?', back: 'An intermediate area where changes are prepared before committing. Files must be "staged" with git add before they can be committed. Allows selective commits.', category: 'Basic', difficulty: 'beginner' },
    
    // ============ BRANCHING ============
    { id: 'fc-git-5', front: 'How do you create and switch to a new branch in one command?', back: 'git checkout -b <branch-name>\nOR (modern way)\ngit switch -c <branch-name>', category: 'Branching', difficulty: 'beginner' },
    { id: 'fc-git-6', front: 'What is the difference between git checkout and git switch?', back: 'git switch is newer, dedicated to branch switching only.\ngit checkout does multiple things (switch branches, restore files).\nSwitch is safer and more intuitive for branch operations.', category: 'Branching', difficulty: 'intermediate' },
    { id: 'fc-git-7', front: 'What are common Git branching strategies?', back: '1. GitFlow: main, develop, feature/, release/, hotfix/ branches\n2. GitHub Flow: main + feature branches, deploy from main\n3. Trunk-based: Single main branch, short-lived feature branches', category: 'Branching', difficulty: 'intermediate' },
    { id: 'fc-git-8', front: 'What is a feature branch workflow?', back: 'Create a new branch for each feature/task from main. Work on feature in isolation. Create PR/MR to merge back. Keeps main stable, allows parallel development.', category: 'Branching', difficulty: 'beginner' },
    
    // ============ MERGING ============
    { id: 'fc-git-9', front: 'What is the difference between merge and rebase?', back: 'Merge: Creates a new "merge commit" combining two branches. Preserves complete history.\n\nRebase: Moves your commits to the tip of another branch. Creates linear history but rewrites commit hashes.', category: 'Merging', difficulty: 'intermediate' },
    { id: 'fc-git-10', front: 'What is a merge conflict?', back: 'Occurs when Git cannot automatically merge changes because the same lines were modified in different branches. Must be resolved manually by editing the conflicting files, then staging and committing.', category: 'Merging', difficulty: 'intermediate' },
    { id: 'fc-git-11', front: 'What does git merge --no-ff do?', back: 'Creates a merge commit even if fast-forward is possible. This preserves the branch history and makes it clear a feature branch was merged. Good for maintaining clear history.', category: 'Merging', difficulty: 'intermediate' },
    { id: 'fc-git-12', front: 'What does git merge --squash do?', back: 'Combines all commits from the feature branch into a single commit. Does NOT create a merge commit. Result is staged but not committed - you make one clean commit for the entire feature.', category: 'Merging', difficulty: 'intermediate' },
    { id: 'fc-git-13', front: 'What is a fast-forward merge?', back: 'When the target branch has no new commits since the feature branched off. Git simply moves the branch pointer forward. No merge commit created. Use --no-ff to force a merge commit.', category: 'Merging', difficulty: 'intermediate' },
    
    // ============ REBASE ============
    { id: 'fc-git-14', front: 'When should you use rebase vs merge?', back: 'Rebase: For local branches, keeping feature branches up to date, clean linear history.\n\nMerge: For shared branches, preserving complete history, when branch history is important.', category: 'Rebase', difficulty: 'intermediate' },
    { id: 'fc-git-15', front: 'What is interactive rebase (git rebase -i)?', back: 'Allows editing commit history:\n- pick: keep commit\n- reword: change message\n- edit: modify commit\n- squash: combine with previous\n- fixup: squash without message\n- drop: remove commit', category: 'Rebase', difficulty: 'advanced' },
    { id: 'fc-git-16', front: 'Why should you NOT rebase shared branches?', back: 'Rebase rewrites commit history (new commit hashes). If others based work on original commits, their work becomes incompatible. Never rebase commits that have been pushed and shared.', category: 'Rebase', difficulty: 'advanced' },
    { id: 'fc-git-17', front: 'What does git pull --rebase do?', back: 'Fetches changes and rebases your local commits on top of them (instead of merging). Creates cleaner linear history. Avoids unnecessary merge commits for simple updates.', category: 'Rebase', difficulty: 'intermediate' },
    
    // ============ REMOTE ============
    { id: 'fc-git-18', front: 'What is the difference between git fetch and git pull?', back: 'git fetch: Downloads changes from remote but does NOT merge them. Safe to inspect changes first.\n\ngit pull: Fetches AND merges (or rebases) changes into your current branch.', category: 'Remote', difficulty: 'intermediate' },
    { id: 'fc-git-19', front: 'How do you delete a remote branch?', back: 'git push origin --delete <branch-name>\nOR\ngit push origin :<branch-name>', category: 'Remote', difficulty: 'intermediate' },
    { id: 'fc-git-20', front: 'What does git push -u origin <branch> do?', back: 'Pushes the branch and sets "upstream" tracking. After this, you can just use "git push" and "git pull" without specifying the remote and branch name.', category: 'Remote', difficulty: 'intermediate' },
    { id: 'fc-git-21', front: 'What is git push --force-with-lease?', back: 'Safer alternative to --force. Only force pushes if your local ref matches the remote. Prevents accidentally overwriting someone else\'s work that was pushed after your last fetch.', category: 'Remote', difficulty: 'advanced' },
    
    // ============ STASH ============
    { id: 'fc-git-22', front: 'What does git stash do?', back: 'Temporarily saves your uncommitted changes (staged and unstaged) so you can switch branches. Use git stash pop to reapply changes. Useful when you need to switch context quickly.', category: 'Stash', difficulty: 'intermediate' },
    { id: 'fc-git-23', front: 'What is the difference between git stash pop and git stash apply?', back: 'pop: Applies the stash AND removes it from the stash list.\n\napply: Applies the stash but KEEPS it in the stash list. Useful if you want to apply same stash to multiple branches.', category: 'Stash', difficulty: 'intermediate' },
    
    // ============ ADVANCED ============
    { id: 'fc-git-24', front: 'What is the difference between git reset and git revert?', back: 'reset: Changes history by moving HEAD pointer. Can lose commits. Dangerous for shared branches.\n\nrevert: Creates a NEW commit that undoes changes. Preserves history. Safe for shared branches.', category: 'Advanced', difficulty: 'advanced' },
    { id: 'fc-git-25', front: 'What are the three git reset modes?', back: '--soft: Reset HEAD only. Changes stay staged.\n--mixed (default): Reset HEAD and staging. Changes in working dir.\n--hard: Reset everything. Changes are LOST!', category: 'Advanced', difficulty: 'intermediate' },
    { id: 'fc-git-26', front: 'How do you recover lost commits?', back: 'Use git reflog to see history of HEAD movements. Find the commit hash you need, then:\ngit checkout <hash> OR\ngit reset --hard <hash>\nReflog keeps history for ~90 days.', category: 'Advanced', difficulty: 'advanced' },
    { id: 'fc-git-27', front: 'What does git cherry-pick do?', back: 'Applies changes from a specific commit onto your current branch. Creates a new commit with same changes but different hash. Useful for grabbing specific fixes from other branches.', category: 'Advanced', difficulty: 'advanced' },
    { id: 'fc-git-28', front: 'What is git blame used for?', back: 'Shows who last modified each line of a file and when. Useful for finding who introduced a bug or understanding code history. Use git blame -L 10,20 file.js for specific lines.', category: 'Advanced', difficulty: 'intermediate' },
    
    // ============ WORKFLOWS ============
    { id: 'fc-git-29', front: 'What is GitFlow workflow?', back: 'Branching model with:\n- main: production code\n- develop: integration branch\n- feature/*: new features\n- release/*: prepare releases\n- hotfix/*: urgent production fixes\nGood for scheduled releases.', category: 'Workflows', difficulty: 'intermediate' },
    { id: 'fc-git-30', front: 'What is GitHub Flow?', back: 'Simple workflow:\n1. Branch off main\n2. Add commits\n3. Open Pull Request\n4. Review and discuss\n5. Deploy and test\n6. Merge to main\nGood for continuous deployment.', category: 'Workflows', difficulty: 'beginner' },
    { id: 'fc-git-31', front: 'What is trunk-based development?', back: 'All developers work on a single branch (main/trunk). Use short-lived feature branches (<1 day). Merge frequently. Requires good CI/CD and feature flags. Reduces merge conflicts.', category: 'Workflows', difficulty: 'intermediate' },
    
    // ============ GITHUB/GITLAB/BITBUCKET ============
    { id: 'fc-git-32', front: 'What is a Pull Request (PR) / Merge Request (MR)?', back: 'A request to merge your branch into another. Allows code review, discussion, CI checks before merging. GitHub/Bitbucket call it PR, GitLab calls it MR. Same concept.', category: 'GitHub', difficulty: 'beginner' },
    { id: 'fc-git-33', front: 'What are GitHub Actions?', back: 'CI/CD platform built into GitHub. Automate workflows on events (push, PR, schedule). Uses YAML files in .github/workflows/. Can build, test, deploy automatically.', category: 'GitHub', difficulty: 'intermediate' },
    { id: 'fc-git-34', front: 'What is the difference between GitHub, GitLab, and Bitbucket?', back: 'All are Git hosting platforms.\nGitHub: Most popular, strong community, GitHub Actions.\nGitLab: Built-in CI/CD, self-hosted option, DevOps platform.\nBitbucket: Atlassian ecosystem (Jira), good for private repos.', category: 'GitHub', difficulty: 'beginner' },
    { id: 'fc-git-35', front: 'What is a fork vs clone?', back: 'Fork: Server-side copy of repo to YOUR account. Used for contributing to others\' projects.\n\nClone: Local copy of any repo (yours or forked). Fork first, then clone to contribute.', category: 'GitHub', difficulty: 'beginner' },
  ],

  quizQuestions: [
    // ============ BASICS ============
    {
      id: 'q-git-1',
      question: 'Which command is used to create a new Git repository?',
      options: ['git create', 'git new', 'git init', 'git start'],
      correctAnswer: 2,
      explanation: 'git init initializes a new Git repository in the current directory, creating a .git folder.',
      category: 'Basic'
    },
    {
      id: 'q-git-2',
      question: 'What does "git clone" do?',
      options: ['Creates a new branch', 'Copies a repository from remote to local', 'Merges two branches', 'Deletes a repository'],
      correctAnswer: 1,
      explanation: 'git clone creates a complete copy of a remote repository on your local machine, including all history.',
      category: 'Basic'
    },
    {
      id: 'q-git-3',
      question: 'Which command stages all modified and new files?',
      options: ['git stage .', 'git add .', 'git commit -a', 'git save .'],
      correctAnswer: 1,
      explanation: 'git add . stages all changes in the current directory and subdirectories for the next commit.',
      category: 'Basic'
    },
    {
      id: 'q-git-4',
      question: 'What does HEAD~2 refer to?',
      options: ['Two commits ahead', 'Two commits before HEAD', 'Second branch', 'Remote HEAD'],
      correctAnswer: 1,
      explanation: 'HEAD~2 refers to the grandparent of HEAD - two commits before the current commit.',
      category: 'Basic'
    },
    
    // ============ BRANCHING ============
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
      question: 'What is the modern command to switch branches?',
      options: ['git checkout', 'git change', 'git switch', 'git branch'],
      correctAnswer: 2,
      explanation: 'git switch is the modern, dedicated command for switching branches. Introduced to separate concerns from git checkout.',
      category: 'Branching'
    },
    {
      id: 'q-git-7',
      question: 'How do you delete a local branch that has been merged?',
      options: ['git branch -d name', 'git delete name', 'git remove name', 'git branch --remove name'],
      correctAnswer: 0,
      explanation: 'git branch -d safely deletes a merged branch. Use -D to force delete an unmerged branch.',
      category: 'Branching'
    },
    
    // ============ MERGING ============
    {
      id: 'q-git-8',
      question: 'What does git merge --squash do?',
      options: ['Deletes the branch after merging', 'Combines all commits into one before merging', 'Forces the merge', 'Skips conflict resolution'],
      correctAnswer: 1,
      explanation: 'git merge --squash combines all the branch commits into a single commit, giving you a clean history.',
      category: 'Merging'
    },
    {
      id: 'q-git-9',
      question: 'What is a fast-forward merge?',
      options: ['A merge with conflicts', 'A merge that creates two commits', 'A merge where Git just moves the branch pointer', 'A merge that skips tests'],
      correctAnswer: 2,
      explanation: 'Fast-forward happens when there are no new commits on the target branch. Git simply moves the pointer forward.',
      category: 'Merging'
    },
    {
      id: 'q-git-10',
      question: 'How do you abort a merge in progress?',
      options: ['git merge --stop', 'git merge --abort', 'git cancel merge', 'git undo merge'],
      correctAnswer: 1,
      explanation: 'git merge --abort stops the merge and returns to the pre-merge state.',
      category: 'Merging'
    },
    
    // ============ REBASE ============
    {
      id: 'q-git-11',
      question: 'What does git rebase do?',
      options: ['Creates a backup', 'Moves commits to a new base', 'Deletes history', 'Merges branches'],
      correctAnswer: 1,
      explanation: 'Rebase moves your commits to the tip of another branch, rewriting history to create a linear sequence.',
      category: 'Rebase'
    },
    {
      id: 'q-git-12',
      question: 'When should you NOT use git rebase?',
      options: ['On local branches', 'On shared/public branches', 'Before merging', 'When cleaning history'],
      correctAnswer: 1,
      explanation: 'Never rebase shared branches because it rewrites history. Others who based work on original commits will have conflicts.',
      category: 'Rebase'
    },
    {
      id: 'q-git-13',
      question: 'What does git rebase -i HEAD~3 allow you to do?',
      options: ['Delete last 3 branches', 'Interactively edit last 3 commits', 'Merge 3 branches', 'Create 3 tags'],
      correctAnswer: 1,
      explanation: 'Interactive rebase (-i) lets you edit, squash, reorder, or drop the last 3 commits.',
      category: 'Rebase'
    },
    
    // ============ REMOTE ============
    {
      id: 'q-git-14',
      question: 'What is the difference between git fetch and git pull?',
      options: ['They are identical', 'fetch downloads and merges, pull only downloads', 'fetch only downloads, pull downloads and merges', 'fetch is for tags, pull is for branches'],
      correctAnswer: 2,
      explanation: 'git fetch downloads changes without merging, while git pull downloads and automatically merges.',
      category: 'Remote'
    },
    {
      id: 'q-git-15',
      question: 'How do you delete a remote branch?',
      options: ['git delete origin branch', 'git push origin --delete branch', 'git remote delete branch', 'git branch -r -d branch'],
      correctAnswer: 1,
      explanation: 'git push origin --delete branch-name removes the branch from the remote repository.',
      category: 'Remote'
    },
    {
      id: 'q-git-16',
      question: 'What does git push -u origin main do?',
      options: ['Updates main', 'Pushes and sets upstream tracking', 'Uploads files', 'Undoes last push'],
      correctAnswer: 1,
      explanation: 'The -u flag sets the upstream tracking branch, so future git push/pull work without specifying remote/branch.',
      category: 'Remote'
    },
    
    // ============ STASH ============
    {
      id: 'q-git-17',
      question: 'What does git stash do?',
      options: ['Permanently deletes changes', 'Commits changes immediately', 'Temporarily stores uncommitted changes', 'Creates a new branch'],
      correctAnswer: 2,
      explanation: 'git stash temporarily saves your uncommitted changes so you can work on something else.',
      category: 'Stash'
    },
    {
      id: 'q-git-18',
      question: 'What is the difference between git stash pop and git stash apply?',
      options: ['No difference', 'pop removes stash, apply keeps it', 'pop is faster', 'apply creates a branch'],
      correctAnswer: 1,
      explanation: 'pop applies and removes the stash from the list. apply keeps the stash so it can be reused.',
      category: 'Stash'
    },
    
    // ============ ADVANCED ============
    {
      id: 'q-git-19',
      question: 'Which command is safer for undoing commits on shared branches?',
      options: ['git reset --hard', 'git revert', 'git delete', 'git undo'],
      correctAnswer: 1,
      explanation: 'git revert creates a new commit that undoes changes, preserving history. Safe for shared branches.',
      category: 'Advanced'
    },
    {
      id: 'q-git-20',
      question: 'What does git reset --soft HEAD~1 do?',
      options: ['Deletes the commit permanently', 'Undoes commit, keeps changes staged', 'Undoes commit, changes unstaged', 'Creates a new branch'],
      correctAnswer: 1,
      explanation: '--soft resets HEAD but keeps all changes in the staging area, ready to recommit.',
      category: 'Advanced'
    },
    {
      id: 'q-git-21',
      question: 'How can you recover lost commits?',
      options: ['git undo', 'git recover', 'git reflog', 'git restore'],
      correctAnswer: 2,
      explanation: 'git reflog shows all HEAD movements including "lost" commits. You can then checkout or reset to recover them.',
      category: 'Advanced'
    },
    
    // ============ WORKFLOWS ============
    {
      id: 'q-git-22',
      question: 'Which workflow uses main, develop, feature, release, and hotfix branches?',
      options: ['GitHub Flow', 'GitFlow', 'Trunk-based', 'Feature Branch'],
      correctAnswer: 1,
      explanation: 'GitFlow is a branching model with dedicated branches for different purposes: main, develop, feature, release, and hotfix.',
      category: 'Workflows'
    },
    {
      id: 'q-git-23',
      question: 'What is GitHub Flow characterized by?',
      options: ['Complex branching', 'Simple: branch from main, PR, merge', 'No branches allowed', 'Only hotfixes'],
      correctAnswer: 1,
      explanation: 'GitHub Flow is simple: create a branch from main, make changes, open a PR, review, and merge back to main.',
      category: 'Workflows'
    },
    
    // ============ GITHUB/GITLAB ============
    {
      id: 'q-git-24',
      question: 'What is a Pull Request (PR)?',
      options: ['Download request', 'Request to merge your branch', 'Request to pull from remote', 'Request to create a branch'],
      correctAnswer: 1,
      explanation: 'A Pull Request is a request to merge your branch into another, allowing code review and discussion before merging.',
      category: 'GitHub'
    },
    {
      id: 'q-git-25',
      question: 'What is the difference between fork and clone?',
      options: ['Same thing', 'Fork is server-side copy, clone is local copy', 'Clone is server-side, fork is local', 'Fork is for branches'],
      correctAnswer: 1,
      explanation: 'Fork creates a copy on the server (your account). Clone creates a local copy. Fork first, then clone to contribute to others\' projects.',
      category: 'GitHub'
    },
  ],
};

