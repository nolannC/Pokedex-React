import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DetailsPokemon } from './pages/DetailsPokemon';
import { Pokemons } from './pages/PokemonsList';
import { TextArea } from './pages/TextArea';

const root = document.getElementById('root');
const app = createRoot(root);

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/pokemons" element={<Pokemons />} />
				<Route path="/pokemons/:id" element={<DetailsPokemon />} />
				<Route path="/textarea" element={<TextArea />} />
			</Routes>
		</BrowserRouter>
	);
};

app.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
