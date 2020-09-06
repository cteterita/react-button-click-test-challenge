import React from 'react';
import {shallow} from 'enzyme';

import Button from './button';

describe('<Button />', () => {
    it('Should call props.onClick when the button is clicked', () => {
        const onClick = jest.fn();
        const wrapper = shallow(<Button onClick={onClick}/>);
        wrapper.find('button').simulate('click');
        expect(onClick).toHaveBeenCalled();
    });
});
