# แผนการพัฒนา: ระบบดูดวงซาจู (사주)

## ภาพรวม

พัฒนาระบบดูดวงซาจูแบบ Full-stack ประกอบด้วย Frontend (HTML/Tailwind CSS/JavaScript) และ Backend (Express.js + MySQL) โดย Frontend (`public/index.html`) มีการ implement ไว้แล้วเกือบครบ ต้องเพิ่มเติมบางส่วนและสร้าง Backend ใหม่ทั้งหมด

## Tasks

- [x] 1. สร้างโครงสร้างโปรเจกต์และ Backend พื้นฐาน
  - [x] 1.1 สร้าง `package.json` พร้อม dependencies (express, mysql2)
    - กำหนด name, version, main: "server.js", scripts: { start: "node server.js" }
    - เพิ่ม dependencies: express, mysql2
    - _ข้อกำหนด: 6.1, 6.2, 6.3, 7.1, 7.2, 7.3_

  - [x] 1.2 สร้าง `server.js` พร้อม Express server และ MySQL connection
    - สร้าง Express app ที่ serve static files จาก `public/`
    - เชื่อมต่อ MySQL (host: localhost, user: root, password: 1234, database: saju, port: 3306)
    - สร้างตาราง `readings` อัตโนมัติเมื่อ server เริ่มทำงาน (CREATE TABLE IF NOT EXISTS) ตาม schema ใน design
    - ฟัง port 3000
    - _ข้อกำหนด: 6.1, 7.1_

  - [x] 1.3 สร้าง API endpoint `POST /api/readings`
    - รับ request body: { name, birthDate, birthTime, gender, yearPillar, monthPillar, dayPillar, hourPillar, resultText }
    - INSERT ข้อมูลลงตาราง readings
    - ส่ง response: { id, message: "บันทึกสำเร็จ" } เมื่อสำเร็จ
    - ส่ง HTTP 500 พร้อมข้อความ error เมื่อล้มเหลว
    - _ข้อกำหนด: 6.1, 6.2, 6.3_

  - [x] 1.4 สร้าง API endpoint `GET /api/readings`
    - ดึงข้อมูล readings ทั้งหมดเรียงตาม created_at DESC
    - ส่ง response เป็น JSON array ที่มีทุกฟิลด์
    - ส่ง JSON array ว่าง [] เมื่อไม่มีข้อมูล
    - _ข้อกำหนด: 7.1, 7.2, 7.3_

  - [ ]* 1.5 เขียน unit tests สำหรับ API endpoints
    - ทดสอบ POST /api/readings ด้วยข้อมูลถูกต้อง → ได้ id กลับมา
    - ทดสอบ GET /api/readings → ได้ array กลับมา
    - ทดสอบ GET /api/readings เมื่อไม่มีข้อมูล → ได้ [] กลับมา
    - ทดสอบ POST /api/readings ด้วยข้อมูลไม่ครบ → ได้ error
    - _ข้อกำหนด: 6.1, 6.2, 6.3, 7.1, 7.2, 7.3_

- [x] 2. Checkpoint - ตรวจสอบ Backend ทำงานได้
  - ตรวจสอบว่า tests ทั้งหมดผ่าน ถามผู้ใช้หากมีข้อสงสัย

