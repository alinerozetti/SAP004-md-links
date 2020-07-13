const readFile = require("./readFile.js");
const validate = require('./validate.js');
const stats = require('./stats.js');

const verifyParams = (path, params) => {
    if(params.includes('--validate') && !params.includes('--stats')){
        readFile(path).then((result) =>{
            validate(result).then((urls) => {
                console.log(urls);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }
    else if (!params.includes('--validate') && params.includes('--stats')){
        readFile(path).then((result) =>{
            console.log(stats(result, false));
        })
    }
    else if (params.includes('--validate') && params.includes('--stats')){
        readFile(path).then((result) =>{
            validate(result).then((urls) => {
                console.log(stats(urls, true));
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }
    else {
        readFile(path).then((result) =>{
            console.log(result);
        })
        .catch((err) => console.log(err));
    }
    
}    

  module.exports = verifyParams;
  