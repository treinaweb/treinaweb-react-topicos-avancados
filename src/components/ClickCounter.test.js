import React from 'react';
import { shallow } from 'enzyme';
import ClickCounter from './ClickCounter';

it('ClickCounter tenha o texto alterado apos o clique', () => {
    const meuComponente = shallow(<ClickCounter />);

    expect(meuComponente.find('#checkStatus').text()).toEqual('OFF');
    meuComponente.find('input').simulate('change');
    expect(meuComponente.find('#checkStatus').text()).toEqual('ON');
})

it('ClickCounter deve ter o total de cliques igual a 2', () => {
    const meuComponente = shallow(<ClickCounter />);

    meuComponente.find('input').simulate('change').simulate('change');
    expect(meuComponente.state().totalClicks).toEqual(2);
})