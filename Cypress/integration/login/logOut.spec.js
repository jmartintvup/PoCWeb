/// <reference types="Cypress" />
import loginPage from "../../support/pageObjects/loginPage";
import homePage from "../../support/pageObjects/homePage";

const login = new loginPage
const home = new homePage

describe ("Log out", function(){

    this.beforeEach(function(){
        
        //for the moment, before creating a new config file, we'll make do with changing the fixture to change between stage and prod.
        cy.fixture("dataStage").then(function(data){
            this.data=data
        }) 
    })

    beforeEach(function(){
        //accedemos a la página web
        cy.visit(this.data.URLLogin)

        //Aceptamos sibbo (cypress no lo gestiona auto)

        login.getSibboAcceptAll().click()

        //introducimos user correcto, contraseña correcta
        login.getUserNameBox().type(this.data.plus)
        login.getPassBox().type(this.data.contraseñaCorrecta)


        login.getIniciarSesión().click()
    });

    it("log out", function(){

        cy.intercept({
            method: 'DELETE',
            url: this.data.llamadaUnpair,
        }).as("llamadaUnpair")

        //Esperamos a que el icono del avatar sea visible,
        //después hacemos click en él
        home.getIconoAvatar().should("be.visible").click()
    
        //Esperamos a que la opción "Cerrar sesión"
        //del menú desplegable sea visible tras el click anterior
        home.getCerrarSesion().should("be.visible").click()
    
        cy.wait('@llamadaUnpair').then(({response}) => {
            expect(response.statusCode).to.eq(200)
          })

    })

})