/******************************************************
1. Universal Variables & Initial JQUERY & Initial JS
2. Nav Button Functionality 
3. Load XML
4. Set Text Fields
5. Create Header Arrays
6. Set Viewport Text Fields
7. Set Button & Header Text Fields
8. Final Functions
******************************************************/

/*******************************
1. Universal Variables & Initial JQUERY & Initial JS
*******************************/

function setupAccordion(a){
	$(function() {
		a.accordion({
			active: false,
			collapsible: true,
		});
	});
}
//you can 
function setupModal(openerDiv, modalWindowDiv, w, pos, drag, resiz, hasSlider, sliderDiv){//setupModal($('#openerA'), $('#dialogA'), 980, top, true, true, true, $('#webExamplesSlider'));
	modalWidth = w;
	modalWindowDiv.dialog({ autoOpen: false,  modal:true, width:w, draggable: drag,resizable: resiz, position: pos});
	//$( ".selector" ).dialog( "option", "resizable", false
	openerDiv.click(function() {
		modalWindowDiv.dialog( "open" );
		return false;
	});
	if(hasSlider){
		setUpSliderInModal(modalWindowDiv, sliderDiv);
	}
}
function setUpSliderInModal(modalDiv, sliderDiv){//setUpSliderInModal($( "#dialogA" ), $('#webExamplesSlider'));
		modalDiv.on( "dialogopen", function( event, ui ) { 
			setupSlider(sliderDiv);
		} );
}
function setupSlider(div, thumbnail){
	//TODO - change the following code to the new carousel framework 
	/*if(thumbnail){
		div.flexslider({
			animation: "slide",
			animationLoop: false,
			itemWidth: 20,
			itemMargin: 38,
			minItems: 1,
			maxItems: 4,           
			touch: true
		});
	}else{
		div.flexslider({
			animation: "slide",
			animationLoop: true,
			slideshow: false,
			asNavFor: '#slider',
			pauseOnHover: true,           
			touch: true
		});
	}*/
	
}
function pickRandomImg(div, arr){
		div.attr("src", arr[Number(randomNum(3)-1)] );
		//console.log(div.attr("src"));
		//console.dir(div);
}
function randomNum(max){
	var num = Math.ceil(Math.random() * max);	
	return num;
}

//feel free to edit
function addHeader(headerID){
	var headerContent = "";
	headerContent +=  '<a class="logo homeLink" href="index.html"></a>';
	headerContent +=  '<a class="mainNav tk-ff-meta-web-pro" id="servLink" href="index.html#servicesAnchor">SErvices</a>';
	headerContent +=  '<a class="mainNav tk-ff-meta-web-pro toolsLink" id="toolsLink" href="index.html#toolsAnchor">TOOLS &amp; RESOURCES</a>';
	headerContent +=  '<a class="mainNav tk-ff-meta-web-pro supportLink" id="supportLink" href="index.html#supportAnchor">Support</a>';
	headerContent +=  '<div id="edServLogo"><span class="fallbackfont tk-ff-meta-web-pro">EDUCATION Services TeChnology</span></div>';
	//console.log(headerContent);
	$(headerID).html(headerContent);
}

function addFooter(footerID){
	var d = new Date();
	var y = d.getFullYear();
	$(footerID).html('© '+y+' EMC Corporation. All rights reserved.');	
}

function scrollToAnchor(aid){
	var aTag = $("#"+ aid);
	$('html,body').animate({scrollTop: aTag.offset().top},'easeOutCirc');
}


$(document).ready(function(){ 
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//addHeader('#headerContainer');
	//addFooter('#footerCopy');
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	//////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////
	setUp();
	
	$(function () {
		$("#datepicker").datepicker({ maxDate: "-1D" }).attr('readonly', 'readonly');
		$("#datepicker").readonlyDatepicker(true);
	
	});
	
	/*******************************
	3. Load XML
	*******************************/
	function loadText(){
		$.ajax({
	
			// create a get request
			type: "GET",
			
			// specify the url to the xml file...
			url: String("xml/file"+locale+".xml?061612"),
			
			// ...and the file format
			dataType: "xml",
			
			// on successful load of the xml file...
			success: function (xml) {
				
				//put stuff here
				
			},
			
			error: function(err){
				// in case there's an error
				alert(err);
			}
		});
	}

});

