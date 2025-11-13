describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should load the homepage successfully', () => {
    cy.url().should('eq', Cypress.config('baseUrl') + '/')
    cy.get('h1').should('contain', 'Find Your Perfect Home')
  })

  it('should display hero section with main headline and CTAs', () => {
    // Hero section
    cy.contains('Find Your Perfect Home in Kenya, Faster').should('be.visible')
    cy.contains('Browse Available Houses').should('be.visible')
    cy.contains('Become a House Hunter').should('be.visible')
  })

  it('should show trust and numbers section', () => {
    cy.contains('Trusted by 15,000+ Kenyans').should('be.visible')
    cy.contains('5,000+ verified house hunters').should('be.visible')
    cy.contains('25,000+ houses listed monthly').should('be.visible')
    cy.contains('98% customer satisfaction rate').should('be.visible')
  })

  it('should display how it works section with 3 steps', () => {
    cy.contains('How It Works').should('be.visible')
    cy.contains('Browse & Filter').should('be.visible')
    cy.contains('Book a Viewing').should('be.visible')
    cy.contains('Move In').should('be.visible')
  })

  it('should show why choose us section', () => {
    cy.contains('Stop Wasting Time on Facebook & TikTok').should('be.visible')
    cy.contains('Verified Listings').should('be.visible')
    cy.contains('Up-to-Date').should('be.visible')
    cy.contains('Safe Payments').should('be.visible')
  })

  it('should display featured areas', () => {
    cy.contains('Popular Areas').should('be.visible')
    cy.contains('Nairobi').should('be.visible')
    cy.contains('Mombasa').should('be.visible')
    cy.contains('Kisumu').should('be.visible')
  })

  it('should show testimonials section', () => {
    cy.contains('What Our Users Say').should('be.visible')
    // Assuming there are testimonials, check for at least one
    cy.get('[data-test="testimonial"]').should('have.length.at.least', 1)
  })

  it('should have working navigation links', () => {
    // Check header navigation
    cy.get('nav').within(() => {
      cy.contains('Browse Houses').should('have.attr', 'href', '/browse')
      cy.contains('For Hunters').should('have.attr', 'href', '/for-hunters')
      cy.contains('How It Works').should('have.attr', 'href', '/how-it-works')
      cy.contains('Pricing').should('have.attr', 'href', '/pricing')
      cy.contains('About').should('have.attr', 'href', '/about')
      cy.contains('Contact').should('have.attr', 'href', '/contact')
    })
  })

  it('should navigate to browse page when clicking browse CTA', () => {
    cy.get('[data-test="hero-browse-cta"]').click()
    cy.url().should('include', '/browse')
  })

  it('should navigate to for hunters page when clicking become hunter CTA', () => {
    cy.get('[data-test="hero-hunter-cta"]').click()
    cy.url().should('include', '/for-hunters')
  })

  it('should have CTA section at bottom', () => {
    cy.contains('Ready to Find Your Next Home?').should('be.visible')
    cy.contains('Start Your Search Today').should('be.visible')
  })

  it('should display security badges and trust elements', () => {
    // Check for trust badges - these might be icons or text
    cy.contains('Verified').should('be.visible')
    cy.contains('Secure').should('be.visible')
  })
})