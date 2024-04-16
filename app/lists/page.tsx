import React from "react"
import Image from "next/image"
import fallguy from "../../public/The_Fall_guy.jpg"

const Lists = () => {
  let foo: string[] = [
    "Horror Films",
    "My favorite thrillers",
    "Best movies 1980s",
    "Don't Watch These!",
    "Movies about sand",
    "Made for TV",
    "So bad it's good",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In harum id hic ab quas accusamus impedit autem eveniet alias odio ea nulla earum, perspiciatis saepe eos, aspernatur cumque doloribus ratione?",
  ]

  return (
    <div className="flex flex-col bg-gradient-to-b from-slate-950 to-slate-700 mx-auto w-full min-h-[calc(100svh-96px)]">
      <div className="flex">
        <h1 className="flex  text-white text-5xl font-bold mx-auto py-20">
          My Lists
        </h1>
      </div>

      <div className="container px-12 mx-auto grid lg:grid-cols-3 lg:grid-rows-3 gap-x-0 lg:gap-y-8 overflow-y-scroll text-black font-semibold">
        {foo.map((bar, index) => (
          <div
            className="flex flex-col w-fit min-w-64 align-center bg-white rounded-lg text-center border-2 border-red-100 "
            key={index}
          >
            <Image
              className="self-center rounded-full"
              src={fallguy}
              alt={"The Fall Guy"}
              height={120}
            />
            <div className="mx-auto max-w-48 truncate">
              <h3 className="">{bar}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Lists
