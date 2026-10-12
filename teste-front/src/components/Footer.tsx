import './Footer.scss';

import logo from '../assets/img/Logo_Econverse.png';
import instagram from '../assets/icons/social/instagram.png';
import facebook from '../assets/icons/social/facebook.png';
import linkedin from '../assets/icons/social/linkedin.png';

type RedeSocial = {
  nome: string;
  icone: string;
  url: string;
};

type ColunaLinks = {
  titulo: string;
  links: string[];
};

const redes: RedeSocial[] = [
  { nome: 'Instagram', icone: instagram, url: '#' },
  { nome: 'Facebook', icone: facebook, url: '#' },
  { nome: 'LinkedIn', icone: linkedin, url: '#' },
];

const colunas: ColunaLinks[] = [
  { titulo: 'Institucional', links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'] },
  { titulo: 'Ajuda', links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'] },
  { titulo: 'Termos', links: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'] },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <img className="footer-logo" src={logo} alt="Econverse" title="Econverse" loading="lazy" />
          <p className="footer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <ul className="footer-social">
            {redes.map((rede) => (
              <li key={rede.nome}>
                <a href={rede.url} aria-label={rede.nome} title= {rede.nome}>
                  <img src={rede.icone} alt="" title={rede.nome} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-columns">
          {colunas.map((coluna) => (
            <nav key={coluna.titulo} aria-label={coluna.titulo}>
              <h2 className="footer-title">{coluna.titulo}</h2>
              <ul className="footer-links">
                {coluna.links.map((link) => (
                  <li key={link}>
                    <a href="#" title={link}>{link}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <p className="footer-copy">
        Site feito por Fabrício M. Moura para o processo seletivo da Econverse.
      </p>
    </footer>
  );
}