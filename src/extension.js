// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

const pseudoizer = require("./pseudoizer");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "pseudo-localization.pseudolocalize",
    function () {
      const activeTextEditor = vscode.window.activeTextEditor;

      if (!activeTextEditor) {
        return;
      }

      activeTextEditor.edit((textEditorEdit) => {
        activeTextEditor.selections.forEach((selection) => {
          const selectedText = activeTextEditor.document.getText(selection);

          if (selectedText === "") {
            return;
          }

          try {
            textEditorEdit.replace(selection, pseudoizer(selectedText));
          } catch (e) {
            return;
          }
        });
      });
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
