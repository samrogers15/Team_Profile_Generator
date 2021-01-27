// Write code to test the Employee class code to see if it works

const Employee = require('../lib/employee');

describe("Employee", () => {
    describe("initialization", () => {
        it("should create a class of Employee with a name, id, and email if provided those parameters", () => {
            const employee = new Employee("Frank", 1001, "Frank@unclesammy.com");

            expect(employee.name).toEqual("Frank");
            expect(employee.id).toEqual(1001);
            expect(employee.email).toEqual("Frank@unclesammy.com");
        })
        
        it("should throw an error if 'name' parameter is not a string", () => {
            const cb = () => new Employee(25, 1001, "Frank@unclesammy.com");
            const err = new Error("Expected parameter 'name' to be a string");

            expect(cb).toThrowError(err);
        })

        it("should throw an error if 'id' parameter is not a number", () => {
            const cb = () => new Employee("Frank", "1001", "Frank@unclesammy.com");
            const err = new Error("Expected parameter 'id' to be a number");

            expect(cb).toThrowError(err);
        })

        it("should throw an error if 'email' parameter is not a string", () => {
            const cb = () => new Employee("Frank", 1001, 25);
            const err = new Error("Expected parameter 'email' to be a string");

            expect(cb).toThrowError(err);
        })

    })

    describe("getName", () => {
        it("should return the 'name' parameter passed into the Employee class", () => {
            const employee = new Employee("Frank", 1001, "Frank@unclesammy.com");
                      
            expect(employee.getName()).toBe("Frank");
        })
    })
    
    describe("getId", () => {
        it("should return the 'id' parameter passed into the Employee class", () => {
            const employee = new Employee("Frank", 1001, "Frank@unclesammy.com");
                      
            expect(employee.getId()).toBe(1001);
        })
    })

    describe("getEmail", () => {
        it("should return the 'email' parameter passed into the Employee class", () => {
            const employee = new Employee("Frank", 1001, "Frank@unclesammy.com");
                      
            expect(employee.getEmail()).toBe("Frank@unclesammy.com");
        })
    })

    describe("getRole", () => {
        it("should return the 'role' parameter defined by the Employee class", () => {
            const employee = new Employee("Frank", 1001, "Frank@unclesammy.com");
                      
            expect(employee.getRole()).toBe("Employee");
        })
    })
});