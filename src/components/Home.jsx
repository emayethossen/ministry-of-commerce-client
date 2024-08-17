import HonorableAdvisers from "./Advisors";
import Cards from "./Cards";
import EServicesList from "./E-services";
import EmergencyHelpline from "./EmergencyHelpline";
import Footer from "./Footer";
import ImportantLinksList from "./ImportantLink";
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
                    <div className="container p-4">
                        <NewsTicker />
                    </div>
                    <NoticePage />
                    <Cards />
                    <div className="hidden md:block">
                        <Map />
                    </div>
                </div>
                <div className="container mx-auto md:p-2 p-12 bg-[#E1F5FE] md:bg-[#FFF8E1] h-full space-y-4">
                    <HonorableAdvisers />
                    <EServicesList />
                    <EmergencyHelpline />
                    <InnovationCorner />
                    <ImportantLinksList />
                    <div className="md:hidden">
                        <Map />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;