import './Header.css'
import Navbar from '../Navbar/Navbar'

const Headert = () => (
    <div className="header-site">
        <div className='title'>
            <h2>
                Hi,<img src="/13.png" alt="Hi" className='hi-emoji' />
                <span>Welcome!</span>
            </h2>
            <Navbar />
            <div className='sginUp-div'>
                <button className='btn-signUp'>
                    Sign up
                </button>
            </div>
        </div>
    </div>
)

export default Headert