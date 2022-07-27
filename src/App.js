import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cardCollection: [],
      hasTrunfo: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.isItTrunfo = this.isItTrunfo.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => {
      this.saveButton();
    });
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, cardCollection } = this.state;

    const carta = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState({ cardCollection: [...cardCollection, carta] }, () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        hasTrunfo: false,
        isSaveButtonDisabled: true,
      });
      this.isItTrunfo();
    });
  }

  attrMax = () => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const maxPointsAttr = 90;
    if (cardAttr1 > maxPointsAttr || cardAttr1 < 0) {
      return false;
    }
    if (cardAttr2 > maxPointsAttr || cardAttr2 < 0) {
      return false;
    }
    if (cardAttr3 > maxPointsAttr || cardAttr3 < 0) {
      return false;
    }
    return true;
  }

  saveButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const maxTotalSum = 210;
    const attrTotal = parseFloat(cardAttr1)
      + parseFloat(cardAttr2) + parseFloat(cardAttr3);

    const notAllowed = (
      cardName.length === 0
      || cardDescription.length === 0
      || cardImage.length === 0
      || cardRare.length === 0);

    if (maxTotalSum < attrTotal || notAllowed || !this.attrMax()) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
  }

  isItTrunfo() {
    const { cardCollection } = this.state;
    const hasTrunfo = cardCollection.some((carta) => carta.cardTrunfo);
    this.setState({ hasTrunfo });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
