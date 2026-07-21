const Contact = require('../models/Contact');
const { sendEmailNotification, sendAutoReply } = require('../services/emailService');

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
exports.submitContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name, email, subject and message'
      });
    }

    // Create contact entry in database
    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message
    });

    // Send email notification to director
    try {
      await sendEmailNotification(contact);
      console.log('📧 Email notification sent to director');
    } catch (emailError) {
      console.error('⚠️ Email notification failed:', emailError.message);
    }

    // Send auto-reply to client
    try {
      await sendAutoReply(email, name);
      console.log('📧 Auto-reply sent to client');
    } catch (autoReplyError) {
      console.error('⚠️ Auto-reply failed:', autoReplyError.message);
    }

    res.status(201).json({
      success: true,
      data: contact,
      message: 'Message sent successfully! We will contact you shortly.'
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      error: 'Server error. Please try again later.'
    });
  }
};

// @desc    Get all contact messages
// @route   GET /api/contact
// @access  Private (Admin only)
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      error: 'Server error. Please try again later.'
    });
  }
};

// @desc    Get unread count
// @route   GET /api/contact/unread/count
// @access  Private (Admin only)
exports.getUnreadCount = async (req, res) => {
  try {
    const count = await Contact.countDocuments({ status: 'new' });
    
    res.status(200).json({
      success: true,
      count
    });
  } catch (error) {
    console.error('Get unread count error:', error);
    res.status(500).json({
      success: false,
      error: 'Server error. Please try again later.'
    });
  }
};

// @desc    Delete contact message
// @route   DELETE /api/contact/:id
// @access  Private (Admin only)
exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'Message not found'
      });
    }

    res.status(200).json({
      success: true,
      data: {},
      message: 'Message deleted successfully'
    });
  } catch (error) {
    console.error('Delete contact error:', error);
    res.status(500).json({
      success: false,
      error: 'Server error. Please try again later.'
    });
  }
};