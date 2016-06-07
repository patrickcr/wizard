var wizard = null;
$(document).ready(function() {
	

	wizard = $(".wizard");
	//set wizard bazed on size
	var length = wizard.find(".wizard-menu li").length;
	wizard.find(".content").css('width', 'Calc(100% * '+ length +' )');
	wizard.find(".step").css('width', 'Calc(100% / '+ length +' )');

});

function next(){
	wizard_move(+1);
}


function prev(){
	wizard_move(-1);
}

function wizard_move(value)
{

	var current_index = parseInt(wizard.data("index"));
	var index = current_index + value;

	if(index >= 0 && index < wizard.find(".wizard-menu li").length) {
		// set the new index pos
		wizard.data("index", index);
		var left = -(index * 100) + '%';
		wizard.find(".content").css("left", left);

		//remove active step
		wizard.find(".wizard-menu li").removeClass('active');
		//set active step
		wizard.find(".wizard-menu li").eq(index).addClass("active");

		//hide button
		if(index == 0)
			$("#prev").hide();
		else if(index == (wizard.find(".wizard-menu li").length - 1))
			$("#next").hide();
		else {
			$("#prev").show();
			$("#next").show();
		}
	}
}