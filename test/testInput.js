var pagelt = require('../index')
  , assert = require('assert')
  ;

describe('pagelt - inputs', function(){

  it('Should throw if uri is not specified', function(done){

    var uri = false;

    pagelt(uri, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

  it('Should throw if uri is not valid', function(done){

    var uri = 'pysje';

    pagelt(uri, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Invalid uri/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

});