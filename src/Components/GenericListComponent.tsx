import { ReactElement } from "react";
import LoadingComponent from "./LoadingComponent";

export default function GenericListComponent(props:genericListProps)
{
    if(!props.list)
    {
        if(props.loadingUI)
        {
            return props.loadingUI;
        }
        return <LoadingComponent />
    }
    else if(props.list.length===0)
    {
        if(props.emptyListUI)
        {
            return props.emptyListUI;
        }
        return <span>No data to show</span>
    }
    else{
        return props.children
    }
}

interface genericListProps{
    list:any,
    children: ReactElement,
    loadingUI?:ReactElement,
    emptyListUI?:ReactElement
}