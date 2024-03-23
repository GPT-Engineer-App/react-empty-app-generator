import { useState } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import TabSection from "./components/TabSection";
import TwoColumnCard from "./components/TwoColumnCard";
import FeaturedAlternate from "./components/FeaturedAlternate";
import Footer from "./components/Footer";
import UsesList from "./components/UsesList";

import "./index.css";
import SectionWrapper from "./components/Global/SectionWrapper";

function App() {
  const [loading, setLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Form submitted!");
  };

  window.addEventListener("load", (e) => {
    setLoading(true);
  });

  return (
    <div>
      {loading ? (
        <>
          <NavBar />
          <HeroSection />
          <SectionWrapper id="about" heading="ABOUT ME">
            <TabSection />
          </SectionWrapper>
          <SectionWrapper id="experience" heading="EXPERIENCE">
            <TwoColumnCard />
          </SectionWrapper>
          <SectionWrapper id="projects" heading="PROJECTS">
            <FeaturedAlternate />
          </SectionWrapper>
          <SectionWrapper id="uses" heading="USES">
            <UsesList />
          </SectionWrapper>
          <section className="bg-white py-16 dark:bg-primary">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-primary mb-4 dark:text-white">Future project coming soon</h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300">Stay tuned for exciting new developments!</p>
            </div>
          </section>
          <section className="bg-white py-16 dark:bg-primary">
            <div className="container">
              <h2 className="text-3xl font-semibold text-primary mb-8 dark:text-white">Contact Me</h2>
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-primary dark:text-white">
                    Name
                  </label>
                  <input type="text" name="name" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary dark:bg-primary-500 dark:text-white" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-primary dark:text-white">
                    Email
                  </label>
                  <input type="email" name="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary dark:bg-primary-500 dark:text-white" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-primary dark:text-white">
                    Message
                  </label>
                  <textarea name="message" id="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary dark:bg-primary-500 dark:text-white" required></textarea>
                </div>
                <div>
                  <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-secondary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-secondary-600 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </section>
          <Footer />
        </>
      ) : (
        <div className="loading-wrapper">
          <div className="flex gap-8 items-center justify-center">
            <span className="text-white font-display md:text-7xl">Loading</span>
            <svg className="animate-spin -ml-1 mr-3 h-16 w-16 text-secondary fill-current" xmlns="http://www.w3.org/2000/svg" fill="current" viewBox="0 0 24 24">
              <circle className="opacity-25 fill-current text-secondary-300" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="current"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
