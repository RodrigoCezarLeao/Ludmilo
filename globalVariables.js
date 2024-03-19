custodian_rico = {
  id: "rico123",
  name: "Rico Corretora",
};

vale_history = {
  tick: "TAEE4",
  tradingHistory: [
    {
      operation: "buy",
      date: "2023-01-24",
      amount: 1,
      price: 94,
      description: "",
    },
    {
      operation: "dividends",
      date: "2023-03-22",
      amount: 1,
      price: 1.8276,
      description: "DATA COM: 13/03/2024",
    },
    {
      operation: "buy",
      date: "2023-05-11",
      amount: 29,
      price: 68.08,
      description: "",
    },
    {
      operation: "buy",
      date: "2023-06-01",
      amount: 2,
      price: 65.02,
      description: "",
    },
    {
      operation: "buy",
      date: "2023-08-01",
      amount: 1,
      price: 68.39,
      description: "",
    },
    {
      operation: "jscp",
      date: "2023-09-01",
      amount: 33,
      price: 1.9185,
      description: "DATA COM: 11/08/2023",
    },
    {
      operation: "jscp",
      date: "2023-12-01",
      amount: 33,
      price: 0.7658,
      description: "DATA COM: 21/11/2023",
    },
    {
      operation: "dividends",
      date: "2023-12-01",
      amount: 33,
      price: 1.5659,
      description: "DATA COM: 21/11/2023",
    },
  ],
};

wallet_example = {
  id: "123",
  title: "Pessoal",
  createdAt: "2024-03-19",
  content: [vale_history],
  custodian: [custodian_rico],
};

wallets = [wallet_example];
