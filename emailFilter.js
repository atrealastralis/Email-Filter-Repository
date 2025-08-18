// Fetch the list of free email providers from GitHub repository
const freeEmailProvidersUrl = 'https://raw.githubusercontent.com/atrealastralis/Email-Filter-Repository/f246f1366d6bd260a020914d8549d3032e739281/freeEmailProviders.json';
let freeEmailProviders;

try {
  const response = await fetch(freeEmailProvidersUrl);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  
  const data = await response.json();
  // Make sure we're accessing the correct property from the JSON
  freeEmailProviders = new Set(data.domains || data);
  
  // Debug log to verify domains are loaded
  console.log('Loaded domains:', freeEmailProviders.size);
  if (freeEmailProviders.has('gmail.com')) {
    console.log('gmail.com is in the blocked list');
  }
} catch (error) {
  console.error('Failed to load free email providers:', error);
  // Fallback to a basic set if the fetch fails
  freeEmailProviders = new Set(['gmail.com', 'yahoo.com', 'hotmail.com']);
}

// Function to validate email format
const isValidEmail = email => {
  const trimmed = email?.trim();
  return trimmed &&
         trimmed.includes('@') &&
         !trimmed.startsWith('@') &&
         !trimmed.endsWith('@') &&
         trimmed.split('@').length === 2;
};

// Get the list of emails from input data and split them into an array
const emails = (inputData['emails[]'] || '').split(',');

// Filter emails into valid and invalid arrays
const validEmails = [];
const invalidEmails = [];

emails.forEach(email => {
  email = email.trim();
  if (!email) {
    invalidEmails.push({ email, reason: 'Empty email' });
    return;
  }
  if (!isValidEmail(email)) {
    invalidEmails.push({ email, reason: 'Invalid email format' });
    return;
  }
  const domain = email.split('@')[1]?.toLowerCase().trim();
  if (!domain) {
    invalidEmails.push({ email, reason: 'No domain specified' });
    return;
  }
  if (freeEmailProviders.has(domain)) {
    invalidEmails.push({ email, reason: `Blocked domain: ${domain}` });
  } else {
    validEmails.push(email);
  }
});

// Assign to existing output variable
output = {
  validEmails,
  invalidEmails,
  message: validEmails.length === 0 ? 'No valid emails found. All emails are either invalid or from blocked domains.' : undefined
};