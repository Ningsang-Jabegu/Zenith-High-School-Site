import React from "react";
import NavbarDropDownItem from "./NavbarDropDownItem";
 export default function NavbarDropBox1() {
  return (
    <ul className="dropdown-list border border-light">
            <NavbarDropDownItem
              iconClass="fa-solid fa-truck-fast"
              title="Mission"
              description="ZES is a multicultural community in the foothills of the Himalaya that inspires in each student a passion for learning, the confidence and competence to pursue their dreams, and the commitment to serve as a compassionate global citizen and leader, who is a steward of the environment."
              href="/aboutus/mission"
            />
            <NavbarDropDownItem
              iconClass="fa-solid fa-school-circle-check"
              title="Accreditation"
              description="ZES is accredited by the National Examination Board (NEB) on Elementary and Secondary Schools."
              href="/aboutus/accreditation"
            />
            <NavbarDropDownItem
              iconClass="fa-solid fa-book-journal-whills"
              title="Strategic Framework"
              description="Learning for Innovation, Dynamic Learning Environment,
              Community and Inclusion, Organizational Agility and
              Responsiveness"
              href="/aboutus/strategic-framework"
            />
            <NavbarDropDownItem
              iconClass="fa-solid fa-chalkboard-user"
              title="Faculty"
              description="Our diverse population of teachers supports the national and
              intercultural learning environment at Zenith School."
              href="/aboutus/faculty"
            />
            <NavbarDropDownItem
              iconClass="fa-solid fa-dumpster-fire"
              title="Facilities"
              description="Zenith provides an excellent facility for student learning
              and student life."
              href="/aboutus/facilities"
            />
            <NavbarDropDownItem
              iconClass="fa-solid fa-school-flag"
              title="School Profile"
              description="Academic Profile 2021–2022 Established in 1999, Zenith
              School is an independent,"
              href="/aboutus/school-profile"
            />
            <NavbarDropDownItem
              iconClass="fa-solid fa-person-dots-from-line"
              title="Principle's Message"
              description="Welcome to Zenith School, Kathmandu, Nepal, a school deeply
              committed to the mission of inspiring each student a passion
              for learning, the confidence and competence to pursue their
              dreams and the commitment to serve as a compassionate global
              citizen who is a steward of the environment."
              href="/aboutus/principle's-message"
            />
            <NavbarDropDownItem
              iconClass="fa-brands fa-wolf-pack-battalion"
              title="Director's Message"
              description="We opened our learning commons and classroom building 24
              years ago, and although the facilities are outstanding and
              represent the best in Nepal and top in the region, it is our
              commitment to the mission and core values – Collaboration,
              Compassion, Learning, Integrity, Respect and Responsibility
              – that serves as a foundation for the learning experiences
              and our commitment to meet the individual needs of each
              student."
              href="/aboutus/director's-message"
            />
          </ul>
  );
}
