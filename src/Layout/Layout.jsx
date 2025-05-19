import Header from '../Header/HeaderSite'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => (
    <div>
        <Header />
            {children}
        <Footer />
    </div>
)

export default Layout