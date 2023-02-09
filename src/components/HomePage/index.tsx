import Head from 'next/head';
import { Container, Copywright, FormWrapper, RadioItem } from './styles';

const HomePage = (): JSX.Element => {
  const mockSabores = [
    '',
    'Calabresa',
    'Mussarela',
    'Portuguesa',
    'Frango com catupiry',
    'Marguerita',
    'Quatro queijos',
    'Atum',
    'Bacon',
    'Brócolis',
    'Camarão',
  ];

  const handleSubmitForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log('Acionar função de enviar pedido');
  };

  return (
    <>
      <Head>
        <title>PedeWhats - Peça sua comida pelo Whatsapp</title>
      </Head>

      <Container>
        <FormWrapper>
          <h1>Faça seu pedido abaixo:</h1>
          <label htmlFor='nome'>Seu nome</label>
          <input type='text' placeholder='Digite seu nome' id='nome' />
          <label htmlFor='telefone'>Telefone da pizzaria</label>
          <input type='text' placeholder='DDD + Telefone' id='telefone' />

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
          <select>
            {mockSabores.map((sabor, index) => (
              <option key={index} value={sabor}>
                {sabor}
              </option>
            ))}
          </select>

          <label>Forma de pagamento</label>
          <RadioItem>
            <input type='radio' id='dinheiro' name='pagamento' value='dinheiro' />
            <label htmlFor='dinheiro'>Dinheiro</label>
          </RadioItem>
          <RadioItem>
            <input type='radio' id='pix' name='pagamento' value='pix' />
            <label htmlFor='pix'>Pix</label>
          </RadioItem>
          <RadioItem>
            <input type='radio' id='cartao' name='pagamento' value='cartao' />
            <label htmlFor='cartao'>Cartão</label>
          </RadioItem>

          <button type='submit' onClick={handleSubmitForm}>
            Enviar pedido
          </button>
        </FormWrapper>
        <Copywright>
          <a href='https://github.com/mariopaglia/PedeWhats' target='_blank' rel='noreferrer'>
            &copy; PedeWhats - {new Date().getFullYear()}
          </a>
        </Copywright>
      </Container>
    </>
  );
};

export default HomePage;
