describe("10.4 Rest and Spread", () => {
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

	it("should remove one less item than the original array when removeRandom() is run", () => {
		const items = ["a", 1, 2, "b"];
		const returnedItems = removeRandom(items);
		expect(returnedItems.length).toEqual(items.length - 1);
	});

	it("should new combined array from 2 separate arrays using extend()", () => {
		const arr1 = [1, 2, 3];
		const arr2 = [4, 5, 6];
		expect(extend(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6]);
		const arr3 = [12, "ride", 44];
		const arr4 = ["ball", "kick", "toy"];
		expect(extend(arr3, arr4)).toEqual([
			12,
			"ride",
			44,
			"ball",
			"kick",
			"toy",
		]);
	});

	it("should add a new key/value pair to a newly created obj using addKeyVal()", () => {
		const obj = { name: "Tony", age: 34 };
		const key = "role";
		const val = "data";
		expect(addKeyVal(obj, key, val)).toEqual({
			name: "Tony",
			age: 34,
			role: "data",
		});
	});

	it("should remove a key from a newly created obj using removeKey()", () => {
		const obj = { name: "Tony", age: 34, role: "data" };
		const key = "role";
		expect(removeKey(obj, key)).toEqual({
			name: "Tony",
			age: 34,
		});
	});

	it("should combine 2 objects into 1 new one using combine()", () => {
		const obj1 = { name: "Tony", age: 34, role: "data" };
		const obj2 = { location: "los angeles", weather: "sunny" };
		expect(combine(obj1, obj2)).toEqual({
			name: "Tony",
			age: 34,
			role: "data",
			location: "los angeles",
			weather: "sunny",
		});
	});

	it("should return a new object with a modified key/value using update()", () => {
		const obj1 = { name: "Tony", age: 34, role: "data" };
		const key = "role";
		const val = "director";
		expect(update(obj1, "role", "director")).toEqual({
			name: "Tony",
			age: 34,
			role: "director",
		});
	});
});
