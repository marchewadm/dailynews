# Daily News

Daily News is a mobile application built with Ionic Framework and Vue.js, designed for browsing news articles. It uses Firebase for user data storage, authentication, and saving user-selected articles. The app is available on both Android and iOS platforms.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Installing Dependencies](#installing-dependencies)
- [Before usage](#before-usage)
- [Usage](#usage)
  - [Running the project in browser](#running-the-project-in-browser)
  - [Running the project in emulator](#running-the-project-in-emulator)
    - [Building for Android](#building-for-android)
    - [Building for iOS](#building-for-ios)

## Prerequisites

- Project was developed using **Node v22.16.0**.

## Installation

Clone the repository:

```bash
git clone https://github.com/marchewadm/dailynews.git
cd dailynews
```
### Installing Dependencies

To install the required dependencies, run the following command in the project root directory:

    ```bash
    npm install
    ```

## Before usage

Before running application, make sure that `.env` file is created. To populate `.env` file, you can use the `.env.example` file as a template. Copy the content of `.env.example` file to `.env` and fill in the required values.

## Usage


### Running the project in browser

    ```bash
    ionic serve
    ```

    To allow the app to run on external devices (e.g., mobile phones), you can use the `--external` flag:
    
    ```bash
    ionic serve --external
    ```

### Running the project in emulator

First, you need to build the project. Use the following command to build the project:

    ```bash
    ionic build
    ```

#### Building for Android

Adding Android platform to the project can be done using the following command:

    ```bash
    npx cap add android
    ```

After adding the Android platform, you launch the Android Studio IDE to build the project:

    ```bash
    npx cap open android
    ```

#### Building for iOS

Adding iOS platform to the project can be done using the following command:

    ```bash
    npx cap add ios
    ```

After adding the iOS platform, you launch the Xcode IDE to build the project:

    ```bash
    npx cap open ios
    ```