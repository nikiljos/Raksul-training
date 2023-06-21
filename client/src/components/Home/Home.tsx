import Footer from "../Footer/Footer";
import "./Home.css";
import Step from "./Step/Step";

function Home() {
  return (
    <div className="home-container">
      <div className="home-hero">
        <div className="home-hero-left">
          <div className="hero-text">
            <h3 className="hero-text-md">Going on a trip with friends?</h3>
            <h1 className="hero-text-lg">
              Let CashCut take care of the expense management!
            </h1>
            <p className="hero-text-sm">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper lobortis
              elementum volutpat ac.
            </p>
          </div>
          <button className="hero-cta btn-primary">Get Started</button>
        </div>
        <div className="home-hero-right">
          <img src="./images/hero-img.png" alt="" />
        </div>
      </div>
      <div className="home-working">
        <h1 className="working-title">How does it work?</h1>
        <div className="working-steps">
          <div className="left-steps">
            <Step
              title={"Step 1. Create an account"}
              description={
                "Lorem ipsum dolor sit amet consectetur. Ullamcorper lobortis elementum volutpat ac."
              }
            />
            <Step
              title={"Step 3. Add your expenses"}
              description={
                "Lorem ipsum dolor sit amet consectetur. Ullamcorper lobortis elementum volutpat ac."
              }
            />
          </div>
          <div className="right-steps">
            <Step
              title={"Step 2. Create a group"}
              description={
                "Lorem ipsum dolor sit amet consectetur. Ullamcorper lobortis elementum volutpat ac."
              }
            />
            <Step
              title={"Step 4. Get the individual pay calculated"}
              description={
                "Lorem ipsum dolor sit amet consectetur. Ullamcorper lobortis elementum volutpat ac."
              }
            />
          </div>
        </div>
        <button className="working-cta btn-primary">Get Started</button>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
