// Element
const clientButton = ':nth-child(5) > a'
const listLabel = 'List'
const indexButton = '#j_idt50 > [href="/hotel/faces/index.xhtml"]'
const deleteButton = '#j_idt50 > table > tbody > tr:nth-child(6) > td:nth-child(7) > a:nth-child(3)'
const createButton= '.btn-primary'
const nameLabel = ':nth-child(2) > :nth-child(1) > label'
const emailLabel = ':nth-child(4) > :nth-child(1) > label'
const genderLabel = ':nth-child(2) > label'
const securitynumberLabel = ':nth-child(6) > :nth-child(1) > label'
const saveLabel = '.btn-primary'
const addClientMessage ='Client was successfully created'
const deleteClientMessage = 'Client was successfully deleted'
const dashboardLabelOnTop = 'Dashboard'

//Functions
function clienttoDashborad(){
    cy.get(clientButton).click()
    cy.contains(listLabel)
    cy.get(indexButton).click()  
    cy.contains(dashboardLabelOnTop)

}
function addClient (cy){
    cy.get(clientButton).click()
    cy.get(createButton).click()
    cy.get(nameLabel).type('Sophia')
    cy.get(emailLabel).type('Sophia@test.nu')
    cy.get(genderLabel).click()
    cy.get(securitynumberLabel).type('2345678')
    cy.get(saveLabel).click()
    cy.contains(addClientMessage)
     }

function deleteClient(cy){
    cy.get(clientButton).click()
    cy.get(deleteButton).click()
    cy.contains(deleteClientMessage)
         }
function fromClienttoIndex(cy) {
    cy.get(clientButton).click()
    cy.contains(listLabel)
    cy.get(indexButton).click()  
    cy.contains(dashboardLabelOnTop)
         }  

     //Exports
     module.exports= {
         clienttoDashborad,
         addClient,
         deleteClient,
         fromClienttoIndex
         
     }