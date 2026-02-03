import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Plus, Settings2, Sparkles } from 'lucide-react';
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
    <div className="pt-40 pb-32 min-h-screen bg-cloudy-bg overflow-hidden relative">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cloudy-mist/20 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cloudy-pink/20 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6">
        <header className="text-center mb-24 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md px-6 py-2 rounded-full border border-white shadow-sm mb-6"
          >
            <Sparkles size={16} className="text-cloudy-accent" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cloudy-primary">The Full Experience</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title text-center"
          >
            Our Dreamy Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 font-poppins text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Handcrafted beverages designed to transport you to the clouds. Each sip is a journey of taste and serenity.
          </motion.p>
        </header>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8 bg-white/40 backdrop-blur-xl p-4 rounded-[2.5rem] border border-white/60 shadow-xl shadow-cloudy-primary/5">
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar w-full lg:w-auto pb-2 lg:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-8 py-3.5 rounded-2xl font-poppins font-black transition-all whitespace-nowrap text-sm relative group ${
                  activeCategory === cat.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-cloudy-primary'
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="active-cat"
                    className="absolute inset-0 bg-gradient-to-r from-cloudy-primary to-cloudy-accent rounded-2xl shadow-lg shadow-cloudy-primary/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat.name}</span>
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-cloudy-primary" size={20} />
            <input
              type="text"
              placeholder="Search for your favorites..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4.5 bg-white border border-cloudy-mist rounded-2xl font-poppins font-semibold text-cloudy-text focus:outline-none focus:ring-4 focus:ring-cloudy-primary/10 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card overflow-hidden group flex flex-col h-full hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center space-x-2 shadow-sm border border-white">
                    <Star className="text-cloudy-accent fill-cloudy-accent" size={14} />
                    <span className="text-sm font-black text-cloudy-text">{item.rating}</span>
                  </div>
                  {item.popular && (
                    <div className="absolute top-6 left-6 bg-gradient-to-r from-cloudy-secondary to-cloudy-pink text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-2xl shadow-lg">
                      Popular
                    </div>
                  )}
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cloudy-text/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-10 space-y-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-serif font-black text-cloudy-text group-hover:text-cloudy-primary transition-colors leading-tight">
                      {item.name}
                    </h3>
                    <span className="text-2xl font-black text-cloudy-primary">${item.price}</span>
                  </div>
                  <p className="text-gray-400 font-poppins text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <button className="flex items-center justify-center space-x-2 bg-cloudy-primary text-white py-4 rounded-2xl font-poppins font-black hover:shadow-lg hover:shadow-cloudy-primary/20 hover:-translate-y-1 transition-all text-sm active:scale-95">
                      <Plus size={18} />
                      <span>Add</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 border-2 border-cloudy-mist text-cloudy-text py-4 rounded-2xl font-poppins font-black hover:bg-cloudy-mist/30 transition-all text-sm active:scale-95">
                      <Settings2 size={18} />
                      <span>Custom</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32 space-y-6"
          >
            <div className="bg-white w-24 h-24 rounded-[2.5rem] flex items-center justify-center mx-auto shadow-xl border border-cloudy-mist text-cloudy-mist">
              <Search size={40} />
            </div>
            <div>
              <p className="text-cloudy-text font-serif font-black text-2xl">No drinks found</p>
              <p className="text-gray-400 font-poppins mt-2">Try searching for something else or clear the filters.</p>
            </div>
            <button
              onClick={() => {setActiveCategory('all'); setSearchQuery('');}}
              className="btn-primary"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Menu;
