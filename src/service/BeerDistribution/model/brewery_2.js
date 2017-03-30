const data = [
	{
		"name": "Lagunitas",
		"pcs": 12,
		"client": "Mats",
		"prepaid": true
	},
	{
		"name": "Flensburger Radler",
		"pcs": 6,
		"client": "Carol",
		"prepaid": false
	}
]

module.exports.getAll = () => data;