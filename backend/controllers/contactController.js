const Contact = require('../models/contactModel')

getContacts = async (req, res) => {
    // res.send();
    const contacts = await Contact.find();

    res.status(200).json(contacts);
}

 
 getContact = async (req, res) => {
     //const id = req.params.id;
     const contact = await Contact.findById(req.params.id);
 
     if(!contact){
         res.status(400);
         throw new Error("Contact not found");
     }
    // res.send(`get contact id ${id}`);
    res.status(200).json(contact);
}
 
 
 createContact = async (req, res) => {
    // res.send('create contact');
 
     const { fullname, email, phone, profile_url} = req.body;
    
    if(!fullname || !email || !phone ){
         res.status(400).json({ message: `Please add all the required fields` });
    }else{
         const contact = await Contact.create({
             fullname: fullname,
             email: email,
             phone: phone,
             profile_url: profile_url
         });
         res.status(200).json(contact);
    }
 
}

updateContact = async (req, res) => {
     
     //res.send(`update contact id ${id}`);
     const contact = await Contact.findById(req.params.id);
 
     if(!contact){
         res.status(400);
         throw new Error("Contact not found");
     }
     const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
         new:true,
     })
     res.status(200).json(updatedContact);
 }

 deleteContact = async (req, res) => {
     //const id = req.params.id;
     //res.send(`delete contact id ${id}`);
 
     const contact = await Contact.findById(req.params.id);
     if(!contact){
         res.status(400);
         throw new Error("Contact not found");
     }
 
     await contact.remove();
 
     res.status(200).json({ id: req.params.id });
}
 
 
 module.exports = {
     getContacts,
     getContact,
     createContact,
     updateContact,
     deleteContact
 }