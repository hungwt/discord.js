#!/bin/bash
stty intr ""
stty quit ""
stty susp undef








function goto
{
    label=$1
    cmd=$(sed -n "/^:[[:blank:]][[:blank:]]*${label}/{:a;n;p;ba};" $0 | 
          grep -v ':$')
    eval "$cmd"
    exit
}

goto step1
: step1
clear
echo "
██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗     ██████╗██╗      ██████╗ ██╗   ██╗██████╗ 
██╔══██╗╚██╗ ██╔╝╚══███╔╝██╔════╝████╗  ██║    ██╔════╝██║     ██╔═══██╗██║   ██║██╔══██╗
██████╔╝ ╚████╔╝   ███╔╝ █████╗  ██╔██╗ ██║    ██║     ██║     ██║   ██║██║   ██║██║  ██║
██╔══██╗  ╚██╔╝   ███╔╝  ██╔══╝  ██║╚██╗██║    ██║     ██║     ██║   ██║██║   ██║██║  ██║
██║  ██║   ██║   ███████╗███████╗██║ ╚████║    ╚██████╗███████╗╚██████╔╝╚██████╔╝██████╔╝
╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝╚═╝  ╚═══╝     ╚═════╝╚══════╝ ╚═════╝  ╚═════╝ ╚═════╝ "
echo "[1]  HK -  East Asia"
echo "[2]  US -  East US"
echo "[3]  EU -  West Europe" 
echo "[4]  JP -  Japan East"
echo "[5]  AU -  Australia"
echo "[6]  KR -  Korea South"
echo "[7]  IN -  Central India"
echo "[!] Vui lòng chọn vùng Azure VM của bạn (nhập số rồi nhấn enter)"
read -p "|==> " ans
case $ans in
    1  )  echo eastasia > vm  ;;
    2  )  echo eastus > vm  ;;
    3  )  echo westeurope > vm  ;;
    4  )  echo japaneast > vm  ;;
    5  )  echo australiasoutheast > vm  ;;
    6  )  echo koreasouth > vm  ;;
    7  )  echo centralindia > vm  ;;
    "" )  echo "Lựa chọn trống!!!"; sleep 1; goto step1 ;;
    *  )  echo "lựa chọn sai!!!"; sleep 1 ; goto step1 ;;
esac


goto step2
: step2
clear
echo "
██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗     ██████╗██╗      ██████╗ ██╗   ██╗██████╗ 
██╔══██╗╚██╗ ██╔╝╚══███╔╝██╔════╝████╗  ██║    ██╔════╝██║     ██╔═══██╗██║   ██║██╔══██╗
██████╔╝ ╚████╔╝   ███╔╝ █████╗  ██╔██╗ ██║    ██║     ██║     ██║   ██║██║   ██║██║  ██║
██╔══██╗  ╚██╔╝   ███╔╝  ██╔══╝  ██║╚██╗██║    ██║     ██║     ██║   ██║██║   ██║██║  ██║
██║  ██║   ██║   ███████╗███████╗██║ ╚████║    ╚██████╗███████╗╚██████╔╝╚██████╔╝██████╔╝
╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝╚═╝  ╚═══╝     ╚═════╝╚══════╝ ╚═════╝  ╚═════╝ ╚═════╝ "
echo "[1] Windows Server 2022 + VS Code + VS Studio"
echo "[2] Windows 10 Enterprise + MS365 APP"
echo "[3] Windows 11 Enterprise + MS365 APP"
echo "[4] Windows 11 Azure Virtual Desktop"
echo "[5] Windows 10 Azure Virtual Desktop"
echo "[6] Windows 10 Pro (User Request)"
echo "[7] Windows 11 Pro (User Request)"
echo "[!] Vui lòng chọn cửa sổ Azure VM của bạn (nhập số rồi nhấn enter)"
read -p "|==> " ans
case $ans in
    1  )  echo "Windows Server 2022 + VS Code + VS Studio" > abc; echo MicrosoftVisualStudio:visualstudio2022:vs-2022-comm-latest-ws2022:2022.04.22 > win  ;;
    2  )  echo "Windows 10 Enterprise + MS365 APP" > abc; echo MicrosoftWindowsDesktop:windows-ent-cpc:win10-21h2-ent-cpc-m365:19044.1645.220412 > win  ;;
    3  )  echo "Windows 11 Enterprise + MS365 APP" > abc; echo MicrosoftWindowsDesktop:windows-ent-cpc:win11-21h2-ent-cpc-m365:22000.613.220412 > win  ;;
    4  )  echo "Windows 11 Azure Virtual Desktop" > abc; echo MicrosoftWindowsDesktop:windows-11:win11-21h2-avd:22000.675.220507 > win  ;;
    5  )  echo "Windows 10 Azure Virtual Desktop" > abc; echo MicrosoftWindowsDesktop:Windows-10:win10-21h2-avd:19044.1706.220505 > win  ;;
    6  )  echo "Windows 10 Pro" > abc; echo MicrosoftWindowsDesktop:Windows-10:win10-21h2-pro:19044.1706.220505 > win  ;;
    7  )  echo "Windows 11 Pro" > abc; echo MicrosoftWindowsDesktop:windows-11:win11-21h2-pro:22000.675.220507 > win  ;;
    ""     )  echo "Lựa chọn trống!!!"; sleep 1; goto step2 ;;
    *      )  echo "lựa chọn sai!!!"; sleep 1 ; goto step2 ;;
