module.exports = function (grunt) {
    // Setup Task Timer
    require('time-grunt')(grunt);

    // Load all task configs
    require('load-grunt-config')(grunt, {
        loadGruntTasks: {
            scope: 'devDependencies'
        }
    });
};