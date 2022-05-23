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

	const expresiones = {
		name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras, numeros, guion y guion_bajo
		country: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    	gender: /^[FM\s]{1,1}$/,
		city: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
		age: /^\d{1,3}$/ // 7 a 14 numeros.
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
					estado={name}
					editState={editName}
					tipo="text"
					label="Full Name"
					placeholder="John T"
					name="name"
					leyendaError="The name can only contain letters and spaces."
					expresionRegular={expresiones.name}
				/>
				<Input
					estado={country}
					editState={editCountry}
					tipo="text"
					label="Country"
					placeholder="Bolivia"
					name="name"
					leyendaError="The country can only contain letters and spaces."
					expresionRegular={expresiones.country}
				/>
        		<Input
					estado={gender}
					editState={editGender}
					tipo="text"
					label="Gender"
					placeholder="M"
					name="gender"
					leyendaError="The gender can only contain F or M"
					expresionRegular={expresiones.gender}
				/>
				<Input
					estado={city}
					editState={editCity}
					tipo="text"
					label="City"
					placeholder="Sucre"
					name="city"
					leyendaError="The city can only contain letters and spaces."
					expresionRegular={expresiones.city}
				/>
				<Input
					estado={age}
					editState={editAge}
					tipo="text"
					label="Age"
					placeholder="27"
					name="age"
					leyendaError="The age can only contain numbers and the maximum is 3 digits."
					expresionRegular={expresiones.age}
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
