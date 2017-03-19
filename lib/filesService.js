app.service('filesService', function(){


	this.uploadImageToImgur = function(file, successCallback, failCallback){
		var fReader = new FileReader();
		fReader.onload = function(e){
			var imgData = e.target.result.substr(e.target.result.indexOf(",") + 1, e.target.result.length);
			$.ajax({
			    url: 'https://api.imgur.com/3/image',
			    type: 'post',
			    headers: {
			        Authorization: 'Client-ID dc7b0efb207b26d'
			    },
			    data: {
			        image: imgData,
			        type: 'base64'
			    },
			    success: function(response) {
			        successCallback(response.data.link);
			    },
			    error: function(){
			    	failCallback.apply(arguments);
			    }
			});
		}
		fReader.readAsDataURL(file);
	}
		
});