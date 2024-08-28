# Medusa user

npx medusa user --email admin@medusa-test.com --password supersecret

---

# Nixpacks

```bash
# Download the latest release
curl -LO https://github.com/railwayapp/nixpacks/releases/download/v1.26.1/nixpacks-v1.26.1-x86_64-unknown-linux-gnu.tar.gz

# Extract the downloaded file
tar -xzf nixpacks-v1.26.1-x86_64-unknown-linux-gnu.tar.gz

# Move the extracted binary to /usr/local/bin
sudo mv nixpacks /usr/local/bin/

# Clean up the downloaded file
rm nixpacks-v1.26.1-x86_64-unknown-linux-gnu.tar.gz

# Generate a new Nixpacks build configuration in toml format
nixpacks plan --format toml .
```
