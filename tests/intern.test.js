// Write code to test the Intern class code to see if it works

const Intern = require('../lib/intern');
const Employee = require('../lib/employee');

describe("Intern", () => {
    describe("initialization", () => {
        it("should create a class of Intern with a name, id, email, and school name if provided those parameters", () => {
            const intern = new Intern("Sebastian", 1004, "Sebastian@unclesammy.com", "Portland State University");

            expect(intern.name).toEqual("Sebastian");
            expect(intern.id).toEqual(1004);
            expect(intern.email).toEqual("Sebastian@unclesammy.com");
            expect(intern.school).toEqual("Portland State University");
        })
    
        it("should throw an error if 'name' parameter is not a string", () => {
            const cb = () => new Intern(775, 1004, "Sebastian@unclesammy.com", "Portland State University");
            const err = new Error("Expected parameter 'name' to be a string");

            expect(cb).toThrowError(err);
        })

        it("should throw an error if 'id' parameter is not a number", () => {
            const cb = () => new Intern("Sebastian", "1004", "Sebastian@unclesammy.com", "Portland State University");const err = new Error("Expected parameter 'id' to be a number");

            expect(cb).toThrowError(err);
        })

        it("should throw an error if 'email' parameter is not a string", () => {
            const cb = () => new Intern("Sebastian", 1004, 2750, "Portland State University");
            const err = new Error("Expected parameter 'email' to be a string");

            expect(cb).toThrowError(err);
        })

        it("should throw an error if 'school' parameter is not a string", () => {
            const cb = () => new Intern("Sebastian", 1004, "Sebastian@unclesammy.com", 8529);
            const err = new Error("Expected parameter 'school' to be a string");

            expect(cb).toThrowError(err);
        })

    })

    describe("getName", () => {
        it("should return the 'name' parameter passed into the Intern class", () => {
            const intern = new Intern("Sebastian", 1004, "Sebastian@unclesammy.com", "Portland State University");
                      
            expect(intern.getName()).toBe("Sebastian");
        })
    })
    
    describe("getId", () => {
        it("should return the 'id' parameter passed into the Intern class", () => {
            const intern = new Intern("Sebastian", 1004, "Sebastian@unclesammy.com", "Portland State University");
                      
            expect(intern.getId()).toBe(1004);
        })
    })

    describe("getEmail", () => {
        it("should return the 'email' parameter passed into the Intern class", () => {
            const intern = new Intern("Sebastian", 1004, "Sebastian@unclesammy.com", "Portland State University");
                      
            expect(intern.getEmail()).toBe("Sebastian@unclesammy.com");
        })
    })

    describe("getSchool", () => {
        it("should return the 'school' parameter passed into the Intern class", () => {
            const intern = new Intern("Sebastian", 1004, "Sebastian@unclesammy.com", "Portland State University");
                      
            expect(intern.getSchool()).toBe("Portland State University");
        })
    })

    describe("getRole", () => {
        it("should return the 'role' parameter defined by the Intern class", () => {
            const intern = new Intern("Sebastian", 1004, "Sebastian@unclesammy.com", "Portland State University");
                      
            expect(intern.getRole()).toBe("Intern");
        })
    })
});