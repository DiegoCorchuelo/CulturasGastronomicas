import { Culture } from './culture';

export const CULTURES: Culture[] = [

  {
    id: 1,
    name: 'Cultura Gastronómica Francesa',
    photo: 'https://images.pexels.com/photos/2267348/pexels-photo-2267348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'La cultura gastronómica francesa es famosa por su refinamiento y diversidad. Desde los croissants recién horneados hasta los sofisticados platos de alta cocina, la cocina francesa es una celebración de la creatividad y el arte culinario. Los vinos y quesos franceses también juegan un papel crucial en esta cultura, aportando sabores únicos y auténticos.',
    countries: ['Francia'],
    products: [
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
      }
    ],
    recipes: [
      {
        name: 'Ratatouille',
        description: 'Ratatouille es un plato tradicional provenzal que combina una variedad de verduras.',
        photo: 'https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2140&q=80',
        preparation: `
          La preparación de Ratatouille implica cortar en rodajas finas calabacín, berenjena y tomate.
          1. En un sartén grande, calienta aceite de oliva y saltea cebolla y ajo.
          2. Agrega calabacín y berenjena, y cocina hasta que estén tiernos.
          3. Agrega tomate, pimientos, albahaca y orégano, y cocina unos minutos más.
          4. Coloca las verduras en capas en un molde para hornear y hornea hasta que estén cocidas.
          5. Sirve caliente como acompañamiento o plato principal. ¡Listo para disfrutar!
        `,
        video: './assets/videos/ratatouille.mp4'
      },

      {
        name: 'Crème Brûlée',
        description: 'La Crème Brûlée es un postre elegante y clásico de la cocina francesa.',
        photo: 'https://www.splenda.com/wp-content/themes/bistrotheme/assets/recipe-images/coconut-creme-brulee.jpg',
        preparation: `
          La preparación de Crème Brûlée involucra infusionar crema con vainilla y luego hornearla.
          1. Calienta crema y vainilla en una cacerola hasta que esté a punto de hervir.
          2. En un tazón aparte, bate yemas de huevo y azúcar hasta que estén cremosas.
          3. Vierte la crema caliente sobre las yemas, mezclando constantemente.
          4. Luego, cuela la mezcla y distribúyela en moldes individuales.
          5. Hornea en baño maría hasta que el centro esté firme pero ligeramente tembloroso.
          6. Enfría las Crème Brûlée en el refrigerador durante varias horas.
          7. Antes de servir, espolvorea azúcar sobre la superficie y carameliza con un soplete.
          8. Deja que el caramelo se endurezca antes de disfrutar este delicioso postre.
        `,
        video: './assets/videos/cremeBrulee.mp4'
      }
    ],
    restaurants: [
      {
        id: 1,
        name: 'L\'Arpège',
        city: 'Paris',
        country: 'France',
        michelinStars: 3,
        michelinDate: '2021'
      },
      {
        id:2,
        name: 'Le Comptoir du Relais',
        city: 'Paris',
        country: 'France',
        michelinStars: 1,
        michelinDate: '2021'
      },
      {
        id: 3,
        name: 'Auberge du Vieux Puits',
        city: 'Fontjoncouse',
        country: 'France',
        michelinStars: 3,
        michelinDate: '2021'
      }
    ]
  },

  {
    id: 2,
    name: 'Cultura Gastronómica Mediterránea',
    photo: 'https://images.pexels.com/photos/984888/pexels-photo-984888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'La cultura gastronómica mediterránea abarca una amplia región que incluye países como Portugal, España, Marruecos y Grecia. Con una base de ingredientes frescos como el aceite de oliva, las hierbas aromáticas y los frutos del mar, esta cocina se destaca por su enfoque saludable y sabores intensos. Desde la paella española hasta el tagine marroquí, cada plato es un testimonio de la riqueza culinaria de la región.',
    countries: ['Portugal', ' España', ' Marruecos', ' Grecia', ' Italia', ' Turquía', ' Túnez', ' Líbano', ' Egipto', ' Croacia'],
    products: [
      {
        id: 1,
        name: 'Aceite de Oliva Extra Virgen',
        description: 'El aceite de oliva extra virgen es un aceite vegetal obtenido de las aceitunas mediante procesos mecánicos en frío. Es fundamental en la cocina mediterránea, utilizado tanto para cocinar como para aderezar ensaladas y platos diversos. Su sabor va desde frutado hasta picante, y es apreciado por su contenido de grasas saludables.',
        history: 'El aceite de oliva ha sido una parte esencial de la cultura mediterránea durante milenios. Ha tenido un impacto en la cocina, la economía y la vida cotidiana de la región. Su producción y consumo están estrechamente ligados a la historia y la identidad de la gente del Mediterráneo.',
        category: 'Aceites y grasas.',
        photo: 'https://images.pexels.com/photos/16486887/pexels-photo-16486887/free-photo-of-comida-vaso-hoja-cocinando.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 2,
        name: 'Aceitunas',
        description: 'Las aceitunas son frutas de los olivos que se procesan de diversas maneras para su consumo. Pueden ser verdes o negras y se disfrutan en una variedad de platos y como aperitivos. Se sirven en su forma natural o se procesan para producir aceite de oliva.',
        history: 'Las aceitunas han sido un componente fundamental de la dieta mediterránea desde tiempos antiguos. Su cultivo y procesamiento han evolucionado a lo largo de los siglos, y se han convertido en un símbolo de la rica diversidad culinaria de la región.',
        category: 'Frutas y aperitivos.',
        photo: 'https://images.pexels.com/photos/2952653/pexels-photo-2952653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 3,
        name: 'Garbanzos',
        description: 'Los garbanzos son legumbres redondas y de color beige con un sabor suave y textura cremosa cuando se cocinan. Son una fuente rica en proteínas y fibra. En la cocina mediterránea, los garbanzos se utilizan en platos como el hummus, sopas, guisos y ensaladas.',
        history: 'Los garbanzos han sido cultivados en la región mediterránea desde hace miles de años y han sido un alimento básico en muchas culturas mediterráneas. Su versatilidad y valor nutricional los han convertido en un componente esencial de la cocina mediterránea.',
        category: 'Legumbres y granos.',
        photo: 'https://cdn.pixabay.com/photo/2014/04/05/11/40/chickpea-316593_1280.jpg'
      }
    ],
    recipes: [
      {
        name: 'Paella Valenciana',
        description: 'La Paella Valenciana es un icónico plato español que combina arroz con pollo, conejo y verduras.',
        photo: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        preparation: `
          La preparación de la Paella Valenciana implica cocinar el arroz en un sartén ancho y poco profundo.
          1. Calienta aceite de oliva en el sartén y sofríe cebolla y pimiento.
          2. Agrega el arroz y remueve hasta que esté bien cubierto de aceite.
          3. Añade azafrán y pimentón para dar sabor y color.
          4. Vierte caldo caliente y distribuye el pollo y conejo sobre el arroz.
          5. Agrega judías verdes y garrofón, y cocina a fuego medio-bajo.
          6. Cuando el arroz esté cocido, coloca camarones y mejillones en la paella.
          7. Deja reposar la paella unos minutos antes de servir. ¡Disfruta!
        `,
        video: './assets/videos/paellaValenciana.mp4'
      },

      {
        name: 'Tajine de Cordero',
        description: 'El Tajine de Cordero es una exquisita preparación de la cocina marroquí, caracterizada por su cocción lenta que realza los sabores de las especias y las verduras. En este guiso, los trozos tiernos de cordero se combinan con una mezcla única de condimentos, como jengibre, cúrcuma y canela, que aportan una profundidad de sabor única. Junto con las fragantes verduras y la suave textura que toma al cocerse en una tajine tradicional de barro, este plato es un verdadero deleite para los sentidos, capturando la esencia de la auténtica cocina marroquí en cada bocado.',
        photo: 'https://www.comedera.com/wp-content/uploads/2022/08/tajine-de-cordero.jpg',
        preparation: `
          La preparación del Tajine de Cordero involucra marinar trozos de cordero en una mezcla de especias.
          1. Mezcla jengibre, cúrcuma, canela y otras especias con aceite de oliva.
          2. Cubre los trozos de cordero con la mezcla de especias y deja marinar.
          3. En una tajine (olla de barro), coloca cebolla, ajo y aceitunas.
          4. Acomoda los trozos de cordero sobre la cama de cebolla y ajo.
          5. Agrega zanahorias, caldo, pasas y ciruelas secas.
          6. Cocina a fuego lento en la tajine hasta que el cordero esté tierno.
          7. Sirve el tajine con almendras tostadas y hierbas frescas. ¡Buen provecho!
        `,
        video: './assets/videos/tajinCordero.mp4'
      }
    ],
    restaurants: [
      {
        id: 1,
        name: 'Osteria Francescana',
        city: 'Modena',
        country: 'Italy',
        michelinStars: 3,
        michelinDate: '2021'
      },
      {
        id: 2,
        name: 'El Celler de Can Roca',
        city: 'Girona',
        country: 'Spain',
        michelinStars: 3,
        michelinDate: '2021'
      },
      {
        id: 3,
        name: 'Le Chateaubriand',
        city: 'Paris',
        country: 'France',
        michelinStars: 1,
        michelinDate: '2021'
      }
    ]
  },

  {
    id: 3,
    name: 'Cultura Gastronómica Mexicana',
    photo: 'https://images.pexels.com/photos/6039209/pexels-photo-6039209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'La cultura gastronómica mexicana es una explosión de sabores y colores que refleja la diversidad y la historia del país. Desde los tacos callejeros hasta los moles tradicionales, la cocina mexicana es una combinación de ingredientes autóctonos y técnicas culinarias indígenas. El maíz, los chiles y las especias son esenciales en esta cultura, creando platos icónicos como el chile en nogada y los tamales.',
    countries: ['México'],
    products: [
      {
        id: 1,
        name: 'Maíz',
        description: 'El maíz es un cultivo fundamental en la dieta mexicana y ha sido un pilar en la alimentación de las culturas indígenas durante siglos. Se utiliza para hacer una variedad de productos como tortillas, tamales, atole y muchos otros platillos icónicos.',
        history: 'El maíz es originario de Mesoamérica y ha sido cultivado en la región durante milenios. Desarrollar técnicas de cultivo y procesamiento del maíz fue un logro crucial en la historia alimentaria de México, y su influencia sigue siendo profunda en la actualidad.',
        category: 'Granos y cereales.',
        photo: 'https://images.unsplash.com/photo-1534991187874-6262aa32d3cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2056&q=80'
      },
      {
        id: 2,
        name: 'Chiles',
        description: 'Los chiles son ingredientes esenciales en la cocina mexicana, aportando una amplia gama de sabores y niveles de picante. Desde los suaves hasta los extremadamente picantes, los chiles se utilizan en salsas, guisos, adobos y como condimentos en muchos platillos.',
        history: 'Los chiles han sido cultivados en México desde hace más de 6,000 años y se consideran uno de los primeros cultivos domesticados en la región. Su variedad y versatilidad enriquecen la gastronomía mexicana y han influido en la comida de todo el mundo.',
        category: 'Condimentos y especias.',
        photo: 'https://cdn.pixabay.com/photo/2015/02/26/07/43/chilli-650004_1280.jpg'
      },
      {
        id: 3,
        name: 'Aguacate',
        description: ' El aguacate es un fruto rico en grasas saludables y se utiliza ampliamente en la cocina mexicana. Se encuentra en guacamole, ensaladas, tacos y una variedad de platillos. Su textura cremosa y sabor suave lo convierten en un componente popular en la gastronomía.',
        history: 'El aguacate es originario de México y ha sido un alimento básico en la dieta de muchas culturas prehispánicas. Su consumo se ha mantenido a lo largo de los siglos y en la actualidad es un elemento distintivo de la cocina mexicana.',
        category: 'Frutas y vegetales.',
        photo: 'https://cdn.pixabay.com/photo/2017/08/15/14/34/avocado-2644150_1280.jpg'
      }
    ],
    recipes: [
      {
        name: 'Guacamole Fresco',
        description: 'El Guacamole Fresco es un irresistiblemente cremoso dip elaborado a partir de aguacates maduros, cebolla fresca, chiles picados, cilantro fragante y un toque refrescante de limón. Esta mezcla de ingredientes cuidadosamente seleccionados da como resultado un sabor equilibrado que combina la rica suavidad del aguacate con la chispeante viveza de los cítricos y la calidez de las especias. Ideal como acompañamiento, aperitivo o complemento en diversas preparaciones, el Guacamole Fresco es una deliciosa explosión de sabores que resalta la riqueza de la cocina tradicional mexicana.',
        photo: 'https://images.unsplash.com/photo-1680992071073-cb1696ba8d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
        preparation: `
          La preparación del Guacamole Fresco involucra la combinación de ingredientes frescos y sabrosos.
          1. En un tazón, aplasta aguacates maduros hasta obtener una consistencia suave.
          2. Agrega cebolla picada, chiles jalapeños (al gusto), cilantro fresco y jugo de limón.
          3. Mezcla todos los ingredientes hasta obtener una mezcla homogénea.
          4. Añade sal y pimienta al gusto y mezcla nuevamente.
          5. Sirve el guacamole con totopos o como acompañamiento para diversos platillos.
        `,
        video: './assets/videos/guacamole.mp4'
      },

      {
        name: 'Tamales de Elote',
        description: 'Los Tamales de Elote son una delicia mexicana hecha con masa de maíz y relleno de elote.',
        photo: 'https://images.pexels.com/photos/14179987/pexels-photo-14179987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        preparation: `
          La preparación de los Tamales de Elote implica la creación de la masa y el relleno.
          Masa:
          1. Mezcla masa de maíz, manteca, polvo de hornear, sal y caldo de pollo.
          2. Agrega elote fresco y bate hasta que la masa esté suave y bien mezclada.
          Relleno:
          1. En una sartén, saltea cebolla y chiles, luego agrega granos de elote y epazote.
          2. Cocina hasta que los ingredientes estén tiernos y bien sazonados.
          Armar los tamales:
          1. Extiende una porción de masa sobre una hoja de maíz remojada y coloca el relleno en el centro.
          2. Envuelve la hoja alrededor de la masa y el relleno, formando un tamal.
          3. Repite el proceso con el resto de los ingredientes.
          Cocción:
          1. Coloca los tamales en una vaporera y cocina durante aproximadamente 1-1.5 horas.
          2. Los tamales estarán listos cuando la masa esté firme y se desprenda fácilmente de la hoja.
          3. Sirve los tamales calientes y disfruta de esta deliciosa tradición mexicana.
        `,
        video: './assets/videos/tamalesElote.mp4'
      }
    ],
    restaurants: [
      {
        id: 1,
        name: 'Pujol',
        city: 'Mexico City',
        country: 'Mexico',
        michelinStars: 1,
        michelinDate: '2021'
      },
      {
        id: 2,
        name: 'Quintonil',
        city: 'Mexico City',
        country: 'Mexico',
        michelinStars: 1,
        michelinDate: '2021'
      },
      {
        id: 3,
        name: 'Sud 777',
        city: 'Mexico City',
        country: 'Mexico',
        michelinStars: 1,
        michelinDate: '2021'
      }
    ]
  },

  {
    id: 4,
    name: 'Cultura Gastronómica Italiana',
    photo: 'https://images.pexels.com/photos/4819658/pexels-photo-4819658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'La cultura gastronómica italiana es un canto a la simplicidad y la pasión por los ingredientes frescos. Desde la pasta al dente hasta las pizzas de horno de leña, la cocina italiana celebra los sabores auténticos y la tradición familiar. Los tomates, el aceite de oliva y las hierbas aromáticas son la base de esta cultura, creando platos como la pasta alla carbonara y el risotto.',
    countries: ['Italia'],
    products: [
      {
        id: 1,
        name: 'Pasta',
        description: 'La pasta es un ingrediente central en la cocina italiana y se presenta en una variedad de formas y tamaños, como espaguetis, fettuccine, penne y más. Se prepara de diversas maneras, desde simples salsas hasta platillos más elaborados con ingredientes frescos.',
        history: 'La pasta ha sido parte de la dieta italiana durante siglos y se considera una manifestación de la creatividad culinaria de la región. Las diferentes formas y estilos de pasta tienen raíces en diversas tradiciones regionales, lo que enriquece la diversidad de la cocina italiana.',
        category: 'Granos y cereales.',
        photo: 'https://cdn.pixabay.com/photo/2016/08/30/20/20/noodles-1631935_1280.jpg'
      },
      {
        id: 2,
        name: 'Tomates',
        description: 'Los tomates son una base esencial en muchas salsas y platillos italianos, como la salsa de tomate, la pizza y el caprese (ensalada de tomate y mozzarella). Su sabor jugoso y ácido aporta profundidad y frescura a la cocina italiana.',
        history: 'Aunque los tomates no son originarios de Italia, han llegado a ser uno de los ingredientes más icónicos de la cocina italiana. Su introducción y adopción en la gastronomía italiana ha tenido un impacto significativo en la forma en que se preparan los platillos en todo el país.',
        category: 'Frutas y vegetales.',
        photo: 'https://cdn.pixabay.com/photo/2018/07/06/08/49/tomatoes-3520004_1280.jpg'
      },
      {
        id: 3,
        name: 'Queso Parmigiano-Reggiano',
        description: 'Conocido comúnmente como parmesano, el queso Parmigiano-Reggiano es un queso duro y envejecido que se produce en la región de Emilia-Romaña. Tiene un sabor profundo y salado, y se utiliza rallado como condimento en platos de pasta y ensaladas.',
        history: 'El queso Parmigiano-Reggiano tiene una historia que se remonta a siglos atrás en Italia. Su elaboración sigue principios tradicionales y su calidad y sabor distintivos lo han convertido en uno de los quesos más apreciados en todo el mundo.',
        category: 'Productos lácteos y quesos.',
        photo: 'https://images.pexels.com/photos/3693282/pexels-photo-3693282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ],
    recipes: [
      {
        name: 'Pasta Carbonara',
        description: 'La Pasta Carbonara es un plato romano hecho con pasta, huevo, queso Pecorino y guanciale.',
        photo: 'https://cdn.pixabay.com/photo/2019/07/23/07/33/pasta-4356795_1280.jpg',
        preparation: `
          La preparación de la Pasta Carbonara es sencilla y deliciosa.
          1. Cocina la pasta al dente en agua con sal siguiendo las instrucciones del paquete.
          2. Mientras tanto, en un tazón, mezcla huevos, queso Pecorino rallado y pimienta negra molida.
          3. En una sartén grande, dora el guanciale o panceta en cubos hasta que estén crujientes.
          4. Retira la sartén del fuego y agrega la pasta cocida, revolviendo para combinar.
          5. Vierte la mezcla de huevo y queso sobre la pasta caliente y mezcla rápidamente para que los huevos se cocinen con el calor residual, formando una salsa cremosa.
          6. Añade más queso Pecorino y pimienta negra al gusto.
          7. Sirve la Pasta Carbonara caliente y disfruta de los sabores auténticos italianos.
        `,
        video: './assets/videos/pastaCarbonara.mp4'
      },
      {
        name: 'Pizza Margherita',
        description: 'La Pizza Margherita es un clásico napolitano con tomate, mozzarella y albahaca.',
        photo: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
        preparation: `
          La preparación de la Pizza Margherita te lleva a la esencia de la cocina italiana.
          1. Estira una masa de pizza sobre una superficie enharinada para formar la base.
          2. Extiende una capa de salsa de tomate sobre la masa.
          3. Cubre con rodajas de mozzarella fresca y hojas de albahaca.
          4. Riega un poco de aceite de oliva sobre la pizza.
          5. Hornea en un horno de leña precalentado o en un horno convencional a alta temperatura hasta que la masa esté dorada y el queso esté burbujeante.
          6. Retira la pizza del horno y deja enfriar ligeramente antes de cortar y servir.
          7. Disfruta de la Pizza Margherita con su combinación simple pero deliciosa de sabores italianos.
        `,
        video: './assets/videos/pizzaMargarita.mp4'
      }
    ],
    restaurants: [
      {
        id: 1,
        name: 'Osteria Mozza',
        city: 'Los Angeles',
        country: 'United States'
      },
      {
        id: 2,
        name: 'Il Luogo di Aimo e Nadia',
        city: 'Milan',
        country: 'Italy',
        michelinStars: 3,
        michelinDate: '2021'
      },
      {
        id: 3,
        name: 'La Pergola',
        city: 'Rome',
        country: 'Italy',
        michelinStars: 3,
        michelinDate: '2021'
      }
    ]
  },

  {
    id: 5,
    name: 'Cultura Gastronómica Japonesa',
    photo: 'https://images.pexels.com/photos/1474157/pexels-photo-1474157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'La cultura gastronómica japonesa es un equilibrio perfecto entre la estética y el sabor. Desde el sushi meticulosamente preparado hasta el ramen reconfortante, la cocina japonesa se destaca por su atención a los detalles y la frescura de los ingredientes. El arroz, el pescado y las algas son elementos esenciales en esta cultura, creando platos que son verdaderas obras de arte culinarias.',
    countries: ['Japón'],
    products: [
      {
        id: 1,
        name: 'Arroz de grano corto (Japonica)',
        description: 'El arroz de grano corto, conocido como Japonica, es una variedad de arroz que se cultiva y consume ampliamente en Japón. Su textura pegajosa y suave lo hace ideal para comer con palillos y para la preparación de sushi.',
        history: 'El cultivo de arroz en Japón tiene una larga historia que se remonta a siglos atrás. El arroz Japonica se ha convertido en un pilar en la alimentación japonesa y es un componente fundamental de numerosos platillos.',
        category: 'Granos y cereales.',
        photo: 'https://images.pexels.com/photos/8251401/pexels-photo-8251401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 2,
        name: 'Alga Nori',
        description: 'El alga nori es un tipo de alga marina que se utiliza comúnmente en la cocina japonesa. Es fundamental para la preparación de sushi, ya que se utiliza para envolver los rollos de sushi (maki) y proporciona un sabor y textura característicos.',
        history: 'El uso de algas en la cocina japonesa tiene raíces en tiempos antiguos, y el alga nori se ha convertido en un elemento esencial en la cocina cotidiana y festiva de Japón.',
        category: 'Ingredientes y condimentos.',
        photo: 'https://mejorconsalud.as.com/wp-content/uploads/2020/09/algas-nori.jpg'
      },
      {
        id: 3,
        name: 'Salsa de Soja (Shoyu)',
        description: 'La salsa de soja es un condimento fermentado hecho a base de soja y trigo. Es ampliamente utilizada en la cocina japonesa para realzar el sabor de los platillos. Hay diferentes tipos de salsa de soja, desde la ligera hasta la oscura.',
        history: 'La producción de salsa de soja en Japón tiene una larga historia y se ha refinado a lo largo de los siglos. El shoyu es una parte esencial de la sazón en muchos platillos japoneses y se ha convertido en un condimento distintivo.',
        category: 'Condimentos y salsas.',
        photo: 'https://imagenes.elpais.com/resizer/P8j_UuPn16mXp1OUUqmNmD78sO4=/980x735/filters:focal(1636x1330:1646x1340)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/KVELUSNFAJBWNJNZRJZJEJIK7A.jpg'
      }
    ],
    recipes: [
      {
        name: 'Sushi de Salmón',
        description: 'El Sushi de Salmón es una variante popular del sushi, con finas láminas de salmón sobre arroz de sushi.',
        photo: 'https://images.pexels.com/photos/6984182/pexels-photo-6984182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        preparation: `
          La preparación del Sushi de Salmón te llevará a disfrutar de un bocado fresco y delicioso.
          1. Cocina el arroz de sushi siguiendo las instrucciones del paquete y sazónalo con vinagre de arroz y azúcar.
          2. Corta finas láminas de salmón fresco y reserva.
          3. Humedece tus manos con agua y toma una porción de arroz.
          4. Forma una base ovalada con el arroz en la palma de tu mano.
          5. Coloca una lámina de salmón sobre el arroz.
          6. Con cuidado, enrolla el arroz y el salmón con un trozo de alga nori.
          7. Utiliza un cuchillo afilado para cortar el rollo en bocados del tamaño deseado.
          8. Sirve el Sushi de Salmón con salsa de soja, wasabi y jengibre encurtido.
        `,
        video: './assets/videos/sushiSalmon.mp4'
      },

      {
        name: 'Ramen de Cerdo Tonkotsu',
        description: 'El Ramen de Cerdo Tonkotsu es un tipo de ramen japonés con caldo de cerdo espeso y fideos.',
        photo: 'https://images.pexels.com/photos/16068592/pexels-photo-16068592/free-photo-of-comida-plato-madera-cena.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        preparation: `
          La preparación del Ramen de Cerdo Tonkotsu te brindará un tazón reconfortante y lleno de sabor.
          1. Hierve huesos de cerdo y carne de cerdo con agua durante varias horas para crear un caldo espeso y sabroso.
          2. Cuela y reserva el caldo de cerdo.
          3. Cocina los fideos ramen siguiendo las instrucciones del paquete y escúrrelos.
          4. Prepara los ingredientes adicionales: huevo cocido a baja temperatura, rodajas de cerdo cocido, alga nori, cebolla verde picada y brotes de bambú.
          5. Calienta el caldo de cerdo y agrégale pasta de miso para darle sabor.
          6. Coloca los fideos cocidos en un tazón grande y vierte el caldo caliente sobre ellos.
          7. Añade los ingredientes adicionales al tazón.
          8. Disfruta de tu Ramen de Cerdo Tonkotsu con palillos y una cuchara, saboreando cada bocado de caldo y fideos.
        `,
        video: './assets/videos/ramen.mp4'
      }
    ],
    restaurants: [
      {
        id: 1,
        name: 'Sukiyabashi Jiro',
        city: 'Tokyo',
        country: 'Japan'
      },
      {
        id: 2,
        name: 'Ryugin',
        city: 'Tokyo',
        country: 'Japan',
        michelinStars: 3,
        michelinDate: '2021'
      },
      {
        id: 3,
        name: 'Narisawa',
        city: 'Tokyo',
        country: 'Japan',
        michelinStars: 2,
        michelinDate: '2021'
      }
    ]
  }
];
