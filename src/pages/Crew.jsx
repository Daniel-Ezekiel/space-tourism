import { useState } from "react";
import Header from "../components/Header";
import { crew } from "../data.json";
import bgDesktop from "/assets/crew/background-crew-desktop.jpg";
import bgTablet from "/assets/crew/background-crew-tablet.jpg";
import bgMobile from "/assets/crew/background-crew-mobile.jpg";

const Crew = () => {
  const [index, setIndex] = useState(0);
  const currCrewMember = crew[index];

  const updateIndex = (event) => {
    event.stopPropagation();
    const targetIndex = event.target.dataset.index;
    setIndex(+targetIndex);
  };

  return (
    <div className='min-h-[100vh] p-4 bg-crew-mobile bg-cover text-white md:bg-crew-tablet md:pt-[0] md:pr-[0] md:pb-[0] xl:bg-crew-desktop'>
      <Header />
      <main className='py-4 grid gap-8 md:mt-10 md:px-6 md:pl-4 xl:grid-cols-2 md:pb-[0] xl:w-[120rem] xl:mx-auto'>
        <h1 className='font-tagline text-lg text-center text-white uppercase tracking-widest md:text-[2rem] md:text-left xl:col-span-full xl:text-[2.8rem]'>
          <span className='mr-2 font-bold text-gray'>02</span>
          Meet your crew
        </h1>

        <div className='h-[28rem] border-b-[0.1rem] border-b-gray md:border-b-[0] md:h-[50rem] md:mx-auto xl:col-start-2 xl:h-[65rem] xl:border-b-[0.1rem] xl:border-b-gray'>
          <img
            src={currCrewMember.images.webp}
            alt={currCrewMember.names}
            className='w-full h-full object-contain mx-auto'
          />
        </div>

        <section className='w-[30rem] mx-auto grid gap-5 md:w-[57.5rem] md:grid-cols-2 md:row-start-2 xl:col-start-1 xl:self-center'>
          <div className='flex justify-center gap-4 md:col-span-full xl:justify-start'>
            <button
              className={`w-3 h-3 rounded-full  ${
                index == 0 ? "bg-white" : "bg-gray"
              }`}
              data-index='0'
              onClick={updateIndex}
            ></button>

            <button
              className={`w-3 h-3 rounded-full  ${
                index == 1 ? "bg-white" : "bg-gray"
              }`}
              data-index='1'
              onClick={updateIndex}
            ></button>

            <button
              className={`w-3 h-3 rounded-full  ${
                index == 2 ? "bg-white" : "bg-gray"
              }`}
              data-index='2'
              onClick={updateIndex}
            ></button>

            <button
              className={`w-3 h-3 rounded-full  ${
                index == 3 ? "bg-white" : "bg-gray"
              }`}
              data-index='3'
              onClick={updateIndex}
            ></button>
          </div>

          <div className='pb-6 grid gap-2 font-display uppercase text-center md:pb-10 md:w-[52rem] md:col-span-full md:row-start-[1] xl:w-[62rem] xl:text-start'>
            <span className='text-lg text-gray md:text-xl xl:text-[3.2rem]'>
              {currCrewMember.role}
            </span>

            <h2 className='text-xl md:text-2xl xl:text-3xl'>
              {currCrewMember.name}
            </h2>

            <p className='font-body text-base text-blue normal-case md:text-lg xl:text-[1.8rem] xl:w-[45rem]'>
              {currCrewMember.bio}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Crew;
