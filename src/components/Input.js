import React from 'react';
import {Input, Label, GrupoInput, ErrorLegend, IconValidation} from './FormStyles';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ComponenteInput = ({state, editState, type, label, placeholder, name, errorLegend, statements, functionality}) => {
	const onChange = (e) => {
		editState({...state, field: e.target.value});
	}

	const validation = () => {
		if(statements){
			if(statements.test(state.field)){
				editState({...state, valid: 'true'});
			} else {
				editState({...state, valid: 'false'});
			}
		}

		if(functionality){
			functionality();
		}
	}

	return (
		<div>
			<Label htmlFor={name} valid={state.valid}>{label}</Label>
			<GrupoInput>
				<Input 
					type={type}
					placeholder={placeholder} 
					id={name}
					value={state.field}
					onChange={onChange}
					onKeyUp={validation}
					onBlur={validation}
					valid={state.valid}
				/>
				<IconValidation 
					icon={state.valid === 'true' ? faCheckCircle : faTimesCircle}
					valid={state.valid}
				/>
			</GrupoInput>
			<ErrorLegend valid={state.valid}>{errorLegend}</ErrorLegend>
		</div>
	);
}
 
export default ComponenteInput;
