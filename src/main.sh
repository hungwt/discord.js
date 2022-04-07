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

clear

goto step1
: step1
clear

clear;echo ██╗░░░██╗███╗░░░███╗░█████╗░░██████╗;sleep 0.1;echo ██║░░░██║████╗░████║██╔══██╗██╔════╝;sleep 0.1;echo ╚██╗░██╔╝██╔████╔██║██║░░██║╚█████╗░;sleep 0.1;echo ░╚████╔╝░██║╚██╔╝██║██║░░██║░╚═══██╗;sleep 0.1;echo ░░╚██╔╝░░██║░╚═╝░██║╚█████╔╝██████╔╝;sleep 0.1;echo ░░░╚═╝░░░╚═╝░░░░░╚═╝░╚════╝░╚═════╝░;sleep 0.1
echo    1.  HK -  East Asia
echo    2.  US -  East US
echo    3.  EU -  West Europe 
echo    4.  JP -  Japan East
echo    5.  AU -  Australia
echo    6.  KR -  Korea South
echo Hãy chọn vùng chạy máy ảo AZURE nhập số từ 1 đến 6
read -p "|===> " ans
case $ans in
    1  )  echo "HK"; echo eastasia > vm  ;;
    2  )  echo "US"; echo eastus > vm  ;;
    3  )  echo "EU"; echo westeurope > vm  ;;
    4  )  echo "JP"; echo japaneast > vm  ;;
    5  )  echo "AU"; echo australiasoutheast > vm  ;;
    6  )  echo "KR"; echo koreasouth > vm  ;;
    ""     )  echo "Không có lựa chọn"; sleep 1; goto step1 ;;
    *      )  echo "Bạn không thể lựa chọn cái này hãy dùng số đánh dấu ở trên !"; sleep 5 ; goto step1 ;;
esac


goto step2
: step2
clear

clear;echo ██╗░░░██╗███╗░░░███╗░█████╗░░██████╗;sleep 0.1;echo ██║░░░██║████╗░████║██╔══██╗██╔════╝;sleep 0.1;echo ╚██╗░██╔╝██╔████╔██║██║░░██║╚█████╗░;sleep 0.1;echo ░╚████╔╝░██║╚██╔╝██║██║░░██║░╚═══██╗;sleep 0.1;echo ░░╚██╔╝░░██║░╚═╝░██║╚█████╔╝██████╔╝;sleep 0.1;echo ░░░╚═╝░░░╚═╝░░░░░╚═╝░╚════╝░╚═════╝░
echo nhập phiên bản máy ảo nhập số từ 1 đến 5
echo "1. Windows Server 2022 + VS Code + VS Studio"
echo "2. Windows 10 Enterprise + MS365 APP"
echo "3. Windows 11 Enterprise + MS365 APP"
echo "4. Windows 11 Azure Virtual Desktop"
echo "5. Windows 10 Azure Virtual Desktop"
read -p "|===> " ans
case $ans in
    1  )  echo "Windows Server 2022 + VS Code + VS Studio" > abc; echo MicrosoftVisualStudio:visualstudio2022:vs-2022-comm-latest-ws2022:2022.02.18 > win  ;;
    2  )  echo "Windows 10 Enterprise + MS365 APP" > abc; echo MicrosoftWindowsDesktop:windows-ent-cpc:win10-21h2-ent-cpc-m365:19044.1526.220208 > win  ;;
    3  )  echo "Windows 11 Enterprise + MS365 APP" > abc; echo MicrosoftWindowsDesktop:windows-ent-cpc:win11-21h2-ent-cpc-m365:22000.493.220208 > win  ;;
    4  )  echo "Windows 11 Azure Virtual Desktop" > abc; echo MicrosoftWindowsDesktop:windows-11:win11-21h2-avd:22000.556.220303 > win  ;;
    5  )  echo "Windows 10 Azure Virtual Desktop" > abc; echo MicrosoftWindowsDesktop:Windows-10:win10-21h2-avd:19044.1586.220303 > win  ;;
    ""     )  echo "Không có lựa chọn"; sleep 1; goto step2 ;;
    *      )  echo "Bạn không thể lựa chọn cái này hãy dùng số đánh dấu ở trên !"; sleep 1 ; goto step2 ;;
esac


goto step3
: step3
clear

