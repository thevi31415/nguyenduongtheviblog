import { google } from "googleapis";
export const getSheetsData = async () => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  const authClient = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: authClient as any });
  const range = "Sheet1!A:Z";

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range,
    });
    return extractFData(response.data.values);
  } catch (error) {
    console.error("Error feting sheets " + error);
    return [];
  }
};
const extractFData = (data: any) => {
  const personnalInfo = { name: data[1][0], summary: data[1][1] };
  return [personnalInfo];
};
