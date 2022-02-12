describe("Rest and Spread", () => {
	it("should filter out odd numbers from an array", () => {
		expect(filterOutOdds([1, 2, 3, 4])).toEqual([2, 4]);
	});

	it("should find the minimum value in an array", () => {
		expect(findMin(1, 4, 12, -3)).toEqual(-3);
		expect(findMin(1, -1)).toEqual(-1);
		expect(findMin(3, 1)).toEqual(1);
	});

	it("should return a new object that contains all the keys & values of all objects passed into the function", () => {
		expect(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })).toEqual({
			a: 1,
			b: 2,
			c: 3,
			d: 4,
		});
	});

	it("should return the original array with all the additional arguments doubled", () => {
		expect(doubleAndReturnArgs([1, 2, 3], 4, 4)).toEqual([1, 2, 3, 8, 8]);
		expect(doubleAndReturnArgs([2], 10, 4)).toEqual([2, 20, 8]);
	});

	it("should remove a random element in the items array and return a new array without that item", () => {
		const items = ["a", 1, 2, "b"];
		removeRandom(items)
		// expect(removeRandom(items).length).toEqual(
		// 	removeRandom(items).length - 1
		// );
	});
});
