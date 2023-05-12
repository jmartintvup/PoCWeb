class homePage{

    getFlechaReproductorDerecha(){
        return cy.get('.player-arrow.right')
    }

    getFlechaReproductorIzquierda(){
        return cy.get('.player-arrow.left')
    }

    getFlechaSliderCanalesDerecha(){
        return cy.get('.slick-arrow.next.channel-logo')
    }

    getFlechaSliderCanalesIzquierda(){
        return cy.get('.slick-arrow.prev.channel-logo')
    }

    getIconoAvatar(){
        return cy.get("img[class='avatar']")
    }

    getCerrarSesion(){
        return cy.contains("Cerrar sesión")
    }


    //DIAL DE CANALES

    getDialDeCanales(){
        return cy.get('#dial')
    }

    getDialDeCanalesArrowDown(){
        return cy.get('img[src="/static/img/player/arrow-down.webp"]')
    }

    getDialDeCanalesArrowUp(){
        return cy.get('img[src="/static/img/player/arrow-up.webp"]')
    }

    getDialDeCanalesArrowBack(){
        return cy.get('img[src="/static/img/player/go-back.png"]')
    }
    

    //SLIDERS SECCIONES


    //Ahora Tv

    getIcono3PuntosAhoraTv(){
        
        return cy.get('a[href="/catalogo/ahora-tv"]')

        
    }

    //Seguir Viendo

    
    getIcono3PuntosSeguirViendo(){
        
        return cy.get('a[href="/catalogo/seguir-viendo"]')

        
    }


    //Estrenos

    getIcono3PuntosEstrenos(){
        return cy.get('a[href="/catalogo/estrenos-(es)"]')
    }





    getIcono3PuntosAhoraTv(){
        
        return cy.get('a[href="/catalogo/ahora-tv"]')

        
    }


    getIcono3PuntosAhoraTv(){
        
        return cy.get('a[href="/catalogo/ahora-tv"]')

        
    }


    getIcono3PuntosAhoraTv(){
        
        return cy.get('a[href="/catalogo/ahora-tv"]')

        
    }



    getIcono3PuntosAhoraTv(){
        
        return cy.get('a[href="/catalogo/ahora-tv"]')

        
    }



    getIcono3PuntosAhoraTv(){
        
        return cy.get('a[href="/catalogo/ahora-tv"]')

        
    }



    





}
export default homePage