# Daily News

Daily News is a mobile application built with Ionic Framework and Vue.js, designed for browsing news articles. It uses Firebase for user data storage, authentication, and saving user-selected articles. The app is available on both Android and iOS platforms.

## Table Of Contents

- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Before Usage](#before-usage)
- [Installation](#installation)
  - [Cloning The Repository](#cloning-the-repository)
  - [Running The Project In Browser](#running-the-project-in-browser)
    - [Running The Project via Docker Compose (Recommended)](#running-the-project-via-docker-compose-recommended)
    - [Running The Project Without Docker](#running-the-project-without-docker)
  - [Running The Project In Emulator](#running-the-project-in-emulator)
    - [Building For Android](#building-for-android)
    - [Building For iOS](#building-for-ios)

## Demo

https://github.com/user-attachments/assets/2506e17d-8fce-45d5-8290-27139cb6ead6

## Prerequisites

- The project was developed using **Node v22.16.0**.
- **Docker** - optional but recommended for ease of running the app without installing dependencies globally.
- **Ionic CLI** - install globally if you are not using Docker.

## Before Usage

Before installing the application, make sure that a `.env` file is created. To populate the `.env` file, you can use the `.env.example` file as a template. Copy the contents of `.env.example` to `.env` and fill in the required values.

You can obtain the **Firebase configuration values** from your Firebase project settings. For the **News API key**, you can get it by signing up at [News API](https://newsapi.org/).

## Installation

### Cloning The Repository

Clone the repository:

```bash
git clone https://github.com/marchewadm/dailynews.git
cd dailynews
```

### Running The Project In Browser

#### Running The Project via Docker Compose (Recommended)

You can run the app using **Docker**, which eliminates the need to install dependencies globally. Follow these steps in the root directory of the project:

1. **Build Docker Image**

```bash
docker compose build
```

2. **Run The Container**

```bash
docker compose up -d
```

3. **Stop The Container**


```bash
docker compose down
```

#### Running The Project Without Docker

1. **Install Ionic CLI**

```bash
npm i -g @ionic/cli
```

2. **Install Dependencies**

```bash
npm install
```

3. **Run The Project**

```bash
ionic serve
```

To allow the app to run on external devices (e.g., mobile phones), you can use the `--external` flag:

```bash
ionic serve --external
```

### Running The Project In Emulator

First, you need to build the project:

```bash
ionic build
```

#### Building For Android

Adding Android platform to the project can be done using the following command:

```bash
npx cap add android
```

After adding the Android platform, launch Android Studio to build the project:

```bash
npx cap open android
```

#### Building for iOS

Adding iOS platform to the project can be done using the following command:

```bash
npx cap add ios
```

After adding the iOS platform, launch Xcode to build the project:

```bash
npx cap open ios
```
