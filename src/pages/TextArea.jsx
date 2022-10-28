import React from 'react';

export const TextArea = () => {
	const [textarea, setTextarea] = React.useState('');

	const handleChange = e => {
		if (e.target.value.length <= 148) {
			setTextarea(e.target.value);
		}
	};

	return (
		<div className="center height">
			<textarea style={{ resize: 'none' }} cols="30" rows={textarea.length / 30 + 2} value={textarea} onChange={e => handleChange(e)}></textarea>
			<p>Votre message ({textarea.length}/148)</p>
			{textarea.length >= 148 && <p>Vous avez atteint la limite</p>}
		</div>
	);
};
