import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import AnimationProvider from '@/components/animation-provider';
import { WhatsAppWidget } from '@/components/whatsapp-widget';
import logoIcon from '@/Imagens/logo(2).png';
import Script from 'next/script';
import SchemaOrg from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Oficina mecânica em Belo Horizonte',
  description:
    'Oficina mecânica em Belo Horizonte. Diagnóstico preciso e preço justo. Atendimento dedicado e com garantia em um só lugar.',
  icons: {
    icon: logoIcon.src,
    shortcut: logoIcon.src,
    apple: logoIcon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <head>
        <SchemaOrg />
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-H7JP3V2DPJ" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-H7JP3V2DPJ');
          `}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@700&display=swap"
          rel="stylesheet"
        />
        <Script id="gtm" strategy="afterInteractive">
          {(function () {
            const code =
              "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':" +
              "new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0]," +
              "j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=" +
              "'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);" +
              "})(window,document,'script','dataLayer','GTM-WQN78R45');";
            return code;
          })()}
        </Script>
      </head>
      <body
        className={cn(
          'min-h-screen bg-background antialiased'
        )}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WQN78R45"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <AnimationProvider>{children}</AnimationProvider>
        <WhatsAppWidget />
        <Toaster />
      </body>
    </html>
  );
}
