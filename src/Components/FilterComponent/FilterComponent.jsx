import './filterComponent.scss';

import { faBroom } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Select from 'react-select';

import dummyData from './dummyData';

function FilterComponent({ filter, setFilter, initialFilter }) {
  const [tempFilter, setTempFilter] = useState(filter);

  const applyFilter = () => {
    setFilter(tempFilter);
  };

  const cancelFilter = () => {
    setTempFilter(filter);
  };

  const resetFilter = () => {
    setFilter(initialFilter);
    setTempFilter(initialFilter);
  };

  return (
    <div className="filter-container">
      <div className="select-container">
        <div className="select-option">
          <p>Product</p>
          <Select
            isSearchable={false}
            isMulti
            options={dummyData.productData}
            value={tempFilter.product}
            onChange={(e) => setTempFilter((prev) => ({ ...prev, product: e }))}
          />
        </div>
        <div className="select-option">
          <p>Indication</p>
          <Select
            isSearchable={false}
            isMulti
            options={dummyData.indicationData}
            value={tempFilter.indication}
            onChange={(e) =>
              setTempFilter((prev) => ({ ...prev, indication: e }))
            }
          />
        </div>
        <div className="select-option">
          <p>Profile</p>
          <Select
            isSearchable={false}
            options={dummyData.profileData}
            value={
              tempFilter.profile?.label?.length > 0
                ? tempFilter.profile
                : 'Select...'
            }
            onChange={(e) => setTempFilter((prev) => ({ ...prev, profile: e }))}
          />
        </div>
        <div className="select-option">
          <p>Promo Material</p>
          <Select
            isSearchable={false}
            options={dummyData.promoMaterialData}
            value={
              tempFilter.promoMaterial?.label?.length > 0
                ? tempFilter.promoMaterial
                : 'Select...'
            }
            onChange={(e) =>
              setTempFilter((prev) => ({ ...prev, promoMaterial: e }))
            }
          />
        </div>
        <div className="select-option">
          <p>Promo subject</p>
          <Select
            isSearchable={false}
            options={dummyData.promoSubjectData}
            value={
              tempFilter.promoSubject?.label?.length > 0
                ? tempFilter.promoSubject
                : 'Select...'
            }
            onChange={(e) =>
              setTempFilter((prev) => ({ ...prev, promoSubject: e }))
            }
          />
        </div>
      </div>
      <div className="filter-container-buttons">
        <button type="button" className="apply-button" onClick={applyFilter}>
          Apply
        </button>
        <button type="button" className="cancel-button" onClick={cancelFilter}>
          Cancel
        </button>
        <button type="button" className="clear-button" onClick={resetFilter}>
          <FontAwesomeIcon icon={faBroom} size="1x" />
        </button>
      </div>
    </div>
  );
}

export default FilterComponent;
