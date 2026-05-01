# Mountain Bike Maintenance Tracker

A web application to track and manage maintenance for your mountain bikes. Organize your bikes, parts, and service history all in one place, ensuring your rides are always smooth and trouble-free.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
  - [Register/Login](#registerlogin)
  - [Builds (Bikes)](#builds-bikes)
  - [Parts](#parts)
  - [Maintenance](#maintenance)
- [Future Improvements](#future-improvements)

---

## Features

- Add and manage multiple bikes.
- Track individual parts for each bike.
- Log maintenance services for each part.
- Intuitive, user-friendly interface styled with Tailwind CSS.
- Responsive design for use on desktop and mobile devices.

---

## Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Express.js
- **Database:** PostgreSQL, Sequelize ORM

---

## Setup and Installation

### Prerequisites

- Node.js and npm
- Docker

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mountain-bike-maintenance.git
   cd mountain-bike-maintenance
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start & Initialize the database:

   ```bash
   npm run rundb
   npm run initdb
   ```

    > Only use `rundb` the first use. Use `startdb` afterwards. Using `rundb` after
    > the initial use will remove the original docker container and create a new
    > one.

4. Seed the database:

   ```bash
   npm run seeddb
   ```

5. Start the server:

   ```bash
   npm run dev
   ```

6. Open the app in your browser:
   - Once the server starts, a link to the app (e.g., `Server running on http://localhost:8080`) will be printed to the console.
   - If using VSCode, hover the cursor over the url and follow the instructions in the window that appears.
   - Alternatively, copy the URL and paste it into your browser's address bar.

7. Cleanup database after dev:

   ```bash
   npm run stopdb
   npm run rmdb # to delete all data
   ```

---

## Usage

### Register/Login

- Create a new user or login if already registered.

  <img src=./src/assets/img/login_page.png width=500px>

### Builds (Bikes)

- Navigate to builds page to view bikes and associated parts (click the build name or caret to expand details).

  <img src=./src/assets/img/build_page.png width=500px>

- **Add build:**

  1. Click the "+ Build" button.
  2. Give the build a name and leave checkbox marked to have new parts made for the build.
     > Only uncheck box if you are reusing parts you have already created or are removing parts from other builds.
  3. Click "submit" button.

  <img src=./src/assets/img/build_add_modal.png width=500px>

- **Edit build name:**

  1. Click build's "pencil" icon.
  2. Provide new name in the modal.
  3. Click "submit" button.

- **Delete build:**
  1. Click build's "trashcan" icon.
  2. To additionally delete build's parts, click the checkbox. Otherwise, leave unchecked.
  3. Click "delete" button in the modal. **Once submitted, this action cannot be undone.**

### Parts

- Navigate to parts page to view user's parts.

  <img src=./src/assets/img/parts_page.png width=500px>

- **Add part:**

  1. Click "+ Part" button to bring up modal.
  2. Fill name input field.
  3. Choose a build in "installed on" dropdown.
  4. Choose a "part category" and "part type" (in that order) from the dropdowns.
  5. Fill optional input fields. Optional fields may be helpful when searching for service manuals or maintenance instructions in the future.

  <img src=./src/assets/img/part_add_modal.png width=500px>

- **Edit part:**

  1. Click part's "pencil" icon.
  2. Change values in dropdowns or input fields.
  3. Confirm changes by clicking "submit" button.

- **Remove part** (from a build)

  1. Click part's "pencil" icon.
  2. Change value of "installed on" dropdown to "not installed".
  3. Confirm changes by clicking "submit" button.

- **Swap part** (from one build to another)

  1. Click part's "pencil" icon.
  2. Change value of "installed on" dropdown to the name of build it will be moved to.
  3. Confirm changes by clicking "submit" button.

- **Delete part:**
  1. Click part's "trashcan" icon.
  2. Confirm by clicking "delete" button.

### Maintenance

- Navigate to maintenance page to view user's service logs.

  <img src=./src/assets/img/maintenance_page.png width=500px>

- **Add a service:**

  1. Click "+ Service" button.
  2. Choose a "build", "category", and "part" (in that order) from the dropdowns.
  3. Add a date, and any other notes that would be helpful to remember in the future.
  4. Click "submit" button.

  <img src=./src/assets/img/maintenance_add_modal.png width=500px>

- **Edit service:**

  1. Click service's "pencil" icon.
  2. Change values in dropdowns or input fields.
  3. Confirm changes by clicking "submit" button.

- **Delete service:**
  1. Click service's "trashcan" icon.
  2. Confirm by clicking "delete" button.

---

## Future Improvements

- Add notifications for scheduled maintenance.
- Include analytics for bike and part usage.
- Enable exporting service history to a PDF or CSV.
- Allow image uploads for bikes and parts.

---
