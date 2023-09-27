import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import bgDesktop from "/assets/home/background-home-desktop.jpg";
import bgTablet from "/assets/home/background-home-tablet.jpg";
import bgMobile from "/assets/home/background-home-mobile.jpg";

const topTextFadeInVariant = {
  unhidden: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.75,
    },
  },
  hidden: { opacity: 0, y: "-15rem" },
};

const buttonFadeInVariant = {
  unhidden: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.85,
    },
  },
  hidden: { opacity: 0, y: "2rem" },
};

const Home = () => {
  return (
    <div className='min-h-[100vh] px-4 bg-home-mobile bg-cover md:bg-home-tablet md:pr-[0] xl:bg-home-desktop'>
      <Header />
      <main className='h-[80vh] p-4 flex flex-col justify-center items-center gap-3 text-center md:w-[48rem] md:mx-auto md:mt-[5rem]'>
        <motion.h1
          variants={topTextFadeInVariant}
          initial='hidden'
          whileInView='unhidden'
          className='font-tagline text-lg uppercase md:text-[2rem]'
        >
          So you want to travel to
          <span className='block font-display uppercase text-clamp'>Space</span>
        </motion.h1>

        <motion.p
          variants={topTextFadeInVariant}
          initial='hidden'
          whileInView='unhidden'
          className='mb-5 text-base md:text-lg'
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </motion.p>

        <motion.div
          variants={buttonFadeInVariant}
          initial='hidden'
          whileInView='unhidden'
          type='button'
          className='box-content grid place-items-center content-box w-[15rem] h-[15rem] bg-white rounded-full font-display uppercase text-[2rem] text-dark hover:border-[6rem] hover:border-dark transition-all  duration-500 ease-in-out hover:transition-all hover:duration-500 hover:ease-in-out md:text-[3.2rem] md:w-[23rem] md:h-[23rem]'
        >
          <Link to='/destination'>Explore</Link>
        </motion.div>
      </main>
    </div>
  );
};

export default Home;
