import React from "react";
import ReactDOM from 'react-dom/client'

//create your first component

import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

const Home = () => {
	return (
		<>
			<Navbar />
			<div className="d-flex justyfy-content-center my-auto">
				<Jumbotron
					tituloJ={"Hay que cuidar el planeta"}
					textoJ={"Cuidar el planeta es esencial para preservar la vida y el equilibrio de los ecosistemas. La contaminación, la deforestación y el cambio climático amenazan los recursos naturales y la biodiversidad, afectando nuestra salud y el futuro de las próximas generaciones. Adoptar hábitos sostenibles, como reciclar, reducir el consumo de plásticos y utilizar energías limpias, es clave para frenar el daño ambiental. Cada pequeña acción cuenta, y si todos contribuimos, podemos proteger la Tierra y garantizar un futuro más saludable para todos."}
					botonJ={"¿Tu lo querrias asi?"}
				/>
			</div>
			<div className="d-flex justify-content-center col-12 my-auto mx-auto">
				<Card
					imagen={"https://media.istockphoto.com/id/1187712122/es/vector/happy-earth-doodle.jpg?s=612x612&w=0&k=20&c=wRHinAO19p4ib0gdvlIkKWcCSpRVvaBST0u3nApLQpg="}
					titulo={"Nuestro planeta"}
					texto={"Hay que cuidar de el"}
				/>
				<Card
					imagen={"https://media.istockphoto.com/id/1187712122/es/vector/happy-earth-doodle.jpg?s=612x612&w=0&k=20&c=wRHinAO19p4ib0gdvlIkKWcCSpRVvaBST0u3nApLQpg="}
					titulo={"Nuestro planeta"}
					texto={"Hay que cuidar de el"}
				/>
				<Card
					imagen={"https://media.istockphoto.com/id/1187712122/es/vector/happy-earth-doodle.jpg?s=612x612&w=0&k=20&c=wRHinAO19p4ib0gdvlIkKWcCSpRVvaBST0u3nApLQpg="}
					titulo={"Nuestro planeta"}
					texto={"Hay que cuidar de el"}
				/>
				<Card
					imagen={"https://media.istockphoto.com/id/1187712122/es/vector/happy-earth-doodle.jpg?s=612x612&w=0&k=20&c=wRHinAO19p4ib0gdvlIkKWcCSpRVvaBST0u3nApLQpg="}
					titulo={"Nuestro planeta"}
					texto={"Hay que cuidar de el"}
				/>
			</div>
			<div className="text-center">
				<Footer
				TituloF={"Vamos a cuidarlo entre todos"}
				TextoF={""}
				TerminadoF={"Copyright &copy; Your Website"} />
			</div>
		
		</>
	)
};

export default Home;