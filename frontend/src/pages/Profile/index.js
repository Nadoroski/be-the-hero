import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import Logoimg from '../../assets/logo.svg';

export default function Profile(){

    const [incidents, setIncidents] = useState([]);

    const history = useHistory('');

    const OngId = localStorage.getItem('ongId');
    const OngName = localStorage.getItem('ongName');

    useEffect(()=>{
        api.get('profile',{
            headers: {
                Authorization: OngId,
            }
        }).then(response=>{
            setIncidents(response.data);
        })
    },[OngId]);

    async function handleDeleteIncident(id){
        try {
          await api.delete(`incidents/${id}`, {
            headers: {
                Authorization: OngId,
            }
          });

          setIncidents(incidents.filter(incidents=> incidents.id !== id));

        } catch (error) {
            alert('Erro ao deletar caso, tente novamente')
        }
    }

    function handleLogout(){
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={Logoimg} alt="Be The Hero"/>
                <span>Bem vinda, {OngName}</span>

                <Link className="button" to="/incidents/new">
                    Cadastrar novo caso
                </Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incidents => (
                    <li key={incidents.id}>
                        <strong>CASO:</strong>
                        <p>{incidents.title}</p>

                        <strong>DESCEIÇÃO:</strong>
                        <p>{incidents.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR',{style:'currency', currency: 'BRL'}).format(incidents.value)}</p>

                        <button onClick={()=> handleDeleteIncident(incidents.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}