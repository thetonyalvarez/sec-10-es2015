describe("10.6 Destructuring", () => {
	it("should return statement with passed variables using getUserData()", () => {
		expect(getUserData({firstName: "Alejandro", favoriteColor: "purple"})).toEqual("Your name is Alejandro and you like purple"),
		expect(getUserData({firstName: "Melissa"})).toEqual("Your name is Melissa and you like green"),
		expect(getUserData({})).toEqual("Your name is undefined and you like green")
	});

	it("return an object with the keys first, second, third, and rest using raceResults()", () => {
		let results = raceResults(["Tom", "Margaret", "Allison", "David", "Pierre"]);
		expect(results).toEqual({first: "Tom", second: "Margaret", third: "Allison", rest: ["David", "Pierre"]})
	});
});