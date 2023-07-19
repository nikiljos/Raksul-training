import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Home.css";
import Step from "./Step/Step";
import { useAppSelector } from "../../hooks";

function Home() {
  const auth = useAppSelector((state) => state.auth);
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
              Optimize expenses, effortlessly split bills with CashCut, your
              ultimate spend manager app.
            </p>
          </div>
          <Link
            to={auth.user.id ? "home" : "/login"}
            className="hero-cta btn-primary"
          >
            Get Started
          </Link>
        </div>
        <div className="home-hero-right">
          <img src="/images/hero-img.png" alt="" />
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
              title={"Step 2. Create a group"}
              description={
                "Lorem ipsum dolor sit amet consectetur. Ullamcorper lobortis elementum volutpat ac."
              }
            />
          </div>
          <div className="right-steps">
            <Step
              title={"Step 3. Add your expenses"}
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
        <Link
          to={auth.user.id ? "home" : "/login"}
          className="working-cta btn-primary"
        >
          Get Started
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
