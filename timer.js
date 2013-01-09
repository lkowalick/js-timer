function Time(seconds){
	this.seconds = seconds;

	this.toString = function() {
		function padWithZero(integer) {
			return integer >= 10 ? String(integer) : "0" + String(integer);
		}

		min = padWithZero(Math.floor(this.seconds / 60));
		sec = padWithZero(this.seconds % 60);
		return min + ":" + sec;
	}

	this.decrement = function() {
		this.seconds--;
	}
}

var time = new Time(0);
var heightToWidth = 20/70; //Aprox. ratio of height to width for 2 digit min;

function fixSize() {
	var correctSize = Math.min($(window).height(), $(window).width()*heightToWidth);
	$("#timer").css({ 'font-size': correctSize });
}


$(document).ready(function() {
	fixSize();

	$("#container").css({ 'height': "100%" });

	$("#starttimer").click(function() {
		setInterval(function() {
			if (time.seconds > 0) {
				time.decrement();
			}
			$("#timer").text(time.toString());
		}, 1000)
		$(this).hide();
	});

	$("#settimer").click(function( event ) {
		event.preventDefault();
		titleString = $("#title").val();
		minutes = $("#min").val();
		time.seconds = minutes*60;
		if (time.seconds >= 6000) {
			heightToWidth = 25/84; //Approx ratio of height to width for 3 digit min
			fixSize();
		}
		$("#timer").text(time.toString());
		$("#form").hide();	
		$("#start").show();
	});

	$("#timer").text(time.toString());
});

$(window).resize(function() {
	fixSize();
});
