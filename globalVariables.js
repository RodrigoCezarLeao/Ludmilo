wallets = ["Pessoal", "Canal", "Família"];

const renderWallets = () => {
    for(let wallet of wallets)
        $("#wallets_navbar_list").append(`<li>${wallet}</li>`);
}

renderWallets();