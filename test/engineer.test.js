const Engineer = require("..//library/engineer");

test("can set GitHub", () => {
    const value = "GitHub";
    const e = new Engineer("New", 1, "GitHub", value);
    expect(e.GitHub).toBe(value);
});

test("getPosition() should return \"engineer\"", () => {
    const value = "Engineer";
    const e = new Engineer("New", 1, "engineer@test.com", value);
    expect(e.getPosition()).toBe(value);
});

test("Get GitHub user name", () => {
    const value = "GitHubProfile";
    const e = new Engineer("New", 1, "GitHubProfile", value);
    expect(e.getGitHub()).toBe(value);
});