import React from 'react';

const Successmessage = ({ targetName }) => {
	return (
		<div>
			<h1>
				<span>Welcome</span>
				<span>{targetName[0].name}</span>
			</h1>
			<h2>Redirecting to your account</h2>
		</div>
	);
};

export default Successmessage;
