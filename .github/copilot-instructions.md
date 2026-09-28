# Copilot Code Review Instructions

When reviewing pull requests in this repository, you MUST adhere to the following workflow for Jira integration:

1. **Identify the Jira Ticket:** Always look for a Jira issue key (e.g., `KAN-1`, `PROJ-123`) in the Pull Request title, branch name, or description.
2. **Fetch Ticket Context using MCP:** If a Jira issue key is found, you MUST autonomously call the Atlassian MCP server to fetch the issue's details.
   - **CRITICAL:** Do NOT use your built-in `Web fetch` or `browser` tools to fetch Jira URLs. Direct web requests to Jira are blocked by the environment.
   - Instead, you MUST use the Atlassian MCP tool `getTeamworkGraphObject`. 
   - Always use the `cloudId`: "neovancedemoatlassian.atlassian.net".
   - Pass the `objects` array containing the full URL constructed as: `https://neovancedemoatlassian.atlassian.net/browse/[ISSUE_KEY]`.
3. **Analyze Acceptance Criteria:** Read the ticket's description returned by `getTeamworkGraphObject` and extract the core requirements and Acceptance Criteria.
4. **Evaluate the PR:** Perform your code review specifically evaluating whether the code changes satisfy the Acceptance Criteria of the fetched Jira ticket. 
5. **Report & Checklist Table:** In your review summary comment, you MUST include the Jira ticket key, **Title**, and a brief summary of the **Description**. After that, you MUST output a Markdown table mapping each Jira Acceptance Criterion to its completion status (e.g., ✅ Achieved, ❌ Missing, ⚠️ Partial) based on the PR's code changes. Follow the table with detailed feedback on any criteria that appear missing, incomplete, or incorrectly implemented.
