import React, {useState} from 'react';
import {Form, Label, ContainerCenterButton, Button, SuccessMessage, ErrorMessage} from '../components/FormStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../components/Input';

const Resource = () => {
	const [name, editName] = useState({field: '', valid: null});
	const [type, editType] = useState({field: '', valid: null});
  	const [model, editModel] = useState({field: '', valid: null});
	const [state, editStateModel] = useState({field: '', valid: null});
	const [validForm, editValidForm] = useState(null);

	const expresiones = {
		name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
		type: /^[a-zA-ZÀ-ÿ-0-9\s]{1,40}$/, 
    	model: /^[a-zA-ZÀ-ÿ-0-9\s]{1,40}$/,
		state: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	}


	const onSubmit = (e) => {
		e.preventDefault();

		if(
			name.valid === 'true' &&
			type.valid === 'true' &&
      		model.valid === 'true' &&
			state.valid === 'true'
		){
			editValidForm(true);
			editName({field: '', valid: ''});
			editType({field: '', valid: null});
     		editModel({field: '', valid: null});
			editStateModel({field: '', valid: null});

			// ... 
		} else {
			editValidForm(false);
		}
	}

	return (
		<main>
      		<Label >Register a Resource</Label><br />
			<Form action="" onSubmit={onSubmit}>
			
				<Input
					estado={name}
					editState={editName}
					tipo="text"
					label="Name"
					placeholder="Calefactor"
					name="name"
					leyendaError="The name can only contain letters and spaces."
					expresionRegular={expresiones.name}
				/>
				<Input
					estado={type}
					editState={editType}
					tipo="text"
					label="Type"
					placeholder="M30"
					name="name"
					leyendaError="The type can only contain letters, numbers and spaces."
					expresionRegular={expresiones.type}
				/>
        		<Input
					estado={model}
					editState={editModel}
					tipo="text"
					label="Model"
					placeholder="Micro-002"
					name="model"
					leyendaError="The model can only contain letters, numbers and spaces."
					expresionRegular={expresiones.model}
				/>
				<Input
					estado={state}
					editState={editStateModel}
					tipo="text"
					label="State"
					placeholder="Free"
					name="state"
					leyendaError="The state can only contain letters and spaces."
					expresionRegular={expresiones.state}
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
export default Resource;