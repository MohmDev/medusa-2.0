# Project usefull tips and tricks

## Useful commands

### create-medusa-app

```bash
npx create-medusa-app@preview --db-url "url" --seed
```

### Install Medusa CLI package globally

```bash
yarn global add @medusajs/medusa-cli@preview
npm i -g @medusajs/medusa-cli@preview
medusa --help
```

### Create Medusa user

```bash
npx medusa user --email admin@medusa-test.com --password supersecret
```

### Seed

```bash
medusa seed --seed-file=<file_path>
```

---

## Github Codespaces (General Linux Commands)

### Install Nixpacks in Github Codespaces

```bash
# Download the latest release
curl -LO https://github.com/railwayapp/nixpacks/releases/download/v1.28.1/nixpacks-v1.28.1-x86_64-unknown-linux-gnu.tar.gz

# Extract the downloaded file
tar -xzf nixpacks-v1.28.1-x86_64-unknown-linux-gnu.tar.gz

# Move the extracted binary to /usr/local/bin
sudo mv nixpacks /usr/local/bin/

# Clean up the downloaded file
rm nixpacks-v1.28.1-x86_64-unknown-linux-gnu.tar.gz

# Generate a new Nixpacks build configuration in toml format
nixpacks plan --format toml .
```

### Install railway CLI in Github Codespaces

```bash
# Download the latest release
curl -LO https://github.com/railwayapp/cli/releases/download/v3.13.0/railway-v3.13.0-x86_64-unknown-linux-gnu.tar.gz

# Extract the downloaded file
tar -xzf railway-v3.13.0-x86_64-unknown-linux-gnu.tar.gz

# Move the extracted binary to /usr/local/bin
sudo mv railway /usr/local/bin/

# Clean up the downloaded file
rm railway-v3.13.0-x86_64-unknown-linux-gnu.tar.gz

# Check the installation
railway --version
```
