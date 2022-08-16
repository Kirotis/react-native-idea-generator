import { Provider } from "react-redux";
import { MainPage } from "./src/MainPage";
import store from "./src/redux-store/store";

const App = () => (
    <Provider store={store}>
        <MainPage />
    </Provider>
);
export default App;
