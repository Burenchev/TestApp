import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
//import store from './redux/store';

class App extends React.Component{
  render() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
}

export default App;
