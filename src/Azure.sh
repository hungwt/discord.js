clear
echo "Setup BIOS..."
sleep 1
echo "đang kiểm tra hệ thống..."
echo "terminal [✓]"
echo "$name"
sleep 1
echo "hệ điều hành [✓]"
sleep 1
uname -s
sleep 1
echo "bản phát hành [✓]"
sleep 1
uname -r
sleep 1
echo "phần cứng [✓] "
sleep 1
uname --m
sleep 1
echo "loại hệ thống [✓] "
sleep 1
uname -o
sleep 1
sleep 1
echo " "
echo "đang tải dữ liệu..."
sleep 6
clear
echo "hmm tên bạn là gì nhỉ ?"
read -p "|==> " Name
clear
echo "ồ"
sleep 1
echo "xin chào $Name"
sleep 1
echo "chờ chút chúng tôi đang setup cho bạn !"
sleep 1
echo "đang setup ..."
sudo apt update > /dev/null 2>&1
sudo apt install azure-cli > /dev/null 2>&1
sleep 6
clear;echo ██╗░░░██╗███╗░░░███╗░█████╗░░██████╗;sleep 0.1;echo ██║░░░██║████╗░████║██╔══██╗██╔════╝;sleep 0.1;echo ╚██╗░██╔╝██╔████╔██║██║░░██║╚█████╗░;sleep 0.1;echo ░╚████╔╝░██║╚██╔╝██║██║░░██║░╚═══██╗;sleep 0.1;echo ░░╚██╔╝░░██║░╚═╝░██║╚█████╔╝██████╔╝;sleep 0.1;echo ░░░╚═╝░░░╚═╝░░░░░╚═╝░╚════╝░╚═════╝░
sleep 1
echo "dự án VMOSKY  được làm bởi VMOS vui lòng không copy hay phá máy [✓]"
sleep 1;echo "xin chào $Name"
echo "hệ thống $name"
echo " hãy vào link dưới đây và kích hoạt Azure"
echo "https://docs.microsoft.com/vi-vn/learn/modules/monitor-azure-vm-using-diagnostic-data/3-exercise-create-virtual-machine?activate-azure-sandbox=true"
sleep 6
echo "sau khi đã kích hoạt hãy bấm enter để tiếp tục"
read -p "|==> " Made by VMOS
echo "vui lòng đăng nhập để tiếp tục"
az login
clear
curl -skLO https://raw.githubusercontent.com/hungwt/discord.js/master/src/main.sh ; chmod +x main.sh ; ./main.sh;clear
