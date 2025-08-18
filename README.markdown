# Email Filter Repository

This repository contains a simple JavaScript utility to filter out emails from free or disposable email providers. The list of free email providers is maintained in a JSON file, which can be easily updated without modifying the code.

## Files
- `freeEmailProviders.json`: A JSON file containing a list of free and disposable email provider domains.
- `emailFilter.js`: JavaScript code to fetch the email providers list and filter input emails.
- `.gitignore`: Specifies files and directories to ignore in version control.

## Usage
1. **Host the JSON File**: The `freeEmailProviders.json` is hosted in this repository. Use the raw URL (`https://raw.githubusercontent.com/atrealastralis/Email-Filter-Repository/main/freeEmailProviders.json`) to fetch it in your application.
2. **Integrate the Filter**: Use `emailFilter.js` in your project to filter emails. The script fetches the provider list and filters out emails from free or disposable domains.
3. **Update the List**: Modify `freeEmailProviders.json` to add or remove domains as needed. Push changes to the repository to update the hosted file.

## Example
```javascript
const input = { 'emails[]': 'test@gmail.com,test@company.com,test@yopmail.com' };
filterEmails(input).then(output => console.log(output));
// Output: { validEmails: ['test@company.com'] }
```

## Setup
1. Clone this repository:
   ```bash
   git clone https://github.com/atrealastralis/Email-Filter-Repository.git
   ```
2. Host the `freeEmailProviders.json` file by ensuring the repository is public.
3. Use the raw GitHub URL in your `emailFilter.js` fetch call.

## Contributing
- To add new email providers, update `freeEmailProviders.json` and submit a pull request.
- For code improvements, modify `emailFilter.js` and submit a pull request with a clear description of changes.

## License
This project is licensed under the MIT License. See the [LICENSE](#) file for details.