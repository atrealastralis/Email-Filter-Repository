const fetch = require('node-fetch');

async function run() {
  try {
    // Fetch the free email providers list from the hosted JSON file
    const response = await fetch('https://raw.githubusercontent.com/atrealastralis/Email-Filter-Repository/main/freeEmailProviders.json');
    const freeEmailProviders = await response.json();

    // Get the list of emails from inputData (Zapier provides this)
    const emails = (inputData.emails || '').split(',');

    // Filter out emails that belong to free/temp/disposable providers
    const filteredEmails = emails.filter(email => {
      const domain = email.split('@')[1]?.toLowerCase().trim();
      return domain && !freeEmailProviders.includes(domain);
    });

    // Return the output for Zapier
    return { validEmails: filteredEmails };
  } catch (error) {
    // Return error for Zapier to handle
    return { validEmails: [], error: 'Failed to fetch email providers' };
  }
}

// Execute the function (Zapier expects this)
run();