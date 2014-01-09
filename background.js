console.log("hello from background");



chrome.runtime.onMessage.addListener(function(request,sender,sendResponse) {
	var results = request.result;
	var t = document.getElementsByTagName("img");
	console.log("got message:");
	console.log(results);

	for(var i = 0; i < t.length; i++) {
		var img = t[i];
		var w = img.width;
		var h = img.height;
		img.src = decodeURI(results[i%(results.length-1)]);
		img.width = w;
		img.height = h;
	}

	sendResponse({'farewell':'got it breh'});
});