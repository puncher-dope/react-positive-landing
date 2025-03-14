
import './styleFooter.css'
export default function Footer() {
  return (<>
    <div className="footer-container">
      <div className='postContainer'>


        <div className="footer-header">
          <a href="">
            <img src="./LogoFooter.svg" alt="" />
          </a>
          <div className="footer-header-info">
            <a href="">About us</a>
            <a href="">Services</a>
            <a href="">Use Cases</a>
            <a href="">Pricing</a>
            <a href="">Blog</a>
          </div>
          <div className="footer-header-contacts">
            <a href=""><img src="./ImgForHome//in.png" alt="" /></a>
            <a href=""><img src="./ImgForHome//facebook.png" alt="" /></a>
            <a href=""><img src="./ImgForHome/twitter.png" alt="" /></a>
          </div>
        </div>


        <div className="footer-main">
          <div className="footer-main-info">
            <div className='footer-main-title'>
              <h2>Contact Us</h2>
            </div>
            <div className='footer-main-paragraph'>
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>Address: 1234 Main St <br />
                Moonstone City, Stardust State 12345</p>
            </div>

          </div>
          <div className="footer-main-form">
            <input className='inp-form' type="email" placeholder='Email' />
            <button className='btn-form'>Subscribe to news</button>
          </div>
        </div>
        <hr />

        <div className="footer-footer">

          <span>© 2023 Positivus. All Rights Reserved.</span> <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  </>)
}