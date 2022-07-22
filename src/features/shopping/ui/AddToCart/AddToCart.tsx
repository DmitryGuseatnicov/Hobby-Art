import { AsyncDispatch } from 'entities/store';
import { userModel } from 'entities/user';
import { addToCart } from 'features/shopping/actions';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'shared/ui';

interface IAddToCard {
  count: number;
  hasIcon: boolean;
  productId: string;
  children: any;
}
const AddToCart: FC<IAddToCard> = (props) => {
  const { count, hasIcon, productId, children } = props;

  const { id: userId } = userModel.useUser();

  const dispatch = useDispatch<AsyncDispatch>();

  const add = () => {
    dispatch(addToCart({ count, productId, userId }));
  };

  return (
    <div className="add-to-card">
      <div className="add-to-card__button">
        {hasIcon ? (
          <Button modification="with-icon" height="standard" icon="basket" onClick={add}>
            {children}
          </Button>
        ) : (
          <Button modification={hasIcon ? 'with-icon' : 'pink'} height="standard" onClick={add}>
            {children}
          </Button>
        )}
      </div>
    </div>
  );
};

export { AddToCart };
