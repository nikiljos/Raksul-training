import * as dotenv from "dotenv";
dotenv.config();

import db,{ init } from "./config/db.config";
init() //db connect

import User from "./models/user.model";
import Member from "./models/member.model";
import Group from "./models/group.model";
import Transaction from "./models/transaction.model";

// Not safe to run in production. 
(async()=>{
    await User.sync({alter:true})
    await Member.sync({alter:true})
    await Group.sync({alter:true})
    await Transaction.sync({alter:true})
    console.log("Tables (re)created!")
})()

