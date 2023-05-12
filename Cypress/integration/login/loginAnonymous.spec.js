/// <reference types="Cypress" />
import loginPage from "../../support/pageObjects/loginPage";

const login = new loginPage

describe ("Login Anonymous", function(){

    this.beforeEach(function(){
        
        //for the moment, before creating a new config file, we'll make do with changing the fixture to change between stage and prod.
        cy.fixture("dataStage").then(function(data){
            this.data=data
        }) 
    })

    beforeEach(function(){
        cy.visit(this.data.URLLogin);
    });

    it("Login anónimo", function(){

        //accedemos a la página web
        cy.visit(this.data.URLLogin)

        //Aceptamos sibbo (cypress no lo gestiona auto)

        login.getSibboAcceptAll().click()

        //Click en el botón de continuar como anónimo

        login.getBotonContinuarSinRegistrar().click()

        //comprobamos que ha cambiado la URL a /inicio

        //¿¿?? Hay alguna llamada específica del anónimo para comprobar? El token se manda al entrar, así que no valdría.
        //Lo podríamos coger con el botón de iniciar sesión que sustituye al icono del avatar?
        cy.url().should('eq', this.data.URLInicio)



    })

})