import React from 'react';
import Header from './components/Header/Header';
import MainWindow from './components/MainWindow/MainWindow';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from './context/ThemeProvider';
import Layout from './components/Layout/Layout';
import './styles/style.scss'

function App() {
  
  return (
    <ThemeProvider>
      <Layout className='layout'>
          <div className='App'>
            <Header />
            <MainWindow />
            <Footer />
          </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
