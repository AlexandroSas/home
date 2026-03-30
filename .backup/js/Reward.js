import { User } from  "./User.js"

export class Reward {
    constructor(props={}) { this.props = props }

    r(cnt) {
        const dom = document.createElement('div')
        dom.className = 'grid grid-cols-[max-content_auto] gap-4 items-center justify-center justify-items-center rounded-md text-secondary bg-primary/25 p-4 rounded-md item reward'
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
        img.src = `/assets/images/rewards/${this.props.id}.png`
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

    rNotFound(cnt) {
        const dom = document.createElement('div')
        dom.className = 'grid grid-cols-2 gap-2 items-center rounded-md text-secondary bg-primary/25 p-4 rounded-md reward'
        dom.dataset.id = this.props.id

        const cnt_rw = document.createElement('div')
        cnt_rw.className = 'flex flex-col gap-2 items-center'
        dom.appendChild(cnt_rw)

        const img = document.createElement('img')
        img.className = 'bg-accent/50 rounded-md border-4 border-accent size-[4em]'
        img.src = `/assets/images/rewards/${this.props.id}.png`
        img.alt = 'item'
        cnt_rw.appendChild(img)

        const name = document.createElement('h3')
        name.className = 'font-bold text-primary text-center text-xs'
        name.innerHTML = this.props.name
        cnt_rw.appendChild(name)

        const p = document.createElement('p')
        p.className = 'font-semibold text-secondary text-center'
        p.innerHTML = 'DA TROVARE'
        dom.appendChild(p)

        cnt?.appendChild(dom)
        return dom
    }

    async rFound(cnt){
        const dom = document.createElement('div')
        dom.className = 'grid grid-cols-2 gap-2 items-center rounded-md text-secondary bg-primary/25 p-4 rounded-md reward'
        dom.dataset.id = this.props.id

        const cnt_rw = document.createElement('div')
        cnt_rw.className = 'flex flex-col gap-2 items-center'
        dom.appendChild(cnt_rw)

        const img = document.createElement('img')
        img.className = 'bg-primary rounded-md border-4 border-accent size-[4em]'
        img.src = `/assets/images/rewards/${this.props.id}.png`
        img.alt = 'item'
        cnt_rw.appendChild(img)
        
        const name = document.createElement('h3')
        name.className = 'font-bold text-primary text-center text-xs'
        name.innerHTML = this.props.name
        cnt_rw.appendChild(name)

        const props = await new User({id: this.props.found_by}).f()
        new User(props).rV(dom)

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

    async f() {
        try {
            const res = await fetch(`/api/reward?id=${encodeURIComponent(this.props.id)}`)
            const data = await res.json()
            // // console.log(data)

            if (data.error) {
                console.log(data.error)
                return
            }

            return data
        } catch (err) {
            console.error('Fetch failed:', err)
        }
    }

    async fAll() {
        try {
            const res = await fetch('/api/rewards')
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
            const res = await fetch('/api/rewards/owned')
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