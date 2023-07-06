module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    

    sass:{
      development: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          'dist/css/app.css' : 'src/scss/app.scss'
        }
      },
      production: {
        options:{
          outputStyle: 'compressed'
        },
        files:{
          'dist/css/app.css' : 'src/scss/app.scss'
        }
      }
    },

    uglify: {
      production: {
        files: {
          'dist/js/scripts.js' : ['src/javascripts/jquery/jquery.min.js', 'src/bootstrap-sass-3.3.6/assets/javascripts/bootstrap.js', 'src/javascripts/file-input/*.js', 'src/javascripts/custom/*.js']
        }
      },
      development: {
        options: {
          beautify: true, 
          mangle: false,
          compress: false,
          preserveComments: 'all'
        },
        files: {
          'dist/js/scripts.js' : ['src/javascripts/jquery/jquery.min.js', 'src/bootstrap-sass-3.3.6/assets/javascripts/bootstrap.js', 'src/javascripts/file-input/*.js', 'src/javascripts/custom/*.js']
        }
      }
    },

    watch: {
      css:{
        files: ['src/scss/*.scss', 'src/bootstrap-sass-3.3.6/assets/stylesheets/**/*.scss'],
        tasks: ['sass:development']
      },
      scripts:{
        files: 'src/javascripts/**/*.js',
        tasks: ['uglify:development']
      }
    }


    
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['sass:development', 'uglify:development']);
  grunt.registerTask('production', ['sass:production', 'uglify:production']);

};