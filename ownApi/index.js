const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT =5000;

app.use(cors());
app.use(express.json());

// GET all data
app.get('/items', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading file');

    const parsedData = JSON.parse(data);
    res.json(parsedData);

    // parsedData.forEach(item => {
    //   console.log(item.id); 
    // });
  });
});




app.listen(PORT, () => {
  console.log(`API is running at http://localhost:${PORT}`);
});
