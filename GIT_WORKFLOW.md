# Git Workflow Guide

This document outlines the automated git workflow and quality checks that run in this project.

## Overview

This project uses several tools to maintain code quality and enforce best practices:

| Tool            | Purpose                       | Hook                   |
| --------------- | ----------------------------- | ---------------------- |
| **Husky**       | Git hooks manager             | pre-commit, commit-msg |
| **lint-staged** | Run linters on staged changes | pre-commit             |
| **commitlint**  | Enforce commit message format | commit-msg             |
| **ESLint**      | TypeScript/JavaScript linting | pre-commit             |
| **Prettier**    | Code formatting               | pre-commit             |

## Workflow Diagram

```
Developer commits code
         ↓
    Husky triggered
         ↓
    ┌────────────────┐
    │  pre-commit    │
    │   hook runs    │
    └────────────────┘
         ↓
    ┌────────────────┐
    │ lint-staged    │
    │ (runs on all   │
    │  staged files) │
    └────────────────┘
         ↓
    ┌────────────────┐
    │  ESLint check  │
    ├────────────────┤
    │ Prettier format│
    └────────────────┘
         ↓
    ┌─── Pass? ───┐
    │             │
   NO            YES
    │             │
    ↓             ↓
  FAIL      ┌──────────────┐
            │ commit-msg   │
            │ hook runs    │
            └──────────────┘
                  ↓
            ┌──────────────┐
            │ commitlint   │
            │ validates    │
            │ message      │
            └──────────────┘
                  ↓
            ┌─── Pass? ───┐
            │             │
           NO            YES
            │             │
            ↓             ↓
          FAIL      Commit created
```

## Git Hooks

### pre-commit Hook

**Location**: `.husky/pre-commit`

**Purpose**: Ensure code quality before allowing commits

**What it does**:

1. Runs `lint-staged` on all staged files
2. Executes ESLint with auto-fix enabled
3. Formats code with Prettier
4. Only allows commit if all checks pass

**If it fails**:

- Review the error messages
- Fix issues (usually auto-fixed by lint-staged)
- Stage the fixed files
- Try committing again

### commit-msg Hook

**Location**: `.husky/commit-msg`

**Purpose**: Validate commit message format

**What it does**:

1. Runs commitlint on the commit message
2. Checks message follows Conventional Commits format
3. Validates type, scope, and subject
4. Ensures message length is appropriate

**If it fails**:

- Review the error (message will indicate what's wrong)
- Amend commit: `git commit --amend`
- Fix the message format
- Commit again

## Configuration Files

### .commitlintrc.json

```json
{
  "extends": ["@commitlint/config-conventional"],
  "rules": {
    "type-enum": [2, "always", ["feat", "fix", "docs", ...]],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "subject-case": [2, "always", "lower-case"],
    "header-max-length": [2, "always", 100]
  }
}
```

**Key Rules**:

- Type must be lowercase
- Subject must not be empty
- Subject must not end with period
- Subject must be lowercase
- Header cannot exceed 100 characters

### .lintstagedrc

```json
{
  "*.{ts,tsx,js,jsx}": ["eslint --fix", "prettier --write"],
  "*.{json,md,css}": ["prettier --write"]
}
```

**What it does**:

- For TypeScript/JavaScript files: Run ESLint and Prettier
- For JSON/Markdown/CSS files: Run Prettier only

### .prettierrc

Prettier configuration defining code style:

- 2-space indentation
- Single quotes? No (use double quotes)
- Trailing commas for es5
- 100 character line width
- LF line endings

### .prettierignore

Files to exclude from Prettier formatting:

- node_modules
- .next
- Lock files
- Build outputs

## Common Scenarios

### Scenario 1: Commit fails due to linting errors

```bash
$ git commit -m "feat: add new component"
# Error: ESLint found issues

# Fix options:
1. npm run lint:fix  (auto-fix linting issues)
2. git add .         (stage fixes)
3. git commit -m "feat: add new component"  (try again)
```

### Scenario 2: Commit rejected by commitlint

```bash
$ git commit -m "add new feature"
# Error: type-empty [type must be defined]

# Fix:
1. git commit --amend
2. Change message to: "feat: add new feature"
3. Save and close editor
```

### Scenario 3: Need to skip hooks (emergency only)

```bash
git commit --no-verify -m "message"
```

⚠️ **Not recommended** - bypasses all quality checks!

### Scenario 4: Fix previous commit message

```bash
# Amend the commit message
git commit --amend -m "feat(scope): correct message"

# Force push to remote (only if not merged)
git push --force-with-lease origin branch-name
```

## Best Practices

### 1. Commit Frequently

- Smaller, focused commits are better
- Each commit should represent one logical change
- Makes reviewing and debugging easier

### 2. Write Meaningful Messages

❌ Bad:

```
fix stuff
update files
changes
```

✅ Good:

```
fix(property-card): correct image aspect ratio

The image was displaying with incorrect proportions in
the card. Updated the container dimensions to match
the design specification.
```

### 3. Keep Changes Focused

Each commit should change one thing:

- ❌ Don't mix refactoring with feature additions
- ❌ Don't include unrelated bug fixes
- ✅ One feature = one branch = one pull request

### 4. Review Before Committing

```bash
git diff              # See changes
git status            # See staged files
git add -p            # Stage specific parts
```

### 5. Use Branches Effectively

```bash
# Feature branch
git checkout -b feature/new-feature

# Keep it up to date
git fetch origin
git rebase origin/main
```

## Troubleshooting

### "pre-commit hook failed"

**Cause**: lint-staged found linting or formatting issues

**Solution**:

```bash
npm run lint:fix
npm run format
git add .
git commit -m "type: message"
```

### "commit-msg hook failed"

**Cause**: commitlint rejected commit message format

**Solution**:

```bash
git commit --amend
# Fix message to follow format: type(scope): subject
```

### "Prettier reformatted files"

**Cause**: Code didn't match Prettier's formatting

**Solution**:
Files are auto-formatted by lint-staged. Just stage and commit:

```bash
git add .
git commit -m "type: message"
```

### "Node not found in hook"

**Cause**: Husky can't find Node.js

**Solution**:

```bash
npm run prepare    # Reinstall hooks
```

## Manual Commands

You don't need to run these manually - they're automatic! But available if needed:

```bash
# Manual linting
npm run lint          # Check for linting errors
npm run lint:fix      # Fix linting errors

# Manual formatting
npm run format        # Format all files
npm run format:check  # Check without changing

# Manual commit validation
npx commitlint --edit <commit-msg-file>
npx lint-staged      # Run staged checks
```

## Continuous Integration

These same checks run in CI/CD pipelines. Commits that pass locally should pass in CI.

## References

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Husky Docs](https://typicode.github.io/husky/)
- [commitlint Docs](https://commitlint.js.org/)
- [lint-staged](https://github.com/okonet/lint-staged)
- [Prettier Docs](https://prettier.io/)
- [ESLint Docs](https://eslint.org/)
