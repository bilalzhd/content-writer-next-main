import React, { useState } from "react";

interface FeatureItemProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function FeatureItem({ isActive, onClick, children }: FeatureItemProps) {
  return (
    <li
      className={`${
        isActive ? 'bg-gray-100 ' : ''
      }active flex items-center mr-4 cursor-pointer py-4 px-3 rounded transition-all duration-200`}
      onClick={onClick}
    >
      <p>{children}</p>
    </li>
  );
}

interface FeaturesProps {
  items: string[];
  images: string[];
}

function Features({ items, images }: FeaturesProps) {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <div className="flex flex-col md:flex-row items-center">
      <ul className="my-4 md:w-96">
        {items.map((item, index) => (
          <FeatureItem
            key={index}
            isActive={activeItem === index + 1}
            onClick={() => setActiveItem(index + 1)}
          >
            {item}
          </FeatureItem>
        ))}
      </ul>
      <ul className="md:w-96 flex items-center">
        {images.map((image, index) => (
          <li
            key={index}
            className={`${
              activeItem === index + 1 ? 'show ' : 'hidden '
            }active flex items-center mr-4 cursor-pointer py-4 px-3 rounded transition-all duration-200`}
          >
            <img src={image} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Features;
