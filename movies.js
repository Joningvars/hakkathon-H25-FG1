const MOVIES = [
  {
    id: 'ant_man',
    title: 'Ant Man',
    release_date: '',
    category: 'Action',
    image: 'images/ant_man.jpg',
    featured: true,
  },
  {
    id: 'aquaman',
    title: 'Aquaman',
    release_date: '',
    category: 'Action',
    image:
      'https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_SX300.jpg',
    featured: true,
  },
  {
    id: 'arrow',
    title: 'Arrow',
    release_date: '',
    image:
      'https://m.media-amazon.com/images/M/MV5BNjRlNjNlY2YtYzQxNS00ZTUzLTkwMTQtMjM0YjZlOWQwZmFkXkEyXkFqcGc@._V1_SX300.jpg',
    category: 'Action',
    featured: false,
  },
  {
    id: 'Black_Adam',
    title: 'Black Adam',
    release_date: '',
    category: 'Action',
    image:
      'https://m.media-amazon.com/images/M/MV5BYmM3OTM4NDktMmI2NS00OWU0LTg4OTQtNjZhMmFkYjhmOGY1XkEyXkFqcGc@._V1_SX300.jpg',
    featured: false,
  },
  {
    id: 'Black_Panther',
    title: 'Black Panther',
    release_date: '',
    category: 'Action',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg',
    featured: true,
  },
  {
    id: 'Interceptor',
    title: 'Interceptor',
    category: 'Action',
    release_date: '',
    image:
      'https://m.media-amazon.com/images/M/MV5BMmIwM2E0NWQtMTZmYy00ZmEyLWJiNjAtOTQ3MzNiMTYyOGU1XkEyXkFqcGc@._V1_SX300.jpg',
    featured: false,
  },
  {
    id: 'john_wick',
    title: 'John Wick',
    category: 'Action',
    release_date: '',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg',
    featured: true,
  },
  {
    id: 'plane',
    title: 'Plane',
    release_date: '',
    image:
      'https://m.media-amazon.com/images/M/MV5BNDAyYjZmNjctOWE2Mi00ZDBiLWE2YjEtMWM1YmM0NmYzOGQwXkEyXkFqcGc@._V1_SX300.jpg',
    category: 'Action',
    featured: false,
  },
  {
    id: 'Thor',
    title: 'Thor',
    release_date: '',
    category: 'Action',
    image:
      'https://m.media-amazon.com/images/M/MV5BNjRhNGZjZjEtYTQzYS00OWUxLThjNGEtMTIwMTE2ZDFlZTZkXkEyXkFqcGc@._V1_SX300.jpg',
    featured: true,
  },
  {
    id: 'meg',
    title: 'Meg',
    release_date: '',
    image: 'images/meg.jpg',
    category: 'Horror',
    featured: false,
  },
  {
    id: 'meg_2',
    title: 'Meg 2',
    release_date: '',
    image:
      'https://m.media-amazon.com/images/M/MV5BOGNiOTFkYTUtMDdiMi00YmJlLTkzOTAtMGViYWRhZjY3ODhkXkEyXkFqcGc@._V1_SX300.jpg',
    category: 'Horror',
    featured: false,
  },
  {
    id: 'alien',
    title: 'Alien',
    release_date: '1979',
    image:
      'https://m.media-amazon.com/images/M/MV5BN2NhMDk2MmEtZDQzOC00MmY5LThhYzAtMDdjZGFjOGZjMjdjXkEyXkFqcGc@._V1_SX300.jpg',
    category: 'Horror',
    featured: false,
  },
  {
    id: 'm005',
    title: 'Midnight Howl',
    release_date: '2013',
    image: 'images/meg.jpg',
    category: 'Horror',
    featured: false,
  },
  {
    id: 'm010',
    title: 'Night Terrors',
    release_date: '2011',
    image:
      'https://m.media-amazon.com/images/M/MV5BNjQ4Y2RmZTAtNDFiZi00ZGZiLTgxNWEtNGNjM2YxNWZlN2MyL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    category: 'Horror',
    featured: false,
  },
  {
    id: 'm015',
    title: 'The Cellar',
    release_date: '2007',
    image:
      'https://m.media-amazon.com/images/M/MV5BYTg4ZmVmYjAtMzk1NS00NWVlLTgxZWUtNDZhMWFlYjE0ZTQxXkEyXkFqcGc@._V1_SX300.jpg',
    category: 'Horror',
    featured: false,
  },
  {
    id: 'm020',
    title: 'Creep House',
    release_date: '2006',
    image: 'images/meg.jpg',
    category: 'Horror',
    featured: false,
  },
  {
    id: 'm025',
    title: 'The Attic',
    release_date: '2001',
    image:
      'https://m.media-amazon.com/images/M/MV5BMjExODI2OTg1NF5BMl5BanBnXkFtZTcwNjEzOTEzMg@@._V1_SX300.jpg',
    category: 'Horror',
    featured: false,
  },
  {
    id: 'm030',
    title: 'Wraith',
    release_date: '2009',
    image:
      'https://m.media-amazon.com/images/M/MV5BODkwMjY0NTUtOTQ2Yi00MjRkLWIzMDEtMWRkNDRjODg0ZTA2XkEyXkFqcGc@._V1_SX300.jpg',
    category: 'Horror',
    featured: false,
  },
  {
    id: 'gajaman',
    title: 'Gajaman',
    release_date: '',
    category: 'Comedy',
    image:
      'https://m.media-amazon.com/images/M/MV5BYjczOWRhNTEtNjM1Zi00OTkyLTk2MTctM2Q4MGUyZTBlOTVmXkEyXkFqcGdeQXVyMTU4MjAyNTM5._V1_SX300.jpg',
    featured: false,
  },
  {
    id: 'ghostbusters',
    title: 'Ghostbusters',
    release_date: '1984',
    image:
      'https://m.media-amazon.com/images/M/MV5BMGI0Yjg2ODAtNDYzNi00Njc2LTlkMmMtMmRmYWI5MDE4ZGRkXkEyXkFqcGc@._V1_SX300.jpg',
    category: 'Comedy',
    featured: false,
  },
  {
    id: 'm004',
    title: 'Laugh Factory',
    release_date: '2016',
    image:
      'https://m.media-amazon.com/images/M/MV5BMzY3MGViYTQtYWJhYS00YjZiLWI5NGQtZGU2NDczMGRmZjhhXkEyXkFqcGdeQXVyMjQ1Njg0MzA@._V1_SX300.jpg',
    category: 'Comedy',
    featured: false,
  },
  {
    id: 'm014',
    title: 'Family Reunion',
    release_date: '2015',
    image:
      'https://m.media-amazon.com/images/M/MV5BNmVhZDU2ZjEtZDMzOS00ZmYxLTg5ODYtZWFhZmUyNmIxNDdkXkEyXkFqcGc@._V1_SX300.jpg',
    category: 'Comedy',
    featured: false,
  },
  {
    id: 'm019',
    title: 'Office Party',
    release_date: '2011',
    image:
      'https://m.media-amazon.com/images/M/MV5BMGI4YTg5OTEtNjgzNS00NGFjLWJkNTEtNjUyOWRlNmRiN2Q0XkEyXkFqcGc@._V1_SX300.jpg',
    category: 'Comedy',
    featured: false,
  },
  {
    id: 'm029',
    title: 'Roommates',
    release_date: '2013',
    image:
      'https://m.media-amazon.com/images/M/MV5BYTQwNzdmZWYtMTg2Ny00MWZiLTg0M2UtYzYwMTM4YzgyZmY4XkEyXkFqcGc@._V1_SX300.jpg',
    category: 'Comedy',
    featured: false,
  },
  {
    id: 'm034',
    title: 'Stand Up!',
    release_date: '2014',
    image:
      'https://m.media-amazon.com/images/M/MV5BMmE4ZTlhZjMtNjdkZC00MmYwLTlhYWMtMTFmMWZmNzhhNzE1XkEyXkFqcGc@._V1_SX300.jpg',
    category: 'Comedy',
    featured: false,
  },
  {
    id: 'superbad',
    title: 'Superbad',
    release_date: '2007',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTk3NTc1NjM0OV5BMl5BanBnXkFtZTcwNzYxNTM2MQ@@._V1_SX300.jpg',
    category: 'Comedy',
    featured: false,
  },
  {
    id: 'the_mask',
    title: 'The Mask',
    release_date: '1994',
    image:
      'https://m.media-amazon.com/images/M/MV5BNjA3MzQxNDEtZWQyMC00N2UzLTg2MzMtNjc4Njg2ZTc4ZGIzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    category: 'Comedy',
    featured: false,
  },
  {
    id: 'dune',
    title: 'Dune',
    release_date: '2021',
    image:
      'https://m.media-amazon.com/images/M/MV5BMGJlMGM3NDAtOWNhMy00MWExLWI2MzEtMDQ0ZDIzZDY5ZmQ2XkEyXkFqcGc@._V1_SX300.jpg',
    category: 'Sci-Fi',
    featured: true,
  },
  {
    id: 'm002',
    title: 'Neon Skies',
    release_date: '2019',
    image: 'images/Black_Panther.webp',
    category: 'Sci-Fi',
    featured: false,
  },
  {
    id: 'm006',
    title: 'Stellar Drift',
    release_date: '2020',
    image: 'images/aquaman.jpg',
    category: 'Sci-Fi',
    featured: false,
  },
  {
    id: 'm011',
    title: 'Quantum Run',
    release_date: '2018',
    image: 'images/Black_Panther.webp',
    category: 'Sci-Fi',
    featured: false,
  },
  {
    id: 'm016',
    title: 'Orbiters',
    release_date: '2021',
    image: 'images/Black_Panther.webp',
    category: 'Sci-Fi',
    featured: true,
  },
  {
    id: 'm021',
    title: 'Cosmic Voyage',
    release_date: '2022',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTc3MDg1OTM4Ml5BMl5BanBnXkFtZTcwMjE5MTkxMQ@@._V1_SX300.jpg',
    category: 'Sci-Fi',
    featured: false,
  },
  {
    id: 'm031',
    title: 'Ion Storm',
    release_date: '2018',
    image: 'images/Black_Panther.webp',
    category: 'Sci-Fi',
    featured: true,
  },
  {
    id: 'm036',
    title: 'Starway',
    release_date: '2020',
    image:
      'https://m.media-amazon.com/images/M/MV5BMDQyMjY1M2MtYmI1My00YzJiLTg0MGEtNGQxMThiZWRjMDNkXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg',
    category: 'Sci-Fi',
    featured: false,
  },
  {
    id: 'm041',
    title: 'Constellation',
    release_date: '2021',
    image:
      'https://m.media-amazon.com/images/M/MV5BNDAwNWMzNDYtNGM1ZS00NTQzLWExNjMtYjRjZWQ5ZWYwNzdkXkEyXkFqcGc@._V1_SX300.jpg',
    category: 'Sci-Fi',
    featured: false,
  },
  {
    id: 'inside_out',
    title: 'Inside Out',
    release_date: '2015',
    image:
      'https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg',
    category: 'Animation',
    featured: false,
  },
  {
    id: '1899',
    title: '1899',
    release_date: '',
    image:
      'https://m.media-amazon.com/images/M/MV5BY2UyM2YwZTEtOTk5Zi00ODhkLTg2ZjctMzIxMTViZjFmN2Y4XkEyXkFqcGc@._V1_SX300.jpg',
    category: 'Drama',
    featured: true,
  },
  {
    id: 'game_of_thrones',
    title: 'Game of Thrones',
    category: 'Drama',
    release_date: '',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_SX300.jpg',
  },
  {
    id: 'money_heist',
    title: 'Money Heist',
    category: 'Drama',
    release_date: '',
    image:
      'https://m.media-amazon.com/images/M/MV5BZjkxZWJiNTUtYjQwYS00MTBlLTgwODQtM2FkNWMyMjMwOGZiXkEyXkFqcGc@._V1_SX300.jpg',
  },
  {
    id: 'wednesday',
    title: 'Wednesday',
    release_date: '',
    category: 'Drama',
    image:
      'https://m.media-amazon.com/images/M/MV5BMDE1NjNmZjgtZTg0OC00NjkxLWEzYzItMDNkMTc3YjgxZWQyXkEyXkFqcGc@._V1_SX300.jpg',
    featured: false,
  },
  {
    id: 'wednesday_s2',
    title: 'Wednesday Season 2',
    release_date: '',
    image: 'images/wednesday.jpg',
    category: 'Drama',
    featured: false,
  },
  {
    id: 'm003',
    title: 'Quiet Waters',
    release_date: '2008',
    image: 'images/1899.jpg',
    category: 'Drama',
    featured: false,
  },
  {
    id: 'm008',
    title: 'Echoes of Home',
    release_date: '2005',
    image:
      'https://m.media-amazon.com/images/M/MV5BN2M0ZDg3M2UtNzg0NS00NGE1LWJlNGMtNWZmYzFhNTQxYzQyL2ltYWdlXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg',
    category: 'Drama',
    featured: false,
  },
  {
    id: 'm013',
    title: 'Harbor Lights',
    release_date: '2009',
    image:
      'https://m.media-amazon.com/images/M/MV5BZTBiYWNmNjktODgxZC00NTgyLTg3ZWYtOGQ4NDcxNmVmOWYzXkEyXkFqcGdeQXVyNjU2MTA3OTY@._V1_SX300.jpg',
    category: 'Drama',
    featured: false,
  },
  {
    id: 'm018',
    title: 'Autumn Leaves',
    release_date: '2003',
    image:
      'https://m.media-amazon.com/images/M/MV5BM2I1OTM4YzctYzhkZi00ZGY2LWIyZTMtZTY1ZWZmZGMwZDM5XkEyXkFqcGc@._V1_SX300.jpg',
    category: 'Drama',
    featured: false,
  },
  {
    id: 'm023',
    title: 'Paper Boats',
    release_date: '2002',
    image:
      'https://m.media-amazon.com/images/M/MV5BOWNhYTU2NjgtZjYwOS00N2I0LWE3ZjktMTcwMDg5ZDdjOGEwXkEyXkFqcGdeQXVyNDM5OTY1MTE@._V1_SX300.jpg',
    category: 'Drama',
    featured: false,
  },
];

