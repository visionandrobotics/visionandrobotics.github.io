$.stellar({
	horizontalOffset: 0,
	verticalOffset: 0,
	responsive: true
});

$(window).ready(updateHeight);
$(window).resize(updateHeight);

function updateHeight()
{
    var div = $('#bg-image');
    var width = div.width();
    
    div.css('height', 0.3*width);
}
