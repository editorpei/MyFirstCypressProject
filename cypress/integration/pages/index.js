// Element (web-elements, e.g. buttons, labels, text fields, etc)
const titleIndexPage ='Hotel Accomodation - login page'
const loginFormLabel = 'Please, login!'
const usernameTxtField = '#login'
const passwordTxtField = '#senha'
const loginSubmitButton = '#loginBtn'




// functions ( e.g. perform login, check title on page, check specific string, etc)
function checkLoginPageTitle(cy){
    cy.title().should('eq',titleIndexPage)
}
function performLogin(cy,username,password){
    cy.contains(loginFormLabel)
    cy.get (usernameTxtField).type(username)
    cy.get (passwordTxtField).type(password)
    cy.get(loginSubmitButton).click()


}
function checkLoginpageLabel(cy){
    contains(loginFormLabel)
}

 


// exports (making the functions available for importing)
module.exports= {
    performLogin, 
    checkLoginpageLabel, 
    checkLoginPageTitle
    
    
}