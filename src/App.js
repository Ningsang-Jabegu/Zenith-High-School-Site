import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Academics from "./Pages/Academics";
import Bulletins from "./Pages/Bulletins";
import Community from "./Pages/Community";
import Services from "./Pages/Services";
import NoPage from "./Pages/NoPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Admission from "./Pages/Admission";
import Calender from "./Pages/Calender";
import NewsAndMedia from "./Pages/NewsAndMedia";
import WorkAtZES from "./Pages/WorkAtZES";
import ContactUs from "./Pages/ContactUs";
import Mission from "./Pages/Sub-Pages/Mission";
import Accreditation from "./Pages/Sub-Pages/Accreditation";
import StartegicFramework from "./Pages/Sub-Pages/StrategicFramework";
import Faculty from "./Pages/Sub-Pages/Faculty";
import Facilities from "./Pages/Sub-Pages/Facilities";
import SchoolProfile from "./Pages/Sub-Pages/SchoolProfile";
import PrincipleMessage from "./Pages/Sub-Pages/PrincipleMessage";
import DirectorMessage from "./Pages/Sub-Pages/DirectorMessage";
import Elementary from "./Pages/Sub-Pages/Elementary";
import Middle from "./Pages/Sub-Pages/Middle";
import High from "./Pages/Sub-Pages/High";
import Activities from "./Pages/Sub-Pages/Activities";
import Foods from "./Pages/Sub-Pages/Foods";
import Transportation from "./Pages/Sub-Pages/Transportation";
import Health from "./Pages/Sub-Pages/Health";
import Air from "./Pages/Sub-Pages/Air";
import ChildProtection from "./Pages/Sub-Pages/ChildProtection";
import SafetyAndSecurity from "./Pages/Sub-Pages/SafetyAndSecurity";
import Alumni from "./Pages/Sub-Pages/Alumni"
import RecentlyAtZenith from "./Pages/Sub-Pages/RecentlyAtZenith";
import CommunityVoices from "./Pages/Sub-Pages/CommunityVoices";
import ParentsAssociation from "./Pages/Sub-Pages/ParentsAssociation";
import StaffBulletins from "./Pages/Sub-Pages/StaffBulletins";
import StudentBulletins from "./Pages/Sub-Pages/StudentBulletins";
import ParentBulletins from "./Pages/Sub-Pages/ParentBulletins";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/aboutus/mission"element={<Mission />} />
        <Route path="/aboutus/accreditation"element={<Accreditation/>} />
        <Route path="/aboutus/strategic-framework"element={<StartegicFramework />} />
        <Route path="/aboutus/faculty"element={<Faculty/>} />
        <Route path="/aboutus/facilities"element={<Facilities/>} />
        <Route path="/aboutus/school-profile"element={<SchoolProfile/>} />
        <Route path="/aboutus/principle's-message"element={<PrincipleMessage/>} />
        <Route path="/aboutus/director's-message"element={<DirectorMessage/>} />

        <Route path="/academics" element={<Academics />} />
        <Route path="/academics/elementary-school" element={<Elementary />} />
        <Route path="/academics/middle-school" element={<Middle />} />
        <Route path="/academics/high-school" element={<High />} />
        <Route path="/academics/arts-athletics-activities" element={<Activities />} />

        <Route path="/services" element={<Services />} />
        <Route path="/services/food-and-nutrition" element={<Foods />} />
        <Route path="/services/transportation" element={<Transportation />} />
        <Route path="/services/health-services" element={<Health />} />
        <Route path="/services/air-quality" element={<Air />} />
        <Route path="/services/child-protection" element={<ChildProtection />} />
        <Route path="/services/safety-and-security" element={<SafetyAndSecurity />} />

        <Route path="/community" element={<Community />} />
        <Route path="/community/parent's-association" element={<ParentsAssociation />} />
        <Route path="/community/alumni" element={<Alumni />} />
        <Route path="/community/community-voices" element={<CommunityVoices/>} />
        <Route path="/community/recently-at-zenith" element={<RecentlyAtZenith />} />
        <Route path="/community/calendar" element={<Calender />} />
        
        <Route path="/bulletins" element={<Bulletins />} />
        <Route path="/bulletins/staff-bulletins" element={<StaffBulletins />} />
        <Route path="/bulletins/student-bulletins" element={<StudentBulletins />} />
        <Route path="/bulletins/parent-bulletins" element={<ParentBulletins />} />
        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/news" element={<NewsAndMedia />} />
        <Route path="/work" element={<WorkAtZES />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

