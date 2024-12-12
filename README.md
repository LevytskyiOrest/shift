# Shift Project Setup Instructions

Follow the steps below to clone the repository, install dependencies, and run the project locally.

## Steps to Setup

### 1. Clone the Repository

Run the following command to clone the repository to your local machine:

```bash
git clone <repository-url>
```

Replace `<repository-url>` with the actual URL of the repository.

### 2. Navigate to the Project Directory

Change to the directory of the cloned repository:

```bash
cd <project-folder>
```

Replace `<project-folder>` with the name of the cloned folder.

### 3. Install Dependencies

Install all the required packages using npm:

```bash
npm install
```

### 4. Run the Project

Start the development server with the following command:

```bash
npm run dev
```

## Project Approach

This project was developed with the following key features:

1. **Drag & Drop Functionality**:

   - Users can drag and drop items between different days and users.
   - Implemented using the `dnd-kit` library for a seamless and customizable experience.

2. **Right-Click Context Menu**:

   - Items have a right-click feature that opens a context menu with two actions: Edit and Delete.
   - This functionality was custom-built without using any additional libraries.

3. **Modals**:
   - Modals are triggered by selecting an option in the context menu (Edit).
   - Each modal displays detailed information about the selected item.
   - These modals were also created without relying on external libraries.
