import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Plus, Settings2 } from 'lucide-react';
import { menuItems, categories } from '../data/menu';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 min-h-screen bg-cloudy-bg">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold text-cloudy-primary"
          >
            Our Dreamy Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 font-poppins text-lg max-w-2xl mx-auto"
          >
            Handcrafted beverages designed to transport you to the clouds.
          </motion.p>
        </header>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100 overflow-x-auto max-w-full no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-xl font-poppins font-semibold transition-all whitespace-nowrap text-sm ${
                  activeCategory === cat.id
                    ? 'bg-cloudy-primary text-white shadow-md'
                    : 'text-gray-500 hover:text-cloudy-primary hover:bg-cloudy-secondary/30'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search drinks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-100 rounded-2xl font-poppins focus:outline-none focus:ring-2 focus:ring-cloudy-secondary transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-50 flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center space-x-1 shadow-sm">
                    <Star className="text-yellow-400 fill-yellow-400" size={14} />
                    <span className="text-xs font-bold text-cloudy-primary">{item.rating}</span>
                  </div>
                  {item.popular && (
                    <div className="absolute top-4 left-4 bg-cloudy-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                </div>

                <div className="p-8 space-y-4 flex flex-col flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-serif font-bold text-cloudy-primary group-hover:text-cloudy-accent transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-xl font-bold text-cloudy-primary">${item.price}</span>
                  </div>
                  <p className="text-gray-500 font-poppins text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <button className="flex items-center justify-center space-x-2 bg-cloudy-secondary/30 text-cloudy-primary py-3 rounded-xl font-poppins font-bold hover:bg-cloudy-primary hover:text-white transition-all text-sm">
                      <Plus size={18} />
                      <span>Quick Add</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 border-2 border-cloudy-secondary text-cloudy-primary py-3 rounded-xl font-poppins font-bold hover:bg-cloudy-secondary transition-all text-sm">
                      <Settings2 size={18} />
                      <span>Customize</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-32 space-y-4">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-sm text-gray-300">
              <Search size={32} />
            </div>
            <p className="text-gray-400 font-poppins text-xl">No drinks found matching your criteria.</p>
            <button
              onClick={() => {setActiveCategory('all'); setSearchQuery('');}}
              className="text-cloudy-primary font-poppins font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
