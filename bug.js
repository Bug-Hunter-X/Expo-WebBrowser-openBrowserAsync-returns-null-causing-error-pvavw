import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  let result = await WebBrowser.openBrowserAsync('https://example.com');
  console.log(result);
}

// This will cause an error if the user cancels the action in the browser
// because result will be null and you're trying to access result.type
console.log(result.type);