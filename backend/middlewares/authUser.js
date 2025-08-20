import jwt from "jsonwebtoken";


//User auth middleware

const authUser = async(req,res,next) =>{
    try{
        const token = req.headers['token'];
        if(!token){
            return res.status(401).json({msg:"Please login to access this route"})
        }
        const token_decode = jwt.verify(token,process.env.JWT_SECRET)

        if (!req.body) {
            req.body = {};
        }

req.body.userId = token_decode.id

        next()
    }catch (e) {
        console.log(e)
    }
}
export default authUser;