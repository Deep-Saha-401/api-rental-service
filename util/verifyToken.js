import jwt from "jsonwebtoken";
import { createError } from "../util/error.js";

export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401,"You are not aunthicated ...!!!"))
    }
    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err) return next(createError(420,"Token is not valid..!!!"));

        req.user= user;
        next()
    })
}

export const verifyuser = (req,res,next)=>{
    verifyToken(req,res,next, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            return next(createError(421,"You are not authorized...!!!"));
        }
    })
}

export const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,next, ()=>{
        if(req.user.isAdmin){
            next()
        }else{
            return next(createError(421,"You are not authorized...!!!"));
        }
    })
}