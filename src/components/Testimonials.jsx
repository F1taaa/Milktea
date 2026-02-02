import { motion } from 'framer-motion';
import clarenceImg from '../assets/clarence.jpg';
import jianImg from '../assets/jian.jpg';
import dodongImg from '../assets/dodong.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Clarence',
      role: 'Milk Tea Enthusiast',
      image: clarenceImg,
      text: 'The most aesthetic milk tea shop I\'ve ever visited! The drinks are just as good as they look.',
      rating: 5
    },
    {
      name: 'Jian',
      role: 'Local Guide',
      image: jianImg,
      text: 'Their Taro Milk Tea is to die for. Perfectly sweet and creamy. The atmosphere is so relaxing.',
      rating: 5
    },
    {
      name: 'Dodong',
      role: 'Regular Customer',
      image: dodongImg,
      text: 'Cloudy Cup has become my daily ritual. Friendly staff and consistently delicious drinks.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-cloudy-blue/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cloudy-brown mb-6">Cloudy Stories</h2>
          <p className="text-gray-500 font-poppins text-lg max-w-2xl mx-auto">See what our community has to say about their dreamy experiences at Cloudy Cup.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-cloudy-pink shadow-lg">
                <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-600 font-poppins italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <h4 className="font-serif font-bold text-cloudy-brown text-lg">{testimonial.name}</h4>
                <p className="text-sm text-gray-400 font-poppins">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
