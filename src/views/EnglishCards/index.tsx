import React from 'react';
import EnglishCardItem from './components/CardItem';

import data from '../../config/data';
import { EP_BABYBUS_HOST } from '../../config/endpoints';

import './index.scss';

export default function EnglishCards () {
  return (
    <div className="english-cards-box">
      {
        data.list.map(category => (
          <div key={ category.id } className="category-box">
            <div className="category-title">
              <img src={ `${ EP_BABYBUS_HOST }${ category.img }` } alt=""/>
            </div>
            <div className="card-list">
              {
                category.cardList.map(card => (
                  <EnglishCardItem key={ card.id } card={ card } />
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  );
}