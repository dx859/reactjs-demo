const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');


const themePath = path.join('.', 'dd.less');
const theme = lessToJs(fs.readFileSync(themePath, 'utf8'));
console.log(theme)

