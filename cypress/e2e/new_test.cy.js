import SimpleFormDemo from "../PageObjects/SimpleFormDemo";
import SelectListDemo from "../PageObjects/SelectListDemo";
import BootstrapAlerts from "../PageObjects/BootstrapAlerts";
import BootstrapModals from "../PageObjects/BootstrapModals";

describe("Test Automation", () => 
{
    
            it ("Simple Form Demo Test", () => 
                {  

                    cy.fixture("SimpleForm").then((test_data) => 
                        {
                            const test = new SimpleFormDemo()
                    
                            test.visitPageURL(test_data.SFD_URL);
                            test.valPageTitle(test_data.SFD_PagTitle);

                            // Single Input Field
                            test.enterMessage(test_data.msg);
                            test.clickShowMessage();
                            test.valDisplayedMsg(test_data.msg);

                            // Multiple Input Fields
                            test.enterValueA(test_data.a);
                            test.enterValueB(test_data.b);
                            test.getTotal();
                            test.valDisplayedTotal(test_data.getSum);
                        
                        })
            
                })
                
            it ("Select List Demo Test", () =>  
                {  
    
                    cy.fixture("SelectList").then((test_data) => 
                        {
                            const test = new SelectListDemo()
                                
                            test.visitPageURL(test_data.SLD_URL);
                            test.valPageTitle(test_data.SLD_PagTitle);
            
                            // Single Select  List
                            test.setSingleSelection(test_data.day);
                            test.validateDiplayedSingleOption(test_data.day);
            
                            // Multiple Select List
                            test.setMultipleSelelection(test_data.state);
                            test.clickFirstSelected();
                            test.clickGetAllSelected();
                            test.validateDisplayedOptions(test_data.state);
                                
                        
                        })
                
                })


            it ("BootStrap Alerts Test", () => 
                {  
        
                    cy.fixture("BootstrapAlerts").then((test_data) => 
                        {
                            const test = new BootstrapAlerts()
                                
                            test.visitPageURL(test_data.BA_URL);
                            test.valPageTitle(test_data.BA_PagTitle);
            
                            // Single Select List
                            test.clickAutoSuccessMsg(test_data.ASM);

                            test.clickNormalSuccessMsg(test_data.NSM);
            
                            // Multiple Select List
                            test.clickAutoWarningMsg(test_data.AWM);
                            test.clickNormalWarningMsg(test_data.NWM);
                            test.clickAutoDangerMsg(test_data.ADM);
                            test.clickNormDangerMsg(test_data.NDM);
                            test.clickAutoinfoMsg(test_data.AIM);
                            test.clickNormalinfoMsg(test_data.NIM);
                                
                            
                        })
                    
                })


            it ("BootStrap Modals Test", () => 
                {  
            
                    cy.fixture("BootstrapsModals").then((test_data) => 
                        {
                            const test = new BootstrapModals()
                                
                            test.visitPageURL(test_data.BM_URL);
                            test.valPageTitle(test_data.BM_PagTitle);
            
                            // Single Modal
                            test.clickSingleModal(test_data.lchMod);
                            test.validateSingleModalMsg(test_data.singModMsg);
                            test.clickSinSaveChanges(test_data.savChg);

                            // Multiple Modals 
                            test.clickPrimaryModLaunch(test_data.lchMod);
                            test.valPrimaryModTitle(test_data.firModTtl);
                            test.valPrimaryModMsg(test_data.pryModMsg);
                            test.clickSecondaryModLaunch(test_data.lchMod);
                            test.valSecondaryModTitle(test_data.secModTtl);
                            test.valSecondaryModMsg(test_data.secModMsg);
                            test.closeSecondaryModMsg();
                            test.clickPryModSaveChanges(test_data.savChg);

                                
                        })
                        
                    })



})
