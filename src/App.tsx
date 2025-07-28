import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ContentAnalyzer from './pages/ContentAnalyzer';
import DesignSystem from './pages/DesignSystem';
import ModelPlayground from './pages/ModelPlayground';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ContentAnalyzer />} />
          <Route path="/design-system" element={<DesignSystem />} />
          <Route path="/playground" element={<ModelPlayground />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;