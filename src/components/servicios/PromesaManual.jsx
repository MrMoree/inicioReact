const data = [
  {
    id: "001",
    titulo: "Alfajor de Maicena",
    categoria: "Alfajores",
    imagen:
      "https://uploads-ssl.webflow.com/5eb1b1fef466519fb266c194/5fadc310c627236d333a2846_Empaques_Mesa%20de%20trabajo%201.png",
    descripcion:
      "Rellenos con dulce de leche. Decorados con coco rallado. Paquete x 6 unidades",
    precio: 200,
    cantidad: 6,
  },

  {
    id: "002",
    titulo: "Alfajor de Chocolate",
    categoria: "Alfajores",
    imagen:
      "https://uploads-ssl.webflow.com/5eb1b1fef466519fb266c194/5fada020bb83d91da981d455_Empaque%2003.png",
    descripcion:
      "Rellenos con dulce de leche. Cubiertos con baño de chocolate negro. Decorados con maní crocante. Paquete x 6 unidades",
    precio: 240,
    cantidad: 3,
  },

  {
    id: "003",
    titulo: "ALfajor de Chocolate Blanco",
    categoria: "Alfajores",
    imagen:
      "https://uploads-ssl.webflow.com/5eb1b1fef466519fb266c194/5fada01fc6436005c565ad5e_Empaque%2002.png",
    descripcion:
      "Rellenos con dulce de leche. Cubiertos con baño de chocolate blanco. Decorados con maní crocante. Paquete x 6 unidades",
    precio: 240,
    cantidad: 4,
  },

  {
    id: "004",
    titulo: "Alfajor Cordobés con dulce de fruta",
    categoria: "Alfajores",
    imagen:
      "https://uploads-ssl.webflow.com/5eb1b1fef466519fb266c194/5fada023b6c7feccb52ca40c_Empaque%2004.png",
    descripcion:
      "Rellenos con mermelada de membrillo. Cubiertos con baño de azúcar. Paquete x 6 unidades",
    precio: 180,
    cantidad: 4,
  },
];

const ObtenerProducto = new Promise((resolve) => {
  setTimeout(() => {
    resolve(data);
  }, 2000);
});

export default ObtenerProducto;
