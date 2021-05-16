const Intern = require ("../library/intern");

test("can set school", () => {
    const value = "New School of Something";
    const e = new Intern("New", 1, "New School of Something", value);
    expect(e.school).toBe(value);
});

test("getPosition() should return \"intern\"", () => {
    const value = "Intern";
    const e = new Intern("New", 1, "intern@test.com", value);
    expect(e.getPosition()).toBe(value);
});

test("can get school via getSchool()", () => {
    const value = "New School of Something";
    const e = new Intern("New", 1, "New School of Something");
    expect(e.getSchool()).toBe(value);
});