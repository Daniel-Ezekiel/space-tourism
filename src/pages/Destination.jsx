import { useEffect, useState } from "react";
import Header from "../components/Header";
import { destinations } from "../data.json";
import Moon from "/assets/destination/image-moon.webp";
import bgDesktop from "/assets/destination/background-destination-desktop.jpg";
import bgTablet from "/assets/destination/background-destination-tablet.jpg";
import bgMobile from "/assets/destination/background-destination-mobile.jpg";

const Destination = () => {
  const [index, setIndex] = useState(0);
  const currDestination = destinations[index];

  const updateIndex = (event) => {
    event.stopPropagation();
    const targetIndex = event.target.closest("li").dataset.index;
    setIndex(+targetIndex);
  };

  return (
    <div className='min-h-[100vh] p-4 bg-destination-mobile bg-cover text-white md:bg-destination-tablet md:pt-[0] md:pr-[0] xl:bg-destination-desktop'>
      <Header />
      <main className='py-4 grid gap-5 md:mt-10 md:px-6'>
        <h1 className='font-tagline text-lg text-center text-white uppercase tracking-widest md:text-[2rem] md:text-left'>
          <span className='mr-2 font-bold text-gray'>01</span>
          Pick your destination
        </h1>

        <img
          src={currDestination.images.webp}
          alt={currDestination.name}
          className='w-[17rem] h-[17rem] mx-auto md:w-[30rem] md:h-[30rem]'
        />

        <section className='w-[30rem] mx-auto grid gap-4 md:w-[57.5rem] md:grid-cols-2'>
          <ul className='flex justify-center gap-4 md:col-span-full'>
            <li
              className={`py-2 font-tagline ${
                index == 0
                  ? "border-b-2 border-b-white text-white"
                  : "hover:border-b-2 hover:border-b-gray text-blue"
              }`}
              data-index='0'
              onClick={updateIndex}
            >
              <button className='text-sm uppercase tracking-widest md:text-lg'>
                Moon
              </button>
            </li>
            <li
              className={`py-2 font-tagline ${
                index == 1
                  ? "border-b-2 border-b-blue"
                  : "hover:border-b-2 hover:border-b-gray"
              }`}
              data-index='1'
              onClick={updateIndex}
            >
              <button className='text-sm uppercase text-blue tracking-widest md:text-lg'>
                Mars
              </button>
            </li>
            <li
              className={`py-2 font-tagline ${
                index == 2
                  ? "border-b-2 border-b-blue"
                  : "hover:border-b-2 hover:border-b-gray"
              }`}
              data-index='2'
              onClick={updateIndex}
            >
              <button className='text-sm uppercase text-blue tracking-widest md:text-lg'>
                Europa
              </button>
            </li>
            <li
              className={`py-2 font-tagline ${
                index == 3
                  ? "border-b-2 border-b-blue"
                  : "hover:border-b-2 hover:border-b-gray"
              }`}
              data-index='3'
              onClick={updateIndex}
            >
              <button className='text-sm uppercase text-blue tracking-widest md:text-lg'>
                Titan
              </button>
            </li>
          </ul>

          <div className='pb-6 border-b border-b-gray md:pb-10 md:col-span-full'>
            <h2 className='font-display uppercase text-center text-clamp'>
              {currDestination.name}
            </h2>

            <p className='text-lg text-blue text-center'>
              {currDestination.description}
            </p>
          </div>

          <div className='grid justify-center font-display md:mt-4'>
            <h3 className='font-tagline text-blue text-sm uppercase text-center tracking-widest'>
              Avg. Distance
            </h3>
            <span className='text-[2.8rem] uppercase'>
              {currDestination.distance}
            </span>
          </div>

          <div className='grid justify-center font-display  md:mt-4'>
            <h3 className='font-tagline text-blue text-sm uppercase text-center tracking-widest'>
              Est. Travel Time
            </h3>
            <span className='text-[2.8rem] uppercase'>
              {currDestination.travel}
            </span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Destination;
