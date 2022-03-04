import { Field, Formik, Form, ErrorMessage, FormikHelpers} from "formik";
import { Link } from "react-router-dom";
import Button from "../Button";
import * as Yup from "yup";
import FormGroupText from "../FormGroupText";
import { createGenderDto } from "./genders.model";

export default function GendersForm (props:gendersFormProps){
    return (
        <>
            <h1>{props.title}</h1>
            <Formik initialValues={props.model}
                onSubmit={props.onSubmit}
                validationSchema={
                    Yup.object({
                        name: Yup.string().required("This is a required field")
                    })
                }
            >
                {(formikProps)=>(
                    <Form>
                        <FormGroupText field="name" label="Name" placeholder="Gender name" />
                        <br />
                        <Button disabled = {formikProps.isSubmitting} type="submit" >Save</Button>
                        <Link className="btn btn-secondary" to="/genders" >Cancel</Link>                    
                    </Form>
                )}
                
            </Formik>
        </>
    )
}

interface gendersFormProps{
    title:string,
    model:createGenderDto,
    onSubmit(values:createGenderDto,action:FormikHelpers<createGenderDto>):void
}