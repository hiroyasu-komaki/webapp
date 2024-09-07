const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/add_days', (req, res) => {
    const data = req.body;
    const daysToAdd = parseInt(data.days, 10);

    if (isNaN(daysToAdd)) {
        return res.status(400).json({ error: 'Invalid number of days' });
    }

    const today = new Date();
    const newDate = new Date(today.getTime() + (daysToAdd * 24 * 60 * 60 * 1000));
    const newDateStr = newDate.toISOString().split('T')[0];

    res.json({ new_date: newDateStr });
});

app.listen(port, () => {
    console.log(`API Server is running on http://localhost:${port}`);
});
