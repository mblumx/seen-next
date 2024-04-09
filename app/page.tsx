import Head from "next/head"
import { Inter } from "next/font/google"
import Nav from "./components/Nav"
// import bg-popcorn-bw from '../public/bg-movies-bw.png'

// const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  //TODO: Use padding-top 36 to ensure header doesn't overlap
  return (
    <>
      <div className="flex pr-32 justify-center lg:bg-[url('../public/samuel-regan-asante-full.jpg')] bg-right h-svh bg-no-repeat bg-blend-screen bg-blue-950">
        <h1 className="flex 2xl:text-6xl text-2xl font-bold text-white pt-72 max-w-2xl pr-0">
          The App for Film Buffs.
        </h1>
        <div className="text-white">
          <span>Track movies you’ve watched.</span>
          <span>Rate and review.</span>
          <span>Find new favorites.</span>
          <span>All in one app.</span>
        </div>
      </div>
    </>
  )
}
