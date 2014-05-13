var request = require('request')
  , validUrl =require('valid-url')
  ;

module.exports = function(uri, callback){

  if(!uri){
    return callback(new Error('Missing required param'), null);
  }

  if(!validUrl.isUri(uri)){
    return callback(new Error('Invalid uri'), null);
  }


  return callback(null, 'bazooonga');

};