import React, { Component } from 'react';
import './App.css';

import enLocaleData from 'react-intl/locale-data/en';
import jaLocaleData from 'react-intl/locale-data/ja';
import ptLocaleData from 'react-intl/locale-data/pt';
import { addLocaleData, IntlProvider, FormattedDate, FormattedTime } from 'react-intl';

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
            <FormattedDate value={new Date('2020-12-31T15:00:00')} />
            <br />
            <FormattedTime value={new Date('2020-12-31T15:00:00')} />
          </div>
        </IntlProvider>
      </div>
    );
  }
}

export default App;
