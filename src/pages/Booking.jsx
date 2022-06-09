import React, {useState} from 'react';
import {Form, Label, ContainerCenterButton, Button, SuccessMessage, ErrorMessage} from '../components/FormStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../components/Input';
import POST_BOOKING from "../apollo_client/graphql/booking_service/mutation/postBooking"; 
import { useMutation } from '@apollo/client';
import GET_BOOKING from "../apollo_client/graphql/booking_service/query/getBooking";

const Booking = () => {
	const [description, editDescription] = useState({field: '', valid: null});
	const [subject, editSubject] = useState({field: '', valid: null});
  	const [personId, editPersonId] = useState({field: '', valid: null});
	const [resourceId, editResourceId] = useState({field: '', valid: null});
	const [date, editDate] = useState({field: '', valid: null});
    const [endTime, editEndTime] = useState({field: '', valid: null});
    const [startTime, editStartTime] = useState({field: '', valid: null});
    const [state, editState] = useState({field: '', valid: null});
    const [type, editType] = useState({field: '', valid: null});
	const [validForm, editValidForm] = useState(null);
	const description1 = description.field
	const subject1 = subject.field
	const personId1 = personId.field
	const resourceId1 = resourceId.field
    const date1 = date.field
    const endTime1 = endTime.field
	const startTime1 = startTime.field
    const state1 = state.field
    const type1 = type.field
	const [ createBooking ] = useMutation(POST_BOOKING, {
		refetchQueries: [{ query: GET_BOOKING}]
	})

	/*const expressions = {
		name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
		country: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    	gender: /^[FM\s]{1,1}$/,
		city: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
		age: /^\d{1,3}$/
	}*/


	const onSubmit = (e) => {
		e.preventDefault();

		/*if(
			name.valid === 'true' &&
			country.valid === 'true' &&
      		gender.valid === 'true' &&
			city.valid === 'true' &&
			age.valid === 'true'
		){*/
			createBooking ({variables: {description1, subject1, personId1, resourceId1, date1, endTime1, startTime1, state1, type1}});
			editValidForm(true);
			editDescription({field: '', valid: ''});
			editSubject({field: '', valid: null});
      		editPersonId({field: '', valid: null});
			editResourceId({field: '', valid: null});
			editDate({field: '', valid: null});
            editEndTime({field: '', valid: null});
            editStartTime({field: '', valid: null});
            editState({field: '', valid: null});
            editType({field: '', valid: null});
		/*} else {
			editValidForm(false);
		}*/
	}

	return (
		<main>
      		<Label >Register a Booking</Label><br />
			<Form action="" onSubmit={onSubmit}>
			
				<Input
					state={description}
					editState={editDescription}
					type="text"
					label="Description"
					placeholder="description"
					name="name"
					errorLegend="The description can only contain letters and spaces."
					statements={expressions.description}
				/>
				<Input
					state={subject}
					editState={editSubject}
					type="text"
					label="subject"
					placeholder="Subject"
					name="name"
					errorLegend="The country can only contain letters and spaces."
					statements={expressions.subject}
				/>
        		<Input
					state={personId}
					editState={editPersonId}
					type="text"
					label="PersonId"
					placeholder="12365478"
					name="gender"
					errorLegend="The gender can only contain F or M"
					statements={expressions.personId}
				/>
                <Input
					state={resourceId}
					editState={editResourceId}
					type="text"
					label="ResourceId"
					placeholder="12365478"
					name="gender"
					errorLegend="The gender can only contain F or M"
					statements={expressions.resourceId}
				/>
				<Input
					state={date}
					editState={editDate}
					type="text"
					label="Date"
					placeholder="12/22/2022"
					name="city"
					errorLegend="The city can only contain letters and spaces."
					statements={expressions.date}
				/>
				<Input
					state={endTime}
					editState={editEndTime}
					type="text"
					label="End Time"
					placeholder="12:00:00"
					name="age"
					errorLegend="The age can only contain numbers and the maximum is 3 digits."
					statements={expressions.endTime}
				/>
                <Input
					state={startTime}
					editState={editStartTime}
					type="text"
					label="Start Time"
					placeholder="12:00:00"
					name="age"
					errorLegend="The age can only contain numbers and the maximum is 3 digits."
					statements={expressions.startTime}
				/>
                <Input
					state={state}
					editState={editState}
					type="text"
					label="State"
					placeholder="Free"
					name="city"
					errorLegend="The city can only contain letters and spaces."
					statements={expressions.state}
				/>
                <Input
					state={type}
					editState={editType}
					type="text"
					label="Type"
					placeholder="type"
					name="city"
					errorLegend="The city can only contain letters and spaces."
					statements={expressions.date}
				/>
				{validForm === false && <ErrorMessage>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Please fill the form correctly.
					</p>
				</ErrorMessage>}
				<ContainerCenterButton>
					<Button type="submit">Send</Button>
					{validForm === true && <SuccessMessage>Form successfully submitted!</SuccessMessage>}
				</ContainerCenterButton>
			</Form>
		</main>
	);
}
export default Booking;
