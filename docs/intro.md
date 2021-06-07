---
sidebar_position: 1
---

# Intro

<a href="https://github.com/Jaspero/JMS" target="_blank">JMS</a> is a <a href="https://en.wikipedia.org/wiki/Content_management_system" target="_blank">Content management system</a> based on Angular that is fully configurable through JSON schemas.

<br /><br />

JMS is very opinionated especially when it comes to things like templating engines and email services, even though this should be easily interchangeable.


Currently it only supports <a href="https://firebase.google.com/docs/firestore" target="_blank">Firestore</a> as its back-end but other implementations are planned and instructions for writing your own integration can be found in the <a href="https://github.com/Jaspero/jms/wiki" target="_blank">wiki</a>.

## Getting Started

Get started by **generating a blank JMS project**.

## Install the Jaspero CLI

Before proceeding, make sure your computer has <a href="https://nodejs.org/" target="_blank">Node.js</a> installed.

Install the <a href="https://github.com/Jaspero/cli">Jaspero CLI</a> with npm:

```shell
npm install -g @jaspero/cli
```

:::caution
The `-g` option means install globally. When packages are installed globally, `EACCES` permission errors can occur.
Consider setting up npm to operate globally without elevated permissions.
:::


## Generate a new project

Get started with the command:

```shell
jaspero jms init
```

## Prerequisites

In your Firebase project:
- <a href="https://console.firebase.google.com/project/_/overview?purchaseBillingPlan=metered" target="_blank">Upgrade to Blaze Plan</a>
- &nbsp;<a href="https://console.firebase.google.com/project/_/authentication" target="_blank">Enable Authentication</a>
    - <a href="https://console.firebase.google.com/project/_/authentication/providers" target="_blank">Enable Email/Password Sign-in provider</a>
- <a href="https://console.firebase.google.com/project/_/firestore" target="_blank">Enable Firestore</a>
- <a href="https://console.firebase.google.com/project/_/storage" target="_blank">Enable Storage</a>


## Deploy

To ensure system works correctly, initial deploy is required for triggers and functions to take effect.

```shell
cd PROJECT_NAME
npm run deploy
```

Run the development server:

```shell
npm run start:cms
```

Your site starts at `http://localhost:4200`.
