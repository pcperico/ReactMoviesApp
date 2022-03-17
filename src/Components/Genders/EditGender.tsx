import GendersForm from "./GendersForm";


export default function EditGender(){
    return (
        <>
            <GendersForm title="Edit Gender" model={{name:'', description:""}} 
            onSubmit={async values=>{
                                        console.log("Editing....")
                                        await new Promise(r=>setTimeout(r,1000));
                                        console.log(values);                                        
                                    }}  
               
            />
        </>
    )
}