import Home from "./pages/Home/Home";
import { getUsers } from "./services/user";
const App = () => {
  getUsers().then(res => console.log(res));
  return (
    <>
      <Home />
    </>
  );
};

export default App;
