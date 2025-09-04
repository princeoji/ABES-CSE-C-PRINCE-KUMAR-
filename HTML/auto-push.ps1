# This PowerShell script will automatically add, commit, and push all changes in the current directory to the main branch.
# Usage: Right-click and run with PowerShell, or run from the terminal.

$commitMessage = "Auto commit and push"
git add .
git commit -m $commitMessage
git push origin main

