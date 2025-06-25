import { expect } from 'chai'
import { ref, computed } from 'vue'

describe('Cart module', () => {
    let cartItems

    beforeEach(() => {
        cartItems = ref([
            { id: 1, name: 'Товар 1', price: 100, count: 2 },
            { id: 2, name: 'Товар 2', price: 200, count: 1 },
        ])
    })

    const clearCart = () => {
        cartItems.value = []
    }

    const addProduct = (id) => {
        const product = cartItems.value.find(item => item.id === id)
        if (product) product.count += 1
    }

    const minusProduct = (id) => {
        const product = cartItems.value.find(item => item.id === id)
        if (product) product.count -= 1
        if (product && product.count <= 0) {
            cartItems.value = cartItems.value.filter(item => item.id !== id)
        }
    }

    const deleteProduct = (id) => {
        cartItems.value = cartItems.value.filter(item => item.id !== id)
    }

    const totalPrice = computed(() =>
        cartItems.value.reduce((sum, product) => sum + product.price * product.count, 0)
    )

    it('очищает корзину', () => {
        clearCart()
        expect(cartItems.value).to.be.empty
    })

    it('увеличивает количество товара', () => {
        addProduct(1)
        expect(cartItems.value.find(p => p.id === 1).count).to.equal(3)
    })

    it('уменьшает количество товара', () => {
        minusProduct(1)
        expect(cartItems.value.find(p => p.id === 1).count).to.equal(1)
    })

    it('удаляет товар при уменьшении количества до 0', () => {
        minusProduct(2)
        expect(cartItems.value.find(p => p.id === 2)).to.be.undefined
    })

    it('удаляет товар по id', () => {
        deleteProduct(1)
        expect(cartItems.value.find(p => p.id === 1)).to.be.undefined
    })

    it('корректно считает общую сумму', () => {
        expect(totalPrice.value).to.equal(100 * 2 + 200 * 1)
        addProduct(1)
        expect(totalPrice.value).to.equal(100 * 3 + 200 * 1)
    })
})
