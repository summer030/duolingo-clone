import { Footer } from "./footer";
import { Header } from "./header";

type Props = {
  children: React.ReactNode
}

const MarketingLayout = ({children}: Props) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
   )
}
 
export default MarketingLayout;