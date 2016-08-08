var fs = require('fs');
var path = require('path');

module.exports = function(dir, extension, callback) {
	fs.readdir(dir, function(error, files) {
		if (error) {
			return callback(error)
		} else  {
			files = files.filter(function(file){
				if (path.extname(file) === '.' + extension)
					return true;
			})
			return callback(null, files);
		}
	})
}