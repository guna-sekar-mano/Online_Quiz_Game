'use client'
import './globals.css'
import { Poppins} from 'next/font/google'
const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
})
//icon
import '@fortawesome/fontawesome-free/css/all.min.css';
//primereact
import "primereact/resources/themes/tailwind-light/theme.css";     
import "primereact/resources/primereact.min.css"; 
import { QueryClient, QueryClientProvider } from 'react-query';

export default function RootLayout(props) {
  const {children,bgcolor }=props
  const queryClient = new QueryClient();
  return (

    <QueryClientProvider client={queryClient}>
      <html lang="en" className={`bg-gradient-to-r ${bgcolor?bgcolor:'from-yellow-300 to-yellow-400'} cursor-custom select-none`}>
 
        <body className={`${poppins.variable}`}>
          
            {children}
    
        </body>
      </html>
    </QueryClientProvider>
    
  )
}
