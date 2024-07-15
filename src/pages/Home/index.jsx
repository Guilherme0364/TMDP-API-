import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Home() {
  return (
	<>
		<div className="background">
			<div id='stars'></div>
			<div id='stars2'></div>
			<div id='stars3'></div>
		</div>

		<div className="home-page">
		<h1 className="home-title">Home</h1>

			
			<Link to="/popular" className='popular-btn'>Filmes</Link>
		</div>
	</>
  );
}

export default Home;
