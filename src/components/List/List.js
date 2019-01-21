import React from 'react';

function List(props) {
	const renderList = () => {
		let list = [];
		for (let key of Object.keys(props.data)) {
			list.push(<div key={key}>{key} - {props.data[key]}</div>);
		}
		return list;  
	};

	return (
		<div>
			<h1>List!</h1>
			<div>
				<div>{renderList()}</div>
			</div>
		</div>
	);
}

export default List;