export { MOVIES };

export const SLIDER_MOVIES = [
  {
    id: 'background',
    title: '1899',
    release_date: '',
    image: 'images/background/background.jpg',
    description:
      'Multinational immigrants traveling from the old continent to the new encounter a nightmarish riddle aboard a second ship adrift on the open sea.',
  },
  {
    id: 'background_1',
    title: 'The Maze Runner',
    release_date: '',
    image: 'images/background/background_1.jpg',
    description:
      'Thomas is deposited in a community of boys after his memory is erased, soon learning they\'re all trapped in a maze that will require him to join forces with fellow "runners" for a shot at escape.',
  },
  {
    id: 'background_2',
    title: 'Avengers: Endgame',
    release_date: '',
    image: 'images/background/background_2.jpg',
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance.",
  },
  {
    id: 'background_4',
    title: 'Fullmetal Alchemist: The Final Alchemy',
    release_date: '',
    image: 'images/background/background_4.jpg',
    description:
      'Fullmetal Alchemist: The Final Alchemy is a 2024 American action film directed by Jón and Kinga and starring Antonio Banderas, Salma Hayek, and Antonio Banderas.',
  },
  {
    id: 'background_5',
    title: 'The Tribal Warfare',
    release_date: '',
    image: 'images/background/background_5.jpg',
    description:
      'The Tribal Warfare is a 2024 American action film directed by Jón and Kinga and starring Antonio Banderas, Salma Hayek, and Antonio Banderas.',
  },
];

export const CATEGORIES = [
  {
    id: 'cat1',
    name: 'Comedy',
  },
  {
    id: 'cat2',
    name: 'Horror',
  },
  {
    id: 'cat3',
    name: 'Drama',
  },
  {
    id: 'cat4',
    name: 'Action',
  },
  {
    id: 'cat5',
    name: 'Sci-Fi',
  },
  {
    id: 'cat6',
    name: 'Animation',
  },
];
