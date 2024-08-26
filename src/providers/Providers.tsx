'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type PropsWithChildren } from 'react'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function Providers({ children }: PropsWithChildren) {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
