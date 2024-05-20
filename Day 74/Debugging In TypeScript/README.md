Debugging TypeScript Applications In VS Code:

1. Enable the "source map" feature in your `tsconfig.json` file.
2. After enabling source maps, recompile your code. You'll notice a new file in your folder, named index.js.map. This is your source map file.
3. Add some logic to your `index.ts` file and insert a breakpoint by clicking on the line number. Breakpoints pause code execution when reached.
4. Create a `launch.json` file from the debug panel and select `node.js`. This file configures VS Code for debugging.
5. Add a `pre-launch task` setting in `launch.json` and set it to `"tsc build - tsconfig.json"`. This tells VS Code to use the TypeScript compiler to build your application using the specified configuration.
6. Start debugging by clicking on "Launch Program" in the debug panel or using the shortcut `F5`.
7. Use the various tools in the debug panel to step through your code, restart the debugging session, or terminate debugging:
Step Over (F10): Execute one line of code.
Step Into: Useful for functions.
Step Out: Useful for leaving functions.
Restart: Restart the debugging session.
Stop: Terminate debugging.
8. Watch the values of detected variables change as you step through the code. If you don't see a variable, you can add it to the "Watch" window.
9. Add a `console.log` statement to your code to see its effect during debugging.

Debugging is a powerful tool for understanding your code's behavior and pinpointing issues. Always stop the debugging session when you're done.
