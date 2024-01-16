describe('Assertions', () => {

    it('Assertions Implícitas', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        /*Should, and
        cy.url().should('include', 'orangehrmlive.com')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain', 'orangehrm')*/

        /*cy.url().should('include', 'orangehrmlive.com')
        .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain', 'orangehrm')*/

        //URL
        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrm')
        .and('not.contain', 'bug')

        //Title
        cy.title().should('include', 'Orange')
        .and('eq', 'OrangeHRM')
        .and('contain', 'HRM')

        //Logo
        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')

        //Números de links
        cy.xpath('//a').should('have.length', '5')

        //Verificar se o valor está sendo passado corretamente
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("[placeholder='Username']").should('have.value', 'Admin')
    })

    it('Assertions Explícitas', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("[placeholder='Username']").type('Admin')
        cy.get("[type='password']").type('admin123')
        cy.get("button[type='submit'").click()

        let expName = 'sam Babu';

        cy.get('.oxd-userdropdown-tab').then( (x) => {
            let actName = x.text()

            //BDD - Behavior Driven Development
            expect(actName).to.equal(expName)

            //TDD - Test Driven Development
            assert.equal(actName, expName)
        })

    })
})