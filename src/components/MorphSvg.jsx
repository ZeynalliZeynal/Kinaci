import { motion } from 'framer-motion';
import { svgMorph } from '~/data/svgMorph.js';

const svgTransition = {
  duration: 0.3,
};

const MorphSvg = () => {
  return (
    <motion.button
      className="size-10 mx-auto"
      initial="passive"
      whileHover="active"
    >
      <svg
        width="256"
        height="256"
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="128" cy="128" r="128" fill="#FFCC4D" />
        <motion.path transition={svgTransition} variants={svgMorph.eyes.left} />
        <motion.path
          transition={svgTransition}
          variants={svgMorph.eyes.right}
        />
        <motion.path
          transition={svgTransition}
          variants={svgMorph.mouths}
          fill="#664500"
        />
      </svg>
    </motion.button>
  );
};
export default MorphSvg;
