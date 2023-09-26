import { useEffect, useState } from "react";
import Header from "../components/Header";
import { technology } from "../data.json";
import bgDesktop from "/assets/technology/background-technology-desktop.jpg";
import bgTablet from "/assets/technology/background-technology-tablet.jpg";
import bgMobile from "/assets/technology/background-technology-mobile.jpg";

const Technology = () => {
  const [index, setIndex] = useState(0);
  const currTechInfo = technology[index];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateIndex = (event) => {
    event.stopPropagation();
    const targetIndex = event.target.dataset.index;
    setIndex(+targetIndex);
  };

  useEffect(() => {
    const currWindowWidth = window.innerWidth;

    setWindowWidth(currWindowWidth);
  }, [windowWidth]);

  console.log(windowWidth);

  return (
    <div className='min-h-[100vh] bg-technology-mobile bg-cover text-white md:bg-technology-tablet md:pt-[0] md:pr-[0] md:pb-[0] xl:bg-technology-desktop'>
      <div className='p-4 md:pr-[0]'>
        <Header />
      </div>
      <main className='py-4 grid gap-8 md:mt-10 xl:grid-cols-2 md:pb-[0] xl:w-[120rem] xl:mx-auto xl:mr-[0]'>
        <h1 className='font-tagline text-lg text-center text-white uppercase tracking-widest md:px-6 md:text-[2rem] md:text-left xl:col-span-full xl:text-[2.8rem]'>
          <span className='mr-2 font-bold text-gray'>03</span>
          Space Launch 101
        </h1>

        <div className='xl:col-start-2 xl:w-[52rem] h-[53rem] ml-auto'>
          <img
            src={
              windowWidth >= 1280
                ? currTechInfo.images.portrait
                : currTechInfo.images.landscape
            }
            alt={currTechInfo.names}
            className='w-full h-full object-cover mx-auto'
          />
        </div>

        <section className='w-[30rem] mx-auto pb-10 grid gap-5 md:w-[51rem] xl:w-[fit-content] xl:col-start-1 xl:grid-cols-[9rem_1fr] xl:row-start-2 xl:self-center'>
          <div className='flex justify-center gap-4 md:col-span-full xl:flex-col xl:col-span-1 xl:justify-start'>
            <button
              className={`w-8 h-8 rounded-full font-display text-lg md:w-[6rem] md:h-[6rem] md:text-xl xl:w-[8rem] xl:h-[8rem] xl:text-[3.2rem]  ${
                index == 0
                  ? "bg-white text-dark"
                  : "border-[0.1rem] border-gray text-white hover:bg-white hover:border-[0] hover:text-dark"
              }`}
              data-index='0'
              onClick={updateIndex}
            >
              1
            </button>

            <button
              className={`w-8 h-8 rounded-full font-display text-lg md:w-[6rem] md:h-[6rem] md:text-xl xl:w-[8rem] xl:h-[8rem] xl:text-[3.2rem]  ${
                index == 1
                  ? "bg-white text-dark"
                  : "border-[0.1rem] border-gray text-white hover:bg-white hover:border-[0] hover:text-dark"
              }`}
              data-index='1'
              onClick={updateIndex}
            >
              2
            </button>

            <button
              className={`w-8 h-8 rounded-full font-display text-lg md:w-[6rem] md:h-[6rem] md:text-xl xl:w-[8rem] xl:h-[8rem] xl:text-[3.2rem]  ${
                index == 2
                  ? "bg-white text-dark"
                  : "border-[0.1rem] border-gray text-white hover:bg-white hover:border-[0] hover:text-dark"
              }`}
              data-index='2'
              onClick={updateIndex}
            >
              3
            </button>
          </div>

          <div className='mx-auto pb-6 grid gap-2 font-display uppercase text-center md:pb-10 md:w-[45rem] md:col-span-full xl:w-[62rem] xl:col-start-2 xl:text-start'>
            <span className='font-tagline text-sm text-blue tracking-widest md:text-lg'>
              The Terminology...
            </span>

            <h2 className='text-xl md:text-2xl xl:text-3xl'>
              {currTechInfo.name}
            </h2>

            <p className='mx-auto font-body text-base text-blue normal-case md:text-lg xl:mx-[0] xl:w-[44rem] xl:text-[1.8rem] xl:text-left'>
              {currTechInfo.description}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Technology;
