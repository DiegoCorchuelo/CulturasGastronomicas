export interface Restaurant {
  id: number;
  name: string;
  city: string;
  country: string;
  michelinStars?: number;
  michelinDate?: string;
}

export const RESTAURANTS: Restaurant[] = [

  {
    id: 1,
    name: 'L\'Arpège',
    city: 'Paris',
    country: 'France',
    michelinStars: 3,
    michelinDate: '2021'
  },
  {
    id: 2,
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
  },

  {
    id: 4,
    name: 'Osteria Francescana',
    city: 'Modena',
    country: 'Italy',
    michelinStars: 3,
    michelinDate: '2021'
  },
  {
    id: 5,
    name: 'El Celler de Can Roca',
    city: 'Girona',
    country: 'Spain',
    michelinStars: 3,
    michelinDate: '2021'
  },
  {
    id: 6,
    name: 'Le Chateaubriand',
    city: 'Paris',
    country: 'France',
    michelinStars: 1,
    michelinDate: '2021'
  },

  {
    id: 7,
    name: 'Pujol',
    city: 'Mexico City',
    country: 'Mexico',
    michelinStars: 1,
    michelinDate: '2021'
  },
  {
    id: 8,
    name: 'Quintonil',
    city: 'Mexico City',
    country: 'Mexico',
    michelinStars: 1,
    michelinDate: '2021'
  },
  {
    id: 9,
    name: 'Sud 777',
    city: 'Mexico City',
    country: 'Mexico',
    michelinStars: 1,
    michelinDate: '2021'
  },

  {
    id: 10,
    name: 'Osteria Mozza',
    city: 'Los Angeles',
    country: 'United States'
  },
  {
    id: 11,
    name: 'Il Luogo di Aimo e Nadia',
    city: 'Milan',
    country: 'Italy',
    michelinStars: 3,
    michelinDate: '2021'
  },
  {
    id: 12,
    name: 'La Pergola',
    city: 'Rome',
    country: 'Italy',
    michelinStars: 3,
    michelinDate: '2021'
  },

  {
    id: 13,
    name: 'Sukiyabashi Jiro',
    city: 'Tokyo',
    country: 'Japan'
  },
  {
    id: 14,
    name: 'Ryugin',
    city: 'Tokyo',
    country: 'Japan',
    michelinStars: 3,
    michelinDate: '2021'
  },
  {
    id: 15,
    name: 'Narisawa',
    city: 'Tokyo',
    country: 'Japan',
    michelinStars: 2,
    michelinDate: '2021'
  }

]
