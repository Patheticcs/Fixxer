const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

// Your Discord webhook URL
const webhookUrl = 'https://discord.com/api/webhooks/1326333611917447349/R-7tnz6NiWTEmsRToew61qQIpL-LunrUZ-3uXpOANIJ2CAefGZrmNh4xOxlQNoX9-FdO';

// Enable CORS for all routes (if necessary)
app.use(cors());

// Endpoint to trigger the webhook
app.get('/trigger-webhook', async (req, res) => {
    try {
        // Send a message to Discord when the page is visited
        await axios.post(webhookUrl, {
            content: 'A user visited the webhook website!' // Customize your message
        });
        res.json({ status: 'Webhook triggered successfully!' });
    } catch (error) {
        console.error('Error sending webhook:', error);
        res.status(500).json({ status: 'Error sending webhook.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
