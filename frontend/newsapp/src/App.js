import logo from "./logo.svg";
import "./App.css";
import MyNavbar from "./Layouts/Header/MyNavbar";
import MyFooter from "./Layouts/Footer/MyFooter";
import NewsItem from "./Layouts/Main/NewsItem";
import NewsComponent from "./Layouts/Main/NewsComponent";
import NewsComponent2 from "./Layouts/Main/NewsComponent2";

function App() {
  return (
    <>
      <MyNavbar
        title="Blue Blazers"
        NewsCatagory1="Business"
        NewsCatagory2="Entertainment"
        NewsCatagory3="Health"
        NewsCatagory4="Science"
        NewsCatagory5="Sports"
        NewsCatagory6="Technology"
      />

      <NewsComponent2 />

      <MyFooter />
    </>
  );
}

export default App;
