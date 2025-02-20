import { Fragment } from 'react';
import type { NextPage } from 'next';
import { Navbar } from 'components/blocks/navbar';

const MenuPage: NextPage = () => {
    const menuItems = [
        { name: 'Burger', price: '$5.99' },
        { name: 'Pizza', price: '$8.99' },
        { name: 'Pasta', price: '$7.49' },
        { name: 'Salad', price: '$4.99' },
        { name: 'Soda', price: '$1.99' }
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
                    <ul className="list-group">
                        {menuItems.map((item, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {item.name}
                                <span className="badge bg-primary rounded-pill">{item.price}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="text-center mt-4">
                        <a href="https://drive.google.com/file/d/1Wgu6uWnw4KSktVnuOtaf_Nw2zVSecKuS/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Full Menu</a>
                    </div>
                </div>
            </main>
        </Fragment>
    );
};

export default MenuPage;
