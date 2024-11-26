import Settings from 'settings/RemoteEntry';
import Home from 'home/RemoteEntry';
import { BrowserRouter, Route, Routes } from 'react-router';
import AppLayout from './components/AppLayout';
import { useLocalStorage } from './useLocalStorage';

function App() {
  const [showBoundaries, setShowBoundaries] = useLocalStorage(
    'showBoundaries',
    false,
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <div className="h-full">
              <button
                type="button"
                className="fixed top-0 right-1/2 m-2 p-2 bg-gray-500 text-white rounded-lg z-10"
                onClick={() => setShowBoundaries(!showBoundaries)}
              >
                Toggle Boundaries
              </button>
              <AppLayout showBoundary={showBoundaries} />
            </div>
          }
        >
          <Route
            path="/"
            element={
              <div
                className={`${showBoundaries ? 'border border-orange-500' : ''} m-2 p-2`}
              >
                {showBoundaries && (
                  <span className="bg-gradient-to-r from-orange-300 to-orange-600 text-white font-bold rounded-lg p-1">
                    Home Remote
                  </span>
                )}
                <Home />
              </div>
            }
          />
          <Route
            path="/settings"
            element={
              <div
                className={`${showBoundaries ? 'border border-blue-500' : ''} m-3 p-3`}
              >
                {showBoundaries && (
                  <span className="bg-gradient-to-r from-blue-300 to-blue-600 font-bold  p-1 rounded-lg">
                    Settings Remote
                  </span>
                )}
                <Settings />
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
