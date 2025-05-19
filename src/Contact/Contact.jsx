import './Contact.css';
import LocationCard from '../LocationCard/LocationCard';

// import CallRoundedIcon from '@mui/icons-material/CallRounded';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
// import { blue } from '@mui/material/colors';

const Contact = () => (
    <div className="contact-me">
        <div className="contact">
            <h1>
                Contact me
            </h1>
            <ul>
                <li>
                    <h4>
                        Phone
                    </h4>
                    {/* <CallRoundedIcon sx={{ color: blue[50] }} fontSize='large' className='contact-icon' /> */}
                    <a href="tel:+989372873791"> 
                        <span>0937-287-3791</span>
                    </a>
                </li>
                <li>
                    <h4>
                        Instagram 
                    </h4>
                    {/* <InstagramIcon sx={{ color: blue[50] }} fontSize='large' className='contact-icon' /> */}
                    <a href="https://www.instagram.com/saleh_2007k/">                        
                        <span>Saleh_2007K</span>
                    </a>
                </li>
                <li>
                    <h4>
                        My site
                    </h4>
                    {/* <LanguageRoundedIcon sx={{ color: blue[50] }} fontSize='large' className='contact-icon' /> */}
                    <a href="https://www.Saleh-Azizi.ir">
                        <span>Saleh-Azizi.ir</span>
                    </a>
                </li>
                <li>
                    <h4>
                        Email
                    </h4>
                    <a href="mailto:info@Saleh-Azizi.ir">
                        <span>info@Saleh-Azizi.ir</span>
                    </a>
                </li>
                <li>
                    <h4>
                        GitHub
                    </h4>
                    <a href="https://github.com/Salolita">
                        <span>Salolita</span>
                    </a>
                </li>
            </ul>
        </div>
        <div className='location'>
            <h1>
                Location
            </h1>
            <LocationCard className='loc' />
        </div>
    </div>
)

export default Contact;


// import { useState } from 'react';
// import './Contact.css'; // اگر استایل‌ها رو جدا نوشتی

// const Contact = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleClick = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <div className="contact-me">
//       <h1>Contact me</h1>
//       <div className="contact">
//         <ul>
//           {[
//             {
//               title: 'Phone',
//               link: 'tel:+989372873791',
//               text: '0937-287-3791',
//             },
//             {
//               title: 'Instagram',
//               link: 'https://www.instagram.com/saleh_2007k/',
//               text: 'Saleh_2007K',
//             },
//             {
//               title: 'My site',
//               link: 'https://www.Saleh-Azizi.ir',
//               text: 'Saleh-Azizi.ir',
//             },
//             {
//               title: 'Email',
//               link: 'mailto:info@Saleh-Azizi.ir',
//               text: 'info@Saleh-Azizi.ir',
//             },
//           ].map((item, index) => (
//             <li
//               key={index}
//               className={activeIndex === index ? 'active-contact' : ''}
//               onClick={() => handleClick(index)}
//               style={{ cursor: 'pointer' }}
//             >
//               <h4>{item.title}</h4>
//               <a href={item.link}>
//                 <span>{item.text}</span>
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Contact;