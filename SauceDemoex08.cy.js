describe('Funcionalidade Login', () => {
    
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
    });
    
    it('Login com credenciais válido', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.header_secondary_container').should('be.visible')
    })

    it('Login com username inválido', () => {
        cy.get('#user-name').type('vascodagama')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        // Assertion - Verificar se estou na página correta
        cy.xpath('//*[@id="login_button_container"]/div/form/h3').should('be.visible')
        .and('contain', 'Username and password do not match any user in this service')
    })

    it('Login com password inválido', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('arrozdepato')
        cy.get('#login-button').click()
        // Assertion - Verificar se estou na página correta
        cy.xpath('//*[@id="login_button_container"]/div/form/h3').should('be.visible')
        .and('contain', 'Username and password do not match any user in this service')
    })

    it('Login com username vazio', () => {
        // Deixar campo user name vazio
        // Verificar se o campo username está vazio
        cy.get('#user-name').should('have.value','')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        // Assertion - Verificar se estou na página correta
        cy.get("h3[data-test='error']").should('be.visible')
        .and('contain', 'Username is required')
    })

    it('Login com password vazio', () => {
        cy.get('#user-name').type('standard_user')
        // Deixar campo user name vazio
        // Verificar se o campo username está vazio
        cy.get('#password').should('have.value','')
        cy.get('#login-button').click()
        // Assertion - Verificar se estou na página correta
        cy.get('h3[data-test="error"]').should('be.visible')
        .and('contain', 'Password is required')
    })
})

describe('Funcionalidade carrinho', () => {

    beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.header_secondary_container').should('be.visible')
});    

    it('Adicionar ao carrinho', () => {
        //Clicar no botão "AddToCar"
        cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').click()     
        // Verificar se o texto tornou-se remove
        cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').should('have.text', 'REMOVE')
        // Assertion
        cy.get('.fa-layers-counter.shopping_cart_badge').should('be.visible')
        .and('have.text', '1')
    })

    it('Remover do carrinho', () => {
        //Clicar no botão "ADD TO CART"
        cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').click()   
        // Assertion - Verificar se o texto tornou-se REMOVE
        cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').should('have.text', 'REMOVE')
        //Clicar no botão "Remove"
        cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').click()   
        // Assertion - Verificar se o texto tornou-se ADD TO CART
        cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').should('have.text', 'ADD TO CART')
        // Assertion
        cy.get('.fa-layers-counter.shopping_cart_badge').should('not.exist')
    })
    
describe('Checkout', () => {
    it.only('Remover do carrinho', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.header_secondary_container').should('be.visible')
    //Clicar no botão "AddToCar"
    cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').click()
    //Clicar no botão do carrinho para aceder ao checkout
    cy.get('#shopping_cart_container').click()
    //Clicar no botão checkout
    cy.xpath('//*[@id="cart_contents_container"]/div/div[2]/a[2]').click()

    //Preencher FirstName
    cy.get('#first-name').type('Silvia')
    //Preencher LastName
    cy.get('#last-name').type('Pereira')
    //Preencher ZipCode
    cy.get('#postal-code').type('4900-710')
    //Clicar no botão 
    cy.xpath('//*[@id="checkout_info_container"]/div/form/div[2]/input').click()
    //Clicar no botão finish
    cy.xpath('//*[@id="checkout_summary_container"]/div/div[2]/div[8]/a[2]').click()
    //Assertion thank you for order
    cy.xpath('//*[@id="checkout_complete_container"]/h2').should('have.text','THANK YOU FOR YOUR ORDER')
})  

})
})
