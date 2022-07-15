/* eslint-disable no-unused-vars */
import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { productModel } from 'entities/product';
import { AsyncDispatch } from 'entities/store';
import { Button, CheckBoxList } from 'shared/ui';

import { getProductsByParams } from '../../actions';
import './ProductsSideBar.scss';

const ProductsSideBar: FC = () => {
  const { category = '' } = useParams<{ category: string }>();

  const filters = productModel.useFilters(category);

  const [params, setParams] = useState<{ [x: string]: string[] }>(
    filters.reduce<any>((prev, next) => {
      return { ...prev, [next.key]: [] };
    }, {})
  );

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: key, value } = e.target;

    if (!params[key].includes(value)) {
      setParams({ ...params, [key]: [...params[key], value] });
      return;
    }
    setParams({ ...params, [key]: params[key].filter((el: string) => el !== value) });
  };

  const dispatch = useDispatch<AsyncDispatch>();

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const searchParams = Object.entries(params)
      .filter((entry) => {
        const [key, values] = entry;
        return values.length > 0;
      })
      .reduce((prev, next) => {
        return { ...prev, [next[0]]: next[1] };
      }, {});

    dispatch(getProductsByParams({ category, ...searchParams }));
  };

  useEffect(() => {
    dispatch(getProductsByParams({ category }));
  }, [category]);

  return (
    <form className="products-sidebar" onSubmit={formHandler}>
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
                  onChange: changeHandler
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
          <Button modification="transparent" height="standard">
            Очистить
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ProductsSideBar;
