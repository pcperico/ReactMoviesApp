import { Field, Formik, Form} from "formik";
import { Link } from "react-router-dom";
import Button from "../Button";

export default function CreateGender(){
    return (
        <>
            <h1>Create Gender</h1>
            <Formik initialValues={{
                name:''
            }}
            onSubmit={values=>{
                console.log(values);
            }}
            >
                <Form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <Field name="name" className="form-control"/>
                    </div>
                    <br />
                    <Button type="submit" >Save</Button>
                    <Link className="btn btn-secondary" to="/genders" >Cancel</Link>
                    
                </Form>
            </Formik>
        </>
    )
}