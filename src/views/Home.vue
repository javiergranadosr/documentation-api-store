<template>
  <b-container fluid>
    <b-row class="mt-2">
      <b-col md="6" sm="12">
        <p class="mt-2"><span class="badge badge-dark">POST</span> REQUESTS</p>
        <p>
          Crear cliente
          <code>POST || url/client</code>
        </p>
        <p>
          Crear categoría
          <code>POST || url/category</code>
        </p>
        <p>
          Crear producto
          <code>POST || url/product</code>
        </p>
        <p class="mt-2"><span class="badge badge-dark">PUT</span> REQUESTS</p>
        <p>
          Actualizar categoría
          <code
            >PUT || url/update-category/id</code
          >
        </p>
        <p>
          Actualizar producto
          <code
            >PUT || url/update-product/id</code
          >
        </p>
        <p class="mt-2">
          <span class="badge badge-dark">DELETE</span> REQUESTS
        </p>
        <p>
          Eliminar categoría
          <code
            >DELETE ||
            url/delete-category/id</code
          >
        </p>
        <p>
          Eliminar producto
          <code
            >DELETE ||
            url/delete-product/id</code
          >
        </p>
      </b-col>
      <b-col md="6" sm="12">
        <p class="mt-2"><span class="badge badge-dark">GET</span> REQUESTS</p>
        <p>
          Listar categorías
          <code>GET || url/categories</code>
        </p>
        <p>
          Listar categoría por id
          <code>GET || url/category/id</code>
        </p>
        <p>
          Listar productos
          <code>GET || url/products</code>
        </p>
        <p>
          Listar producto por id
          <code>GET || url/product/id</code>
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

