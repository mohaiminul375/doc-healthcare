
import About from './About';
import Banner from './Banner';
import Faq from './Faq';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Faq></Faq>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;