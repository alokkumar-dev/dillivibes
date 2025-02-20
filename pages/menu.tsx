import { Fragment } from 'react';
import type { NextPage } from 'next';
import { Navbar } from 'components/blocks/navbar';

const MenuPage: NextPage = () => {
    const menuSections = [
        {
            name: 'Nasta Pani',
            items: [
                'Choley Bhature',
                'Aloo Bedmi Puri',
                'Pav Bhaji (Extra Pav)',
                'Veg Sandwich',
                'Cheese Sandwich',
                'Grilled Sandwich',
                'Butter Toast',
                'Mix Pakora',
                'Paneer Pakora',
                'Paneer Bread Pakora'
            ]
        },
        {
            name: 'Dilli Vibes Parantha',
            items: [
                'Aloo Parantha',
                'Onion Parantha',
                'Aloo Onion Parantha',
                'Gobhi Parantha',
                'Mix Veg Parantha',
                'Paneer Parantha'
            ]
        }
    ];

    return (
        <Fragment>
            {/* ========== header section ========== */}
            <header className="wrapper mb-1">
                <Navbar social navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />
            </header>

            <main className="content-wrapper">
                <div className='container'>
                    <h1 className="text-center mb-4">Menu</h1>
                    {menuSections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="mb-4">
                            <h3 className="mb-3">{section.name}</h3>
                            <ul className="list-group">
                                {section.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="list-group-item">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="text-center mt-4">
                        <a href="https://drive.google.com/file/d/1Wgu6uWnw4KSktVnuOtaf_Nw2zVSecKuS/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Full Menu</a>
                    </div>
                </div>
            </main>
        </Fragment>
    );
};

export default MenuPage;
