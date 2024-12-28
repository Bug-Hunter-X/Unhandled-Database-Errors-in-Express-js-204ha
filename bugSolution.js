const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  //Improved error handling
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).send('Failed to retrieve user. Please try again later.');
      return; //Important: Stop further execution after error
    }
    if (!user) {
      res.status(404).send('User not found');
    } else {
      res.json(user);
    }
  });
});

app.listen(3000, () => console.log('Server listening on port 3000'));