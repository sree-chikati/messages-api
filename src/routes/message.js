const express = require('express')
const router = express.Router();

const Message = require('../models/message')
const User = require('../models/user')

/** Route to get all messages. */
router.get('/', (req, res) => {
    Message.find().then((messages) => {
        return res.json({messages})
    })
    .catch((err) => {
        throw err.message
        // This message varibale is diff from one define above
    });
})

/** Route to get one message by id. */
router.get('/:messageId', (req, res) => {
    console.log(`Message ID: ${req.params.messageId}`)
    Message.findById(req.params.messageId).then((message) => {
        return res.json({message})
    })
    .catch((err) => {
        throw err.message
    });
})

/** Route to add a new message. */
router.post('/', (req, res) => {
    let message = new Message(req.body)
    message.save().then(message => {
        return User.findById(message.author)
    })
    .then(user => {
        console.log(user)
        user.messages.unshift(message)
        return user.save()
    })
    .then(_ => {
        return res.send(message)
    }).catch(err => {
        throw err.message
    })
})

/** Route to update an existing message. */
router.put('/:messageId', (req, res) => {
   Message.findByIdAndUpdate(req.params.messageId, req.body).then((message) => {
       return res.json({message})
   })
   .catch((err) => {
       throw err.message
   });
})

/** Route to delete a message. */
router.delete('/:messageId', (req, res) => {
    Message.findByIdAndDelete(req.params.messageId).then(() => {
        return res.json({
            'delete_message': 'Successfully deleted message',
            '_id': req.params.messageId
        })
    })
    .catch((err) => {
        throw err.message
    });
})

module.exports = router