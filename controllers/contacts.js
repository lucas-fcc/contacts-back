const contactsRepository = require('../models/contactsRepository');

exports.get_contacts = function(req, res, next) {

  contactsRepository.findAll(function(err, result) {
    if (err)
      next(err);

    res.json(result);
  });
}

exports.get_single_contact = function(req, res, next) {

  contactsRepository.findById(req.params.id, function(err, result) {
    if (err)
      next(err);

    if (result)
      res.json(result);
    else
      res.status(404).send({ error: 'Not Found' });

  });
}

exports.create_contact = function(req, res, next) {
  console.log(req.body);

  contactsRepository.create(req.body, function(err, result) {
    if (err)
      next(err);

    res.json(result);
  });
}

exports.update_contact = function(req, res, next) {

  contactsRepository.update(req.params.id, req.body, function(err, result) {
    if (err)
      next(err);
    
    if (result)
      res.json(result);
    else
      res.status(404).send({ error: 'Not Found' });
  });
}

exports.delete_contact = function(req, res, next) {

  contactsRepository.remove(req.params.id, function(err, result) {
    if (err)
      next(err);
    
    if (result)
      res.json(result);
    else
      res.status(404).send({ error: 'Not Found' });
  });
}
