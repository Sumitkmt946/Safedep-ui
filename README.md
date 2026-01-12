

# 🔐 SafeDep UI – Open Source Package Security Dashboard  
A clean and modern UI built with **Next.js 15**, designed to visualize open-source package security data using the **SafeDep Insights API** and **Malysis API**.

This project is developed as part of the **SafeDep Internship Assignment**, providing:
- Package metadata  
- Vulnerability details  
- Risk scoring  
- License information  
- Dependency listings  
- GitHub Actions security scanning  

---

## 🚀 Features

### ✅ 1. Search & View Package
Users can view security details for any package using:
```

/p/{ecosystem}/{package}/{version}

```

Example:
```

/p/npm/express/4.18.2
/p/npm/nextjs/15.5.4

````

### ✅ 2. Live Risk Score  
Displays:
- Overall Risk Score  
- Risk Level (Low / Medium / High / Critical)  
- OpenSSF Scorecard  
- Vulnerability Count  
- License Type  

### ✅ 3. Package Tabs  
- **Overview**
- **Vulnerabilities**
- **Versions**
- **License**

### ✅ 4. GitHub Actions Integration  
Every push or pull request automatically scans dependencies using SafeDep Cloud.

### ✅ 5. Modern UI Components  
- Package Header  
- Metrics Section  
- Risk Card  
- Dependency List  
- Vulnerability List  

---

## 🔧 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | **Next.js 15 App Router**, React, Tailwind CSS |
| Backend | SafeDep Insights API, SafeDep Malysis API |
| CI/CD | GitHub Actions (SafeDep Vet) |
| Hosting | Vercel / Localhost |

---

## 🔑 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_TENANT_ID=default-team.yourdomain.safedep.io
NEXT_PUBLIC_API_KEY=sfd_xxxxxxxxxxxxxxxxx
````

---

## 🔌 SafeDep API Integration

All API calls are handled in:

```
/lib/getPackageData.ts
```

APIs used:

```
GET https://{TENANT}/api/v1/insights/package/{ecosystem}/{name}/{version}
GET https://{TENANT}/api/v1/malysis/package/{ecosystem}/{name}/{version}
```

If API fails, the UI falls back to mock-safe values.

---

## ⚙ GitHub Actions Setup

### 1️⃣ Add Secrets

Add in GitHub → Repo → Settings → Secrets → Actions:

```
SAFEDEP_CLOUD_API_KEY=your_api_key
SAFEDEP_CLOUD_TENANT_DOMAIN=default-team.xyz.safedep.io
```

### 2️⃣ Add Workflow

Create:

```
.github/workflows/vet-ci.yml
```

Paste:

```yaml
name: SafeDep Scan

on:
  push:
  pull_request:

jobs:
  safedep:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Run SafeDep Security Scan
        uses: safedep/vet-action@main
        with:
          cloud: true
          cloud-key: ${{ secrets.SAFEDEP_CLOUD_API_KEY }}
          cloud-tenant: ${{ secrets.SAFEDEP_CLOUD_TENANT_DOMAIN }}
```

---

## 🏃 Run Project Locally

```bash
npm install
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## 📁 Project Structure

```
/components
   PackageHeader.tsx
   RiskCard.tsx
   MetricsRow.tsx
   PackageTabs.tsx
   VulnerabilityList.tsx
   DependencyList.tsx
/lib
   getPackageData.ts
/app
   /p/[ecosystem]/[name]/[version]/page.tsx
   layout.tsx
   page.tsx
```

---

## 📸 Screenshots

<img width="1091" height="408" alt="image" src="https://github.com/user-attachments/assets/bc9d3023-f2a7-43b0-8d38-5ea270dcc0bb" />
<img width="1081" height="634" alt="image" src="https://github.com/user-attachments/assets/c0ab0ee3-dd97-4d93-843e-92801e314980" />



---

## 🙌 Made by

**Sumit Kumawat**
For SafeDep Engineering Internship Assignment.

---

