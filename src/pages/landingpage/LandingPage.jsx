import { ArrowRight, Code, User, Users, Zap } from "lucide-react";
import "./LandingPage.css";
import FeaturedCard from "../../components/feautedCard/FeaturedCard";
const LandingPage = () => {
  return (
    <main>
      <section className="hero">
        <h1>AI-Powered Freelancing Platform</h1>
        <p>
          Connect with top talent and find your perfect gig using our advanced
          AI matching system.
        </p>
        <button className="cta-btn">
          Get Started <ArrowRight className="icon" />
        </button>
      </section>

      <section className="features" id="features">
        <FeaturedCard
          title={"AI-Driven Matching"}
          description={
            "Our advanced AI algorithms match freelancers with the perfect projects based on skills, experience, and preferences."
          }
          Icon={Zap}
        />
        <FeaturedCard
            Icon={User}
            title="AI-Powered Interviews"
            description="Conduct smart, automated interviews to quickly assess candidate fit and skills."
          />
          <FeaturedCard
            Icon={Code}
            title="Real-Time Coding Challenges"
            description="Evaluate technical skills with our integrated real-time coding challenges and assessments."
          />
      </section>

      <section className="cta">
        <h2>Ready to revolutionize your freelancing experience?</h2>
        <button className="cta-btn">Join FreelanceAI Today</button>
      </section>
    </main>
  );
};

export default LandingPage;
