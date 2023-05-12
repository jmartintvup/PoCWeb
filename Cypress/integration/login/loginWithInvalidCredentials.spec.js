/// <reference types="Cypress" />
import loginPage from "../../support/pageObjects/loginPage";

const login = new loginPage

describe ("Login with invalid credentials", function(){

    this.beforeEach(function(){
        
        //for the moment, before creating a new config file, we'll make do with changing the fixture to change between stage and prod.
        cy.fixture("dataStage").then(function(data){
            this.data=data
        }) 
    })

    beforeEach(function(){
        cy.visit(this.data.URLLogin);
        
        //Aceptamos sibbo (cypress no lo gestiona auto)
        login.getSibboAcceptAll().click()
    });

    it ("login with invalid credentials", function(){
        
        //Declaramos la llamada que vamos a interceptar (login)
        cy.intercept({
            method: 'POST',
            url: this.data.llamadaLogin,
        }).as("llamadaLogin")
     

        //introducimos user incorrecto, contraseña correcta
        login.getUserNameBox().type(this.data.invalidUser)
        login.getPassBox().type(this.data.contraseñaCorrecta)

        //Click en iniciar sesión y comprobamos que sale mensaje de error
        login.getIniciarSesión().click()
        
        cy.url().should('eq', this.data.URLLogin)

        //limpiamos cuadros de texto
        login.getUserNameBox().clear()
        login.getPassBox().should('be.visible').clear()

        //introducimos user correcto pass incorrecta
        login.getUserNameBox().type(this.data.premium)
        login.getPassBox().type(this.data.contraseñaIncorrecta)

        //Esperamos a que el mensaje de error desaparezca
        

    
        login.getIniciarSesión().click()

        //Comprobamos que la llamada de la api da un 401 (no permitido)
        cy.wait('@llamadaLogin').then(({response}) => {
            expect(response.statusCode).to.eq(401)
          })

        //comprobamos que no iniciamos sesión y que sale mensaje de error
        
        cy.url().should('eq', this.data.URLLogin)


    })



})