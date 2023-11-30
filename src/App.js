
import './App.css';

function App() {
  return (
  <div>
  
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NETFLIX</title>
    <link rel="stylesheet" href="App.css" />
    <div className="header">
      <nav>
        <img src="logo.png" className="logo" />
        <div>
          <button className="language-btn">English<img src="down-icon.png" /></button>
          <button>Sign In</button>
        </div>
      </nav>
      <div className="header-content">
        <h1>Unlimited movies, TV shows and more</h1>
        <h3>Watch anywhere. Cancel anytime</h3>
        <p>Ready to watch? Enter your email to create or restart your membership</p>
        <form className="email-signup">
          <input type="email" placeholder="Email address" required />
          <button type="submit">Get Started</button>
        </form>
      </div>
    </div>
    <div className="footer" />
    <div className="features">
      <div className="row">
        <div className="text-col">
          <h2>Enjoy on your TV</h2>
          <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.</p>
        </div>
        <div className="img-col">
          <img src="feature-1.png" />
        </div>
      </div>
    </div> 
    <div className="footer" />
    <div className="features">
      <div className="row">
        <div className="img-col">
          <img src="feature-2.png" />
        </div>
        <div className="text-col">
          <h2>Download your shows to watch offline.</h2>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>
      </div>
    </div> 
    <div className="footer" />
    <div className="features">
      <div className="row">
        <div className="text-col">
          <h2>Watch everywhere</h2>
          <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
        <div className="img-col">
          <img src="feature-3.png" />
        </div>
      </div>
    </div> 
    <div className="footer" />
    <div className="features">
      <div className="row">
        <div className="img-col">
          <img src="feature-4.png" />
        </div>
        <div className="text-col">
          <h2>Create profiles for kids</h2>
          <p>Send kids on adventures with their favorite characters in a space made
            just for them—free with your membership.</p>
        </div>
      </div>
    </div> 
    <div className="footer" />
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <ul className="accoration">
        <li>
          <input type="radio" name="accoration" id="first" />
          <label htmlFor="first">What is NETFLIX?</label>
          <div className="content">
            <p>
              Netflix is a streaming service that offers a wide variety of award-winning TV shows,
              movies, anime, documentaries, and more on thousands of internet-connected devices.
              You can watch as much as you want, whenever you want without a single commercial-
              all for one low monthly price. There's always something new to discover and new TV
              shows and movies are added every week!
            </p>
          </div>
        </li>
        <li>
          <input type="radio" name="accoration" id="second" />
          <label htmlFor="second">How much does Netflix cost?</label>
          <div className="content">
            <p>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for
              one fixed monthly fee. Plans range from USD2.99 to USD9.99 a month. No extra costs, 
              no contracts.
            </p>
          </div>
        </li>
        <li>
          <input type="radio" name="accoration" id="third" />
          <label htmlFor="third">Where can I watch?</label>
          <div className="content">
            <p>
              Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at 
              netflix.com from your personal computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming media players and game 
              consoles.You can also download your favorite shows with the iOS, Android, or Windows 10 app.
              Use downloads to watch while you're on the go and without an internet connection. Take
              Netflix with you anywhere.
            </p>
          </div>
        </li>
        <li>
          <input type="radio" name="accoration" id="fourth" />
          <label htmlFor="fourth">How can I cancel?</label>
          <div className="content">
            <p>
              Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel 
              your account online in two clicks. There are no cancellation fees start or stop your 
              account anytime.
            </p>
          </div>
        </li>
        <li>
          <input type="radio" name="accoration" id="fifth" />
          <label htmlFor="fifth">What can I watch on Netflix?</label>
          <div className="content">
            <p>
              Netflix has an extensive library of feature films, documentaries, TV shows, anime, 
              award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
            </p>
          </div>
        </li>
        <li>
          <input type="radio" name="accoration" id="sixth" />
          <label htmlFor="sixth">Is Netflix good for kids?
          </label>
          <div className="content">
            <p>
              The Netflix Kids experience is included in your membership to give parents control while 
              kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with 
              PIN-protected parental controls that let you restrict the maturity rating of content kids
              can watch and block specific titles you don't want kids to see.
            </p>
          </div>
        </li>
      </ul>
      <small>Ready to watch? Enter your email to create or restart your membership</small>
      <form className="email-signup">
        <input type="email" placeholder="Email address" required />
        <button type="submit">Get Started</button>
      </form>
    </div>
    <div className="footer">
      <h2>Questions? call 0000000000000</h2>
      <div className="row">
        <div className="col">
          <a href="#">FAQ</a>
          <a href="#">Investor Relations</a>
          <a href="#">Privacy</a>
          <a href="#">Speed Test</a>
        </div>
        <div className="col">
          <a href="#">Help Center</a>
          <a href="#">Jos</a>
          <a href="#">Cookie Preferencea</a>
          <a href="#">Legal Notices</a>
        </div>
        <div className="col">
          <a href="#">Account</a>
          <a href="#">Ways To Watch</a>
          <a href="#">Corporate Information</a>
          <a href="#">Only on Netflix</a>
        </div>
        <div className="col">
          <a href="#">Media Center</a>
          <a href="#">Terms of Use</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
      <button className="language-btn">English<img src="down-icon.png" /></button>
      <div className="copyright-txt">NETFLIX Nepal </div>              
    </div>
    
  </div>
);
}
 

export default App;
