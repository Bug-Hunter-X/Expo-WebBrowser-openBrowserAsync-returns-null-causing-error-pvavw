# Expo WebBrowser.openBrowserAsync Null Handling Bug

This repository demonstrates a common error encountered when using `expo-web-browser`'s `openBrowserAsync` function.  The function can return `null` if the user cancels the browser action or if there's an error opening the browser.  Attempting to access properties of a `null` object results in an error.

The `bug.js` file shows the problematic code. The `bugSolution.js` file provides a solution demonstrating proper null handling.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run the `bug.js` example.  Cancel the browser action.
4. Observe the error in the console.