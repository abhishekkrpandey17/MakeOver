'use client';

import Link from 'next/link';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="bg-[#dbc3eb] overflow-x-hidden">
      <motion.footer
        ref={ref}
        initial={{ opacity: 0, y: -100 }} // Animate from top to down
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="w-full max-w-screen-xl mx-auto px-4 md:px-16 py-10 text-[#171619] bg-[#dbc3eb]"
      >
        {/* Newsletter */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="text-2xl md:text-3xl font-semibold mb-6"
          >
            Subscribe to our Newsletter
          </motion.h2>

          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row items-center w-full max-w-xl rounded-full overflow-hidden border border-[#171619]"
          >
            <div className="flex items-center w-full md:w-[60%] px-4 py-3 bg-[#dbc3eb]">
              <IoMdMail className="text-xl mr-2" />
              <input
                type="email"
                placeholder="Input your email"
                className="w-full bg-transparent outline-none text-base placeholder:text-[#171619]"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-[40%] py-3 bg-[#933194] text-white font-medium text-lg md:rounded-none md:rounded-r-full rounded-b-full transition-all hover:bg-[#b577bd]"
            >
              Subscribe
            </button>
          </motion.form>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="border-t border-[#6c6374] pt-6 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 text-2xl font-bold">
              <span className="text-3xl">♡</span> MakeOver
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium">
              {['Pricing', 'About us', 'Features', 'Help Center', 'FAQs'].map((text, i) => (
                <Link
                  key={i}
                  href="#"
                  className="transition-transform hover:scale-105 hover:text-[#933194]"
                >
                  {text}
                </Link>
              ))}
            </div>
          </div>

          {/* Language Dropdown */}
          <div className="mt-4 md:mt-0">
            <select className="border border-[#6c6374] px-4 py-2 rounded-md bg-[#dbc3eb]">
              <option>English</option>
            </select>
          </div>
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-6 flex flex-col md:flex-row items-center justify-between text-sm text-[#6c6374] gap-4"
        >
          <p>
            © 2024 MakeOver • <Link href="#">Privacy</Link> • <Link href="#">Terms</Link> •{' '}
            <Link href="#">Sitemap</Link>
          </p>

          <div className="flex gap-4 text-lg">
            {[FaTwitter, FaFacebookF, FaInstagram].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="hover:text-[#933194] transition-transform hover:scale-125"
              >
                <Icon />
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.footer>
    </div>
  );
};

export default Footer;
