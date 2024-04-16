import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { createRoot} from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';
import { AuthProvider } from './services/AuthContext';

// Instead of using ReactDOM.render, we'll use createRoot
const root = createRoot(document.getElementById('root'));

// We'll render our app inside the root
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

