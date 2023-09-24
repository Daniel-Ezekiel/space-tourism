import Header from "../components/Header";
import bgDesktop from "../assets/crew/background-crew-desktop.jpg";
import bgTablet from "../assets/crew/background-crew-tablet.jpg";
import bgMobile from "/src/assets/crew/background-crew-mobile.jpg";

const Crew = () => {
  return (
    <div
      style={{ backgroundImage: `url('${bgMobile}')` }}
      className='min-h-[100vh] p-4 bg-cover text-white md:pt-[0] md:pr-[0]'
    >
      <Header />
      <main>Main Content</main>
    </div>
  );
};

export default Crew;
