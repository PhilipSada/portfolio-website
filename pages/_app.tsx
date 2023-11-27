import { ThemeProvider } from 'next-themes'
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/main.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
       <Component {...pageProps} />
    </ThemeProvider>        
  )
 
}
