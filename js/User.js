// // import { Hunt } from "./pages/Hunt.js"

export class User {
    constructor(props={}) { this.props = props }

    r(cnt, xs = null, reverse = false){
        const dom = document.createElement('div')
        dom.id = 'user_logged'
        dom.dataset.id = this.props.id
        dom.dataset.type = this.props.type
        dom.dataset.score = this.formatScore()
        dom.className = 'h-[max-content] grid grid-cols-[max-content_auto] grid-rows-2 gap-x-2 items-center p-2 rounded-md text-secondary font-roboto select-none'
        xs ? dom.classList.add('text-xs') : dom.classList.add('text-sm')
        
        const name = document.createElement('h3')
        name.className = 'text-primary font-bold self-end'
        name.textContent = this.props.username ?? 'Username'
        dom.appendChild(name)

        const code = document.createElement('p')
        code.className = 'self-start'
        code.textContent = this.props.code ?? 'Code'
        dom.appendChild(code)

        const img = document.createElement('img')
        img.className = 'row-span-2 size-[3.5em] rounded-full border-2 border-primary'
        img.src = `/assets/images/profile_pictures/${this.props.code}.jpeg` ?? '/assets/images/profile_pictures/SQ002.jpeg'
        img.onclick = async () => {
              try {
                const res = await fetch('/logout')
                if (!res.ok) throw new Error(`Server replied ${res.status}`)
                window.location.href = '/index.php'
            } catch (err) {
                console.error('Logout failed:', err)
                alert(err)
            }
        }
        reverse ? dom.insertBefore(img, code) : dom.insertBefore(img, name)

        cnt ? cnt.appendChild(dom) : null
        return dom
    }
    rCard(cnt){
        const dom = document.createElement('div')
        dom.className = 'flex items-center p-2 border-2 border-transparent rounded-md text-primary text-xs font-roboto select-none card'
        dom.id = `user_card_${this.props.id}`
        dom.dataset.id = this.props.id
        dom.onclick = () => {
            this.resetStyle()

            dom.classList.replace('border-transparent', 'border-accent')
            dom.classList.add('bg-accent/50', 'active')
        }

        const img = document.createElement('img')
        img.className = 'size-[4em] rounded-full border-2 border-accent'
        img.src = `/img/squidgame/${this.props.code}.jpeg` ?? '/img/squidgame/SQ002.jpeg'
        dom.appendChild(img)

        const div = document.createElement('div')
        div.className = "grid grid-cols-3 gap-2 w-full text-center"
        dom.appendChild(div)

        const name = document.createElement('h3')
        name.className = 'text-accent font-bold'
        name.textContent = this.props.username ?? 'Username'
        div.appendChild(name)

        const code = document.createElement('p')
        code.className = ''
        code.textContent = this.props.code ?? 'Code'
        div.appendChild(code)

        const score = document.createElement('p')
        score.className = 'text-secondary'
        score.textContent = this.formatScore() ?? 'score'
        div.appendChild(score)

        cnt ? cnt.appendChild(dom) : null
        return dom
    }
    rV(cnt){
        const dom = document.createElement('div')
        dom.className = 'flex flex-col gap-2 items-center p-2 border-2 border-transparent rounded-md text-primary text-xs font-roboto select-none card'
        dom.id = `user_card_mini_${this.props.id}`
        dom.dataset.id = this.props.id

        const img = document.createElement('img')
        img.className = 'size-[4em] rounded-full border-2 border-accent'
        img.src = `/assets/images/profile_pictures/${this.props.code}.jpeg` ?? '/assets/images/profile_pictures/SQ002.jpeg'
        dom.appendChild(img)

        const div = document.createElement('div')
        div.className = "flex gap-2 w-full items-center justify-center"
        dom.appendChild(div)

        const name = document.createElement('h3')
        name.className = 'text-accent font-bold'
        name.textContent = this.props.username ?? 'Username'
        div.appendChild(name)

        const code = document.createElement('p')
        code.className = ''
        code.textContent = this.props.code ?? 'Code'
        div.appendChild(code)

        cnt ? cnt.appendChild(dom) : null
        return dom
    }
    async rCardMinimal(cnt){
        const dom = document.createElement('div')
        dom.className = 'flex items-center  gap-2 p-2 border-2 border-transparent rounded-md text-primary text-xs font-roboto select-none card'
        dom.id = `user_card_mini_${this.props.id}`
        dom.dataset.id = this.props.id
        dom.onclick = async () => {
            this.resetStyle()

            dom.classList.replace('border-transparent', 'border-accent')
            dom.classList.add('bg-accent/50', 'active')
            
            const cnt_hunts = document.getElementById('cnt_hunts_game')
            cnt_hunts.innerHTML = ''

            const hunts = await new Hunt().fUser(this.props.id)
            if(hunts.length != 0){
                for(const props of hunts){
                    if(props.id == 10){ break }
                    const h = new Hunt()
                    h.rHunt(cnt_hunts, props)
                }
            }
        }

        const img = document.createElement('img')
        img.className = 'size-[4em] rounded-full border-2 border-accent'
        img.src = `/assets/images/profile_pictures/${this.props.code}.jpeg` ?? '/assets/images/profile_pictures/SQ002.jpeg'
        dom.appendChild(img)

        const div = document.createElement('div')
        div.className = "grid grid-rows-2 gap-2 w-full text-center"
        dom.appendChild(div)

        const name = document.createElement('h3')
        name.className = 'text-accent font-bold'
        name.textContent = this.props.username ?? 'Username'
        div.appendChild(name)

        const code = document.createElement('p')
        code.className = ''
        code.textContent = this.props.code ?? 'Code'
        div.appendChild(code)

        cnt ? cnt.appendChild(dom) : null
        return dom
    }
    async rScore(cnt){
        const max = await this.fScores()

        this.r(cnt)

        const dom = document.createElement('div')
        dom.className = "h-[max-content] w-full grid grid-rows-2 self-center"

        const cnt_score = document.createElement('div')
        cnt_score.className = "h-[0.65em] w-full rounded-md border-2 border-accent bg-bg self-end"
        dom.appendChild(cnt_score)

        const score = document.createElement('div')
        score.className = `h-full w-[${Math.floor(this.props.score / max.max_score*100)}%] rounded-md bg-primary`
        score.style.width = `${Math.floor(this.props.score / max.max_score*100)}%`
        cnt_score.appendChild(score)

        const text = document.createElement('p')
        text.className = "text-primary text-sm font-semibold self-start"
        text.textContent = this.formatScore()
        dom.appendChild(text)

        cnt ? cnt.appendChild(dom) : null
        return dom
    }
    async rEliminated(cnt){
        const max = await this.fScores()

        const dom = document.createElement('div')
        dom.className = 'h-[max-content] grid grid-cols-[max-content_auto] grid-rows-2 gap-x-2 items-center p-2 rounded-md text-red-400 font-roboto select-none'
        
        const name = document.createElement('h3')
        name.className = 'text-red-600 font-bold self-end'
        name.textContent = this.props.username ?? 'Username'
        dom.appendChild(name)

        const code = document.createElement('p')
        code.className = 'self-start'
        code.textContent = this.props.code ?? 'Code'
        dom.appendChild(code)

        const img = document.createElement('img')
        img.className = 'row-span-2 size-[3.5em] rounded-full border-2 border-red-600'
        img.src = '/assets/images/profile_pictures/SQ023.jpeg'
        dom.insertBefore(img, name)

        const dom2 = document.createElement('div')
        dom2.className = "h-[max-content] w-full grid grid-rows-2 self-center"

        const cnt_score = document.createElement('div')
        cnt_score.className = "h-[0.65em] w-full rounded-md border-2 border-red-600 bg-bg self-end"
        dom2.appendChild(cnt_score)

        const score = document.createElement('div')
        score.className = `h-full w-[${Math.floor(this.props.score / max.max_score*100)}%] rounded-md bg-red-400`
        score.style.width = `${Math.floor(this.props.score / max.max_score*100)}%`
        cnt_score.appendChild(score)

        const text = document.createElement('p')
        text.className = "text-red-400 text-sm font-semibold self-start"
        text.textContent = this.formatScore()
        dom2.appendChild(text)

        cnt ? cnt.appendChild(dom) : null
        cnt ? cnt.appendChild(dom2) : null
        return dom
    }
    async rAdmin(cnt){
        const dom = document.createElement('div')
        dom.className = 'h-[max-content] grid grid-cols-[max-content_auto] grid-rows-2 gap-x-2 items-center p-2 rounded-md text-red-400 font-roboto select-none'
        
        const name = document.createElement('h3')
        name.className = 'text-red-400 font-bold self-end'
        name.textContent = this.props.username ?? 'Username'
        dom.appendChild(name)

        const code = document.createElement('p')
        code.className = 'self-start'
        code.textContent = this.props.code ?? 'Code'
        dom.appendChild(code)

        const img = document.createElement('img')
        img.className = 'row-span-2 size-[3.5em] rounded-full border-2 border-red-400'
        img.src = `/assets/images/profile_pictures/${this.props.code}.jpeg`
        dom.insertBefore(img, name)

        const text = document.createElement('div')
        text.className = "text-red-400 grid items-center"
        text.innerHTML = "Amministratore"

        cnt ? cnt.appendChild(dom) : null
        cnt ? cnt.appendChild(text) : null
        return dom
    }

    clog() { console.log(`User: ${this.props})`) }


    // DOM 
    resetStyle() {
        const cards = document.getElementsByClassName('card')
        for(const card of cards){
            card.className = 'flex items-center p-2 border-2 border-transparent rounded-md text-primary text-xs font-roboto select-none card'
        }
    }
    formatScore(){
        const score = this.props.score;
        const formatted = new Intl.NumberFormat('it-IT', {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(score);

        return formatted; 
    }

}