import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Pokemon = ({ url }) => {
	const navigate = useNavigate();
	const [data, setData] = React.useState({});

	React.useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(data => setData(data))
			.catch(err => console.error(err));
	}, []);

	const upperCase = str => str.replace(/(?:^|\s)\S/g, a => a.toUpperCase());

	return (
		<div className="Pokemon" onClick={() => navigate(`/pokemons/${data?.id}`)}>
			{data.sprites && (
				<>
					<h2>
						{data.id} - {upperCase(data.name)}
					</h2>
					<img src={data.sprites?.other['official-artwork'].front_default} alt="" />
				</>
			)}
		</div>
	);
};
