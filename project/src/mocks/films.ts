import { Film } from '../types/types';

const films: Film[] = [{
  id: 1,
  name: 'The Grand Budapest Hotel',
  posterImage: 'img/bg-the-grand-budapest-hotel.jpg',
  previewImage: 'img/the-grand-budapest-hotel.jpg',
  backgroundImage: 'img/the-grand-budapest-hotel-bg.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
  rating: 8.9,
  scoresCount: 240,
  director: 'Wes Anderson',
  starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
  runTime: 99,
  genre: 'Comedy',
  released: 2014,
  isFavorite: false,
},
{
  id: 2,
  name: 'Fantastic beasts the crimes of grindelwald',
  posterImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  backgroundImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
  rating: 9.1,
  scoresCount: 200,
  director: 'Wes Anderson',
  starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
  runTime: 130,
  genre: 'fantastic',
  released: 2019,
  isFavorite: true,
},
{
  id: 3,
  name: 'Johnny English',
  posterImage: 'img/johnny-english.jpg',
  previewImage: 'img/johnny-english.jpg',
  backgroundImage: 'img/johnny-english.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
  rating: 6.4,
  scoresCount: 150,
  director: 'Wes Anderson',
  starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
  runTime: 120,
  genre: 'action',
  released: 2016,
  isFavorite: false,
},
{
  id: 4,
  name: 'Macbeth',
  posterImage: 'img/macbeth.jpg',
  previewImage: 'img/macbeth.jpg',
  backgroundImage: 'img/macbeth.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
  rating: 8.4,
  scoresCount: 190,
  director: 'Wes Anderson',
  starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
  runTime: 140,
  genre: 'action',
  released: 2013,
  isFavorite: true,
},
{
  id: 5,
  name: 'War of the Worlds',
  posterImage: 'img/war-of-the-worlds.jpg',
  previewImage: 'img/war-of-the-worlds.jpg',
  backgroundImage: 'img/war-of-the-worlds.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
  rating: 9.4,
  scoresCount: 230,
  director: 'Wes Anderson',
  starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
  runTime: 150,
  genre: 'fantastic',
  released: 2013,
  isFavorite: true,
},
{
  id: 6,
  name: 'Aviator',
  posterImage: 'img/aviator.jpg',
  previewImage: 'img/aviator.jpg',
  backgroundImage: 'img/aviator.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
  rating: 8.6,
  scoresCount: 200,
  director: 'Wes Anderson',
  starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
  runTime: 140,
  genre: 'action',
  released: 2017,
  isFavorite: true,
},
{
  id: 7,
  name: 'Pulp fiction',
  posterImage: 'img/pulp-fiction.jpg',
  previewImage: 'img/pulp-fiction.jpg',
  backgroundImage: 'img/pulp-fiction.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
  rating: 8.4,
  scoresCount: 190,
  director: 'Wes Anderson',
  starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
  runTime: 140,
  genre: 'crime',
  released: 2007,
  isFavorite: false,
},
{
  id: 8,
  name: 'Revenant',
  posterImage: 'img/revenant.jpg',
  previewImage: 'img/revenant.jpg',
  backgroundImage: 'img/revenant.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
  rating: 7.4,
  scoresCount: 180,
  director: 'Wes Anderson',
  starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
  runTime: 125,
  genre: 'adventure',
  released: 2010,
  isFavorite: false,
},
];

export { films };
