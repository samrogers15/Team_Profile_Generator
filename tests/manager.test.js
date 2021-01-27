// Write code to test the Manager class code to see if it works

const Manager = require('../lib/manager');
const Employee = require('../lib/employee');

describe("Manager", () => {
    describe("initialization", () => {
        it("should create a class of Manager with a name, id, email, and office number if provided those parameters", () => {
            const manager = new Manager("Jim", 1002, "Jim@unclesammy.com", 1);

            expect(manager.name).toEqual("Jim");
            expect(manager.id).toEqual(1002);
            expect(manager.email).toEqual("Jim@unclesammy.com");
            expect(manager.officeNumber).toEqual(1);
        })
    
        it("should throw an error if 'name' parameter is not a string", () => {
            const cb = () => new Manager(32, 1002, "Jim@unclesammy.com", 1);
            const err = new Error("Expected parameter 'name' to be a string");

            expect(cb).toThrowError(err);
        })

        it("should throw an error if 'id' parameter is not a number", () => {
            const cb = () => new Manager("Jim", "1002", "Jim@unclesammy.com", 1);
            const err = new Error("Expected parameter 'id' to be a number");

            expect(cb).toThrowError(err);
        })

        it("should throw an error if 'email' parameter is not a string", () => {
            const cb = () => new Manager("Jim", 1002, 55, 1);
            const err = new Error("Expected parameter 'email' to be a string");

            expect(cb).toThrowError(err);
        })

        it("should throw an error if 'officeNumber' parameter is not a number", () => {
            const cb = () => new Manager("Jim", 1002, "Jim@unclesammy.com", "1");
            const err = new Error("Expected parameter 'officeNumber' to be a number");

            expect(cb).toThrowError(err);
        })

    })

    describe("getName", () => {
        it("should return the 'name' parameter passed into the Manager class", () => {
            const manager = new Manager("Jim", 1002, "Jim@unclesammy.com", 1);
                      
            expect(manager.getName()).toBe("Jim");
        })
    })
    
    describe("getId", () => {
        it("should return the 'id' parameter passed into the Manager class", () => {
            const manager = new Manager("Jim", 1002, "Jim@unclesammy.com", 1);
                      
            expect(manager.getId()).toBe(1002);
        })
    })

    describe("getEmail", () => {
        it("should return the 'email' parameter passed into the Manager class", () => {
            const manager = new Manager("Jim", 1002, "Jim@unclesammy.com", 1);
                      
            expect(manager.getEmail()).toBe("Jim@unclesammy.com");
        })
    })

    describe("getOfficeNumber", () => {
        it("should return the 'officeNumber' parameter passed into the Manager class", () => {
            const manager = new Manager("Jim", 1002, "Jim@unclesammy.com", 1);
                      
            expect(manager.getOfficeNumber()).toBe(1);
        })
    })

    describe("getRole", () => {
        it("should return the 'role' parameter defined by the Manager class", () => {
            const manager = new Manager("Jim", 1002, "Jim@unclesammy.com", 1);
                      
            expect(manager.getRole()).toBe("Manager");
        })
    })
});