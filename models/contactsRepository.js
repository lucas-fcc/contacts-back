'use strict';

const contacts = [
  { id: '00001', name: 'Contact01', email: 'contact01@mail.com' },
  { id: '00002', name: 'Contact02', email: 'contact02@mail.com' },
  { id: '00003', name: 'Contact03', email: 'contact03@mail.com' },
  { id: '00004', name: 'Contact04', email: 'contact04@mail.com' },
  { id: '00005', name: 'Contact05', email: 'contact05@mail.com' }
];

exports.findAll = function(callback) {
  callback(null, contacts);
}

exports.findById = function(id, callback) {
  let contact = contacts.filter(item => item.id === id);

  if (contact.length === 1)
    callback(null, contact[0]);
  else
    callback(null, null);
}

exports.create = function(contact, callback) {
  const newContact = {
    id: _getNextId(),
    name: contact.name,
    email: contact.email
  };

  contacts.push(newContact);

  callback(null, newContact);
}

exports.update = function(id, contact, callback) {
  
  const contactIndex = contacts.findIndex(item => item.id === id);

  if (contactIndex < 0) {
    callback(null, null);
  } else {
    contacts[contactIndex].name = contact.name;
    contacts[contactIndex].email = contact.email;

    callback(null, contacts[contactIndex]);
  }
}

exports.remove = function(id, callback) {
  
  const contactIndex = contacts.findIndex(item => item.id === id);

  if (contactIndex < 0) {
    callback(null, null);
  } else {
    let contact = contacts.splice(contactIndex, 1);

    callback(null, contact);
  }
}

const _getNextId = function() {
  let lastId = parseInt(contacts[contacts.length - 1].id);

  return ('00000' + (lastId + 1)).slice(-5);
}