- [x] 3. ปรับปรุง Saju Engine ให้ถูกต้องตามหลักซาจู
  - [x] 3.1 ตรวจสอบและแก้ไขฟังก์ชัน `getYearPillar(year)` ใน `public/index.html`
    - ตรวจสอบว่าใช้วงจร 60 ปี (육십갑자/六十甲子) ถูกต้อง
    - ตรวจสอบการคำนวณ Heavenly Stem และ Earthly Branch ของเสาปี
    - _ข้อกำหนด: 2.1, 8.1_

  - [x] 3.2 ตรวจสอบและแก้ไขฟังก์ชัน `getMonthPillar(year, month)` ใน `public/index.html`
    - ตรวจสอบว่าใช้ตาราง 월주 (Month Pillar Table) ที่อ้างอิงจาก Heavenly Stem ของเสาปี
    - ตรวจสอบการแมปเดือนตามปฏิทินจันทรคติ
    - _ข้อกำหนด: 2.2, 8.2_

  - [x] 3.3 ตรวจสอบและแก้ไขฟังก์ชัน `getDayPillar(year, month, day)` ใน `public/index.html`
    - ตรวจสอบสูตรคำนวณ Julian Day Number ว่าถูกต้อง
    - ตรวจสอบการแมปกลับเป็น stem/branch
    - _ข้อกำหนด: 2.3, 8.3_

  - [x] 3.4 ตรวจสอบและแก้ไขฟังก์ชัน `getHourPillar(dayStem, hour)` ใน `public/index.html`
    - ตรวจสอบการแบ่ง 12 ช่วงเวลา (시진/時辰) ตามตารางใน design: 자시(23:00-01:00) ถึง 해시(21:00-23:00)
    - ตรวจสอบตาราง 시주 (Hour Pillar Table) ที่อ้างอิงจาก Heavenly Stem ของเสาวัน
    - _ข้อกำหนด: 2.4, 8.4, 8.5_

  - [x] 3.5 ตรวจสอบการแมป Heavenly Stem และ Earthly Branch กับ Five Elements
    - ตรวจสอบ STEM_ELEMENTS: 갑을→목, 병정→화, 무기→토, 경신→금, 임계→수
    - ตรวจสอบ BRANCH_ELEMENTS: 인묘→목, 사오→화, 진술축미→토, 신유→금, 해자→수
    - _ข้อกำหนด: 2.5, 2.6_

  - [ ]* 3.6 เขียน property test สำหรับ Saju Engine
    - **Property 1: Round-trip consistency** — คำนวณเสาทั้ง 4 แล้วแปลงเป็นข้อความ แล้วคำนวณซ้ำ ต้องได้ผลลัพธ์เดียวกัน
    - **ตรวจสอบ: ข้อกำหนด 8.6**

  - [ ]* 3.7 เขียน property test สำหรับ Year Pillar
    - **Property 2: วงจร 60 ปี** — สำหรับทุกปี y, getYearPillar(y) ต้องเท่ากับ getYearPillar(y + 60)
    - **ตรวจสอบ: ข้อกำหนด 8.1**

  - [ ]* 3.8 เขียน property test สำหรับ Hour Pillar time ranges
    - **Property 3: ช่วงเวลา 12 시진** — สำหรับทุกเวลาในช่วงเดียวกัน (เช่น 23:00-00:59) ต้องได้ Earthly Branch เดียวกัน
    - **ตรวจสอบ: ข้อกำหนด 8.4**

  - [ ]* 3.9 เขียน property test สำหรับ Element mapping
    - **Property 4: Element mapping ครบถ้วน** — สำหรับทุก stem (0-9) และ branch (0-11) ต้องได้ธาตุที่เป็นหนึ่งใน 5 ธาตุเสมอ
    - **ตรวจสอบ: ข้อกำหนด 2.5, 2.6**

- [x] 4. Checkpoint - ตรวจสอบ Saju Engine ถูกต้อง
  - ตรวจสอบว่า tests ทั้งหมดผ่าน ถามผู้ใช้หากมีข้อสงสัย

- [x] 5. ปรับปรุง Frontend ให้ครบตามข้อกำหนด
  - [x] 5.1 ปรับปรุงฟอร์มกรอกข้อมูลใน `public/index.html`
    - ตรวจสอบว่า date picker มี max เป็นปีปัจจุบัน (ปัจจุบัน min=1924 มีแล้ว)
    - ตรวจสอบว่า validation แสดงข้อความแจ้งเตือนระบุช่องที่ยังไม่ได้กรอก (มีแล้ว ตรวจสอบความถูกต้อง)
    - _ข้อกำหนด: 1.1, 1.2, 1.3, 1.4, 1.5_

  - [x] 5.2 ปรับปรุงการแสดงผลลัพธ์ใน `public/index.html`
    - ตรวจสอบว่าตาราง Four Pillars แสดง Heavenly Stem, Earthly Branch, ชื่อเกาหลี, และธาตุครบถ้วน
    - ตรวจสอบว่า Day Master แสดงอย่างเด่นชัด
    - ตรวจสอบว่าแผนภูมิสมดุลธาตุแสดงเป็นแถบสี
    - ตรวจสอบว่าผลวิเคราะห์แยกหมวดหมู่ครบ: บุคลิกภาพ, ความรัก, การงาน, สุขภาพ, การเงิน, คำแนะนำ
    - ตรวจสอบว่าแสดงข้อมูลทั้งภาษาเกาหลี (ฮันกึล) และภาษาไทย
    - _ข้อกำหนด: 4.1, 4.2, 4.3, 4.4, 4.5_

  - [x] 5.3 ปรับปรุงฟังก์ชันคัดลอกผลลัพธ์ใน `public/index.html`
    - ตรวจสอบว่าปุ่มคัดลอกมองเห็นชัดเจน
    - ตรวจสอบว่าข้อความที่คัดลอกมีโครงสร้างครบ: ข้อมูลเจ้าชะตา, Four Pillars, สมดุลธาตุ, ผลวิเคราะห์ทุกหมวด
    - ตรวจสอบว่าแสดง "คัดลอกแล้ว" เป็นเวลา 2 วินาที
    - ตรวจสอบว่ามี fallback เมื่อ Clipboard API ไม่รองรับ
    - _ข้อกำหนด: 5.1, 5.2, 5.3, 5.4, 5.5_

