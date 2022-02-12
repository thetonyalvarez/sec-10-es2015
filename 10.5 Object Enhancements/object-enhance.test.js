describe("10.5 Object Enhancements", () => {
	it("should return noise when verb is executed", () => {
		const d = createAnimal("dog", "bark", "Woooof!");
		expect(d.bark()).toEqual("Woooof!");
		const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
		expect(s.bleet()).toEqual("BAAAAaaaa");
	});
});
