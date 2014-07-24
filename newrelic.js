var Config = require('Config');

exports.config = {
    app_name : [Config.heroku.app],
    license_key : Config.heroku.relic_key,
    logging : {
        level : 'info'
    }
};
