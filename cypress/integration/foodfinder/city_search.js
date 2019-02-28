describe('Searching by city', function() {
  it('has integration tests setup', function() {
    expect(true).to.equal(true)
  });

  it('has a text input field', function() {
    cy.visit('http://localhost:3000');

    // fails!
    cy.contains('Enter location');
  });
});
