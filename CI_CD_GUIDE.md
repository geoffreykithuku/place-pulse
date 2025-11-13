# CI/CD Pipeline Documentation

Complete guide to the automated quality checks and deployment pipeline for Place Pulse.

## Overview

The project implements a comprehensive Continuous Integration/Continuous Deployment (CI/CD) pipeline using GitHub Actions. Every pull request to the main branch triggers automated quality checks to ensure code quality, security, and functionality.

## Workflow Files

All workflows are defined in `.github/workflows/`:

### 1. **CI - Code Quality Checks** (`ci.yml`)

**Trigger**: Push or PR to `main` or `develop`

**Purpose**: Ensure code quality and functionality

**Jobs**:

#### Quality (Parallel)

- **ESLint**: Lint TypeScript/JavaScript
- **Prettier**: Check code formatting
- **TypeScript**: Type safety verification
- **Status**: ✅ Must pass to continue

#### Build

- **Next.js Build**: Compile application
- **Artifact**: `.next/` directory uploaded
- **Status**: ✅ Must pass for E2E tests
- **Timeout**: 30 minutes

#### E2E Tests

- **Cypress**: Run all tests in `cypress/e2e/**/*.cy.ts`
- **Browser**: Chrome (headless)
- **Requirements**:
  - Dev server running
  - Build artifacts available
- **Status**: ✅ Must pass
- **Artifacts**: Screenshots on failure
- **Timeout**: 45 minutes

#### Security

- **npm audit**: Check for vulnerabilities
- **Snyk**: Security scanning (if configured)
- **Status**: ⚠️ Warning only (non-blocking)

#### Commit Lint

- **Validates**: Commit message format
- **Format**: `type(scope): subject`
- **Status**: ✅ Must pass
- **Scope**: All commits to main

#### Summary

- **Reports**: All job statuses
- **Comments**: PR with summary table
- **Status**: Aggregates results

### 2. **Performance & Bundle Analysis** (`performance.yml`)

**Trigger**: PR to `main` or push to `main`

**Purpose**: Monitor performance metrics

**Jobs**:

#### Bundle Analysis

- **Analyzer**: `@next/bundle-analyzer`
- **Report**: Bundle size report
- **Artifacts**: Analysis data
- **Status**: ℹ️ Informational

#### Lighthouse Audit

- **Tool**: Lighthouse CI
- **Tests**: Performance, Accessibility, Best Practices, SEO
- **Target**: http://localhost:3000
- **Status**: ℹ️ Informational
- **Timeout**: 30 minutes

#### Code Coverage

- **Artifacts**: `coverage/coverage-final.json`
- **Upload**: Codecov (if configured)
- **Status**: ℹ️ Informational

### 3. **Dependency Management** (`dependencies.yml`)

**Trigger**:

- PR to `main` with `package.json` changes
- Daily schedule (2 AM UTC)

**Purpose**: Security and dependency updates

**Jobs**:

#### Dependency Check

- **Outdated**: Lists outdated packages
- **Audit**: NPM audit results
- **License**: License compliance check
- **Status**: ⚠️ Warning

#### NPM Audit

- **Vulnerabilities**: Security scan
- **Level**: Moderate or higher
- **PR Comments**: Vulnerability summary
- **Status**: ⚠️ Warning

### 4. **Code Review Assistant** (`code-review.yml`)

**Trigger**: PR opened, synchronized, or reopened to `main`

**Purpose**: Automated code review suggestions

**Jobs**:

#### Code Review

- **Analysis**: Files changed, lines modified
- **Issues**: console.log, TODO, large files
- **PR Comments**: Review checklist and summary
- **Status**: ℹ️ Informational

#### TypeScript Strict Mode

- **Check**: Runs with `--strict` flag
- **Status**: ⚠️ Warning only
- **Timeout**: 15 minutes

#### Component Validation

- **Exports**: Checks component exports
- **Structure**: Identifies large components
- **Status**: ℹ️ Informational

## Quality Gate Rules

### Branch Protection Rules (Required)

When properly configured on GitHub, the following MUST pass before merging to main:

```
✅ Code Quality & Linting
✅ Build Test
✅ E2E Tests
✅ Validate Commit Messages
```

### Optional Checks (Informational)

These provide insights but don't block merging:

```
ℹ️  Bundle Size Analysis
ℹ️  Lighthouse Performance Audit
ℹ️  Security Checks
ℹ️  Code Coverage
ℹ️  Dependency Analysis
```

## Workflow Execution Timeline

### On Push to main

```
1. Checkout (0s)
2. Setup Node (30s)
3. Install dependencies (60s)
4. Run all checks in parallel:
   - ESLint (45s)
   - Prettier (20s)
   - TypeScript (90s)
   - Build (180s)
   - E2E Tests (900s)
5. Aggregate results (10s)

Total: ~900 seconds (15 minutes)
```

### On PR to main

```
Same as above PLUS:
- Code Review checks
- Dependency analysis
- Performance monitoring

Total: ~1200 seconds (20 minutes)
```

## Environment Variables

### GitHub Secrets (Optional)

