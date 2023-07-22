'use client';

import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

export default function NavbarWithDropdown() {
  const links = [
    { text: 'Home', url: '/' },
    { text: 'Gallery', url: '/gallery' },
    { text: 'Services', url: '/services' },
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/contact' },
  ];

  const siteTitle = {
    text: 'HRS Gardens', url: '/'
  };

  return (
    <Navbar
      fluid
      rounded
      className="border-b bg-gray-100"
    >
      <Navbar.Brand as={NavLink} to={siteTitle.url} className="h-32">
        {/*<img*/}
        {/*  alt="HRS Gardens Logo"*/}
        {/*  className="mr-3 h-6 sm:h-9"*/}
        {/*  src="/favicon.svg"*/}
        {/*/>*/}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          {siteTitle.text}
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={<Avatar alt="User settings" img="/assets/images/user.png" rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              Admin
            </span>
            <span className="block truncate text-sm font-medium">
              admin@hrsgardens.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item>
            Settings
          </Dropdown.Item>
          <Dropdown.Item>
            Earnings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {links.map(link => (
          <Navbar.Link as={NavLink} to={link.url} className="text-base">
            {link.text}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}


