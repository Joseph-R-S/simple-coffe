import './card.css'
import React from 'react'
interface CardProps {
    title: string,
    url: string,
    bom: boolean,
    valor: string,
    star:string,
    puntaje:string,
    votos: string,
    agotado: boolean
}

const Card: React.FC<CardProps> = ({ title, url, bom, valor, star, puntaje, votos, agotado }) => {
    return (
        <div className='container-card'>
            <div className='container-img'>
                <img className='img latte' src={url} />

                <p className='popular' 
                style={bom ? {backgroundColor: '#F6C768'} : {color: ''}}> 
                {bom ? 'Popular' : ''} 
                </p>
            </div>
            <div className='container-title-valor'>
                <span className='title'>{title}</span>
                <span className='valor'>{valor}</span>
            </div>

            <div className='container-estrella'>
                <div className='evaluacion'>
                <img className='star' src={star}/>
                <span className='puntaje'>{puntaje}</span>
                <span className='votos'>{votos}</span>
                </div>
                <span className='agotado'>{agotado ? "Sold out" : ""}</span>
            </div>
            
        </div>
    )
}
export default Card

/*    valor:string,
    popular:boolean,
    puntaje:string,
    votos:string,
    esgotado:boolean*/