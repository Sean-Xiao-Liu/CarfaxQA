package com.carfax_ucl.pages;

import com.carfax_ucl.utilities.Driver;
import org.openqa.selenium.WebDriver;

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
    private SendToMyPhonePage sendToMyPhone;
    private ShareHeaderPage shareHeader;
    private MapAndDirectionsPage mapAndDirectionsPage;
    private BodyTypeOrPricePage bodyTypeOrPricePage;
    private FiltersSRPPage filtersSRPPage;
    private FooterLinksPage footerLinksPage;
    private DealerWebsitePage dealerWebsitePage;
    private DMSRPPage dmsrpPage;

    private CheckAvailabilityLinksPage checkAvailabilityLinks;

    public FindDealerPage getFindDealerPage() {
        if (findDealerPage == null) {
            findDealerPage = new FindDealerPage();
        }
        return findDealerPage;
    }

    public FollowBtnPage getFollowBtnPage() {
        if (followBtnPage == null) {
            followBtnPage = new FollowBtnPage();
        }
        return followBtnPage;
    }

    public LeadFormPage getLeadFormPage() {
        if (leadFormPage == null) {
            leadFormPage = new LeadFormPage();
        }
        return leadFormPage;
    }

    public MainSignUpPage getMainSignUpPage() {
        if (mainSignUpPage == null) {
            mainSignUpPage = new MainSignUpPage();
        }
        return mainSignUpPage;
    }

    public MainSignInPage getMainSignInPage() {
        if (mainSignInPage == null) {
            mainSignInPage = new MainSignInPage();
        }
        return mainSignInPage;
    }

    public UCLSignInPage getUclSignInPage() {
        if (uclSignInPage == null) {
            uclSignInPage = new UCLSignInPage();
        }
        return uclSignInPage;
    }

    public UCLSignUpPage getUclSignUpPage() {
        if (uclSignUpPage == null) {
            uclSignUpPage = new UCLSignUpPage();
        }
        return uclSignUpPage;
    }

    public vdpSaveThisSearchPage getVdp() {
        if (vdp == null) {
            vdp = new vdpSaveThisSearchPage();
        }
        return vdp;
    }

    public SendToMyPhonePage getSendToMyPhone() {
        if (sendToMyPhone == null) {
            sendToMyPhone = new SendToMyPhonePage();
        }
        return sendToMyPhone;
    }

    public ShareHeaderPage getShareHeader() {
        if (shareHeader == null) {
            shareHeader = new ShareHeaderPage();
        }
        return shareHeader;
    }

    public MapAndDirectionsPage getMapAndDirections() {
        if (mapAndDirectionsPage == null) {
            mapAndDirectionsPage = new MapAndDirectionsPage();
        }
        return mapAndDirectionsPage;
    }

    public BodyTypeOrPricePage getBodyTypeOrPricePage() {
        if (bodyTypeOrPricePage == null) {
            bodyTypeOrPricePage = new BodyTypeOrPricePage();
        }
        return bodyTypeOrPricePage;
    }

    public FiltersSRPPage getFiltersSRPPage() {
    if(filtersSRPPage==null) {
        filtersSRPPage=new FiltersSRPPage();
    }
    return filtersSRPPage;
}
public FooterLinksPage getFooterLinksPage(){

        if(footerLinksPage==null){
            footerLinksPage=new FooterLinksPage();
    }

        return footerLinksPage;
}

    public CheckAvailabilityLinksPage getCheckAvailabilityLinks(){

        if(checkAvailabilityLinks==null){
            checkAvailabilityLinks=new CheckAvailabilityLinksPage();
        }

        return checkAvailabilityLinks;
    }
    public DealerWebsitePage getDealerWebsitePage(){

        if(dealerWebsitePage==null){
            dealerWebsitePage=new DealerWebsitePage();
        }

        return dealerWebsitePage;
    }

    public DMSRPPage getDmsrpPage(){

        if(dmsrpPage==null){
            dmsrpPage=new DMSRPPage();
        }

        return dmsrpPage;
    }
}
