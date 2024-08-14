// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { transformJSON2Typescript } from "./utils/transform"

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "json-to-ts-types" is now active!');


	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('json-to-ts-types.helloWorld', async () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		// 定义要写入剪贴板的内容
		const content = 'Hello, this is the content to copy!';

		try {
			// 获取当前活动的文本编辑器
			const editor = vscode.window.activeTextEditor;

			if (editor) {
				// 获取当前选中的文本
				const selection = editor.selection;
				const selectedText = editor.document.getText(selection);

				// 弹出一个信息框显示选中的文本
				vscode.window.showInformationMessage(`Selected Text: ${selectedText}`);
				const convertResult = await transformJSON2Typescript(selectedText);
				await vscode.env.clipboard.writeText(convertResult);

				// 弹出成功提示
				vscode.window.showInformationMessage('Content copied to clipboard successfully!');
			}
			// 写入剪贴板

		} catch (error) {
			console.error(error)
			// 处理错误
			vscode.window.showErrorMessage('Failed to copy content to clipboard.');
		}
		vscode.window.showInformationMessage('Hello World from json-to-ts-types!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
