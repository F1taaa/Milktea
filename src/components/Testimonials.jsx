import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import clarenceImg from '../assets/clarence.jpg';
import jianImg from '../assets/jian.jpg';
import dodongImg from '../assets/dodong.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Clarence D.',
      text: 'The Brown Sugar Nebula is literally like drinking a cloud. Best boba I\'ve ever had in my life.',
      image: clarenceImg,
      rating: 5
    },
    {
      name: 'Jian M.',
      text: 'Such an aesthetic place! The vibe is so cozy and the staff are incredibly friendly. My new study spot.',
      image: jianImg,
      rating: 5
    },
    {
      name: 'Dodong S.',
      text: 'Cloudy Cup brings back memories of my travels. Authentic, high-quality, and just plain delicious.',
      image: dodongImg,
      rating: 5
    }
  ];

  return (
    <section className="py-32 bg-cloudy-bg relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-cloudy-secondary/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cloudy-accent/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <motion.span
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-cloudy-accent font-poppins font-bold uppercase tracking-[0.3em] text-xs"
          >
            Kind Words
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-serif font-bold text-cloudy-primary"
          >
            What Our Sippers Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-gray-50 flex flex-col items-center text-center relative hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="absolute top-8 left-1/2 -translate-x-1/2 text-cloudy-secondary/30 group-hover:text-cloudy-secondary transition-colors duration-500">
                <Quote size={48} fill="currentColor" />
              </div>

              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500">
                <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
              </div>

              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-500 font-poppins italic mb-8 leading-relaxed relative z-10">
                &quot;{testimonial.text}&quot;
              </p>

              <h4 className="font-serif font-bold text-cloudy-primary text-xl relative z-10 group-hover:text-cloudy-accent transition-colors">
                {testimonial.name}
              </h4>
              <p className="text-xs text-gray-400 font-poppins font-bold uppercase tracking-widest mt-1">Verified Drinker</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
