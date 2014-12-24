var testutil = require('testutil')
  , ymd = require('../lib/ymd')

describe('+ ymd', function() {
  it('should return the UTC date string', function() {
    EQ (ymd.utc(new Date('2013-03-05')), '2013-03-05') //JS parses this input to Date() as utc, midnight
  })

  it('should return the date string', function() {
    EQ (ymd(new Date('2013-03-05 4:43 PM')), '2013-03-05')
  })
})

describe('+ ymd.parse', function() {

  it('should return the UTC date from string', function(){
    EQ (ymd.parse.utc('2013-03-05').valueOf, (Date.UTC(2013,3,5)).valueOf);  
  })

  it('should return the local date from string', function(){
    EQ (ymd.parse('2013-03-05').valueOf, (new Date(2013,3,5)).valueOf);  
  })

  it('should return the local date for yyyy-m-d string', function(){
    EQ (ymd.parse('2013-3-5').valueOf, (new Date(2013,3,5)).valueOf);  
  })

  it('should throw error if date format not yyyy-mm-dd', function(done){
    try      { ymd.parse('03/05/2013') }
    catch (e){ return done() }
    return done('failed');
  })
})
