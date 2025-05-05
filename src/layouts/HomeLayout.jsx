import React, { Suspense } from "react";
import { Outlet, useLoaderData } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Companies from "../pages/Companies";

const HomeLayout = () => {
  const data = useLoaderData();
  console.log(data);
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
          <Companies data={data}></Companies>
        </section>
      </main>
      <footer className="">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
