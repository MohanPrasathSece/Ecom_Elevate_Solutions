import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import HowWeWork from './pages/HowWeWork';
import About from './pages/About';
import Contact from './pages/Contact';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <Home />,
    visible: true
  },
  {
    name: 'About',
    path: '/about',
    element: <About />,
    visible: true
  },
  {
    name: 'Services',
    path: '/services',
    element: <Services />,
    visible: true
  },
  {
    name: 'How We Work',
    path: '/how-we-work',
    element: <HowWeWork />,
    visible: true
  },
  {
    name: 'Portfolio',
    path: '/portfolio',
    element: <Portfolio />,
    visible: true
  },
  {
    name: 'Contact',
    path: '/contact',
    element: <Contact />,
    visible: true
  }
];

export default routes;