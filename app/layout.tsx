import { RootProvider } from 'fumadocs-ui/provider';
import 'fumadocs-ui/style.css';
import '~/styles/globals.css';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider
          theme={{
            defaultTheme: 'dark',
            enableSystem: true,
            attribute: 'class',
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}

