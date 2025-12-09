# DELICIAS-REACT
## DESCRIPCION
- Nuestro proyecto se centra a las pastelerias ya que funciona como una tienda de venta y gestiòn de productos de pasteleria que le permite a los usuarios ver el catalogo de productos con su nombre, precio, su propia descripcion permitiendo agregar al carrito y pagar su pedido. En parte del dueño o vendedor en nuestro aplicativo le permite gestiònar y controlar sus productos que estan almacenados en el aplicativo.
## TECNOLOGIAS y DEPENDENCIAS UTILIZADAS 
- libreria React (vite): Se uso como base para creacion de componentes y estructuras del proyecto.
- Taiwindcss (vite): se utilizo para la estetica del proyecto mediante las utilidades de clase que nos proporciona Taiwindcss.
- Axios: nos facilita con la comunicacion entre cliente servidor ayudandonos con las peticiones a las api externas y conexiones http, get, post, put, delete.
- Json-server: se utilizo de prueba al iniciio del proyecto creando  una api simulada localmente con archivo bd.js
- Lucide-React: son iconos hecho apartir de componentes que se acoplan al proyecto de forma versatil.
- React-router-dom: se utilizo para la conexion de navegacion entre las diferentes vistas.
## ESTRUCTURA DEL PROYECTO
```
Delicias-React/
│
├─ public/
│ ├─ images/                 #imagenes estaticas utilizadas
|    └─imgCarrusel/  
├─ src/
│  ├─ assets/                
│  │   └─ fonts/             # El tipo de letra que se utiliza en el proyecto
│  │
│  ├─ components/            # Componentes reutilizables y visuales
│  │   ├─ Alert.jsx          
│  │   ├─ Loading.jsx       
│  │   ├─ Card.jsx           
│  │   ├─ CartShop.jsx 
│  │   ├─ Carrusel.jsx     
│  │   ├─ ListCard.jsx    
│  │   ├─ Footer.jsx
│  │   ├─ FormLogin.jsx
│  │   ├─ Header.jsx
│  │   ├─ HeaderContainer.jsx
│  │   ├─ Hero.jsx
│  │   ├─ Modal.jsx
│  │   ├─ ProductForm.jsx
│  │   ├─ ProductFormContainer.jsx
│  │   ├─ Table.jsx   
│  │   └─ TableContainer.jsx     
│  │
│  ├─ context/      #contexto del carrito de compras
│  │   ├─ Cart.jsx
|  |
│  ├─ data/           # api simulada con json
│  │   ├─ bd.json
|  |
│  ├─ hook/              # custom hooks 
│  │   ├─ useCart.js
|  |   └─ useModal.js  
|  |
│  ├─ pages/                    # Vistas o pantallas principales
│  │   ├─ Dashboard.jsx               
│  │   ├─ DashboardContainer.jsx
│  │   ├─ Login.jsx
│  │   ├─ ProductTiendaContainer.jsx         
│  │   └─ ProductTienda.jsx           
│  │
│  ├─ services/              # Comunicación con la API (Axios)
│  │   └─ productApi.js
│  │
│  ├─ utils/       # funciones reutilizables
│  │   └─ utilitis.js
│  │
│  ├─ App.jsx                # Enrutador principal o punto de entrada de componentes
│  ├─ main.jsx               # Renderiza la app dentro del root DOM
│  ├─ index.css              # Estilos globales (Taiwindcss)
│  
│
├─ package.json
├─ vite.config.js
└─ README.md
```

## INSTRUCCIONES DE INSTACION LOCAL
 - Primero clona nuestro repositorio en tu equipo
 ```bash
  // desde tu terminal
  git clone https://github.com/cristhianpa22/Delicias-react.git
  ```
- Segundo descarga las dependencias del proyecto
  ```bash
  // desde tu terminal
  npm install
  ```
- Tercero configuracion de variables de entorno
    > copia la plantilla .env.example y cambia el nombre a .env <br>
    > obten la URl de la api externa y pegala en ese archivo
- Por ultimo sube los servicios de vite
   ```bash
  // desde tu terminal
  npm run dev
  ```

## DESCRIPCION DE LAS VISTAS
- Pagina Tienda (ProductTIenda.jsx): Es la pagina pricipal que muestra los productos a la venta e integra un carrito simulando una compra permitiendo al comprador final interactuar con la pagina
- Login (Login.jsx): En esta vista permite al usuario simular logearse a la vista de Dasboard gestionar los productos que hay en la tabla.
- Dashboard (Dashboard.jsx): En esta vista el vendedor puede modificar, agregar y eliminar los productos que se mostraran  en la pagina principal

## COMPONENTES PRINCIPALES Y SU FUNCION
- Alert.jsx: muestra los mensajes de error o de exito de una manera estetica
- Loadin.jsx: Es el que muestra un icono animado y un mensaje mientras se cargan los productos de la api
- Card.jsx: Renderiza los productos de la api de una manera estetica
- CartShop: Este componente nos muestra una mini carta cada vez que el usuario agrege un nuevo producto al carrito
- Table.jsx: Es el componente que muestra los productos y nos permite editar, eliminar un producto
- ProductForm: Es el componente que piede la informacion de un nuevo producto a agregar y valida sus campos
- Modal.jsx: Es el que muestra en forma de pantalla emergente el formulario y el carrito de compras
- Header.jsx: Este es el encargadode mostrar el icono del carrito y de contener la navegacion hacia la siguientes vistas

## CONSUMO DE API
- Se utilizo el api de mockapi para traer los productos que estan almacenados alli
   
