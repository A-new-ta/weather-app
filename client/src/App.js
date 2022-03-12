import React from 'react';
import Header from './components/Header/Header';
import WeatherCardList from './components/WeatherCardList/WeatherCardList';
import Footer from './components/Footer/Footer';
// import './App.scss';
import { ThemeProvider } from './context/ThemeProvider';
import Layout from './components/Layout/Layout';
import './styles/style.scss'

function App() {
  
  return (
    <ThemeProvider>
      <Layout className='layout'>
          <div className='App'>
            <Header />
            <WeatherCardList />
            <Footer />
          </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
