import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
// import initAOS from "@/utils/aos";
import Navbar from "@/components/Navbar";
// import { useEffect } from "react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  // useEffect(() => {
  //   initAOS()
  // },[])
  return (
    <div>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <Navbar />
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </div>
  );
}
