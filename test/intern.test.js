const intern = require ("../library/intern");

test("can set school", () => {
    const value = "New School of Something";
    const e = new intern("New", 1, "intern@test.com", value);
    expect(e.school).toBe(value);
});

test("getPosition() should return \"intern\"", () => {
    const value = "intern";
    const e = new intern("New", 1, "intern@test.com", "New School of Something");
    expect(e.getPosition).toBe(value);
});

test("can get school via getSchool()", () => {
    const value = "New School of Something";
    const e = new intern("New", 1, "intern@test.com", value);
    expect(e.getSchool).toBe(value);
});