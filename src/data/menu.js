import gongchaImg from '../assets/gongchatea.jpg';
import taroImg from '../assets/taro milktea.jpg';
import matchaImg from '../assets/matcharedbean.jpg';
import fruitImg from '../assets/fruit tea.webp';
import brownSugarImg from '../assets/brown sugar.jpg';

export const categories = [
  { id: 'all', name: 'All Drinks' },
  { id: 'classic', name: 'Classic' },
  { id: 'signature', name: 'Signature' },
  { id: 'fruit', name: 'Fruit Tea' },
  { id: 'specialty', name: 'Specialty' },
];

export const menuItems = [
  {
    id: 1,
    name: 'Dreamy Classic Milk Tea',
    price: 4.99,
    category: 'classic',
    image: gongchaImg,
    rating: 4.8,
    description: 'Our signature blend of premium black tea and velvety cream.',
    popular: true
  },
  {
    id: 2,
    name: 'Velvet Taro Cloud',
    price: 5.49,
    category: 'signature',
    image: taroImg,
    rating: 4.7,
    description: 'Creamy taro root paired with our fresh house-made boba.',
    popular: true
  },
  {
    id: 3,
    name: 'Matcha Zen Mist',
    price: 5.99,
    category: 'signature',
    image: matchaImg,
    rating: 4.9,
    description: 'Premium ceremonial matcha with sweet red bean and cream.',
    popular: false
  },
  {
    id: 4,
    name: 'Sunrise Fruit Infusion',
    price: 5.29,
    category: 'fruit',
    image: fruitImg,
    rating: 4.6,
    description: 'A vibrant medley of fresh seasonal fruits and jasmine tea.',
    popular: false
  },
  {
    id: 5,
    name: 'Brown Sugar Nebula',
    price: 6.49,
    category: 'signature',
    image: brownSugarImg,
    rating: 5.0,
    description: 'Hand-carved brown sugar pearls with chilled fresh farm milk.',
    popular: true
  }
];
