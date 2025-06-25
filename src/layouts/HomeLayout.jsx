import React, { Suspense } from "react";
import { Outlet, useLoaderData } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Companies from "../pages/Companies";
import PrivateRoute from "../Provider/PrivateRoute";
import UserProfile from "../pages/UserProfile";

const HomeLayout = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <header>

        <nav className="">
          <Navbar>
          
          </Navbar>
          
          
        </nav>
      </header>
      <main className=""> 
        <section className="main">
          <Outlet></Outlet>
          <PrivateRoute>
            
          <Companies data={data}></Companies>
          </PrivateRoute>
          
        </section>
      </main>
      <footer className="">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
