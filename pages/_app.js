import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import ContextProvider from '../components/ContextProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

export default MyApp
