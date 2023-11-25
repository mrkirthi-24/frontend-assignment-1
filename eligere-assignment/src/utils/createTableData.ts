export const createTableData = (
  tradeRef: string,
  yourRef: string,
  companyName: string,
  invoiceDate: string,
  currency: string,
  invoiceValue: number
) => {
  return {
    tradeRef,
    yourRef,
    companyName,
    invoiceDate,
    currency,
    invoiceValue,
  };
};

export const rowData = [
  createTableData(
    "TRF1",
    "Comp45",
    "Company name 01",
    "16/12/23",
    "USD",
    15234
  ),
  createTableData(
    "TRF2",
    "Comp45",
    "Company name 02",
    "16/12/23",
    "USD",
    10232
  ),
  createTableData(
    "TRF3",
    "Comp45",
    "Company name 03",
    "16/12/23",
    "USD",
    12030
  ),
  createTableData(
    "TRF4",
    "Comp45",
    "Company name 03",
    "16/12/23",
    "USD",
    12030
  ),
  createTableData(
    "TRF5",
    "Comp45",
    "Company name 03",
    "16/12/23",
    "USD",
    12030
  ),
  createTableData(
    "TRF6",
    "Comp45",
    "Company name 03",
    "16/12/23",
    "USD",
    12030
  ),
];
