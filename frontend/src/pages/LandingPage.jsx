import Navbar from "../components/layouts/Navbar";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <section>
        <div>
          <h1>A Safe Space For Your <span>Emotions</span></h1>
          <p>A private place to understand and care for your emotions.</p>
        </div>
        <div>
          <img src={L-img1} alt="Landing Image" />
        </div>
      </section>
    </>
  );
}