const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/data', (req, res) => {
    const clientData = req.body;
    const clientFolder = `client_${Date.now()}`;
    const folderPath = path.join(__dirname, 'client_data', clientFolder);

    fs.mkdir(folderPath, { recursive: true }, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error creating client folder.');
        }

        const filePath = path.join(folderPath, 'client_info.txt');
        const dataString = JSON.stringify(clientData, null, 4);

        fs.writeFile(filePath, dataString, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error saving client data.');
            }

            res.status(200).send('Data saved successfully.');
        });
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
