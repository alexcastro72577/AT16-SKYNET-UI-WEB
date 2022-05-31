import { useQuery } from "@apollo/client";
import React, { Fragment } from "react";
import GET_RESOURCES from "../apollo_client/graphql/booking_service/query/getResources";
import ResourceTable from "./BookingComponents/ResourceTable"
import ResourceModalCreate from "./BookingComponents/ResourceModalCreate"


const Resources = () => {
    const {data, error, loading } = useQuery(GET_RESOURCES)
    console.log("esta es la data")
    console.log(data)
    if (loading) return <p>Loading .....</p>
    if (error) return <p>`Error ..... ${error.message}`</p>
    
    
      
    return (

        <Fragment>
<<<<<<< HEAD
            <h1>Resources List</h1>
            {   
                data.listPosts.posts.map(res => (
                    <div key={res.resource_name}>
                        resource name = {res.resource_name} <br/>
                        resource type = {res.resource_type} <br/>
                        resource model = {res.resource_model} <br/>
                        resource state = {res.resource_state} <br/><hr/>
                    </div>
                   
                ))
            }
=======
            <ResourceModalCreate/>
            <ResourceTable returnData={data}/>
>>>>>>> b96249753ab14377b81fd4ae2f6599d0829731ca
        </Fragment>
        
    )
}

export default Resources
