<template>
  <b-container fluid>
    <b-row class="mt-2">
      <b-col md="6" sm="12">
        <p class="mt-2"><span class="badge badge-dark">POST</span> REQUESTS</p>
        <p>
          Crear cliente
          <code>POST || https://api-store-php.herokuapp.com/client</code>
        </p>
        <p>
          Crear categoría
          <code>POST || https://api-store-php.herokuapp.com/category</code>
        </p>
        <p>
          Crear producto
          <code>POST || https://api-store-php.herokuapp.com/product</code>
        </p>
        <p class="mt-2"><span class="badge badge-dark">PUT</span> REQUESTS</p>
        <p>
          Actualizar categoría
          <code
            >PUT || https://api-store-php.herokuapp.com/update-category/id</code
          >
        </p>
        <p>
          Actualizar producto
          <code
            >PUT || https://api-store-php.herokuapp.com/update-product/id</code
          >
        </p>
        <p class="mt-2">
          <span class="badge badge-dark">DELETE</span> REQUESTS
        </p>
        <p>
          Eliminar categoría
          <code
            >DELETE ||
            https://api-store-php.herokuapp.com/delete-category/id</code
          >
        </p>
        <p>
          Eliminar producto
          <code
            >DELETE ||
            https://api-store-php.herokuapp.com/delete-product/id</code
          >
        </p>
      </b-col>
      <b-col md="6" sm="12">
        <p class="mt-2"><span class="badge badge-dark">GET</span> REQUESTS</p>
        <p>
          Listar categorías
          <code>GET || https://api-store-php.herokuapp.com/categories</code>
        </p>
        <p>
          Listar categoría por id
          <code>GET || https://api-store-php.herokuapp.com/category/id</code>
        </p>
        <p>
          Listar productos
          <code>GET || https://api-store-php.herokuapp.com/products</code>
        </p>
        <p>
          Listar producto por id
          <code>GET || https://api-store-php.herokuapp.com/product/id</code>
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

