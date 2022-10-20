// assets
import { IconInfoSquare, IconMessageDots, IconFolders, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconInfoSquare,
    IconMessageDots,
    IconFolders,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    children: [
        {
            id: 'about',
            title: 'About',
            type: 'item',
            url: '/about',
            icon: icons.IconInfoSquare,
            breadcrumbs: false
        },
        {
            id: 'portfolio',
            title: 'Portfolio',
            type: 'item',
            url: '/portfolio',
            icon: icons.IconFolders,
            breadcrumbs: false
        }
    ]
};

export default utilities;
