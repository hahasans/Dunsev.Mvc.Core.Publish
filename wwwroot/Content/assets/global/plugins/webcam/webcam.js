// Put event listeners into place
window.addEventListener("DOMContentLoaded", function () {
	// Grab elements, create settings, etc.
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var video = document.getElementById('video');
	var mediaConfig = { video: true };
	var errBack=function (e) {
		$('#camera').css('display', 'none');
		console.log('An error has occurred!', e);
	};

	// Put video listeners into place
	if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
		navigator.mediaDevices.getUserMedia(mediaConfig).then(function (stream) {
			video.src = window.URL.createObjectURL(stream);
			video.play();
		}, errBack);
	}

	/* Legacy code below! */
	else if (navigator.getUserMedia) { // Standard
		navigator.getUserMedia(mediaConfig, function (stream) {
			video.src = stream;
			video.play();
		}, errBack);
	} else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
		navigator.webkitGetUserMedia(mediaConfig, function (stream) {
			video.src = window.webkitURL.createObjectURL(stream);
			video.play();
		}, errBack);
	} else if (navigator.mozGetUserMedia) { // Mozilla-prefixed
		navigator.mozGetUserMedia(mediaConfig, function (stream) {
			video.src = window.URL.createObjectURL(stream);
			video.play();
		}, errBack);
	} 
	// Trigger photo take
	document.getElementById('snap').addEventListener('click', function () {
		$('#canvas').css('display', 'block');
		drawImageScaled(video, context);
		var image = document.getElementById('canvas').toDataURL("image/png");
		image = image.replace('data:image/png;base64,', '');
		$("#imageData").val(image);
	});
}, false);
function drawImageScaled(img, ctx) {
	var canvas = ctx.canvas;
	var hRatio = canvas.width / img.width;
	var vRatio = canvas.height / img.height;
	var ratio = Math.min(hRatio, vRatio);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(img, 0, 0, img.width * ratio, img.height * ratio);
}