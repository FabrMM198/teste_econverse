import { useEffect, useId, useRef, useState } from 'react';
import './ProductSection.scss';
import { formatPrice } from '../utils/formatPrice';
import { ProductCard, type Product } from './ProductCard';

const API_URL = '/api/products';

const abas = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos'];
const VISIVEIS = 4;

type ProductCarouselProps = {
    produtos: Product[];
    onSelect: (produto: Product) => void;
};

function ProductCarousel({ produtos, onSelect }: ProductCarouselProps) {
    const [indice, setIndice] = useState(0);
    const tituloId = useId();
    const ultimoIndice = Math.max(produtos.length - VISIVEIS, 0);

    return (
        <section className="products-carousel-section" aria-labelledby={tituloId}>
            <div className="products-heading">
                <h2 className="products-title" id={tituloId}>
                    Produtos relacionados
                </h2>
                <span className="products-view-all">Ver todos</span>
            </div>

            <div className="products-carousel">
                <button
                    type="button"
                    className="products-arrow products-arrow-prev"
                    aria-label="Produtos anteriores"
                    onClick={() => setIndice((i) => Math.max(i - 1, 0))}
                    disabled={indice === 0}
                >
                    ‹
                </button>

                <div className="products-viewport">
                    <div
                        className="products-track"
                        style={{ transform: `translateX(calc(${indice} * -1 * (25% + 6px)))` }}
                    >
                        {produtos.map((produto, posicao) => (
                            <ProductCard
                                key={produto.productName}
                                produto={produto}
                                onSelect={onSelect}
                                oculto={posicao < indice || posicao >= indice + VISIVEIS}
                            />
                        ))}
                    </div>
                </div>

                <button
                    type="button"
                    className="products-arrow products-arrow-next"
                    aria-label="Próximos produtos"
                    onClick={() => setIndice((i) => Math.min(i + 1, ultimoIndice))}
                    disabled={indice === ultimoIndice}
                >
                    ›
                </button>
            </div>
        </section>
    );
}

export function ProductSection() {
    const [produtos, setProdutos] = useState<Product[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(false);
    const [abaAtiva, setAbaAtiva] = useState('Celular');
    const [indice, setIndice] = useState(0);
    const [produtoSelecionado, setProdutoSelecionado] = useState<Product | null>(null);
    const [quantidade, setQuantidade] = useState(1);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const tituloId = useId();
    const ultimoIndice = Math.max(produtos.length - VISIVEIS, 0);

    useEffect(() => {
        if (produtoSelecionado) {
            dialogRef.current?.showModal();
        }
    }, [produtoSelecionado]);

    function selecionarProduto(produto: Product) {
        setQuantidade(1);
        setProdutoSelecionado(produto);
    }

    useEffect(() => {
        async function carregarProdutos() {
            try {
                const resposta = await fetch(API_URL);
                if (!resposta.ok) throw new Error('Falha ao buscar produtos');

                const dados: { products: Product[] } = await resposta.json();
                setProdutos(dados.products);
            } catch (error) {
                console.error('Falha ao carregar produtos da API Econverse:', error);
                setErro(true);
            } finally {
                setCarregando(false);
            }
        }

        carregarProdutos();
    }, []);

    return (
        <div className="products">
            <h2 className="products-title" id={tituloId}>
                Produtos relacionados
            </h2>

            <ul className="products-tabs">
                {abas.map((aba) => (
                    <li key={aba}>
                        <button
                            type="button"
                            className={abaAtiva === aba ? 'is-active' : ''}
                            onClick={() => setAbaAtiva(aba)}
                        >
                            {aba}
                        </button>
                    </li>
                ))}
            </ul>

            {carregando && <p className="products-message">Carregando produtos...</p>}
            {erro && (
                <p className="products-message">
                    Não foi possível carregar os produtos. Tente novamente mais tarde.
                </p>
            )}

            {produtos.length > 0 && (
                <>
                    <div className="products-carousel">
                        <button
                            type="button"
                            className="products-arrow products-arrow-prev"
                            aria-label="Produtos anteriores"
                            onClick={() => setIndice((i) => Math.max(i - 1, 0))}
                            disabled={indice === 0}
                        >
                            ‹
                        </button>

                        <div className="products-viewport">
                            <div
                                className="products-track"
                                style={{
                                    transform: `translateX(calc(${indice} * -1 * (25% + 6px)))`,
                                }}
                            >
                                {produtos.map((produto, posicao) => (
                                    <ProductCard
                                        key={produto.productName}
                                        produto={produto}
                                        onSelect={selecionarProduto}
                                        oculto={
                                            posicao < indice ||
                                            posicao >= indice + VISIVEIS
                                        }
                                    />
                                ))}
                            </div>
                        </div>

                        <button
                            type="button"
                            className="products-arrow products-arrow-next"
                            aria-label="Próximos produtos"
                            onClick={() =>
                                setIndice((i) => Math.min(i + 1, ultimoIndice))
                            }
                            disabled={indice === ultimoIndice}
                        >
                            ›
                        </button>
                    </div>
                    <ProductCarousel produtos={produtos} onSelect={selecionarProduto} />
                    <ProductCarousel produtos={produtos} onSelect={selecionarProduto} />
                </>
            )}

            {produtoSelecionado && (
                <dialog
                    ref={dialogRef}
                    className="product-modal"
                    aria-labelledby="product-modal-title"
                    onClose={() => setProdutoSelecionado(null)}
                    onClick={(event) => {
                        if (event.target === dialogRef.current) {
                            dialogRef.current.close();
                        }
                    }}
                >
                    <div className="product-modal-content">
                        <button
                            type="button"
                            className="product-modal-close"
                            aria-label="Fechar detalhes do produto"
                            onClick={() => dialogRef.current?.close()}
                        >
                            &times;
                        </button>
                        <img
                            className="product-modal-image"
                            src={produtoSelecionado.photo}
                            alt={produtoSelecionado.productName}
                        />
                        <div className="product-modal-info">
                            <h2 id="product-modal-title">
                                {produtoSelecionado.productName}
                            </h2>
                            <strong className="product-modal-price">
                                {formatPrice(produtoSelecionado.price)}
                            </strong>
                            <p className="product-modal-description">
                                {produtoSelecionado.descriptionShort}
                            </p>
                            <span className="product-modal-more">
                                Veja mais detalhes do produto ›
                            </span>
                            <div className="product-modal-actions">
                                <div
                                    className="product-modal-quantity"
                                    role="group"
                                    aria-label="Quantidade do produto"
                                >
                                    <button
                                        type="button"
                                        aria-label="Diminuir quantidade"
                                        onClick={() =>
                                            setQuantidade((atual) => Math.max(1, atual - 1))
                                        }
                                        disabled={quantidade === 1}
                                    >
                                        −
                                    </button>
                                    <span aria-live="polite">
                                        {String(quantidade).padStart(2, '0')}
                                    </span>
                                    <button
                                        type="button"
                                        aria-label="Aumentar quantidade"
                                        onClick={() => setQuantidade((atual) => atual + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    className="product-modal-buy"
                                >
                                    Comprar
                                </button>
                            </div>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
}