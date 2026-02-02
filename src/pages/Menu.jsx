import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ShoppingCart, Star } from 'lucide-react';
import gongchaImg from '../assets/gongchatea.jpg';
import taroImg from '../assets/taro milktea.jpg';
import matchaImg from '../assets/matcharedbean.jpg';
import fruitImg from '../assets/fruit tea.webp';
import brownSugarImg from '../assets/brown sugar.jpg';

const Menu = () => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const menuItems = [
    {
      id: 1,
      name: 'Classic Milk Tea',
      price: 4.99,
      category: 'classic',
      image: gongchaImg,
      rating: 4.8,
      description: 'Our signature milk tea blend with premium black tea and creamy milk.'
    },
    {
      id: 2,
      name: 'Taro Milk Tea',
      price: 5.49,
      category: 'signature',
      image: taroImg,
      rating: 4.7,
      description: 'A creamy and sweet blend of taro root and milk, topped with boba pearls.'
    },
    {
      id: 3,
      name: 'Matcha Red Bean',
      price: 5.99,
      category: 'signature',
      image: matchaImg,
      rating: 4.9,
      description: 'A refreshing matcha green tea base with sweet red bean and creamy milk.'
    },
    {
      id: 4,
      name: 'Fruit Passion Tea',
      price: 5.29,
      category: 'fruit',
      image: fruitImg,
      rating: 4.6,
      description: 'A vibrant blend of fresh passion fruit and premium green tea.'
    },
    {
      id: 5,
      name: 'Brown Sugar Boba',
      price: 6.49,
      category: 'signature',
      image: brownSugarImg,
      rating: 5.0,
      description: 'Warm brown sugar pearls paired with chilled fresh milk.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Drinks' },
    { id: 'classic', name: 'Classic' },
    { id: 'signature', name: 'Signature' },
    { id: 'fruit', name: 'Fruit' },
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesFilter = filter === 'all' || item.category === filter;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-cloudy-brown mb-6">Our Dreamy Menu</h1>
          <p className="text-gray-500 font-poppins text-lg max-w-2xl mx-auto">Explore our carefully curated selection of handcrafted beverages designed to delight your senses.</p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="flex bg-white p-1 rounded-2xl shadow-sm border border-gray-100 overflow-x-auto w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-xl font-poppins font-medium transition-all whitespace-nowrap ${filter === cat.id ? 'bg-cloudy-brown text-white shadow-md' : 'text-gray-500 hover:text-cloudy-brown'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for a drink..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-2xl font-poppins focus:outline-none focus:ring-2 focus:ring-cloudy-pink transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-50"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center space-x-1 shadow-sm">
                    <Star className="text-yellow-400 fill-yellow-400" size={14} />
                    <span className="text-xs font-bold text-cloudy-brown">{item.rating}</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-cloudy-brown text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {item.category}
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-serif font-bold text-cloudy-brown">{item.name}</h3>
                    <span className="text-xl font-bold text-cloudy-brown">${item.price}</span>
                  </div>
                  <p className="text-gray-500 font-poppins text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <button className="w-full bg-cloudy-pink/30 text-cloudy-brown py-4 rounded-2xl font-poppins font-bold hover:bg-cloudy-brown hover:text-white transition-all flex items-center justify-center space-x-2">
                    <ShoppingCart size={20} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 font-poppins text-xl">No drinks found matching your search. Try something else!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
