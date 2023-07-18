# Automated Test Suite for Simply Health UI and Petstore API

This repository contains an automated test suite for UI testing of the [Simply Health](https://www.simplyhealth.co.uk/) website and API testing for the [Petstore API](https://petstore.swagger.io/v2/swagger.yaml) using Cypress. The test suite includes sample tests demonstrating key aspects of the setup.

## Project Setup

1. Install [Node.js](https://nodejs.org/en/download/) and [yarn](https://yarnpkg.com/) if they are not already installed on your machine.
2. Clone this repository.
3. Navigate to the project directory in your terminal and run `yarn install` to install the necessary dependencies.
4. Create a `cypress.env.json` file at the root of the project and add your sensitive test data (such as username and password).
5. Run the tests in interactive mode using the `yarn run cypress open` command or in headless mode using the `yarn run cypress run` command.

## Running Tests in CI/CD

Cypress supports headless execution, which allows this test suite to be run in a CI/CD pipeline. Use the `yarn run cypress run` command to run the tests in headless mode.

## Project Structure

- The `pages` directory contains page object files for different pages of the Simply Health website.
- The `journeys` directory contains different user journeys through the website.
- The `specs` directory contains the test specifications.
- The `fixtures` directory contains static data that can be used for testing.
