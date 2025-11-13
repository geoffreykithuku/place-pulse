# Git Workflow Cheat Sheet

Quick reference for common git and code quality commands.

## Setup (First Time)

```bash
# Install dependencies
npm install

# Install git hooks
npm run prepare
```

## Daily Development

### Starting Work

```bash
# Update main branch
git fetch origin
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/your-feature-name
```

### Making Changes

```bash
# View changes
git status                 # See what changed
git diff                   # See exact changes
git diff --staged         # See staged changes

# Stage changes
git add .                 # Stage all
git add <file>           # Stage specific file
git add -p               # Interactive staging

# Commit with lint-staged (auto-fixes issues)
git commit -m "type(scope): description"

# View recent commits
git log --oneline -10
git log --graph --all --oneline
```

### Pushing Changes

```bash
# Push branch
git push origin feature/your-feature-name

# Set upstream tracking (first push)
git push -u origin feature/your-feature-name

# Force push after rebase (careful!)
git push --force-with-lease origin feature/your-feature-name
```

## Code Quality

### Linting

```bash
npm run lint              # Check errors (warnings only)
npm run lint:fix          # Auto-fix linting errors
```

### Formatting

```bash
npm run format            # Format all files with Prettier
npm run format:check      # Check formatting (don't change)
```

### Type Checking

```bash
npm run type-check        # Run TypeScript type checker
```

## Commit Messages

### Valid Commits ✅

```bash
git commit -m "feat: add property search filters"
git commit -m "fix(auth): handle token expiration"
git commit -m "docs: update API documentation"
git commit -m "refactor(ui): extract PropertyCard component"
git commit -m "chore(deps): upgrade React to 18.3.0"
```

### Invalid Commits ❌

```bash
git commit -m "add feature"              # Missing type
git commit -m "Feat: add feature"        # Type not lowercase
git commit -m "feat: add feature."       # Period at end
git commit -m "add new property search filters with advanced options and sorting" # Too long
```

## Commit Message Types

| Type       | Usage            | Example                        |
| ---------- | ---------------- | ------------------------------ |
| `feat`     | New feature      | `feat(search): add filters`    |
| `fix`      | Bug fix          | `fix(ui): button alignment`    |
| `docs`     | Documentation    | `docs: update README`          |
| `style`    | Formatting       | `style: format with prettier`  |
| `refactor` | Code improvement | `refactor: extract hook`       |
| `perf`     | Performance      | `perf: lazy load images`       |
| `test`     | Tests            | `test: add auth tests`         |
| `chore`    | Build/deps       | `chore(deps): upgrade Next.js` |
| `ci`       | CI/CD config     | `ci: add GitHub Actions`       |
| `revert`   | Revert commit    | `revert: undo previous commit` |

## Useful Scopes

```
auth          - Authentication/login/signup
ui            - UI components
button        - Button component specifically
modal         - Modal/dialog components
form          - Form components
pages         - Page components
home          - Home page
browse        - Browse/search page
property      - Property details page
search        - Search/filter functionality
api           - API/backend
hooks         - React custom hooks
styles        - CSS/styling
animations    - Framer Motion animations
images        - Image optimization
performance   - Performance improvements
accessibility - a11y improvements
security      - Security fixes
deps          - Dependencies/packages
config        - Configuration files
```

## Workflow: Feature Branch

```bash
# 1. Create feature branch
git checkout -b feature/new-feature

# 2. Make changes
# ... edit files ...

# 3. Stage and commit
git add .
git commit -m "feat(scope): add new feature"

# 4. Make more changes if needed
# ... edit more files ...
git commit -m "feat(scope): complete feature"

# 5. Keep updated with main
git fetch origin
git rebase origin/main

# 6. Push to remote
git push -u origin feature/new-feature

# 7. Open Pull Request on GitHub
```

## Workflow: Bug Fix

```bash
# 1. Create fix branch
git checkout -b fix/bug-description

# 2. Fix the bug
# ... make changes ...

# 3. Commit with reference to issue
git commit -m "fix(scope): resolve issue

Description of the bug and how it was fixed.

Fixes #123"

# 4. Push and create PR
git push -u origin fix/bug-description
```

## Workflow: Multiple Commits into One

```bash
# Interactive rebase last 3 commits
git rebase -i HEAD~3

# In editor, change 'pick' to 'squash' for commits to combine
# Then resolve any conflicts if needed

# Force push to update PR
git push --force-with-lease origin feature-branch
```

## Workflow: Fix Last Commit

```bash
# Fix the last commit message
git commit --amend -m "feat: corrected message"

# Fix the last commit (add forgotten changes)
git add forgotten-file.ts
git commit --amend --no-edit

# Force push if already pushed
git push --force-with-lease origin feature-branch
```

## Undo Changes

```bash
# Discard unstaged changes in file
git checkout -- <file>

# Unstage a file
git reset HEAD <file>

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# View what you can restore
git reflog

# Restore from reflog (if you accidentally deleted)
git reset --hard <commit-hash>
```

## View History

```bash
# Simple log
git log --oneline

# Detailed log with graph
git log --graph --oneline --all

# Changes in specific file
git log -p <file>

# Who changed each line
git blame <file>

# See what changed in commit
git show <commit-hash>
```

## Branches

```bash
# List local branches
git branch

# List all branches (local + remote)
git branch -a

# Delete local branch
git branch -d feature-branch

# Delete remote branch
git push origin --delete feature-branch

# Rename current branch
git branch -m new-name

# Create branch from commit
git checkout -b new-branch <commit-hash>
```

## Stash (Save Work Temporarily)

```bash
# Save changes without committing
git stash

# List stashed changes
git stash list

# Apply latest stash
git stash apply

# Apply specific stash
git stash apply stash@{0}

# Delete stash
git stash drop stash@{0}

# Delete all stashes
git stash clear
```

## Merge vs Rebase

```bash
# Merge: Create merge commit (preserves history)
git merge feature-branch

# Rebase: Replay commits on top (linear history)
git rebase origin/main

# Interactive rebase: Rearrange/squash commits
git rebase -i origin/main
```

## Common Issues

### "lint-staged failed"

```bash
npm run lint:fix
npm run format
git add .
git commit -m "type: message"
```

### "commitlint failed"

```bash
git commit --amend -m "type(scope): correct message"
```

### "Can't push - branch behind"

```bash
git fetch origin
git rebase origin/main
git push --force-with-lease origin feature-branch
```

### "Made change on wrong branch"

```bash
# Save changes
git stash

# Switch to correct branch
git checkout correct-branch

# Apply changes
git stash pop

# Commit
git commit -m "type: message"
```

## Summary of Pre-Commit Checks

When you run `git commit`, Husky automatically:

1. ✅ Runs ESLint on changed files (`eslint --fix`)
2. ✅ Formats code with Prettier (`prettier --write`)
3. ✅ Validates commit message (`commitlint`)

**If anything fails**: Fix errors → Stage files → Try commit again

## Need Help?

```bash
# General git help
git help <command>        # e.g., git help commit

# See what git would do
git diff                  # Preview changes
git diff --staged         # Preview staged changes

# Check status
git status               # Current branch and changes

# Ask AI/teammates if unsure about commit type/scope
```

---

**Remember**: Better many small, clear commits than few large, confusing ones! 🎯
