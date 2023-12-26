import 'dotenv/config'
import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
const _dirname=dirname(fileURLToPath(import.meta.url));
const app=express();
const port=2000
app.use(express.static(_dirname+"\\public"));
const j=["BullyBoys","CockSuckers","Manderin","Just_a_Friendly_Neighbourhood_Band"];
app.get("/",(req,res)=>{
    res.render(_dirname+"\\views\\index.ejs",{name:"Welcome to Band Genaretor"});
});
app.get("/gent",(req,res)=>{
    var a=Math.floor(Math.random()*4);
    res.render(_dirname+"\\views\\index.ejs",{name:j[a]});
});
app.listen(port,()=>{
    console.log("Running on 2000..");
    console.log("hi");
});