// Open menora website.
web.init();
web.open(env.url);
web.pause(5*1000);

//Close to באנר פרסומי
if (web.isVisible(po.searchWebComponents.bunnerCloseButton, 10)) {
    po.webClickOnButton(po.searchWebComponents.bunnerCloseButton);
}

//Find the button  בואו נתחיל and click on it.
po.webClickOnButton(po.searchWebComponents.letsStartButton);

// Input user name and  continue.
po.webType(po.searchWebComponents.userInput, params.Name)

po.webClickOnButton(po.searchWebComponents.sendButton);

// Select ביטוח and click on it.
po.webClickOnButton(po.searchWebComponents.answerButton);

// Select בריאות ושיניים and click on it.
po.webClickOnButton(po.searchWebComponents.answerButton);

// Select הצטרפות and click on it.
po.webClickOnButton(po.searchWebComponents.answerButton);

// Input user id and  continue.
po.webType(po.searchWebComponents.userInput, params.ID);

po.webClickOnButton(po.searchWebComponents.sendButton);

// Input phone and incorect email.
po.webType('id=input-cellPhoneNumber', '0' + params.PhoneNumber);
po.webType('id=input-emailAddress', params.Email);

po.webClickOnButton(po.searchWebComponents.submitButton);

web.assertExist("id=input-emailAddress-helper-text");
web.assertText("id=input-emailAddress-helper-text", "הזן אימייל example@gmail.com", 10);
