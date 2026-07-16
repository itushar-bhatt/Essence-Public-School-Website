# How to Install Node.js and npm

Since npm is not installed on your system, here's how to install it:

## Option 1: Install Node.js (Recommended)

### For Ubuntu/Debian/Linux Mint:

```bash
# Update package list
sudo apt update

# Install Node.js and npm
sudo apt install nodejs npm

# Verify installation
node --version
npm --version
```

### For Windows:

1. Go to https://nodejs.org/
2. Download the LTS version (recommended)
3. Run the installer
4. Follow the installation wizard
5. Restart your computer

### For macOS:

```bash
# Using Homebrew
brew install node

# Or download from https://nodejs.org/
```

## Option 2: Use a Pre-built Static Version (No npm needed)

If you can't install Node.js, I can create a **static HTML/CSS/JavaScript version** of the website that:

- ✅ Works without any installation
- ✅ Just open `index.html` in your browser
- ✅ Same premium design and animations
- ✅ All sections included
- ✅ Fully responsive

## Option 3: Use an Online Code Editor

You can run the project online without installing anything:

1. Go to https://codesandbox.io/
2. Create a new sandbox
3. Select "Next.js" template
4. Copy the project files there
5. It will run automatically

## Option 4: Use GitHub Codespaces

1. Push this project to GitHub
2. Open it in GitHub Codespaces
3. It provides a full development environment in the browser
4. No local installation needed

## After Installing Node.js

Once Node.js and npm are installed:

```bash
# Navigate to the project folder
cd /home/tushar/Desktop/school

# Install dependencies
npm install

# Run development server
npm run dev
```

## Verify Installation

Run these commands to verify everything is installed correctly:

```bash
node --version  # Should show v18.0.0 or higher
npm --version   # Should show 9.0.0 or higher
```

## Need Help?

If you're having trouble installing Node.js, let me know and I can:
1. Create a static HTML version that works without npm
2. Provide more detailed installation instructions for your specific operating system
3. Help you set up an online development environment

**Which option would you prefer?**