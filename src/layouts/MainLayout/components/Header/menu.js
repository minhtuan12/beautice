import {
    AppstoreOutlined,
    HomeOutlined,
    IdcardOutlined,
    InfoOutlined,
    PictureOutlined,
    VerticalAlignTopOutlined,
    MailOutlined
} from '@ant-design/icons'

export const mainMenu = [
    {
        label: 'Home',
        href: '/',
        icon: <HomeOutlined/>,
        children: [
            {
                key: '/',
                label: 'Home',
                href: '/',
                icon: <VerticalAlignTopOutlined rotate={90}/>
            },
            {
                key: '/home2',
                label: 'Home 2',
                href: '/home2',
                icon: <VerticalAlignTopOutlined rotate={90}/>
            }
        ]
    },
    {
        key: '/about',
        label: 'About',
        href: '/about',
        icon: <InfoOutlined/>,
    },
    {
        key: '/service',
        label: 'Service',
        href: '/service',
        icon: <AppstoreOutlined/>,
    },
    {
        key: '/gallery',
        label: 'Gallery',
        href: '/gallery',
        icon: <PictureOutlined/>,
    },
    {
        key: '/blog',
        label: 'Blog',
        href: '/blog',
        icon: <IdcardOutlined/>,
    },
    {
        type: 'divider',
    },
    {
        key: '/contact',
        label: 'Contact',
        href: null,
        icon: <MailOutlined />,
    }
]
