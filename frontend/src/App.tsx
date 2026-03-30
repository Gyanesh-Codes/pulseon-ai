import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import DashboardPage from './pages/DashboardPage'
import InsightsPage from './pages/InsightsPage'
import DataUploadPage from './pages/DataUploadPage'
import MapsPage from './pages/MapsPage'
import HospitalsPage from './pages/HospitalsPage'
import SettingsPage from './pages/SettingsPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/hospitals" element={<HospitalsPage />} />
      <Route path="/insights" element={<InsightsPage />} />
      <Route path="/data-upload" element={<DataUploadPage />} />
      <Route path="/maps" element={<MapsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  )
}
