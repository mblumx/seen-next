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
    <div className="md:flex flex-col items-center bg-gradient-to-b from-slate-950 to-slate-600 mx-auto w-full min-h-[calc(100svh-96px)]">
      <div className="flex">
        <h1 className="text-white text-3xl lg:text-5xl font-bold mx-auto pt-20 pb-16">
          My Lists
        </h1>
      </div>

      <div className="mt-12 max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 sm:px-8 md:px-12 gap-12 py-4">
        {foo.map((bar, index) => (
          <div
            key={index}
            className="max-w-sm mx-auto sm:mx-0 border-4 rounded-lg shadow bg-black border-red-950 overflow-hidden"
          >
            <a href="#">
              <Image
                className="hidden sm:flex "
                src={fallguy}
                alt="Movie Poster"
              />
            </a>
            <div className="p-4">
              <a href="#">
                <h5 className="mb-2 text-lg font-bold tracking-tight line-clamp-3 text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-sm text-slate-200 line-clamp-3">
                {bar}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Lists
