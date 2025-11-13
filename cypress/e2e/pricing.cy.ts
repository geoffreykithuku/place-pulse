describe('Pricing Page', () => {
  beforeEach(() => {
    cy.visit('/pricing')
  })

  it('should load the pricing page successfully', () => {
    cy.url().should('include', '/pricing')
    cy.contains('Pricing').should('be.visible')
    cy.contains('Transparent, fair pricing').should('be.visible')
  })

  it('should display pricing for renters', () => {
    cy.contains('For Renters').should('be.visible')
    cy.contains('Viewing fees based on rent price').should('be.visible')
    cy.contains('Houses under KSh 15,000: KSh 200 per viewing').should('be.visible')
    cy.contains('Houses KSh 15,001-30,000: KSh 350 per viewing').should('be.visible')
    cy.contains('Houses above KSh 30,000: KSh 500 per viewing').should('be.visible')
  })

  it('should display money-back guarantee for renters', () => {
    cy.contains('Money-back guarantee if the house isn\'t as described').should('be.visible')
  })

  it('should display pricing for hunters', () => {
    cy.contains('For Hunters').should('be.visible')
    cy.contains('Earn money for each viewing').should('be.visible')
    cy.contains('Keep 80% of all viewing fees').should('be.visible')
    cy.contains('Bonus payments for successful placements').should('be.visible')
    cy.contains('Weekly payments to M-Pesa').should('be.visible')
  })

  it('should show value proposition section', () => {
    cy.contains('Value Proposition').should('be.visible')
    cy.contains('Paying a small viewing fee ensures serious viewers').should('be.visible')
    cy.contains('reduces time-wasters').should('be.visible')
    cy.contains('guarantees verified listings').should('be.visible')
  })

  it('should have browse houses button for renters', () => {
    cy.contains('Browse Houses').should('be.visible').and('have.attr', 'href', '/browse')
  })

  it('should have apply to be hunter button for hunters', () => {
    cy.contains('Apply to be a Hunter').should('be.visible').and('have.attr', 'href', '/for-hunters')
  })

  it('should navigate to browse page when clicking browse houses', () => {
    cy.contains('Browse Houses').click()
    cy.url().should('include', '/browse')
  })

  it('should navigate to for hunters page when clicking apply button', () => {
    cy.contains('Apply to be a Hunter').click()
    cy.url().should('include', '/for-hunters')
  })

  it('should display pricing cards with proper styling', () => {
    cy.get('.bg-white').should('have.length', 2) // Two pricing cards
    cy.get('.bg-neutral-50').should('have.length', 1) // Value proposition section
  })

  it('should be responsive on different screen sizes', () => {
    // Test mobile view
    cy.viewport('iphone-6')
    cy.contains('For Renters').should('be.visible')
    cy.contains('For Hunters').should('be.visible')

    // Test tablet view
    cy.viewport('ipad-2')
    cy.contains('For Renters').should('be.visible')
    cy.contains('For Hunters').should('be.visible')

    // Test desktop view
    cy.viewport(1280, 720)
    cy.contains('For Renters').should('be.visible')
    cy.contains('For Hunters').should('be.visible')
  })
})