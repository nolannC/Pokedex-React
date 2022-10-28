import React from 'react';
import { Link, useParams } from 'react-router-dom';

export const DetailsPokemon = () => {
	const { id } = useParams();
	const [data, setData] = React.useState({});

	React.useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon/' + id)
			.then(res => res.json())
			.then(data => setData(data))
			.catch(err => console.error(err));
	}, []);

	const upperCase = str => str.replace(/(?:^|\s)\S/g, a => a.toUpperCase());

	return (
		<div className="center">
			{data.name && (
				<div className="Pokemon">
					<h2>
						{upperCase(data.name)} - n°{data.id}
					</h2>
					<img src={data.sprites?.other['official-artwork'].front_default} alt="" />
					<ul style={{ margin: '1rem' }}>
						{data.types?.map((type, index) => {
							return <li key={index}>{upperCase(type?.type?.name)}</li>;
						})}
					</ul>
					<p>Height : {data.height}</p>
					<p>Weight : {data.weight}</p>
				</div>
			)}
			<Link to={'/pokemons'}>Retour</Link>
		</div>
	);
};
