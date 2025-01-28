import './App.css';
import Header from './components/header';
import image_1 from './images/hero-img-1.svg';
import image_2 from './images/hero-img-2.svg';
import image_3 from './images/hero-img-3.svg';
import scribble_2 from './images/scribble-2.svg';
import scribble_3 from './images/scribble-3.svg';

export default function App() {
  return (
    <div className="App">
      <Header />

      <section className="Hero">
        <div className="HeroHeadline">
          <img className="scribble3" src={scribble_3} alt="Hero 1" />
          <h1>Social Q&A for any website</h1>
          <img className="scribble2" src={scribble_2} alt="Hero 1" />
        </div>
        <h3>No-code widget, to get visitors talking</h3>
        <button className="blackButton">Try for free</button>
        <p>14 day trial. No credit card needed.</p>
        <div>
          <ul className="HeroImages">
            <li>
              <img src={image_1} alt="Hero 1" />
            </li>
            <li>
              <img src={image_2} alt="Hero 2" />
            </li>
            <li>
              <img src={image_3} alt="Hero 3" />
            </li>
          </ul>
        </div>
      </section>

      <section className="Results">
        <h2>All of the results - none of the work!</h2>
        <h3 className="SubHeadline">
          In 15 minutes get set for automatic SEO, social proof and meaningful
          engagement
        </h3>
        <ul className="ResultsGrid">
          <li className="ResultsGridItems">
            <p>Authenticated users </p>
            <p>
              Socially authenticated posts. So no SPAM. Spend time on meaningful
              questions from high-intent visitors.
            </p>
          </li>
          <li className="ResultsGridItems">
            <p>Respect visitors privacy</p>
            <p>
              Visitors can post anonymously, encouraging honest QnA and
              protecting their data.
            </p>
          </li>
          <li className="ResultsGridItems">
            <p>After they’ve left</p>
            <p>
              Reach visitors, notify them of your responses, even after they
              have left your website. Even for anonymous posts!
            </p>
          </li>
          <li className="ResultsGridItems">
            <p>Seed your questions</p>
            <p>
              Don't wait till they ask. Publish your own FAQ, to kindle the
              conversation, and guide customers.
            </p>
          </li>
          <li className="ResultsGridItems">
            <p>Automatic SEO</p>
            <p>
              hagrid automatically feeds your QnA to the Google FAQ Schema, rank
              higher with zero effort.
            </p>
          </li>
          <li className="ResultsGridItems">
            <p>Hyperintelligent Autocomplete</p>
            <p>Get them to the answers, while they are asking the questions.</p>
          </li>
          <li className="ResultsGridItems">
            <p>Powerful and flexible</p>
            <p>
              Order questions as you like, respond in private, restrict answers
              to particular pages and anything else you can think of.
            </p>
          </li>
          <li className="ResultsGridItems">
            <p>Speak any language</p>
            <p>
              We support all the major languages of the world. If we don't speak
              yours, we'll add it in 15 minutes.
            </p>
          </li>
          <li className="ResultsGridItems">
            <p>Infinite customisation</p>
            <p>
              Get hagrid to match your webpage brand and theme, down to the last
              pixel; without writing any code.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
