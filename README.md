# GuauShop: Tienda virtual de complementos y accesorios para perros

Este proyecto es una tienda virtual de complementos y accesorios para perros. La tienda ofrece una amplia variedad de productos para perros. Los usuarios pueden navegar por el catálogo de productos, agregar productos al carrito de compras y realizar pedidos.

## Funcionalidades

- Catálogo de productos: Los usuarios pueden navegar por el catálogo de productos y ver detalles de cada producto, como la descripción, el precio y la disponibilidad.
- Carrito de compras: Los usuarios pueden agregar productos al carrito de compras y ver un resumen de los productos agregados.
- Pago y envío: Los usuarios pueden realizar pedidos y pagar con tarjeta de crédito o débito, así como elegir la dirección de envío.
- Historial de pedidos: Los usuarios pueden ver su historial de pedidos y el estado actual de cada pedido.

## Tecnologías utilizadas

- HTML, CSS y JavaScript para la interfaz de usuario
- Uso de Sass como preprocesador de css para conseguir un código más eficiente y fácil de mantener.


## Instalación

1. Clonar el repositorio: `git clone https://github.com/tu-usuario/guaushop.git`
2. Instalar dependencias: `npm install`
3. Configurar variables de entorno:
   - Crear un archivo `.env` en la raíz del proyecto
   - Agregar las siguientes variables de entorno:
     - `MONGODB_URI`: URL de conexión a la base de datos MongoDB
     - `STRIPE_SECRET_KEY`: Clave secreta de Stripe para pagos con tarjeta
4. Iniciar el servidor: `npm start`

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio
2. Crea una rama con tus cambios: `git checkout -b mi-rama`
3. Realiza los cambios necesarios y haz commits: `git commit -am "Descripción de los cambios"`
4. Haz push a la rama: `git push origin mi-rama`
5. Crea un pull request en GitHub

## Créditos

Este proyecto fue desarrollado por:
- Fran Ramírez
- Sol 
- Santi
- Marcela
- Yeni

## Desarrollo

El proyecto se desarrolló siguiendo una metodología ágil de desarrollo de software, con iteraciones cada día. Se utilizó Git para control de versiones y GitHub para colaboración en equipo. El equipo de desarrollo estaba compuesto por cinco personas: todas desarrolladores, un scrum master y un product owner.

### Planificación

Antes de comenzar el desarrollo, se realizó una planificación detallada del proyecto. Se definieron los requisitos funcionales y no funcionales del proyecto y se elaboró un diagrama de casos de uso para modelar el comportamiento de los usuarios. 

### Implementación

El proyecto se implementó utilizando las tecnologías mencionadas anteriormente. Se siguió una arquitectura MVC (Modelo-Vista-Controlador) para separar la lógica de la aplicación en capas. Se utilizó Bootstrap para la maquetación de la interfaz de usuario y Stripe para procesar pagos con tarjeta de crédito y débito.

Durante el desarrollo, se realizaron pruebas unitarias y de integración para asegurar la calidad del software. También se utilizó herramientas de análisis estático de código para detectar posibles errores y vulnerabilidades.

### Despliegue

El proyecto se desplegó en un servidor VPS (Virtual Private Server) utilizando Nginx como servidor web y pm2 como administrador de procesos de Node.js. Se utilizó MongoDB Atlas como servicio de base de datos en la nube. Se configuró un dominio y se habilitó HTTPS utilizando Let's Encrypt para asegurar las comunicaciones entre el cliente y el servidor.

### Futuras mejoras

Aunque el proyecto cumple con los requisitos iniciales, hay varias mejoras que se podrían implementar en el futuro. Algunas de ellas son:

- Implementar un sistema de autenticación para permitir a los usuarios crear una cuenta y guardar su información de pago.
- Ampliar la variedad de productos ofrecidos en la tienda virtual.
- Mejorar la velocidad de carga de la aplicación mediante técnicas de optimización de rendimiento.
- Implementar una versión móvil de la aplicación.

## Contacto

Si tienes alguna pregunta o comentario sobre el proyecto, por favor contáctanos a través de [correo electrónico]. Estamos abiertos a feedback y sugerencias para mejorar la aplicación.

## Licencia

Este proyecto está bajo la Licencia [Nombre de la licencia]. Ver el archivo `LICENSE` para más detalles.

