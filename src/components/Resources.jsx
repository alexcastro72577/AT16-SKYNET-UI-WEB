import { useQuery } from "@apollo/client";
import React, { Fragment } from "react";
import GET_RESOURCES from "../apollo_client/graphql/booking_service/query/getResources";

const Resources = () => {
    const {data, error, loading } = useQuery(GET_RESOURCES)
    
    if (loading) return <p>Loading .....</p>
    if (error) return <p>`Error ..... ${error.message}`</p>
    return (
        <Fragment>
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
        </Fragment>
    )
}

export default Resources
