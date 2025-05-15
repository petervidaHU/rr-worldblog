import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Home() {
  return (
    <div>
      <h1>Welcome to rr-worldblog</h1>
      <p>This blog uses React Router v7.6, the next evolution of Remix.js, ready for SSG/SSR and strong SEO.</p>
      <Link to="/about">About</Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This project is built with React Router v7.6 (Remix-style), Mantine UI v8, and Vite. You can incrementally adopt data loaders, actions, and SSR/SSG as your blog grows.</p>
      <Link to="/">Home</Link>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App
