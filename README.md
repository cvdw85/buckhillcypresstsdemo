# Launching Cypress

Simply type -npx cypress open- in the terminal and select -E2E Testing- by clicking on the related option card.
Next you may select any browser of your choice and then click on the -Start E2E Testing- Button.
Next you will find yourself in the -Specs- section. Simply click any test you would like to run to view the results.

## Special Note

Please do take a look at the bug I reported in an .md file you instructed me to call qa-1123.md
It is in the -bugs- folder you instructed me to create as well within this cypress project

## Personal Comments

Static ID's would be a charm.
Thanks for the fun challenge, I really enjoyed working on this!

## User Stories/Journeys

I read your documentation for this task many times over, but could never find where you would like me to save the test cases'
user stories, so I saved them within a folder in this cypress project called -userstories-. I hope that this is ok.

## Apologies

I do apologise for not using fixtures and docker. I know how to use them, but started coding on this today because I had
other tasks of a similar nature for other companies to make as well in the last two weeks.
I get the admin and client user tokens because you asked me to in the documentation, but I never use them for anything.
They are meant for API requests. For example:
```python
# GET purposes
cy.request({
  method: 'GET',
  url: 'https://your-api.com/some/endpoint',
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
}).then((response) => {
  // Assert the response or perform your tests
});


# POST purposes
// Example: Create a new resource
cy.request({
  method: 'POST',
  url: 'https://your-api.com/resource',
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
  body: {
    // Request payload
  },
}).then((response) => {
  // Assert the response or perform your tests
});
```
And last but not least, the simplicity of my tests.