
const worker = requre("../library/worker");

discribe("worker", () => {
    it("Can detect worker", () => {
        const e = new worker();
        expect(typeof(e)).toBe("object");
    });

    it("can set a name", () => {
        const name = "Nikola";
        const e = new worker(name);
        expect(e.name).toBe(name);
    });

    it("can set id", () => {
        const value = 100;
        const e = new worker("New", value);
        expect(e.id).toBE(value);
    });

    it("can set email", () => {
        const value = "nikola@test.com";
        const e = new worker("New", 1, value);
        expect(e.email).toBE(value);
    });

    describe("getName", () => {
        it("can get name via getName()", () => {
            const value = "Nikola";
            const e = new worker(value);
            expect(e.getName).toBe(value);
        });
    });

    describe("getId", () => {
        it("can get id via getId()", () => {
            const value = 100;
            const e = new worker("New", value);
            expect(e.getId).toBe(value);
        });
    });

    describe("getEmail", () => {
        it("can get email via getEmail()", () => {
            const value = "nikola@test.com";
            const e = new worker("New", 1, value);
            expect(e.getEmail).toBe(value);
        });
    });

    describe("getPosition", () => {
        it("getPosition() should return \"worker\"", () => {
            const value = "worker";
            const e = new worker("Nikola", 1, "nikola@test.com");
            expect(e.getPosition).toBe(value);
        });
    });
});