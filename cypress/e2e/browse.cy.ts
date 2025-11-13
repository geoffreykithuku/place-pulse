describe('Browse Houses Page', () => {
  beforeEach(() => {
    cy.visit('/browse')
  })

  it('should load the browse page successfully', () => {
    cy.url().should('include', '/browse')
    cy.contains('Browse Houses').should('be.visible')
    cy.contains('Find verified listings across Kenya').should('be.visible')
  })

  it('should display search bar and filters', () => {
    cy.get('input[placeholder*="Search by area"]').should('be.visible')
    cy.get('select').contains('All Areas').should('be.visible')
    cy.contains('Filters').should('be.visible')
  })

  it('should show property listings', () => {
    cy.get('[data-test="property-card"]').should('have.length.at.least', 1)
    // Check that each card has essential information
    cy.get('[data-test="property-card"]').first().within(() => {
      cy.get('[data-test="property-title"]').should('be.visible')
      cy.get('[data-test="property-price"]').should('be.visible')
      cy.get('[data-test="property-location"]').should('be.visible')
    })
  })

  it('should allow text search', () => {
    cy.get('input[placeholder*="Search by area"]').type('Nairobi')
    cy.get('[data-test="property-card"]').should('have.length.at.least', 1)
    // Assuming mock data has Nairobi properties
    cy.contains('Nairobi').should('be.visible')
  })

  it('should filter by area', () => {
    cy.get('select').first().select('Nairobi')
    cy.get('[data-test="property-card"]').each(($card) => {
      cy.wrap($card).contains('Nairobi')
    })
  })

  it('should show advanced filters when filters button is clicked', () => {
    cy.contains('Filters').click()
    cy.get('input[placeholder*="Min Price"]').should('be.visible')
    cy.get('input[placeholder*="Max Price"]').should('be.visible')
    cy.get('select').contains('All Types').should('be.visible')
  })

  it('should filter by price range', () => {
    cy.contains('Filters').click()
    cy.get('input[placeholder*="Min Price"]').type('10000')
    cy.get('input[placeholder*="Max Price"]').type('30000')
    // Properties should be within range
    cy.get('[data-test="property-card"]').each(($card) => {
      cy.wrap($card).find('[data-test="property-price"]').invoke('text').then((priceText) => {
        const price = parseInt(priceText.replace(/[^\d]/g, ''))
        expect(price).to.be.within(10000, 30000)
      })
    })
  })

  it('should filter by property type', () => {
    cy.contains('Filters').click()
    cy.get('select').contains('All Types').select('Apartment')
    cy.get('[data-test="property-card"]').each(($card) => {
      cy.wrap($card).contains('Apartment')
    })
  })

  it('should sort properties', () => {
    cy.contains('Filters').click()
    cy.get('select').contains('Most Recent').select('Price: Low to High')
    // Check that prices are in ascending order
    let previousPrice = 0
    cy.get('[data-test="property-price"]').each(($price) => {
      cy.wrap($price).invoke('text').then((priceText) => {
        const currentPrice = parseInt(priceText.replace(/[^\d]/g, ''))
        expect(currentPrice).to.be.at.least(previousPrice)
        previousPrice = currentPrice
      })
    })
  })

  it('should reset filters', () => {
    cy.contains('Filters').click()
    cy.get('input[placeholder*="Min Price"]').type('50000')
    cy.contains('Reset Filters').click()
    cy.get('input[placeholder*="Min Price"]').should('have.value', '')
  })

  it('should open property details when clicking view property', () => {
    cy.get('[data-test="property-card"]').first().find('[data-test="view-property"]').click()
    cy.url().should('include', '/property/')
    cy.get('[data-test="property-title"]').should('be.visible')
  })

  it('should open booking modal when clicking book viewing', () => {
    cy.get('[data-test="property-card"]').first().find('[data-test="book-viewing"]').click()
    cy.get('[data-test="booking-modal"]').should('be.visible')
    cy.contains('Book Viewing').should('be.visible')
  })

  it('should complete booking flow', () => {
    // Booking flow currently triggers a window.alert on success. Stub alert and assert it was called.
    cy.get('[data-test="property-card"]').first().find('[data-test="book-viewing"]').click()
    cy.get('[data-test="booking-modal"]').should('be.visible')

    // Stub window.alert
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alert')
    })

    // Pick first available date/time and fill contact details
    cy.get('[data-test="booking-modal"]').within(() => {
      cy.get('[data-test="booking-date"]').first().click()
      cy.get('[data-test="booking-time"]').first().click()
      cy.get('[data-test="booking-name"]').type('Test User')
      cy.get('[data-test="booking-phone"]').type('+254712345678')
      cy.get('[data-test="booking-email"]').type('test@example.com')
      // Continue to step 2 if required
      cy.contains('Continue').click()
      cy.get('[data-test="confirm-booking"]').click()
    })

    cy.get('@alert').should('have.been.called')
  })

  it('should open share modal', () => {
    cy.get('[data-test="property-card"]').first().find('[data-test="share-property"]').click()
    cy.get('[data-test="share-modal"]').should('be.visible')
    cy.contains('Share this property').should('be.visible')
  })

  it('should show no results message when no properties match', () => {
    cy.get('input[placeholder*="Search by area"]').type('NonExistentArea12345')
    cy.contains('No properties found').should('be.visible')
    cy.contains('Clear All Filters').should('be.visible')
  })

  it('should display property count', () => {
    cy.contains('properties found').should('be.visible')
  })

  it('should show verification badges on listings', () => {
    cy.get('[data-test="property-card"]').first().find('[data-test="verified-badge"]').should('be.visible')
  })
})