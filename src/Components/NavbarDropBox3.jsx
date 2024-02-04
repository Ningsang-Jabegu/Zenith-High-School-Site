import React from "react";
import NavbarDropDownItem from "./NavbarDropDownItem";
 export default function NavbarDropBox3() {
  return (
    <ul className="dropdown-list border border-light">
            <NavbarDropDownItem
              iconClass="fa-solid fa-bowl-food"
              title="Food and Nutrition"
              description="The Food Service at ZES aims to provide nutritious lunch and
              snack options that meet the developmental needs of our
              students."
              href="/services/food-and-nutrition"
            />
            <NavbarDropDownItem
              iconClass="fa-solid fa-bus"
              title="Transportation"
              description="ZHS provides transportation for students in various sections
              of Dharan with its fleet of air-conditioned buse."
              href="/services/transportation"
            />
            <NavbarDropDownItem
              iconClass="fa-solid fa-user-doctor"
              title="Health Services"
              description="The Health Office is staffed by the school nurse and the
              health office administrative assistant."
              href="/services/health-services"
            />
            <NavbarDropDownItem
              iconClass="fa-solid fa-tree"
              title="Air Quality"
              description="Zenith School recognizes air quality is an issue that needs
              our attention and we have taken a number of steps to ensure
              that our students are given the best opportunity to grow and
              develop in a clean and healthy environment."
              href="/services/air-quality"
            />
            <NavbarDropDownItem
              iconClass="fa-solid fa-hands-holding-child"
              title="Child Protection"
              description="Zenith School is committed to protecting the safety and
              rights of children in keeping with our core values."
              href="/services/child-protection"
            />
            <NavbarDropDownItem
              iconClass="fa-solid fa-fingerprint"
              title="Safety and Security"
              description="ZHS is committed to the safety and security of our
              community."
              href="/services/safety-and-security"
            />
          </ul>
  );
}
