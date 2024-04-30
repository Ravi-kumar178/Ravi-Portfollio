const Contact = require("../Models/Contact")
const mailSender = require("../Config/mailSender");

require("dotenv").config();
exports.Contactus = async(req,res)=>{
    try{
        const{firstName, lastName, email,contactNumber,message} = req.body;

        if(!firstName || !lastName || !email || !contactNumber){
            return res.status(404).json({
                success: false,
                message:"All fields are required"
            });
        }

        const data = await Contact.create({firstName,lastName,email,contactNumber,message});
        await mailSender(email,"A meeting of two oceans","Thanks for reaching out to us. I will contact you soon. We, the software community, make this world a more beautiful and easier place to live in.");

        

        await mailSender(process.env.MAIL_USER,"Portfolio- A meeting of two oceans",`firstName: ${firstName} <br/>lastName: ${lastName} <br/> email: ${email} <br/> contactNumber: ${contactNumber} <br/> message: ${message}`);

        return res.status(200).json({
            success: true,
            message:"Message Sent Successfully"
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message:"Server error while Contacting"
        })
    }
}