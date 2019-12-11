Visual Studio Online Quickstart Sample
======================================

This is a sample project that supports the Visual Studio Online quickstart documentation. It can be used for either the [browser based quickstart](https://aka.ms/vso-docs/quickstart/browser) or the [Visual Studio Code based quickstart](https://aka.ms/vso-docs/quickstart/vscode).

To make this file easier to read, press [`ctrl`]+[`shift`]+[`V`].

This repository has been cloned into your VS Online cloud-hosted environment. You're able to work with it like you would any local code. Some things to try:

Terminal: 
---------

1. Press [`ctrl`]+[`shift`]+[`backtick`] to open a new terminal
2. From the terminal run `node --version`
   > Note: Node.js may or may not be installed on your local machine, yet you're able to use it because it's been automatically added to this environment!
3. Type other Linux commands (`uname`, `ls`, etc.) to interact with the underlying environment

Browse Files:
-------------

1. Notice that `node_modules` are in the File Explorer
   > Note: VS Online automatically performed an `npm install` so you can be instantly productive!
2.  Open files to see syntax highlighting

Edit code:
----------

1. Open `server.js`
   > Note: ESLint has been installed and configured in this environment. Press [`ctrl`]+[`shift`]+[`M`] to see the problems found by ESLint. Fix then by changing instances of `var` to `const`.
2. Change the message to "Hello {your name} from VS Online!" (on line 18)
   
Build, Run, and Debug:
----------------------

1. Add a breakpoint on line 21
2. Press [`F5`] to launch the app
3. Once the breakpoint is hit, try hovering over variables, examining locals, and more.

Forward Port:
-------------

1. Open the **Remote Explorer** activity pane
2. In the **Environment Details** panel, click the **Forward Port** button that appears when you hover over **Forwarded Ports (#)**
   - Enter port 3000 in the prompt
   - Accept the default name
3. Click the **Copy Port URL** button in the **localhost:3000** title bar
4. Paste the URL into the browser of your choice.
   > Note: VS Online has forwarded the environment's port 3000 to a location you can now access

Disconnect Environment:
-----------------------
1. View the environments in the **VS Online** panel on the **Remote Explorer**
2. Right click on **My Quick Environment** and select **Disconnect**
