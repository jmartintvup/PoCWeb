/// <reference types="Cypress" />
import loginPage from "../../support/pageObjects/loginPage";

const login = new loginPage

describe ("Register Link is working properly", function(){

    this.beforeEach(function(){
        
        //for the moment, before creating a new config file, we'll make do with changing the fixture to change between stage and prod.
        cy.fixture("dataStage").then(function(data){
            this.data=data
        }) 
    })

    beforeEach(function(){
        cy.visit(this.data.URLLogin);
    });

    it("Register link works from Login", function(){
        //accedemos a la página web
        cy.visit(this.data.URLLogin)

        //Aceptamos sibbo (cypress no lo gestiona auto)

        login.getSibboAcceptAll().click()

        //Comprobamos haciendo una request falsa con la propiedad href del botón (link) si se devuelve
        //un status 200 (el link no está roto, nos manda a una web que existe)

        login.getBotonRegistrar().then((link) => {

            cy.request(link.prop('href')).should("have.property", "status", 200)
                
        })
    })

})