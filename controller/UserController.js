const userSchema= require('../model/UserSchema');
const bcrypt= require('bcrypt');
const salt=10;
const nodemailer= require('nodemailer');
const jsonwebtoken =require('jsonwebtoken');

const register = async (req, resp) => {
    try {
        const result = await userSchema.findOne({ 'email': req.body.email }).maxTimeMS(20000);

        if (result == null) {
            const hash = await bcrypt.hash(req.body.password, salt);

            const user = new userSchema({
                fullName: req.body.fullName,
                password: hash,
                email: req.body.email,
                activeState: true
            });

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'nilankashehan679@gmail.com',
                    pass: 'gxob veqb zhmq jmvo',
                }
            });

            const mailOption = {
                from: 'nilankashehan679@gmail.com',
                to: req.body.email,
                subject: 'New Account Creation',
                text: 'Congratulations!\n' +
                    'You have successfully created an account '
            };

            await transporter.sendMail(mailOption);

            await user.save();
            return resp.status(201).json({ 'message': 'Saved!' });
        } else {
            return resp.status(409).json({ 'error': 'already exists!' });
        }
    } catch (error) {
        return resp.status(500).json({ 'error': error.message });
    }
};

const login = (req,resp) => {
    userSchema.findOne({'email':req.body.email}).then(selectedUser=>{
        if (selectedUser!==null){
            bcrypt.compare(req.body.password, selectedUser.password, function(err, result) {
                if (err){
                    return resp.status(500).json({'message':'internal server error'});
                }

                if(result){
                    const payload={
                        email:selectedUser.email
                    }

                    const secretKey=process.env.SECRET_KEY;
                    const expiresIn='24h';

                    const token = jsonwebtoken.sign(payload,secretKey,{expiresIn});
                    return resp.status(200).json(token);
                }else{
                    return resp.status(401).json({'message':'Password is incorrect!'});
                }
            });
        }else{
            return resp.status(404).json({'message':'not found!'});
        }
    });
}

module.exports = {
    register,
    login
};