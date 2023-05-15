export const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  lightGray: '#B3B4B6',
  accent: '#FFC231',
  accentRed: '#FB5D2E',
  accentPink: '#F96165',
};

export const Categories = [
  {
    name: 'vila',
    image: require('../database/image/villa.png'),
    items: [
      {
        name: 'Classic villa',
        weight: '500dt',
        rating: '6',
        price: 'villa haut standing à 500dt s+6 avec piscine 200 métres composee en rez de chaussé dun salon spaacieux situé a rue ibn roched à coté de école prive 20m à pied au plage ',
        isTopOfTheWeek: true,
        image: require('../database/image/1.png'),
        size: '6',
        crust: '250m',
        location: 'sousse',
        surface: '250m',
        description: 'villa haut standing s+5 avec piscine à 500 métres  composee en rez de chaussé dun salon spaacieux ',
        ingredients: [
          require('../database/image/1.png'),
          require('../database/image/2.png'),
          require('../database/image/3.png'),
          require('../database/image/ap2.png'),
        ],
        
      },
      {
        name: 'hey villa',
        weight: '400dt',
        rating: '4',
        price: 'une villa à 300dt S+4 avec un garage et avec un picine spacieuse situé à nabeul rue hbib bourgiba à coté de mg 5m à pied au plage ',
        isTopOfTheWeek: true,
        image: require('../database/image/2.png'),
        size: '4',
        crust: '180m',
        location: 'tunis',
        surface: '180m',
        description: 'villa haut standing s+6 avec piscine à 900 métres  composee en rez de chaussé dun salon spaacieux ',
        salle:'4',
        description:'une ville avec picine loacaliser à tunis à rue abd el kader bey',
        ingredients: [
          require('../database/image/1.png'),
          require('../database/image/2.png'),
          require('../database/image/3.png'),
          require('../database/image/ap2.png'),
        ],

      },
      {
        name: 'chic villa',
        weight: '300dt',
        rating: '5',
        price: 'une villa à 300dt S+5 avec un garage et avec un picine spacieuse situé à nabeul rue hbib bourgiba à coté de mg 5m à pied au plage ',
        isTopOfTheWeek: true,
        image: require('../database/image/3.png'),
        size: '5',
        crust: '200m',
        location: 'Nabeul',
        surface: '200m',
        description: 'villa haut standing s+5 avec piscine à 500 métres  composee en rez de chaussé dun salon spaacieux ',
        salle:'4',
        ingredients: [
          require('../database/image/1.png'),
          require('../database/image/2.png'),
          require('../database/image/3.png'),
          require('../database/image/ap2.png'),
        ],

        
      },
    ],
  },
  {
    name: 'maison',
    image: require('../database/image/maison.png'),
    items: [
      {
        name: 'hey maison',
        weight: '100dt',
        rating: '2',
        price: 100,
        isTopOfTheWeek: true,
        image: require('../database/image/mai1.png'),
        size: '2',
        crust: '100m',
        location: 'sfax',
        surface: '100m',
        description: 'villa haut standing s+5 avec piscine à 500 métres  composee en rez de chaussé dun salon spaacieux ',
        salle:'4',
        ingredients: [
          require('../database/image/1.png'),
          require('../database/image/2.png'),
          require('../database/image/3.png'),
          require('../database/image/ap2.png'),
        ],

        
      },
      {
        name: 'chic maison',
        weight: '90dt',
        rating: '2',
        price: 90,
        isTopOfTheWeek: false,
        image: require('../database/image/mai2.png'),
        size: '2',
        crust: '120m',
        location: 'zaghwen',
        surface: '120m',
        description: 'villa haut standing s+5 avec piscine à 500 métres  composee en rez de chaussé dun salon spaacieux ',
        salle:'4',
        ingredients: [
          require('../database/image/1.png'),
          require('../database/image/2.png'),
          require('../database/image/3.png'),
          require('../database/image/ap2.png'),
        ],

        
      },
      {
        name: 'class maison',
        weight: '80dt',
        rating: '3',
        price: 80,
        isTopOfTheWeek: false,
        image: require('../database/image/mai3.png'),
        size: '3',
        crust: '100m',
        location: 'mestir',
        surface: '100m',
        description: 'villa haut standing s+5 avec piscine à 500 métres  composee en rez de chaussé dun salon spaacieux ',
        ingredients: [
          require('../database/image/1.png'),
          require('../database/image/2.png'),
          require('../database/image/3.png'),
          require('../database/image/ap2.png'),
        ],

        
      },
    ],
  },
  {
    name: 'appartemant',
    image: require('../database/image/apppartement.png'),
    items: [
      {
        name: 'class apppartement',
        weight: '60',
        rating: '3',
        price: 60,
        isTopOfTheWeek: true,
        image: require('../database/image/ap1.png'),
        size: '3',
        crust: '70m',
        location: 'sousse',
        surface: '70m',
        description: 'villa haut standing s+5 avec piscine à 500 métres  composee en rez de chaussé dun salon spaacieux ',
        ingredients: [
          require('../database/image/1.png'),
          require('../database/image/2.png'),
          require('../database/image/3.png'),
          require('../database/image/ap2.png'),
        ],

        
      },
      {
        name: 'hey apppartement',
        weight: '50dt',
        rating: 3,
        price: 50,
        isTopOfTheWeek: false,
        image: require('../database/image/ap2.png'),
        size: '3',
        crust: '80m',
        location: 'tbarka',
        surface: '80m',
        description: 'villa haut standing s+8 avec piscine à 500 métres  composee en rez de chaussé dun salon spaacieux ',
        ingredients: [
          require('../database/image/1.png'),
          require('../database/image/2.png'),
          require('../database/image/3.png'),
          require('../database/image/ap2.png'),
        ],

        
      },
      {
        name: 'appartement luxe',
        weight: '60dt',
        rating: '2',
        price: '60dt',
        isTopOfTheWeek: false,
        image: require('../database/image/ap3.jpg'),
        size: '2',
        crust: '85m',
        location: 'tunis',
        surface: '85m',
        description: 'villa haut standing s+5 avec piscine à 500 métres  composee en rez de chaussé dun salon spaacieux ',
        ingredients: [
          require('../database/image/1.png'),
          require('../database/image/2.png'),
          require('../database/image/3.png'),
          require('../database/image/ap2.png'),
        ],

        
      },
    ],
  },
];
