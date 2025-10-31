'use strict';
$(() => {
  const donations = $("#donations-container");

  const donationAmountReplicant = nodecg.Replicant(
    "donationTotal",
    'gdd-layouts'
  );

  donationAmountReplicant.on("change", (val) => {
    console.log(val);
    console.log("Donation total updated:", val);
    donations.html(parseInt(val) + "€");
  });
})