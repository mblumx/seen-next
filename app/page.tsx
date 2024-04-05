import Head from "next/head"
import { Inter } from "next/font/google"
import Nav from "./components/Nav"
import Layout from "./components/Layout"
import * as React from "react"

// const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Layout>Hey World</Layout>
    </>
  )
}
