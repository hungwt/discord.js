echo $(hostname -I | cut -d\  -f1) $(hostname) | sudo tee -a /etc/hosts
sudo apt update
sudo apt upgrade -y
sudo apt install azure-cli
clear
