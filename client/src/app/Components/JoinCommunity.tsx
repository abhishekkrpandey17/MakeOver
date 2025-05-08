'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

const members = [
  {
    name: 'Ava Williams',
    text: 'I’ve learned so much and met amazing people!',
    avatar: '/images/author1.png',
  },
  {
    name: 'Lily Adams',
    text: 'This community inspires me every day.',
    avatar: '/images/author2.png',
  },
  {
    name: 'Zara Flynn',
    text: 'An amazing place for beauty lovers!',
    avatar: '/images/author3.png',
  },
];

const JoinCommunity = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2, spacing: 16 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 24 },
      },
    },
  });

  return (
    <section className="bg-[#dbc3eb] py-12 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-[#171619] mb-10 text-center"
      >
        Join Our Community
      </motion.h2>

      <div ref={sliderRef} className="keen-slider">
        {members.map((member, index) => (
          <motion.div
            key={index}
            className="keen-slider__slide bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 mb-4 relative rounded-full overflow-hidden">
              <Image src={member.avatar} alt={member.name} fill className="object-cover" />
            </div>
            <p className="text-sm text-[#6c6374] mb-2 italic">&quot;{member.text}&quot;</p>
            <h4 className="text-[#171619] font-semibold">{member.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JoinCommunity;
