import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCardLarge extends React.Component {
  render() {
    const {
      product,
      increaseQuantity,
      decreaseQuantity,
      checkoutPage,
      itemTotal,
    } = this.props;
    const { thumbnail, price, title, id } = product;
    return (
      <main data-testid="product" className="product-card-large">

        <Link
          data-testid="product-detail-link"
          to={ `/${id}` }
          className="product-img-link"
        >
          <img src={ thumbnail } alt={ title } />
        </Link>

        <section className="product-card-large__info">

          <Link
            data-testid="product-detail-link"
            to={ `/${id}` }
            className="title-link"
          >
            <h2 data-testid="shopping-cart-product-name">{title}</h2>
          </Link>

          {
            // checkoutPage propType para exibir os botões de + e - apenas no cart
            // pois este componente é usado no cart e no checkout page.
            checkoutPage
              ? (
                <aside className="product-card-large__aside">
                  <span
                    data-testid="shopping-cart-product-quantity"
                    className="__info--quantity"
                  >
                    {`Qnt. ${product.quantity.toString()}`}
                  </span>
                  <span
                    className="__info--price"
                  >
                    {`R$${(Math.round(itemTotal * 100) / 100).toFixed(2)}`}
                  </span>
                </aside>
              )
              : (

                <aside className="product-card-large__aside">
                  <div className="product-card-large__aside--div">
                    <button
                      className="product-card-large__aside--button"
                      type="button"
                      data-testid="product-decrease-quantity"
                      onClick={ () => decreaseQuantity(product) }
                    >
                      -
                    </button>
                    <span
                      data-testid="shopping-cart-product-quantity"
                      className="__info--quantity"
                    >
                      {product.quantity.toString()}
                    </span>
                    <button
                      className="product-card-large__aside--button"
                      type="button"
                      data-testid="product-increase-quantity"
                      onClick={ () => increaseQuantity(product) }
                    >
                      +
                    </button>
                    <span
                      className="__info--price"
                    >
                      {`R$${(Math.round(price * 100) / 100).toFixed(2)}`}
                    </span>
                  </div>
                </aside>
              )
          }

        </section>
      </main>
    );
  }
}

ProductCardLarge.propTypes = {
  product: propTypes.instanceOf(Object).isRequired,
  increaseQuantity: propTypes.func.isRequired,
  decreaseQuantity: propTypes.func.isRequired,
  checkoutPage: propTypes.bool.isRequired,
  itemTotal: propTypes.number,
};

ProductCardLarge.defaultProps = {
  itemTotal: null,
};

export default ProductCardLarge;
