class BootstrapModals
{
    visitPageURL(BM_URL)
    {
        cy.visit(BM_URL)
    }

    valPageTitle(BM_PagTitle)
    {
        cy.title().should('eql', BM_PagTitle)
    }

    //Single Modal
    btnSingModLaunch='body > div.container-fluid.text-center > div > div.col-md-6.text-left > div:nth-child(2) > div > div > div.panel-body > a';
    lblSingModMsg='.modal-body';
    btnSingSaveChanges='#myModal0 > div > div > div.modal-footer > a.btn.btn-primary';

    
    
    clickSingleModal(lchMod) 
    {
        cy.get(this.btnSingModLaunch)
        .should('be.visible')
        .should('have.text',lchMod)
        .click()
    }

    validateSingleModalMsg(singModMsg)
    {
        cy.get(this.lblSingModMsg).should('contain.text', singModMsg)

    }
     
    clickSinSaveChanges(savChg)
    {
        cy.get(this.btnSingSaveChanges).should('be.visible').should('contain.text', savChg).click()

    }



    //Multiple Modal
    btnPryModLch='body > div.container-fluid.text-center > div > div.col-md-6.text-left > div:nth-child(3) > div > div > div.panel-body > a';
    lblPryModTtl='.modal-title';
    lblPryModMsg='.modal-body';
    btnSecModLch='#myModal > div > div > div.modal-body > a';
    lblSecModTtl='.modal-title';
    lblSecModMsg='.modal-body';
    btnSecModCls='#myModal2 > div > div > div.modal-footer > a:nth-child(1)';
    btnPryModSavChg="#myModal > div > div > div.modal-footer > a.btn.btn-primary";


  
    clickPrimaryModLaunch(lchMod)
    {
        cy.get(this.btnPryModLch).should('be.visible').should('have.text',lchMod).click()

    }
    
    valPrimaryModTitle(firModTtl)
    {
        cy.get(this.lblPryModTtl).should('be.visible').should('contain.text', firModTtl)

    }

    valPrimaryModMsg(pryModMsg)
    {
        cy.get(this.lblPryModMsg).should('be.visible').should('contain.text', pryModMsg)

    }
  
            
    clickSecondaryModLaunch(lchMod)      
    {
        cy.get(this.btnSecModLch).should('be.visible').should('have.text',lchMod).click()

    } 
    
    valSecondaryModTitle(secModTtl)
    {
        cy.get(this.lblSecModTtl).should('be.visible').should('contain.text', secModTtl)
    }

    valSecondaryModMsg(secModMsg)   
    {
        cy.get(this.lblSecModMsg).should('contain.text', secModMsg)
    }

    closeSecondaryModMsg()
    {
        cy.get(this.btnSecModCls).should('be.visible').should('contain.text','Close').click()
    }
  
    clickPryModSaveChanges(savChg)
    {
        cy.get(this.btnPryModSavChg).should('contain.text', savChg).click()
  
    }

}

export default BootstrapModals;