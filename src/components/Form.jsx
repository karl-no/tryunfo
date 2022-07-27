import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      onInputChange,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <h2>Adicionar nova carta</h2>
        <form className="form">
          <label
            htmlFor="nameInput"
            className="name"
            placeholder="Digite aqui o nome..."
          >
            Nome
            <br />
            <input
              data-testid="name-input"
              id="nameInput"
              type="text"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <br />

          <label htmlFor="descriptionInput" className="description">
            Descrição
            <br />
            <input
              data-testid="description-input"
              id="descriptionInput"
              type="textarea"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <br />

          <label htmlFor="PrimeiroAtributo">
            Atributo 1
            <input
              data-testid="attr1-input"
              id="PrimeiroAtributo"
              type="number"
              name="cardAttr1"
              max={ 90 }
              min={ 0 }
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <br />

          <label htmlFor="SegundoAtributo">
            Atributo 2
            <input
              data-testid="attr2-input"
              id="PrimeiroAtributo"
              type="number"
              name="cardAttr2"
              max={ 90 }
              min={ 0 }
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <br />

          <label htmlFor="TerceiroAtributo">
            Atributo 3
            <input
              data-testid="attr3-input"
              id="TerceiroAtributo"
              type="number"
              name="cardAttr3"
              max={ 90 }
              min={ 0 }
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <br />

          <label htmlFor="ImageUpload">
            Imagem
            <input
              data-testid="image-input"
              id="ImageUpload"
              type="text"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <br />

          <label htmlFor="selectRaridade">
            Raridade
            <br />
            <select
              data-testid="rare-input"
              id="selectRaridade"
              placeholder="Selecione o nível de raridade"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <br />

          <label htmlFor="checkboxTrunfo">
            <input
              data-testid="trunfo-input"
              id="checkboxTrunfo"
              type="checkbox"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            Super Trybe Trunfo
          </label>
          <br />

          <button
            data-testid="save-button"
            type="reset"
            name="cardSalvar"
            id="buttonSalvar"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
