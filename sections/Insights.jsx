'use client';

import { motion } from 'framer-motion';
import axios from 'axios';
import { Audio } from 'react-loader-spinner';

import { useEffect, useState } from 'react';
import styles from '../styles';

import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/helper';

const Insights = () => {
  const options = {
    method: 'GET',
    url: 'https://cryptocurrency-news2.p.rapidapi.com/v1/bsc',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com',
    },
  };

  const [insightsData, setInsightsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedValue = loadFromLocalStorage('insightsData');

    if (storedValue) {
      setInsightsData(storedValue.data);
      setLoading(false);
    } else {
      axios
        .request(options)
        .then((response) => {
          const { data } = response.data;
          console.log('Fetched data:', data); // Log the fetched data
          setInsightsData(data);
          setLoading(false);
          saveToLocalStorage('insightsData', data);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, []);

  useEffect(() => {
    console.log('Insights data state:', insightsData);
  }, [insightsData]);

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Insight" textStyles="text-center" />
        <TitleText title="Insight about metaverse" textStyles="text-center" />
        <div className="flex mt-[50px] flex-col gap-[30px]">
          {loading ? (
            // Render the activity indicator when loading
            <div className="flex justify-center">
              <Audio type="ThreeDots" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            // Render the InsightCard components when data is loaded
            Array.isArray(insightsData) &&
            insightsData.slice(0, 5).map((insight, index) => (
              <InsightCard
                key={`insight-${index}`}
                index={index + 1}
                title={insight.title}
                url={insight.url}
                imgUrl={insight.thumbnail}
                // Add any other necessary props here
              />
            ))
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
