'use client';

import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

export default function SolidBackground() {
  return (
    <Breadcrumb
      aria-label="Solid background breadcrumb example"
      className="bg-gray-50 px-5 py-3 dark:bg-gray-900"
    >
      <Breadcrumb.Item
        href="#"
        icon={HiHome}
      >
        <p>
          Home
        </p>
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        Projects
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Horticulture
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}


