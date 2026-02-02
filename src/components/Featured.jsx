import { motion } from 'framer-motion';
import { Star, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import teaImg from '../assets/tea.png';
import mlkteaImg from '../assets/mlktea.png';
import coffeeImg from '../assets/coffee.png';

const Featured = () => {
  const drinks = [
    {
      name: 'Classic Milk Tea',
      price: '$4.99',
      image: teaImg,
      rating: 4.9,
      category: 'Classic',
      color: 'bg-cloudy-secondary/30'
    },
    {
      name: 'Taro Milk Tea',
      price: '$5.49',
      image: mlkteaImg,
      rating: 4.8,
      category: 'Signature',
      color: 'bg-cloudy-accent/10'
    },
    {
      name: 'Creamy Cloud Coffee',
      price: '$5.99',
      image: coffeeImg,
      rating: 4.7,
      category: 'Coffee Blend',
      color: 'bg-cloudy-brown/5'
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-10 left-0 text-[15rem] font-serif font-black text-gray-50/50 select-none -z-0 pointer-events-none whitespace-nowrap">
        POPULAR DRINKS
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="w-12 h-1 bg-cloudy-accent rounded-full"></div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-cloudy-primary">Community Favorites</h2>
            <p className="text-gray-400 font-poppins text-lg leading-relaxed"> Handcrafted with the finest ingredients, these favorites have captured the hearts (and taste buds) of our community.</p>
          </div>
          <Link to="/menu" className="btn-secondary flex items-center space-x-3 group">
            <span>Explore Full Menu</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {drinks.map((drink, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group"
            >
              <div className={`relative rounded-[3.5rem] p-10 mb-8 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-black/5 ${drink.color} overflow-hidden group-hover:-translate-y-2`}>
                <div className="absolute top-6 right-6 bg-white px-3 py-1.5 rounded-2xl flex items-center space-x-1.5 shadow-sm border border-gray-50 z-20">
                  <Star className="text-yellow-400 fill-yellow-400" size={14} />
                  <span className="text-xs font-black text-cloudy-primary">{drink.rating}</span>
                </div>

                <div className="relative h-64 flex items-center justify-center">
                   <img
                    src={drink.image}
                    alt={drink.name}
                    className="w-full h-full object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.1)] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>

              <div className="space-y-3 px-2">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-cloudy-accent">{drink.category}</span>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-serif font-bold text-cloudy-primary group-hover:text-cloudy-accent transition-colors">{drink.name}</h3>
                  <span className="text-xl font-bold text-cloudy-primary/50">{drink.price}</span>
                </div>
                <button className="w-full mt-6 py-4 rounded-2xl font-poppins font-bold text-cloudy-primary border-2 border-cloudy-secondary flex items-center justify-center space-x-3 hover:bg-cloudy-primary hover:text-white hover:border-cloudy-primary transition-all duration-500">
                  <ShoppingBag size={18} />
                  <span>Quick Add</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
