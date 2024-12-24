import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { IndexPage } from './pages/index/IndexPage'
import { Layout } from './components/Layout'
import { Provider } from 'react-redux'
import { store } from './app/store'



createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="" element={<IndexPage />} />
            <Route path="MyPhotos" element={<MyPhotos />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </>
)
