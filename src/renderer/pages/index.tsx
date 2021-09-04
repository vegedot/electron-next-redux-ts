import { Provider } from "react-redux";
import { store } from "../store";
import { Counter } from "../components/counter/Counter";

const IndexPage = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default IndexPage;
