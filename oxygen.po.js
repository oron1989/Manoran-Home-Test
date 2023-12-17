module.exports = {

    webClickOnButton: (webComp) => {
        web.waitForVisible(webComp);
        var els = web.findElement(webComp);
        web.click(els);
    },

    webType: (webComponent, text) => {
        log.info(text)
        web.type(webComponent, text);
    },
    
    searchWebComponents: {
       bunnerCloseButton:  "//button[@class='inner-element']",
       letsStartButton: "//button[@class='layout-styles-MuiButtonBase-root layout-styles-MuiButton-root layout-styles-MuiButton-text layout-emotion-1xr7vl0']",
       sendButton: "//button[@class='contact-MuiButtonBase-root contact-MuiIconButton-root submit']",
        answerButton: "//button[@class='contact-MuiButtonBase-root button-base-wrapper']",
        submitButton: "//button[@class='contact-MuiButtonBase-root contact-MuiButton-root contact-MuiButton-text sc-bxivhb izNFaO button-submit']",
        userInput: 'id=user-input',
    },
    
}