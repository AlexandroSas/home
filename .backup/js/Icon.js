export class Icon{
    constructor(props){
        this.props = props
        // this.click = this.click.bind(this)
    }

    r(cnt){
        const dom = document.createElement('div')
        dom.className = this.props.style ?? 'rounded-md p-4 bg-accent grid items-center justify-center w-full icon'
        dom.onclick = this.click

        switch(this.props.svg){
            case 'leaderboard':
                dom.innerHTML = 
                    `<svg class="fill-current stroke-none size-[1.5em] text-primary" viewBox="0 0 21 18" xmlns="http://www.w3.org/2000/svg">
                        <rect x="7.20007" y="1" width="13" height="3" rx="1.5" />
                        <rect width="4" height="4" />
                        <path d="M18 7L16 10.5H20L18 7Z" />
                        <rect y="8" width="13" height="3" rx="1.5" />
                        <rect x="7.20007" y="15" width="13" height="3" rx="1.5" />
                        <rect y="14" width="4" height="4" rx="2" />
                    </svg>`
                break
            case 'game':
                dom.innerHTML = 
                    `<svg class="fill-none stroke-current size-[1.5em] text-primary" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" />
                    </svg>`
                break
            case 'hunt':
                dom.innerHTML = 
                    `<svg class="fill-none stroke-current size-[1.5em] text-primary" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 1L1 15H17L9 1Z" />
                    </svg>`
                break
            case 'shop':
                dom.innerHTML = 
                    `<svg class="fill-none stroke-current size-[1.5em] text-primary" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="15" height="15" />
                    </svg>`
                break
            case 'qr':
                dom.innerHTML = 
                    `<svg class="fill-current stroke-none size-[1.5em] text-primary" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 20C1.55228 20 2 20.4477 2 21C2 21.5523 1.55228 22 1 22C0.447715 22 0 21.5523 0 21C0 20.4477 0.447715 20 1 20ZM14 20C14.5523 20 15 20.4477 15 21C15 21.5523 14.5523 22 14 22H4C3.44772 22 3 21.5523 3 21C3 20.4477 3.44772 20 4 20H14ZM22 22H20V20H22V22ZM21 17C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H10C9.44772 19 9 18.5523 9 18C9 17.4477 9.44772 17 10 17H21ZM16 16H6V6H16V16ZM4 13C4.55228 13 5 13.4477 5 14C5 14.5523 4.55228 15 4 15H1C0.447715 15 0 14.5523 0 14C0 13.4477 0.447715 13 1 13H4ZM7 15H15V7H7V15ZM21 13C21.5523 13 22 13.4477 22 14C22 14.5523 21.5523 15 21 15C20.4477 15 20 14.5523 20 14C20 13.4477 20.4477 13 21 13ZM9 14H8V13H9V14ZM11 14H10V13H11V14ZM13 14H12V13H13V14ZM10 13H9V12H10V13ZM12 13H11V12H12V13ZM14 13H13V12H14V13ZM2 12H0V10H2V12ZM4 10C4.55228 10 5 10.4477 5 11C5 11.5523 4.55228 12 4 12C3.44772 12 3 11.5523 3 11C3 10.4477 3.44772 10 4 10ZM13 12H12V11H13V12ZM21 10C21.5523 10 22 10.4477 22 11C22 11.5523 21.5523 12 21 12H18C17.4477 12 17 11.5523 17 11C17 10.4477 17.4477 10 18 10H21ZM11 11H8V8H11V11ZM14 11H13V10H14V11ZM9 10H10V9H9V10ZM13 10H12V9H13V10ZM18 7C18.5523 7 19 7.44772 19 8C19 8.55228 18.5523 9 18 9C17.4477 9 17 8.55228 17 8C17 7.44772 17.4477 7 18 7ZM18 3C18.5523 3 19 3.44772 19 4C19 4.55228 18.5523 5 18 5H1C0.447715 5 0 4.55228 0 4C0 3.44772 0.447715 3 1 3H18ZM22 5H20V3H22V5ZM1 0C1.55228 0 2 0.447715 2 1C2 1.55228 1.55228 2 1 2C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0ZM11 0C11.5523 0 12 0.447715 12 1C12 1.55228 11.5523 2 11 2H6C5.44772 2 5 1.55228 5 1C5 0.447715 5.44772 0 6 0H11Z"/>
                    </svg>`
                break
            case 'hint':
                dom.innerHTML = 
                    `<svg class="size-[1.5em]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>`
                break
            case 'hint_solid':
                dom.innerHTML = 
                    `<svg class="size-[1.5em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
                        <path fill-rule="evenodd" d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z" clip-rule="evenodd" />
                    </svg>`
                break
            case 'description':
                dom.innerHTML = 
                    `<svg class="size-[1.5em]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>`
                break
            case 'description_solid':
                dom.innerHTML = 
                    `<svg class="size-[1.5em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clip-rule="evenodd" />
                        <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                    </svg>`
                break

            case 'back':
                dom.innerHTML = 
                    `<svg class="size-[1.5em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
                    </svg>`
                break
        }
        
        cnt ? cnt.appendChild(dom) : null
        return dom
    }

    active(dom){
        dom.classList.replace('bg-accent/30', 'bg-accent')
        dom.firstChild.classList.replace('text-primary/30', 'text-primary')
    }
    not_active(dom){
        dom.classList.replace('bg-accent', 'bg-accent/30')
        dom.firstChild.classList.replace('text-primary', 'text-primary/30')
    }

    // click(e){
    //     const btns = document.getElementById('navbar').children;
    //     [...btns].forEach(btn => {
    //         this.not_active(btn)
    //     });
    //     this.active(e.currentTarget)

    //     switch(this.svg){
    //         case "leaderboard":
    //             break
    //         case "game":
    //             break
    //         case "hunt":
    //             break
    //         case "shop":
    //             break
    //         case "codes":
    //             break
    //     }
    // }
}