import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

// Import de vos composants et layouts
import Menu from './components/Menu'; // Assurez-vous que le chemin correspond à l'emplacement de votre Menu
import ErrorPage from './pages/portail/PageError.tsx';

import App from './App.tsx';
import BourseFret from './pages/portail/BourseFret';
import CommentCaMarche from './pages/portail/CommentCaMarche';
import OutilServices from './pages/portail/OutilServices';
import SOSDrivers from './pages/portail/SOSDrivers';
import Support from './pages/portail/Support';
import Legal from './pages/portail/Legal';
import { Apropos } from './pages/portail/Apropos';
import Login from './pages/crm/PortailClient.tsx'; // Votre page de connexion (Portail Client)

// Layout racine pour afficher le Menu de manière persistante sur toutes les pages
function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Menu />
      {/* pt-16 permet de compenser la hauteur du header fixed */}
      <main className="grow pt-16">
        <Outlet />
      </main>
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />, // Gère les erreurs 404 et les plantages globalement
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/comment-ca-marche",
        element: <CommentCaMarche />,
      },
      {
        path: "/bourse-de-fret",
        element: <BourseFret />,
      },
      {
        path: "/outils-et-services",
        element: <OutilServices />,
      },
      {
        path: "/sos-chauffeur",
        element: <SOSDrivers />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/Apropos",
        element: <Apropos />,
      },
      {
        path: "/legal",
        element: <Legal />,
      },
      {
        path: "/login",
        element: <Login />, // Route vers le portail client / connexion
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);