import { useState } from 'react';
import './Categories.scss';

import tecnologia from '../assets/icons/categories/tecnologia.png';
import supermercado from '../assets/icons/categories/supermercado.png';
import bebidas from '../assets/icons/categories/bebidas.png';
import ferramentas from '../assets/icons/categories/ferramentas.png';
import saude from '../assets/icons/categories/saude.png';
import esportes from '../assets/icons/categories/esportes.png';
import moda from '../assets/icons/categories/moda.png';

type Categoria = {
    nome: string;
    icone: string;
};

const categorias: Categoria[] = [
    { nome: 'Tecnologia', icone: tecnologia },
    { nome: 'Supermercado', icone: supermercado },
    { nome: 'Bebidas', icone: bebidas },
    { nome: 'Ferramentas', icone: ferramentas },
    { nome: 'Saúde', icone: saude },
    { nome: 'Esportes e Fitness', icone: esportes },
    { nome: 'Moda', icone: moda },
];

export function Categories() {
    const [ativa, setAtiva] = useState('Tecnologia');

    return (<nav className="categories" aria-label="Categorias">
        <ul className="categories-list">
            {categorias.map((categoria) => (
                <li key={categoria.nome}>
                    <button
                        type="button"
                        className={`categories-item ${ativa === categoria.nome ? 'is-active' : ''
                            }`}
                        onClick={() => setAtiva(categoria.nome)}
                        aria-pressed={ativa === categoria.nome}
                    >
                        <span className="categories-icon">
                            <img
                                className={
                                    categoria.nome === 'Tecnologia'
                                        ? 'categories-icon-technology'
                                        : undefined
                                }
                                src={categoria.icone}
                                alt=""
                                title={categoria.nome}
                            />
                        </span>
                        <span className="categories-name">{categoria.nome}</span>
                    </button>
                </li>
            ))}
        </ul>
    </nav>
    );
}