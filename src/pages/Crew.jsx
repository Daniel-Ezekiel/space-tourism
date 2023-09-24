import Header from "../components/Header";
import bgDesktop from "/assets/crew/background-crew-desktop.jpg";
import bgTablet from "/assets/crew/background-crew-tablet.jpg";
import bgMobile from "/assets/crew/background-crew-mobile.jpg";

const Crew = () => {
  return (
    <div className='min-h-[100vh] p-4 bg-crew-mobile bg-cover text-white md:bg-crew-tablet md:pt-[0] md:pr-[0] xl:bg-crew-desktop'>
      <Header />
      <main>Main Content</main>
    </div>
  );
};

export default Crew;
