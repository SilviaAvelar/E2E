describe('CSSLocators', () => {

    beforeEach( () => {
        // Visitar a página
        cy.visit('https://www.saucedemo.com/v1/index.html')
        // Preencher o campo Username
        cy.get('input#user-name').type('standard_user')
        // Preencher o campo Password
        cy.get("[placeholder='Password']").type('secret_sauce')
        // Clicar no botão submit
        cy.get('.btn_action').click()
    })

    it('CSS Locators', () => {
        // Verificar se estou na página correta
        cy.get('.product_label').contains('Products')
    })

    it('XPart', () => {

        // Visitar a página
        cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').click()
        cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').contains('REMOVE')
        
       
    })

})