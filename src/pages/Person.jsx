import React, {useState} from 'react';
import {Form, Label, ContainerCenterButton, Button, SuccessMessage, ErrorMessage} from '../components/FormStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../components/Input';

const Person = () => {
	const [usuario, editUsuario] = useState({field: '', valid: null});
	const [nombre, editNombre] = useState({field: '', valid: null});
  const [gender, editGender] = useState({field: '', valid: null});
	const [correo, editCorreo] = useState({field: '', valid: null});
	const [telefono, editTelefono] = useState({field: '', valid: null});
	const [validForm, editValidForm] = useState(null);

	const expresiones = {
		usuario: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    gender: /^[FM\s]{1,1}$/,
		correo: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
		telefono: /^\d{1,3}$/ // 7 a 14 numeros.
	}


	const onSubmit = (e) => {
		e.preventDefault();

		if(
			usuario.valid === 'true' &&
			nombre.valid === 'true' &&
      gender.valid === 'true' &&
			correo.valid === 'true' &&
			telefono.valid === 'true'
		){
			editValidForm(true);
			editUsuario({field: '', valid: ''});
			editNombre({field: '', valid: null});
      editGender({field: '', valid: null});
			editCorreo({field: '', valid: null});
			editTelefono({field: '', valid: null});

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
					estado={usuario}
					editState={editUsuario}
					tipo="text"
					label="Full Name"
					placeholder="John T"
					name="usuario"
					leyendaError="The name can only contain letters and spaces."
					expresionRegular={expresiones.usuario}
				/>
				<Input
					estado={nombre}
					editState={editNombre}
					tipo="text"
					label="Country"
					placeholder="Bolivia"
					name="usuario"
					leyendaError="The country can only contain letters and spaces."
					expresionRegular={expresiones.nombre}
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
					estado={correo}
					editState={editCorreo}
					tipo="text"
					label="City"
					placeholder="Sucre"
					name="correo"
					leyendaError="The city can only contain letters and spaces."
					expresionRegular={expresiones.correo}
				/>
				<Input
					estado={telefono}
					editState={editTelefono}
					tipo="text"
					label="Age"
					placeholder="27"
					name="telefono"
					leyendaError="The age can only contain numbers and the maximum is 3 digits."
					expresionRegular={expresiones.telefono}
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