```bash
SNYK_TOKEN          # Snyk security scanning
CODECOV_TOKEN       # Code coverage upload
GITHUB_TOKEN        # Auto-included by GitHub
```

### Workflow Environment

```bash
NODE_ENV=development  # For dev server
NODE_ENV=test        # For E2E tests
NODE_ENV=production  # For production build
```

## Status Badges

Add to README.md:

```markdown
[![CI - Code Quality Checks](https://github.com/YOUR_OWNER/YOUR_REPO/workflows/CI%20-%20Code%20Quality%20Checks/badge.svg)](https://github.com/YOUR_OWNER/YOUR_REPO/actions)

[![E2E Tests](https://github.com/YOUR_OWNER/YOUR_REPO/workflows/CI%20-%20Code%20Quality%20Checks/badge.svg?label=e2e)](https://github.com/YOUR_OWNER/YOUR_REPO/actions)
```

## Common CI/CD Issues

### Issue: "Status check failed"

**Cause**: One of the required checks failed

**Solution**:

1. Click "Details" on the failing check
2. Review the logs
3. Fix the issue locally
4. Run tests: `npm run lint:fix && npm run format && npm run type-check`
5. Push again

### Issue: "Build timeout after 30 minutes"

**Cause**: Build takes too long

**Solution**:

1. Check for performance bottlenecks
2. Optimize imports
3. Split code with dynamic imports
4. Increase timeout in workflow if necessary

### Issue: "Cypress tests fail on CI but pass locally"

**Cause**: Environment differences

**Solution**:

1. Check network conditions
2. Add explicit waits
3. Use test data fixtures
4. Run with `headed: true` locally to debug
5. Review screenshot artifacts

### Issue: "npm audit vulnerabilities"

**Cause**: Dependency security issues

**Solution**:

1. Run `npm audit fix`
2. Update vulnerable packages: `npm update package-name`
3. If update unavailable, report upstream
4. Document known issues
5. Re-run `npm audit`

## Local Testing Before Push

### Simulate CI Locally

```bash
# Run all quality checks
npm run lint
npm run lint:fix
npm run format
npm run type-check
npm run build

# Run E2E tests (requires dev server running in another terminal)
npm run dev  # Terminal 1
npx cypress run  # Terminal 2
```

### Pre-commit Hook

Git hooks automatically run on commit:

- ESLint (auto-fix)
- Prettier (auto-format)
- commitlint (validate message)

### Manual Check Before Push

```bash
# Comprehensive quality check
npm run lint:fix
npm run format
npm run type-check
npm run build
npx cypress run

# Review changes
git diff

# If all pass, you're ready to push!
git push
```

## Monitoring & Debugging

### View Workflow Runs

1. Go to **Actions** tab in GitHub
2. Select workflow name
3. Click run to see logs
4. Download artifacts if available

### Check PR Status

1. Open PR on GitHub
2. Scroll to **Checks** section
3. Click on check to see logs
4. Review PR comments from bot

### Download Artifacts

1. In workflow run, click **Artifacts**
2. Download desired artifacts:
   - `next-build` - Build output
   - `cypress-results` - Test screenshots
   - `bundle-analysis` - Bundle report

## Performance Optimization

### Reduce Workflow Time

```yaml
# Use only necessary Node versions
node-version: [20.x] # Not [18.x, 20.x]

# Skip for docs-only changes
paths:
  - "!docs/**"
  - "!*.md"

# Use caching
cache: "npm"
cache-dependency-path: "**/package-lock.json"
```

### Parallel Execution

The CI workflow uses `needs: []` to run jobs in parallel:

- Quality jobs run first (fast)
- Build runs after quality passes
- E2E tests run after build completes
- Security runs independently

### Caching Strategy

```yaml
- uses: actions/setup-node@v4
  with:
    cache: "npm" # Cache node_modules
```

This caches `node_modules` and `package-lock.json` between runs.

## Troubleshooting Workflows

### Enable Debug Logging

Add to workflow step:

```yaml
- name: Enable debug
  run: npm run debug || true
  env:
    DEBUG: "*"
```

### Skip Specific Jobs

In workflow file, comment out jobs:

```yaml
# e2e-tests:  # Skip this job temporarily
#   name: E2E Tests
```

### Force Re-run

1. Go to **Actions** tab
2. Select failed workflow run
3. Click **Re-run failed jobs** or **Re-run all jobs**

## Deployment Integration

After all checks pass, you can add deployment steps:

```yaml
deploy:
  name: Deploy
  runs-on: ubuntu-latest
  needs: [quality, build, e2e-tests]
  if: github.ref == 'refs/heads/main'

  steps:
    - name: Deploy to production
      run: |
        # Deploy commands here
```

## Next Steps

1. **Review** this documentation
2. **Set up** branch protection rules (see BRANCH_PROTECTION.md)
3. **Test** by creating a PR
4. **Monitor** the Actions tab
5. **Iterate** as needed

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Cypress CI/CD](https://docs.cypress.io/guides/continuous-integration/ci-provider-examples)
- [ESLint Configuration](https://eslint.org/docs/user-guide/configuring/)
