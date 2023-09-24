import Header from "../components/Header";
import bgDesktop from "../assets/destination/background-destination-desktop.jpg";
import bgTablet from "../assets/destination/background-destination-tablet.jpg";
import bgMobile from "/src/assets/destination/background-destination-mobile.jpg";

const Destination = () => {
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

export default Destination;
