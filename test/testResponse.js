var pagelt = require('../index')
  , assert = require('assert')
  ;

describe('pagelt - response', function(){

  it('Should return a data object', function(done){

    var uri = 'http://www.google.com';

    pagelt(uri, function(err, data){
      if(err){
        throw err;
      }

      assert(data.start);

      assert(data.end);

      assert(data.ms);

      done();
    });

  });

});