clear;echo ██╗░░░██╗███╗░░░███╗░█████╗░░██████╗;sleep 0.1;echo ██║░░░██║████╗░████║██╔══██╗██╔════╝;sleep 0.1;echo ╚██╗░██╔╝██╔████╔██║██║░░██║╚█████╗░;sleep 0.1;echo ░╚████╔╝░██║╚██╔╝██║██║░░██║░╚═══██╗;sleep 0.1;echo ░░╚██╔╝░░██║░╚═╝░██║╚█████╔╝██████╔╝;sleep 0.1;echo ░░░╚═╝░░░╚═╝░░░░░╚═╝░╚════╝░╚═════╝░
echo "chọn cấu hình máy ảo của bạn số từ 1 đến 2 :)"
echo "1. Standard_DS2_v2 - 2CPU/7GB - Thích hợp nếu bạn muốn VM có hiệu suất cao nhất"
echo "2. Standard_D2s_v3 - 2CPU/8GB - Chậm hơn DS2_v2 nhưng có ảo hóa lồng nhau"
read -p "|===> " ans
case $ans in
    1  )  echo "OK"; echo "Standard_DS2_v2" > size ;;
    2  )  echo "OK"; echo "Standard_D2s_v3" > size  ;;
    ""     )  clear;echo "Không có lựa chọn"; sleep 1; goto step3 ;;
    *      )  clear;echo "Bạn không thể lựa chọn này hãy dùng số đánh dấu ở trên !"; sleep 1 ; goto step3 ;;
esac
goto begin
: begin
clear
clear;echo ██╗░░░██╗███╗░░░███╗░█████╗░░██████╗;sleep 0.1;echo ██║░░░██║████╗░████║██╔══██╗██╔════╝;sleep 0.1;echo ╚██╗░██╔╝██╔████╔██║██║░░██║╚█████╗░;sleep 0.1;echo ░╚████╔╝░██║╚██╔╝██║██║░░██║░╚═══██╗;sleep 0.1;echo ░░╚██╔╝░░██║░╚═╝░██║╚█████╔╝██████╔╝;sleep 0.1;echo ░░░╚═╝░░░╚═╝░░░░░╚═╝░╚════╝░╚═════╝░
echo "Đang setup..."

az group list | jq -r '.[0].name' > rs
rs=$(cat rs) 

az webapp list --resource-group $rs --output table |  grep -q haivm && goto checkwebapp

echo $RANDOM$RANDOM > number
NUMBER=$(cat number)
echo "haivm$NUMBER$NUMBER.azurewebsites.net/metrics" > site

location=$(cat vm)
echo "az appservice plan create --name myAppServicePlan$NUMBER$NUMBER --resource-group $rs --location $location --sku F1 --is-linux --output none && az webapp create --resource-group $rs --plan myAppServicePlan$NUMBER$NUMBER --name haivm$NUMBER$NUMBER --deployment-container-image-name docker.io/thuonghai2711/v2ray-azure-web:latest --output none" > webapp.sh 
nohup bash webapp.sh  &>/dev/null &

clear;echo ██╗░░░███╗░█████╗░░██████╗;sleep 0.1;echo ██║░░░██║████╗░████║██╔══██╗██╔════╝;sleep 0.1;echo ╚██╗░██╔╝██╔████╔██║██║░░██║╚█████╗░;sleep 0.1;echo ░╚████╔╝░██║╚██╔╝██║██║░░██║░╚═══██╗;sleep 0.1;echo ░░╚██╔╝░░██║░╚═╝░██║╚█████╔╝██████╔╝;sleep 0.1;echo ░░░╚═╝░░░╚═╝░░░░░╚═╝░╚════╝░╚═════╝░
goto checkvm
: checkvm
echo "⌛  Kiểm tra máy ảo..."
az vm list-ip-addresses -n Windows-VM-PLUS --output tsv > IP.txt 
[ -s IP.txt ] && bash -c "echo Bạn đã từng chạy một máy ảo trước đó ! && az vm list-ip-addresses -n Windows-VM-PLUS --output table" && goto ask

echo "🖥️  Đang tạo máy ảo"
location=$(cat vm)
image=$(cat win)
size=$(cat size)
rs=$(cat rs) && az vm create --resource-group $rs --name Windows-VM-PLUS --image $image --public-ip-sku Standard --size $size --location $location --admin-username azureuser --admin-password WindowsPassword@001 --nic-delete-option delete --os-disk-delete-option delete --out table


