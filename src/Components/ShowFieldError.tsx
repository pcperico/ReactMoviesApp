export default function ShowFieldError(props:showFieldErrorProps)
{
    return (
        <div className="text-danger">
            {props.message}
        </div>
    )
}

interface showFieldErrorProps{
message:string
}