import Featured from "../../components/Featured/Featured"
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import MailList from "../../components/MailList/MailList"
import Navbar from "../../components/Navbar/Navbar"
import PropertyList from "../../components/PropertyList/PropertyList"
import "./home.css"

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Header/>
    <div className="homeContainer">
      <Featured/>
      <h1 className="homeTitle">Browse by property type</h1>
      <PropertyList/>
      <h1 className="homeTitle">Homes guest love</h1>
      <FeaturedProperties/>
      <MailList/>
      <Footer/>

    </div>
    </div>
  )
}

export default Home
