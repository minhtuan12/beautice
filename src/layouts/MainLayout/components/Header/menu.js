import {
    AppstoreOutlined,
    HomeOutlined,
    IdcardOutlined,
    InfoOutlined,
    PictureOutlined,
    VerticalAlignTopOutlined
} from '@ant-design/icons'

export const mainMenu = [
    {
        title: 'Home',
        href: '/',
        icon: <HomeOutlined/>,
        children: [
            {
                title: 'Home',
                href: '/',
                icon: <VerticalAlignTopOutlined rotate={90}/>
            },
            {
                title: 'Home 2',
                href: '/home2',
                icon: <VerticalAlignTopOutlined rotate={90}/>
            }
        ]
    },
    {
        title: 'About',
        href: '/about',
        icon: <InfoOutlined/>,
        children: []
    },
    {
        title: 'Service',
        href: '/service',
        icon: <AppstoreOutlined/>,
        children: []
    },
    {
        title: 'Gallery',
        href: '/gallery',
        icon: <PictureOutlined/>,
        children: []
    },
    {
        title: 'Blog',
        href: '/blog',
        icon: <IdcardOutlined/>,
        children: []
    },
    {
        title: 'Contact',
        href: null,
        icon: null,
        children: []
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
