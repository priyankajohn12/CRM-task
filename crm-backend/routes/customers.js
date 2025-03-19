const express = require('express');
const Customer = require('../models/customer');
const authenticate = require('../middleware/auth');
const router = express.Router();

router.post('/customers', authenticate, async (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).send('Name and email are required');
  }

  try {
    const customer = new Customer({
      name,
      email,
      user: req.user.userId, 
    });

    await customer.save();
    res.status(201).send('Customer created');
  } catch (error) {
    res.status(500).send('Error creating customer');
  }
});

module.exports = router;