import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
   name:{ 
    type:"String",
    required: true 
}, age : {
    type:"Number",
    required:true,
    min:15,
    max:100,
}, email: {
    type:"String",
    required:true,
    unique:true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
},course:{
    type:"String",
    required:true 
}
});

const Student = mongoose.model("Student", studentSchema);

export default Student;