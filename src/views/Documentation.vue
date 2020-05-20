<template>
  <b-container fluid class="mt-4">
    <b-card
      title="Instrucciones para el consumo de API RESTful API STORE"
      sub-title="Pasos para probar API STORE en POSTMAN"
    >
      <b-row class="mt-3">
        <b-col md="6" sm="12">
          <p>
            PASO: 1 Instalar postman <br />
            <code>
              <a href="https://www.postman.com/downloads/" target="_blank"
                >https://www.postman.com/downloads/</a
              ></code
            >
          </p>
          <p>
            Paso: 2 Crear cliente <br />
            <code>
              Parámetros a pasar en postman:
            </code>
            <code>
              <ol>
                <li>name_client</li>
                <li>surname</li>
                <li>email</li>
              </ol>
            </code>
          </p>
          <p>
            PASO: 3 Ingresar credenciales de tipo Basic Auth <br />
            <code>
              Parámetros a pasar en postman:
            </code>
            <br />
            <code>
              username: id_client
            </code>
            <br />
            <code>
              password: secret_key
            </code>
          </p>
        </b-col>
        <b-col md="6" sm="12">
          <p>
            Paso: 4 Crear categoría <br />
            <code>
              Parámetros a pasar en postman:
            </code>
            <code>
              <ol>
                <li>name</li>
              </ol>
            </code>
          </p>
          <p>
            Paso: 5 Crear producto <br />
            <code>
              Parámetros a pasar en postman:
            </code>
            <code>
              <ol>
                <li>name</li>
                <li>description</li>
                <li>category -> Nota: Ingresar el id de la categoría</li>
                <li>price</li>
              </ol>
            </code>
          </p>
          <p>
            Listo ahora puedes disfrutar de la API STORE
          </p>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>
