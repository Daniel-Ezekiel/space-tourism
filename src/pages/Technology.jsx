import Header from "../components/Header";
import bgDesktop from "/assets/technology/background-technology-desktop.jpg";
import bgTablet from "/assets/technology/background-technology-tablet.jpg";
import bgMobile from "/assets/technology/background-technology-mobile.jpg";

const Technology = () => {
  return (
    <div className='min-h-[100vh] p-4 bg-technology-mobile bg-cover text-white md:bg-technology-tablet md:pt-[0] md:pr-[0] xl:bg-technology-desktop'>
      <Header />
      <main>Main Content</main>
    </div>
  );
};

export default Technology;
