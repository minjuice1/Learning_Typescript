function Part1_05() {
	function 자기소개(이름: string): void {
		if (이름) {
			console.log("안녕하세요", 이름);
		} else {
			console.log("이름이 없습니다");
		}
	}

	function 자릿수세기(x: number | string): number {
		return x.toString().length;
	}

	function 결혼가능(
		월소득: number,
		집보유여부: boolean,
		매력점수: string,
	): string | void {
		let 점수: number = 0;
		점수 += 월소득;

		if (집보유여부) {
			점수 += 500;
		}
		if (매력점수 === "상") {
			점수 += 100;
		}
		if (점수 >= 600) {
			return "결혼가능";
		}
	}
}
