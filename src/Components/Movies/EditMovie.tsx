import { useParams } from "react-router-dom"

export default function EditMovie(){
    const {id}:any = useParams();
    return (
        <>
            <h1>Edit Movie</h1>
            <h2>Editing movie: {id}</h2>
        </>
    )
}