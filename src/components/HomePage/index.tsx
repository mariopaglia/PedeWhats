import { useState } from 'react';

import mocks from '@/constants/mocks';

import createMessage from '@/services/createMessage';
import { Container, Copywright, FormWrapper, RadioItem } from './styles';

export interface FormData {
  nome: string;
  telefone: string;
  sabor: string;
  tipoPagamento: 'pix' | 'cartao' | 'dinheiro';
}

const HomePage = (): JSX.Element => {
  const [formData, setFormData] = useState({} as FormData);

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();

    const url = createMessage(formData);

    window.open(url, '_blank');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmitForm}>
        <h1>Faça seu pedido abaixo:</h1>
        <label htmlFor='nome'>Seu nome</label>
        <input
          type='text'
          name='nome'
          value={formData['nome']}
          placeholder='Digite seu nome'
          onChange={handleChange}
          required
        />
        <label htmlFor='telefone'>Telefone da pizzaria</label>
        <input
          type='text'
          name='telefone'
          value={formData['telefone']}
          placeholder='DDD + Telefone'
          onChange={handleChange}
          maxLength={12}
          required
        />
        <label>A pizza tem mais de um sabor?</label>
        <RadioItem>
          <input type='radio' id='sim' name='maisSabor' value='sim' />
          <label htmlFor='sim'>Sim</label>
        </RadioItem>
        <RadioItem>
          <input type='radio' id='nao' name='maisSabor' value='nao' />
          <label htmlFor='nao'>Não</label>
        </RadioItem>
        <label htmlFor='sabor'>Selecione o sabor da pizza</label>
        <select name='sabor' onChange={handleChange}>
          <option value='' selected disabled>
            Selecione o sabor
          </option>
          {mocks.sabores.map((sabor, index) => (
            <option key={index} value={sabor}>
              {sabor}
            </option>
          ))}
        </select>

        <label>Forma de pagamento</label>
        <RadioItem>
          <input
            type='radio'
            name='tipoPagamento'
            value='dinheiro'
            onChange={handleChange}
            checked={formData['tipoPagamento'] === 'dinheiro'}
          />
          <label htmlFor='tipoPagamento'>Dinheiro</label>
        </RadioItem>
        <RadioItem>
          <input
            type='radio'
            name='tipoPagamento'
            value='pix'
            onChange={handleChange}
            checked={formData['tipoPagamento'] === 'pix'}
          />
          <label htmlFor='tipoPagamento'>Pix</label>
        </RadioItem>
        <RadioItem>
          <input
            type='radio'
            name='tipoPagamento'
            value='cartao'
            onChange={handleChange}
            checked={formData['tipoPagamento'] === 'cartao'}
          />
          <label htmlFor='tipoPagamento'>Cartão</label>
        </RadioItem>

        <button type='submit'>Enviar pedido</button>
      </FormWrapper>
      <Copywright>
        <p>
          <a href='https://github.com/mariopaglia/PedeWhats' target='_blank' rel='noreferrer'>
            &copy; PedeWhats - {new Date().getFullYear()}
          </a>
        </p>
      </Copywright>
    </Container>
  );
};

export default HomePage;
