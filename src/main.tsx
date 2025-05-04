import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import { CafeuProvider } from "./context/CafeuContext.tsx";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import "./style/font/icofont.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/bundle";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import "overlayscrollbars/overlayscrollbars.css";
import "./style/all.min.css";
import "./style/main.css";
import "./style/responsive.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
	<CafeuProvider>
		<Provider store={store}>
			<App />
			<ToastContainer />
		</Provider>
	</CafeuProvider>
);