- [x] 6. ปรับปรุงส่วน AI Analyzer ให้ครบตามข้อกำหนด
  - [x] 6.1 ปรับปรุงส่วน AI ใน `public/index.html`
    - ตรวจสอบว่ามีช่องเลือก AI Provider (OpenAI, Anthropic, Gemini), ช่อง API Key (password field), ช่อง prompt เพิ่มเติม (optional)
    - ตรวจสอบว่า validation แจ้งเตือนเมื่อไม่กรอก API Key
    - ตรวจสอบว่า validation แจ้งเตือนเมื่อยังไม่ได้ดูดวง
    - ตรวจสอบว่า system prompt กำหนดให้ AI ตอบเป็นภาษาไทยในฐานะนักโหราศาสตร์เกาหลี
    - _ข้อกำหนด: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7_

  - [x] 6.2 ปรับปรุงสถานะ loading และ error handling ของ AI ใน `public/index.html`
    - ตรวจสอบว่าแสดงสถานะ "กำลังวิเคราะห์" และปิดปุ่มส่งชั่วคราว
    - ตรวจสอบว่าแสดงผลลัพธ์ใน AI Response Box
    - ตรวจสอบว่าแสดง error message เมื่อ API ส่ง error กลับมา
    - ตรวจสอบว่าเปิดปุ่มส่งกลับมาเป็นปกติหลังได้ผลลัพธ์หรือ error
    - _ข้อกำหนด: 9.8, 9.9, 9.10, 9.11_

  - [x] 6.3 ตรวจสอบการเรียก API ของแต่ละ AI Provider ใน `public/index.html`
    - ตรวจสอบ OpenAI: POST https://api.openai.com/v1/chat/completions พร้อม Authorization: Bearer {key}
    - ตรวจสอบ Anthropic: POST https://api.anthropic.com/v1/messages พร้อม x-api-key: {key}
    - ตรวจสอบ Gemini: POST https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={key}
    - ตรวจสอบว่าเรียก API จาก browser โดยตรง (client-side)
    - _ข้อกำหนด: 9.12_

- [x] 7. เชื่อมต่อ Frontend กับ Backend
  - [x] 7.1 ตรวจสอบการบันทึกผลดูดวงแบบ non-blocking ใน `public/index.html`
    - ตรวจสอบว่า fetch POST /api/readings ทำงานแบบ fire-and-forget
    - ตรวจสอบว่าผลวิเคราะห์แสดงให้ผู้ใช้โดยไม่ต้องรอการบันทึกเสร็จ
    - ตรวจสอบว่าส่งข้อมูลครบ: name, birthDate, birthTime, gender, yearPillar, monthPillar, dayPillar, hourPillar, resultText
    - _ข้อกำหนด: 6.1, 6.4_

  - [ ]* 7.2 เขียน integration tests สำหรับ Frontend-Backend flow
    - ทดสอบว่าการดูดวงแล้วบันทึกลง DB ทำงานถูกต้อง
    - ทดสอบว่า GET /api/readings ส่งข้อมูลที่บันทึกไว้กลับมาได้
    - _ข้อกำหนด: 6.1, 6.2, 7.1, 7.2_

- [x] 8. Checkpoint สุดท้าย - ตรวจสอบระบบทั้งหมด
  - ตรวจสอบว่า tests ทั้งหมดผ่าน ถามผู้ใช้หากมีข้อสงสัย

## หมายเหตุ

- Tasks ที่มีเครื่องหมาย `*` เป็น optional สามารถข้ามได้เพื่อ MVP ที่เร็วขึ้น
- แต่ละ task อ้างอิงข้อกำหนดเฉพาะเพื่อให้ตรวจสอบย้อนกลับได้
- Checkpoints ช่วยให้ตรวจสอบความถูกต้องเป็นระยะ
- Property tests ตรวจสอบความถูกต้องเชิงคุณสมบัติสากล
- Frontend (`public/index.html`) มี implementation ส่วนใหญ่แล้ว งานหลักคือตรวจสอบและปรับปรุงให้ครบตามข้อกำหนด
