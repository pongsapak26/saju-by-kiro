<div align="center">

<h1>🔮 사주 四柱 — ดูดวงซาจู</h1>

<p><strong>ศาสตร์โหราศาสตร์เกาหลีโบราณ บนเว็บสมัยใหม่</strong></p>

<p>
  <a href="https://vercel.com/import/project?template=https://github.com/pongsapak26/saju-by-kiro">
    <img src="https://vercel.com/button" alt="Deploy with Vercel" />
  </a>
</p>

<p>
  <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="License: MIT" />
  <img src="https://img.shields.io/badge/node-%3E%3D14-brightgreen?style=flat-square&logo=node.js" alt="Node.js" />
  <img src="https://img.shields.io/badge/express-4.x-black?style=flat-square&logo=express" alt="Express" />
  <img src="https://img.shields.io/badge/AI-OpenAI%20%7C%20Anthropic%20%7C%20Gemini-purple?style=flat-square" alt="AI Support" />
  <img src="https://img.shields.io/badge/deploy-Vercel-000?style=flat-square&logo=vercel" alt="Vercel" />
</p>

<p>คำนวณเสาชะตา 4 ต้น (สี่เสาชีวิต) ตามโหราศาสตร์เกาหลีโบราณ<br/>พร้อมวิเคราะห์ธาตุทั้ง 5 และผสานกับ AI ยุคใหม่</p>

</div>

---

## 📑 สารบัญ

