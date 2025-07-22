import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import './style/font/icofont.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css/bundle';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import 'overlayscrollbars/overlayscrollbars.css';
import './style/all.min.css';
import './style/main.css';
import './style/responsive.css';
import { CafeuProvider } from './context/CafeuContext';
import { store } from './store';
import App from './App';
import ContextProvider from './components/context/ContextProvider';
import { SocketProvider } from './context/SocketContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<CafeuProvider>
		<ContextProvider>
			<SocketProvider>
				<Provider store={store}>
					<App />
					<ToastContainer />
				</Provider>
			</SocketProvider>
		</ContextProvider>
	</CafeuProvider>,
);
