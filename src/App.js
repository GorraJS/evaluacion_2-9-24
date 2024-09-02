import "./App.css";
import { useState } from "react";

function App() {
	const [term, setTerm] = useState([]);
	const [term2, setTerm2] = useState([]);
	const [search, setSearch] = useState("");

	const getWeb = () => {
		fetch("https://api.adviceslip.com/advice")
			.then((res) => res.json())
			.then((data) => setTerm(data.slip.advice));
	};

	const buscar = () => {
		fetch(`https://api.adviceslip.com/advice/search/${search}`)
			.then((res) => res.json())
			.then((data) => setTerm2(data.slips[0].advice));
	};

	const handleTermChange = (e) => setSearch(e.target.value);

	const Submit1 = (e) => {
		e.preventDefault();
    setTerm(getWeb());
	};

  const Submit2 = (e) => {
    e.preventDefault()
    setTerm2(buscar())
  }

	return (
		<main>
			<h1>Evaluación React - Requests</h1>
			<h1>Consejos de vida</h1>
			<h3>{getWeb()}</h3>
      <div>
				<h2>Obtener un consejo aleatorio</h2>
				<button type="submit" onClick={Submit1}>
					Obtener
				</button>
				<p className="result-box">{term}</p>
			</div>

			<div>
				<h2>Buscar un consejo</h2>
				<input type="text" value={search} onChange={handleTermChange} />
				<button type="submit" onClick={Submit2}>Enviar</button>
				<h3>Resultados de búsqueda:</h3>
				<p className="result-box">{term2}</p>
			</div>
		</main>
	);
}

export default App;
