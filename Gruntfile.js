module.exports = function(grunt) {
    // some grunt module names don't follow CamelCase convention
    // jscs:disable

    'use strict';

    var path = require('path');

    // Load plugins
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Config tasks and options
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express: {
            droplet: {
                options: {
                    port: 8080,
                    bases: path.resolve(__dirname, 'src'),
                }
            }
        }
    });

    // Register tasks
    grunt.registerTask('makeLive', ['express:droplet', 'express-keepalive']);
    grunt.registerTask('default', []);
};
