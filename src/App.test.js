import {shallow, mount, render} from 'enzyme';
import Footer from './components/footer/footer.component';
import React from 'react';


it('expect 1 component', () => {expect(shallow(<Footer />).length).toEqual(1)})


