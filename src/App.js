import React, { Component } from 'react';
import './App.css';

import enLocaleData from 'react-intl/locale-data/en';
import jaLocaleData from 'react-intl/locale-data/ja';
import ptLocaleData from 'react-intl/locale-data/pt';
import { addLocaleData, IntlProvider, FormattedMessage } from 'react-intl';

import messages from './i18n/messages';
import ClickCounter from './components/ClickCounter';

addLocaleData([...enLocaleData, ...jaLocaleData, ...ptLocaleData]);





class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentLang: 'pt'
    }

  }

  render() {
    const { state } = this;
    return (
      <div>
        <IntlProvider locale={state.currentLang} messages={messages[state.currentLang]} >
          <div>
            <FormattedMessage 
              id="app.hi"
              description="saudacao"
              defaultMessage="Hi"
            />
            <br />
            <FormattedMessage 
              id="app.bye"
              description="despedida"
              defaultMessage="Bye"
            />
          </div>
        </IntlProvider>
      </div>
    );
  }
}

export default App;