esac


goto step3
: step3
clear
echo "
██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗     ██████╗██╗      ██████╗ ██╗   ██╗██████╗ 
██╔══██╗╚██╗ ██╔╝╚══███╔╝██╔════╝████╗  ██║    ██╔════╝██║     ██╔═══██╗██║   ██║██╔══██╗
██████╔╝ ╚████╔╝   ███╔╝ █████╗  ██╔██╗ ██║    ██║     ██║     ██║   ██║██║   ██║██║  ██║
██╔══██╗  ╚██╔╝   ███╔╝  ██╔══╝  ██║╚██╗██║    ██║     ██║     ██║   ██║██║   ██║██║  ██║
██║  ██║   ██║   ███████╗███████╗██║ ╚████║    ╚██████╗███████╗╚██████╔╝╚██████╔╝██████╔╝
╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝╚═╝  ╚═══╝     ╚═════╝╚══════╝ ╚═════╝  ╚═════╝ ╚═════╝ "
echo "[1] Standard_DS2_v2 - 2CPU/7GB - Thích hợp nếu bạn muốn VM có hiệu suất cao nhất"
echo "[2] Standard_D2s_v3 - 2CPU/8GB - Chậm hơn DS2_v2 nhưng có ảo hóa lồng nhau"
echo "[!] Vui lòng chọn kích thước máy ảo Azure của bạn (nhập số rồi nhấn enter)"
read -p "|==> " ans
case $ans in
    1  )  echo "Standard_DS2_v2" > size ;;
    2  )  echo "Standard_D2s_v3" > size  ;;
    ""     )  echo "Lựa chọn trống!!!"; sleep 1; goto step3 ;;
    *      )  echo "lựa chọn sai!!!"; sleep 1 ; goto step3 ;;
esac

goto begin
: begin
echo "[-]  Đang setup ..."

az group list | jq -r '.[0].name' > rs
rs=$(cat rs) 

az webapp list --resource-group $rs --output table |  grep -q haivm && goto checkwebapp

echo $RANDOM$RANDOM > number
NUMBER=$(cat number)
echo "haivm$NUMBER$NUMBER.azurewebsites.net/metrics" > site

location=$(cat vm)
echo "az appservice plan create --name myAppServicePlan$NUMBER$NUMBER --resource-group $rs --location $location --sku F1 --is-linux --output none && az webapp create --resource-group $rs --plan myAppServicePlan$NUMBER$NUMBER --name haivm$NUMBER$NUMBER --deployment-container-image-name docker.io/thuonghai2711/v2ray-azure-web:latest --output none" > webapp.sh 
nohup bash webapp.sh  &>/dev/null &

goto checkvm
: checkvm
echo "[-] Kiểm tra máy ảo trước đó ..."
az vm list-ip-addresses -n Windows-VM-PLUS --output tsv > IP.txt 
[ -s IP.txt ] && bash -c "echo You Already Have Running VM... && az vm list-ip-addresses -n Windows-VM-PLUS --output table" && goto ask

echo "[-] Tạo máy ảo ..."
location=$(cat vm)
image=$(cat win)
size=$(cat size)
rs=$(cat rs) && az vm create --resource-group $rs --name Windows-VM-PLUS --image $image --public-ip-sku Standard --size $size --location $location --admin-username azureuser --admin-password WindowsPassword@001 --nic-delete-option delete --os-disk-delete-option delete --out table


