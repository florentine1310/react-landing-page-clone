import './App.css';
import Header from './components/header';

export default function App() {
  return (
    <div className="App">
      <Header />

      <section className="Hero">
        <h1>Social Q&A for any website</h1>
        <h3>No-code widget, to get visitors talking</h3>
        <button>Try for free</button>
        <p>14 day trial. No credit card needed.</p>
        <ul>
          <li>image 1</li>
          <li>image 2</li>
          <li>image 3</li>
        </ul>
      </section>

      <section className="Results">
        <h2>All of the results - none of the work!</h2>
        <h3>
          In 15 minutes get set for automatic SEO, social proof and meaningful
          engagement
        </h3>
        <ul>
          <li>
            <p>Authenticated users </p>
            <p>
              Socially authenticated posts. So no SPAM. Spend time on meaningful
              questions from high-intent visitors.
            </p>
          </li>
          <li>
            <p>Respect visitors privacy</p>
            <p>
              Visitors can post anonymously, encouraging honest QnA and
              protecting their data.
            </p>
          </li>
          <li>
            <p>After they’ve left</p>
            <p>
              Reach visitors, notify them of your responses, even after they
              have left your website. Even for anonymous posts!
            </p>
          </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
        </ul>
      </section>
    </div>
  );
}
