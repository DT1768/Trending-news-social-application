import logo from "./logo.svg";
import "./App.css";
import MyNavbar from "./Layouts/Header/MyNavbar";
import MyFooter from "./Layouts/Footer/MyFooter";
import MyCard from "./Layouts/Main/MyCard";

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
      <MyCard />
      <MyFooter />
    </>
  );
}

export default App;
