describe("10.3 Arrow Functions", () => {
	it("should double all values in the array", () => {
		const arr = [1, 2, 3, 4];
		const doubledArr = [2, 4, 6, 8];
		expect(double(arr)).toEqual(doubledArr);
	});

	it("should return only even numbers from the returned array using squareAndFindEvens()", () => {
		const arr = [1, 2, 3, 4];
		const squaredArr = [1, 4, 9, 16];
		const evens = [4, 16];
		expect(squareAndFindEvens(arr)).toEqual(evens);
	});
});
