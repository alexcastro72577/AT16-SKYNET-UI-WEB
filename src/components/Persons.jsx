import { useQuery } from "@apollo/client";
import React, { Fragment } from "react";
import GET_PERSONS from "../apollo_client/graphql/booking_service/query/getPersons";

export const Persons = () => {
    const {data, error, loading } = useQuery(GET_PERSONS)
    
    if (loading) return <p>Loading .....</p>
    if (error) return <p>`Error ..... ${error.message}`</p>
    return (
        <Fragment>
            <h1>Person List</h1>
            {   
                data.listPostsPerson.posts.map(res => (
                    <div key={res.resource_name}>
                        Person city = {res.person_city} <br/>
                        Person fullname = {res.person_full_name} <br/>
                        Person country = {res.person_country} <br/><hr/>
                    </div>
                   
                ))
            }
        </Fragment>
    )
}

export default Persons
