import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "prismjs/themes/prism.css";
import "prismjs";
import "prismjs/components/prism-javascript.min.js";


export default function App({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}
