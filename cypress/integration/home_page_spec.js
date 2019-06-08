describe('Todo App Test', function() {
  it('successfully loads', function() {
    cy.visit('/');
    cy.get('input').type('任务1');
    cy.contains('Add').click();

    cy.get('input').type('任务2');
    cy.contains('Add').click();

    cy.get('input').type('任务3');
    cy.contains('Add').click();

    cy.pause(1000);


    cy.get('.delete-btn').first().click();

    cy.contains('Edit').first().click();
    cy.get('#app > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > form > input').clear()
        .type("修改任务1");
    cy.get('button').contains('Save').click();

    cy.pause(1000);

    cy.contains('修改任务1').click();

  })
})
