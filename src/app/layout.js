import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { NextIntlClientProvider } from 'next-intl'

// Styles
import styles from '../styles/portfolio.module.css'

export const metadata = {
  title: `${ process.env.NEXT_PUBLIC_TAB_TITLE }`,
  description: `${ process.env.NEXT_PUBLIC_TAB_DESCRIPTION }`
}

export default function RootLayout( { children } ) {
  return (
    <html lang="en">
      <body className={ styles.body } >
        <AppRouterCacheProvider>
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
