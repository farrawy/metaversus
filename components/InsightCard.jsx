'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { fadeIn } from '../utils/motion';

const InsightCard = ({ title, subtitle, index, url, imgUrl }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex flex-col md:flex-row gap-4"
  >
    <img
      src={imgUrl}
      alt={`planet-0${index}`}
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="flex w-full justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white"
      >
        <img
          src="arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </a>
    </div>
  </motion.div>
);

export default InsightCard;