: test
clear
echo "⌛ Đang tạo kho dữ liệu (cần 1 đến 2 phút)"
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
if [ -s CF2 ]; then goto rdp; else echo -en "\r Kiểm tra .     $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra ..    $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra ...   $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra ....  $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra ..... $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra     . $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra  .... $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra   ... $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra    .. $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra     . $i 🌐 ";sleep 0.1 && goto pingcf; fi


goto rdp
: rdp

rs=$(cat rs)
echo "
"
echo "🔓 Đang mở port"
az vm open-port --resource-group $rs --name Windows-VM-PLUS --port '*' --output none

echo " Xong ! "
sleep 3
clear;echo ██╗░░░███╗░█████╗░░██████╗;sleep 0.1;echo ██║░░░██║████╗░████║██╔══██╗██╔════╝;sleep 0.1;echo ╚██╗░██╔╝██╔████╔██║██║░░██║╚█████╗░;sleep 0.1;echo ░╚████╔╝░██║╚██╔╝██║██║░░██║░╚═══██╗;sleep 0.1;echo ░░╚██╔╝░░██║░╚═╝░██║╚█████╔╝██████╔╝;sleep 0.1;echo ░░░╚═╝░░░╚═╝░░░░░╚═╝░╚════╝░╚═════╝░
IP=$(az vm show -d -g $rs -n Windows-VM-PLUS --query publicIps -o tsv)
echo "IP máy ảo: $IP"
echo "Tên đăng nhập: azureuser"
echo "Mật khẩu: WindowsPassword@001"
echo ""
echo "🔐 Đang Setup internet"

goto laststep
: laststep
URL=$(cat site)
CF=$(curl -s --connect-timeout 5 --max-time 5 $URL | grep -Eo "(http|https)://[a-zA-Z0-9./?=_%:-]*" | sort -u | sed s/'http[s]\?:\/\/'//)
echo -n $CF > CF
cat CF | grep trycloudflare.com > CF2
if [ -s CF2 ]; then echo OK; else echo -en "\r Kiểm tra .     $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra ..    $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra ...   $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra ....  $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra ..... $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra     . $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra  .... $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra   ... $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra    .. $i 🌐 ";sleep 0.1;echo -en "\r Kiểm tra     . $i 🌐 ";sleep 0.1 && goto laststep; fi
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
echo "Máy ảo $NAME Đã sẵn xàng hoạt động ! "

sleep 7200

: checkwebapp
rs=$(cat rs)
web=$(az webapp list --query "[].{hostName: defaultHostName, state: state}" --output tsv | grep haivm | cut -f 1)
echo $web/metrics > site
goto checkvm

#&& az webapp config appsettings set --resource-group $rs --name haivm$NUMBER$NUMBER --settings WEBSITES_PORT=8081 --output none

#&& az webapp config appsettings set --resource-group $rs --name haivm$NUMBER$NUMBER --settings WEBSITES_PORT=8081 --output none

: ask
      echo "       Bạn có muốn giữ lại máy ảo không ?"
      echo "y: Giữ trạng thái máy ảo hiện tại và xuất Tệp RDP"
      echo "n: Delete previous VM then re-create new one"
      echo "                    [y/n]"
while true
do 
      read -r -p "|===> " input
 
      case $input in
            [yY][eE][sS]|[yY])
                  goto test
                  break
                  ;;
            [nN][oO]|[nN])
                  echo "🖥️  Đang xóa máy ảo (1 đến 3 phút)"
                  rs=$(cat rs) 
                  #az vm delete --ids $(az vm list -g $rs --query "[].id" -o tsv) --yes
                  app=$(az appservice plan list --query "[].name" -o tsv)
                  web=$(az webapp list --query "[].repositorySiteName" --output tsv)
                  az webapp delete --name $web --resource-group $rs 
                  az appservice plan delete --name $app --resource-group $rs --yes
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
                  echo "Dọn dẹp...(120s)"
                  sleep 120

                  goto begin
                  break
                  ;;
            *)
                  echo "đầu vào không hợp lệ..."
                  ;;
      esac      
done
