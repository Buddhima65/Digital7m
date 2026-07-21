const express = require('express');
const router = express.Router();
const {
  submitContact,
  getContacts,
  getUnreadCount,
  deleteContact
} = require('../controllers/contactController');

// Public routes
router.post('/', submitContact);

// Admin routes (add authentication in production)
router.get('/', getContacts);
router.get('/unread/count', getUnreadCount);
router.delete('/:id', deleteContact);

module.exports = router;