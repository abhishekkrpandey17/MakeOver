'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const blogs = [
  {
    title: 'Achieving a Flawless Base',
    desc: 'How to use makeup and removes',
    image: '/images/cosmetic.png',
  },
  {
    title: 'The Importance of SPF in Your Routine',
    desc: 'Protect your skin from sunscreen',
    image: '/images/cosmetic.png',
  },
  {
    title: 'Evening Skincare for Radiant Skin',
    desc: 'Keep essential oils for skin care tip',
    image: '/images/cosmetic.png',
  },
];

const Profilepage = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: -40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-[#dbc3eb] w-full py-10 px-4 flex justify-center "
    >
    <div className="flex justify-center">
      <div className="w-full max-w-4xl bg-[#eddcf8] rounded-3xl shadow-xl p-6  md:p-10 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="w-45 h-45 mx-auto rounded-full overflow-hidden mb-4">
            <Image src="/images/author1.png" alt="Emily Johnson" width={200} height={200} className="object-cover" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#171619]">Emily Johnson</h2>
          <p className="text-sm md:text-base text-[#6c6374] mt-1">
            10 years experience • <span className="font-medium">MakeupTechnique & Skincare</span>
          </p>
          <p className="text-sm md:text-base text-[#6c6374] mt-3">
            Professional makeup artist with a decade of experience in creating personalized beauty routines and sharing expert tips on skincare and makeup application.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-5">
            <button className="px-5 py-2 rounded-full bg-[#933194] text-white hover:bg-[#b577bd] transition-all text-sm font-medium">
              Follow
            </button>
            <button className="px-5 py-2 rounded-full border border-[#933194] text-[#933194] hover:bg-[#933194] hover:text-white transition-all text-sm font-medium">
              53 Blogs
            </button>
          </div>

          <div className="bg-[#f0edf1] rounded-xl mt-6 py-4 px-6 flex justify-between text-center text-sm text-[#171619]">
            <div>
              <p className="font-bold text-lg">1,250</p>
              <p>Followers</p>
            </div>
            <div>
              <p className="font-bold text-lg">53</p>
              <p>Blogs</p>
            </div>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-[#dbc3eb] rounded-xl p-3 text-left hover:shadow-lg transition-all"
              >
                <div className="w-full h-32 relative rounded-xl overflow-hidden mb-3">
                  <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                </div>
                <h4 className="text-[#171619] font-semibold text-sm mb-1">{blog.title}</h4>
                <p className="text-xs text-[#6c6374]">{blog.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
    </motion.section>
  );
};

export default Profilepage;
