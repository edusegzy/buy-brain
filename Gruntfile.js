module.exports = function(grunt) {
    // some grunt module names don't follow CamelCase convention
    // jscs:disable

    'use strict';

    var path = require('path');

    // Load plugins
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Config tasks and options
    grunt.initConfig({
        pkg: grunt.fle.readJSON('package.json'),
        express: {
            droplet: {
                options: {
                    port: 80,
                    bases: path.resolve(__dirname, 'index.html'),
                }
            }
        }
    });

    // Register tasks
    grunt.registerTask('makeLive', ['express:droplet']);
};
