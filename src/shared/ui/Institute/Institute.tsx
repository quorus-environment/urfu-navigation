import React, {FC} from "react";
import './Institute.css'

interface InstituteProps{
    size?:number,
    title?:string,
}

export const Institute :FC<InstituteProps> = ({size = 24,title = ""}) =>{
    return (<div>
           <div className="institute" style={{width: size, height: size, fontSize: size ? size&&size/1.5 : 16 }}>{title}</div>
    </div>)
}