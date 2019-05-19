const Contact = require('../models/contact');

const contactsRepository = require('../models/contactsRepository');

exports.get_contacts = function(req, res, next) {

  Contact.find({})
    .then(contacts => res.json(contacts))
    .catch(err => next(err));

}

exports.get_single_contact = function(req, res, next) {

  Contact.find({ _id: req.params.id })
    .then(contacts => res.json(contacts))
    .catch(err => next(err));

}

exports.create_contact = function(req, res, next) {

  const name = req.body.name || 'newContact';
  const email = req.body.email || 'newcontact@mail.com';

  Contact.create({ name, email })
    .then(contact => res.json(contact))
    .catch(err => next(err));
}

exports.update_contact = function(req, res, next) {

  const name = req.body.name || 'updatedContact';
  const email = req.body.email || 'updatedcontact@mail.com';

  Contact.findOneAndUpdate({ _id: req.params.id }, { name, email }, { new: true })
    .then(contact => res.json(contact))
    .catch(err => next(err));
}

exports.delete_contact = function(req, res, next) {

  Contact.findOneAndDelete({ _id: req.params.id })
    .then(contact => res.json(contact))
    .catch(err => next(err));
}
