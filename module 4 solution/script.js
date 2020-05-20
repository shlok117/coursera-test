(function () {
var names =["Jen","John","Jason","Jim","Paul","Frank","Lary","Paula","Laura"];
console.log(names);
for(var i=0; i<names.length; i++) {
	var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();



