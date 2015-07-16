var _ = require('lodash');

module.exports = {
    matchString: function (type, pattern, str) {
        var match, 
            tests = [],
            compare = str.toLowerCase();
        
        // 'exact', 'contains', and 'contains each'
        switch (type) {
            case 'exact':
                if (_.isArray(pattern)) {
                    match = _.contains(pattern, compare);
                } else {
                    match = pattern === compare;
                }
                break;
                
            case 'contains':
                if (_.isArray(pattern)) {
                    _.each(pattern, function (piece) {
                        tests.push(compare.indexOf(piece) !== -1);
                    });
                    match = _.contains(tests, true);
                } else {
                    match = compare.indexOf(pattern) !== -1;
                }
                break;
                
            case 'contains each':
                _.each(pattern, function (piece) {
                    tests.push(compare.indexOf(piece) !== -1);
                });
                
                match = !_.contains(tests, false);
                break;
        }
        
        return match;
    },
    randomElement: function(array) {
        return array[_.random(array.length - 1)];
    }
};
