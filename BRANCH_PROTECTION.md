# GitHub Branch Protection & CI/CD Setup

This document explains how to configure GitHub branch protection rules to enforce quality checks on pull requests to the main branch.

## Overview

The repository includes three automated workflows:

1. **CI - Code Quality Checks** (`ci.yml`) - Main quality gate
2. **Performance & Bundle Analysis** (`performance.yml`) - Performance monitoring
3. **Dependency Management** (`dependencies.yml`) - Security and dependency checks
4. **Code Review Assistant** (`code-review.yml`) - Automated code review suggestions

## Setting Up Branch Protection Rules

### Step 1: Access Repository Settings

1. Go to your GitHub repository
2. Click **Settings** (gear icon)
3. Navigate to **Branches** → **Add rule** or select **main** branch

### Step 2: Configure Branch Protection

#### Basic Settings

- **Branch name pattern**: `main`
- ✅ Enable the following options:

```
☑ Require a pull request before merging
  ☑ Require approvals
    Number of required approvals: 1

☑ Require status checks to pass before merging
  ☑ Require branches to be up to date before merging

  Required status checks:
  - Code Quality & Linting
  - Build Test
  - E2E Tests
  - Security Checks
  - Validate Commit Messages

☑ Require code reviews from Code Owners
☑ Dismiss stale pull request approvals when new commits are pushed
☑ Require approval of the most recent reviewers
☑ Require CODEOWNERS review (if applicable)
☑ Require status checks to pass
☑ Include administrators
☑ Allow force pushes (optional - not recommended)
☑ Allow deletions
```

### Step 3: Configure Status Checks

In the **Require status checks to pass before merging** section, select:

**Required checks from CI workflow:**

- `Code Quality & Linting`
- `Build Test`
- `E2E Tests`
- `Security Checks`
- `Validate Commit Messages`

**From Performance workflow (optional):**

- `Bundle Size Analysis`
- `Lighthouse Performance Audit`

**From Dependency workflow (optional):**

- `NPM Audit`

### Step 4: Administrator Settings

At the bottom, configure:

```
☑ Include administrators
  Enforce all the above rules for administrators too

☑ Restrict who can push to matching branches
  Allow pushes from: select "Nobody"
  (Forces all changes through PR process)

☑ Allow force pushes
  ☐ No (Recommended)

☑ Allow deletions
  ☐ Yes (allows branch deletion after merge)
```

## GitHub Actions Configuration

### Required Secrets

For full functionality, add these secrets to GitHub (Settings → Secrets and variables → Actions):

```env
SNYK_TOKEN          # For Snyk security scanning (optional)
CODECOV_TOKEN       # For Codecov integration (optional)
```

### Workflows Structure

#### CI Workflow (.github/workflows/ci.yml)

Runs on every push and PR to main/develop:

```
Quality (parallel)
├── ESLint check
├── Prettier format check
└── TypeScript type check

Build
└── Next.js build

E2E Tests (needs Build)
└── Cypress tests

Security
├── npm audit
└── Snyk scan

Commit Lint
└── Conventional commits validation

Summary
└── Quality gate report
```

**Jobs that must pass:**

- `quality` - Code quality and formatting
- `build` - Successful Next.js build
- `e2e-tests` - All Cypress tests pass

## PR Workflow

When a developer creates a PR to main:

### 1. Automatic Checks Run

```
PR Created
    ↓
GitHub Actions triggered
    ↓
┌─────────────────────────┐
│ Parallel Checks         │
├─────────────────────────┤
│ • ESLint               │
│ • Prettier             │
│ • TypeScript           │
│ • Build Test           │
│ • E2E Tests            │
│ • Security             │
│ • Commit Lint          │
└─────────────────────────┘
    ↓
    All Pass?
    ↓ Yes
Quality Gate ✅
Can be merged
    ↓
    No
Quality Gate ❌
Cannot merge
PR author must fix
```

### 2. GitHub Comments

The workflow automatically comments on the PR with:

```
## 🔍 Quality Checks Summary

| Check | Status |
|-------|--------|
| ESLint & Formatting | ✅ success |
| Build Test | ✅ success |
| E2E Tests | ✅ success |
| Security | ✅ success |
| Commit Messages | ✅ success |
```

### 3. Merge Requirements

Before merging, PR must have:

- ✅ All status checks passing (green checkmarks)
- ✅ At least 1 approval (configured number)
- ✅ Up to date with main branch
- ✅ No merge conflicts
- ✅ Code owner approval (if configured)

## Viewing Workflow Runs

### In GitHub UI

1. Go to **Actions** tab in repository
2. Select workflow to view
3. Click run to see detailed logs
4. Download artifacts if needed

### Check PR Status

- PR shows status checks at the bottom: "All checks have passed"
- Click on individual check to see logs
- Click "Details" to see full workflow run

## Common Issues & Solutions

### Build Fails

**Problem**: `npm run build` fails

**Solution**:

1. Check the "Build Test" workflow logs
2. Look for compilation errors
3. Common issues:
   - Missing dependencies: `npm install`
   - TypeScript errors: Run `npm run type-check` locally
   - Import issues: Check relative paths

### E2E Tests Fail

**Problem**: Cypress tests fail on CI but pass locally

**Solution**:

1. Check the "E2E Tests" workflow logs
2. Download screenshot artifacts
3. Common causes:
   - Timing issues: Use proper wait selectors
   - Environment differences: Check environment variables
   - Port conflicts: Ensure 3000 is available

### ESLint/Prettier Fails

**Problem**: Code formatting or linting fails

**Solution**:

1. Run locally: `npm run lint:fix && npm run format`
2. Stage and commit changes: `git add . && git commit`
3. Push again

### Commit Message Validation Fails

**Problem**: `commitlint` rejects commit messages

**Solution**:

1. Use format: `type(scope): subject`
2. Examples: `feat(auth): add login`, `fix(ui): button style`
3. See COMMIT_MESSAGE_EXAMPLES.md for more

## Disabling/Modifying Workflows

### Temporarily Disable

In the workflow file, change `on:` to:

```yaml
on:
  workflow_dispatch: # Manual trigger only
```

### Exclude Certain Jobs

In workflow file, comment out jobs you don't need:

```yaml
# e2e-tests:      # Commented out
#   name: E2E Tests
#   ...
```

## Performance Optimization

### Reduce Workflow Time

```yaml
# Use Node 20 only instead of matrix
node-version: [20.x]

# Skip expensive tests for documentation changes
paths:
  - "!docs/**"
  - "!README.md"

# Cache dependencies
cache: "npm"
```

### Skip CI for Certain Commits

Add to commit message:

```bash
git commit -m "docs: update README [skip ci]"
```

## Monitoring & Notifications

### Email Notifications

GitHub sends notifications when:

- PR checks fail
- Workflow completes
- Branch becomes outdated

Configure in GitHub → Settings → Notifications

### Slack Integration (Optional)

Add Slack notifications to workflows:

```yaml
- name: Slack notification
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    text: "CI/CD Pipeline Complete"
```

## Next Steps

1. **Go to repository Settings** → **Branches**
2. **Add rule** for `main` branch
3. **Select status checks** from Actions
4. **Save** protection rules
5. **Test** by creating a PR
6. **Monitor** Actions tab for workflow runs

## References

- [GitHub Branch Protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Next.js CI/CD Guide](https://nextjs.org/docs/deployment)
