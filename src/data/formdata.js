const { read } = require('fs');
const firebase= require('../../firebase/database')

async function formData(req,res,next){
       const id=req.body;
       try{      
             const result =  firebase.firestore().collection('forms').doc(id.docId);
         let snapdata= await result.get();
    
            if(!snapdata.exists){
             console.log('no such document');
            }
            const resData= snapdata.data();
        res.send(resData).status(200);
        
       }
    
   catch(err) {
    res.send({message: "couldn't find data"}).status(500);
   }
       
    console.log("find form  data process done sucessfully ...");
    
    }

module.exports = formData;