import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <nav className="">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className=""> 
        <section className="main">
          <Outlet></Outlet>
        </section>
      </main>
      <footer className="">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
