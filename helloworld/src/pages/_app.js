import '@/styles/globals.css'
import '../styles/todolist.css';
import AppContext from '@/utils/context'
import {ThemeProvider} from 'next-themes'


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
    <AppContext>
      <Component {...pageProps} />
    </AppContext>
    </ThemeProvider>
  )
}
