import "./styles.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Cake from "./components/cake";
import Icecream from "./components/icecream";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <Cake />
        <br />
        <br />
        <br />
        <Icecream />
      </div>
    </Provider>
  );
}
