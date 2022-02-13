describe("10.7 Maps and Sets", () => {
	it("should return true or false if array contains a duplicate using hasDuplicate()", () => {
		expect(hasDuplicate([1,3,2,1])).toEqual(true)
		expect(hasDuplicate([1,5,-1,4])).toEqual(false)
	});

	it("should accept a string and returns a map where the keys are numbers and the values are the count of the vowels in the string using vowelCount()", () => {
		let awesome = vowelCount('awesome');
		expect(awesome.get('a')).toEqual(1);
		expect(awesome.get('w')).toEqual(undefined);
		expect(awesome.get('e')).toEqual(2);
		expect(awesome.get('s')).toEqual(undefined);
		expect(awesome.get('o')).toEqual(1);
		expect(awesome.get('m')).toEqual(undefined);
		let colt = vowelCount('Colt');
		expect(colt.get('c')).toEqual(undefined);
		expect(colt.get('o')).toEqual(1);
		expect(colt.get('l')).toEqual(undefined);
		expect(colt.get('t')).toEqual(undefined);
	})
})