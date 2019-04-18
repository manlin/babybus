import React from 'react';
import { EP_BABYBUS_HOST } from '../../../../config/endpoints';


interface Props {
  card: CardItemEntity;
}

interface States {
  isAnimated: boolean;
}

class CardItem extends React.Component<Props, States> {

  state = {
    isAnimated: false
  }

  handleClick = () => {
    if (this.state.isAnimated === true) return;
    this.setState({ isAnimated: true });
    let audio = new Audio(`${EP_BABYBUS_HOST}${ this.props.card.audioUrl }`);
    audio.play();

    setTimeout(() => {
      this.setState({ isAnimated: false });
    }, 1000)
  }

  render () {
    const { card } = this.props;
    const { isAnimated } = this.state;

    return (
      <div className={ `card-item${ isAnimated ? ' tada animated' : '' }` } onClick={ this.handleClick } >
        <img src={ `${ EP_BABYBUS_HOST }${ card.img }` } alt=""/>
      </div>
    );
  }
}

export default CardItem;