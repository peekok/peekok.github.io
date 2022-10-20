// assets
import { IconMessageDots } from '@tabler/icons';

// constant
const icons = {
    IconMessageDots
};

// ==============================|| CONTACT MENU ITEMS ||============================== //

const contact = {
    id: 'contact',
    title: 'Contact',
    type: 'group',
    children: [
        {
            id: 'contact',
            title: 'Contact',
            type: 'item',
            url: '/contact',
            icon: icons.IconMessageDots,
            breadcrumbs: false
        }
    ]
};

export default contact;
