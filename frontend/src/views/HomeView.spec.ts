import {describe, it, expect, vi} from 'vitest'

import { mount } from '@vue/test-utils'
import HomeView from './HomeView.vue';

describe('HomeView', () => {

    it('should show the message', () => {
        vi.spyOn
        const wrapper = mount(HomeView);
        console.log(wrapper.html());
        const text = wrapper.find('main > h1').text();

        expect(text).toBe('XX');
    });
});

