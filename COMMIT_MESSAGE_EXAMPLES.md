# Commit Message Examples

Quick reference for writing good commit messages following Conventional Commits.

## Format Reference

```
type(scope): subject

optional body

optional footer
```

## Examples by Type

### Features (feat)

```
feat(auth): add email verification flow

Implement email verification functionality including:
- Verification email generation
- Token-based verification links
- Resend verification email option
- Account lockout after failed attempts

Fixes #234
```

```
feat(property-search): add advanced filtering

Add support for filtering properties by:
- Multiple amenities
- Custom price ranges
- Availability dates
- Property features

Closes #567
```

### Bug Fixes (fix)

```
fix(ui): correct button alignment in footer

The primary button in the footer was misaligned on mobile
devices. Updated flex container to properly center content.

Fixes #123
```

```
fix(auth): prevent double submission on login

Add loading state to prevent multiple login attempts while
request is in progress.

Fixes #456
```

### Documentation (docs)

```
docs: add API documentation for property endpoints

Document all REST endpoints for property CRUD operations
including request/response examples and error codes.
```

```
docs(readme): update installation instructions

Update setup section to include new environment variable
requirements and git hook installation.
```

### Refactoring (refactor)

```
refactor(components): extract PropertyCard into smaller components

Break down PropertyCard into:
- PropertyImage component
- PropertyDetails component
- PropertyActions component

No behavior changes, improves reusability.
```

```
refactor(hooks): consolidate search logic

Consolidate search and filter logic from multiple hooks
into a single usePropertySearch hook.
```

### Styling (style)

```
style: format code with prettier
```

```
style(components): update tailwind classes spacing

Standardize spacing using consistent gap values across
all components for better visual consistency.
```

### Performance (perf)

```
perf(property-list): implement pagination

Add server-side pagination to reduce initial load time.
Performance improved from 3s to 500ms on slow connections.
```

```
perf(images): add lazy loading for property images

Lazy load property images below the fold to improve
initial page load time by 40%.
```

### Tests (test)

```
test(auth): add tests for login flow

Add comprehensive unit tests covering:
- Valid credentials
- Invalid credentials
- Network errors
- Loading states
```

```
test: increase code coverage to 80%

Add missing tests for PropertyCard and SearchFilter components.
```

### Build/Dependencies (chore)

```
chore(deps): upgrade Next.js to 14.2.0

Update Next.js to latest version with performance improvements
and bug fixes.
```

```
chore: add TypeScript strict mode

Enable strict type checking in tsconfig.json for better
type safety.
```

### CI/CD (ci)

```
ci: add GitHub Actions workflow for tests

Add automated testing workflow that runs on all PRs.
Tests on Node 18, 20, and 22.
```

```
ci: configure Cypress for headless testing
```

### Reverts (revert)

```
revert: undo property filter changes

This reverts commit abc123.

The filter implementation was causing performance issues.
Will revisit after optimizations.

Fixes #789
```

## Multi-line Examples

### Good long commit

```
feat(dashboard): add property analytics dashboard

Add a new dashboard page showing:
- Property view statistics
- Inquiry trends over time
- Scout performance metrics
- Revenue analytics

The dashboard uses Chart.js for visualizations and
caches data for 1 hour to improve performance.

New environment variables:
- ANALYTICS_API_KEY
- CACHE_TTL (default: 3600)

Closes #345, #346
```

### Good detailed fix

```
fix(search): resolve pagination reset on filter change

When changing filters, pagination state was not resetting
to page 1, causing confusing results.

Changes:
- Reset page to 1 when filters change
- Clear search query when pagination resets
- Add tests for filter state management

Previously breaking:
- Filter by area → pagination on page 3
- Change price filter → showed empty page 3 results

Fixes #567
```

## Common Mistakes ❌

### Type missing

```
❌ add new component
✅ feat(ui): add new component
```

### Type not lowercase

```
❌ FEAT: add new component
✅ feat: add new component
```

### Scope not specified (when helpful)

```
❌ feat: add new component
✅ feat(ui): add PropertyCard component
```

### Subject has period

```
❌ feat: add new component.
✅ feat: add new component
```

### Subject not imperative

```
❌ feat: added new component
❌ feat: adds new component
✅ feat: add new component
```

### Subject too long

```
❌ feat: add a new component that displays property information
✅ feat(property-card): display property information
```

### Vague subject

```
❌ fix: bug fixes
❌ chore: updates
✅ fix(auth): handle token refresh on expiration
✅ chore(deps): upgrade React to 18.3.0
```

### No context in body

```
❌ fix(ui): button colors

✅ fix(ui): correct button colors in light mode

The primary button was using dark text on dark background
in light mode, making it unreadable. Updated color values
to provide sufficient contrast.
```

## Scope Examples

Common scopes in this project:

- **UI Components**: `ui`, `components`, `modal`, `button`, `card`
- **Pages**: `pages`, `home`, `browse`, `dashboard`, `property`
- **Authentication**: `auth`, `login`, `signup`, `password`
- **Search/Filter**: `search`, `filter`, `sort`
- **API**: `api`, `endpoints`, `services`
- **Styling**: `styles`, `theme`, `colors`
- **Performance**: `perf`, `optimization`
- **Testing**: `test`, `tests`, `cypress`
- **Build/DevOps**: `build`, `ci`, `docker`, `deps`
- **Documentation**: `docs`, `readme`, `changelog`

Choose the most specific scope that makes sense for your change.

## Tips

1. **Use present tense**: "add feature", not "added feature"
2. **Use imperative mood**: "fix bug", not "fix a bug" or "fixes bug"
3. **First line ≤ 50 characters** (enforced)
4. **Capitalize properly**: "feat: add" not "Feat: Add"
5. **Body for why, not how**: Explain reasoning, not implementation details
6. **Reference issues**: "Fixes #123" auto-closes issue on PR merge
7. **One commit per logical change**: Easier to review and revert if needed
8. **Test before committing**: Your code will be linted automatically

## Useful Commands

```bash
# Amend last commit message
git commit --amend -m "feat: corrected message"

# View commit history
git log --oneline

# View commit details
git show <commit-hash>

# Interactive rebase to edit commits
git rebase -i origin/main
```
