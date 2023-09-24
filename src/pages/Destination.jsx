import Header from "../components/Header";
import Moon from "../assets/destination/image-moon.webp";
import bgDesktop from "../assets/destination/background-destination-desktop.jpg";
import bgTablet from "../assets/destination/background-destination-tablet.jpg";
import bgMobile from "/src/assets/destination/background-destination-mobile.jpg";

const Destination = () => {
  return (
    <div className='min-h-[100vh] p-4 bg-destination-mobile bg-cover text-white md:bg-destination-tablet md:pt-[0] md:pr-[0] xl:bg-destination-desktop'>
      <Header />
      <main className='py-4 grid gap-5'>
        <h1 className='font-tagline text-lg text-center text-white uppercase tracking-widest'>
          <span className='mr-2 text-bold text-gray'>01</span>
          Pick your destination
        </h1>

        <img src={Moon} alt='moon' className='w-[17rem] h-[17rem] mx-auto' />

        <section className='w-[30rem] mx-auto grid gap-4'>
          <ul className='flex justify-center gap-4'>
            <li className='py-2'>
              <button className='text-sm uppercase text-blue'>Moon</button>
            </li>
            <li className='py-2'>
              <button className='text-sm uppercase text-blue'>Mars</button>
            </li>
            <li className='py-2'>
              <button className='text-sm uppercase text-blue'>Europa</button>
            </li>
            <li className='py-2'>
              <button className='text-sm uppercase text-blue'>Titan</button>
            </li>
          </ul>

          <div className='pb-6 border-b border-b-gray'>
            <h2 className='font-display uppercase text-center text-clamp'>
              Moon
            </h2>

            <p className='text-lg text-blue text-center'>
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
          </div>

          <div className='grid justify-center font-display'>
            <h3 className='font-tagline text-blue text-sm uppercase text-center'>
              Avg. Distance
            </h3>
            <span className='text-[2.8rem] uppercase'>384,400 km</span>
          </div>

          <div className='grid justify-center font-display'>
            <h3 className='font-tagline text-blue text-sm uppercase text-center'>
              Wst. Travel Time
            </h3>
            <span className='text-[2.8rem] uppercase'>3 Days</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Destination;
