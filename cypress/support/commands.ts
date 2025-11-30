/// <reference types="cypress" />

// Custom commands for Spot A Crib testing

declare global {
  namespace Cypress {
    interface Chainable {
      loginAsRenter(email: string, password: string): Chainable<void>;
      loginAsHunter(email: string, password: string): Chainable<void>;
      bookViewing(propertyId: string): Chainable<void>;
      createListing(listingData: any): Chainable<void>;
      fillHunterSignupForm(data: any): Chainable<void>;
      fillContactForm(data: any): Chainable<void>;
    }
  }
}

// Login as renter
Cypress.Commands.add("loginAsRenter", (email: string, _password: string) => {
  // App currently doesn't have a login page. Stub auth by setting localStorage token
  cy.window().then((win) => {
    win.localStorage.setItem("auth_token", "test-renter-token");
    win.localStorage.setItem("auth_user", JSON.stringify({ email }));
  });
  cy.visit("/");
});

// Login as hunter
Cypress.Commands.add("loginAsHunter", (email: string, _password: string) => {
  // App currently doesn't have a login page. Stub auth by setting localStorage token
  cy.window().then((win) => {
    win.localStorage.setItem("auth_token", "test-hunter-token");
    win.localStorage.setItem("auth_user", JSON.stringify({ email }));
  });
  cy.visit("/");
});

// Book a viewing for a property
Cypress.Commands.add("bookViewing", (propertyId: string) => {
  cy.visit(`/property/${propertyId}`);
  cy.get('[data-test="book-viewing-button"]').click();
  cy.get('[data-test="confirm-booking"]').click();
  cy.contains("Booking confirmed").should("be.visible");
});

// Create a new listing (for hunters)
Cypress.Commands.add("createListing", (listingData: any) => {
  cy.visit("/dashboard/hunter");
  cy.get('[data-test="add-listing-button"]').click();
  cy.get('[data-test="title-input"]').type(listingData.title);
  cy.get('[data-test="location-input"]').type(listingData.location);
  cy.get('[data-test="price-input"]').type(listingData.price);
  cy.get('[data-test="description-input"]').type(listingData.description);
  // Add photos if needed
  cy.get('[data-test="submit-listing"]').click();
  cy.contains("Listing created successfully").should("be.visible");
});

// Fill hunter signup form
Cypress.Commands.add("fillHunterSignupForm", (data: any) => {
  cy.visit("/hunter-signup");
  cy.get('[data-test="name-input"]').type(data.name);
  cy.get('[data-test="email-input"]').type(data.email);
  cy.get('[data-test="phone-input"]').type(data.phone);
  cy.get('[data-test="area-input"]').type(data.area);
  cy.get('[data-test="experience-input"]').type(data.experience);
  cy.get('[data-test="submit-signup"]').click();
});

// Fill contact form
Cypress.Commands.add("fillContactForm", (data: any) => {
  cy.visit("/contact");
  cy.get('[data-test="name-input"]').type(data.name);
  cy.get('[data-test="email-input"]').type(data.email);
  cy.get('[data-test="subject-select"]').select(data.subject);
  cy.get('[data-test="message-input"]').type(data.message);
  cy.get('[data-test="submit-contact"]').click();
  cy.contains("Message sent successfully").should("be.visible");
});

export {};
