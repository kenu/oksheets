// https://www.npmjs.com/package/google-spreadsheet
const { GoogleSpreadsheet } = require('google-spreadsheet');

const sheetdb = {
  getSheet: async function (info) {
    const doc = new GoogleSpreadsheet(info.sheetId);
    // const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n');
    // const ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const PRIVATE_KEY = '-----BEGIN PRIVATE KEY-----\nxxxxxxxxxxSCBKgwggSkAgEAAoIBAQCwwIcNtQ4BZCWd\n7iN3VTKwhyBkPOrHVnA/Le0Ru4VH4Ojz9xxxxxxxxx+BJh+L4t\nIfidoTBNrt8m5J0ec6z7rhwsvKm/qfXQNGIPlSkMFxR17bu9mXgxjavCVfQ4n34C\nK5dt5BL0yfOmjYFp0X1A9kggepjAnKgnhSfSjoDVP/u4NFIXpgA1N4ILTpRXTIvM\n1GknGiLlmwaYwfkGbVSz1B7r0Ec9ITWsFxBf7J1vBHRrppX7hgWqcBKgbFkzKCLJ\nPq0LFgmypc5xQwAIQ0JDwrMv4x2/aFr1HV/CaPBH5pxiYeKQzKg59s5UKigjBw2b\nvxw5thHZAgMBAAECggEAAkPuGdvqUn7+DZlBNoeJYz0QykFuyRAs7Ihfh5jG92dU\n66yDVA6h9VsWeJ6DlAcka1n0EPm6GEFGhGBRNgmm9iCXGayNgs0yKEB15Lu5yWa0\nS3SiavH11oLKDLgNGLve8B6mrF0q6JoLChwqKuVvj0LdMYh9LOtQuZyLyzEbDwE6\n4A/+MrlLqd8yRckMDyJ7RbGAOtkWpGB1EtZW5IZLSy6UL7Fdk4kAvGnHnxh4V5Ph\nVNsdtZWKM/PonSrkpBw2X/HnQZBr9thVLgmSK4/T0eF6BC6sGayZhsMayWtXX0IL\n2mRVDUysY8SaFDqcp/wt1pkaBQLvTaQ3P9ypGjD2kQKBgQDeZv6S5cmDjDOzINgm\njFE0E5VLX7NRM16zlewKIDn05CYWJ2goohIRhH+mavEvZ7BfwAKzu1xOwHafLuAp\nzNFWoSVvx2aToojk+O/8AHo1TuyXyVML3OAcNmnJNr640N8BEFEAaJLJXXeYN05O\nNiZUqPRmyItVIk25c7uLyOGhCQKBgQDLdBedQLzLdD30zvxqeeIQg2JCWUU98cAR\nJLYJzpMgYwy4YfGc0DkyeR6KPm10pjIxjM1KddTbsbueOjHtcepq/2cy0GJADgYB\n2a3VQbkpkyPndFWcxUofBVhXHTtd7gPtMjF8lQJGOVxbcxXZe8frHwqFewyjdbOi\nfFZsdW6uUQKBgQC1o56lMQEs7BPJZ7jBevZTNu9G2Qll9zOQLpDSEFHlXXRxwYuD\nLCLfpbxvmYYT9naJLRPH4OzZ8Lyw86Lm4L3UJ9agfVWcnDF7+Ihf46/r2+LFcQrf\ndGyg/hvV111bKlQH1WCimcXQqgKkEf9lRzp1CGxbicyqIlMidJAm8VC9qQKBgQCT\nrGsrf/7JKlGCLO84FcnJtKOQhx1kLeH8T4o2KhPOcTadarIl4Vly0kkhjNiDz9Ik\n9w9XWZmr8SC+Y30z3PiKu2Fbl7eIyOUBWM/9N5w/mgZ4jI9LoEQBqi6J5LTfo9CD\nzWfwBnRFJoNr+WfFmTvt5HUNl9f/mYJOkTNlvAMfUQKBgBgzHQTJuUTZiIXCquwV\nYo6HRpWdvYAwBcRjUBqxMMvx5TatwBevR4yZxH4I1sqLR8p4i0IC6yK7NjRhyxXW\npG7Pia28LM3gr5FJApk8xxxxxxxJEaWHeKGIzo8kURe/dPJ\n2xxxxxxxxm4qYL\n-----END PRIVATE KEY-----\n';
    const ACCOUNT_EMAIL = 'oksheets@oksheets.iam.gserviceaccount.com';
    await doc.useServiceAccountAuth({
      client_email: ACCOUNT_EMAIL,
      private_key: PRIVATE_KEY,
    });
    await doc.loadInfo(); // loads document properties and worksheets

    // const sheet = doc.sheetsByIndex[info.index]; // or use doc.sheetsById[id]
    const sheet = doc.sheetsById[info.id]; // or use doc.sheetsById[id]
    return sheet;
  }
}

module.exports = sheetdb;
