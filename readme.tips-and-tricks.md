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

## Errors when using VSCode or GitHub Codespaces

If you're running the Medusa backend through tools like VSCode or GitHub Codespaces, you must ensure that:

1. Port forwarding is configured for ports `9000` and `7001`. Refer to the following resources on how to configure forwarded ports:

   - [Port forwarding local server with VSCode](https://code.visualstudio.com/docs/editor/port-forwarding)
   - [VSCode remote development: Developing on remote machines using SSH and Visual Studio Code](https://code.visualstudio.com/docs/remote/ssh#_forwarding-a-port-creating-ssh-tunnel)
   - [GitHub Codespaces: Forwarding ports](https://docs.github.com/en/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace)

2. If your tool or IDE exposes an address other than `localhost`, such as `127.0.0.1`, make sure to add that address to the [admin_cors](https://docs.medusajs.com/development/backend/configurations) Medusa configuration. Your tool will show you what the forwarded address is.

After setting these configurations, run your Medusa backend and try again. If you couldn't create an admin user before, run the following command in the root directory of your Medusa project to create an admin user:

```bash
npx medusa user -e admin@medusa-test.com -p supersecret
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
