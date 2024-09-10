## Medusa user

npx medusa user --email admin@medusa-test.com --password supersecret

---

## Install Nixpacks in Github Codespaces

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

## Install railway CLI in Github Codespaces

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
