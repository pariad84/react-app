# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React 스터디 노트 (Windows 개발 환경)

`src/lessons/` 폴더에 React 기초 개념별 실습 컴포넌트가 있고, `npm start`로 실행하면 상단 버튼으로 각 레슨을 전환하며 볼 수 있습니다.

### 1. 준비물

- [Node.js LTS](https://nodejs.org/) 설치 (npm이 함께 설치됩니다)
  - 설치 후 PowerShell/명령 프롬프트에서 확인:
    ```powershell
    node -v
    npm -v
    ```
- Git for Windows 설치 (https://git-scm.com/download/win)

### 2. 저장소 클론 & 브랜치 체크아웃

PowerShell에서:

```powershell
git clone https://github.com/pariad84/react-app.git
cd react-app
git checkout claude/react-study-f5i9lk
```

### 3. 의존성 설치 (npm install)

```powershell
npm install
```

- `node_modules` 폴더는 `.gitignore`에 포함되어 있어 저장소에는 올라가지 않습니다. 각자 로컬에서 `npm install`로 직접 생성해야 하며(OS/아키텍처별로 내용이 달라질 수 있어 원래 커밋하지 않는 것이 맞습니다), 이 저장소에는 `package.json`/`package-lock.json`만 커밋되어 있어 `npm install` 한 번으로 동일한 버전의 의존성이 설치됩니다.
- Windows에서 `npm install` 중 스크립트 실행이 막히면, PowerShell 실행 정책 때문일 수 있습니다. 관리자 권한 PowerShell에서:
  ```powershell
  Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
  ```

### 4. 개발 서버 실행

```powershell
npm start
```

브라우저에서 http://localhost:3000 을 열면 됩니다. 코드를 저장하면 자동으로 새로고침됩니다.

### 5. 레슨 목록

| 파일 | 주제 |
| --- | --- |
| `src/lessons/01_Props.jsx` | Props (부모 → 자식 데이터 전달) |
| `src/lessons/02_Counter.jsx` | `useState` (상태 관리) |
| `src/lessons/03_EffectClock.jsx` | `useEffect` (부수 효과 & 클린업) |
| `src/lessons/04_TodoList.jsx` | 리스트 렌더링 & 폼 (제어 컴포넌트) |
| `src/lessons/05_Conditional.jsx` | 조건부 렌더링 |

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
