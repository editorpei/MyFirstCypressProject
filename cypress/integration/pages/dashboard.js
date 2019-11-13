// Elements
const dashboardLabelOnTop = 'Dashboard'
const logoutToggleDropdown = '.dropdown-toggle'
const logoutToggleDropdownButton = '.dropdown-menu > li > a'

// functions
function checkDashBoardLabelOnTop (cy){
    cy.contains(dashboardLabelOnTop)
}
function performLogout(cy){
    cy.get(logoutToggleDropdown).click()
    cy.get(logoutToggleDropdownButton).click()
    

}
// exports
module.exports = {
    checkDashBoardLabelOnTop,
    performLogout

}