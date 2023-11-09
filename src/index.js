import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import store from './store/store';

import './fonts/OpenSans/OpenSans-Regular.ttf';
import './fonts/OpenSans/OpenSans-Bold.ttf';
import './fonts/OpenSans/OpenSans-Medium.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
)
