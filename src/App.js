import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { addMessage } from "./redux/state";

const App = (props) => {
  console.log(props);
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                state={props.state.profilePage}
                addPost={props.addPost}
                updateNewPost={props.updateNewPost}
              />
            }
          />
          <Route
            path="/dialogs/*"
            element={
              <Dialogs
                state={props.state.dialogsPage}
                addMessage={props.addMessage}
                updateNewMessage={props.updateNewMessage}
              />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />

          {/* страница ошибки - без path */}
          {/* <Route component={ErrorPage}></Route> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
