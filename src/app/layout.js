import './styles/globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'Kanako Pooknyw',
  description: 'Director',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/vmv7kuq.css"
        ></link>
      </head>
      <body>
        <Header></Header>
        <main>{children}</main>
      </body>
    </html>
  );
}
