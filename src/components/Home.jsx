import HonorableAdvisers from "./Advisors";
import Cards from "./Cards";
import EServicesList from "./E-services";
import EmergencyHelpline from "./EmergencyHelpline";
import Footer from "./Footer";
import InnovationCorner from "./Innovation";
import Map from "./Map"
import NewsTicker from "./NewsTicker";
import NoticePage from "./NoticePage";
import Slider from "./Slider";

const Home = () => {
    return (
        <>
            <div className="md:grid md:grid-cols-5">
                <div className="md:col-span-4">
                    <Slider />
                    <NewsTicker />
                    <NoticePage />
                    <Cards />
                    <Map />
                </div>
                <div className="container mx-auto p-2 bg-[#FFF8E1] h-full">
                    <HonorableAdvisers />
                    <EServicesList />
                    <EmergencyHelpline />
                    <InnovationCorner />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;