import React,{useState} from 'react';
import { Plus, Minus } from "../public/icons";


const AccordionForm = ({description, category}) => {
    const [showDescription, setShowDescription] = useState(false);
    const [showCategory, setShowCategory] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowDescription(!showDescription)}
        className="mt-10 border-b pb-4 group "
      >
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-sm group-hover:text-yellow-700 transition-all ">
            Description
          </h4>
          {showDescription ? (
            <Minus className="transition-all group-hover:text-yellow-700" />
          ) : (
            <Plus className="transition-all group-hover:text-yellow-700" />
          )}
        </div>
        <p
          className={`text-sm overflow-hidden transition-all duration-500  ${
            showDescription ? "h-5 mt-2" : "h-0 mt-0"
          }`}
        >
          {description}
        </p>
      </div>
      <div
        onClick={() => setShowCategory(!showCategory)}
        className="mt-4 border-b pb-4 group "
      >
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-sm group-hover:text-yellow-700 transition-all ">
            Category
          </h4>
          {showCategory ? (
            <Minus className="transition-all group-hover:text-yellow-700" />
          ) : (
            <Plus className="transition-all group-hover:text-yellow-700" />
          )}
        </div>
        <p
          className={`text-sm overflow-hidden transition-all duration-500  ${
            showCategory ? "h-5 mt-2" : "h-0 mt-0"
          }`}
        >
          {category}
        </p>
      </div>
    </>
  );
}

export default AccordionForm