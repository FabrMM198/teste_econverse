import './ProductCard.scss';

export type Product = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
  oldPrice?: number;
};

function formatPrice(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

type ProductCardProps = {
  produto: Product;
};

export function ProductCard({ produto }: ProductCardProps) {
  return (
    <article className="product-card">
      <img
        className="product-card-image"
        src={produto.photo}
        alt={produto.productName}
        width={130}
        height={170}
        loading="lazy"
      />

      <h3 className="product-card-name">{produto.descriptionShort}</h3>

      {produto.oldPrice !== undefined && (
        <s className="product-card-old-price">
          {formatPrice(produto.oldPrice)}
        </s>
      )}
      <strong className="product-card-price">{formatPrice(produto.price)}</strong>
      <span className="product-card-installments">
        ou 2x de {formatPrice(produto.price / 2)} sem juros
      </span>
      <span className="product-card-shipping">Frete grátis</span>

      <button type="button" className="product-card-button">
        Comprar
      </button>
    </article>
  );
}