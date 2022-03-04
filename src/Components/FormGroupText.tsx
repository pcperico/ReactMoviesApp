import { ErrorMessage, Field } from "formik";
import ShowFieldError from "./ShowFieldError";

export default function FormGroupText(props:formGroupTextProps)
{
    return(
        <div className="form-group">
            {props.label?<label htmlFor={props.field}>{props.label}</label>:null}            
            <Field name={props.field} className="form-control"  placeholder={props.placeholder} />
            <ErrorMessage name={props.field} >
            {
                message=>
                <ShowFieldError message={message} />
            }
            </ErrorMessage>
        </div>
    )
}

interface formGroupTextProps{
    field:string,
    label?:string,
    placeholder?:string
}