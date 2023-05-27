# 家庭記帳簿

此專案提供使用者紀錄自己的花費，並可依類別篩選瀏覽並進行增刪改查。

## 功能列表

可以註冊自己的帳號，或是選擇用 Facebook 登入

可以瀏覽總花費金額及花費細項，並依不同花費種類篩選紀錄、細項新增、修改及刪除

### 環境建置

Node.js v14.16.0

MongoDB

Mongoose: v5.9.7

Express": v4.17.1

### 安裝

1.開啟終端機(Terminal)cd 到存放專案本機位置並執行:

git clone
https://github.com/sherryylin0719/expense-tracker.git

2.初始

cd expense-tracker //切至專案資料夾

npm install //安裝套件

3.設定環境變數

藉由.env.example 來新增並完成一個.env 檔

4.產生預設使用者及消費資料至 MongoDB

npm run seed //終端顯示 '所有使用者與資料創建完成' 即完成新增資料

5.開啟程式

npm run dev

終端顯示 Express is listening on localhost:3000! 即啟動完成，請至 http://localhost:3000 開始使用程式

## 使用工具

Visual Studio Code - 開發環境

Express - 應用程式架構

Express-Handlebars - 模板引擎

Bootstrap

MongoDB

Mongoose

## 致謝

![Eason](https://github.com/Eason0in/Restaurant-CRUD)
