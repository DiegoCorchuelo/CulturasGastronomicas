export interface Recipe {
  name: string;
  description: string;
  photo: string;
  preparation: string;
  video?: string;
}

export const RECIPES: Recipe[] = [
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
      },

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
      },

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
      },

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
      },

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
]
