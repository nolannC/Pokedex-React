import React from 'react';
import { Pokemon } from '../components/Pokemon';
import './../styles/style.css';

export const Pokemons = () => {
	const [pokemons, setPokemons] = React.useState([]);
	const [allPokemons, setAllPokemons] = React.useState([]);

	const [search, setSearch] = React.useState('');

	React.useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
			.then(res => res.json())
			.then(data => {
				setPokemons(data.results.slice(0, 20));
				setAllPokemons(data.results);
			})
			.catch(err => console.log(err));
	}, []);

	React.useEffect(() => {
		setPokemons(allPokemons.filter(pokemon => pokemon.name.includes(search)));
	}, [search]);

	return (
		<div id="main" className="height">
			<input type="text" placeholder="Recherche" value={search} onChange={e => setSearch(e.target.value)} className={'input'} />
			<div id="pokemonsList">
				{pokemons.map(pokemon => (
					<Pokemon key={pokemon.url} url={pokemon.url} />
				))}
			</div>
		</div>
	);
};
