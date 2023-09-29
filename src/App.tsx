import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

import { Dashboard } from './pages/dashboard'

function App() {
  const [client] = useState(
      new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: Infinity,
            retry: false,
          },
        },
      }),
  )

  return (
      <QueryClientProvider client={client}>
        <Dashboard />
      </QueryClientProvider>
  )
}

export default App
