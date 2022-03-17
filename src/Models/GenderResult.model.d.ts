import { GenderDto } from "../Components/Genders/genders.model";

export interface GenderResultModel{
    success:boolean,
    message:string,
    content:GenderDto[]
}