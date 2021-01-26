// Write code to test the Employee class code to see if it works

const { it, expect } = require('@jest/globals');
const { describe } = require('yargs');
// const jest = require('jest');
const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('initialization', () => {
        it('should create a class of Employee with a name, id, and email if provided those arguments', () => {
            const employee = new Employee('Frank', 1001, 'Frank@unclesammy.com');

            expect(Employee.name).toEqual('Frank');
            expect(Employee.id).toEqual(1001);
            expect(Employee.email).toEqual('Frank@unclesammy.com');
        })

        it('should throw an error if provided no arguments', () => {
            const cb = () => new Employee();
            const err = new Error('you must provide name, id, and email arguments into the Employee class');

            expect(cb).toThrowError(err);
        })
      
        it('should throw an error if not provided an id or email argument', () => {
            const cb = () => new Employee('Frank');
            const err = new Error('you must provide an id and email argument into the Employee class');

            expect(cb).toThrowError(err);
        })

        it('should throw an error if not provided an email argument', () => {
            const cb = () => new Employee('Frank', 1001);
            const err = new Error('you must provide an email argument into the Employee class');

            expect(cb).toThrowError(err);
        })

        it('should throw an error if the employee id argument is a string', () => {
            const cb = () => new Employee('Frank', '1001', 'Frank@unclesammy.com');
            const err = new Error('employee id must be a number and not a string');

            expect(cb).toThrowError(err);
        })
    })

    // describe('getName', () => {
    //     it('should return the name argument passed into the Employee class', () => {
    //         const employee = new Employee('Frank', 1001, 'Frank@unclesammy.com');
                        
    //         expect(employee.getName).toBe('Frank');
    //     })

    //     it('should throw an error if the function doesn\'t return the name passed into the Employee class', () => {
    //         const cb = () => new Employee('Frank', 1001, 'Frank@unclesammy.com');
    //         const err = new Error('Employee name is incorrect');

    //         expect(cb).toThrowError(err);
    //     })
    // } )
});