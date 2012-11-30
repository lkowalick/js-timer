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

var titleString = "";
var time = new Time(0);
$(document).ready(function() {
	var correctSize = Math.min($(window).height(), $(window).width()*25/70);

	$("#timer").css({ 'font-size': correctSize });
	$("#container").css({ 'height': "100%" });

	$("#timer").click(function() {
		setInterval(function() {
			if (time.seconds > 0) {
				time.decrement();
			}
			$("#timer").text(time.toString());
		}, 1000)
	});

	$("button").click(function( event ) {
		event.preventDefault();
		titleString = $("#title").val();
		minutes = $("#min").val();
		time.seconds = minutes*60;
		$("#timer").text(time.toString());
		$("#form").hide();	
	});

	$("#timer").text(time.toString());
});

$(window).resize(function() {
	correctSize = Math.min($(window).height(), $(window).width()*25/70);
	$("#timer").css({ 'font-size': correctSize });
});
