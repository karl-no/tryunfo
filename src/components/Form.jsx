import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <h2>Adicionar nova carta</h2>
        <form className="form">

          <label htmlFor="nameInput" className="name" placeholder="Digite aqui o nome...">
            Nome
            <br />
            <input
              data-testid="name-input"
              id="nameInput"
              type="text"
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
            />
          </label>
          <br />

          <label htmlFor="PrimeiroAtributo">
            Atributo 1
            <input
              data-testid="attr1-input"
              id="PrimeiroAtributo"
              type="number"
            />
          </label>
          <br />

          <label htmlFor="SegundoAtributo">
            Atributo 2
            <input
              data-testid="attr2-input"
              id="PrimeiroAtributo"
              type="number"
            />
          </label>
          <br />

          <label htmlFor="TerceiroAtributo">
            Atributo 3
            <input
              data-testid="attr3-input"
              id="TerceiroAtributo"
              type="number"
            />
          </label>
          <br />

          <label htmlFor="ImageUpload">
            Imagem
            <input
              data-testid="image-input"
              id="ImageUpload"
              type="text"
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
            />
            Super Trybe Trunfo
          </label>
          <br />

          <button data-testid="save-button" type="button">Salvar</button>

        </form>
      </div>
    );
  }
}

export default Form;
