# Copilot Code Review Instructions & Repository Guide

## 1. Project Overview & High-Level Details
- **Repository Purpose**: A React frontend application testing UI components (like MUI, AG-Grid, and React Select) potentially within a Shadow DOM environment.
- **Project Type**: Frontend Web Application
- **Core Stack**: React 19, TypeScript, Vite, SWC.
- **Testing Framework**: Vitest, React Testing Library, jsdom.
- **UI Libraries**: Material-UI (MUI), Emotion, AG-Grid, React-Select.
- **Package Manager**: `pnpm` (based on `pnpm-lock.yaml`, though `npm` works for basic scripts).

## 2. Build & Validation Instructions
Always follow these steps when building, testing, or validating the project:

- **Install Dependencies**: Always run `pnpm install` before building or testing.
- **Run Development Server**: `pnpm run dev` (starts the Vite dev server).
- **Run Tests**: `pnpm run test` (runs Vitest in run mode).
- **Build**: `pnpm run build` (runs `tsc -b` and `vite build`). 
- **Lint**: `pnpm run lint` (runs ESLint).

### Known Build Issues & Workarounds
If you encounter TypeScript compilation errors during `npm run build` or `pnpm run build`:
1. **Vitest Globals Issue**: The project uses `globals: true` in `vite.config.ts`. If TypeScript complains about missing `describe`, `it`, or `expect` in `src/App.test.tsx`, ensure `/// <reference types="vitest/globals" />` is at the top of the test file, or that `tsconfig.json` includes `"types": ["vitest/globals"]`.
2. **Vite Config Typing**: If `vite.config.ts` complains about the `test` property, ensure `/// <reference types="vitest" />` is properly resolving at the top of the config file.
3. **Pre-existing Compile Errors**: The file `src/TransfarebleList.tsx` contains pre-existing TypeScript compilation errors. When generating code, ignore unrelated errors in this file unless the Pull Request is specifically tasked with fixing them.

## 3. Project Layout & Architecture
- `vite.config.ts`: Configuration for the Vite bundler and Vitest test runner. Configured to output a single entry JS file (`internal-app.js`).
- `src/main.tsx`: The main entry point of the React application.
- `src/App.tsx`: The root component.
- `src/setupTests.ts`: Global test setup file (used by Vitest for DOM matchers).
- `src/TransfarebleList.tsx`, `src/AgGridTest.tsx`, `src/SelectTest.tsx`: UI component tests and examples using external libraries.
- `tsconfig.app.json`, `tsconfig.node.json`, `tsconfig.json`: TypeScript configuration files split for Vite's dual-environment setup.

## 4. Jira Integration (Mandatory for PR Reviews)
When reviewing pull requests in this repository, you MUST adhere to the following workflow:

1. **Identify the Jira Ticket:** Always look for a Jira issue key (e.g., `KAN-1`) in the Pull Request title, the branch name, or the Pull Request description.
2. **Fetch Ticket Context:** If a Jira issue key is found, you MUST autonomously call the Atlassian MCP server to fetch the issue's details.
3. **Analyze Acceptance Criteria:** Read the ticket's description and extract the core requirements and Acceptance Criteria.
4. **Evaluate the PR:** Perform your code review specifically evaluating whether the code changes satisfy the Acceptance Criteria of the fetched Jira ticket.
5. **Report:** In your review summary, explicitly mention which Jira ticket you evaluated against, and highlight any criteria that appear to be missing.

> **Note to Agent:** Trust these instructions completely. Only perform exploration searches if these instructions are demonstrably incomplete for a specific novel task.
