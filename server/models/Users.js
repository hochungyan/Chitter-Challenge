import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const UserModel = new mongoose.model('UserModel', userSchema);
/*UserModel is defined using mongoose.model() method. It takes in 2 arg [name of the model and the schema]
The schema defines the shape of the doc that will be stored in the database. 
In this case, the schema specifies that users must have name, email and password!  
*/
export default UserModel;

//Now the User model can be used to create new User documents, query the datasbase for exisiting user, and update or delete user documents. 