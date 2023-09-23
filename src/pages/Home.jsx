import Header from "../components/Header";
import bgDesktop from "../assets/home/background-home-desktop.jpg";
import bgTablet from "../assets/home/background-home-tablet.jpg";
import bgMobile from "/src/assets/home/background-home-mobile.jpg";

const Home = () => {
  return (
    <div className='min-h-[100vh] px-4 bg-home-mobile bg-cover md:bg-home-tablet xl:bg-home-desktop'>
      <Header />
      <main className='h-[80vh] p-4 flex flex-col justify-center items-center gap-3 text-center'>
        <h1 className='text-lg uppercase'>
          So you want to travel to
          <span className='block font-display uppercase text-clamp'>Space</span>
        </h1>

        <p className='mb-5 text-base'>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>

        <button
          type='button'
          className='box-content grid place-items-center content-box w-[15rem] h-[15rem] bg-white rounded-full font-display uppercase text-[2rem] text-dark hover:border-[6rem] hover:border-dark transition-all  duration-500 ease-in-out hover:transition-all hover:duration-500 hover:ease-in-out'
        >
          Explore
        </button>
      </main>
    </div>
  );
};

export default Home;
