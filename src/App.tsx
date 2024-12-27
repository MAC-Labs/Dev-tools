import React, { useState } from 'react';
import Layout from './components/Layout';
import JsonFormatter from './components/JsonFormatter';
import RegexTester from './components/RegexTester';
import UuidGenerator from './components/UuidGenerator';
import DiffChecker from './components/DiffChecker';

function App() {
  const [activeTab, setActiveTab] = useState('json');

  const renderContent = () => {
    switch (activeTab) {
      case 'json':
        return <JsonFormatter />;
      case 'regex':
        return <RegexTester />;
      case 'uuid':
        return <UuidGenerator />;
      case 'diff':
        return <DiffChecker />;
      case 'settings':
        return (
          <div className="text-center text-gray-500 mt-8">
            Settings coming soon...
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}

export default App;