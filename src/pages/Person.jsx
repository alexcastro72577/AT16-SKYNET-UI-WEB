import React, {useState} from 'react';
import {Form, Label, ContainerCenterButton, Button, SuccessMessage, ErrorMessage} from '../components/FormStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../components/Input';

const Person = () => {
	const [name, editName] = useState({field: '', valid: null});
	const [country, editCountry] = useState({field: '', valid: null});
  	const [gender, editGender] = useState({field: '', valid: null});
	const [city, editCity] = useState({field: '', valid: null});
	const [age, editAge] = useState({field: '', valid: null});
	const [validForm, editValidForm] = useState(null);

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
			editValidForm(true);
			editName({field: '', valid: ''});
			editCountry({field: '', valid: null});
      		editGender({field: '', valid: null});
			editCity({field: '', valid: null});
			editAge({field: '', valid: null});

			// ... 
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
