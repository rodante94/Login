
var sinon = require("sinon");

var assert = require('chai').assert;

var expect = require('chai').expect;
const app = require("../src/validar-formulario");



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
        var result = app.validar("Rodrigo","De la O","Tapia","26");
        assert.equal(result,false);
    });
 });

 describe('validar', function () {
   
    it('Test validate method', function () {
        var spy = sinon.spy(validar);
        var Name = "Rodrigo",
        LastName = "De la O",
        SecondLastName = "Tapia",
        Edad = "26";
        var res = validar(Name, LastName, SecondLastName, Edad);
        sinon.assert.calledOnce(spy);
    });
 
    
 });