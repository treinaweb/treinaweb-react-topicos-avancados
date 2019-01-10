import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import enLocaleData from 'react-intl/locale-data/en';
import ptLocaleData from 'react-intl/locale-data/pt';
import { addLocaleData, IntlProvider, FormattedMessage } from 'react-intl';
import messages from './i18n/messages';

const NewProductView = React.lazy(() => import('./views/NewProductView'));
const ProductListView = React.lazy(() => import('./views/ProductListView'));

addLocaleData([...enLocaleData, ...ptLocaleData]);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentLang: localStorage.getItem('lang') || 'pt'
    }
  }

  setLanguage(language){
    localStorage.setItem('lang', language);
    this.setState({
      currentLang: language
    })
  }

  render() {
    const { state } = this;
    return (
      <div className="App">
        <IntlProvider locale={state.currentLang} messages={messages[state.currentLang]} >
          <Router>
              <div>
                <header>
                  <ul className="link-list" >
                    <li>
                      <Link to={'/'} >
                        <FormattedMessage defaultMessage="New" id="menu.new" />
                      </Link>
                    </li>
                    <li>
                      <Link to={'/list'} >
                        <FormattedMessage defaultMessage="List" id="menu.list" />
                      </Link>
                    </li>
                  </ul>
                  <ul className="lang-list" >
                    <li>
                      <button onClick={this.setLanguage.bind(this, 'pt')} >
                        Português
                      </button>
                    </li>
                    <li>
                      <button onClick={this.setLanguage.bind(this, 'en')} >
                        English
                      </button>
                    </li>
                  </ul>
                </header>
                <div>
                  <Suspense  fallback={<div>Loading...</div>} >
                    <Route path={'/'} exact component={(props) => <NewProductView {...props} />} />
                    <Route path={'/list'} component={(props) => <ProductListView {...props} />} />
                  </Suspense>
                </div>
              </div>
          </Router>
        </IntlProvider>
      </div>
    );
  }
}

export default App;
