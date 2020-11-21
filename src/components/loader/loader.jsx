import React from 'react';
import { motion } from 'framer-motion';

const style = {
  width: 15,
  height: 15,
  opacity: 1,
  margin: 8,
  borderRadius: 0,
  display: 'inline-block',
  background: '#7df9ff',
};

const loaderStyle = {
  height: '70vh',
  // border: '1px solid red',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
};

const variants = {
  start: {
    scale: 0.2,
    rotate: 0,
  },
  end: {
    scale: 1,
    rotate: 360,
  },
};

export default function Loader(props) {
  return (
    <div style={loaderStyle}>
      <motion.div
        style={style}
        variants={variants}
        initial={'start'}
        animate={'end'}
        transition={{
          repeat: 'Infinity',
          repeatType: 'mirror',
          ease: 'anticipate',
          duration: 1,
          delay: 0,
        }}
      />
      <motion.div
        style={style}
        variants={variants}
        initial={'start'}
        animate={'end'}
        transition={{
          repeat: 'Infinity',
          repeatType: 'mirror',
          ease: 'anticipate',
          duration: 1,
          delay: 0.2,
        }}
      />
      <motion.div
        style={style}
        variants={variants}
        initial={'start'}
        animate={'end'}
        transition={{
          repeat: 'Infinity',
          repeatType: 'mirror',
          ease: 'anticipate',
          duration: 1,
          delay: 0.4,
        }}
      />
    </div>
  );
}
