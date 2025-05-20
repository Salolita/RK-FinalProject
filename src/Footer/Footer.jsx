import './Footer.css'
import InfoPanel from '../HistoryPage/HistoryPage'

const Footer = ({ pageName }) => (
    <div className="footer-site">
        <h3>
            Devloped by Salolita
        </h3>
        <p>Page : {pageName}</p>
        <InfoPanel />
    </div>
)

export default Footer