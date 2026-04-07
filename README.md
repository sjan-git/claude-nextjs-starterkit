# Next.js Starter Kit

Next.js 15, TypeScript, Tailwind CSS v4, shadcn/ui를 기반으로 한 프로덕션 수준의 스타터킷입니다.

## 기술 스택

- **[Next.js v15](https://nextjs.org/)** - App Router, React Server Components
- **[TypeScript](https://www.typescriptlang.org/)** - 타입 안전성
- **[Tailwind CSS v4](https://tailwindcss.com/)** - CSS-first 유틸리티 스타일링 (config 파일 불필요)
- **[shadcn/ui](https://ui.shadcn.com/)** - Radix UI 기반 접근성 높은 컴포넌트
- **[Lucide React](https://lucide.dev/)** - 아이콘 라이브러리
- **[next-themes](https://github.com/pacocoursey/next-themes)** - 다크 모드 지원

## 시작하기

### 설치

```bash
# 의존성 설치
npm install
# 또는
yarn install
# 또는
pnpm install
```

### 환경 변수 설정

```bash
cp .env.local.example .env.local
```

`.env.local` 파일을 열어 필요한 환경 변수를 설정하세요.

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 프로젝트 구조

```
├── app/
│   ├── globals.css       # Tailwind v4 CSS 설정 및 shadcn 테마 변수
│   ├── layout.tsx        # 루트 레이아웃 (폰트, ThemeProvider)
│   └── page.tsx          # 메인 페이지
├── components/
│   ├── ui/               # shadcn/ui 컴포넌트
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx  # 다크/라이트 모드 토글
├── lib/
│   └── utils.ts          # cn() 유틸리티 함수
└── public/               # 정적 파일
```

## 주요 기능

### shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add [컴포넌트명]
```

예시:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add table
npx shadcn@latest add form
```

### 다크 모드

`next-themes`를 통해 시스템 설정 기반 자동 감지 및 수동 전환을 지원합니다.

### 테마 커스터마이징

`app/globals.css`의 `@theme` 블록과 CSS 변수(`:root`, `.dark`)를 수정하여 색상, 폰트, 반경 등을 커스터마이즈할 수 있습니다.

## 스크립트

```bash
npm run dev        # 개발 서버 실행 (Turbopack)
npm run build      # 프로덕션 빌드
npm run start      # 프로덕션 서버 실행
npm run lint       # ESLint 검사
```

## 배포

### Vercel (권장)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### 기타 플랫폼

- **Netlify** - `npm run build` 후 `out/` 폴더 배포
- **Docker** - `Dockerfile` 작성 후 컨테이너 빌드

## 참고 문서

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Tailwind CSS v4 문서](https://tailwindcss.com/docs)
- [shadcn/ui 문서](https://ui.shadcn.com)
- [Radix UI 문서](https://www.radix-ui.com)

## 라이선스

MIT
