import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ContentAnalyzer from './pages/ContentAnalyzer';
import About from './pages/About';
import HowToUse from './pages/HowToUse';
import DesignSystem from './pages/DesignSystem';
import ModelPlayground from './pages/ModelPlayground';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ContentAnalyzer />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-to-use" element={<HowToUse />} />
          <Route path="/design-system" element={<DesignSystem />} />
          <Route path="/playground" element={<ModelPlayground />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;