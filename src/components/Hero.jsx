import { motion } from 'framer-motion';
import { IoMdFlower } from "react-icons/io";

const FlowerBackground = () => {
  // Generate flowers with more edge/corner placement
  const flowers = Array.from({ length: 20 }).map((_, i) => {
    // Decide if flower should be placed near edges (80% chance)
    const placeNearEdge = Math.random() > 0.2;
    
    let left, top;
    
    if (placeNearEdge) {
      // Place near edges or corners
      const edge = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
      const cornerBias = Math.random() > 0.7; // 30% chance to be in a corner
      
      if (cornerBias) {
        // Place in corners
        const xCorner = Math.random() > 0.5 ? 0 : 90;
        const yCorner = Math.random() > 0.5 ? 0 : 90;
        left = `${xCorner}%`;
        top = `${yCorner}%`;
      } else {
        // Place along edges
        switch (edge) {
          case 0: // top
            left = `${Math.random() * 100}%`;
            top = `${Math.random() * 20}%`;
            break;
          case 1: // right
            left = `${80 + Math.random() * 20}%`;
            top = `${Math.random() * 100}%`;
            break;
          case 2: // bottom
            left = `${Math.random() * 100}%`;
            top = `${80 + Math.random() * 20}%`;
            break;
          case 3: // left
            left = `${Math.random() * 20}%`;
            top = `${Math.random() * 100}%`;
            break;
        }
      }
    } else {
      // Random placement anywhere
      left = `${Math.random() * 100}%`;
      top = `${Math.random() * 100}%`;
    }
    
    return {
      id: i,
      size: `${Math.random() * 2 + 2}rem`, // Increased size (2-4rem)
      left,
      top,
      rotate: Math.random() * 360,
      delay: Math.random() * 3,
      duration: Math.random() * 15 + 10,
      opacity: Math.random() * 0.3 + 0.5 // Adjusted opacity (0.5-0.8)
    };
  });

  // Single color matching the hero text (text-pink-600 - #db2777)
  const flowerColor = '#db2777';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          className="absolute origin-center"
          style={{
            fontSize: flower.size,
            left: flower.left,
            top: flower.top,
            rotate: flower.rotate,
            opacity: flower.opacity,
            zIndex: 0,
            color: flowerColor,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.05))'
          }}
          animate={{
            y: [0, -10, 0, 10, 0],
            rotate: [flower.rotate, flower.rotate + 10],
            opacity: [flower.opacity, flower.opacity + 0.1, flower.opacity]
          }}
          transition={{
            duration: flower.duration,
            delay: flower.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <IoMdFlower />
        </motion.div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center py-6 px-4 relative'>
      <FlowerBackground />
      
      <div className='text-center max-w-4xl relative z-10 bg-white bg-opacity-80 px-8 py-6 rounded-lg backdrop-blur-sm'>
        <p className='text-6xl md:text-8xl font-bold italic font-serif text-pink-600'>Beaded with Love</p>
        <p className='text-gray-700 py-4 text-xl md:text-2xl'>
          Our team builds beautiful beaded products with lots of love and care. 
          So go ahead & gift this to your loved ones.
        </p>
      </div>
    </div>
  );
};

export default Hero;