import React from "react";
import companyLogo1 from "../../assets/company-logos/company1.png";
import companyLogo2 from "../../assets/company-logos/company2.png";
import companyLogo3 from "../../assets/company-logos/company3.png";

const CompanyLogos = () => {
  return (
    <section className="bg-white py-16 dark:bg-primary">
      <div className="container">
        <h2 className="text-3xl font-semibold text-center text-primary dark:text-white mb-10">Companies I've Worked With</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex justify-center">
            <img src={companyLogo1} alt="Company 1 Logo" className="h-12 w-auto grayscale" />
          </div>
          <div className="flex justify-center">
            <img src={companyLogo2} alt="Company 2 Logo" className="h-12 w-auto grayscale" />
          </div>
          <div className="flex justify-center">
            <img src={companyLogo3} alt="Company 3 Logo" className="h-12 w-auto grayscale" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
