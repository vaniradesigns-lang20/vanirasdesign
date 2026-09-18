import './globals.css';

export const metadata = {
  title: 'Vanira Designs | Timeless Indian Elegance',
  description: 'Vanira Designs — sarees, lehengas, boutique blouses, Kudatis and traditional Indian fashion in Mumbai.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
