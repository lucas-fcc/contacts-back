var express = require('express');
var router = express.Router();

const contacts = require('../controllers/contacts');
const contacts_db = require('../controllers/contacts_db');

router.get('/', contacts_db.get_contacts);
router.post('/', contacts_db.create_contact);

router.get('/:id', contacts_db.get_single_contact);
router.put('/:id', contacts_db.update_contact);
router.delete('/:id', contacts_db.delete_contact);

module.exports = router;
