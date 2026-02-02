import { motion } from 'framer-motion';
import { Leaf, Award, Heart, Sparkles } from 'lucide-react';
import bobaImg from '../assets/boba.png';
import toppingsImg from '../assets/toppings.jpg';

const About = () => {
  const values = [
    {
      icon: <Leaf className="text-emerald-500" size={32} />,
      title: 'Ethically Sourced',
      description: 'We partner with local farmers to ensure our tea leaves are the freshest and most sustainable.'
    },
    {
      icon: <Award className="text-amber-500" size={32} />,
      title: 'Premium Quality',
      description: 'Only the highest grade of tea and organic milk make it into your Cloudy Cup.'
    },
    {
      icon: <Heart className="text-rose-500" size={32} />,
      title: 'Made with Love',
      description: 'Every drink is handcrafted by our expert baristas who are passionate about their craft.'
    },
    {
      icon: <Sparkles className="text-sky-500" size={32} />,
      title: 'Always Fresh',
      description: 'Our pearls are cooked every 4 hours to guarantee the perfect chewy texture every time.'
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[4rem] overflow-hidden shadow-2xl">
              <img src={toppingsImg} alt="Our ingredients" className="w-full h-[600px] object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl hidden md:block">
              <img src={bobaImg} alt="Boba pearls" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-cloudy-brown font-poppins font-bold uppercase tracking-widest text-sm">Our Journey</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-cloudy-brown leading-tight">
              A Little Piece of Heaven in Every Sip
            </h1>
            <p className="text-gray-600 text-lg font-poppins leading-relaxed">
              Cloudy Cup started as a small dream in a cozy kitchen. Our founder wanted to recreate the feeling of looking at a clear blue sky—calm, peaceful, and infinitely beautiful—through the medium of milk tea.
            </p>
            <p className="text-gray-600 text-lg font-poppins leading-relaxed">
              After months of experimenting with hundreds of tea leaves and milk ratios, we finally found the perfect "Cloudy" blend. Today, we're proud to share that dream with you, one cup at a time.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h4 className="text-4xl font-serif font-bold text-cloudy-brown mb-2">10k+</h4>
                <p className="text-gray-400 font-poppins text-sm uppercase">Happy Sippers</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif font-bold text-cloudy-brown mb-2">15+</h4>
                <p className="text-gray-400 font-poppins text-sm uppercase">Unique Flavors</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-sm border border-gray-50 mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-cloudy-brown mb-6">What We Stand For</h2>
            <p className="text-gray-500 font-poppins text-lg max-w-2xl mx-auto">We're more than just a tea shop; we're a community built on quality, kindness, and clouds.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-6"
              >
                <div className="bg-cloudy-cream w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-cloudy-brown">{value.title}</h3>
                <p className="text-gray-500 font-poppins text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section Placeholder / Call to Action */}
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-serif font-bold text-cloudy-brown">Join Our Cloudy Team</h2>
          <p className="text-gray-500 font-poppins text-lg max-w-2xl mx-auto">We're always looking for passionate tea lovers to join our growing family.</p>
          <button className="bg-cloudy-brown text-white px-10 py-4 rounded-full font-poppins font-bold hover:bg-opacity-90 transition-all shadow-lg">
            View Careers
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
