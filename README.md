# Online Store

This project was developed during the web development course at [Trybe](https://www.betrybe.com/). It was developed by a team formed by
[Dayana Dias](https://github.com/DayanadGarcia),
[Humberto Dutra](https://github.com/humbertodutra),
[Marina Fischer](https://github.com/marinafischer), and myself.
The project is a front end application inspired in <a href="https://www.mercadolivre.com.br/" target="_blank">Mercado Livre</a>, the most popular e-commerce site in Latin America. <br>
We used Mercado Livre's own public [API](https://developers.mercadolivre.com.br/pt_br/api-docs-pt-br) 
to feed our front end project. The main goal here was to put in practice our knowledge of basic React development and API requests.

## Installation

Clone this repository
```bash
git clone git@github.com:VitorCorrea18/project-online-store.git
```
In the project's folder install the dependencies
```bash
npm install
```
Start the project
```bash
npm start
```

Now it should be running on your default browser

## Usage

* Home <br>
The user can search for a product using the search bar and clicking on 'Pesquisar' button to show you a list os products, or click on a category on the
left side menu.
Clicking on a product card will take the user to the products page with more details about the product. Here you can write a comment about the product.
The button 'Adicionar ao Carrinho' will add the product to the cart.

* Cart <br>
Clicking on 'Carrinho' on the top rigth corner of the screen will take the user to the cart page with all the products chosen. There are two buttons:
'Continuar Comprando' and 'Finalizar Compra'. The first will take you back to the home screen to see more products and the second will take you to
the Checkout screen.

* Checkout <br>
Here you can see information about the purchase, type your adress and finish the purchase clicking on 'Finalizar Compra'.

## Obervations
  The project could not be completed 100% in the time given to us, as there were much more to study and projects to be carried out,
  so some features were never implemented. With time maybe i can go back to review this and add all the feats we had in mind but for now I'll leave a list with
  the features that were not implemented.
  
<details>
  <summary><strong>Missing Features 👉</strong></summary><br />

## Overall
  * Icons like the cart and payment methods.

## Cart
  * Calculate the total value of the purchase based on the value and quantities chosen for each product
  * The quantity should be limited by the availiable stock.
  * If the user decrease the quantity to 0 the item should be removed from the cart
  
## Checkout
  * It should have three payment options to choose from with the corresponding icons instead of radio buttons
  * Finishing the purchase should take the user to a Thank You page or the home screen
  
</details>
