import React from "react";
import NavbarDropDownItem from "./NavbarDropDownItem";
 export default function NavbarDropBox4() {
  return (
    <ul className="dropdown-list border border-light">
            <NavbarDropDownItem
              iconClass="fa-solid fa-users-gear"
              title="Parent's Association"
              description="Zenith English School Parents’ Association (ZESSPA) is a
              parent forum that exchanges ideas about issues and concerns
              involving the education, growth, and development of the
              students at Zenith English School."
              href="/community/parent's-association"
            />
            <NavbarDropDownItem
              iconClass="fa-solid fa-graduation-cap"
              title="Alumni"
              description="Once a Snow Leopard, always a Snow Leopard. If you have been
              connected to Lincoln School, the chances are it has had an
              indelible impact on your life."
              href="/community/alumni"
            />
            <NavbarDropDownItem
              iconClass="fa-solid fa-people-arrows"
              title="Community Voices"
              description="From modern state-of-the-art facilities to a diversity of
              cultures and backgrounds, Zenith English School has offered
              an unmatched educational environment for my own children."
              href="/community/community-voices"
            />
            <NavbarDropDownItem
              iconClass="fa-solid fa-handshake"
              title="Recently at Zenith"
              description="Elementary School Parent-Teacher Conferences"
              href="/community/recently-at-zenith"
            />
            <NavbarDropDownItem
              iconClass="fa-solid fa-calendar-days"
              title="Calendar"
              description="Zenith English School Calendar"
              href="/community/calendar"
            />
          </ul>
  );
}
