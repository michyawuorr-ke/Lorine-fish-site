import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Fillets from './pages/Fillets';
import About from './pages/About';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'fillets' | 'about'>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'fillets':
        return <Fillets />;
      case 'about':
        return <About />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow pt-16">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
