<![CDATA[<div align="center">

# 사주 四柱 — ดูดวงซาจู

**ศาสตร์โหราศาสตร์เกาหลีโบราณ บนเว็บสมัยใหม่**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/pongsapak26/saju-by-kiro)

</div>

---

## ✨ Features

| | Feature | รายละเอียด |
|---|---|---|
| 🏛️ | **Four Pillars (사주)** | คำนวณเสาทั้ง 4 — ปี เดือน วัน ชั่วโมง ตามวงจร 60 ปี (六十甲子) |
| 🔥 | **Five Elements (오행)** | วิเคราะห์สมดุลธาตุทั้ง 5 — ไม้ ไฟ ดิน โลหะ น้ำ พร้อมแผนภูมิแถบสี |
| 🧑 | **Day Master (일간)** | ระบุเจ้าชะตาและบุคลิกภาพตามราศีสวรรค์ของเสาวัน |
| 📋 | **คัดลอกผลลัพธ์** | คัดลอกผลดูดวงทั้งหมดไป clipboard ได้ในคลิกเดียว |
| 🤖 | **AI Analyzer** | ส่งผลซาจูให้ AI วิเคราะห์เพิ่มเติม รองรับ OpenAI, Anthropic, Gemini |
| 💾 | **บันทึกประวัติ** | เก็บประวัติการดูดวงลง MySQL อัตโนมัติ (optional) |

---

## 🖥️ Screenshots

```
┌─────────────────────────────────────┐
│  사주 四柱 — ดูดวงซาจู               │
│                                     │
│  ชื่อ: ________   เพศ: [ชาย ▾]     │
│  วันเกิด: ____   เวลา: ____        │
│                                     │
│  [ ดูดวง 사주 ]                      │
│                                     │
│  ┌──────┬──────┬──────┬──────┐     │
│  │ 시주  │ 일주  │ 월주  │ 년주  │     │
│  │ 갑    │ 을    │ 병    │ 정    │     │
│  │ 子    │ 丑    │ 寅    │ 卯    │     │
│  └──────┴──────┴──────┴──────┘     │
│                                     │
│  오행 สมดุลธาตุ                      │
│  🌳 목 ████████░░ 4                 │
│  🔥 화 ██░░░░░░░░ 1                 │
│  ⛰️ 토 ████░░░░░░ 2                 │
│  ⚔️ 금 ░░░░░░░░░░ 0                 │
│  💧 수 ██░░░░░░░░ 1                 │
└─────────────────────────────────────┘
```

---

## 🚀 Quick Start

### Static (Frontend only)

แค่เปิด `public/index.html` ใน browser ก็ใช้ได้เลย ดูดวง + AI analyzer ทำงานได้ครบ

### Full Stack (Frontend + Backend + MySQL)

```bash
# Clone
git clone https://github.com/pongsapak26/saju-by-kiro.git
cd saju-by-kiro

# Install
npm install

# ตั้งค่า MySQL (สร้าง database ชื่อ saju)
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS saju;"

# Start
npm start
# → http://localhost:3000
```

### Deploy บน Vercel

กด Deploy ด้านบน หรือ import repo จาก [vercel.com/new](https://vercel.com/new) — config พร้อมแล้วใน `vercel.json`

---

## 🏗️ Architecture

```
Browser                          Server
┌──────────────────┐      ┌──────────────────┐
│  index.html      │      │  server.js       │
│  ├─ Saju Engine  │      │  ├─ Express      │
│  ├─ UI/Tailwind  │─────▶│  ├─ POST /api/   │
│  └─ AI Client    │      │  └─ GET  /api/   │
└──────────────────┘      └────────┬─────────┘
        │                          │
        ▼                          ▼
   AI Providers              MySQL (saju)
   ├─ OpenAI                 └─ readings
   ├─ Anthropic
   └─ Gemini
```

- **Frontend**: Single HTML file + Tailwind CSS CDN + Vanilla JS
- **Backend**: Express.js + MySQL2 (optional สำหรับบันทึกประวัติ)
- **AI**: เรียก API โดยตรงจาก browser (ผู้ใช้กรอก API key เอง)

---

## 📖 หลักการคำนวณซาจู

| เสา | คำนวณจาก | หลักการ |
|-----|---------|---------|
| 년주 เสาปี | ปีเกิด | วงจร 60 ปี (육십갑자) |
| 월주 เสาเดือน | เดือน + เสาปี | ตาราง 월주 อ้างอิงจาก천간ของเสาปี |
| 일주 เสาวัน | วันเกิด | Julian Day Number → sexagenary cycle |
| 시주 เสาชั่วโมง | เวลา + เสาวัน | 12 시진 (時辰) + ตาราง 시주 |

---

## 🛠️ Tech Stack

`HTML` `Tailwind CSS` `JavaScript` `Express.js` `MySQL` `Vercel`

---

## 📄 License

MIT

---

<div align="center">

**Built with 🔮 and ☕ by [pongsapak26](https://github.com/pongsapak26)**

*Powered by [Kiro](https://kiro.dev)*

</div>
]]>