/// <reference types="Cypress" />
import loginPage from "../../support/pageObjects/loginPage";

const login = new loginPage

describe ("Auto-redirect to /home", function(){

    this.beforeEach(function(){
        
        //for the moment, before creating a new config file, we'll make do with changing the fixture to change between stage and prod.
        cy.fixture("dataStage").then(function(data){
            this.data=data
        }) 
    })

 

    it("Acceder directamente a tivify.tv (o newstage.tivify.tv) nos redirecciona a /inicio", function(){


        //accedemos a (...)tivify.tv/
        cy.visit(this.data.URLBase)

        login.getSibboAcceptAll().click()

        //comprobamos que la URL coincide con /inicio
        cy.url().should('eq', this.data.URLInicio )
       



    })


})