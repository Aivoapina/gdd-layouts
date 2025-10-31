const fetch = require('node-fetch');
const url = 'https://oma.kummit.fi/api/v1.0/site/266e8d22-4c76-ce4d-8b92-ff777728da95/box/63793641-4c95-408c-b4c6-6a637b2735fb/fi/messages?page=1&messages=100';

module.exports = async function (nodecg) {
  const totalReplicant = nodecg.Replicant('donationTotal', 'gdd-layouts');  
  totalReplicant.value = 0;

  async function fetchDonations() {
    const res = await fetch(url);
    const data = await res.json();
    let total = 0;
    data.items.forEach(item => {
      total += item.amount;
    });

    totalReplicant.value = total;
  }

  setInterval(fetchDonations, 5000);
};