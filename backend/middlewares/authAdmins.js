import jwt from "jsonwebtoken";


//admin auth middleware

const authAdmin = async(req,res,next) =>{
    try{
        const{atoken} = req.headers
        if(!atoken){
            return res.status(401).json({msg:"Please login to access this route"})
        }
        const decoded = jwt.verify(atoken,process.env.JWT_SECRET)
        if(!decoded){
            return res.status(401).json({msg:"Please login to access this route"})
        }
        if(decoded.email !== process.env.ADMIN_EMAIL){
            return res.status(401).json({msg:"Please login to access this route"})
        }
        next()
    }catch (e) {
        console.log(e)
    }
}
export default authAdmin;