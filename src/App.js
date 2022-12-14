import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { addMessage } from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  // console.log(props.store);

  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile store={props.store} />} />
          <Route
            path="/dialogs/*"
            element={<DialogsContainer store={props.store} />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />

          <Route path="/users" element={<UsersContainer />} />

          {/* страница ошибки - без path */}
          {/* <Route component={ErrorPage}></Route> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
