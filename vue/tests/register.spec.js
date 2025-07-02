import { mount } from '@vue/test-utils'
import Register from '../src/views/Register.vue'
import { vi, describe, it, expect } from 'vitest'
import axios from 'axios'

vi.mock('axios')

describe('Register.vue', () => {
    it('регистрирует пользователя', async () => {
        axios.post.mockResolvedValue({
            data: { token: 'fake-token' }
        })

        const wrapper = mount(Register, {
            global: {
                stubs: { Header: true }
            }
        })

        await wrapper.find('#fullName').setValue('Test')
        await wrapper.find('#email').setValue('test@example.com')
        await wrapper.find('#password').setValue('123456')
        await wrapper.find('form').trigger('submit.prevent')

        expect(axios.post).toHaveBeenCalled()
    })
})
