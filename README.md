# Spot A Crib - House Hunting Platform

A modern web platform connecting Kenyan renters with verified local house hunters (scouts). Built with React, TypeScript, and Vite.

## Features

- **For Renters**: Browse verified listings, book viewings, and connect with local hunters
- **For Hunters**: Earn money by listing and showing properties in your area
- **Secure Payments**: M-Pesa integration for safe transactions
- **Verification System**: Background-checked hunters and verified listings
- **Real-time Communication**: Direct messaging between renters and hunters

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **SEO**: React Helmet Async

## Getting Started

### Prerequisites

- Node.js 18+ (preferably 20+ for Cypress)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/geoffreykithuku/place-pulse.git
cd place-pulse
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Testing

### Unit Tests

Run Vitest for unit tests:

```bash
npm run test
```

Run tests with UI:

```bash
npm run test:ui
```

### End-to-End Tests

This project uses Cypress for comprehensive E2E testing. The test suite covers all major user journeys including browsing houses, hunter signup, booking viewings, and dashboard interactions.

#### Running Cypress Tests Locally

1. **Install Cypress** (already included in devDependencies):

```bash
npm install
```

2. **Start the development server** in one terminal:

```bash
npm run dev
```

3. **Run Cypress tests** in another terminal:

```bash
npx cypress run
```

Or open Cypress Test Runner:

```bash
npx cypress open
```

#### Test Structure

The Cypress tests are organized into the following suites:

- `home.cy.ts` - Homepage navigation and CTAs
- `browse.cy.ts` - Property search, filtering, and booking
- `hunters.cy.ts` - Hunter signup and application flow
- `pricing.cy.ts` - Pricing page validation
- `contact.cy.ts` - Contact form and support
- `dashboard_renter.cy.ts` - Renter dashboard (placeholder)
- `dashboard_hunter.cy.ts` - Hunter dashboard (placeholder)

#### Custom Commands

The tests use custom Cypress commands defined in `cypress/support/commands.ts`:

- `cy.loginAsRenter(email, password)` - Login as renter
- `cy.loginAsHunter(email, password)` - Login as hunter
- `cy.bookViewing(propertyId)` - Book a property viewing
- `cy.createListing(listingData)` - Create new listing (hunters)
- `cy.fillHunterSignupForm(data)` - Fill hunter signup form
- `cy.fillContactForm(data)` - Fill contact form

#### Fixtures

Sample test data is available in `cypress/fixtures/sample-data.json` including mock listings, hunters, and users.

#### CI/CD Integration

For GitHub Actions or other CI platforms, add this to your workflow:

```yaml
- name: Run E2E tests
  run: |
    npm run dev &
    npx cypress run --record --parallel
  env:
    CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}
```

## Project Structure

```
src/
├── components/
│   ├── home/          # Homepage sections
│   ├── layout/        # Header, footer, layout
│   ├── ui/            # Reusable UI components
│   └── forms/         # Form components
├── pages/             # Page components
├── hooks/             # Custom React hooks
├── lib/               # Utilities and helpers
├── data/              # Mock data and constants
└── assets/            # Static assets

cypress/
├── e2e/               # Test suites
├── fixtures/          # Test data
└── support/           # Custom commands and config
```

## Environment Variables

Create a `.env.local` file for local development:

```env
VITE_API_BASE_URL=http://localhost:3001/api
VITE_MOCK_DATA=true
```

## Contributing

We follow strict code quality and git workflow standards. See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

### Quick Start

1. Fork the repository
2. Install git hooks: `npm run prepare`
3. Create a feature branch: `git checkout -b feature/your-feature`
4. Make changes and commit: `git commit -m "feat(scope): description"`
5. Push to branch: `git push origin feature/your-feature`
6. Submit a pull request

### Code Quality

This project enforces code quality through automated tools:

- **ESLint**: TypeScript/JavaScript linting
- **Prettier**: Code formatting
- **Husky**: Git hooks automation
- **commitlint**: Commit message validation
- **lint-staged**: Run linters on changed files

All commits are automatically linted and formatted. Commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

#### Commit Message Format

```
type(scope): subject

body

footer
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`, `revert`

**Example**:

```
feat(property-search): add advanced filtering

Add support for filtering by amenities and availability dates.

Fixes #234
```

For detailed examples and guidelines, see [COMMIT_MESSAGE_EXAMPLES.md](./COMMIT_MESSAGE_EXAMPLES.md) and [GIT_WORKFLOW.md](./GIT_WORKFLOW.md).

### Common Commands

```bash
npm run dev           # Start dev server
npm run build         # Build for production
npm run lint          # Check linting errors
npm run lint:fix      # Fix linting errors
npm run format        # Format all code
npm run type-check    # Check TypeScript types
npm run prepare       # Install git hooks
```

## License

This project is licensed under the MIT License.

## Contact

For questions or support, reach out to:

- Email: support@spotacrib.co.ke
- Phone: +254 XXX XXX XXX
