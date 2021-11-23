import React, { useState } from 'react';

const AddTodoForm = () => {
	const [value, setValue] = useState('');
	const onSubmit = (event) => {
		event.preventDefault();
		alert('user entered ' + value);
	};

	return(
			<form onSubmit={onSubmit}>
				<label className='sr-only'>Name</label>
				<input
					type='text'
					className='form-control mb-2 mr-sm-2'
					placeholder='Add todo...'
					value={value}
					onChange={(event) => setValue(event.target.value)}
				>
				</input>
				<button type='submit' className='btn btn-primary mb-2'>Submit</button>
			</form>
		);
};

export default AddTodoForm;