import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'

// Lazy load pages for better performance
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const AllBooks = lazy(() => import('./pages/AllBooks'))
const PastPapers = lazy(() => import('./pages/PastPaper'))
const FileHub = lazy(() => import('./pages/FileHub'))
const Quizzes = lazy(() => import('./pages/Quizzes'))
const Assignment = lazy(() => import('./pages/Assignment'))
const MidtermReviews = lazy(() => import('./pages/MidtermReviews'))
const Blogs = lazy(() => import('./pages/Blogs'))
const ImportantSoftwares = lazy(() => import('./pages/ImportantSoftwares'))
const ExamPractice = lazy(() => import('./pages/ExamPractice'))
const HighlightedHandout = lazy(() => import('./pages/HighlightedHandout'))
const Notes = lazy(() => import('./pages/Notes'))

const LoadingFallback = () => <div style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/vu-handout" element={<AllBooks />} />
              <Route path="/highlighted-handout" element={<HighlightedHandout />} />
              <Route path="/midterm" element={<PastPapers />} />
              <Route path="/final-term" element={<FileHub />} />
              <Route path="/quizzes" element={<Quizzes />} />
              <Route path="/assignment" element={<Assignment />} />
              <Route path="/midterm-reviews" element={<MidtermReviews />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/softwares" element={<ImportantSoftwares />} />
              <Route path="/exam-practice" element={<ExamPractice />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
