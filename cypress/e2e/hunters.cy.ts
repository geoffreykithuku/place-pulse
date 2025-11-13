describe('Hunters Pages', () => {
  describe('For Hunters Page', () => {
    beforeEach(() => {
      cy.visit('/for-hunters')
    })

    it('should load the for hunters page successfully', () => {
      cy.url().should('include', '/for-hunters')
      cy.contains('Turn Your Local Knowledge Into Income').should('be.visible')
    })

    it('should display earning potential information', () => {
      cy.contains('Earning Potential').should('be.visible')
      cy.contains('Per Viewing: KSh 500-1,500').should('be.visible')
      cy.contains('Top Hunters: Earn KSh 15,000+ monthly').should('be.visible')
    })

    it('should show requirements for becoming a hunter', () => {
      cy.contains('Requirements').should('be.visible')
      cy.contains('Live in or know a specific area very well').should('be.visible')
      cy.contains('Own a smartphone with camera').should('be.visible')
      cy.contains('Pass our verification process').should('be.visible')
    })

    it('should display how it works for hunters', () => {
      cy.contains('How It Works for Hunters').should('be.visible')
      cy.contains('Get Verified').should('be.visible')
      cy.contains('List Houses').should('be.visible')
      cy.contains('Receive Bookings').should('be.visible')
      cy.contains('Conduct Tours').should('be.visible')
      cy.contains('Get Paid').should('be.visible')
    })

    it('should navigate to hunter signup when clicking apply button', () => {
      cy.contains('Apply to Become a Hunter').click()
      cy.url().should('include', '/hunter-signup')
    })
  })

  describe('Hunter Signup Page', () => {
    beforeEach(() => {
      cy.visit('/hunter-signup')
    })

    it('should load the hunter signup page successfully', () => {
      cy.url().should('include', '/hunter-signup')
      cy.contains('Become a House Hunter').should('be.visible')
    })

    it('should display benefits of becoming a hunter', () => {
      cy.contains('Earn KSh 2,000-15,000').should('be.visible')
      cy.contains('Work in Your Area').should('be.visible')
      cy.contains('Verified Platform').should('be.visible')
      cy.contains('Build Your Reputation').should('be.visible')
    })

    it('should show why choose spot a crib section', () => {
      cy.contains('Why Choose Spot A Crib?').should('be.visible')
      cy.contains('Over 10,000 successful matches made').should('be.visible')
      cy.contains('Flexible working hours').should('be.visible')
    })

    it('should toggle between sign up and sign in forms', () => {
      // Default should be sign up
      cy.contains('Sign Up').should('have.class', 'bg-white')
      cy.get('input[name="fullName"]').should('be.visible')

      // Switch to sign in
      cy.contains('Sign In').click()
      cy.contains('Sign In').should('have.class', 'bg-white')
      cy.get('input[name="fullName"]').should('not.exist')
      cy.get('input[name="email"]').should('be.visible')

      // Switch back to sign up
      cy.contains('Sign Up').click()
      cy.get('input[name="fullName"]').should('be.visible')
    })

    it('should validate signup form fields', () => {
      // Try to submit empty form
      cy.get('button[type="submit"]').click()
      // HTML5 validation should prevent submission
      cy.url().should('include', '/hunter-signup')
    })

    it('should fill and submit signup form successfully', () => {
      // Intercept API call
      cy.intercept('POST', '/api/hunters/signup', { statusCode: 201 }).as('signup')

      cy.get('input[name="fullName"]').type('John Kamau')
      cy.get('input[name="email"]').type('john.kamau@example.com')
      cy.get('input[name="phone"]').type('+254712345678')
      cy.get('select[name="location"]').select('westlands')
      cy.get('select[name="experience"]').select('some')
      cy.get('input[name="password"]').type('SecurePass123!')
      cy.get('input[name="confirmPassword"]').type('SecurePass123!')
      cy.get('input[name="agreeToTerms"]').check()

      cy.get('button[type="submit"]').click()

      cy.wait('@signup')
      cy.contains('Account created successfully').should('be.visible')
    })

    it('should show password visibility toggle', () => {
      cy.get('input[name="password"]').should('have.attr', 'type', 'password')
      cy.get('button').contains('Eye').click() // Password toggle button
      cy.get('input[name="password"]').should('have.attr', 'type', 'text')
    })

    it('should validate password confirmation', () => {
      cy.get('input[name="password"]').type('password123')
      cy.get('input[name="confirmPassword"]').type('differentpassword')
      // Should show validation error or prevent submission
      cy.get('button[type="submit"]').click()
      cy.url().should('include', '/hunter-signup') // Should not navigate
    })

    it('should require terms agreement', () => {
      cy.get('input[name="fullName"]').type('Test User')
      cy.get('input[name="email"]').type('test@example.com')
      cy.get('input[name="phone"]').type('+254700000000')
      cy.get('select[name="location"]').select('nairobi-cbd')
      cy.get('input[name="password"]').type('password123')
      cy.get('input[name="confirmPassword"]').type('password123')
      // Don't check terms
      cy.get('button[type="submit"]').click()
      cy.url().should('include', '/hunter-signup')
    })

    it('should sign in existing hunter successfully', () => {
      cy.intercept('POST', '/api/auth/login', { statusCode: 200, body: { token: 'fake-token' } }).as('login')

      cy.contains('Sign In').click()
      cy.get('input[name="email"]').type('hunter@example.com')
      cy.get('input[name="password"]').type('password123')
      cy.get('button[type="submit"]').click()

      cy.wait('@login')
      cy.url().should('not.include', '/hunter-signup')
    })

    it('should show forgot password link', () => {
      cy.contains('Sign In').click()
      cy.contains('Forgot your password?').should('be.visible')
    })

    it('should have working navigation links', () => {
      cy.contains('Terms of Service').should('have.attr', 'href')
      cy.contains('Privacy Policy').should('have.attr', 'href')
    })
  })

  describe('Hunter Dashboard (Placeholder)', () => {
    // Since dashboard is not implemented, these are placeholder tests
    it('should redirect to login if not authenticated', () => {
      cy.visit('/dashboard/hunter', { failOnStatusCode: false })
      cy.url().should('include', '/login')
    })

    it('should allow authenticated hunter to add new listing', () => {
      // This would require authentication setup
      cy.loginAsHunter('hunter@example.com', 'password123')
      cy.visit('/dashboard/hunter')
      cy.contains('Add New Listing').should('be.visible')
    })
  })
})