import './globals.css'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })
import { Poppins } from 'next/font/google'
const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    subsets: ['latin']
})
import Header from './components/Header'


export const metadata = {
    title: "Charlie's Web Site",
    description: 'Web development tutorials and courses',
    keywords: 'web development, html, css, javascript, nodejs, reactjs, nextjs'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body 
                // className={inter.className}
                className={poppins.classNames}
            >
                <Header />
                <main className='container'>
                    { children }
                </main>
            </body>
        </html>
    )
}
