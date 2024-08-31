const express = require('express');
const fs = require('fs');
const { tokenGenerate } = require('@vonage/jwt');

const app = express();
const PORT = 3000;

const applicationId = 'APPLICATION_ID';
const privateKeyPath = './PRIVATE_KEY_PATH';
// Check if the file exists
if (!fs.existsSync(privateKeyPath)) {
    console.error('Private key file does not exist at path:', privateKeyPath);
    process.exit(1);
}
const privateKey = fs.readFileSync(privateKeyPath, 'utf8');

app.get('/generate-jwt', (req, res) => {
    try {
        const token = tokenGenerate(applicationId, privateKey);
        res.json({ token: token });
    } catch (error) {
        console.error('Error generating JWT:', error.message);
        res.status(500).json({ error: 'Failed to generate JWT' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
