import axios from "axios";
import { createGenderDto } from "./genders.model";
import GendersForm from "./GendersForm";
import {urlGenders} from "../../endpoints";
import { useHistory } from "react-router-dom";

export default function CreateGender(){
    const history = useHistory();
    async function create(gender:createGenderDto) {
        try{
            await axios.post(urlGenders,gender);
            history.push('/genders');
        } 
        catch(error)
        {
            console.error(error);
        }   
    }
    return (
        <>
            <GendersForm title="Create Gender" model={{name:'',description:''}} 
            onSubmit={async values=>{
                                        console.log("Creating....")
                                        await create(values);
                                    }}  
               
            />
        </>
    )
}