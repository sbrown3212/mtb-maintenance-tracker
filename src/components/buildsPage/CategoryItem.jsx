import React, { useState } from 'react';
import PartItem from './PartItem.jsx';
import { Collapse } from 'react-collapse';
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";

const CategoryItem = ({ data, setUserBuilds, category }) => {
  const [ showChildren, setShowChildren ] = useState(false);

  const catName = category.name[0].toUpperCase() + category.name.substring(1);

  const catParts = data.parts.filter((part) => part.part_type.categoryId === category.id);
  
  const parts = catParts.sort((a, b) => a.id - b.id).map((part) => {
    return (
      <PartItem
        key={part.id}
        data={part}
        setUserBuilds={setUserBuilds}
      />
    );
  });

  return (
    <>
      <div id='part-category-title' className='secondary-row-container'>
        <h3>
          <button onClick={() => setShowChildren(!showChildren)}>
            { catName }
          </button>
        </h3>
        <button onClick={() => setShowChildren(!showChildren)}>
          {!showChildren ? <PiCaretDownBold /> : <PiCaretUpBold />}
        </button>
      </div>

      <div id='part-container' className='tertiary-items-container'>
        <Collapse isOpened={showChildren}>
          <ul>
            { parts }
          </ul>
        </Collapse>
      </div>
    </>
  );
};

export default CategoryItem;