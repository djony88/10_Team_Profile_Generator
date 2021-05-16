const manager = require("../library/manger");

test("can set phone number", () => {
    const value = 100;
    const e = new manager("New", 1, "manager@test.com", value);
    expect(e.phoneNumber).toBe(value);
});

test("getPosition() should return \"manager\"", () => {
    const value = "manager";
    const e = new manager("New", 1, "manager@test.com", 100);
    expect(e.getPosition()).toBe(value);
});

test("Can get phone number via getPhoneNumber", () => {
    const value = 100;
    const e = new manager("New", 1, "manager@test.com", value);
    expect(e.getPhoneNumber()).toBe(value);
});