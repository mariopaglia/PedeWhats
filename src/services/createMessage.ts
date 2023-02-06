import { FormData } from '@/components/HomePage';

const createMessage = (data: FormData) => {
  const { nome, telefone, tipoPagamento, sabor } = data;

  const message = `Oi, sou o ${nome} e gostaria de uma pizza sabor ${sabor} e vou pagar com ${tipoPagamento}`;

  return `https://wa.me/${telefone}?text=${message}`;
};

export default createMessage;
