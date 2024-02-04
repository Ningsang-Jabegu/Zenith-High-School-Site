import React from "react";
import NavbarDropDownItem from "./NavbarDropDownItem";
 export default function NavbarDropBox2() {
  return (
    <ul className="dropdown-list border border-light">
            <NavbarDropDownItem
              iconClass="fa-solid fa-children"
              title="Elementary School"
              description="The Zenith elementary program, which includes Early
              Childhood Education, is a rich, multi-sensory,
              activity-based experience that nurtures the whole child. It
              provides students with a supportive learning community that
              operates according to agreements reached by students and
              teachers as they work together."
              href="/academics/elementary-school"
            />
            <NavbarDropDownItem
              iconClass="fa-solid fa-user-tie"
              title="Middle School"
              description="Zenith's middle school curriculum honors inquiry,
              experimentation, and learning, all in the spirit of
              discovery."
              href="/academics/middle-school"
            />
            <NavbarDropDownItem
              iconClass="fa-solid fa-user-graduate"
              title="High School"
              description="High school is about the collation of academic and life
              skills, and at Zenith, we aim to give students those skill
              in a constructive, engaging environment."
              href="/academics/high-school"
            />
            <NavbarDropDownItem
              iconClass="fa-solid fa-brush"
              title="Arts, Athletics, Activities"
              description=" At Zenith, we consider our athletics and extracurricular
              activities to be an educational cornerstone."
              href="/academics/arts-athletics-activities"
            />
          </ul>
  );
}
