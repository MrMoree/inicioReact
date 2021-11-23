const data = [
  {
    id: "001",
    titulo: "Alfajor de Maicena con Dulce de Leche",
    categoria: "Alfajores",
    imagen:
      "https://static.wixstatic.com/media/29f523_31c4b301eef44450a2bb552944c3cc65~mv2.png/v1/fill/w_261,h_189,al_c,q_85,usm_0.66_1.00_0.01/29f523_31c4b301eef44450a2bb552944c3cc65~mv2.webp",
    descripcion: "lo mas rico de córdoba",
    precio: 10,
  },

  {
    id: "002",
    titulo: "Torta Matera de Naranja",
    categoria: "Tortas",
    imagen:
      "https://static.wixstatic.com/media/29f523_6d76f0e9fee949029ebd0248d046f611~mv2.png/v1/fill/w_261,h_189,al_c,q_85,usm_0.66_1.00_0.01/29f523_6d76f0e9fee949029ebd0248d046f611~mv2.webp",
    descripcion: "lo mas rico de córdoba",
    precio: 20,
  },

  {
    id: "003",
    titulo: "Pepas x24 unidades",
    categoria: "Alfajores",
    imagen:
      "https://static.wixstatic.com/media/29f523_31c4b301eef44450a2bb552944c3cc65~mv2.png/v1/fill/w_261,h_189,al_c,q_85,usm_0.66_1.00_0.01/29f523_31c4b301eef44450a2bb552944c3cc65~mv2.webp",
    descripcion: "lo mas rico de córdoba",
    precio: 15,
  },
];

const ObtenerProducto = new Promise((resolve) => {
  setTimeout(() => {
    resolve(data);
  }, 5000);
});

export default ObtenerProducto;
