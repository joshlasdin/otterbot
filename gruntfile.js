"use strict";

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
                    reportFormats: ['text','lcovonly'],
                    reporter: 'spec',
                    coverage:true,
                    root: 'bot',
                    check: {
                        statements: 25,
                        branches: 25,
                        functions: 25,
                        lines: 25
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mocha-istanbul');
    grunt.registerTask('test', ['clean', 'mocha_istanbul']);
};
