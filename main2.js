document.getElementById('img').addEventListener('change',function (e) {
	console.log(e.target.files[0]);

	var fileReader = new FileReader();

	fileReader.onloadend = function (event) {
		
		var img = document.createElement('img');
		img.src = fileReader.result;

		document.getElementById('test').appendChild(img);

	}

	fileReader.readAsDataURL(e.target.files[0])
});