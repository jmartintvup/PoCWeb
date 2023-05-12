class loginPage{

    getUserNameBox(){
        return cy.get('[data-cy="username"]')
    }

    getPassBox(){
        return cy.get('[data-cy="password"]')
    }

    getIniciarSesión(){
        
        return cy.get('[data-cy="iniciarsesión"]')
    }

    getSibboAcceptAll(){
        return cy.get('#acceptAllMain')
    }

    getMensajeErrorLogin(){
        return cy.contains('Credenciales no válidas')
    }

    getRecuperarContraseña(){
        return cy.get('[data-cy="recordarcontraseña"]')
    }

    getRecordarCredenciales(){
        return cy.get('[data-cy="recordarcredenciales"]')
    }


    getBotonRegistrar(){
        return cy.get('[data-cy="registro"]')
    }

    getBotonContinuarSinRegistrar(){
        return cy.get('[data-cy="inicioanónimo"]')
    }


    //estos son de la página de recordar, pero como solo tiene estas funcionalidades lo añadimos en inicio

    getMensajeMailEnviado(){
        return cy.contains("Petición Procesada. Compruebe su cuenta de correo electrónico.")
    }

    getMailBox(){
        return cy.get("[data-cy='email']")
    }

    getAceptar(){
        return cy.get('[data-cy="aceptar"]')
    }
    



}
export default loginPage
