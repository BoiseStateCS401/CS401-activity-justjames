window.onload = function(){
	
	var pageheader = document.getElementById("page-header");
	console.log(pageHeader);
	
	
	//Select all collapsible sections using CSS selector.
	var sections = document.querySelectorAll("section.collapsible");
	
	//Add click listener to each section.
	for (var i = 0; i < sections.length; i++){
		sections[1].addEventListener("click", function(){
			console.log(this);
			toggleCollapsibleSection(this);
		});
	}
	
	funcion toggleCollapsibleSection(element){
		
		element.classList.toggle("collapsed");
		
		//find all children of the element.
		var children = element.children;
		
		//hide content. start loop at one to skip over h3.
		for(var j=1; j < children.length; j++){
			if(children[j].style.display == 'none'){
				children[j].style.display = 'block';
			} else{
				children[j].style.display. = 'none';
			}
		]
	}
	
	function initMap(){
		var boise = {lat:43.6187, lng: -116.2146};
		var map = new google.maps.Map(document.getElementById('map'),{
		zoom: 4;
		center: boise;
		});
		var marker = new google.maps.Marker({
		position: boise,
		map: map
		});
	}
}






	