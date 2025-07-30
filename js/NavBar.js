import { Icon } from "./Icon.js"
import { Leaderboard } from "./pages/Leaderboard.js"
import { Game } from "./pages/Game.js"
import { Hunt } from "./pages/Hunt.js"
import { Shop } from "./pages/Shop.js"
import { QR } from "./pages/QR.js"
import { User } from "./User.js"

export class NavBar {
    constructor() {}

    r(cnt) {
        const dom = document.createElement('div')
        dom.id = 'navbar'
        dom.className = 'flex-shrink-0 bg-black/35 rounded-md backdrop-blur-md flex gap-4 justify-around p-4 m-2'

        const i = new Icon('')
        const sections = ['leaderboard', 'game', 'hunt', 'shop', 'qr']

        sections.forEach((name, index) => {
            const icon = new Icon({svg: name}).r(dom)
            icon.id = `btn_${name}`

            icon.addEventListener('click', async () => {

                dom.querySelectorAll('.icon').forEach(el => i.not_active(el))
                i.active(icon)

                await this.onSwap(name)
            })

            if (index === 0) i.active(icon)
            else i.not_active(icon)
        })

        cnt?.appendChild(dom)
        return dom
    }

    async onSwap(name) {
        const u = document.getElementById('user_logged')
        const a = u.dataset.type == 2 ? true : false

        const cnt = document.getElementById('page-content')
        cnt.innerHTML = ''
        try {
            switch(name) {
                case 'leaderboard': { await this.userReload(); await new Leaderboard().r(cnt); break }
                case 'game': { await this.userReload(); await new Game().r(cnt, a); break }
                case 'hunt': { await this.userReload(); await new Hunt().r(cnt, a); break }
                case 'shop': { await this.userReload(); await new Shop().r(cnt, a); break }
                case 'qr': { await this.userReload(); await QR.requestCameraPermission(); await new QR().r(cnt); break }
            }
        } catch(e) {
            console.error('Error loading section:', e)
            cnt.textContent = 'Failed to load content.'
        }
    }

    async userReload(){
        const user_logged = document.getElementById('user_logged')
        const idu = parseInt(user_logged.dataset.id)

        const u = await new User({id: idu}).f()
        user_logged.dataset.score = u.score
    }

}
