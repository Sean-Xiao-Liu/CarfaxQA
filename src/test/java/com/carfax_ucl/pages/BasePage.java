package com.carfax_ucl.pages;

import com.carfax_ucl.utilities.Driver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class BasePage {
    WebDriver driver = Driver.get();
    private FindDealerPage findDealerPage;
    private FollowBtnPage followBtnPage;
    private LeadFormPage leadFormPage;
    private MainSignUpPage mainSignUpPage;
    private MainSignInPage mainSignInPage;
    private UCLSignInPage uclSignInPage;
    private UCLSignUpPage uclSignUpPage;
    private vdpSaveThisSearchPage vdp;
    private SendToMyPhone sendToMyPhone;
    private ShareHeader shareHeader;


    public FindDealerPage getFindDealerPage() {
        if(findDealerPage ==null){
            findDealerPage = new FindDealerPage();
        }
        return findDealerPage;
    }

    public FollowBtnPage getFollowBtnPage() {
        if(followBtnPage ==null){
            followBtnPage = new FollowBtnPage();
        }
        return followBtnPage;
    }

    public LeadFormPage getLeadFormPage() {
        if(leadFormPage ==null){
            leadFormPage = new LeadFormPage();
        }
        return leadFormPage;
    }

    public MainSignUpPage getMainSignUpPage() {
        if(mainSignUpPage ==null){
            mainSignUpPage = new MainSignUpPage();
        }
        return mainSignUpPage;
    }

    public MainSignInPage getMainSignInPage() {
        if(mainSignInPage ==null){
            mainSignInPage = new MainSignInPage();
        }
        return mainSignInPage;
    }

    public UCLSignInPage getUclSignInPage() {
        if(uclSignInPage ==null){
            uclSignInPage = new UCLSignInPage();
        }
        return uclSignInPage;
    }

    public UCLSignUpPage getUclSignUpPage() {
        if(uclSignUpPage ==null){
            uclSignUpPage = new UCLSignUpPage();
        }
        return uclSignUpPage;
    }

    public vdpSaveThisSearchPage getVdp() {
        if(vdp ==null){
            vdp = new vdpSaveThisSearchPage();
        }
        return vdp;
    }

    public SendToMyPhone getSendToMyPhone(){
        if(sendToMyPhone==null){
            sendToMyPhone=new SendToMyPhone();
        }
        return sendToMyPhone;
    }

    public ShareHeader getShareHeader(){
        if (shareHeader==null) {
            shareHeader=new ShareHeader();
        }
        return shareHeader;
    }
}
