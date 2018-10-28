import _ from 'lodash';

const env = process.env.NODE_ENV || 'development';
const defaultConfig = require('./config.json'); // eslint-disable-line
const customConfig = require(`./config.${env}.json`); // eslint-disable-line
const config = _.merge(defaultConfig, customConfig);

export default config;
