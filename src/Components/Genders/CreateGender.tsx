import { Field, Formik, Form, ErrorMessage} from "formik";
import { Link } from "react-router-dom";
import Button from "../Button";
import * as Yup from "yup";
import FormGroupText from "../FormGroupText";

export default function CreateGender(){
    return (
        <>
            <h1>Create Gender</h1>
            <Formik initialValues={{
                    name:''
                }}
                onSubmit={async values=>{
                    await new Promise(r=>setTimeout(r,3000));
                    console.log(values);

                }}
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