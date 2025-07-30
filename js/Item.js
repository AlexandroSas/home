export class Item {
    constructor(props={}) { this.props = props }

    r(cnt) {

        const dom = document.createElement('div')
        dom.className = 'grid grid-cols-[30%_auto] gap-4 items-center justify-center justify-items-center rounded-md text-secondary bg-primary/25 p-4 rounded-md item'
        dom.dataset.id = this.props.id
        dom.onclick = () => {
            this.resetStyle()
            img.classList.replace('bg-accent/50', 'bg-primary')                
            dom.classList.add('active')

            const btn_game = document.getElementById('submit_game')
            btn_game.disabled = false
            btn_game.className = 'rounded-md text-secondary bg-accent p-2 font-semibold'
        }

        const cnt_rw = document.createElement('div')
        cnt_rw.className = 'flex flex-col gap-2 items-center'
        dom.appendChild(cnt_rw)

        const img = document.createElement('img')
        img.className = 'bg-accent/50 rounded-md border-4 border-accent size-[4em]'
        img.src = `/assets/images/items/${this.props.id}.png`
        img.alt = 'item'
        cnt_rw.appendChild(img)

        const name = document.createElement('h3')
        name.className = 'font-bold text-primary text-center text-xs'
        name.innerHTML = this.props.name
        cnt_rw.appendChild(name)

        const des = document.createElement('p')
        des.className = ''
        des.innerHTML = this.props.description
        dom.appendChild(des)

        cnt?.appendChild(dom)
        return dom
    }

    rShop(cnt) {
        const dom = document.createElement('div')
        dom.className = 'grid grid-cols-[30%_auto] gap-2 items-center justify-center justify-items-center rounded-md text-secondary bg-primary/25 p-4 rounded-md item_shop'
        dom.dataset.id = this.props.id
        dom.dataset.price = this.props.price
        dom.onclick = () => {
            
            const cart = document.getElementById('subtot')
            const result = document.getElementById('shop_result')
            
            if(!dom.classList.contains('active')){
                img.classList.replace('bg-accent/50', 'bg-primary')

                const cart_value = parseInt(cart.innerHTML.replace(/\./g, ""), 10) - parseInt(this.props.price)
                cart.innerHTML = this.formatPirce(cart_value)

                const score = parseInt(document.getElementById('shop_points').innerHTML.replace(/\./g, ""), 10)
                const subtot = score + cart_value

                const result_value = subtot
                result.innerHTML = this.formatPirce(result_value)

                const btn_shop = document.getElementById('submit_shop')
                if(subtot >= 0){
                    btn_shop.disabled = false
                    btn_shop.className = 'rounded-md text-secondary bg-accent p-2 font-semibold'
                } else {
                    btn_shop.disabled = true
                    btn_shop.className = 'rounded-md text-gray-300 bg-gray-500 p-2 font-semibold'
                }
                
                dom.classList.add('active')
            } else {
                img.classList.replace('bg-primary', 'bg-accent/50')

                const cart_value = parseInt(cart.innerHTML.replace(/\./g, ""), 10) + parseInt(this.props.price)
                cart.innerHTML = this.formatPirce(cart_value)

                const score = parseInt(document.getElementById('shop_points').innerHTML.replace(/\./g, ""), 10)
                const subtot = score + cart_value

                const result_value = subtot
                result.innerHTML = this.formatPirce(result_value)

                const btn_shop = document.getElementById('submit_shop')
                if(subtot >= 0){
                    btn_shop.disabled = false
                    btn_shop.className = 'rounded-md text-secondary bg-accent p-2 font-semibold'
                } else {
                    btn_shop.disabled = true
                    btn_shop.className = 'rounded-md text-gray-300 bg-gray-500 p-2 font-semibold'
                }

                dom.classList.remove('active')

            }

        }

        const cnt_rw = document.createElement('div')
        cnt_rw.className = 'flex flex-col gap-2 items-center'
        dom.appendChild(cnt_rw)

        const img = document.createElement('img')
        img.className = 'bg-accent/50 rounded-md border-4 border-accent size-[4em]'
        img.src = `/assets/images/items/${this.props.id}.png`
        img.alt = 'item'
        cnt_rw.appendChild(img)

        const name = document.createElement('h3')
        name.className = 'font-bold text-primary text-center text-xs'
        name.innerHTML = this.props.name
        cnt_rw.appendChild(name)

        const cnt_dp = document.createElement('div')
        cnt_dp.className = 'flex flex-col gap-2 items-center'
        dom.appendChild(cnt_dp)

        const des = document.createElement('p')
        des.className = ''
        des.innerHTML = this.props.description
        cnt_dp.appendChild(des)
        
        const price = document.createElement('p')
        price.className = 'italic text-right w-full text-xs'
        price.innerHTML = `Prezzo: <strong class='text-accent'>${this.formatPirce()}</strong>`
        cnt_dp.appendChild(price)



        cnt?.appendChild(dom)
        return dom
    }

    resetStyle() {
        const items = document.getElementsByClassName('item')
        for(const item of items){
            item.classList.remove('active')
            item.firstChild.firstChild.classList.replace('bg-primary', 'bg-accent/50')
        }
    }

    formatPirce(price = this.props.price){
        const formatted = new Intl.NumberFormat('it-IT', {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);

        return formatted; 
    }

    async fAll() {
        try {
            const res = await fetch('/api/items')
            const data = await res.json()

            if (data.error) {
                console.log(data.error)
                return
            }

            return data
        } catch (err) {
            console.error('Fetch failed:', err)
        }
    }
    async fOwned() {
        try {
            const res = await fetch('/api/items/owned')
            const data = await res.json()

            if (data.error) {
                console.log(data.error)
                return
            }
            
            return data
        } catch (err) {
            console.error('Fetch failed:', err)
        }
    }
}