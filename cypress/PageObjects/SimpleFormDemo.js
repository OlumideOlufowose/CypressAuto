class SimpleFormDemo 
{

    // Single Input Field
    txtEnterMesssage="#user-message.form-control";
    btnShowMessage="button[onclick='showInput();']";
    lblDisplayMessage="#display";

    visitPageURL(SFD_URL)
    {
        cy.visit(SFD_URL)
    }

    valPageTitle(SFD_PagTitle)
    {
        cy.title().should('eql', SFD_PagTitle)
    }

    enterMessage(msg) 
    {
        cy.get(this.txtEnterMesssage).type(msg).should('be.visible')

    }    

    clickShowMessage() 
    {
        cy.get(this.btnShowMessage).should('be.visible').click()
    }

    valDisplayedMsg(msg)
    {
        cy.get(this.lblDisplayMessage).should('have.text',msg).should('be.visible')
    }   

    // Multiple Input Field
    txtValueA='#value1';
    txtValueB='#value2';
    btnGetTotal='#gettotal > button';
    lblDisplayedTotal='#displayvalue';

    enterValueA(a) 
    {
        cy.get(this.txtValueA).type(a).should('be.visible')
    }

    enterValueB(b) 
    {
        cy.get(this.txtValueB).type(b).should('be.visible')
    }

    getTotal()
    {
        cy.get(this.btnGetTotal).should('be.visible').click()
    }

    valDisplayedTotal(getSum)
    {
        cy.get(this.lblDisplayedTotal).should('have.text',getSum).should('be.visible')
    }


}

export default SimpleFormDemo;