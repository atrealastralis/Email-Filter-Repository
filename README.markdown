# Email Filter Repository for Zapier

This repository provides a JavaScript utility for filtering out emails from free or disposable email providers, designed for use in Zapier’s Code by Zapier action. The list of free email providers is hosted in a JSON file, making it easy to update without modifying the code.

## Files
- `freeEmailProviders.json`: A JSON file containing a list of free and disposable email provider domains.
- `emailFilter.js`: JavaScript code for Zapier to fetch the email providers list and filter input emails.
- `.gitignore`: Specifies files and directories to ignore in version control.

## Zapier Setup
1. **Host the JSON File**: The `freeEmailProviders.json` is hosted at `https://raw.githubusercontent.com/atrealastralis/Email-Filter-Repository/main/freeEmailProviders.json`. Ensure the repository remains public for accessibility.
2. **Add Code to Zapier**:
   - Create a Zap with a **Code by Zapier** action (JavaScript).
   - Copy the contents of `emailFilter.js` into the Code action.
   - In the Zapier input fields, map the email list to the `emails` key (e.g., pass a comma-separated string like `test@gmail.com,test@company.com,test@yopmail.com`).
3. **Output**: The code returns an object with `validEmails` (array of non-free emails) or an `error` message if the fetch fails.

## Example Input/Output in Zapier
- **Input**:
  ```json
  {
    "emails": "test@gmail.com,test@company.com,test@yopmail.com"
  }
  ```
- **Output**:
  ```json
  {
    "validEmails": ["test@company.com"]
  }
  ```
  If an error occurs:
  ```json
  {
    "validEmails": [],
    "error": "Failed to fetch email providers"
  }
  ```

## Setup
1. Clone this repository (optional, for local editing):
   ```bash
   git clone https://github.com/atrealastralis/Email-Filter-Repository.git
   ```
2. Ensure `freeEmailProviders.json` is hosted in the public repository.
3. Copy `emailFilter.js` into your Zapier Code action.
4. Update `freeEmailProviders.json` in the repository to modify the email provider list.

## Contributing
- To update email providers, edit `freeEmailProviders.json` and submit a pull request.
- For improvements to `emailFilter.js`, submit a pull request with a clear description.

## License
This project is licensed under the MIT License. See the [LICENSE](#) file for details.