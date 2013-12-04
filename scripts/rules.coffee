# Description:
#   Make sure that hubot knows the rules.
#
# Commands:
#   hubot the rules - Make sure hubot still knows the rules.
#
# Notes:
#   DON'T DELETE THIS SCRIPT! ALL ROBAWTS MUST KNOW THE RULES

module.exports = (robot) ->
  robot.hear /rules$/i, (msg) ->
    msg.reply 'There\'s only one rule here: NO HOLDS BARRED.'