import React from 'react';
import { Provider } from 'react-redux';
import { Routes, store } from '../config'

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider> //provider digunakan untuk membungkus semua aplikasi dan akan menerima props dari config untuk semua state
  );
}

export default App;
