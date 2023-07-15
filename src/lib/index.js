export const quiz = [
	{
		id: 0,
		type: 'number',
		question: 'What is your current age'
	},
	{
		id: 1,
		question: 'Are you male or female?',
		type: 'radio',
		answers: [
			{
				id: 1,
				answer: 'Male',
				weight: -4
			},
			{
				id: 2,
				answer: 'Female',
				weight: 4
			}
		]
	},
	{
		id: 2,
		type: 'radio',
		question: 'Do you smoke?',
		answers: [
			{
				id: 1,
				answer: 'No',
				weight: 0
			},
			{
				id: 2,
				answer: 'Yes',
				weight: -10
			}
		]
	},
	{
		id: 3,
		type: 'radio',
		question: 'Do you have any pre-existing diseases?',
		answers: [
			{
				id: 1,
				answer: 'No',
				weight: 0
			},
			{
				id: 2,
				answer: 'Yes',
				weight: -10
			}
		]
	},
	{
		id: 4,
		type: 'radio',
		question: 'What continent do you live in?',
		answers: [
			{
				id: 1,
				answer: 'North America',
				weight: 79.5
			},
			{
				id: 2,
				answer: 'South America',
				weight: 75.44
			},
			{
				id: 3,
				answer: 'Australia',
				weight: 83.2
			},
			{
				id: 4,
				answer: 'Africa',
				weight: 64.11
			},
			{
				id: 5,
				answer: 'Europe',
				weight: 80.1
			},
			{
				id: 6,
				answer: 'Asia',
				weight: 79.2
			}
		]
	},
	{
		id: 5,
		question: 'Do you exercise regularly?',
		type: 'radio',
		answers: [
			{
				id: 1,
				answer: 'Yes',
				weight: 4
			},
			{
				id: 2,
				answer: 'No',
				weight: 0
			}
		]
	},
	{
		id: 6,
		question: 'What is your marital status?',
		type: 'radio',
		answers: [
			{
				id: 1,
				answer: 'Single',
				weight: -1
			},
			{
				id: 2,
				answer: 'Dating',
				weight: 5
			},
			{
				id: 3,
				answer: 'Married',
				weight: 5
			},
			{
				id: 4,
				answer: 'Divorced',
				weight: -5
			},
			{
				id: 5,
				answer: 'Widowed',
				weight: -5
			}
		]
	},
	{
		id: 7,
		question: 'What is your highest level of education?',
		type: 'radio',
		answers: [
			{
				id: 1,
				answer: 'High School',
				weight: 0
			},
			{
				id: 2,
				answer: 'Some College',
				weight: 1
			},
			{
				id: 3,
				answer: 'Bachelor`s Degree',
				weight: 2
			},
			{
				id: 4,
				answer: 'Masters',
				weight: 3
			},
			{
				id: 5,
				answer: 'Doctorate',
				weight: 4
			}
		]
	},
	{
		id: 8,
		question: 'Are you at a healthy weight?',
		type: 'radio',
		answers: [
			{
				id: 1,
				answer: 'Yes',
				weight: 0
			},
			{
				id: 2,
				answer: 'No',
				weight: -5
			}
		]
	}
];

export const sum = (factors) => {
	let sum = 0;
	for (let factor of factors) {
		sum += factor;
	}
	return sum;
};

export const getAge = (factors, currentAge) => {
	return sum(factors) - currentAge;
};
