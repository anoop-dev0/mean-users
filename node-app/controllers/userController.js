const multer = require('multer');
const User = require('./../models/user');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, next) => {
        next(null, 'public/images')
    },
    filename: (req, file, next) => {
        next(null, Date.now() + '-' + file.originalname)
    }
  })
  const upload = multer({ storage }).single('image');

module.exports.getUserList = (req,res,next)=>{
    try{
        User.find({},(err, users)=>{
            if(err){
                res.status(500).send({'success':false,'err':err});
            }
            else{
                res.status(200).send({'success':true,'list':users});
            }
        })
    }
    catch(err){
        res.status(500).send({'success':false,'err':err});
    }
}
module.exports.getUser = (req,res,next)=>{
    try{
        User.findById(req.params.id,(err, user)=>{
            if(err){
                res.status(500).send({'success':false,'err':err});
            }
            else{
                res.status(200).send({'success':true,'user':user});
            }
        })
    }
    catch(err){
        res.status(500).send({'success':false,'err':err});
    }
}

module.exports.createUser = async (req,res,next)=>{
console.log(req.body);
    upload(req, res, function (err) {

        if (err) {
          // An error occurred when uploading
          console.log(err);
          return res.status(422).send("an Error occured")
        }  

        try {
            let user ={};
            user.image = req.file.filename;
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.email = req.body.email;
            user.phoneNumber = req.body.phoneNumber;
            user = new User(user);
            user.save((err, success) => {
                if (err)
                    res.status(500).send({ 'success': false, 'err': err });
                else
                    res.status(200).send({ 'success': true });
            })
        }
        catch (error) {
            res.status(500).send({ 'success': false, 'err': error });
        }
  });     

}

module.exports.updateUser = (req,res,next)=>{
    console.log(req.body)
    try{
        User.findByIdAndUpdate(req.params.id,req.body,(err,user)=>{
            if(err){
                res.status(500).send({'success':false,'err':err});
            }
            else{
                res.status(200).send({'success':true});
            }
        })
    }
    catch(err){
        res.status(500).send({'success':false,'err':err});
    }
}

module.exports.deleteUser = (req,res,next)=>{
    const user = new User(req.body);
    try{
        User.remove({_id:req.params.id}, (err)=>{
            if(err){
                res.status(500).send({'success':false,'err':err}); 
            }
            else{
                res.status(200).send({'success':true});

            }
        })
    }
    catch(err){
        res.status(500).send({'success':false,'err':err});
    }
}