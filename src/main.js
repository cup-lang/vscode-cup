const vscode = require('vscode');

function activate (context) {
	const run = vscode.commands.registerCommand('cup.run', () => {
	});
	const build = vscode.commands.registerCommand('cup.build', () => {
	});
	const check = vscode.commands.registerCommand('cup.check', () => {
	});
	const add = vscode.commands.registerCommand('cup.add', dependency => {
	});
	const del = vscode.commands.registerCommand('cup.delete', dependency => {
	});
	const update = vscode.commands.registerCommand('cup.update', dependency => {
	});

	context.subscriptions.push(run);
	context.subscriptions.push(build);
	context.subscriptions.push(check);
	context.subscriptions.push(add);
	context.subscriptions.push(del);
	context.subscriptions.push(update);
}

module.exports = { activate };