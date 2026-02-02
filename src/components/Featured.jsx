import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
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
      color: 'bg-cloudy-cream'
    },
    {
      name: 'Taro Milk Tea',
      price: '$5.49',
      image: mlkteaImg,
      rating: 4.8,
      category: 'Signature',
      color: 'bg-cloudy-purple/30'
    },
    {
      name: 'Strawberry Milk Tea',
      price: '$5.99',
      image: coffeeImg, // The old code used coffee.png for strawberry
      rating: 4.7,
      category: 'Fruit Blend',
      color: 'bg-cloudy-pink/50'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-cloudy-brown mb-6">Our Popular Drinks</h2>
            <p className="text-gray-500 font-poppins text-lg"> Handcrafted with love and the finest ingredients, these favorites have captured the hearts of our cloudy community.</p>
          </div>
          <Link to="/menu" className="flex items-center space-x-2 text-cloudy-brown font-bold group">
            <span>View Full Menu</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {drinks.map((drink, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className={`relative rounded-[3rem] p-8 mb-6 transition-all duration-500 group-hover:scale-[1.02] ${drink.color} overflow-hidden`}>
                <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1 shadow-sm">
                  <Star className="text-yellow-400 fill-yellow-400" size={14} />
                  <span className="text-xs font-bold text-cloudy-brown">{drink.rating}</span>
                </div>
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-64 object-contain drop-shadow-xl group-hover:rotate-6 transition-transform duration-500"
                />
              </div>
              <div className="space-y-2 px-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{drink.category}</span>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-serif font-bold text-cloudy-brown">{drink.name}</h3>
                  <span className="text-xl font-bold text-cloudy-brown/70">{drink.price}</span>
                </div>
                <button className="w-full mt-4 py-3 border-2 border-cloudy-brown/10 rounded-2xl font-poppins font-bold text-cloudy-brown hover:bg-cloudy-brown hover:text-white transition-all">
                  Add to Cart
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
