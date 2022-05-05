import '../styles/globals.css'
import Navbar from '../Component/Navbar'
import { AuthContextProvider } from '../stores/Auth'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthContextProvider>
    )
}

export default MyApp
