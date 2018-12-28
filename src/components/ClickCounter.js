import React from 'react';
import { FormattedMessage } from 'react-intl';

class ClickCounter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            totalClicks: 0,
            isChecked: false
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(){
        this.setState(state => ({
            isChecked: !state.isChecked,
            totalClicks: state.totalClicks + 1
        }))
    }

    render(){
        const { state } = this;
        return (
            <div>
                <input type="checkbox"
                    checked={state.isChecked}
                    onChange={this.onChange} />
                <div id="checkStatus" >
                    { state.isChecked ? 'ON' : 'OFF' }
                </div>
                <div>
                    <strong>Clicks:</strong> {state.totalClicks}
                </div>
                <div>
                    <FormattedMessage 
                        id="app.clicks"
                        description="quantidade de cliques"
                        values={state}
                        defaultMessage="
                            Ola, voce tem {totalClicks, plural,
                                =0 {nenhum clique}
                                one {# clique}
                                other {# cliques}
                            }
                        "
                    />
                </div>
                <div>
                    <FormattedMessage 
                        id="app.select"
                        description="selecao de palavras"
                        values={state}
                        defaultMessage="
                            {isChecked, select,
                                true {Estamos abertos}
                                false {Abriremos em breve}
                            }
                        "
                    />
                </div>
            </div>
        );
    }
}

export default ClickCounter;