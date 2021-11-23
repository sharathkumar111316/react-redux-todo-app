import React from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
	const todos = [
		{id: '1', title: 'todo 1', completed: false},
		{id: '2', title: 'todo 2', completed: true},
		{id: '3', title: 'todo 3', completed: false},
		{id: '4', title: 'todo 4', completed: true},
		{id: '5', title: 'todo 5', completed: false},
	];
	return(
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
				))}
		</ul>
		);
};

export default TodoList;
