import * as loginPg from './pages/index'
import * as dashboardPg from './pages/dashboard'
import * as client from './pages/client'
import * as bedroom from './pages/bedroom'
const truePassword= '1010'
const fakePassword ='1111'
const loginwrongMessage = 'Login and Password Wrong'

describe( 'Test suite', function(){
    beforeEach(()=>{   
        cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')
        loginPg.checkLoginPageTitle(cy)
})

       it('Perform login with fakepassword and logout', function(){
        loginPg.performLogin(cy,'jp',fakePassword)
        cy.contains(loginwrongMessage)

    })
    it('Perform login with admin and logout', function(){
    
        loginPg.performLogin(cy,'marc',truePassword)
        dashboardPg.checkDashBoardLabelOnTop(cy)
        dashboardPg.performLogout(cy)
        loginPg.checkLoginPageTitle(cy)

    })
    it('Perform create an client and delete the client', function(){
    
        loginPg.performLogin(cy,'jp',truePassword)
        dashboardPg.checkDashBoardLabelOnTop(cy)
        client.addClient(cy)
        client.deleteClient(cy)
        

    })
    it('Perform create a bedroom and delete the bedroom with admin', function(){
    
        loginPg.performLogin(cy,'marc',truePassword)
        dashboardPg.checkDashBoardLabelOnTop(cy)
        bedroom.createBedroom(cy)
        bedroom.deleteBedroom(cy)
       

    })
    it('Perform from client page to the index page', function(){
    
        loginPg.performLogin(cy,'jp',truePassword)
        dashboardPg.checkDashBoardLabelOnTop(cy)
        client.fromClienttoIndex(cy)

        
     })
})
