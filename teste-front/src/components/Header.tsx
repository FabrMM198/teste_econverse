import './Header.scss';

import logo from '../assets/img/Logo_Econverse.png';
import search from '../assets/icons/MagnifyingGlass.png';
import shield from '../assets/icons/ShieldCheck.png';
import truck from '../assets/icons/Truck.png';
import card from '../assets/icons/CreditCard.png';
import orders from '../assets/icons/Group.png';
import heart from '../assets/icons/Heart.png';
import user from '../assets/icons/UserCircle.png';
import cart from '../assets/icons/ShoppingCart.png';
import crown from '../assets/icons/CrownSimple.png';

type Beneficio = {
  icone: string;
  antes?: string;
  destaque: string;
  depois?: string;
};

const beneficios: Beneficio[] = [
  { icone: shield, antes: 'Compra', destaque: '100% segura' },
  { icone: truck, destaque: 'Frete grátis', depois: 'acima de R$ 200' },
  { icone: card, destaque: 'Parcele', depois: 'suas compras' },
];

type LinkMenu = {
  nome: string;
  destaque?: boolean;
};

const menu: LinkMenu[] = [
  { nome: 'Todas categorias' },
  { nome: 'Supermercado' },
  { nome: 'Livros' },
  { nome: 'Moda' },
  { nome: 'Lançamentos' },
  { nome: 'Ofertas do dia', destaque: true },
];

export function Header() {
    return (
        <header className="header">
            <div className="header-benefits">
                {beneficios.map((b) => (
            <div className="benefit" key={b.destaque}>
                <img src={b.icone} alt="" />
                <span>
                    {b.antes} <strong>{b.destaque}</strong> {b.depois}
                </span>
            </div>
            ))}
            </div>
            <div className="header-main">
                <img src={logo} alt="Logo da Econverse" className="header-logo" />
                <div className="header-search">
                    <input type="text" placeholder="O que você está buscando?" />
                    <button>
                        <img src={search} alt="Busca" />
                    </button>
                </div>
                <div className="header-icons">
                    <img src={orders} alt="Pedidos" />
                    <img src={heart} alt="Favoritos" />
                    <img src={user} alt="Usuário" />
                    <img src={cart} alt="Carrinho" />
                </div>
            </div>
            <nav className="header-menu">
                <ul>
                    {menu.map((item) => (
                        <li key={item.nome} className={item.destaque ? 'destaque' : ''}>
                            {item.nome}
                        </li>
                    ))}
                </ul>
                <a href="#" className="header-subscription">
                    <img src={crown} alt="Crown" />
                    Assinatura
                </a>
            </nav>
        </header>
    );
}