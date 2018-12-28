import React, { Component } from 'react';
import './App.css';

import enLocaleData from 'react-intl/locale-data/en';
import jaLocaleData from 'react-intl/locale-data/ja';
import ptLocaleData from 'react-intl/locale-data/pt';
import { addLocaleData, IntlProvider, FormattedNumber } from 'react-intl';

import ClickCounter from './components/ClickCounter';


addLocaleData([...enLocaleData, ...jaLocaleData, ...ptLocaleData]);


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentLang: 'ja'
    }

  }

  render() {
    const { state } = this;
    return (
      <div>
        <IntlProvider locale={state.currentLang} >
          <div>
            <FormattedNumber value={123456789.12} />
          </div>
        </IntlProvider>
      </div>
    );
  }
}

export default App;
