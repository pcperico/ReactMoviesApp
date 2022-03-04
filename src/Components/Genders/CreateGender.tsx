import GendersForm from "./GendersForm";


export default function CreateGender(){
    return (
        <>
            <GendersForm title="Create Gender" model={{name:''}} 
            onSubmit={async values=>{
                                        console.log("Creating....")
                                        await new Promise(r=>setTimeout(r,1000));
                                        console.log(values);
                                        
                                    }}  
               
            />
        </>
    )
}