declare interface CardItemEntity {
  id: number;
  name: string;
  img: string;
  audioUrl: string;
}

declare interface CategoryItemEntity {
  id: number;
  name: string;
  img: string;
  cardList: CardItemEntity[]
}
