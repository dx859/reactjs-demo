const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');


const modify = path.join(__dirname, './src/lessTheme/modifyVars.less');
const global = path.join(__dirname, './src/lessTheme/globalVars.less');
const antd = path.join(__dirname, './src/lessTheme/antdModifyVars.less');


exports.modifyVars = lessToJs(fs.readFileSync(modify, 'utf8'));
exports.globalVars = lessToJs(fs.readFileSync(global, 'utf8'));
exports.antdModifyVars = lessToJs(fs.readFileSync(antd, 'utf8'));