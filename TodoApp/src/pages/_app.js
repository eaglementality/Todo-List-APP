import '@/styles/globals.css'
import '../styles/todolist.css';
import AppContext from '@/utils/context'



export default function App({ Component, pageProps }) {
  return (
    <AppContext>
      <Component {...pageProps} />
    </AppContext>   
  )
}
