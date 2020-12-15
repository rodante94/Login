
var sinon = require("sinon");

var assert = require('chai').assert;

var expect = require('chai').expect;
var formulario = require('../src/validar-formulario');



 function validar(Name, LastName, SecondLastName, Edad){
    var name =  Name;
    var lastName = LastName;
    var secondLastName = SecondLastName;
    var edad = Edad;
    if (name == "" || lastName == "" || secondLastName == "" || edad == "")
    {
        return false;
        
    }
    else
    {
        return true;
        
    }
    
}
describe('String', function () {
    let name = 'BBVA';
    it('should be of type string', function () {
        expect(name).to.be.a('string');
    });
 
    it('should be type string 2', function () {
        var result = formulario.fnValidar("Rodrigo","De la O","Tapia","26");
        assert.equal(result,true);
    });
 });

 describe('validar', function () {
   
    it('Test validate method', function () {
    //    var date = new Date();
        var spy = sinon.spy();

  //  spy(1, 2, date);

//    spy.lastCall.lastArg === date;

        var Name = "Rodrigo",
        LastName = "De la O",
        SecondLastName = "Tapia",
        Edad = "26";
        spy(formulario.fnValidar(Name, LastName, SecondLastName, Edad));
        
        //var res = validar(Name, LastName, SecondLastName, Edad);
        
        sinon.assert.calledOnce(spy);
    });
 
    
 });