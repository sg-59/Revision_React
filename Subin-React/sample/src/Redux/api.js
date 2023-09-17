import axios from "axios"
import { dataInfo } from "./Datas"

export const Datavalues=async(dispatch)=>{
    try{
        const data= await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch(dataInfo(data.data))

    }catch(err){
console.log('err detected');
    }
}