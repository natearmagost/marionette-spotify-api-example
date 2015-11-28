module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({
    config: {
      src: 'src',
      dist: 'dist'
    },
    jshint: {
      options: {
        strict: true,
        curly: true,
        eqeqeq: true,
        undef: true,
        unused: true,
        // es3: true,
        esnext: true,
        forin: true,
        noempty: true,
        indent: 2,
        browser: true,
        globals: {
          module: true,
          jQuery: true,
          define: true,
          require: true,
          console: true
        }
      },
      uses_defaults: [
        'Gruntfile.js',
        '<%= config.src %>/js/**/*.js',
        '!<%= config.src %>/js/lib/**'
      ]
    },
    clean: {
      dist: ['<%= config.dist %>']
    },
    copy: {
      lib: {
        expand: true,
        cwd: '<%= config.src %>/js/lib/',
        src: ['**/*.js'],
        dest: '<%= config.dist %>/js/lib/'
      },
      js: {
        expand: true,
        cwd: '<%= config.src %>/',
        src: ['**/*.js', '!**/js/lib/**/*.*'],
        dest: '<%= config.dist %>/'
      },
      templates: {
        expand: true,
        cwd: '<%= config.src %>/',
        src: ['**/templates/**/*.html'],
        dest: '<%= config.dist %>/'
      },
      images: {
        expand: true,
        cwd: '<%= config.src %>/',
        src: ['**/images/**/*.*'],
        dest: '<%= config.dist %>/'
      },
      html: {
        expand: true,
        cwd: '<%= config.src %>/',
        src: ['**/*.html', '!**/templates/**/*.html'],
        dest: '<%= config.dist %>/'
      },
      css: {
        expand: true,
        cwd: '<%= config.src %>/',
        src: ['**/*.css'],
        dest: '<%= config.dist %>/'
      }
    },
    coffee: {
      compile: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/js/',
          src: ['**/*.coffee'],
          dest: '<%= config.dist %>/js/',
          ext: '.js'
        }]
      }
    },
    execute: {
      target: {
        src: ['app.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-execute');

  grunt.registerTask('default', [
    'jshint',
    'clean',
    'copy',
    'coffee',
    'execute'
  ]);

};