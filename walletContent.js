const renderWalletContent = (walletCreatedAt) => {
  const wallet = wallets.find((w) => w.createdAt === walletCreatedAt);
  console.log(
    "🚀 ~ file: walletContent.js:3 ~ renderWalletContent ~ wallet:",
    wallet
  );

  $("main").append(`<div>
    <h2>${wallet.title}</h2>

    <table>
        <thead>
            <th>Ativo</th>
            <th>Data Ex</th>
            <th>Qntd</th>
            <th>Preço</th>
            <th>Total</th>
            <th>Tipo</th>
        </thead>

        <tbody>
            ${createWalletHistoryHtml(wallet.content)}
            ${createTableFooterHtml(wallet.content)}
        </tbody>
    </table>
  </div>`);
};

const getRecordSimpleValue = (trade) => {
  if (trade.operation === "buy") return -trade.price;

  if (trade.operation === "jscp") return trade.price * 0.85;

  return trade.price;
};

const createWalletHistoryHtml = (content) => {
  let html = "";

  for (let tick of content) {
    for (let trade of tick.tradingHistory) {
      simpleValue = getRecordSimpleValue(trade);
      html += `<tr>
                <td>${tick.tick}</td>
                <td>${trade.date}</td>
                <td>${trade.amount}</td>
                <td>${simpleValue.toFixed(2)}</td>
                <td>${(simpleValue * trade.amount).toFixed(2)}</td>
                <td>${trade.operation}</td>
            </tr>`;
    }
  }

  return html;
};

const createTableFooterHtml = (content) => {
  let html = "";
  let total = 0;

  for (let tick of content) {
    for (let trade of tick.tradingHistory) {
      simpleValue = getRecordSimpleValue(trade);
      total += simpleValue * trade.amount;
    }
  }

  html += `<tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>${total.toFixed(2)}</td>
                <td></td>
            </tr>`;

  return html;
};
