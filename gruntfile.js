"use strict";

var coveralls = require('coveralls');

module.exports = function(grunt) {
    grunt.initConfig({
        clean: ['test/coverage'],

        mocha_istanbul: {
            default: {
                src: 'test/tests',
                options: {
                    require: ['test/tests/setup.js'],
                    mask: '**/*.spec.js',
                    coverageFolder: 'test/coverage',
                    reportFormats: ['text-summary','lcovonly'],
                    reporter: 'spec',
                    coverage:true,
                    root: 'bot',
                    check: {
                        lines: 95,
                        statements: 95,
                        functions: 95,
                        branches: 95
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mocha-istanbul');
    grunt.registerTask('test', ['clean', 'mocha_istanbul']);

    grunt.event.on('coverage', function(lcov, done){
        coveralls.handleInput(lcov, function(err){
            return err ? done(err) : done();
        });
    });
};
