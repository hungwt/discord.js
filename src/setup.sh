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

goto start
: start
clear
curl -skLO https://raw.githubusercontent.com/hungwt/hungwt/main/unlock
key=$(cat unlock)
clear;echo ██╗░░░██╗███╗░░░███╗░█████╗░░██████╗;sleep 0.1;echo ██║░░░██║████╗░████║██╔══██╗██╔════╝;sleep 0.1;echo ╚██╗░██╔╝██╔████╔██║██║░░██║╚█████╗░;sleep 0.1;echo ░╚████╔╝░██║╚██╔╝██║██║░░██║░╚═══██╗;sleep 0.1;echo ░░╚██╔╝░░██║░╚═╝░██║╚█████╔╝██████╔╝;sleep 0.1;echo ░░░╚═╝░░░╚═╝░░░░░╚═╝░╚════╝░╚═════╝░

echo "Nhập Key vào sever VMOS Ryzen gõ .key để lấy key"
read -p "|===> " ans
case $ans in
    $key  )  echo "Đang mở khóa ..."; rm unlock ;;
    ""     )  echo "Không có lựa chọn"; rm unlock; sleep 2; goto start ;;
    *      )  echo "Lỗi sai key"; rm unlock; sleep 2 ; goto start ;;
esac

echo LOADING [██ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ];sleep 0.1;clear
echo LOADING [████ㅤㅤㅤㅤㅤㅤㅤㅤㅤ];sleep 0.1;clear
echo LOADING [██████ㅤㅤㅤㅤㅤㅤㅤㅤ];sleep 0.1;clear
echo LOADING [████████ㅤㅤㅤㅤㅤㅤㅤ];sleep 0.1;clear
echo LOADING [██████████ㅤㅤㅤㅤㅤㅤ];sleep 0.1;clear
echo LOADING [████████████ㅤㅤㅤㅤㅤ];sleep 0.1;clear
echo LOADING [██████████████ㅤㅤㅤㅤ];sleep 0.1;clear
echo LOADING [████████████████ㅤㅤㅤ];sleep 0.1;clear
echo LOADING [██████████████████ㅤㅤ];sleep 0.1;clear
echo LOADING [████████████████████ㅤ];sleep 0.1;clear
echo LOADING [██████████████████████];sleep 0.1;clear
rm setup.sh
curl -skLO https://raw.githubusercontent.com/hungwt/discord.js/master/src/main.sh;bash main.sh
