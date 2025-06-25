import { expect } from 'chai'
import { ref } from 'vue'

describe('Search module', () => {
    const sections = [
        { name: 'Услуги', link: '/services' },
        { name: 'Курсы', link: '/kyrsi' },
        { name: 'Контакты', link: '/contacts' },
    ]

    function filteredSections(searchTerm) {
        if (!searchTerm.value.trim()) return []
        return sections.filter(s =>
            s.name.toLowerCase().includes(searchTerm.value.toLowerCase())
        )
    }

    it('возвращает пустой массив если строка поиска пустая', () => {
        const searchTerm = ref('')
        const result = filteredSections(searchTerm)
        expect(result).to.be.an('array').that.is.empty
    })

    it('находит секции по части слова', () => {
        const searchTerm = ref('усл')
        const result = filteredSections(searchTerm)
        expect(result).to.have.length(1)
        expect(result.map(s => s.name)).to.include('Услуги')
    })


    it('игнорирует регистр при поиске', () => {
        const searchTerm = ref('УСЛ')
        const result = filteredSections(searchTerm)
        expect(result).to.have.length(1)
        expect(result.map(s => s.name)).to.include('Услуги')
    })

})
