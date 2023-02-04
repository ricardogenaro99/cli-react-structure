module.exports = [
	{
		name: "app",
		comand: "mkdir",
		children: [
			{
				name: "components",
				comand: "mkdir",
				hasIndex: true,
			},
			{
				name: "contexts",
				comand: "mkdir",
				hasIndex: true,
			},
			{
				name: "hooks",
				comand: "mkdir",
				hasIndex: true,
			},
			{
				name: "layouts",
				comand: "mkdir",
				hasIndex: true,
			},
			{
				name: "pages",
				comand: "mkdir",
				hasIndex: true,
			},
			{
				name: "routes",
				comand: "mkdir",
				hasIndex: true,
				children: [
					{
						name: "guards",
						comand: "mkdir",
						hasIndex: true,
					},
				],
			},
			{
				name: "utils",
				comand: "mkdir",
				hasIndex: true,
			},
			{
				name: "services",
				comand: "mkdir",
				hasIndex: true,
			},
		],
	},
	{
		name: "assets",
		comand: "mkdir",
		hasIndex: true,
	},
	{
		name: "environments",
		comand: "mkdir",
		hasIndex: true,
	},
];
