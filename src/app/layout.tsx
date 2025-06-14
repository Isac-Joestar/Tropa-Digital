
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import ClientLayout from './clientLayout';
import StyledComponentsRegistry from '@/lib/registry'

export const metadata: Metadata = {
  title: 'Tropa Digital',
  description: 'Desenvolvimento de software',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <ClientLayout>
            {children}
          </ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
