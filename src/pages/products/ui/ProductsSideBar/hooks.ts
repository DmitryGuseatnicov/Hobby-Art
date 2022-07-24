/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { productModel } from 'entities/product';
import { AsyncDispatch } from 'entities/store';

import { getProductsByParams } from '../../actions';

type ParamsForFilter = {
  [x: string]: string[];
};

const createParamsForFilter = (filters: productModel.IFilters[]): ParamsForFilter => {
  return filters.reduce<any>((prev, next) => {
    return { ...prev, [next.key]: [] };
  }, {});
};

const useHandlers = () => {
  const { category = '' } = useParams();
  const filters = productModel.useFilters(category);
  const [params, setParams] = useState(createParamsForFilter(filters));
  const dispatch = useDispatch<AsyncDispatch>();

  const handlePageOnLoad = () => {
    setParams(createParamsForFilter(filters));
    dispatch(getProductsByParams({ category }));
  };

  const handleClearButtonClick = () => {
    handlePageOnLoad();
  };

  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: key, value } = e.target;

    if (!params[key].includes(value)) {
      setParams({ ...params, [key]: [...params[key], value] });
      return;
    }
    setParams({ ...params, [key]: params[key].filter((el: string) => el !== value) });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
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

  return {
    handleCheckBoxChange,
    handleFormSubmit,
    handleClearButtonClick,
    handlePageOnLoad,
    params,
    filters
  };
};

export { useHandlers };
