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
				id: 0,
				answer: 'Male',
				weight: -4
			},
			{
				id: 1,
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
				id: 0,
				answer: 'No',
				weight: 0
			},
			{
				id: 1,
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
				id: 0,
				answer: 'No',
				weight: 0
			},
			{
				id: 1,
				answer: 'Yes',
				weight: -10
			}
		]
	}
];

export const getAge = () => {};
