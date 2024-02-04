import React from "react";
import NavbarDropDownItem from "./NavbarDropDownItem";
 export default function NavbarDropBox5() {
  return (
    <ul className="dropdown-list border border-light">
            <NavbarDropDownItem
              iconClass="fa-solid fa-tachograph-digital"
              title="Staff Bulletins"
              description="Notices for the staffs."
              href="/bulletins/staff-bulletins"
            />
            <NavbarDropDownItem
              iconClass="fa-solid fa-book-open-reader"
              title="Student Bulletins"
              description="Notices for the students"
              href="/bulletins/student-bulletins"
            />
            <NavbarDropDownItem
              iconClass="fa-solid fa-person-booth"
              title="Parent Bulletins"
              description="Notices for the parents"
              href="/bulletins/parent-bulletins"
            />
          </ul>
  );
}
