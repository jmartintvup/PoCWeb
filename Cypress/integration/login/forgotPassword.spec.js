/// <reference types="Cypress" />
import loginPage from "../../support/pageObjects/loginPage";

const login = new loginPage

describe ("Forgot my password", function(){

    this.beforeEach(function(){
        
        //for the moment, before creating a new config file, we'll make do with changing the fixture to change between stage and prod.
        cy.fixture("dataStage").then(function(data){
            this.data=data
        }) 
    })

    beforeEach(function(){
        cy.visit(this.data.URLLogin);
    });

    it("Forgot my password is sending email", function(){


        //accedemos a la página web
        cy.visit(this.data.URLLogin)

        //Aceptamos sibbo (cypress no lo gestiona auto)

        login.getSibboAcceptAll().click()

        login.getRecuperarContraseña().click()

        cy.url().should('eq', this.data.URLRecordar )

        login.getMailBox().type(this.data.mailValido)

        cy.intercept({
                    method: 'POST',
                    url: '/user/resetPass/*',
                }).as("llamadaReset")

        login.getAceptar().click()

      
        cy.wait('@llamadaReset').then(({response}) => {
            expect(response.statusCode).to.eq(200)
            expect(response.url).to.eq( this.data.llamadaRecordar + this.data.mailValido)
          })


        login.getMensajeMailEnviado().should("be.visible")

        login.getMailBox().clear()
        
        
    })


})