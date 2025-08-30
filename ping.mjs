import axios from "axios";

async function pingServers() {
  console.log(`[${new Date().toISOString()}] Pinging servers...`);

  const res = await axios.get(
    "https://payment-package-1.onrender.com/api/clients/transactionsByProgrammName",
    { headers: { programmName: "s" } }
  );
  const response = await axios.get(
    "https://projectone-wqlf.onrender.com/api/clients/getCodeByMerchantNumber",
    {
      headers: {
        "Content-Type": "application/json",
        merchantMSISDN: "+963981922672",
      },
      timeout: 50000,
    }
  );
  const res3 = await axios.get(
    "https://final-project-mob5.onrender.com/api/get-companyType"
  );
}

pingServers();
