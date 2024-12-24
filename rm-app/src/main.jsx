import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/home'
import { MyPhotos } from './pages/myImages/myPhotos'
import { Layout } from './components/Layout'
import { Provider } from 'react-redux'
import { store } from './app/store'



createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="MyPhotos" element={<MyPhotos />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </>
)
