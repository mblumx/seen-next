import React from "react"
import Image from "next/image"
import fireIcon from "../../public/fire.svg"

const Dash = () => {
  return (
    <div className="flex flex-col bg-slate-950 mx-auto w-full h-[calc(100svh-96px)]">
      <div className="flex flex-col  mx-auto lg:space-y-48 py-12 lg:px-0">
        <h1 className="flex mx-auto text-white text-5xl font-bold">
          Dashboard
        </h1>

        <div className="flex flex-col rounded-lg max-w-sm shadow-lg">
          <div className="flex rounded-xl bg-red-950 flex-col w-auto align-center justify-center items-center text-center">
            <div className="bg-red-950">
              <Image priority src={fireIcon} alt="Image of Fire" />
            </div>
            <div className="flex flex-col bg-black gap-2 rounded-b-lg px-10 py-8">
              <p className="text-white text-xl font-semibold">What's New</p>
              <p className="text-gray-500">
                See what hot new movies were just released!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dash
