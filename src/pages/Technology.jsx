import Header from "../components/Header";
import bgDesktop from "../assets/technology/background-technology-desktop.jpg";
import bgTablet from "../assets/technology/background-technology-tablet.jpg";
import bgMobile from "/src/assets/technology/background-technology-mobile.jpg";

const Technology = () => {
  return (
    <div
      style={{ backgroundImage: `url('${bgMobile}')` }}
      className='min-h-[100vh] bg-cover text-white'
    >
      <Header />
      <main>Main Content</main>
    </div>
  );
};

export default Technology;
