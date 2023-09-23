import Header from "../components/Header";
import bgDesktop from "../assets/crew/background-crew-desktop.jpg";
import bgTablet from "../assets/crew/background-crew-tablet.jpg";
import bgMobile from "/src/assets/crew/background-crew-mobile.jpg";

const Crew = () => {
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

export default Crew;
