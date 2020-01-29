import { routes } from '../constants'

export const userMenu = [
    {
        title: 'Login',
        route: routes.LOGIN
    },
    {
        title: 'New Post',
        route: routes.POST
    },
    {
        title: 'Logout',
        logout: true
    }
]

export const noUserMenu = [
    {
        title: 'Login',
        route: routes.LOGIN
    }
]