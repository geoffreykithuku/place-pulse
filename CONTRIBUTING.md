# Contributing Guide

Thank you for considering contributing to Place Pulse! This guide will help you understand our development workflow, code standards, and commit practices.

## Table of Contents

- [Development Setup](#development-setup)
- [Commit Message Convention](#commit-message-convention)
- [Code Quality Standards](#code-quality-standards)
- [Pre-Commit Checks](#pre-commit-checks)
- [Branch Naming](#branch-naming)
- [Pull Request Process](#pull-request-process)
- [Common Commands](#common-commands)

## Development Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd place-pulse
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install git hooks**

   ```bash
   npm run prepare
   ```

4. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Commit Message Convention

We follow the **Conventional Commits** specification for clear, semantic commit messages.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code refactoring without feature changes
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Build process, dependencies, or tooling changes
- **ci**: CI/CD configuration changes
- **revert**: Reverting a previous commit

### Scope (Optional)

The scope specifies what part of the codebase is affected:

- `auth` - Authentication related
- `ui` - UI components
- `api` - API/backend changes
- `pages` - Page components
- `styles` - Styling
- `hooks` - Custom React hooks
- etc.

### Subject

- Use lowercase
- Imperative mood ("add" not "adds" or "added")
- No period at the end
- Maximum 50 characters (enforced by our linter)

### Body (Optional)

- Explain **what** and **why**, not how
- Wrap at 100 characters
- Separate from subject with a blank line

### Footer (Optional)

- Reference issues: `Fixes #123`, `Closes #456`
- Breaking changes: `BREAKING CHANGE: description`

### Examples

```
feat(auth): add password reset functionality

Add a new password reset flow that allows users to reset their
passwords via email. This includes the new ResetPasswordForm
component and backend email service integration.

Fixes #234
```

```
fix(ui): correct button alignment in PropertyCard component

The primary button was not properly aligned in the card footer.
Adjusted flex container alignment properties.

Fixes #123
```

```
docs: update installation instructions in README

Updated the setup section to include the new git hooks requirement.
```

```
chore(deps): upgrade Next.js to 14.1.0
```

## Code Quality Standards

### Linting

Before committing, your code is automatically checked with ESLint:

```bash
npm run lint
npm run lint:fix  # Auto-fix issues
```

### Code Formatting

Code is automatically formatted with Prettier during pre-commit:

```bash
npm run format           # Format all files
npm run format:check    # Check formatting without changing
```

### Type Checking

TypeScript ensures type safety:

```bash
npm run type-check
```

## Pre-Commit Checks

When you attempt to commit, Husky automatically runs:

1. **lint-staged**: Runs ESLint and Prettier on changed files
2. **commitlint**: Validates your commit message format

If checks fail, fix the issues and try committing again.

### Bypass Checks (Not Recommended)

```bash
git commit --no-verify
```

⚠️ Only use this in exceptional circumstances!

## Branch Naming

Use descriptive branch names following this pattern:

```
<type>/<description>
```

### Types

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation
- `refactor/` - Code refactoring
- `chore/` - Maintenance tasks

### Examples

```
feature/property-filtering
fix/modal-close-button
docs/api-documentation
refactor/component-structure
chore/update-dependencies
```

## Pull Request Process

1. **Push your branch**

   ```bash
   git push origin your-branch-name
   ```

2. **Open a Pull Request** with:
   - Clear title describing the changes
   - Description following the template
   - Reference to related issues
   - Screenshots for UI changes

3. **Code Review**
   - Address reviewer feedback
   - Keep commits clean and meaningful
   - Update PR description if scope changes

4. **Merge**
   - Squash commits if requested
   - Use conventional commit format in merge commit
   - Delete the feature branch after merge

## Common Commands

### Development

```bash
npm run dev           # Start dev server
npm run build         # Build for production
npm run start         # Start production server
```

### Code Quality

```bash
npm run lint          # Check for linting errors
npm run lint:fix      # Fix linting errors
npm run format        # Format all code
npm run format:check  # Check formatting
npm run type-check    # Type-check TypeScript
npm run prepare       # Install git hooks
```

### Git Workflow

```bash
# Create and switch to feature branch
git checkout -b feature/feature-name

# Stage and commit changes
git add .
git commit -m "feat(scope): description"

# Push to remote
git push origin feature/feature-name

# View commit history
git log --oneline

# Rebase current branch on main
git rebase main

# Interactive rebase to squash commits
git rebase -i main
```

## Troubleshooting

### Pre-commit hook failing

If your pre-commit hook fails:

1. Check the error message
2. Run `npm run lint:fix` and `npm run format`
3. Review and stage changes
4. Commit again

### Commitlint rejecting commit

Ensure your commit message follows the format:

```
type(scope): subject
```

Common issues:

- Missing type: `type: subject` ❌
- Uppercase subject: `type: Subject` ❌
- Period at end: `type: subject.` ❌
- Long subject: `type: this is a very long subject that exceeds 50 characters` ❌

### Need to amend a commit

```bash
git commit --amend --no-edit        # Keep message
git commit --amend                  # Edit message
git push --force-with-lease origin  # Update remote
```

## Code Style Guide

### Component Files

```tsx
"use client"; // If using client-side features

import { ReactNode } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface Props {
  title: string;
  children: ReactNode;
}

export default function Component({ title, children }: Props) {
  return (
    <div className="container">
      <h1>{title}</h1>
      {children}
    </div>
  );
}
```

### CSS Classes

Use Tailwind CSS with consistent naming:

```tsx
<div className="flex flex-col gap-4 md:flex-row md:gap-6">{/* Content */}</div>
```

### Type Safety

Always define interfaces and types:

```tsx
interface Property {
  id: string;
  name: string;
  price: number;
}

interface PropertyCardProps {
  property: Property;
  onSelect: (id: string) => void;
}
```

## Questions?

If you have questions about the contribution process, open an issue or reach out to the maintainers.

Happy contributing! 🎉
