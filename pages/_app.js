import { PageLoader } from "@/Components/Loader";
import Scrollbar from "@/Components/Scrollbar";
import "@/styles/globals.css";
import { useEffect, useState, useRef } from "react";

export default function App({ Component, pageProps }) {
  
  return <>
    <Scrollbar/>
    <PageLoader/>
    <Component {...pageProps} />;
  </>
}
