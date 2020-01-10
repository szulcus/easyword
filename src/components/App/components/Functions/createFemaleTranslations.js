function femaleConditions(baseWord) {
	let female = baseWord.female;
	let translation1 = baseWord.translation1;
	if (translation1.includes('(')) {
		translation1 = translation1.replace(translation1.slice(translation1.indexOf('(')-1, translation1.indexOf(')') + 1), '')
	}
	let translation2 = baseWord.translation2;
	let translation3 = baseWord.translation3;
	let feminine_translation1 = undefined;
	let feminine_translation2 = undefined;
	let feminine_translation3 = undefined;
	let full_translation1 = undefined;
	let full_translation2 = undefined;
	let full_translation3 = undefined;
	
	if (baseWord.female !== undefined) {
		// female === 'yes'
		if (female === 'yes') {
			if (translation3 !== undefined) {
				full_translation1 = `${translation1}(a)`;
			full_translation2 = `${translation2}(a)`;
			full_translation3 = `${translation3}(a)`;
			feminine_translation1 = `${translation1.slice(0, -1)}a`;
			feminine_translation2 = `${translation2.slice(0, -1)}a`;
			feminine_translation3 = `${translation3.slice(0, -1)}a`;
		}
		else if (translation2 !== undefined) {
			full_translation1 = `${translation1}(a)`;
			full_translation2 = `${translation2}(a)`;
			feminine_translation1 = `${translation1.slice(0, -1)}a`;
			feminine_translation2 = `${translation2.slice(0, -1)}a`;
		}
		else {
			full_translation1 = `${translation1}(a)`;
			feminine_translation1 = `${translation1.slice(0, -1)}a`;
		}
		// console.log(full_translation1);
		// console.log(full_translation2);
		// console.log(full_translation3);
		// console.log(feminine_translation1);
		// console.log(feminine_translation2);
		// console.log(feminine_translation3);
	}
		// female === `first t2`|| `second t2`...
		else if (female.includes('first') || female.includes('second')) {
			const howMuch = parseInt(female.slice(0, female.indexOf('-')));
			const what = female.slice(female.indexOf('-') + 1, female.indexOf(' '));
			if (female.includes('first')) {
				if (female.includes('t1')) {
					full_translation1 = `${translation1.slice(0, translation1.indexOf(' '))}(${what})${translation1.substring(translation1.indexOf(' '))}`;
					feminine_translation1 = `${translation1.slice(0, translation1.indexOf(' ') - howMuch)}${what}${translation1.substring(translation1.indexOf(' '))}`;
				}
				if (female.includes('t2')) {
					full_translation2 = `${translation2.slice(0, translation2.indexOf(' '))}(${what})${translation2.substring(translation2.indexOf(' '))}`;
					feminine_translation2 = `${translation2.slice(0, translation2.indexOf(' ') - howMuch)}${what}${translation2.substring(translation2.indexOf(' '))}`;
				}
				if (female.includes('t3')) {
					full_translation3 = `${translation3.slice(0, translation3.indexOf(' '))}(${what})${translation3.substring(translation3.indexOf(' '))}`;
					feminine_translation3 = `${translation3.slice(0, translation3.indexOf(' ') - howMuch)}${what}${translation3.substring(translation3.indexOf(' '))}`;
				}
			}
			else if (female.includes('second')) {
				if (howMuch === 0) {
					if (female.includes('t1')) {
						full_translation1 = `${translation1.replace(translation1.split(' ')[1], `${translation1.split(' ')[1]}(${what})`)}`;
						feminine_translation1 = `${translation1.replace(translation1.split(' ')[1], `${translation1.split(' ')[1]}${what}`)}`;
					}
					if (female.includes('t2')) {
						full_translation2 = `${translation2.replace(translation2.split(' ')[1], `${translation2.split(' ')[1]}(${what})`)}`;
						feminine_translation2 = `${translation2.replace(translation2.split(' ')[1], `${translation2.split(' ')[1]}${what}`)}`;
					}
					if (female.includes('t3')) {
						full_translation3 = `${translation3.replace(translation3.split(' ')[1], `${translation3.split(' ')[1]}(${what})`)}`;
						feminine_translation3 = `${translation3.replace(translation3.split(' ')[1], `${translation3.split(' ')[1]}${what}`)}`;
					}
				}
				else {
					if (female.includes('t1')) {
						full_translation1 = `${translation1.replace(translation1.split(' ')[1], `${translation1.split(' ')[1]}(${what})`)}`;
						feminine_translation1 = `${translation1.replace(translation1.split(' ')[1], `${translation1.split(' ')[1].slice(0, -howMuch)}${what}`)}`;
					}
					if (female.includes('t2')) {
						full_translation2 = `${translation2.replace(translation2.split(' ')[1], `${translation2.split(' ')[1]}(${what})`)}`;
						feminine_translation2 = `${translation2.replace(translation2.split(' ')[1], `${translation2.split(' ')[1].slice(0, -howMuch)}${what}`)}`;
					}
					if (female.includes('t3')) {
						full_translation3 = `${translation3.replace(translation3.split(' ')[1], `${translation3.split(' ')[1]}(${what})`)}`;
						feminine_translation3 = `${translation3.replace(translation3.split(' ')[1], `${translation3.split(' ')[1].slice(0, -howMuch)}${what}`)}`;
					}
				}
			}
			// console.log(full_translation1);
			// console.log(feminine_translation1);
			// console.log(full_translation2);
			// console.log(feminine_translation2);
			// console.log(full_translation3);
			// console.log(feminine_translation3);
		}
		// female === `t1`/`t2`/`t1+t2`...
		else if (female.indexOf('t') === 0) {
			if (female.slice(0, 2) === `t1`) {
				full_translation1 = `${translation1}(a)`;
				feminine_translation1 = `${translation1.slice(0, -1)}a`;
			}
			else if (female.slice(0, 2) === `t2`) {
				full_translation2 = `${translation2}(a)`;
				feminine_translation2 = `${translation2.slice(0, -1)}a`;
			}
			else if (female.slice(0, 2) === `t3`) {
				full_translation3 = `${translation3}(a)`;
				feminine_translation3 = `${translation3.slice(0, -1)}a`;
			}
			else if (female.slice(0, 5) === `t1+t2`) {
				full_translation1 = `${translation1}(a)`;
				full_translation2 = `${translation2}(a)`;
				feminine_translation1 = `${translation1.slice(0, -1)}a`;
				feminine_translation2 = `${translation2.slice(0, -1)}a`;
			}
			else if (female.slice(0, 5) === `t1+t3`) {
				full_translation1 = `${translation1}(a)`;
				full_translation3 = `${translation3}(a)`;
				feminine_translation1 = `${translation1.slice(0, -1)}a`;
				feminine_translation3 = `${translation3.slice(0, -1)}a`;
			}
			// console.log(full_translation1);
			// console.log(full_translation2);
			// console.log(full_translation3);
			// console.log(feminine_translation1);
			// console.log(feminine_translation2);
			// console.log(feminine_translation3);
		}
		// female === `0-czka`/`1-czka`/`2-czka`...
		else if (female.includes('-')) {
			const howMuch = parseInt(baseWord.female.slice(0, female.indexOf('-')));
			if (female.includes(' in ') === false) {
				const what = female.substring(female.indexOf('-') + 1);
				full_translation1 = `${translation1}(${what})`;
				feminine_translation1 = `${translation1.slice(0, -howMuch)}${what}`;
				// console.log(full_translation1);
				// console.log(feminine_translation1);
				// console.log(what);
			}
			else {
				if (female.includes('first')) {
					const what = female.slice(female.indexOf('-') + 1, female.indexOf(' '));
					if (howMuch !== 0) {
						full_translation1 = `${translation1.slice(0, translation1.indexOf(' ') - howMuch)}(${what})${translation1.substring(translation1.indexOf(' '))}`;
						feminine_translation1 = `${translation1.slice(0, translation1.indexOf(' ') - howMuch)}${what}${translation1.substring(translation1.indexOf(' '))}`;
					}
					else {
						full_translation1 = `${translation1.slice(0, translation1.indexOf(' '))}(${what})${translation1.substring(translation1.indexOf(' '))}`;
						feminine_translation1 = `${translation1.slice(0, translation1.indexOf(' '))}${what}${translation1.substring(translation1.indexOf(' '))}`;
					}
					// console.log(what);
				}
				else if (female.includes('second')) {
					const what = female.slice(female.indexOf('-') + 1, female.indexOf(' '));
					if (howMuch !== 0) {
						full_translation2 = `${translation2.slice(0, translation2.indexOf(' ') - howMuch)}(${what})${translation2.substring(translation2.indexOf(' '))}`;
						feminine_translation2 = `${translation2.slice(0, translation2.indexOf(' ') - howMuch)}${what}${translation2.substring(translation2.indexOf(' '))}`;
					}
					else {
						full_translation2 = `${translation2.slice(0, translation2.indexOf(' '))}(${what})${translation2.substring(translation2.indexOf(' '))}`;
						feminine_translation2 = `${translation2.slice(0, translation2.indexOf(' '))}${what}${translation2.substring(translation2.indexOf(' '))}`;
					}
					// console.log(what);
				}
				// console.log(full_translation1);
				// console.log(feminine_translation1);
			}
			// console.log(howMuch);
		}
	}
	return {
		full_translation1,
		full_translation2,
		full_translation3,
		feminine_translation1,
		feminine_translation2,
		feminine_translation3
	}
}

export default femaleConditions