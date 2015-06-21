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
                    reportFormats: ['text-summary','lcovonly'],
                    reporter: 'spec',
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
};
