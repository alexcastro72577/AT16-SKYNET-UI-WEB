import { useQuery } from "@apollo/client";
import React, { Fragment } from "react";
import GET_RESOURCES from "../apollo_client/graphql/booking_service/query/getResources";
import ResourceTable from "./BookingComponents/ResourceTable"


const Resources = () => {
    const {data, error, loading } = useQuery(GET_RESOURCES)
    
    if (loading) return <p>Loading .....</p>
    if (error) return <p>`Error ..... ${error.message}`</p>
    
    
      
    return (

        <Fragment>
            <ResourceTable envio={data}/>
        </Fragment>
        
    )
}

export default Resources
