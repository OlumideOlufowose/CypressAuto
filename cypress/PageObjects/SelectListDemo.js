class SelectListDemo
{

    visitPageURL(SLD_URL)
    {
        cy.visit(SLD_URL)
    }

    valPageTitle(SLD_PagTitle)
    {
        cy.title().should('eql', SLD_PagTitle)
    }


    // Single Select List
    OptSelection="#select-demo";
    lblDisplaySelection=".selected-value";

    setSingleSelection(day)
    {

        cy.get(this.OptSelection).select('Tuesday').should('have.value',day).should('be.visible')

    }

    validateDiplayedSingleOption(day)
    {
        cy.get(this.lblDisplaySelection).should('contain.text',day).should('be.visible')

    }
    

    // Multiple Select List
    mulOptSel="#multi-select";
    btnFstSel="#printMe";
    btnGetAllSel="#printAll";
    lblDislayedOpts='.getall-selected';

    setMultipleSelelection(state)
    {
        cy.get(this.mulOptSel).select(state).should('be.visible')

    }
    
    clickFirstSelected()
    {
        cy.get(this.btnFstSel).should('be.visible').click()

    }
    
    clickGetAllSelected()
    {
        cy.get(this.btnGetAllSel).should('be.visible').click()
        
    }
    
    validateDisplayedOptions(state)
    {
        cy.get(this.lblDislayedOpts).should('contain.text', state).should('be.visible')

    }

}

export default SelectListDemo;