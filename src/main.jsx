import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPages from './Pages/login.jsx';
import RegisterPages from './Pages/Register.jsx';
import ErrorPage from './Pages/404.jsx';
import ProductPage from './Pages/products.jsx';
import ResetAcount from './Pages/resetAcount.jsx';
import ResetPassword from './Pages/resetPassword.jsx';
import Dashboard from './Pages/dashboard.jsx';
import HomePages from './Pages/homePages.jsx';
import Forum from './Pages/forum.jsx';
import Panduan from './Pages/panduan.jsx';
import HawarDaun from './Pages/hawarDaun.jsx';
import PenyakitBulai from './Pages/penyakitBulai.jsx';
import ResetEmail from './Pages/resetEmail.jsx';
import ProtectedRoute from './Pages/ProtectedRoute.jsx';
import News from './Pages/news.jsx';
import App from './Pages/app.jsx';
import DashboarAdmin from './Pages/dashboardAdmin.jsx';
import Berita from './Pages/berita-satu.jsx';
import BeritaDua from './Pages/berita-dua.jsx';
import BeritaTiga from './Pages/berita-tiga.jsx';
import BeritaEmpat from './Pages/berita-empat.jsx';
import BeritaLima from './Pages/berita-lima.jsx';
import BeritaEnam from './Pages/berita-enam.jsx';
import BeritaTujuh from './Pages/berita-tujuh.jsx';
import BeritaDelapan from './Pages/berita-delapan.jsx';
import BeritaSembilan from './Pages/berita-sembilan.jsx';
import BeritaSepuluh from './Pages/berita-sepuluh.jsx';
import BeritaSebelas from './Pages/berita-sebelas.jsx';
import BeritaDuaBelas from './Pages/berita-duabelas.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages />
  },
  {
    path: "*",
    element: <ErrorPage />
  },
  {
    path: "/tambah",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPages />
  },
  {
    path: "/register",
    element: <RegisterPages />
  },
  {
    path: "/resetAcount",
    element: <ResetAcount/>
  },
  {
    path: "/reset-email",
    element: <ResetEmail/>
  },
  {
    path: "/admin",
    element: <DashboarAdmin />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword/>
  },
  {
    path: "/products",
    element: <ProductPage/>
  },
  // {
  //   path: "/dashboard-admin",
  //   element: <DashboarAdmin/>
  // },
  {
    path: "/dashboard",
    element:  (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    )
  },
  {
    path: "/forum",
    element: (
      <ProtectedRoute>
        <Forum />
      </ProtectedRoute>
    )
  },
  {
    path: "/news",
    element: (
      <ProtectedRoute>
        <News />
      </ProtectedRoute>
    )
  },
  {
    path: "/panduan",
    element: (
      <ProtectedRoute>
        <Panduan />
      </ProtectedRoute>
    )
  },
  {
    path: "/hawarDaun",
    element: <ProtectedRoute>
      <HawarDaun/>
      </ProtectedRoute>
  },
  {
    path: "/penyakitBulai",
    element: 
      <ProtectedRoute>
        <PenyakitBulai/>
      </ProtectedRoute>
  },
  {
    path: "/news/10",
    element: 
      <ProtectedRoute>
          <Berita/>
      </ProtectedRoute>
  },
  {
    path: "/news/11",
    element: 
      <ProtectedRoute>
          <BeritaDua/>
      </ProtectedRoute>
  },
  {
    path: "/news/12",
    element: 
      <ProtectedRoute>
          <BeritaTiga/>
      </ProtectedRoute>
  },
  {
    path: "/news/13",
    element: 
      <ProtectedRoute>
          <BeritaEmpat/>
      </ProtectedRoute>
  },
  {
    path: "/news/14",
    element: 
      <ProtectedRoute>
          <BeritaLima/>
      </ProtectedRoute>
  },
  {
    path: "/news/15",
    element: 
      <ProtectedRoute>
          <BeritaEnam/>
      </ProtectedRoute>
  },
  {
    path: "/news/16",
    element: 
      <ProtectedRoute>
          <BeritaTujuh/>
      </ProtectedRoute>
  },
  {
    path: "/news/18",
    element: 
      <ProtectedRoute>
          <BeritaDelapan/>
      </ProtectedRoute>
  },
  {
    path: "/news/19",
    element: 
      <ProtectedRoute>
          <BeritaSembilan/>
      </ProtectedRoute>
  },
  {
    path: "/news/20",
    element: 
      <ProtectedRoute>
          <BeritaSepuluh/>
      </ProtectedRoute>
  },
  {
    path: "/news/21",
    element: 
      <ProtectedRoute>
          <BeritaSebelas/>
      </ProtectedRoute>
  },
  {
    path: "/news/22",
    element: 
      <ProtectedRoute>
          <BeritaDuaBelas/>
      </ProtectedRoute>
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
