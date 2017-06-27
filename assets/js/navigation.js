var h2 = document.querySelectorAll("h2")
var arrayLength = h2.length;
var anchorList = document.getElementById("anchor-list");
for (var i = 0; i < arrayLength; i++) { 
	var li = document.createElement("LI");
	var aTag = document.createElement("A");
	aTag.innerHTML = '<a href="#' + h2[i].id + '">' + h2[i].textContent + '</a>';
	li.appendChild(aTag);
	anchorList.appendChild(li);
};