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
      color: 'bg-cloudy-mist/40'
    },
    {
      name: 'Taro Milk Tea',
      price: '$5.49',
      image: mlkteaImg,
      rating: 4.8,
      category: 'Signature',
      color: 'bg-cloudy-pink/40'
    },
    {
      name: 'Creamy Cloud Coffee',
      price: '$5.99',
      image: coffeeImg,
      rating: 4.7,
      category: 'Coffee Blend',
      color: 'bg-cloudy-accent/10'
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-10 left-0 text-[15rem] font-serif font-black text-gray-50/70 select-none -z-0 pointer-events-none whitespace-nowrap">
        POPULAR
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="section-subtitle">Community Favorites</span>
            <h2 className="section-title">Most Loved Sips</h2>
            <p className="text-gray-400 font-poppins text-lg leading-relaxed">
              Handcrafted with the finest ingredients, these favorites have captured the hearts of our community.
            </p>
          </div>
          <Link to="/menu" className="btn-secondary flex items-center space-x-3 group mb-2">
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
              <div className={`relative rounded-[4rem] p-12 mb-8 transition-all duration-700 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] ${drink.color} overflow-hidden group-hover:-translate-y-3`}>
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center space-x-1.5 shadow-sm border border-white z-20">
                  <Star className="text-cloudy-accent fill-cloudy-accent" size={14} />
                  <span className="text-sm font-black text-cloudy-text">{drink.rating}</span>
                </div>

                <div className="relative h-64 flex items-center justify-center">
                   <img
                    src={drink.image}
                    alt={drink.name}
                    className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(110,133,183,0.2)] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Subtle Glow */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/30 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              <div className="space-y-4 px-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-cloudy-primary/60">{drink.category}</span>
                    <h3 className="text-2xl font-serif font-black text-cloudy-text mt-1 group-hover:text-cloudy-primary transition-colors">{drink.name}</h3>
                  </div>
                  <span className="text-xl font-bold text-cloudy-primary">{drink.price}</span>
                </div>

                <button className="w-full mt-6 py-4 rounded-2xl font-poppins font-black text-cloudy-primary border-2 border-cloudy-mist flex items-center justify-center space-x-3 hover:bg-cloudy-primary hover:text-white hover:border-cloudy-primary transition-all duration-500 shadow-sm active:scale-95">
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
