import "./App.css";
import { Skills } from "./components/Search";
import { ListServices, DetailsServices } from "./components/ListDetails";
import { Provider } from "react-redux";
import storeSearch from "./components/Search/store/store";
import storeListDetails from "./components/ListDetails/store/store";
import storeNewsFeed from "./components/NewsFeed/store/store";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/ListDetails/Layout";
import { NewsFeed } from "./components/NewsFeed/NewsFeed";

const App: React.FC = () => {
  return (
    <>
      <div className="container">
        <h2 className="title">Задание №1 - Поиск</h2>
        <Provider store={storeSearch}>
          <Skills></Skills>
        </Provider>
      </div>
      <div className="container">
        <h2 className="title">Задание №2 - Список и детали</h2>
        <Provider store={storeListDetails}>
          <Routes>
            <Route path="/ra-16-react-redux-saga" element={<Layout />}>
              <Route path="/ra-16-react-redux-saga/list-details" element={<ListServices />} />
              <Route path="/ra-16-react-redux-saga/list-details/:id/details" element={<DetailsServices />} />
            </Route>
          </Routes>
        </Provider>
      </div>
      <div className="container">
        <h2 className="title">Задание №3 - Лента новостей</h2>
        <Provider store={storeNewsFeed}>
          <NewsFeed></NewsFeed>
        </Provider>
      </div>
    </>
  );
};

export default App;
