//initializing the messagingSDK
var windowKit = new windowKit({
	account: 89307955
	//skillId: 12341234 - optional skill ID
});
//declaring variables
var userinput = '<div class="inputcontainer"><input type="text" id="messageInput" placeholder="Type your query here"/><div class="magGlass"><i class="fas fa-search"></i></div></div><div class="lp-json-pollock"><div class="lp-json-pollock-layout lp-json-pollock-layout-vertical"><div class="lp-json-pollock-element-button searchButton"><button title="Go back" aria-label"Go back">Go back</button></div></div></div>'
let isScrolling;
let agentFirstText;

//connecting to a conversation, the JWT is created here
windowKit.connect();

//when the conversation has been loaded and is ready (displayed), call the scrollBottom function
windowKit.onReady( function () {
	console.log("ready");

});

//when an agent (the bot) sends a text
windowKit.onAgentTextEvent(function(text) {
	//apnend the text's contents to the conversation
	$('#caseyContainer').append('<div class="caseyTextContainer"><img class="caseyAvatar" src="img/avatar-casey.svg"/><div class="caseyText">' + text + '</div></div>');
	//a rule to check if the user asked for a search and if so, show the input field
	if (text.indexOf("Sorry that's not something I recognize") > -1 || text.indexOf("Would you like to search for something else") > -1 || text.indexOf("Sorry, I could not find anything for that") > -1) {
		displayInput();
	}
	console.log('Agent: ' + text);
	//a rule to get rid of the loader, but only one the first agent text sent to prevent errors
	if (!agentFirstText) {
		agentFirstText = true;
		$("#botLoader").css('display', 'none');
		scrollBottom(0);
	} else {
		scrollBottom(850, 1500);
	}
	$('.caseyText a').on('click', function (event) {
		event.preventDefault();
		var url = $(this).attr('href');
		window.open(url, "_blank");
	});
});

//when a user sends a text
windowKit.onVisitorTextEvent(function(text) {
	//grab that text's contents and append it to the conversation
	$('#caseyContainer').append('<div class="consumerText">' + text + '</div>');
	console.log('visitortext');
	var previousContainer = $('.lp-json-pollock-layout:last');
	var previousButtons = $(previousContainer).children('.lp-json-pollock-element-button');
	$.each (previousButtons, function() {
		if (!$(this).hasClass('keep')) {
		$(this).addClass('fadeout');
		$(this).css('pointer-events', 'none');
	}
});
});

//when an agent (the bot) sends a rich content message
windowKit.onAgentRichContentEvent(function(content) {
	//grab the content of the message, render them using LP's Pollock tool and set them as a variable
  var structuredText = JsonPollock.render(content);
	var caseyImage = '<img class="caseyAvatar scAvatar" src="img/avatar-casey.svg"/>'
	//append that variable to the conversation
	$('#caseyContainer').append(structuredText, caseyImage);
	// var scTexts = document.getElementsByClassName('lp-json-pollock');
	// var latestScText = scTexts[scTexts.length - 1];
	// $(latestScText).append('')
	//when you print the text, print the rich content as an object not a string
	console.log('Agent: ', structuredText);
	//Pollock code used to navigate to the links the bot sends, effectively registering the buttons to be links to them
	JsonPollock.registerAction('link', function (linkObject) {
		//grab the link passed with the object
		var rawLink = linkObject.actionData.uri;
		//open the link in a new tab
		window.open(rawLink, "_blank");
		console.log(linkObject);
	});
	jsonButton();
	scrollBottom(850, 1500);
});

function displayInput () {
	//timeout needed to make sure the input gets displayed after the response message
	$('#messageInput').attr('id', 'messageInputUsed');
	setTimeout (function () {
	//find the last child, which will always be the response message, and append the input beneath it
	$('#caseyContainer:last').append(userinput);
	jsonButton();
	//a listener to recognize whether enter was pressed on the search input
	 $('#messageInput').keydown(function (e) {
		 if (e.which == 13) {
			 //when enter was pressed, grab the text from the input field
			 var messageText = messageInput.value;
			 //send that text to the conversation, where it will get appended
			 windowKit.sendMessage(messageText);
			 console.log('enter');
			 console.log(messageText);
			 //change the id of the input field used to make sure it doesn't get picked up when this function runs again - there can only be one!
			 $(this).attr('id', 'messageInputUsed');
		 }
	 });
}, 1000);
};

//a function to scroll to the bottom of the conversation
function scrollBottom (offset, interval) {
	//only scroll if we haven't scrolled before
	if (!isScrolling) {
		//change the var so this doesn't repeat
		isScrolling = true;
	//now that we have bottom, animate the body and html to simulate a scroll. Don't scroll on mobile.
	setTimeout (function () {
		//find the bottom of the conversation window by adding the top attribute and the height of the div
	var bottom = $(document).height() - offset;
	var children = $('#caseyContainer').children();
	if (children.length > 4) {
		$('body, html').animate({ scrollTop: bottom, complete: function() { isScrolling = false; } }, 1000);
		}
	}, 1200);
	}
	setTimeout (function () {
		//allow other scrolls in the future, like those which happen when a new text is sent
		isScrolling = false;
	}, 2000);
};

function jsonButton () {
	//when a user click on a strucuted content button
	$('.lp-json-pollock-element-button').on('click', function () {
		//grab the text of the button
		var scText = $(this).text();
		//if it's not a view result button which instead navigates to a link as above
		if (scText.indexOf("View result") == -1) {
		//send it to the conversation, it will get appended in onVisitorTextEvent
		windowKit.sendMessage(scText);
		var buttons = $('.lp-json-pollock-layout').children('.lp-json-pollock-element-button');
		$(this).addClass('keep')
		$.each (buttons, function() {
			if (!$(this).hasClass('keep')) {
			$(this).addClass('fadeout');
		}
			$(this).css('pointer-events', 'none');
	});
	}
		//if the user wants to search, show the input field
		if (scText == "Search for something else" || scText == "Take me back to the search") {
			setTimeout (function () {
				displayInput();
			}, 1000);
		}
	});
}

$(document).ready(function () {
	//when the reset button is clicked
	$('#resetcontainer').click(function() {
		//clear localStorage, killing the JWT
		window.localStorage.clear();
		//refresh the page. Since there's no JWT stored, a new conversation will be created
    window.location.reload(true);
});
})
