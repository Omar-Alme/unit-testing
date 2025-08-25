# Assignment 1 – Unit & Integration Testing

A small React + Vite application built for learning **unit tests** and **integration tests** with **Vitest** and **React Testing Library**.  

The project demonstrates:  
- Unit testing (`CounterButton`, `DeleteButton`)  
- Integration testing (`TodoList` with `TodoItem` + `DeleteButton`)  
- Mocking external calls (`RemoteTodos` with mocked `fetch`)  
- Code coverage measurement with Istanbul  

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the application
```bash
npm run dev
```

### 3. Run tests
```bash
npm run test
```

### 4. Run tests with UI
```bash
npm run test:ui
```

### 5. Run tests and measure code coverage
```bash
npm run coverage
```

## 📚 References
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/)
- [Istanbul](https://istanbul.js.org/)

## ✅ Assignment Requirements

### Krav för **Godkänt**
- [x] **Webbapplikationen fungerar** och använder sig av minst två komponenter  
  → App includes `TodoList`, `TodoItem`, `DeleteButton`, `ApiTodos`  
- [x] **Komponenterna är enhetstestade och integrationstestade**  
  → Unit: `TodoItem`  
  → Integration: `TodoList` with `TodoItem` + `DeleteButton`  
- [x] **Code Coverage är >80%**  
  → Achieved 100% coverage  
- [x] **Git & GitHub har använts**  
- [x] **Projektmappen innehåller en README.md**  
- [x] **Uppgiften lämnas in i tid**  
- [x] **Muntlig presentation är genomförd**  

---

### Krav för **Väl godkänt**
- [x] Alla punkter för godkänt är uppfyllda  
- [x] **Code Coverage är 100%**  
- [x] **Komponenter testas omfattande**  
  → Includes positive cases, negative cases, and edge cases (empty state in `TodoList`)  
- [x] **Mockning används på ett relevant och nödvändigt sätt**  
  → `ApiTodos` component tested with **mocked fetch** to simulate API success and failure  
