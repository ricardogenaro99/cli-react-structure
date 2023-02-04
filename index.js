#!/usr/bin/env node
const path = require("path");
const inquirer = require("inquirer");
const shell = require("shelljs");
const { basic } = require("./templates");

const questions = [
	{
		type: "input",
		name: "project_name",
		message: "Project name:",
	},
	{
		type: "list",
		name: "react_template",
		message: "React template:",
		choices: [
			{
				value: "",
				name: "react",
			},
			{
				value: "--template typescript",
				name: "react-ts",
			},
		],
	},
];

inquirer.prompt(questions).then(({ project_name, react_template }) => {
	const create_react_app = `npx create-react-app ${project_name} ${react_template}`;
	shell.exec(create_react_app);

	shell.cd(project_name);

	shell.echo("Creating environment variables...");
	shell.touch(".env", ".env.development.local");

	shell.cd("src");

	const fileName = react_template ? "index.tsx" : "index.js";

	create_template(basic, shell.pwd().toString(), fileName);
});

const create_template = (arr, dir, fileName) => {
	arr.forEach((parent) => {
		const new_dir = path.join(dir, parent.name);
		shell.echo("Creating:", new_dir);
		shell[parent.comand](new_dir);

		if (parent.hasIndex) {
			const new_file = path.join(new_dir, fileName);
			shell.echo("Creating:", new_file);
			shell.touch(new_file);
		}

		if (parent.children && Array.isArray(parent.children)) {
			create_template(parent.children, path.join(new_dir), fileName);
		}
	});
};
