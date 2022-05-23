import React from 'react';
import {Input, Label, GrupoInput, LeyendaError, IconoValidacion} from './Formularios';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ComponenteInput = ({estado, editState, tipo, label, placeholder, name, leyendaError, expresionRegular, funcion}) => {
	const onChange = (e) => {
		editState({...estado, field: e.target.value});
	}

	const validacion = () => {
		if(expresionRegular){
			if(expresionRegular.test(estado.field)){
				editState({...estado, valid: 'true'});
			} else {
				editState({...estado, valid: 'false'});
			}
		}

		if(funcion){
			funcion();
		}
	}

	return (
		<div>
			<Label htmlFor={name} valid={estado.valid}>{label}</Label>
			<GrupoInput>
				<Input 
					type={tipo}
					placeholder={placeholder} 
					id={name}
					value={estado.field}
					onChange={onChange}
					onKeyUp={validacion}
					onBlur={validacion}
					valid={estado.valid}
				/>
				<IconoValidacion 
					icon={estado.valid === 'true' ? faCheckCircle : faTimesCircle}
					valid={estado.valid}
				/>
			</GrupoInput>
			<LeyendaError valid={estado.valid}>{leyendaError}</LeyendaError>
		</div>
	);
}
 
export default ComponenteInput;