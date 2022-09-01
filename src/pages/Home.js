import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import MailchimpForm from "../components/MailchimpForm";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="main-home">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <MailchimpForm />
      <Footer />
    </div>
  );
};

export default Home;
