var conf = require('../../nightwatch.conf.BASIC');

describe('Todo App Test', function () {
    it('successfully load', function () {
        cy.visit('/');
        cy.get('input').type('task1');
        cy.contains('Add').click();

        cy.get('input').type('task2');
        cy.contains('Add').click();

        cy.get('input').type('task3');
        cy.contains('Add').click();

        cy.pause(1000);

        cy.get('.delete-btn').first().click();

        cy.contains('Edit').first().click();
        cy.get('#app > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > form > input').clear()
            .type("alter 1");

        cy.pause(1000);

        cy.get('button').contains('Save').click();

        cy.contains('alter 1').click();

    })
});

