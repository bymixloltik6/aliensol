const axios = require('axios');

const config = {
  method: 'post',
  url: 'https://aliensol.app/api/rewards/',
  headers: {
    'Authorization': 'XXXXXXXXXXXXXXXXXX',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
    'Accept': 'application/json, text/plain, */*',
    'Sec-Ch-Ua': '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
    'Content-Type': 'application/json',
    'Origin': 'https://aliensol.app',
    'Referer': 'https://aliensol.app/',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-US,en;q=0.9,id;q=0.8',
    'Connection': 'keep-alive'
  },
  data: JSON.stringify({
    userAddress: 'YOUR_ADDRESS'
  })
};

// Function to send the POST request
const sendRequest = async () => {
  try {
    const response = await axios(config);
    console.log('Request successful:', response.data);
  } catch (error) {
    console.error('Error making request:', error.message);
  }
};

// Call the sendRequest function repeatedly with setInterval
const repeatInterval = 40; // Adjust this value to control the speed (in milliseconds)

setInterval(sendRequest, repeatInterval);
