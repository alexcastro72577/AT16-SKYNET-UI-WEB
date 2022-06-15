import { useQuery } from "@apollo/client";
import React, { Fragment } from "react";
import GET_BOOKING from "../apollo_client/graphql/booking_service/query/getBooking";
import BookingTable from "../components/BookingComponents/BookingTable"
import BookingModalCreate from "./BookingComponents/BookingModalCreate";


const Bookings = () => {
    const {data, error, loading } = useQuery(GET_BOOKING)
    
    if (loading) return <p>Loading .....</p>
    if (error) return <p>`Error ..... ${error.message}`</p>
    console.log(data)
    
    return (

        <Fragment>
            <BookingModalCreate/>
            <BookingTable returnData={data}/>
        </Fragment>
        
    )
}

export default Bookings
