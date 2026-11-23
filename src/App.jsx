import { useEffect, useRef } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { profile } from './data/portfolio.js';
import { Home } from './pages/Home.jsx';
import { Projects } from './pages/Projects.jsx';
import { Contact } from './pages/Contact.jsx';

const pages = [
  { path: '/', label: 'Home', Component: Home },
  { path: '/projects', label: 'Projects', Component: Projects },
  { path: '/contact', label: 'Contact', Component: Contact },
];

export function App() {
  const { pathname } = useLocation();
  const main = useRef(null);
  const previousPath = useRef(pathname);

  useEffect(() => {
    const page = pages.find(({ path }) => path !== '/' && path === pathname.replace(/\/$/, '').toLowerCase());
    document.title = page
      ? `${page.label} | ${profile.name}`
      : `${profile.name} | Portfólio`;

    if (previousPath.current !== pathname) {
      window.scrollTo(0, 0);
      main.current?.focus({ preventScroll: true });
      previousPath.current = pathname;
    }
  }, [pathname]);

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Box component="header" className="site-header">
        <div className="layout header-layout">
          <Typography component={Link} to="/" className="brand">
            {profile.name}
          </Typography>
          <nav className="navigation" aria-label="Navegação principal">
            {pages.map(({ path, label }) => (
              <Button key={path} component={NavLink} to={path} end className="nav-link">{label}</Button>
            ))}
          </nav>
        </div>
      </Box>
      <main id="conteudo" className="layout page" ref={main} tabIndex={-1}>
        <Routes>
          {pages.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} />)}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}
