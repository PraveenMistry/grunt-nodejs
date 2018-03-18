module.exports = function(grunt) {

	grunt.initConfig({
		// basic settngs
		pkg:grunt.file.readJSON('package.json'),

		cssmin:{
			combine:{
				files:{
					'css/main.css':['css/content.css','css/style.css']
				}
			}
		},

		uglify:{
			combine:{
				files:{
					'js/script.js':['js/content.js']
				}
			}
		}

	});

	// load plugin
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask("default",['cssmin','uglify']);	


};