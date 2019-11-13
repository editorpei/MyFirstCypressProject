const createBedroomButton = '.btn-primary'
const bedroomButton = ':nth-child(3) > a'
const bedroomLabel = 'List'
const CreateNewBedroomLabel = 'Create New Bedroom'
const roomDescription = ':nth-child(2) > :nth-child(1) > label'
const floor =':nth-child(3) > :nth-child(1) > label'
const roomNumber = ':nth-child(4) > :nth-child(1) > label'
const price = ':nth-child(5) > :nth-child(1) > label'
const bedroomStatus = ':nth-child(6) > :nth-child(1) > label'
const statusValue ='#bedroomStatusId'
const bedroomType =':nth-child(7) > :nth-child(1) > label'
const typeValue = '#typeBedroomId'
const saveButton ='#saveBtn'
const bedroomCreatedMessage ='Bedroom was successfully created'
const bedroomDeleteButton = '#j_idt50 > table > tbody > tr:nth-child(7) > td:nth-child(8) > a:nth-child(3)'
const bedroomDeletedMessage = 'Bedroom was successfully deleted'




function createBedroom (cy){
    
        cy.get(bedroomButton).click()
        cy.get(createBedroomButton).click()
        cy.contains(CreateNewBedroomLabel)
        cy.get(roomDescription).type('Testroom')
        cy.get(floor).type('10')
        cy.get(roomNumber).type('1002')
        cy.get(price).type('250.00')
        cy.get(bedroomStatus).click()
        cy.get(statusValue).select('VACANT')
        cy.get(bedroomType).click()
        cy.get(typeValue).select('CLASSIC BED KING')
        cy.get(saveButton).click()
        cy.contains(bedroomCreatedMessage)
    }
function deleteBedroom(cy){
        cy.get(bedroomButton).click()
        cy.get(bedroomDeleteButton).click()
        cy.contains(bedroomDeletedMessage)

}
        



  module.exports= {
    createBedroom,
    deleteBedroom
    
}
