import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlGenders } from "../../endpoints";
import { GenderResultModel } from "../../Models/GenderResult.model";
import GenericListComponent from "../GenericListComponent";
import { GenderDto } from "./genders.model";


export default function GendersIndex()
{
    const [genderList, setGenderList]= useState<GenderDto[]>();   
    useEffect(()=>{       
        axios.get(urlGenders)
        .then((response:AxiosResponse<GenderResultModel>)=>{    
            if(response.data.success)
            {
                setGenderList(response.data.content);
            }
            else{
                setGenderList([]);
                console.log(`Not able to get genders due: ${response.data.message}` );
            }     
                       
        })
    },[]);
    return (
        <>
            <h3>Genders</h3>
            <GenericListComponent list={genderList} >
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            genderList?.map(g =>
                                <tr key={g.id}>
                                <td>{g.id}</td>
                                <td>{g.name}</td>
                                <td>{g.description}</td>
                            </tr>
                                            
                                            )
                        }
                    </tbody> 
                </table>
            </GenericListComponent>
            <Link to="/genders/create">Create Gender</Link>
        </>
    )
}