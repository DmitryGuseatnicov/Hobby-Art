import React, { FC, useEffect } from 'react';

import { Button, CheckBoxList } from 'shared/ui';

import { useHandlers } from './hooks';
import './ProductsSideBar.scss';

const ProductsSideBar: FC = () => {
  const {
    params,
    filters,
    handleCheckBoxChange,
    handleClearButtonClick,
    handleFormSubmit,
    handlePageOnLoad
  } = useHandlers();

  useEffect(() => {
    handlePageOnLoad();
  }, []);

  return (
    <form className="products-sidebar" onSubmit={handleFormSubmit}>
      <div className="products-sidebar__inputs">
        {filters.map((fl, i) => (
          <div className="products-sidebar__checkbox-list" key={fl.key}>
            <CheckBoxList
              title={fl.name}
              underlined={i !== filters.length - 1}
              items={fl.variants.map((checkBox) => {
                return {
                  label: checkBox,
                  name: fl.key,
                  value: checkBox,
                  isChecked: params[fl.key].includes(checkBox),
                  onChange: handleCheckBoxChange
                };
              })}
            />
          </div>
        ))}
      </div>
      <div className="products-sidebar__buttons">
        <div className="products-sidebar__button">
          <Button modification="pink" height="standard" isSubmit>
            Показать
          </Button>
        </div>
        <div className="products-sidebar__button">
          <Button modification="transparent" height="standard" onClick={handleClearButtonClick}>
            Очистить
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ProductsSideBar;
