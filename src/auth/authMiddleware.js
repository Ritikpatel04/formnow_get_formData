const axios= require('axios');
async function authMiddleware(req,res,next){
    const token= req.headers.authorization;
    try{
        if(!token)
        {
            return res.status(400).send( {message: 'no token found'});
        }
        if(token && token.split(" ")[0]!== "Bearer"){
            return res.status(401).send( {message: 'invalid token'});
        }
      
const result = await axios.post("https://formnow-auth.herokuapp.com/verify-token", {}, {
        headers: {
            'Authorization': token
        }
})
       if(result.data.message==='Could not authorize user'){
           throw " ";
       }
         console.log(result.data);
    }catch(error){
        console.log(error);
        return res.status(401).send( {message: 'something went wrong'});
    }
    console.log("authMiddleware excecuted ...");
    next();
    }
    module.exports= authMiddleware;