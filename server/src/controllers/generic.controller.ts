import { Request,Response } from "express";
import genericService from "../services/generic.service";

const ping=async (req:Request,res:Response)=>{
    res.status(200).send({
        success:true,
        message:"Pong",
        data:{
            time:genericService.getTimeString()
        }
    })
}

export default {
    ping
}