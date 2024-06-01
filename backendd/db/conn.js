const mongoose = require('mongoose');

const DB = "mongodb+srv://thakurshahab1809:VbKbEw8M9yWTF0Hl@cluster0.aknswmn.mongodb.net/registration"


mongoose.connect(DB,{
   useUnifiedTopology:true,
   useNewUrlParser:true,
}).then(()=> console.log("Database Connected"))
.catch((error)=>{
    console.log(error);
})






// thakurshahab1809
// VbKbEw8M9yWTF0Hl
// mongodb+srv://thakurshahab1809:VbKbEw8M9yWTF0Hl@cluster0.aknswmn.mongodb.net/

