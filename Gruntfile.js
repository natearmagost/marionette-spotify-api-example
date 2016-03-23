module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({
    config: {
      src: 'src',
      dist: 'dist'
    },
    clean: {
      dist: ['<%= config.dist %>']
    },
    copy: {
      lib: {
        expand: true,
        cwd: '<%= config.src %>/js/lib/',
        src: ['**/*.*'],
        dest: '<%= config.dist %>/js/lib/'
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
        src: ['**/css/*.*'],
        dest: '<%= config.dist %>/'
      }
    },
    coffeelint: {
      app: ['<%= config.src %>/coffee/**/*.coffee'],
      options: {
        configFile: 'coffeelint.json'
      }
    },
    coffee: {
      compile: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/coffee/',
          src: ['**/*.coffee'],
          dest: '<%= config.dist %>/js/',
          ext: '.js'
        }]
      }
    },
    execute: {
      target: {
        src: ['main.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-coffeelint');

  grunt.registerTask('default', [
    'clean',
    'copy',
    'coffeelint',
    'coffee',
    'execute'
  ]);

};