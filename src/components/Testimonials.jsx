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
      rating: 5,
      tag: 'Cloud Fanatic'
    },
    {
      name: 'Jian M.',
      text: 'Such an aesthetic place! The vibe is so cozy and the staff are incredibly friendly. My new study spot.',
      image: jianImg,
      rating: 5,
      tag: 'Cozy Regular'
    },
    {
      name: 'Dodong S.',
      text: 'Cloudy Cup brings back memories of my travels. Authentic, high-quality, and just plain delicious.',
      image: dodongImg,
      rating: 5,
      tag: 'Tea Explorer'
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-white/50">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cloudy-primary/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cloudy-secondary/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="section-subtitle"
          >
            Kind Words
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            What Our Sippers Say
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cloudy-primary to-cloudy-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-10 flex flex-col items-center text-center relative hover:shadow-[0_20px_40px_-15px_rgba(110,133,183,0.15)] hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="absolute top-10 right-10 text-cloudy-primary/5 group-hover:text-cloudy-primary/10 transition-colors duration-500">
                <Quote size={80} fill="currentColor" />
              </div>

              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-3xl overflow-hidden border-4 border-white shadow-xl relative z-10 group-hover:rotate-6 transition-transform duration-500">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -inset-2 bg-cloudy-mist/50 blur-xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-cloudy-accent fill-cloudy-accent" />
                ))}
              </div>

              <p className="text-gray-500 font-poppins italic mb-8 leading-relaxed relative z-10">
                &quot;{testimonial.text}&quot;
              </p>

              <div className="mt-auto">
                <h4 className="font-serif font-black text-cloudy-text text-xl">
                  {testimonial.name}
                </h4>
                <div className="mt-2 inline-block px-4 py-1 bg-cloudy-mist/50 rounded-full">
                  <span className="text-[10px] text-cloudy-primary font-bold uppercase tracking-widest">{testimonial.tag}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
