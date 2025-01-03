import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  let result = await WebBrowser.openBrowserAsync('https://example.com');

  // Check if result is null before accessing its properties
  if (result) {
    console.log(result.type);
  } else {
    console.log('User cancelled or error opening browser');
  }
}

//Safely log the result, handling potential null values
const logResult = (result) => {
  if (result !== null && result !== undefined) {
    console.log('Browser Result:', result);
  } else {
    console.log('Browser action cancelled or failed.');
  }
};

handlePress().then(logResult); 