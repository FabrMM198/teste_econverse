import './Partners.scss';

import Partner1 from '../assets/img/Partners.png';

type Banner = {
  id: number;
  titulo: string;
  texto: string;
  botao: string;
  imagem: string;
};

const banners: Banner[] = [
  { id: 1, titulo: 'Parceiros', texto: 'Lorem ipsum dolor sit amet', botao: 'Confira', imagem: Partner1 },
  { id: 2, titulo: 'Parceiros', texto: 'Lorem ipsum dolor sit amet', botao: 'Confira', imagem: Partner1 },
];

export function Partners() {
    return (
        <section className="partners" aria-label="Parceiros">
            {banners.map((banner) => (
                <article className="partners-banner" key={banner.id}>
                    <img className="partners-image" src={banner.imagem} alt="" title={banner.titulo} />

                    <div className="partners-content">
                        <h2 className="partners-title">{banner.titulo}</h2>
                        <p className="partners-text">{banner.texto}</p>
                        <a className="partners-button" href="#" title={banner.botao}>
                            {banner.botao}
                        </a>
                    </div>
                </article>
            ))}
        </section>
    );
}
