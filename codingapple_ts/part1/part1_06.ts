function 클리닝함수(a: (number | string)[]) {
	let 클리닝: number[] = [];

	a.forEach((b) => {
		if (typeof b === "string") {
			클리닝.push(parseFloat(b));
		} else {
			클리닝.push(b);
		}
	});

	return 클리닝;
}

console.log(클리닝함수([123, "3"]));

function 과목체크함수(a: { subject: string | string[] }) {
	if (typeof a.subject === "string") {
		return a.subject;
	} else if (Array.isArray(a.subject)) {
		return a.subject[a.subject.length - 1];
	} else {
		return "없음";
	}
}

console.log(과목체크함수({ subject: ["science", "art", "korean"] }));
