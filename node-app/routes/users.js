const express = require('express');
const router = express.Router();
const User = require('./../models/user');
const userController = require('../controllers/userController');
const path = require('path');
const multer = require('multer');

/* GET users listing. */

const storage = multer.diskStorage({
  destination: (req, file, next) => {
    debugger;
      next(null, '../public/images')
  },
  filename: (req, file, next) => {
      next(null, Date.now() + '-' + file.originalname)
  }
})
const upload = multer({ storage }).single('file');



router.get('/', userController.getUserList);
router.get('/:id', userController.getUser);

router.post('/', userController.createUser);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

// const storage = multer.diskStorage({
//   destination: (req, file, next) => {
//       next(null, 'public/images')
//   },
//   filename: (req, file, next) => {
//       next(null, Date.now() + '-' + file.originalname)
//   }
// })
// const upload = multer({ storage }).single('file');
// router.post('/upload', upload, (req, res) => {
//   req.body.image=req.file.filename;
//   const operatrion: IProductOperation = new ProductOperation();
//   operatrion.Insert(new Product(JSON.parse(JSON.stringify(req.body)))).then(inserted => {
//       res.status(200).send(inserted);
//   }).catch(notInserted => {
//       res.status(300).send(notInserted);
//   })
//   // res.send({ body: req.body, file: req.file.path });


// });

module.exports = router;