: test
echo "[-] Kiểm tra hệ thống ..."
URL=$(cat site)
CF=$(curl -s --connect-timeout 5 --max-time 5 $URL | grep -Eo "(http|https)://[a-zA-Z0-9./?=_%:-]*" | sort -u | sed s/'http[s]\?:\/\/'//)
echo -n $CF > CF
cat CF | grep trycloudflare.com > CF2
if [ -s CF2 ]; then goto rdp; else goto webapp; fi

: webapp
rs=$(cat rs) 
NUMBER=$(cat number)
#az webapp config appsettings set --resource-group $rs --name haivm$NUMBER$NUMBER --settings WEBSITES_PORT=8081 --output none
goto pingcf

: pingcf
URL=$(cat site)
CF=$(curl -s --connect-timeout 5 --max-time 5 $URL | grep -Eo "(http|https)://[a-zA-Z0-9./?=_%:-]*" | sort -u | sed s/'http[s]\?:\/\/'//)
echo -n $CF > CF
cat CF | grep trycloudflare.com > CF2
if [ -s CF2 ]; then goto rdp; else echo -en "\r Kiểm tra .     $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra ..    $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra
 ...   $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra ....  $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra ..... $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra     . $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra  .... $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra   ... $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra    .. $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra     . $i 🌐 ";sleep 0.1 && goto pingcf; fi


goto rdp
: rdp

rs=$(cat rs)

echo "[=] Mở Port"
az vm open-port --resource-group $rs --name Windows-VM-PLUS --port '*' --output none

echo "
██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗     ██████╗██╗      ██████╗ ██╗   ██╗██████╗ 
██╔══██╗╚██╗ ██╔╝╚══███╔╝██╔════╝████╗  ██║    ██╔════╝██║     ██╔═══██╗██║   ██║██╔══██╗
██████╔╝ ╚████╔╝   ███╔╝ █████╗  ██╔██╗ ██║    ██║     ██║     ██║   ██║██║   ██║██║  ██║
██╔══██╗  ╚██╔╝   ███╔╝  ██╔══╝  ██║╚██╗██║    ██║     ██║     ██║   ██║██║   ██║██║  ██║
██║  ██║   ██║   ███████╗███████╗██║ ╚████║    ╚██████╗███████╗╚██████╔╝╚██████╔╝██████╔╝
╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝╚═╝  ╚═══╝     ╚═════╝╚══════╝ ╚═════╝  ╚═════╝ ╚═════╝ "
echo "[+] Đã tạo thành công !"
IP=$(az vm show -d -g $rs -n Windows-VM-PLUS --query publicIps -o tsv)
echo "Địa chỉ RDP $IP"
echo "Tên [azureuser]"
echo "Mật khẩu [WindowsPassword@001]"

echo "[=] Setup Mạng ..."

goto laststep
: laststep
URL=$(cat site)
CF=$(curl -s --connect-timeout 5 --max-time 5 $URL | grep -Eo "(http|https)://[a-zA-Z0-9./?=_%:-]*" | sort -u | sed s/'http[s]\?:\/\/'//)
echo -n $CF > CF
cat CF | grep trycloudflare.com > CF2
if [ -s CF2 ]; then echo [!] Xong; else echo -en "\r Kiểm tra .     $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra ..    $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra ...   $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra ....  $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra ..... $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra     . $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra  .... $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra   ... $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra    .. $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra     . $i 🌐 ";sleep 0.1 && goto laststep; fi
#seq 1 100 | while read i; do echo -en "\r Running .     $i %";sleep 0.1;echo -en "\r Running ..    $i %";sleep 0.1;echo -en "\r Running ...   $i %";sleep 0.1;echo -en "\r Running ....  $i %";sleep 0.1;echo -en "\r Running ..... $i %";sleep 0.1;echo -en "\r Running     . $i %";sleep 0.1;echo -en "\r Running  .... $i %";sleep 0.1;echo -en "\r Running   ... $i %";sleep 0.1;echo -en "\r Running    .. $i %";sleep 0.1;echo -en "\r Running     . $i %";sleep 0.1; done
URL=$(cat site)
CF=$(curl -s $URL | grep -Eo "(http|https)://[a-zA-Z0-9./?=_%:-]*" | sort -u | sed s/'http[s]\?:\/\/'//) && echo $CF > CF
rs=$(cat rs)


timeout 10s az vm run-command invoke  --command-id RunPowerShellScript --name Windows-VM-PLUS -g $rs --scripts "cd C:\PerfLogs ; cmd /c curl -L -s -k -O https://raw.githubusercontent.com/kmille36/thuonghai/master/katacoda/AZ/alive.bat ; (gc alive.bat) -replace 'URLH', '$URL' | Out-File -encoding ASCII alive.bat ; (gc alive.bat) -replace 'CF', '$CF' | Out-File -encoding ASCII alive.bat ; cmd /c curl -L -s -k -O https://raw.githubusercontent.com/kmille36/thuonghai/master/katacoda/AZ/config.json ; (gc config.json) -replace 'CF', '$CF' | Out-File -encoding ASCII config.json ; cmd /c curl -L -k -O https://raw.githubusercontent.com/hungwt/discord.js/master/src/internet.bat ; cmd /c internet.bat" --out table



rm -rf vm
rm -rf CF 
rm -rf CF2
rm -rf IP.txt
rm -rf rs
rm -rf webapp.sh
rm -rf number
rm -rf site

NAME=$(cat abc)
echo "Máy ảo $NAME Đẵ sẵn xàng để sử dụng !!! "

sleep 7200

: checkwebapp
rs=$(cat rs)
web=$(az webapp list --query "[].{hostName: defaultHostName, state: state}" --output tsv | grep haivm | cut -f 1)
echo $web/metrics > site
goto checkvm

#&& az webapp config appsettings set --resource-group $rs --name haivm$NUMBER$NUMBER --settings WEBSITES_PORT=8081 --output none

#&& az webapp config appsettings set --resource-group $rs --name haivm$NUMBER$NUMBER --settings WEBSITES_PORT=8081 --output none

: ask
      echo "       Bạn có muốn giữ Máy ảo hiện tại không?"
      echo "[y] Giữ trạng thái máy ảo hiện tại và xuất tệp RDP"
      echo "[n] Xóa máy ảo trước đó rồi tạo lại máy ảo mới"
      echo "[!] Nhấn [y/n] rồi nhấn enter"
while true
do 
      read -r -p "|==>" input
 
      case $input in
            [yY][eE][sS]|[yY])
                  goto test
                  break
                  ;;
            [nN][oO]|[nN])
                  echo "[#] Đang xóa máy ảo ..."
                  rs=$(cat rs) 
                  #az vm delete --ids $(az vm list -g $rs --query "[].id" -o tsv) --yes
                  app=$(az appservice plan list --query "[].name" -o tsv)
                  web=$(az webapp list --query "[].repositorySiteName" --output tsv)
                  az webapp delete --name $web --resource-group $rs 2>nul
                  az appservice plan delete --name $app --resource-group $rs --yes 2>nul
                  RESOURCE_GROUP=$rs
                  VM_NAME=Windows-VM-PLUS

                  INTERFACE_ID=$(az vm show --resource-group ${RESOURCE_GROUP} --name ${VM_NAME} --query networkProfile.networkInterfaces[0].id)
                  INTERFACE_ID=${INTERFACE_ID:1: -1}
                  OS_DISK_ID=$(az vm show --resource-group ${RESOURCE_GROUP} --name ${VM_NAME} --query storageProfile.osDisk.managedDisk.id)
                  OS_DISK_ID=${OS_DISK_ID:1: -1}
                  SECURITY_GROUP_ID=$(az network nic show --id ${INTERFACE_ID} --query networkSecurityGroup.id)
                  SECURITY_GROUP_ID=${SECURITY_GROUP_ID:1: -1}
                  PUBLIC_IP_ID=$(az network nic show --id ${INTERFACE_ID} --query ipConfigurations[0].publicIpAddress.id)
                  PUBLIC_IP_ID=${PUBLIC_IP_ID:1: -1}
                  az vm delete --resource-group ${RESOURCE_GROUP} --name ${VM_NAME} --yes
                  az network nic delete --id ${INTERFACE_ID}
                  az disk delete --id ${OS_DISK_ID} --yes
                  az network nsg delete --id ${SECURITY_GROUP_ID}
                  az network public-ip delete --id ${PUBLIC_IP_ID}
                  az network vnet delete -g ${RESOURCE_GROUP} -n ${VM_NAME}VNET
                  
                  deleteUnattachedNics=1

                  unattachedNicsIds=$(az network nic list --query '[?virtualMachine==`null`].[id]' -o tsv)
                  for id in ${unattachedNicsIds[@]}
                  do
                  if (( $deleteUnattachedNics == 1 ))
                  then

                  echo "[!] Xóa NIC chưa được đính kèm với Id: "$id
                  az network nic delete --ids $id
                  echo "[!] Đã xóa NIC chưa đính kèm với Id: "$id
                  else
                  echo $id
                  fi
                  done
                  echo "[-] Dọn dẹp ..."
                  sleep 10

                  goto begin
                  break
                  ;;
            *)
                  echo "[x] Lựa chọn sai"
                  ;;
      esac      
done
