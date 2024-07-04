class BootstrapAlerts
{

    // Autocloseable success message
    btnAutoSuccMsg='#autoclosable-btn-success';

    // Normal success message
    btnNormSuccMsg='#normal-btn-success';

    // Autocloseable warning message
    btnAutoWarnMsg='#autoclosable-btn-warning';

    // Normal warning message
    btnNornWarnMsg='#normal-btn-warning';

    // Autocloseable danger message
    btnAutoDangMgs='#autoclosable-btn-danger';

    // Normal info message
    btnNormInfoMsg='#normal-btn-info';

    // Autocloseable info message
    btnAutoInfoMsg='#autoclosable-btn-info';

    // Normal danger message
    btnNormDanMsg='#normal-btn-danger';

    visitPageURL(BA_URL)
    {
        cy.visit(BA_URL)
    }

    valPageTitle(BA_PagTitle)
    {
        cy.title().should('eql', BA_PagTitle)
    }


    clickAutoSuccessMsg(ASM)
    {
        cy.get(this.btnAutoSuccMsg)
        .should('be.visible')
        .should('contain.text', ASM)
        .click()
    }
     

    clickNormalSuccessMsg(NSM)
    {
        cy.get(this.btnNormSuccMsg)
        .should('be.visible')
        .should('contain.text', NSM)
        .click()
    }
   

   clickAutoWarningMsg(AWM)
   {
        cy.get(this.btnAutoWarnMsg)
        .should('be.visible')
        .should('contain.text', AWM)
        .click()
   }
   

   clickNormalWarningMsg(NWM)
   {
        cy.get(this.btnNornWarnMsg)
        .should('be.visible')
        .should('contain.text', NWM)
        .click()
   }
   

   clickAutoDangerMsg(ADM)
   {
        cy.get(this.btnAutoDangMgs)
        .should('be.visible')
        .should('contain.text', ADM)
        .click()

   }


   clickNormDangerMsg(NDM)
   {
        cy.get(this.btnNormDanMsg)
        .should('be.visible')
        .should('contain.text', NDM)
        .click()

   }


   clickAutoinfoMsg(AIM)
   {
        cy.get(this.btnAutoInfoMsg)
        .should('be.visible')
        .should('contain.text', AIM)
        .click()

   }
   
   
   clickNormalinfoMsg(NIM)
   {
        cy.get(this.btnNormInfoMsg)
        .should('be.visible')
        .should('contain.text', NIM)
        .click()

   }
   
}

export default BootstrapAlerts;