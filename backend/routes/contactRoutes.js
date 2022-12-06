const router = require('express').Router();
const { getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact} = require('../controllers/contactController');

//CRUd

//create contact and get all contacts
router.route('/').post(createContact).get(getContacts);

//get one contact and update contactand delete contact
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);


module.exports = router