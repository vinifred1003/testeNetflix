//Componente Inicial
import { useEffect } from 'react';
import './Home.css';
import React, { useState } from 'react';

export default function Home() {
    const [tvs, setTVs] = useState()

    let getData = async () => {
        const axios = require('axios');
        let data = '';

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:3001/allCategories',
            headers: {},
            data: data
        };

        axios.request(config)
            .then((response) => {
                return JSON.stringify(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(() => {

        getData().then((data) => {
            console.log(data)
            setTVs(data)
        })

    }, [])

    let showTvs = () => {
        let html = []

        tvs?.genres.forEach(element => {
            html.push(<div key={element.id} className='tvs'>
                <p> <label>Id:</label> {element.id}</p>
                <p> <label>Name:</label> {element.name}</p>
            </div>
            )
        });

        return html
    }

    return (
        <div>

            {/*Navegar*/}
            {/*Conteudo*/}
            {/*Rodapé*/}

            <h1>Teste</h1>

            {showTvs()}


        </div>
    )
}