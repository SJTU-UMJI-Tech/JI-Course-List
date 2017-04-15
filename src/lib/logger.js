/**
 * Created by liu on 17-4-15.
 */
const winston = require('winston');

module.exports = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            colorize: 'all'
        })
    ]
});
