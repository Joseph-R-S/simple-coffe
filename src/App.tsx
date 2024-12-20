import React from "react";

import Button from "./components/button/button";
import './App.css'
import Card from "./components/card/card";

import espresso from './assets/espresso.jpeg';
import capuchino from './assets/cappuchino.jpg';
import homeCoffe from './assets/dacasa.jpeg';
import coffeLate from './assets/cafelatte.jpg'
import chocolate from './assets/chococoffe.jpeg'
import valentine from './assets/valentine.jpeg'

import starFill from './assets/Star_fill.svg';
import star from './assets/Star.svg';
import Footer from "./components/pie/pie";


const App: React.FC = () => {
  return (
    <div className="contenedor">
      <header className='header'>
        <div className='banner'></div>
      </header>

      <div className='ventanaModal'>
        <h2>Our Collection</h2>
        <div className='intro'>
          <p>Introducing our Coffee Collection, a selection of unique coffees from
            different roast types and origins, expertly roasted in small batches
            and shipped fresh weekly.
          </p>
        </div>

        <div className='container-buttons'>
          <div className="contenido-buttons">
            <Button description="All Products" />
            <Button description="Available Now" />
          </div>
        </div>

        <Card title="Capuccino" url={capuchino} bom={true} valor="$5.20" star={starFill} puntaje="4.7" votos="(65 votes)" agotado={false} />
        <Card title="Home Coffe" url={homeCoffe} bom={true} valor="$3.50" star={starFill} puntaje="4.85" votos="(14 votes)" agotado={false} />
        <Card title="Espresso" url={espresso} bom={false} valor="$2.50" star={starFill} puntaje="4.9" votos="(55 votes)" agotado={false} />

        <Card title="Coffe Latte" url={coffeLate} bom={false} valor="$4.50" star={starFill} puntaje="5.0" votos="(23 votes)" agotado={false} />
        <Card title="Coffe Latte" url={chocolate} bom={false} valor="$4.00" star={starFill} puntaje="4.65" votos="(122 votes)" agotado={true} />
        <Card title="Valentine Special" url={valentine} bom={false} valor="$5.50" star={star} puntaje="" votos="No ratings" agotado={false} />
      
        <Footer />
      </div>
      
    </div>
  );
};

export default App
