const Manager = require("../library/manger");

test("can set phone number", () => {
    const value = 100;
    const e = new Manager("New", 1, 100, value);
    expect(e.officeNumber).toBe(value);
});

test("getPosition() should return \"manager\"", () => {
    const value = "Manager";
    const e = new Manager("New", 1, "manager@test.com", value);
    expect(e.getPosition()).toBe(value);
});

// test("Can get phone number via getPhoneNumber", () => {
//     const value = 100;
//     const e = new Manager("New", 1, "manager@test.com", value);
//     expect(e.officeNumber).toBe(value);
// });