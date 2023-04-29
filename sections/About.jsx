'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        The <span className="font-extrabold text-white">Metaverse</span>{' '}
        represents a groundbreaking innovation in the future, allowing
        individuals to immerse themselves in a virtual environment that feels
        incredibly real. With the{' '}
        <span className="font-extrabold text-white">
          madness of the metaverse
        </span>{' '}
        at your fingertips, all you need is a{' '}
        <span className="font-extrabold text-white">VR</span> device to fully
        experience and{' '}
        <span className="font-extrabold text-white">explore</span> the
        captivating worlds of your dreams, bringing them to life as never
        before. Dive into the captivating realm of the metaverse by continuing
        to scroll down.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
