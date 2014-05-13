var request = require('request')
  , validUrl =require('valid-url')
  ;

module.exports = function(uri, callback){

  if(!uri){
    return callback(new Error('Missing required param'), null);
  }

  if(!validUrl.isWebUri(uri)){
    return callback(new Error('Invalid uri'), null);
  }

  var start = new Date().getTime();

  request(uri, function(err, response, body){
    if(err){
      return callback(err, null);
    }

    var end = new Date().getTime()
      , ms = end - start
      , ret = JSON.stringify({"start":start,"end":end,"ms":ms})
      ;

    return callback(null, ret);

  });

};