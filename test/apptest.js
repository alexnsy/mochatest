const assert = require('chai').assert;
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;

const app = require('../app');

//Results
sayHelloResult = app.sayHello();
addNumberResult = app.addNumbers(5,5);

describe('App', function(){

    describe('sayHello()', function() {

        it('app should return hello', function(){       
            assert.equal(sayHelloResult,'hello');
        });

        it('sayHello should return type string', function(){
            assert.typeOf(sayHelloResult, 'string');
        });
    });


    describe('addNumbers()', function() {

    it('addNumbers should be above 5', function() {
        assert.isAbove(addNumberResult, 5);
    });

    it('addNumbers should be a number', function() {  
        assert.typeOf(addNumberResult, 'number');
    });
  });

});