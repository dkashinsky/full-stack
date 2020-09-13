# Readme
Provided playbooks are tested on DigitalOcean's droplet running CentOS Linux 8 (Core). 
1. `server.yml` playbook basically automates proposed initial setup process (https://www.digitalocean.com/community/tutorials/initial-server-setup-with-centos-8).
2. `site.yml` playbook makes additional setup and configuration to run the app

# Initial server setup
1. Make sure the server is up and running and you have root access to it via ssh 
2. Rename `hosts.sample` file to the `hosts` file and use your server ip address instead of `127.0.0.1` in the `hosts` file
3. Install ansible on your control machine. 
4. Run the following command:

```sh
ansible-playbook -i hosts server.yml --ask-vault-pass
```

It will ask you for the vault password, create new user with sudo previleges and install firewall with default configuration (ssh connections allowed)
