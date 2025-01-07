const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const webhookUrl = 'https://discord.com/api/webhooks/1326333611917447349/R-7tnz6NiWTEmsRToew61qQIpL-LunrUZ-3uXpOANIJ2CAefGZrmNh4xOxlQNoX9-FdO';

app.get('/trigger-webhook', async (req, res) => {
    try {
        await axios.post(webhookUrl, {
            content: 'A user visited the webhook website!'
        });
        res.json({ status: 'Webhook triggered successfully!' });
    } catch (error) {
        console.error('Error sending webhook:', error);
        res.status(500).json({ status: 'Error sending webhook.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
