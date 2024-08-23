import Image from "next/image";
import Header from "./components/headers";
import Footer from "./components/footer";
import Dashboard from './dashboard/page'

export default function Home() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <Footer/>
    </>
  );
}
