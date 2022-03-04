import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.scss';
import { ThemeProvider } from './providers/ThemeProvider';
import Layout from './components/Layout/Layout';


function App() {
  return (
    <ThemeProvider>
      <Layout className='layout'>
          <div className='App'>
            <Header />
            <Main />
            <Footer />
          </div>
        </Layout>
    </ThemeProvider>
  );
}

export default App;
