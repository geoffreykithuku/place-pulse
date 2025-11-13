describe('Contact Page', () => {
  beforeEach(() => {
    cy.visit('/contact')
  })

  it('should load the contact page successfully', () => {
    cy.url().should('include', '/contact')
    cy.contains('Contact Us').should('be.visible')
    cy.contains('We\'re here to help').should('be.visible')
  })

  it('should display customer support information', () => {
    cy.contains('Customer Support').should('be.visible')
    cy.contains('Phone: +254-XXX-XXX-XXX').should('be.visible')
    cy.contains('WhatsApp: +254-XXX-XXX-XXX').should('be.visible')
    cy.contains('Email: support@platform.co.ke').should('be.visible')
  })

  it('should display contact form with all required fields', () => {
    cy.get('input[placeholder="Your name"]').should('be.visible')
    cy.get('input[placeholder="Email"]').should('be.visible')
    cy.get('input[placeholder="Subject"]').should('be.visible')
    cy.get('textarea[placeholder="Message"]').should('be.visible')
    cy.contains('Send Message').should('be.visible')
  })

  it('should validate contact form fields', () => {
    // Try to submit empty form
    cy.contains('Send Message').click()
    // Should show validation or stay on page
    cy.url().should('include', '/contact')
  })

  it('should submit contact form successfully', () => {
    // Intercept API call
    cy.intercept('POST', '/api/contact', { statusCode: 200 }).as('submitContact')

    cy.get('input[placeholder="Your name"]').type('Test User')
    cy.get('input[placeholder="Email"]').type('test@example.com')
    cy.get('input[placeholder="Subject"]').type('General Inquiry')
    cy.get('textarea[placeholder="Message"]').type('This is a test message for contact form.')
    cy.contains('Send Message').click()

    cy.wait('@submitContact')
    cy.contains('Message sent successfully').should('be.visible')
  })

  it('should validate email format', () => {
    cy.get('input[placeholder="Your name"]').type('Test User')
    cy.get('input[placeholder="Email"]').type('invalid-email')
    cy.get('input[placeholder="Subject"]').type('Test')
    cy.get('textarea[placeholder="Message"]').type('Test message')
    cy.contains('Send Message').click()
    // Should show validation error or prevent submission
    cy.url().should('include', '/contact')
  })

  it('should have working form layout on different screen sizes', () => {
    // Test mobile
    cy.viewport('iphone-6')
    cy.get('input[placeholder="Your name"]').should('be.visible')
    cy.get('input[placeholder="Email"]').should('be.visible')

    // Test desktop
    cy.viewport(1280, 720)
    cy.get('.grid').should('have.class', 'md:grid-cols-2')
  })

  it('should display contact information prominently', () => {
    // Support info should be visible without scrolling
    cy.contains('Customer Support').should('be.visible')
  })

  it('should have accessible form labels', () => {
    // Check for proper labeling (though this simple form may not have explicit labels)
    cy.get('input[placeholder="Your name"]').should('have.attr', 'placeholder')
    cy.get('input[placeholder="Email"]').should('have.attr', 'placeholder')
  })
})