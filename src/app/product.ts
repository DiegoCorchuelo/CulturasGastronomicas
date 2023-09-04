export interface Product {
  id: number;
  name: string;
  description: string;
  history: string;
  category: string;
  photo: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Queso Brie',
    description: 'El queso Brie es un queso de pasta blanda y corteza comestible, conocido por su textura cremosa y sabor suave. Tiene un aroma distintivo y una textura sedosa que se intensifican a medida que el queso madura.',
    history: 'El queso Brie tiene una larga historia en Francia y es uno de los quesos más antiguos de la región de Île-de-France. Se cree que su origen se remonta a la época medieval. A lo largo de los siglos, el queso Brie ha sido apreciado por su sabor delicado y se ha convertido en un emblema de la tradición quesera francesa.',
    category: 'Productos lácteos y quesos.',
    photo: 'https://s1.ppllstatics.com/diariovasco/www/multimedia/2023/04/27/brie-cheese-R7OwrZaSYtc4LgVDsFRrVTP-1200x840@DiarioVasco.jpg'
  },
  {
    id: 2,
    name: 'Baguette',
    description: 'La baguette es un pan alargado y crujiente por fuera, pero tierno por dentro. Su forma característica es una de las señas de identidad de la panadería francesa. Es un acompañamiento común en muchas comidas francesas.',
    history: 'La baguette se popularizó en el siglo XIX, aunque panes similares ya se consumían en Francia desde hace siglos. La versión alargada de la baguette se convirtió en un ícono parisino y pronto se extendió por todo el país.',
    category: 'Panadería y productos de pan.',
    photo: 'https://images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: 'Vino Bordeaux',
    description: 'Los vinos Bordeaux provienen de la región vinícola de Burdeos, en el suroeste de Francia. Son famosos por su calidad y diversidad, con una amplia gama de variedades y estilos, tanto tintos como blancos. Los vinos Bordeaux a menudo se caracterizan por su equilibrio y elegancia.',
    history: 'La región de Burdeos tiene una larga tradición vinícola que se remonta a la época romana. A lo largo de los siglos, se ha convertido en una de las regiones vinícolas más prestigiosas del mundo, conocida por su influencia en la enología y la clasificación de los vinos.',
    category: 'Bebidas y vinos.',
    photo: 'https://images.pexels.com/photos/1712737/pexels-photo-1712737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    name: 'Aceite de Oliva Extra Virgen',
    description: 'El aceite de oliva extra virgen es un aceite vegetal obtenido de las aceitunas mediante procesos mecánicos en frío. Es fundamental en la cocina mediterránea, utilizado tanto para cocinar como para aderezar ensaladas y platos diversos. Su sabor va desde frutado hasta picante, y es apreciado por su contenido de grasas saludables.',
    history: 'El aceite de oliva ha sido una parte esencial de la cultura mediterránea durante milenios. Ha tenido un impacto en la cocina, la economía y la vida cotidiana de la región. Su producción y consumo están estrechamente ligados a la historia y la identidad de la gente del Mediterráneo.',
    category: 'Aceites y grasas.',
    photo: 'https://images.pexels.com/photos/16486887/pexels-photo-16486887/free-photo-of-comida-vaso-hoja-cocinando.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 5,
    name: 'Aceitunas',
    description: 'Las aceitunas son frutas de los olivos que se procesan de diversas maneras para su consumo. Pueden ser verdes o negras y se disfrutan en una variedad de platos y como aperitivos. Se sirven en su forma natural o se procesan para producir aceite de oliva.',
    history: 'Las aceitunas han sido un componente fundamental de la dieta mediterránea desde tiempos antiguos. Su cultivo y procesamiento han evolucionado a lo largo de los siglos, y se han convertido en un símbolo de la rica diversidad culinaria de la región.',
    category: 'Frutas y aperitivos.',
    photo: 'https://images.pexels.com/photos/2952653/pexels-photo-2952653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 6,
    name: 'Garbanzos',
    description: 'Los garbanzos son legumbres redondas y de color beige con un sabor suave y textura cremosa cuando se cocinan. Son una fuente rica en proteínas y fibra. En la cocina mediterránea, los garbanzos se utilizan en platos como el hummus, sopas, guisos y ensaladas.',
    history: 'Los garbanzos han sido cultivados en la región mediterránea desde hace miles de años y han sido un alimento básico en muchas culturas mediterráneas. Su versatilidad y valor nutricional los han convertido en un componente esencial de la cocina mediterránea.',
    category: 'Legumbres y granos.',
    photo: 'https://cdn.pixabay.com/photo/2014/04/05/11/40/chickpea-316593_1280.jpg'
  },
  {
    id: 7,
    name: 'Maíz',
    description: 'El maíz es un cultivo fundamental en la dieta mexicana y ha sido un pilar en la alimentación de las culturas indígenas durante siglos. Se utiliza para hacer una variedad de productos como tortillas, tamales, atole y muchos otros platillos icónicos.',
    history: 'El maíz es originario de Mesoamérica y ha sido cultivado en la región durante milenios. Desarrollar técnicas de cultivo y procesamiento del maíz fue un logro crucial en la historia alimentaria de México, y su influencia sigue siendo profunda en la actualidad.',
    category: 'Granos y cereales.',
    photo: 'https://images.unsplash.com/photo-1534991187874-6262aa32d3cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2056&q=80'
  },
  {
    id: 8,
    name: 'Chiles',
    description: 'Los chiles son ingredientes esenciales en la cocina mexicana, aportando una amplia gama de sabores y niveles de picante. Desde los suaves hasta los extremadamente picantes, los chiles se utilizan en salsas, guisos, adobos y como condimentos en muchos platillos.',
    history: 'Los chiles han sido cultivados en México desde hace más de 6,000 años y se consideran uno de los primeros cultivos domesticados en la región. Su variedad y versatilidad enriquecen la gastronomía mexicana y han influido en la comida de todo el mundo.',
    category: 'Condimentos y especias.',
    photo: 'https://cdn.pixabay.com/photo/2015/02/26/07/43/chilli-650004_1280.jpg'
  },
  {
    id: 9,
    name: 'Aguacate',
    description: ' El aguacate es un fruto rico en grasas saludables y se utiliza ampliamente en la cocina mexicana. Se encuentra en guacamole, ensaladas, tacos y una variedad de platillos. Su textura cremosa y sabor suave lo convierten en un componente popular en la gastronomía.',
    history: 'El aguacate es originario de México y ha sido un alimento básico en la dieta de muchas culturas prehispánicas. Su consumo se ha mantenido a lo largo de los siglos y en la actualidad es un elemento distintivo de la cocina mexicana.',
    category: 'Frutas y vegetales.',
    photo: 'https://cdn.pixabay.com/photo/2017/08/15/14/34/avocado-2644150_1280.jpg'
  },
  {
    id: 10,
    name: 'Pasta',
    description: 'La pasta es un ingrediente central en la cocina italiana y se presenta en una variedad de formas y tamaños, como espaguetis, fettuccine, penne y más. Se prepara de diversas maneras, desde simples salsas hasta platillos más elaborados con ingredientes frescos.',
    history: 'La pasta ha sido parte de la dieta italiana durante siglos y se considera una manifestación de la creatividad culinaria de la región. Las diferentes formas y estilos de pasta tienen raíces en diversas tradiciones regionales, lo que enriquece la diversidad de la cocina italiana.',
    category: 'Granos y cereales.',
    photo: 'https://cdn.pixabay.com/photo/2016/08/30/20/20/noodles-1631935_1280.jpg'
  },
  {
    id: 11,
    name: 'Tomates',
    description: 'Los tomates son una base esencial en muchas salsas y platillos italianos, como la salsa de tomate, la pizza y el caprese (ensalada de tomate y mozzarella). Su sabor jugoso y ácido aporta profundidad y frescura a la cocina italiana.',
    history: 'Aunque los tomates no son originarios de Italia, han llegado a ser uno de los ingredientes más icónicos de la cocina italiana. Su introducción y adopción en la gastronomía italiana ha tenido un impacto significativo en la forma en que se preparan los platillos en todo el país.',
    category: 'Frutas y vegetales.',
    photo: 'https://cdn.pixabay.com/photo/2018/07/06/08/49/tomatoes-3520004_1280.jpg'
  },
  {
    id: 12,
    name: 'Queso Parmigiano-Reggiano',
    description: 'Conocido comúnmente como parmesano, el queso Parmigiano-Reggiano es un queso duro y envejecido que se produce en la región de Emilia-Romaña. Tiene un sabor profundo y salado, y se utiliza rallado como condimento en platos de pasta y ensaladas.',
    history: 'El queso Parmigiano-Reggiano tiene una historia que se remonta a siglos atrás en Italia. Su elaboración sigue principios tradicionales y su calidad y sabor distintivos lo han convertido en uno de los quesos más apreciados en todo el mundo.',
    category: 'Productos lácteos y quesos.',
    photo: 'https://images.pexels.com/photos/3693282/pexels-photo-3693282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 13,
    name: 'Arroz de grano corto (Japonica)',
    description: 'El arroz de grano corto, conocido como Japonica, es una variedad de arroz que se cultiva y consume ampliamente en Japón. Su textura pegajosa y suave lo hace ideal para comer con palillos y para la preparación de sushi.',
    history: 'El cultivo de arroz en Japón tiene una larga historia que se remonta a siglos atrás. El arroz Japonica se ha convertido en un pilar en la alimentación japonesa y es un componente fundamental de numerosos platillos.',
    category: 'Granos y cereales.',
    photo: 'https://images.pexels.com/photos/8251401/pexels-photo-8251401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 14,
    name: 'Alga Nori',
    description: 'El alga nori es un tipo de alga marina que se utiliza comúnmente en la cocina japonesa. Es fundamental para la preparación de sushi, ya que se utiliza para envolver los rollos de sushi (maki) y proporciona un sabor y textura característicos.',
    history: 'El uso de algas en la cocina japonesa tiene raíces en tiempos antiguos, y el alga nori se ha convertido en un elemento esencial en la cocina cotidiana y festiva de Japón.',
    category: 'Ingredientes y condimentos.',
    photo: 'https://mejorconsalud.as.com/wp-content/uploads/2020/09/algas-nori.jpg'
  },
  {
    id: 15,
    name: 'Salsa de Soja (Shoyu)',
    description: 'La salsa de soja es un condimento fermentado hecho a base de soja y trigo. Es ampliamente utilizada en la cocina japonesa para realzar el sabor de los platillos. Hay diferentes tipos de salsa de soja, desde la ligera hasta la oscura.',
    history: 'La producción de salsa de soja en Japón tiene una larga historia y se ha refinado a lo largo de los siglos. El shoyu es una parte esencial de la sazón en muchos platillos japoneses y se ha convertido en un condimento distintivo.',
    category: 'Condimentos y salsas.',
    photo: 'https://imagenes.elpais.com/resizer/P8j_UuPn16mXp1OUUqmNmD78sO4=/980x735/filters:focal(1636x1330:1646x1340)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/KVELUSNFAJBWNJNZRJZJEJIK7A.jpg'
  }
];
