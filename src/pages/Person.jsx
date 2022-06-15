import React, {useState} from 'react';
import {Form, Label, ContainerCenterButton, Button, SuccessMessage, ErrorMessage} from '../components/FormStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../components/Input';
import POST_PERSONS from "../apollo_client/graphql/booking_service/mutation/postPersons"; 
import { useMutation } from '@apollo/client';
import GET_PERSONS from "../apollo_client/graphql/booking_service/query/getPersons";

const Person = () => {
	const [name, editName] = useState({field: '', valid: null});
	const [country, editCountry] = useState({field: '', valid: null});
  	const [gender, editGender] = useState({field: '', valid: null});
	const [city, editCity] = useState({field: '', valid: null});
	const [age, editAge] = useState({field: '', valid: null});
	const [validForm, editValidForm] = useState(null);
	const name1 = name.field
	const country1 = country.field
	const gender1 = gender.field
	const city1 = city.field
	const age1 = age.field
	const [ createPerson ] = useMutation(POST_PERSONS, {
		refetchQueries: [{ query: GET_PERSONS}]
	})

	const expressions = {
		name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
		country: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    	gender: /^[FM\s]{1,1}$/,
		city: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
		age: /^\d{1,3}$/
	}


	const onSubmit = (e) => {
		e.preventDefault();

		if(
			name.valid === 'true' &&
			country.valid === 'true' &&
      		gender.valid === 'true' &&
			city.valid === 'true' &&
			age.valid === 'true'
		){
			createPerson ({variables: {name1, age1, country1, gender1, city1}});
			editValidForm(true);
			editName({field: '', valid: ''});
			editCountry({field: '', valid: null});
      		editGender({field: '', valid: null});
			editCity({field: '', valid: null});
			editAge({field: '', valid: null});
		} else {
			editValidForm(false);
		}
	}

	return (
		<main>
      		<Label >Register a Person</Label><br />
			<Form action="" onSubmit={onSubmit}>
			
				<Input
					state={name}
					editState={editName}
					type="text"
					label="Full Name"
					placeholder="John T"
					name="name"
					errorLegend="The name can only contain letters and spaces."
					statements={expressions.name}
				/>
				<Input
					state={country}
					editState={editCountry}
					type="text"
					label="Country"
					placeholder="Bolivia"
					name="name"
					errorLegend="The country can only contain letters and spaces."
					statements={expressions.country}
				/>
        		<Input
					state={gender}
					editState={editGender}
					type="text"
					label="Gender"
					placeholder="M"
					name="gender"
					errorLegend="The gender can only contain F or M"
					statements={expressions.gender}
				/>
				<Input
					state={city}
					editState={editCity}
					type="text"
					label="City"
					placeholder="Sucre"
					name="city"
					errorLegend="The city can only contain letters and spaces."
					statements={expressions.city}
				/>
				<Input
					state={age}
					editState={editAge}
					type="text"
					label="Age"
					placeholder="27"
					name="age"
					errorLegend="The age can only contain numbers and the maximum is 3 digits."
					statements={expressions.age}
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
export default Person;
