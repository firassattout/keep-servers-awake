import axios from "axios";

async function pingServers() {
  console.log(`[${new Date().toISOString()}] Pinging servers...`);

  const res = await axios.get(
    "https://payment-package-1.onrender.com/api/clients/transactionsByProgrammName",
    { headers: { programmName: "s" } }
  );
  // const res2 = await axios.get(
  //   "https://payment-package-1.onrender.com/api/clients/getAllCodesAndProgramms"
  // );
  const res3 = await axios.get(
    "https://final-project-mob5.onrender.com/api/get-companyType"
  );
}

pingServers();
