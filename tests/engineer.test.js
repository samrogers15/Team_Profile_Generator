// Write code to test the Engineer class code to see if it works

const Engineer = require('../lib/engineer');
const Employee = require('../lib/employee');

describe("Engineer", () => {
    describe("initialization", () => {
        it("should create a class of Engineer with a name, id, email, and gitHub account if provided those parameters", () => {
            const engineer = new Engineer("Viacheslav", 1003, "Viacheslav@unclesammy.com", "ViacheslavRedWingsGreat");

            expect(engineer.name).toEqual("Viacheslav");
            expect(engineer.id).toEqual(1003);
            expect(engineer.email).toEqual("Viacheslav@unclesammy.com");
            expect(engineer.gitHub).toEqual("ViacheslavRedWingsGreat");
        })
    
        it("should throw an error if 'name' parameter is not a string", () => {
            const cb = () => new Engineer(5250, 1003, "Viacheslav@unclesammy.com", "ViacheslavRedWingsGreat");
            const err = new Error("Expected parameter 'name' to be a string");

            expect(cb).toThrowError(err);
        })

        it("should throw an error if 'id' parameter is not a number", () => {
            const cb = () => new Engineer("Viacheslav", "1003", "Viacheslav@unclesammy.com", "ViacheslavRedWingsGreat");            const err = new Error("Expected parameter 'id' to be a number");

            expect(cb).toThrowError(err);
        })

        it("should throw an error if 'email' parameter is not a string", () => {
            const cb = () => new Engineer("Viacheslav", 1003, 75, "ViacheslavRedWingsGreat");
            const err = new Error("Expected parameter 'email' to be a string");

            expect(cb).toThrowError(err);
        })

        it("should throw an error if 'gitHub' parameter is not a string", () => {
            const cb = () => new Engineer("Viacheslav", 1003, "Viacheslav@unclesammy.com", 75);
            const err = new Error("Expected parameter 'gitHub' to be a string");

            expect(cb).toThrowError(err);
        })

    })

    describe("getName", () => {
        it("should return the 'name' parameter passed into the Engineer class", () => {
            const engineer = new Engineer("Viacheslav", 1003, "Viacheslav@unclesammy.com", "ViacheslavRedWingsGreat");
                      
            expect(engineer.getName()).toBe("Viacheslav");
        })
    })
    
    describe("getId", () => {
        it("should return the 'id' parameter passed into the Engineer class", () => {
            const engineer = new Engineer("Viacheslav", 1003, "Viacheslav@unclesammy.com", "ViacheslavRedWingsGreat");
                      
            expect(engineer.getId()).toBe(1003);
        })
    })

    describe("getEmail", () => {
        it("should return the 'email' parameter passed into the Engineer class", () => {
            const engineer = new Engineer("Viacheslav", 1003, "Viacheslav@unclesammy.com", "ViacheslavRedWingsGreat");
                      
            expect(engineer.getEmail()).toBe("Viacheslav@unclesammy.com");
        })
    })

    describe("getGitHub", () => {
        it("should return the 'gitHub' parameter passed into the Engineer class", () => {
            const engineer = new Engineer("Viacheslav", 1003, "Viacheslav@unclesammy.com", "ViacheslavRedWingsGreat");
                      
            expect(engineer.getGitHub()).toBe("ViacheslavRedWingsGreat");
        })
    })

    describe("getRole", () => {
        it("should return the 'role' parameter defined by the Engineer class", () => {
            const engineer = new Engineer("Viacheslav", 1003, "Viacheslav@unclesammy.com", "ViacheslavRedWingsGreat");
                      
            expect(engineer.getRole()).toBe("Engineer");
        })
    })
});