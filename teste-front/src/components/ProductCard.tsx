import './ProductCard.scss';
import { formatPrice } from '../utils/formatPrice';

export type Product = {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
    oldPrice?: number;
};

type ProductCardProps = {
    produto: Product;
    onSelect: (produto: Product) => void;
};

export function ProductCard({ produto, onSelect }: ProductCardProps) {
    const precoAntigo =
        produto.oldPrice ?? Math.round(produto.price * 1.1 * 100) / 100;

    return (
          <article className="product-card">
              <button
                  type="button"
                  className="product-card-details"
                  onClick={() => onSelect(produto)}
                  aria-label={`Ver detalhes de ${produto.productName}`}
              >
                  <img
                      className="product-card-image"
                      src={produto.photo}
                      alt=""
                      width={130}
                      height={170}
                      loading="lazy"
                  />

                  <span className="product-card-name">{produto.descriptionShort}</span>

                  <s
                      className="product-card-old-price"
                      title="Preço demonstrativo, calculado 10% acima do preço atual"
                  >
                      {formatPrice(precoAntigo)}
                  </s>
                  <strong className="product-card-price">{formatPrice(produto.price)}</strong>
                  <span className="product-card-installments">
                      ou 2x de {formatPrice(produto.price / 2)} sem juros
                  </span>
                  <span className="product-card-shipping">Frete grátis</span>
              </button>

              <button
                  type="button"
                  className="product-card-button"
                  onClick={() => onSelect(produto)}
              >
                  Comprar
              </button>
          </article>
    );
}