const renderWallets = () => {
  // Remove from DOM all children of element given
  $("#wallets_navbar_list").empty();

  for (let wallet of wallets) {
    $("#wallets_navbar_list").append(
      `<li onclick='renderWalletContent("${wallet?.createdAt}")'>${wallet?.title}</li>`
    );
  }
};

const addNewWallet = () => {
  const newWallet = {
    createdAt: new Date().getTime().toString(),
    title: "New Wallet",
    content: [],
    custodian: [],
  };

  wallets.push(newWallet);
  renderWallets();
};

renderWallets();
