const engineer = require("..//library/engineer");

test("can set GitHub", () => {
    const value = "GitHub";
    const e = new engineer("New", 1, "engineer@test.com", value);
    expect(e.GitHub).toBe(value);
});

test("getPosition() should return \"engineer\"", () => {
    const value = "engineer";
    const e = new engineer("New", 1, "engineer@test.com", "GitHub");
    expect(e.getPosition()).toBe(value);
});

test("Get GitHub user name", () => {
    const value = "GitHubProfile";
    const e = new engineer("New", 1, "engineer@test.com", value);
    expect(e.getGitHub()).toBe(value);
});