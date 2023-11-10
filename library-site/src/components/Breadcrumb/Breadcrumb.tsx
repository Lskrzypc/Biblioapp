import Link from 'next/link';
import { FC } from 'react';

type BreadcrumbItem = {
  text: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export const Breadcrumb: FC<BreadcrumbProps> = ({ items }) => (
  <div className="flex justify-start ml-2 md:ml-3 lg:ml-4">
    <nav aria-label="breadcrumb" className="py-3">
      <ol className="bg-main-project px-4 py-2 rounded-lg flex space-x-2 sm:space-x-4">
        {items.map((item, index) => (
          <li key={index} className={`flex items-center`}>
            <div className={`flex items-center ${
              index !== items.length - 1 ? 'text-rose-project' : 'text-gray-project font-bold'
            }`}>
              {item.href ? (
                <Link href={item.href} legacyBehavior>
                  <a className={`hover:text-rose-project transition-colors duration-300 ease-in-out`}>
                    {item.text}
                  </a>
                </Link>
              ) : (
                <span className={`font-bold`}>
                  {item.text}
                </span>
              )}
            </div>
            {index !== items.length - 1 && (
              <svg className="mx-1 h-4 w-4 text-black-project" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H5a1 1 0 110-2h9.586l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  </div>
);


