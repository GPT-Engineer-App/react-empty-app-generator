import React from "react";
import schibstedLogo from "../../assets/company-logos/schibsted.png";
import volvoLogo from "../../assets/company-logos/volvo.png";
import martiniLogo from "../../assets/company-logos/martini.png";

const CompanyLogos = () => {
  return (
    <section className="bg-white py-16 dark:bg-primary">
      <div className="container">
        <h2 className="text-3xl font-semibold text-center text-primary dark:text-white mb-10">Companies I've Worked With</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex justify-center">
            <img src={schibstedLogo} alt="Schibsted Logo" className="h-12 w-auto grayscale" />
          </div>
          <div className="flex justify-center">
            <img src={volvoLogo} alt="Volvo Logo" className="h-12 w-auto grayscale" />
          </div>
          <div className="flex justify-center">
            <img src={martiniLogo} alt="Martini Logo" className="h-12 w-auto grayscale" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
