import { useQuery } from "@apollo/client";
import React, { Fragment } from "react";
import GET_PERSONS from "../apollo_client/graphql/booking_service/query/getPersons";
import PersonTable from "../components/BookingComponents/PersonTable"
import PersonModalCreate from "./BookingComponents/PersonModalCreate";


const Persons = () => {
    const {data, error, loading } = useQuery(GET_PERSONS)
    
    if (loading) return <p>Loading .....</p>
    if (error) return <p>`Error ..... ${error.message}`</p>
    console.log(data)
    
    return (

        <Fragment>
            <PersonModalCreate/>
            <PersonTable returnData={data}/>
        </Fragment>
        
    )
}

export default Persons
