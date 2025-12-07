import { LocationProvider, Router, Route } from 'preact-iso'
import { Home } from './routes/Home'

export function App() {
  return (
    <LocationProvider>
      <Router>
        <Route path="/" component={Home} />
        <Route default component={() => <div>404 Not Found</div>} />
      </Router>
    </LocationProvider>
  )
}
