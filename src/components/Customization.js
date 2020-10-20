import React, { useRef, useState } from "react";
import { useHandleClose } from "../utils";

export default ({ addonCat }) => {
  const [showCustomization, setShowCustomization] = useState(false);

  const ref = useRef();
  useHandleClose(ref, () => setShowCustomization(!showCustomization));

  if (addonCat.length)
    return (
      <div className='customization'>
        <p onClick={() => setShowCustomization(!showCustomization)}>
          customization available
          {/* <i className={`arrow ${showCustomization ? "up" : "down"}`}></i> */}
        </p>
        {showCustomization && (
          <div>
            {addonCat.map(({ addon_category, addon_category_id }) => (
              <p
                className='add-ons'
                onClick={() => ({})}
                ref={ref}
                key={addon_category_id}
              >
                {addon_category}
              </p>
            ))}
          </div>
        )}
      </div>
    );

  return null;
};
