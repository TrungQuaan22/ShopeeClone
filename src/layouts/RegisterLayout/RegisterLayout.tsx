import { LayoutRouteProps } from "react-router-dom"
import RegisterHeader from "../../components/RegisterHeader"
import Footer from "../../components/Footer"


export const RegisterLayout = ({children} : LayoutRouteProps) => {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  )
}
