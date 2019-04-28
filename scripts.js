/**
 * Simulate a key event.
 * @param {Number} keyCode The keyCode of the key to simulate
 * @param {String} type (optional) The type of event : down, up or press. The default is down
 * @param {Object} modifiers (optional) An object which contains modifiers keys { ctrlKey: true, altKey: false, ...}
 */
/*function simulateKey (keyCode, type, modifiers) {
	var evtName = (typeof(type) === "string") ? "key" + type : "keydown";	
	var modifier = (typeof(modifiers) === "object") ? modifier : {};

	var event = document.createEvent("HTMLEvents");
	event.initEvent(evtName, true, false);
	event.keyCode = keyCode;
	
	for (var i in modifiers) {
		event[i] = modifiers[i];
	}

	document.dispatchEvent(event);
}

// Setup some tests

var onKeyEvent = function (event) {
	var state = "pressed";
	
	if (event.type !== "keypress") {
		state = event.type.replace("key", "");
	}
	
	console.log("Key with keyCode " + event.keyCode + " is " + state);
};

document.addEventListener("keypress", onKeyEvent, false);
document.addEventListener("keydown", onKeyEvent, false);
document.addEventListener("keyup", onKeyEvent, false);


function check() {
  //alert("1");
  //$(17).keydown();
  //alert("2");
  //$(16).keydown();
  //alert("3");
  //$(37).keydown();
  //alert("4");
  
  simulateKey(17);
  simulateKey(16);
  simulateKey(37);
  var text = "";
  text = window.getSelection().toString();
  alert("yo"+text);
  return text;
  var text = "";
  text = window.getSelection().toString();
  alert(text);
  return text;
}

document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 32) {
    alert("HIIIII!");
    var word = "";
    word = check();
    if (word == "stigma "){
      var replaceWord = "yay";
      alert("Hey! We noticed you used the word "+ word +" in your text. Did you mean " + replaceWord + "?");

    }
    return;
  }
  // do something
});*/

document.querySelector("[name=q]").addEventListener("keyup", (e) => {
	let text = e.target.value;
	alertValue=text;
})
alert(alertValue);

var splitText = text.split(" ");
