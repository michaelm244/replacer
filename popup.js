var search;
google.load('search','1');
var newArr = [];
var counter = 0;


function sendData() {
	console.log("now in sendData");
	console.log(newArr);
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {'result': newArr}, function(response) {
		console.log(response.farewell);
		document.body.innerHTML += "<p>Done!</p><img src='http://smallbiztrends.com/wp-content/uploads/2010/11/iStock_000010679869XSmall.jpg' width='20px' height='20px'>";
		});
	});
}
document.getElementById('button').addEventListener('click', function() {
	console.log("clicked");
	search = new google.search.ImageSearch();
	search.setSearchCompleteCallback(this, function(){
		console.log("counter: "+counter);
		if(counter == 7)
			sendData();
		for(var i = 0; i < search.results.length; i++) {
			newArr.push(search.results[i].url);
			console.log(search.results[i].url);
		}
		counter++;
		search.gotoPage(counter);
	}, null);
	search.execute(document.getElementById("query").value);
});