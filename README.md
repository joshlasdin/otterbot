# Otterbot [![Build Status](https://travis-ci.org/joshlasdin/otterbot.svg?branch=master)](https://travis-ci.org/joshlasdin/otterbot) [![Coverage Status](https://coveralls.io/repos/joshlasdin/otterbot/badge.svg)](https://coveralls.io/r/joshlasdin/otterbot)

A loveable little chat bot for IndieAndSuch on Plug.dj

## Getting Started

```
$ npm install
```

## Development

Otterbot uses a series of environment variables that will need to be set in order for both the Plug.dj & LastFm APIs to work properly. If you would like the variables for otterbot specifically, please contact me, but here's the list them:

* `auth_email` Account email for plug.dj
* `auth_password` Account password for plug.dj
* `lastfm_api_key` API key for LastFm
* `lastfm_secret` Secret key for LastFm
* `lastfm_user` Username on LastFm
* `lastfm_token` LastFm authentication token. This is only needed if you do not already have a `session_key`. Bot will run `lastfm.authentication` using this token and log the session key out to the console, which should be stored in the variable listed below
* `lastfm_session_key` LastFm session key. This is required for making scrobble calls.

To run otterbot locally, simply start up the node process:

```
$ node index.js
```

## Testing

Mocha tests are run through grunt to generate istanbul coverage data. You can view the test output with the following terminal command:


```
$ grunt mocha_istanbul
```

## Contributing

To contribute a change or feature to otterbot, please fork the repository and submit your changes via Pull Request. New features should be tested with at least 95% coverage. If you have any quetions, please feel free to open an issue here on Github.