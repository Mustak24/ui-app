import Alert from "@/Components/Alert";
import { PageLoader } from "@/Components/Loader";
import Scrollbar from "@/Components/Scrollbar";
import "@/styles/globals.css";
import AppContextProvider from "@/Contexts/AppContext";
import Navbar from "@/Components/Navbar";


export default function App({ Component, pageProps }) {

  return<>
    <AppContextProvider>
      <div className="w-full h-full overflow-x-hidden relative flex flex-col pt-16">
        <Scrollbar/>
        <PageLoader/>
        <Alert/>
        <Navbar/>
        <Component {...pageProps} />
      </div>
    </AppContextProvider>
  </>
}