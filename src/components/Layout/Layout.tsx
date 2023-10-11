import Container from "react-bootstrap/Container";

import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import StartingPage from "@/components/Layout/StartingPage";

const isAuth = false;

function Layout(props: any) {
  return  isAuth ? <>
    < Header />
    <Container as="main" className="py-4 px-3 mx-auto" style={{"maxWidth": "1000px"}}>
      {props.children}</Container>
    <Footer />
  </> : <StartingPage />
}


export default Layout; 