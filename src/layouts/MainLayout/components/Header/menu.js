import {
    HomeOutlined, InfoOutlined, AppstoreOutlined,
    PictureOutlined,
    IdcardOutlined
} from '@ant-design/icons'

export const mainMenu = [
    {
        title: 'Home',
        href: '/',
        icon: <HomeOutlined/>
    },
    {
        title: 'About',
        href: '/about',
        icon: <InfoOutlined/>
    },
    {
        title: 'Service',
        href: '/service',
        icon: <AppstoreOutlined/>
    },
    {
        title: 'Gallery',
        href: '/gallery',
        icon: <PictureOutlined/>
    },
    {
        title: 'Blog',
        href: '/blog',
        icon: <IdcardOutlined/>
    },
    {
        title: 'Contact',
        href: null,
        icon: null
    }
]

export const homeMenu = [
    {
        title: 'Home',
        href: '/',
        icon: ''
    },
    {
        title: 'Home 2',
        href: '/home2',
        icon: ''
    }
]
