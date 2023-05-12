/// <reference types="Cypress" />
import loginPage from "../../support/pageObjects/loginPage";

const login = new loginPage


describe ("Login with valid credentials", function(){

    this.beforeEach(function(){
        
        //for the moment, before creating a new config file, we'll make do with changing the fixture to change between stage and prod.
        cy.fixture("dataStage").then(function(data){
            this.data=data
        }) 
    })

  

    it("login with valid credentials", function(){

        cy.visit(this.data.URLLogin);

        cy.intercept({
            method: 'POST',
            url: this.data.llamadaLogin,
        }).as("llamadaLogin")



        //Aceptamos sibbo (cypress no lo gestiona auto)

        login.getSibboAcceptAll().click()

        //introducimos user correcto, contraseña correcta
        login.getUserNameBox().type(this.data.plus)
        login.getPassBox().type(this.data.contraseñaCorrecta)


        login.getIniciarSesión().click()

        //Comprobamos que se hace una llamada de login por api con
        //codigo 200 (correcto)

        //Declaramos la llamada que queremos interceptar y validamos el response code
        cy.wait('@llamadaLogin').then(({response}) => {
            expect(response.statusCode).to.eq(200)
        })
          

    })


    

})