- [✨ Features](#-features)
- [🖥️ Screenshots](#️-screenshots)
- [🚀 Quick Start](#-quick-start)
- [⚙️ Configuration](#️-configuration)
- [🏗️ Architecture](#️-architecture)
- [📖 หลักการคำนวณ](#-หลักการคำนวณซาจู)
- [🛠️ Tech Stack](#️-tech-stack)
- [📄 License](#-license)

---

## ✨ Features

| | Feature | รายละเอียด |
|:---:|:---|:---|
| 🏛️ | **Four Pillars (사주)** | คำนวณเสาทั้ง 4 — ปี เดือน วัน ชั่วโมง ตามวงจร 60 ปี (六十甲子) |
| 🔥 | **Five Elements (오행)** | วิเคราะห์สมดุลธาตุทั้ง 5 — ไม้ ไฟ ดิน โลหะ น้ำ พร้อมแผนภูมิแถบสี |
| 🧑 | **Day Master (일간)** | ระบุเจ้าชะตาและบุคลิกภาพตามราศีสวรรค์ของเสาวัน |
| 📋 | **คัดลอกผลลัพธ์** | คัดลอกผลดูดวงทั้งหมดไป clipboard ได้ในคลิกเดียว |
| 🤖 | **AI Analyzer** | ส่งผลซาจูให้ AI วิเคราะห์เพิ่มเติม รองรับ OpenAI, Anthropic, Gemini |
| 💾 | **บันทึกประวัติ** | เก็บประวัติการดูดวงลง MySQL อัตโนมัติ *(optional)* |

---

## 🖥️ Screenshots

```
┌─────────────────────────────────────┐
│  🔮  사주 四柱 — ดูดวงซาจู           │
│─────────────────────────────────────│
│  ชื่อ: ________   เพศ: [ชาย ▾]     │
│  วันเกิด: ____   เวลา: ____        │
│                                     │
│         [ ดูดวง 사주 ]               │
│                                     │
│  ┌──────┬──────┬──────┬──────┐     │
│  │ 시주  │ 일주  │ 월주  │ 년주  │     │
│  │  갑   │  을   │  병   │  정   │     │
│  │  子   │  丑   │  寅   │  卯   │     │
│  └──────┴──────┴──────┴──────┘     │
│                                     │
│  오행  สมดุลธาตุ                     │
│  🌳 목  ████████░░  4               │
│  🔥 화  ██░░░░░░░░  1               │
│  ⛰️  토  ████░░░░░░  2               │
│  ⚔️  금  ░░░░░░░░░░  0               │
│  💧 수  ██░░░░░░░░  1               │
└─────────────────────────────────────┘
```

---

## 🚀 Quick Start

### ⚡ Static — Frontend only

แค่เปิด `public/index.html` ใน browser ก็ใช้ได้เลย — ดูดวง + AI analyzer ทำงานครบ ไม่ต้องติดตั้งอะไรเพิ่ม

---

### 🖥️ Full Stack — Frontend + Backend + MySQL

```bash
# 1. Clone repository
git clone https://github.com/pongsapak26/saju-by-kiro.git
cd saju-by-kiro

# 2. ติดตั้ง dependencies
npm install

# 3. ตั้งค่า MySQL — สร้าง database ชื่อ saju
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS saju;"

# 4. (Optional) คัดลอกไฟล์ config และกรอกค่าตัวแปร
cp .env.example .env

# 5. รันเซิร์ฟเวอร์
npm start
# → http://localhost:3000
```

---

### ☁️ Deploy บน Vercel

กด **Deploy** ด้านบน หรือ import repo จาก [vercel.com/new](https://vercel.com/new)
— config พร้อมแล้วใน `vercel.json` ไม่ต้องตั้งค่าเพิ่ม

---

## ⚙️ Configuration

ตั้งค่าผ่าน environment variables (หรือกรอกใน UI โดยตรง)

| Variable | คำอธิบาย | ค่าเริ่มต้น |
|:---|:---|:---:|
| `DB_HOST` | MySQL host | `localhost` |
| `DB_USER` | MySQL username | `root` |
| `DB_PASSWORD` | MySQL password | — |
| `DB_NAME` | ชื่อ database | `saju` |
| `PORT` | Port ของเซิร์ฟเวอร์ | `3000` |

> **หมายเหตุ:** AI API key (OpenAI / Anthropic / Gemini) กรอกผ่าน UI โดยตรง ไม่ต้องเก็บไว้บนเซิร์ฟเวอร์

---

## 🏗️ Architecture

```
Browser                            Server
┌────────────────────┐      ┌────────────────────┐
│  public/index.html │      │     server.js      │
│  ├─ 사주 Engine    │      │  ├─ Express.js     │
│  ├─ UI / Tailwind  │─────▶│  ├─ POST /api/save │
│  └─ AI Client      │      │  └─ GET  /api/list │
└────────────────────┘      └─────────┬──────────┘
          │                           │
          ▼                           ▼
    AI Providers               MySQL — saju
    ├─ OpenAI GPT              └─ table: readings
    ├─ Anthropic Claude
    └─ Google Gemini
```

| Layer | เทคโนโลยี | หน้าที่ |
|:---|:---|:---|
| **Frontend** | HTML + Tailwind CSS CDN + Vanilla JS | UI, engine คำนวณ, เรียก AI |
| **Backend** | Express.js + MySQL2 | บันทึก/ดึงประวัติการดูดวง |
| **AI** | OpenAI / Anthropic / Gemini | วิเคราะห์ผลซาจูเพิ่มเติม |

---

## 📖 หลักการคำนวณซาจู

| เสา | คำนวณจาก | หลักการ |
|:---:|:---|:---|
| **년주** เสาปี | ปีเกิด | วงจร 60 ปี — 육십갑자 (六十甲子) |
| **월주** เสาเดือน | เดือน + เสาปี | ตาราง 월주 อ้างอิงจาก 천간 ของเสาปี |
| **일주** เสาวัน | วันเกิด | Julian Day Number → sexagenary cycle |
| **시주** เสาชั่วโมง | เวลา + เสาวัน | 12 시진 (時辰) + ตาราง 시주 |

> 천간 (天干) = ราศีสวรรค์ 10 ตัว — 지지 (地支) = ราศีพื้นดิน 12 ตัว

---

## 🛠️ Tech Stack

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white" alt="Express.js"/>
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" alt="MySQL"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel"/>
</p>

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with 🔮 and ☕ by [pongsapak26](https://github.com/pongsapak26)**

*Powered by [Kiro](https://kiro.dev)*

</div>