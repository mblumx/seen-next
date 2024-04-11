import Head from "next/head"
import { Inter } from "next/font/google"
import Nav from "./components/Nav"
import Image from "next/image"
import landingImage from "../public/samuel-regan-asante-full.jpg"
// import bg-popcorn-bw from '../public/bg-movies-bw.png'

// const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  //TODO: Use padding-top 36 to ensure header doesn't overlap
  return (
    //hero

    <section className="bg-slate-950 ">
      <div className="flex flex-row justify-between container bg-slate-950 mx-auto overflow-hidden">
        <div className="flex items-center gap-14 flex-col text-white mx-auto pt-48">
          <h1 className="text-center lg:text-left px-4 lg:px-0 text-5xl font-bold">
            The Must-See App for Film Buffs.
          </h1>
          <div className="text-center text-lg">
            <p>Log movies you watch.</p>
            <p>Rate and review.</p>
            <p>Find new favorites.</p>
            <p>All in one place.</p>
          </div>
          <div className="flex gap-10">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-red-400 uppercase via-red-500 to-red-600 hover:ring-4 ring-white focus:outline-none  font-semibold  rounded-lg text-lg px-3 py-2 text-center me-2 mb-2"
            >
              Get Started
            </button>
            <button
              type="button"
              className="text-red-600 bg-transparent focus:ring-4 uppercase focus:outline-none border-4 hover:ring-4 ring-white  border-red-600 font-semibold rounded-lg text-lg px-3 py-2 text-center me-2 mb-2"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="justify-self-end h-[calc(100svh-96px)] overflow-hidden">
          <Image
            className="hidden xl:flex mix-blend-luminosity overflow-hidden"
            src={landingImage}
            width={640}
            height={853}
            alt="landing image"
          />
        </div>
      </div>
    </section>
  )
}
