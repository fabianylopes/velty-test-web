import pink from "../../src/assets/icons/dollar-pink.svg";
import blue from "../../src/assets/icons/dollar-blue.svg";
import green from "../../src/assets/icons/dollar-green.svg";

const balance = [
  {
    icon: pink,
    valor: 312.321,
    tipo: "Receita total",
    media: 67.2,
  },
  {
    icon: blue,
    valor: 74.421,
    tipo: "Lucro total",
    media: 42.3,
  },
  {
    icon: green,
    valor: 3.12,
    tipo: "Lucro por venda",
    media: 12.4,
  },
];

const planos = [
  {
    title: "Planos",
    subTitle: "123 planos ativos",
    data: [
      {
        clube: "Estagiários",
        clientes: 312,
        precoMedio: 123.9,
      },
      {
        clube: "Diretoria",
        clientes: 312,
        precoMedio: 123.9,
      },
      {
        clube: "Geral",
        clientes: 312,
        precoMedio: 123.9,
      },
      {
        clube: "Almoxarifado",
        clientes: 312,
        precoMedio: 123.9,
      },
    ],
  },
];

const categorias = [
  {
    title: "Categorias",
    subTitle: "4 categorias em uso",
    data: [
      {
        clube: "6 vendas",
        clientes: 312,
        precoMedio: 123.9,
      },
      {
        clube: "12 vendas",
        clientes: 312,
        precoMedio: 123.9,
      },
      {
        clube: "24 vendas",
        clientes: 312,
        precoMedio: 123.9,
      },
      {
        clube: "Personalizado",
        clientes: 312,
        precoMedio: 123.9,
      },
    ],
  },
];

const tiposDePlanos = [
  {
    title: "Tipos de planos",
    subTitle: "2 tipos em uso",
    data: [
      {
        clube: "Construtoras",
        clientes: 312,
        precoMedio: 123.9,
      },
      {
        clube: "Clientes finais",
        clientes: 312,
        precoMedio: 123.9,
      },
    ],
  },
];

const cotacoes = [
  {
    tipo: "Cotações realizadas",
    valor: 312.321,
    percentagem: "+15,3% (+223)",
  },
  {
    tipo: "Vendas finalizadas",
    valor: 212.012,
    percentagem: "+15,3% (+223)",
  },
  {
    tipo: "Cotações não concluídas",
    valor: 42.021,
    percentagem: "+15,3% (+223)",
  },
  {
    tipo: "Cotações não respondidas",
    valor: 3.122,
    percentagem: "+15,3% (+223)",
  },
];

const sales = [
  {
    title: "Clientes ativos",
    value: 3.312,
    percentage: "+2,6% (+12)",
  },
  {
    title: "Novos clientes",
    value: 12,
    percentage: "+15,3% (+2)",
  },
  {
    title: "Clientes adicionados",
    value: 42,
    percentage: "+42,6% (+8)",
  },
  {
    title: "LTV",
    value: "R$ 142,32",
    percentage: "-22,6% (+R$ 12,20)",
  },
  {
    title: "Turnover",
    value: "24,3%",
    percentage: "+42,6% (+8)",
  },
  {
    title: "Turnover recuperado",
    value: "54,42%",
    percentage: "+32,6% (+6)",
  },
];

export { balance, planos, categorias, tiposDePlanos, cotacoes, sales };
